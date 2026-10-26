import { GoogleGenAI } from '@google/genai';

let aiClient: GoogleGenAI | null = null;

export function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY não configurada. Por favor acesse as configurações no menu do AI Studio para inserir a sua chave.");
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

export async function generateSceneNarrative(params: {
  anchor?: string;
  customInput?: string;
  characters?: string[];
  scenario?: string;
  context?: string;
  trend?: string;
  creativeDistance?: number;
}): Promise<string> {
  const ai = getGeminiClient();
  
  const prompt = `Você é um Diretor de Arte e Roteirista de Cena.
  
Crie UMA ÚNICA descrição de cena (narrativa, forte e imersiva) baseada nestes parâmetros:
- Protagonista / Coração da cena: ${params.anchor || params.customInput || 'Não definido'}
- Personagens adicionais ao redor: ${params.characters?.join(', ') || 'Nenhum'}
- Cenário: ${params.scenario || 'Não definido'}
- Contexto Emocional e Atmosfera: ${params.context || 'Não definido'}
- Tendência Visual ou Época: ${params.trend || 'Nenhuma'}

Técnica de roteiro:
1. Responda APENAS com a narrativa da cena. Nenhuma introdução.
2. Siga o formato de Roteirista de Cena fluído na frase: 
   Quem está ali + o que está acontecendo fisicamente/ação + onde estão precisamente + a energia emocional do ambiente + 3 objetos extremamente marcantes ao redor.
3. Seja poético, visceral e fotorrealista na descrição, como um "script" a ser lido pela equipe de câmera e arte!
4. Responda INTEIRAMENTE em PORTUGUÊS. O texto deve ter de 1 a no MÁXIMO 3 frases, sendo muito coeso.

Exemplo de estilo desejado:
"Eternauta parado num corredor de escola dos anos 90, segurando uma pasta velha, com cartazes de televisão infantil mofados nas paredes e luz de fim de tarde entrando pelas janelas. A melancolia de um tempo suspenso toma conta do espaço."
`;

  const temperature = params.creativeDistance !== undefined ? (params.creativeDistance / 100) * 2.0 : 1.0;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      temperature,
    }
  });

  return response.text || '';
}

export async function refineSceneNarrative(currentDescription: string, creativeDistance: number = 50): Promise<string> {
  const ai = getGeminiClient();
  
  const prompt = `Você é um Diretor de Arte e Roteirista de Cena aprimorando um roteiro.
  
Pegue a descrição de cena abaixo e REESCREVA-A focando em adicionar mais detalhes sensoriais (texturas, sons implícitos, iluminação) e peso emocional. Torne a narrativa visualmente mais rica e cinematográfica, mantendo a ação central.

Descrição atual:
"${currentDescription}"

Regras:
1. APENAS a nova descrição, sem introduções.
2. Máximo de 3 frases. Estrutura fluida e visceral.
3. Em português.
`;

  const temperature = (creativeDistance / 100) * 2.0;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      temperature,
    }
  });

  return response.text || '';
}
