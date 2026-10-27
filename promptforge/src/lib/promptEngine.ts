import {
  ACTIONS,
  ANCHORS,
  CHARACTER_PRESETS,
  COMPOSITIONS,
  DETAILS,
  LIGHTINGS,
  MEDIUMS,
  MOODS,
  PALETTES,
  SCENARIOS,
  STYLES,
  TEXTURES,
  TRENDS,
  WEATHERS,
  type PresetOption,
} from './presets';
import { findReferenceByName } from './references';
import type { ReferenceKind } from './referenceTypes';

export type Engine = 'Universal' | 'Midjourney' | 'DALL·E' | 'Flux' | 'SDXL';
export type AspectRatio = '1:1' | '4:5' | '16:9' | '9:16';
export type PromptMode = 'fluid' | 'compact';

export interface PromptDraft {
  projectName: string;
  anchor: string;
  customInput: string;
  action: string;
  weather: string;
  scenario: string;
  context: string;
  trend: string;
  characters: string[];
  referenceImage: string;
  referenceImageName: string;
  style: string[];
  medium: string;
  palette: string;
  lighting: string;
  texture: string;
  composition: string;
  details: string[];
  aspectRatio: AspectRatio;
  engine: Engine;
  detailLevel: number;
  creativeDistance: number;
  negativePrompt: string;
  promptFinal: string;
  promptEdited: boolean;
}

export const DEFAULT_DRAFT: PromptDraft = {
  projectName: 'Neve sobre Buenos Aires',
  anchor: 'O Eternauta',
  customInput: '',
  action: 'Em vigilância',
  weather: '',
  scenario: 'Buenos Aires sob neve',
  context: 'Tensão silenciosa',
  trend: '',
  characters: ['Grupo de sobreviventes'],
  referenceImage: '',
  referenceImageName: '',
  style: ['Cinematográfico'],
  medium: 'Fotografia 35mm',
  palette: 'Madrugada azul',
  lighting: 'Luz difusa',
  texture: 'Grão analógico',
  composition: 'Plano aberto',
  details: ['Neve luminosa'],
  aspectRatio: '16:9',
  engine: 'Universal',
  detailLevel: 72,
  creativeDistance: 32,
  negativePrompt: 'exposed face, heroic armor, text, watermark, distorted anatomy',
  promptFinal: '',
  promptEdited: false,
};

export const EMPTY_DRAFT: PromptDraft = {
  projectName: 'Prompt sem título',
  anchor: '',
  customInput: '',
  action: '',
  weather: '',
  scenario: '',
  context: '',
  trend: '',
  characters: [],
  referenceImage: '',
  referenceImageName: '',
  style: [],
  medium: '',
  palette: '',
  lighting: '',
  texture: '',
  composition: '',
  details: [],
  aspectRatio: '1:1',
  engine: 'Universal',
  detailLevel: 60,
  creativeDistance: 40,
  negativePrompt: '',
  promptFinal: '',
  promptEdited: false,
};

const clean = (value: string) => value.trim().replace(/[\s\n]+/g, ' ').replace(/[.,;:]+$/, '');
const unique = (values: string[]) => [...new Set(values.filter(Boolean))];

function resolve(value: string, options: PresetOption[], kind?: ReferenceKind) {
  if (!value.trim()) return '';
  return options.find((option) => option.name === value)?.output
    ?? (kind ? findReferenceByName(kind, value)?.output : undefined)
    ?? clean(value);
}

function resolveMany(values: string[], options: PresetOption[], kind?: ReferenceKind) {
  return unique(values.map((value) => resolve(value, options, kind)).map(clean));
}

function sentence(values: string[]) {
  const filtered = unique(values.map(clean));
  if (!filtered.length) return '';
  return `${filtered.join(', ')}.`;
}

function addEngineParameters(prompt: string, draft: PromptDraft) {
  const ratio = draft.aspectRatio;
  switch (draft.engine) {
    case 'Midjourney':
      return `${prompt} --ar ${ratio} --stylize ${Math.round(draft.creativeDistance * 10)}`;
    case 'SDXL':
      return `${prompt} Aspect ratio ${ratio}, coherent anatomy, clean visual hierarchy.`;
    case 'DALL·E':
      return `${prompt} Compose the final image in a ${ratio} aspect ratio.`;
    case 'Flux':
      return `${prompt} Frame the scene for a ${ratio} aspect ratio, preserving natural materials and spatial coherence.`;
    default:
      return `${prompt} Aspect ratio ${ratio}.`;
  }
}

export function buildPrompt(draft: PromptDraft, mode: PromptMode = 'fluid') {
  const subject = draft.anchor ? resolve(draft.anchor, ANCHORS, 'anchor') : clean(draft.customInput);
  const action = resolve(draft.action, ACTIONS, 'action');
  const weather = resolve(draft.weather, WEATHERS, 'weather');
  const scenario = resolve(draft.scenario, SCENARIOS, 'scenario');
  const mood = resolve(draft.context, MOODS, 'mood');
  const trend = resolve(draft.trend, TRENDS, 'trend');
  const characters = resolveMany(draft.characters, CHARACTER_PRESETS);
  const styles = resolveMany(draft.style, STYLES, 'style');
  const medium = resolve(draft.medium, MEDIUMS, 'medium');
  const palette = resolve(draft.palette, PALETTES, 'palette');
  const lighting = resolve(draft.lighting, LIGHTINGS, 'lighting');
  const texture = resolve(draft.texture, TEXTURES, 'texture');
  const composition = resolve(draft.composition, COMPOSITIONS, 'composition');
  const details = resolveMany(draft.details, DETAILS, 'detail');

  if (!subject && !scenario && !styles.length && !medium) return '';

  const quality = draft.detailLevel >= 78
    ? 'intricate, highly resolved details with controlled microtexture'
    : draft.detailLevel >= 45
      ? 'well-resolved details and clear focal hierarchy'
      : 'restrained detail and a clean, economical visual hierarchy';
  const interpretation = draft.creativeDistance >= 75
    ? 'a bold, unexpected creative interpretation'
    : draft.creativeDistance >= 45
      ? 'a balanced creative interpretation'
      : 'a faithful, coherent interpretation';

  if (mode === 'compact') {
    const fragments = unique([
      ...styles,
      medium,
      subject,
      action,
      ...characters,
      scenario && `set in ${scenario}`,
      weather,
      trend,
      mood,
      composition,
      lighting,
      palette,
      texture,
      ...details,
      quality,
      interpretation,
    ].map(clean));
    return addEngineParameters(fragments.join(', '), draft);
  }

  const sentences: string[] = [];
  const opening = sentence([...styles, medium]);
  if (opening) sentences.push(opening);

  const subjectSentence = sentence([
    subject,
    action,
    ...characters,
    scenario && `set in ${scenario}`,
    weather,
    trend,
  ]);
  if (subjectSentence) sentences.push(subjectSentence);

  const visualSentence = sentence([composition, lighting, palette, mood]);
  if (visualSentence) sentences.push(visualSentence);

  const surfaceSentence = sentence([texture, ...details, quality, interpretation]);
  if (surfaceSentence) sentences.push(surfaceSentence);

  if (draft.referenceImageName) {
    sentences.push('Use the separately supplied reference image for visual guidance while preserving the scene described above.');
  }

  return addEngineParameters(sentences.join(' '), draft);
}

export function calculatePromptScore(draft: PromptDraft) {
  let score = 0;
  if (draft.anchor || draft.customInput.trim()) score += 25;
  if (draft.scenario || draft.action || draft.weather) score += 15;
  if (draft.context || draft.characters.length) score += 10;
  if (draft.style.length || draft.medium) score += 15;
  if (draft.composition) score += 10;
  if (draft.lighting) score += 10;
  if (draft.palette) score += 5;
  if (draft.texture || draft.details.length) score += 5;
  if (draft.aspectRatio) score += 5;
  return Math.min(score, 100);
}

export function appendVariation(prompt: string, addition: string) {
  const parameterIndex = prompt.indexOf(' --');
  if (parameterIndex === -1) return `${prompt} ${addition}`;
  return `${prompt.slice(0, parameterIndex)} ${addition}${prompt.slice(parameterIndex)}`;
}

export function draftForExport(draft: PromptDraft) {
  return {
    projectName: draft.projectName,
    anchor: draft.anchor,
    customInput: draft.customInput,
    action: draft.action,
    weather: draft.weather,
    scenario: draft.scenario,
    context: draft.context,
    trend: draft.trend,
    characters: draft.characters,
    referenceImageName: draft.referenceImageName || null,
    style: draft.style,
    medium: draft.medium,
    palette: draft.palette,
    lighting: draft.lighting,
    texture: draft.texture,
    composition: draft.composition,
    details: draft.details,
    aspectRatio: draft.aspectRatio,
    engine: draft.engine,
    detailLevel: draft.detailLevel,
    creativeDistance: draft.creativeDistance,
    negativePrompt: draft.negativePrompt,
  };
}
