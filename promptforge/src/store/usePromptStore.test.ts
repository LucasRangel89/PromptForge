import assert from 'node:assert/strict';
import test from 'node:test';

const values = new Map<string, string>();
Object.defineProperty(globalThis, 'window', { value: globalThis });
Object.defineProperty(globalThis, 'localStorage', {
  value: {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
    removeItem: (key: string) => values.delete(key),
    clear: () => values.clear(),
  },
});

const { usePromptStore } = await import('./usePromptStore');
const { EMPTY_DRAFT, buildPrompt } = await import('@/lib/promptEngine');
const { REFERENCE_POOLS, findReferenceByName } = await import('@/lib/references');

function resetStore() {
  usePromptStore.setState({
    ...EMPTY_DRAFT,
    characters: [],
    style: [],
    details: [],
    savedPrompts: [],
    lockedSections: [],
    variations: [],
    step: 1,
  });
}

test('salva e restaura uma combinação completa', () => {
  resetStore();
  const store = usePromptStore.getState();
  store.setSubject('Um cartógrafo de nuvens');
  store.updateField('scenario', 'Um observatório flutuante');
  store.updateField('projectName', 'Mapas do céu');

  const id = usePromptStore.getState().savePrompt();
  assert.ok(id);
  assert.equal(usePromptStore.getState().savedPrompts.length, 1);

  usePromptStore.getState().resetDraft();
  assert.equal(usePromptStore.getState().customInput, '');
  usePromptStore.getState().loadPrompt(id);
  assert.equal(usePromptStore.getState().projectName, 'Mapas do céu');
  assert.equal(usePromptStore.getState().customInput, 'Um cartógrafo de nuvens');
  assert.equal(usePromptStore.getState().promptEdited, true);
});

test('aleatorização preserva as seções travadas', () => {
  resetStore();
  usePromptStore.getState().setSubject('Conceito que deve permanecer');
  usePromptStore.getState().toggleLock(1);
  usePromptStore.getState().surpriseMe();

  assert.equal(usePromptStore.getState().customInput, 'Conceito que deve permanecer');
  assert.equal(usePromptStore.getState().anchor, '');
  assert.notEqual(usePromptStore.getState().scenario, '');
});

test('novo rascunho preserva automaticamente o trabalho anterior', () => {
  resetStore();
  usePromptStore.getState().setSubject('Uma ideia que não pode se perder');
  const savedPrevious = usePromptStore.getState().startNewDraft();

  assert.equal(savedPrevious, 'saved');
  assert.equal(usePromptStore.getState().savedPrompts.length, 1);
  assert.equal(usePromptStore.getState().customInput, '');
  assert.equal(usePromptStore.getState().view, 'studio');
});

test('importa backups válidos sem duplicar prompts', () => {
  resetStore();
  usePromptStore.getState().setSubject('Um arquivo de sonhos');
  usePromptStore.getState().savePrompt();
  const backup = usePromptStore.getState().savedPrompts;

  resetStore();
  const imported = usePromptStore.getState().importPrompts(backup);
  const duplicate = usePromptStore.getState().importPrompts(backup);
  assert.equal(imported.imported, 1);
  assert.equal(duplicate.duplicates, 1);
  assert.equal(usePromptStore.getState().savedPrompts.length, 1);
  assert.deepEqual(usePromptStore.getState().importPrompts({ invalid: true }), { imported: 0, duplicates: 0, invalid: 0, capacity: 0 });
});

test('edições manuais podem voltar à montagem automática', () => {
  resetStore();
  usePromptStore.getState().setSubject('Um jardim no inverno');
  usePromptStore.getState().setPromptManual('Minha versão editada');
  assert.equal(usePromptStore.getState().promptFinal, 'Minha versão editada');

  usePromptStore.getState().resetPrompt();
  assert.equal(usePromptStore.getState().promptEdited, false);
  assert.match(usePromptStore.getState().customInput, /jardim/);
});

test('alterar campos não descarta uma edição manual ativa', () => {
  resetStore();
  usePromptStore.getState().setSubject('Uma cidade subterrânea');
  usePromptStore.getState().setPromptManual('Texto editado que deve permanecer');
  usePromptStore.getState().updateField('scenario', 'Uma estação sob o gelo');

  assert.equal(usePromptStore.getState().promptFinal, 'Texto editado que deve permanecer');
  assert.equal(usePromptStore.getState().promptEdited, true);
  usePromptStore.getState().resetPrompt();
  assert.match(buildPrompt(usePromptStore.getState()), /Uma estação sob o gelo/);
});

test('abrir outro prompt preserva antes o rascunho atual', () => {
  resetStore();
  usePromptStore.getState().setSubject('Versão já salva');
  const id = usePromptStore.getState().savePrompt();
  assert.ok(id);
  usePromptStore.getState().setSubject('Rascunho que ainda não foi salvo');

  const result = usePromptStore.getState().loadPrompt(id);
  assert.equal(result, 'loaded');
  assert.equal(usePromptStore.getState().customInput, 'Versão já salva');
  assert.equal(usePromptStore.getState().savedPrompts.length, 2);
  assert.ok(usePromptStore.getState().savedPrompts.some((item) => item.draft.customInput === 'Rascunho que ainda não foi salvo'));
});

test('biblioteca cheia não descarta itens nem abre outro rascunho', () => {
  resetStore();
  usePromptStore.getState().setSubject('Base');
  usePromptStore.getState().savePrompt();
  const base = usePromptStore.getState().savedPrompts[0];
  resetStore();
  const candidates = Array.from({ length: 61 }, (_, index) => ({
    ...base,
    prompt: `Prompt numerado ${index}`,
    draft: { ...base.draft, projectName: `Projeto ${index}`, promptFinal: `Prompt numerado ${index}` },
  }));

  const summary = usePromptStore.getState().importPrompts(candidates);
  assert.deepEqual(summary, { imported: 60, duplicates: 0, invalid: 0, capacity: 1 });
  const ids = usePromptStore.getState().savedPrompts.map((item) => item.id);
  usePromptStore.getState().setSubject('Trabalho que não pode desaparecer');

  assert.equal(usePromptStore.getState().savePrompt(), null);
  assert.deepEqual(usePromptStore.getState().savedPrompts.map((item) => item.id), ids);
  assert.equal(usePromptStore.getState().startNewDraft(), 'full');
  assert.equal(usePromptStore.getState().customInput, 'Trabalho que não pode desaparecer');
  assert.equal(usePromptStore.getState().savedPrompts.length, 60);
});

test('excluir e desfazer restaura o prompt na posição original', () => {
  resetStore();
  for (const subject of ['Primeiro', 'Segundo', 'Terceiro']) {
    usePromptStore.getState().setSubject(subject);
    usePromptStore.getState().savePrompt();
  }
  const ids = usePromptStore.getState().savedPrompts.map((item) => item.id);
  const deleted = usePromptStore.getState().deletePrompt(ids[1]);
  assert.ok(deleted);
  assert.equal(usePromptStore.getState().savedPrompts.length, 2);

  assert.equal(usePromptStore.getState().restoreDeletedPrompt(deleted), true);
  assert.deepEqual(usePromptStore.getState().savedPrompts.map((item) => item.id), ids);
  assert.equal(usePromptStore.getState().restoreDeletedPrompt(deleted), false);
});

test('importação rejeita listas fora dos limites sem afetar o acervo', () => {
  resetStore();
  usePromptStore.getState().setSubject('Base válida');
  usePromptStore.getState().savePrompt();
  const base = usePromptStore.getState().savedPrompts[0];
  const invalid = {
    ...base,
    prompt: 'Prompt com lista excessiva',
    draft: { ...base.draft, characters: ['1', '2', '3', '4', '5', '6'] },
  };

  const result = usePromptStore.getState().importPrompts([invalid]);
  assert.deepEqual(result, { imported: 0, duplicates: 0, invalid: 1, capacity: 0 });
  assert.equal(usePromptStore.getState().savedPrompts.length, 1);
});

test('mesmo prompt com direção ou negativo diferentes pode ser salvo separadamente', () => {
  resetStore();
  usePromptStore.getState().setSubject('Mesma ideia');
  usePromptStore.getState().savePrompt();
  usePromptStore.getState().updateField('negativePrompt', 'texto, baixa definição');
  usePromptStore.getState().savePrompt();

  assert.equal(usePromptStore.getState().savedPrompts.length, 2);
  assert.equal(usePromptStore.getState().savedPrompts[0].prompt, usePromptStore.getState().savedPrompts[1].prompt);
  assert.notEqual(usePromptStore.getState().savedPrompts[0].negativePrompt, usePromptStore.getState().savedPrompts[1].negativePrompt);
});

test('aplicar referência usa a camada certa e preserva edição manual', () => {
  resetStore();
  usePromptStore.getState().setPromptManual('Edição que deve continuar');
  const reference = REFERENCE_POOLS.scenario[0];
  const applied = usePromptStore.getState().applyReference(reference.id);

  assert.equal(applied, true);
  assert.equal(usePromptStore.getState().scenario, reference.name);
  assert.equal(usePromptStore.getState().step, 2);
  assert.equal(usePromptStore.getState().view, 'studio');
  assert.equal(usePromptStore.getState().promptFinal, 'Edição que deve continuar');
  assert.equal(usePromptStore.getState().promptEdited, true);
});

test('novas camadas aplicam referências aos campos existentes', () => {
  const cases = [
    { kind: 'action', field: 'action', step: 2 },
    { kind: 'lighting', field: 'lighting', step: 3 },
    { kind: 'texture', field: 'texture', step: 3 },
  ] as const;
  for (const { kind, field, step } of cases) {
    resetStore();
    const reference = REFERENCE_POOLS[kind].find((item) => item.source === 'Curadoria expandida PromptForge');
    assert.ok(reference);
    assert.equal(usePromptStore.getState().applyReference(reference.id), true);
    assert.equal(usePromptStore.getState()[field], reference.name);
    assert.equal(usePromptStore.getState().step, step);
    assert.ok(buildPrompt({ ...EMPTY_DRAFT, anchor: 'Figura de teste', [field]: reference.name }).includes(reference.output));
  }
});

test('acervo respeita o limite de estilos já escolhidos', () => {
  resetStore();
  usePromptStore.getState().updateField('style', ['Estilo um', 'Estilo dois']);
  const reference = REFERENCE_POOLS.style.find((item) => !['Estilo um', 'Estilo dois'].includes(item.name));
  assert.ok(reference);

  assert.equal(usePromptStore.getState().applyReference(reference.id), false);
  assert.deepEqual(usePromptStore.getState().style, ['Estilo um', 'Estilo dois']);
});

test('surpreenda-me também sorteia referências expandidas', () => {
  resetStore();
  const originalRandom = Math.random;
  Math.random = () => 0.99;
  try {
    usePromptStore.getState().surpriseMe();
  } finally {
    Math.random = originalRandom;
  }
  const state = usePromptStore.getState();
  assert.notEqual(findReferenceByName('anchor', state.anchor)?.source, 'PromptForge');
  assert.notEqual(findReferenceByName('scenario', state.scenario)?.source, 'PromptForge');
  assert.notEqual(findReferenceByName('style', state.style[0])?.source, 'PromptForge');
  assert.notEqual(findReferenceByName('action', state.action)?.source, 'PromptForge');
  assert.notEqual(findReferenceByName('lighting', state.lighting)?.source, 'PromptForge');
  assert.notEqual(findReferenceByName('texture', state.texture)?.source, 'PromptForge');
});
