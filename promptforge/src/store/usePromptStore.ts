import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  ACTIONS,
  ART_DIRECTIONS,
  CHARACTER_PRESETS,
  LIGHTINGS,
  RANDOM_PROJECT_NAMES,
  TEXTURES,
} from '@/lib/presets';
import {
  appendVariation,
  buildPrompt,
  DEFAULT_DRAFT,
  EMPTY_DRAFT,
  type AspectRatio,
  type PromptDraft,
} from '@/lib/promptEngine';
import {
  findReferenceById,
  REFERENCE_KIND_META,
  REFERENCE_POOLS,
} from '@/lib/references';

export type SavedPrompt = {
  id: string;
  name: string;
  createdAt: string;
  prompt: string;
  negativePrompt: string;
  draft: PromptDraft;
};

export type Notification = {
  id: number;
  message: string;
  tone: 'success' | 'error' | 'info';
  action?: {
    label: string;
    onClick: () => void;
  };
};

export type DeletedPrompt = {
  item: SavedPrompt;
  index: number;
};

export type ImportSummary = {
  imported: number;
  duplicates: number;
  invalid: number;
  capacity: number;
};

export type NewDraftResult = 'saved' | 'blank' | 'full';
export type LoadPromptResult = 'loaded' | 'missing' | 'full';

export const MAX_SAVED_PROMPTS = 60;

type View = 'studio' | 'library' | 'references';

type PromptState = PromptDraft & {
  step: number;
  view: View;
  lockedSections: number[];
  savedPrompts: SavedPrompt[];
  variations: string[];
  notification: Notification | null;
  guideOpen: boolean;
  setStep: (step: number) => void;
  setView: (view: View) => void;
  updateField: <K extends keyof PromptDraft>(field: K, value: PromptDraft[K]) => void;
  setSubject: (value: string) => void;
  selectAnchor: (name: string) => void;
  applyArtDirection: (name: string) => void;
  applyReference: (id: string) => boolean;
  toggleLock: (section: number) => void;
  surpriseMe: () => void;
  resetDraft: () => void;
  startNewDraft: () => NewDraftResult;
  savePrompt: () => string | null;
  loadPrompt: (id: string) => LoadPromptResult;
  deletePrompt: (id: string) => DeletedPrompt | null;
  restoreDeletedPrompt: (deleted: DeletedPrompt) => boolean;
  importPrompts: (candidates: unknown) => ImportSummary;
  setPromptManual: (value: string) => void;
  resetPrompt: () => void;
  generateVariations: () => void;
  notify: (message: string, tone?: Notification['tone'], action?: Notification['action']) => void;
  dismissNotification: () => void;
  setGuideOpen: (open: boolean) => void;
};

const DRAFT_KEYS = Object.keys(DEFAULT_DRAFT) as (keyof PromptDraft)[];
const createId = () => globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const pick = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];
const pickMany = <T,>(items: T[], count: number) => {
  const available = [...items];
  const selected: T[] = [];
  while (available.length && selected.length < count) {
    selected.push(...available.splice(Math.floor(Math.random() * available.length), 1));
  }
  return selected;
};

function cloneDraft(draft: PromptDraft): PromptDraft {
  return {
    ...draft,
    characters: [...draft.characters],
    style: [...draft.style],
    details: [...draft.details],
  };
}

function snapshot(state: PromptState): PromptDraft {
  return cloneDraft(Object.fromEntries(DRAFT_KEYS.map((key) => [key, state[key]])) as unknown as PromptDraft);
}

function currentPrompt(state: PromptState) {
  return state.promptEdited && state.promptFinal.trim()
    ? state.promptFinal.trim()
    : buildPrompt(state, 'fluid');
}

const ARRAY_LIMITS = { characters: 5, style: 2, details: 4 } as const;
const STRING_LIMITS: Partial<Record<keyof PromptDraft, number>> = {
  projectName: 70,
  anchor: 600,
  customInput: 600,
  action: 600,
  scenario: 600,
  context: 600,
  trend: 600,
  referenceImage: 0,
  referenceImageName: 255,
  medium: 600,
  palette: 600,
  lighting: 600,
  texture: 600,
  composition: 600,
  negativePrompt: 400,
  promptFinal: 50_000,
};

function isPromptDraft(value: unknown): value is PromptDraft {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const candidate = value as Record<string, unknown>;
  const hasValidShape = DRAFT_KEYS.every((key) => {
    const actual = candidate[key];
    const expected = DEFAULT_DRAFT[key];
    if (Array.isArray(expected)) {
      const limit = ARRAY_LIMITS[key as keyof typeof ARRAY_LIMITS];
      return Array.isArray(actual)
        && actual.length <= limit
        && actual.every((item) => typeof item === 'string' && item.length <= 300);
    }
    if (typeof expected === 'number') {
      return typeof actual === 'number' && Number.isFinite(actual) && actual >= 0 && actual <= 100;
    }
    if (typeof expected === 'string') {
      return typeof actual === 'string' && actual.length <= (STRING_LIMITS[key] ?? 600);
    }
    return typeof actual === typeof expected;
  });
  return hasValidShape
    && ['Universal', 'Midjourney', 'DALL·E', 'Flux', 'SDXL'].includes(String(candidate.engine))
    && ['1:1', '4:5', '16:9', '9:16'].includes(String(candidate.aspectRatio));
}

function promptFingerprint(prompt: string, draft: PromptDraft) {
  return JSON.stringify([
    prompt,
    {
      ...cloneDraft(draft),
      referenceImage: '',
      promptFinal: '',
      promptEdited: false,
    },
  ]);
}

export const usePromptStore = create<PromptState>()(
  persist(
    (set, get) => ({
      ...cloneDraft(DEFAULT_DRAFT),
      step: 1,
      view: 'studio',
      lockedSections: [],
      savedPrompts: [],
      variations: [],
      notification: null,
      guideOpen: false,

      setStep: (step) => set({ step }),
      setView: (view) => set({ view }),

      updateField: (field, value) => {
        const shouldClearVariations = field !== 'projectName' && field !== 'promptFinal' && field !== 'promptEdited';
        set({
          [field]: value,
          ...(shouldClearVariations ? { variations: [] } : {}),
        } as Partial<PromptState>);
      },

      setSubject: (value) => set({
        anchor: '',
        customInput: value,
        variations: [],
      }),

      selectAnchor: (name) => set({
        anchor: name,
        customInput: '',
        variations: [],
      }),

      applyArtDirection: (name) => {
        const direction = ART_DIRECTIONS.find((item) => item.name === name);
        if (!direction) return;
        set({
          ...direction.values,
          style: [...direction.values.style],
          variations: [],
        });
      },

      applyReference: (id) => {
        const reference = findReferenceById(id);
        if (!reference) {
          get().notify('Essa referência não foi encontrada no acervo.', 'error');
          return false;
        }

        const state = get();
        if (reference.kind === 'style' && !state.style.includes(reference.name) && state.style.length >= 2) {
          get().notify('Você já escolheu 2 estilos. Remova um deles antes de aplicar outra referência.', 'info');
          return false;
        }
        if (reference.kind === 'detail' && !state.details.includes(reference.name) && state.details.length >= 4) {
          get().notify('Você já escolheu 4 detalhes. Remova um deles antes de aplicar outra referência.', 'info');
          return false;
        }

        const changes: Partial<PromptDraft> = {};
        switch (reference.kind) {
          case 'anchor':
            changes.anchor = reference.name;
            changes.customInput = '';
            break;
          case 'scenario': changes.scenario = reference.name; break;
          case 'style': changes.style = state.style.includes(reference.name) ? state.style : [...state.style, reference.name]; break;
          case 'trend': changes.trend = reference.name; break;
          case 'detail': changes.details = state.details.includes(reference.name) ? state.details : [...state.details, reference.name]; break;
          case 'medium': changes.medium = reference.name; break;
          case 'palette': changes.palette = reference.name; break;
          case 'mood': changes.context = reference.name; break;
          case 'composition': changes.composition = reference.name; break;
        }

        set({ ...changes, view: 'studio', step: REFERENCE_KIND_META[reference.kind].step, variations: [] });
        get().notify(`“${reference.name}” aplicado em ${REFERENCE_KIND_META[reference.kind].label.toLocaleLowerCase('pt-BR')}.`);
        return true;
      },

      toggleLock: (section) => set((state) => ({
        lockedSections: state.lockedSections.includes(section)
          ? state.lockedSections.filter((item) => item !== section)
          : [...state.lockedSections, section],
      })),

      surpriseMe: () => {
        const state = get();
        const next = snapshot(state);

        if (!state.lockedSections.includes(1)) {
          next.anchor = pick(REFERENCE_POOLS.anchor).name;
          next.customInput = '';
          next.projectName = pick(RANDOM_PROJECT_NAMES);
        }
        if (!state.lockedSections.includes(2)) {
          next.scenario = pick(REFERENCE_POOLS.scenario).name;
          next.action = pick(ACTIONS).name;
          next.context = pick(REFERENCE_POOLS.mood).name;
          next.trend = Math.random() > 0.35 ? pick(REFERENCE_POOLS.trend).name : '';
          next.characters = Math.random() > 0.3 ? [pick(CHARACTER_PRESETS).name] : [];
        }
        if (!state.lockedSections.includes(3)) {
          if (Math.random() < 0.55) {
            const direction = pick(ART_DIRECTIONS);
            Object.assign(next, direction.values);
            next.style = [...direction.values.style];
          } else {
            next.style = [pick(REFERENCE_POOLS.style).name];
            next.medium = pick(REFERENCE_POOLS.medium).name;
            next.palette = pick(REFERENCE_POOLS.palette).name;
            next.lighting = pick(LIGHTINGS).name;
            next.texture = pick(TEXTURES).name;
            next.composition = pick(REFERENCE_POOLS.composition).name;
          }
          next.details = pickMany(REFERENCE_POOLS.detail, 2).map((item) => item.name);
        }
        if (!state.lockedSections.includes(4)) {
          next.aspectRatio = pick<AspectRatio>(['1:1', '4:5', '16:9', '9:16']);
          next.detailLevel = 45 + Math.floor(Math.random() * 51);
          next.creativeDistance = 15 + Math.floor(Math.random() * 71);
        }

        set({ ...next, variations: [] });
      },

      resetDraft: () => set({
        ...cloneDraft(EMPTY_DRAFT),
        step: 1,
        view: 'studio',
        variations: [],
      }),

      startNewDraft: () => {
        const hasContent = Boolean(currentPrompt(get()));
        if (hasContent && !get().savePrompt()) return 'full';
        get().resetDraft();
        return hasContent ? 'saved' : 'blank';
      },

      savePrompt: () => {
        const state = get();
        const prompt = currentPrompt(state);
        if (!prompt) return null;

        const draft = snapshot(state);
        const fingerprint = promptFingerprint(prompt, draft);
        const existing = state.savedPrompts.find((item) => promptFingerprint(item.prompt, item.draft) === fingerprint);
        if (existing) return existing.id;
        if (state.savedPrompts.length >= MAX_SAVED_PROMPTS) return null;

        const saved: SavedPrompt = {
          id: createId(),
          name: draft.projectName.trim() || 'Prompt sem título',
          createdAt: new Date().toISOString(),
          prompt,
          negativePrompt: draft.negativePrompt,
          draft: {
            ...draft,
            referenceImage: '',
            promptFinal: prompt,
            promptEdited: true,
          },
        };
        set({ savedPrompts: [saved, ...state.savedPrompts] });
        return saved.id;
      },

      loadPrompt: (id) => {
        const saved = get().savedPrompts.find((item) => item.id === id);
        if (!saved) return 'missing';
        if (currentPrompt(get()) && !get().savePrompt()) return 'full';

        set({
          ...cloneDraft(saved.draft),
          referenceImage: '',
          promptFinal: saved.prompt,
          promptEdited: true,
          step: 1,
          view: 'studio',
          variations: [],
        });
        return 'loaded';
      },

      deletePrompt: (id) => {
        let deleted: DeletedPrompt | null = null;
        set((state) => {
          const index = state.savedPrompts.findIndex((item) => item.id === id);
          if (index === -1) return state;
          deleted = { item: state.savedPrompts[index], index };
          return { savedPrompts: state.savedPrompts.filter((item) => item.id !== id) };
        });
        return deleted;
      },

      restoreDeletedPrompt: (deleted) => {
        let restored = false;
        set((state) => {
          if (state.savedPrompts.length >= MAX_SAVED_PROMPTS || state.savedPrompts.some((item) => item.id === deleted.item.id)) return state;
          const savedPrompts = [...state.savedPrompts];
          savedPrompts.splice(Math.min(deleted.index, savedPrompts.length), 0, deleted.item);
          restored = true;
          return { savedPrompts };
        });
        return restored;
      },

      importPrompts: (candidates) => {
        const summary: ImportSummary = { imported: 0, duplicates: 0, invalid: 0, capacity: 0 };
        if (!Array.isArray(candidates)) return summary;

        const state = get();
        const knownFingerprints = new Set(state.savedPrompts.map((item) => promptFingerprint(item.prompt, item.draft)));
        const imported: SavedPrompt[] = [];

        for (const candidate of candidates) {
          if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) {
            summary.invalid += 1;
            continue;
          }
          const item = candidate as Record<string, unknown>;
          const prompt = typeof item.prompt === 'string' ? item.prompt.trim() : '';
          if (!prompt || prompt.length > 50_000 || !isPromptDraft(item.draft)) {
            summary.invalid += 1;
            continue;
          }

          const draft = cloneDraft(item.draft);
          const fingerprint = promptFingerprint(prompt, draft);
          if (knownFingerprints.has(fingerprint)) {
            summary.duplicates += 1;
            continue;
          }
          if (state.savedPrompts.length + imported.length >= MAX_SAVED_PROMPTS) {
            summary.capacity += 1;
            continue;
          }

          imported.push({
            id: createId(),
            name: typeof item.name === 'string' && item.name.trim()
              ? item.name.trim().slice(0, 70)
              : draft.projectName.trim() || 'Prompt sem título',
            createdAt: typeof item.createdAt === 'string' && !Number.isNaN(Date.parse(item.createdAt)) ? item.createdAt : new Date().toISOString(),
            prompt,
            negativePrompt: draft.negativePrompt,
            draft: { ...draft, referenceImage: '', promptFinal: prompt, promptEdited: true },
          });
          knownFingerprints.add(fingerprint);
        }

        summary.imported = imported.length;
        if (imported.length) set({ savedPrompts: [...imported, ...state.savedPrompts] });
        return summary;
      },

      setPromptManual: (value) => set({ promptFinal: value, promptEdited: true, variations: [] }),
      resetPrompt: () => set({ promptFinal: '', promptEdited: false, variations: [] }),

      generateVariations: () => {
        const prompt = currentPrompt(get());
        if (!prompt) {
          set({ variations: [] });
          return;
        }
        const additions = [
          'Shift to a closer, more intimate framing while preserving the subject identity and visual language.',
          'Open the scene into a broader composition with deeper environmental storytelling and a stronger sense of scale.',
          'Introduce one restrained surreal detail and a more experimental light transition, keeping the core scene coherent.',
        ];
        set({ variations: additions.map((addition) => appendVariation(prompt, addition)) });
      },

      notify: (message, tone = 'success', action) => set({ notification: { id: Date.now(), message, tone, action } }),
      dismissNotification: () => set({ notification: null }),
      setGuideOpen: (guideOpen) => set({ guideOpen }),
    }),
    {
      name: 'promptforge-studio-v2',
      version: 1,
      partialize: (state) => ({
        ...snapshot(state),
        referenceImage: '',
        referenceImageName: '',
        savedPrompts: state.savedPrompts,
        lockedSections: state.lockedSections,
        step: state.step,
      }),
    },
  ),
);
