import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { Readable } from 'node:stream';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleRefinePrompt } from './refinePrompt';

const originalApiKey = process.env.GEMINI_API_KEY;

afterEach(() => {
  if (originalApiKey === undefined) delete process.env.GEMINI_API_KEY;
  else process.env.GEMINI_API_KEY = originalApiKey;
});

function request(method: string, body = '') {
  const stream = Readable.from(body ? [body] : []) as IncomingMessage;
  stream.method = method;
  return stream;
}

function response() {
  const headers: Record<string, string> = {};
  const result = {
    statusCode: 200,
    body: '',
    setHeader(name: string, value: string) {
      headers[name] = value;
    },
    end(chunk: string) {
      result.body = chunk;
      return result;
    },
  };
  return { raw: result as unknown as ServerResponse, result, headers };
}

test('endpoint informa o método permitido', async () => {
  const res = response();
  await handleRefinePrompt(request('GET'), res.raw);
  assert.equal(res.result.statusCode, 405);
  assert.equal(res.headers.Allow, 'POST');
});

test('ausência de chave mantém a IA opcional e retorna 503', async () => {
  delete process.env.GEMINI_API_KEY;
  const res = response();
  await handleRefinePrompt(request('POST', '{}'), res.raw);
  assert.equal(res.result.statusCode, 503);
  assert.match(JSON.parse(res.result.body).error, /opcional/);
});

test('JSON malformado é erro de entrada, não falha do provedor', async () => {
  process.env.GEMINI_API_KEY = 'teste-sem-chamada-externa';
  const res = response();
  await handleRefinePrompt(request('POST', '{'), res.raw);
  assert.equal(res.result.statusCode, 400);
  assert.match(JSON.parse(res.result.body).error, /JSON válido/);
});

test('objeto JSON e prompt não vazio são obrigatórios', async () => {
  process.env.GEMINI_API_KEY = 'teste-sem-chamada-externa';
  const nullBody = response();
  await handleRefinePrompt(request('POST', 'null'), nullBody.raw);
  assert.equal(nullBody.result.statusCode, 400);

  const emptyPrompt = response();
  await handleRefinePrompt(request('POST', '{"prompt":"  "}'), emptyPrompt.raw);
  assert.equal(emptyPrompt.result.statusCode, 400);
});

test('payload excessivo é interrompido com 413', async () => {
  process.env.GEMINI_API_KEY = 'teste-sem-chamada-externa';
  const res = response();
  await handleRefinePrompt(request('POST', JSON.stringify({ prompt: 'x'.repeat(33_000) })), res.raw);
  assert.equal(res.result.statusCode, 413);
});
