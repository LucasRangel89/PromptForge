import assert from 'node:assert/strict';
import test from 'node:test';
import { REFERENCE_DATA } from './referenceData';
import {
  ALL_REFERENCES,
  findReferenceByName,
  getReferenceSuggestions,
  normalizeSearch,
  REFERENCE_KIND_META,
  REFERENCE_POOLS,
  withSelectedReferences,
} from './references';
import { EMPTY_DRAFT, buildPrompt } from './promptEngine';
import { PALETTES, SCENARIOS } from './presets';

test('acervo reúne os sequenciadores e as curadorias sem duplicar nomes', () => {
  assert.equal(REFERENCE_DATA.length, 1080);
  assert.equal(ALL_REFERENCES.length, 1124);
  assert.equal(new Set(ALL_REFERENCES.map((item) => item.id)).size, ALL_REFERENCES.length);
  assert.equal(new Set(ALL_REFERENCES.map((item) => `${item.kind}:${normalizeSearch(item.name)}`)).size, ALL_REFERENCES.length);
  assert.ok(ALL_REFERENCES.every((item) => !/^ref-\d+$/.test(item.id)));
  for (const source of [
    'Sequenciador de Memórias',
    'Cinema, TV, Games e HQs',
    'Sequenciador HTML original',
    'Sequenciador HTML v3',
    'Sequenciador HTML v4',
    'Curadoria expandida PromptForge',
  ]) {
    assert.ok(REFERENCE_DATA.some((item) => item.source === source), `Fonte ausente: ${source}`);
  }
  for (const item of ALL_REFERENCES) {
    assert.ok(item.name.trim());
    assert.ok(item.output.trim());
    assert.ok(!item.description.includes('[object Object]'), item.id);
    assert.ok(REFERENCE_KIND_META[item.kind]);
    assert.ok(REFERENCE_POOLS[item.kind].includes(item));
  }
});

test('sugestões oferecem 6 ou 12 itens reproduzíveis e com diversidade', () => {
  const first = getReferenceSuggestions('anchor', 6, 42);
  assert.deepEqual(first, getReferenceSuggestions('anchor', 6, 42));
  assert.equal(first.length, 6);
  assert.equal(new Set(first.map((item) => item.id)).size, 6);
  assert.ok(new Set(first.map((item) => item.source)).size > 1);
  assert.ok(new Set(first.map((item) => item.category)).size > 1);
  assert.notDeepEqual(first.map((item) => item.id), getReferenceSuggestions('anchor', 6, 43).map((item) => item.id));

  const expanded = getReferenceSuggestions('anchor', 12, 42);
  assert.equal(expanded.length, 12);
  assert.deepEqual(expanded.slice(0, 6), first);
});

test('ciclo percorre toda a camada sem repetição antes de renovar', () => {
  const pool = REFERENCE_POOLS.palette;
  const seen: string[] = [];
  for (let cursor = 0; cursor < pool.length; cursor += 12) {
    const page = getReferenceSuggestions('palette', 12, 42, cursor);
    assert.ok(page.length > 0);
    seen.push(...page.map((item) => item.id));
  }
  assert.equal(seen.length, pool.length);
  assert.equal(new Set(seen).size, pool.length);
  assert.deepEqual([...seen].sort(), pool.map((item) => item.id).sort());
  const lastCursor = Math.floor((pool.length - 1) / 12) * 12;
  assert.equal(getReferenceSuggestions('palette', 12, 42, lastCursor).length, pool.length - lastCursor);
});

test('curadoria central prevalece em nomes redundantes sem mudar o preset', () => {
  const reference = findReferenceByName('palette', 'Monocromático');
  assert.equal(reference?.source, 'PromptForge');
  assert.equal(reference?.id, 'core-palette-monocromatico');
  assert.equal(REFERENCE_POOLS.palette.filter((item) => normalizeSearch(item.name) === 'monocromatico').length, 1);
});

test('pacote expandido é íntegro, pesquisável e aplicável ao motor', () => {
  const curated = ALL_REFERENCES.filter((item) => item.source === 'Curadoria expandida PromptForge');
  assert.equal(curated.length, 300);
  const expectedByKind = { anchor: 50, scenario: 60, style: 50, mood: 40, composition: 40, palette: 30, medium: 30, trend: 0, detail: 0 };
  for (const [kind, expected] of Object.entries(expectedByKind)) {
    assert.equal(curated.filter((item) => item.kind === kind).length, expected, kind);
  }

  for (const reference of curated) {
    assert.ok(reference.id.startsWith(`curadoria-${reference.kind}-`));
    assert.ok(reference.category.trim(), reference.id);
    assert.equal(findReferenceByName(reference.kind, reference.name)?.id, reference.id);
    const draft = { ...EMPTY_DRAFT, anchor: 'Figura de teste' };
    switch (reference.kind) {
      case 'anchor': draft.anchor = reference.name; break;
      case 'scenario': draft.scenario = reference.name; break;
      case 'style': draft.style = [reference.name]; break;
      case 'mood': draft.context = reference.name; break;
      case 'composition': draft.composition = reference.name; break;
      case 'palette': {
        draft.palette = reference.name;
        const options = withSelectedReferences(PALETTES, reference.name, 'palette');
        assert.deepEqual(options.at(-1)?.colors, reference.colors);
        break;
      }
      case 'medium': draft.medium = reference.name; break;
      default: assert.fail(`Camada curada inesperada: ${reference.kind}`);
    }
    assert.ok(buildPrompt(draft).includes(reference.output.replace(/[.,;:]+$/, '')), reference.id);
  }
});

test('motor usa a descrição em inglês da referência escolhida', () => {
  const reference = REFERENCE_POOLS.scenario.find((item) => !SCENARIOS.some((option) => option.name === item.name));
  assert.ok(reference);
  const prompt = buildPrompt({ ...EMPTY_DRAFT, scenario: reference.name });
  assert.ok(prompt.includes(reference.output.replace(/[.,;:]+$/, '')));
  assert.equal(findReferenceByName('scenario', reference.name)?.id, reference.id);
});

test('opções escolhidas no acervo continuam visíveis nos controles', () => {
  const reference = REFERENCE_POOLS.scenario.find((item) => !SCENARIOS.some((option) => option.name === item.name));
  assert.ok(reference);
  const options = withSelectedReferences(SCENARIOS, reference.name, 'scenario');
  assert.equal(options.at(-1)?.name, reference.name);
  assert.equal(withSelectedReferences(SCENARIOS, 'Cenário próprio', 'scenario').at(-1)?.output, 'Cenário próprio');
});
