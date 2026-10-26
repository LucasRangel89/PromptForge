import { create } from 'zustand';
import { generateSceneNarrative, refineSceneNarrative } from '@/services/aiService';

export type SavedCombination = {
  id: string;
  anchor: string;
  customInput: string;
  scenario: string;
  sceneDescription: string;
};

export type PromptState = {
  step: number;
  anchor: string;
  customInput: string;
  tags: string[];
  scenario: string;
  context: string;
  trend: string;
  characters: string[];
  referenceImage: string;
  sceneDescription: string;
  isGeneratingScene: boolean;
  creativeDistance: number;
  savedCombinations: SavedCombination[];
  style: string[];
  medium: string;
  palette: string;
  lighting: string;
  texture: string;
  composition: string;
  promptFinal: string;
  resolution: string;
  variations: number;
  
  setStep: (step: number) => void;
  updateField: <K extends keyof PromptState>(field: K, value: PromptState[K]) => void;
  generateScene: () => Promise<void>;
  refineScene: () => Promise<void>;
  saveCombination: () => void;
  generatePrompt: () => void;
};

export const usePromptStore = create<PromptState>((set, get) => ({
  step: 1,
  anchor: '',
  customInput: '',
  tags: [],
  scenario: '',
  context: '',
  trend: '',
  characters: [],
  referenceImage: '',
  sceneDescription: '',
  isGeneratingScene: false,
  creativeDistance: 50,
  savedCombinations: [],
  style: [],
  medium: '',
  palette: '',
  lighting: '',
  texture: '',
  composition: '',
  promptFinal: '',
  resolution: '1024x1024',
  variations: 3,

  setStep: (step) => set({ step }),
  updateField: (field, value) => {
    set({ [field]: value });
  },
  generateScene: async () => {
    set({ isGeneratingScene: true });
    try {
      const s = get();
      const description = await generateSceneNarrative({
        anchor: s.anchor,
        customInput: s.customInput,
        characters: s.characters,
        scenario: s.scenario,
        context: s.context,
        trend: s.trend,
        creativeDistance: s.creativeDistance
      });
      set({ sceneDescription: description });
    } catch (err) {
      console.error('Error generating scene:', err);
      alert(err instanceof Error ? err.message : 'Erro ao gerar cena da IA. Veja o console.');
    } finally {
      set({ isGeneratingScene: false });
    }
  },
  refineScene: async () => {
    const s = get();
    if (!s.sceneDescription) return;
    set({ isGeneratingScene: true });
    try {
      const description = await refineSceneNarrative(s.sceneDescription, s.creativeDistance);
      set({ sceneDescription: description });
    } catch (err) {
      console.error('Error refining scene:', err);
      alert(err instanceof Error ? err.message : 'Erro ao refinar cena da IA. Veja o console.');
    } finally {
      set({ isGeneratingScene: false });
    }
  },
  saveCombination: () => {
    const s = get();
    if ((!s.anchor && !s.customInput) || !s.scenario || !s.sceneDescription) {
      alert('Você precisa de âncora, cenário e narrativa gerada para salvar.');
      return;
    }
    const newCombo: SavedCombination = {
      id: Date.now().toString(),
      anchor: s.anchor,
      customInput: s.customInput,
      scenario: s.scenario,
      sceneDescription: s.sceneDescription,
    };
    set({ savedCombinations: [...s.savedCombinations, newCombo] });
  },
  generatePrompt: () => {
    const s = get();
    // Use user edited scene narrative as the visual core, otherwise fallback mapping 
    const base = s.sceneDescription || [
      s.anchor || s.customInput || 'A subject',
      s.scenario && `in ${s.scenario}`,
      s.characters.length > 0 && `featuring ${s.characters.join(', ')}`,
      s.trend && `inspired by ${s.trend} aesthetics`,
      s.context && `evoking ${s.context}`,
    ].filter(Boolean).join(', ');

    const technical = [
      s.style.length > 0 && `rendered in ${s.style.join(' and ')} style`,
      s.medium && `using ${s.medium}`,
      s.lighting && `with ${s.lighting} lighting`,
      s.texture && `featuring ${s.texture}`,
      s.composition && `${s.composition} composition`,
      s.palette && `${s.palette} color palette`,
      'highly detailed', '8k resolution', 'masterpiece'
    ].filter(Boolean).join(', ');

    set({ promptFinal: `${base}, ${technical}` });
  }
}));
