import assert from 'node:assert/strict';
import test from 'node:test';
import { appendVariation, buildPrompt, calculatePromptScore, DEFAULT_DRAFT, EMPTY_DRAFT } from './promptEngine';

test('monta o exemplo com identidade, cenário e proporção', () => {
  const prompt = buildPrompt(DEFAULT_DRAFT);
  assert.match(prompt, /sealed helmet/);
  assert.match(prompt, /Buenos Aires/);
  assert.match(prompt, /small group of survivors/);
  assert.match(prompt, /Aspect ratio 16:9\.$/);
  assert.equal(calculatePromptScore(DEFAULT_DRAFT), 100);
});

test('mantém um rascunho vazio sem conteúdo artificial', () => {
  assert.equal(buildPrompt(EMPTY_DRAFT), '');
});

test('preserva texto livre e gera sintaxe específica do Midjourney', () => {
  const prompt = buildPrompt({
    ...EMPTY_DRAFT,
    customInput: 'Uma bibliotecária de cidades impossíveis',
    scenario: 'Uma biblioteca submersa',
    engine: 'Midjourney',
    creativeDistance: 50,
  });
  assert.match(prompt, /Uma bibliotecária de cidades impossíveis/);
  assert.match(prompt, /Uma biblioteca submersa/);
  assert.match(prompt, /--ar 1:1 --stylize 500$/);
});

test('insere variações antes dos parâmetros do gerador', () => {
  const varied = appendVariation('A coherent scene. --ar 16:9', 'Use a closer frame.');
  assert.equal(varied, 'A coherent scene. Use a closer frame. --ar 16:9');
});

test('não mistura prompt negativo ao prompt positivo', () => {
  const prompt = buildPrompt({ ...DEFAULT_DRAFT, negativePrompt: 'watermark, text' });
  assert.doesNotMatch(prompt, /watermark, text/);
});
