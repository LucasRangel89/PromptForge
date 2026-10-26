import {
  ANCHORS,
  COMPOSITIONS,
  DETAILS,
  MEDIUMS,
  MOODS,
  PALETTES,
  SCENARIOS,
  STYLES,
  TRENDS,
  type PresetOption,
} from './presets';
import { REFERENCE_DATA } from './referenceData';
import type { ReferenceItem, ReferenceKind } from './referenceTypes';

export const REFERENCE_KIND_META: Record<ReferenceKind, { label: string; plural: string; step: number }> = {
  anchor: { label: 'Âncora', plural: 'Âncoras e personagens', step: 1 },
  scenario: { label: 'Cenário', plural: 'Cenários', step: 2 },
  style: { label: 'Estilo', plural: 'Estilos e assinaturas', step: 3 },
  trend: { label: 'Reviravolta', plural: 'Reviravoltas', step: 2 },
  detail: { label: 'Detalhe', plural: 'Detalhes narrativos', step: 3 },
  medium: { label: 'Formato', plural: 'Formatos e mídias', step: 3 },
  palette: { label: 'Paleta', plural: 'Paletas', step: 3 },
  mood: { label: 'Atmosfera', plural: 'Atmosferas', step: 2 },
  composition: { label: 'Câmera', plural: 'Câmeras e enquadramentos', step: 3 },
};

const CORE_GROUPS: Record<ReferenceKind, PresetOption[]> = {
  anchor: ANCHORS,
  scenario: SCENARIOS,
  style: STYLES,
  trend: TRENDS,
  detail: DETAILS,
  medium: MEDIUMS,
  palette: PALETTES,
  mood: MOODS,
  composition: COMPOSITIONS,
};

export const normalizeSearch = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('pt-BR')
  .trim();

const slugify = (value: string) => normalizeSearch(value).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const CORE_REFERENCES: ReferenceItem[] = (Object.keys(CORE_GROUPS) as ReferenceKind[]).flatMap((kind) => (
  CORE_GROUPS[kind].map((item) => ({
    id: `core-${kind}-${slugify(item.name)}`,
    kind,
    name: item.name,
    description: item.description,
    output: item.output,
    category: 'Curadoria PromptForge',
    era: '',
    source: 'PromptForge',
    colors: item.colors,
  }))
));

export const ALL_REFERENCES: ReferenceItem[] = [...CORE_REFERENCES, ...REFERENCE_DATA];

export const REFERENCE_POOLS = ALL_REFERENCES.reduce<Record<ReferenceKind, ReferenceItem[]>>((pools, item) => {
  pools[item.kind].push(item);
  return pools;
}, {
  anchor: [], scenario: [], style: [], trend: [], detail: [], medium: [], palette: [], mood: [], composition: [],
});

const REFERENCE_BY_ID = new Map(ALL_REFERENCES.map((item) => [item.id, item]));
const REFERENCE_BY_NAME = new Map(ALL_REFERENCES.map((item) => [`${item.kind}:${normalizeSearch(item.name)}`, item]));

export function findReferenceById(id: string) {
  return REFERENCE_BY_ID.get(id);
}

export function findReferenceByName(kind: ReferenceKind, name: string) {
  return REFERENCE_BY_NAME.get(`${kind}:${normalizeSearch(name)}`);
}

function shuffleWithSeed<T>(items: T[], seed: number) {
  const shuffled = [...items];
  let state = (seed + 1) >>> 0;
  const random = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
}

export function shuffleReferences(items: ReferenceItem[], seed: number) {
  return shuffleWithSeed(items, seed);
}

function diverseReferenceDeck(items: ReferenceItem[], seed: number) {
  const groups = new Map<string, ReferenceItem[]>();
  for (const item of shuffleWithSeed(items, seed)) {
    const key = `${item.source}\n${item.category}`;
    const group = groups.get(key) ?? [];
    group.push(item);
    groups.set(key, group);
  }

  const keys = shuffleWithSeed([...groups.keys()], seed + 0x9e3779b9);
  const deck: ReferenceItem[] = [];
  while (deck.length < items.length) {
    for (const key of keys) {
      const next = groups.get(key)?.shift();
      if (next) deck.push(next);
    }
  }
  return deck;
}

export function getReferenceSuggestions(kind: ReferenceKind, count = 6, seed = 0, cursor = 0) {
  const pool = REFERENCE_POOLS[kind];
  const start = Math.min(Math.max(0, Math.floor(cursor)), pool.length);
  const size = Math.max(0, Math.floor(count));
  return diverseReferenceDeck(pool, seed).slice(start, start + size);
}

export function withSelectedReferences(options: PresetOption[], values: string | string[], kind: ReferenceKind): PresetOption[] {
  const selected = Array.isArray(values) ? values : [values];
  return selected.reduce<PresetOption[]>((current, value) => {
    if (!value || current.some((option) => option.name === value)) return current;
    const reference = findReferenceByName(kind, value);
    return [...current, reference ?? { name: value, description: 'Opção personalizada.', output: value }];
  }, options);
}

export type { ReferenceItem, ReferenceKind } from './referenceTypes';
