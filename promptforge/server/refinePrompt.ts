import { GoogleGenAI } from '@google/genai';
import type { IncomingMessage, ServerResponse } from 'node:http';

let client: GoogleGenAI | null = null;

function sendJson(response: ServerResponse, status: number, body: object) {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.end(JSON.stringify(body));
}

async function readJson(request: IncomingMessage) {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > 32_000) throw new Error('PAYLOAD_TOO_LARGE');
    chunks.push(buffer);
  }
  const data = JSON.parse(Buffer.concat(chunks).toString('utf8')) as unknown;
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('INVALID_JSON');
  return data as { prompt?: unknown; creativeDistance?: unknown };
}

export async function handleRefinePrompt(request: IncomingMessage, response: ServerResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    sendJson(response, 405, { error: 'Método não permitido.' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    sendJson(response, 503, { error: 'O refinamento por IA é opcional e ainda não está configurado. Defina GEMINI_API_KEY no servidor; o restante do estúdio funciona sem ela.' });
    return;
  }

  try {
    const body = await readJson(request);
    const prompt = typeof body.prompt === 'string' ? body.prompt.trim() : '';
    if (!prompt || prompt.length > 12_000) {
      sendJson(response, 400, { error: 'Envie um prompt válido com até 12.000 caracteres.' });
      return;
    }
    const numericDistance = typeof body.creativeDistance === 'number' && Number.isFinite(body.creativeDistance) ? body.creativeDistance : 40;
    const creativeDistance = Math.min(100, Math.max(0, numericDistance));

    client ??= new GoogleGenAI({ apiKey });
    const result = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a senior art director and image-prompt editor. Refine the prompt below without changing its core subject, setting, or intent. Improve visual hierarchy, concrete details, lighting and camera clarity. Remove redundancies and contradictory style instructions. Return only the revised prompt in English, with no introduction, markdown, quotation marks or explanation. Keep it under 220 words and preserve any trailing generator parameters such as --ar or --stylize.\n\nPROMPT:\n${prompt}`,
      config: { temperature: 0.35 + (creativeDistance / 100) * 1.25 },
    });

    const refined = result.text?.trim();
    if (!refined) {
      sendJson(response, 502, { error: 'A IA retornou uma resposta vazia. Tente novamente.' });
      return;
    }
    sendJson(response, 200, { prompt: refined });
  } catch (error) {
    if (error instanceof Error && error.message === 'PAYLOAD_TOO_LARGE') {
      sendJson(response, 413, { error: 'O conteúdo enviado excede o limite permitido.' });
      return;
    }
    if (error instanceof SyntaxError || (error instanceof Error && error.message === 'INVALID_JSON')) {
      sendJson(response, 400, { error: 'O corpo da requisição deve ser um objeto JSON válido.' });
      return;
    }
    console.error('Prompt refinement failed:', error instanceof Error ? error.message : 'Unknown error');
    sendJson(response, 500, { error: 'Não foi possível contatar o serviço de IA. Verifique a configuração do servidor e tente novamente.' });
  }
}
