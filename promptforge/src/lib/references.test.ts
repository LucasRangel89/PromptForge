import assert from 'node:assert/strict';
import test from 'node:test';
import { REFERENCE_DATA } from './referenceData';
import {
  ALL_REFERENCES,
  findReferenceByName,
  getReferenceSuggestions,
  REFERENCE_KIND_META,
  REFERENCE_POOLS,
  withSelectedReferences,
} from './references';
import { EMPTY_DRAFT, buildPrompt } from './promptEngine';
import { SCENARIOS } from './presets';

test('acervo reúne os sequenciadores deduplicados e a curadoria existente', () => {
  assert.equal(REFERENCE_DATA.length, 780);
  assert.equal(ALL_REFERENCES.length, 842);
  assert.equal(new Set(ALL_REFERENCES.map((item) => item.id)).size, ALL_REFERENCES.length);
  for (const source of [
    'Sequenciador de Memórias',
    'Cinema, TV, Games e HQs',
    'Sequenciador HTML original',
    'Sequenciador HTML v3',
    'Sequenciador HTML v4',
  ]) {
    assert.ok(REFERENCE_DATA.some((item) => item.source === source), `Fonte ausente: ${source}`);
  }
  for (const item of ALL_REFERENCES) {
    assert.ok(item.name.trim());
    assert.ok(item.output.trim());
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
  assert.equal(getReferenceSuggestions('palette', 12, 42, 36).length, 6);
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
