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

test('sugestões são renováveis, limitadas e reproduzíveis', () => {
  const first = getReferenceSuggestions('anchor', 3, 42);
  assert.deepEqual(first, getReferenceSuggestions('anchor', 3, 42));
  assert.equal(first.length, 3);
  assert.equal(new Set(first.map((item) => item.id)).size, 3);
  assert.notDeepEqual(first.map((item) => item.id), getReferenceSuggestions('anchor', 3, 43).map((item) => item.id));
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
