export async function refinePromptWithAI(prompt: string, creativeDistance: number): Promise<string> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 45_000);

  try {
    const response = await fetch('/api/refine-prompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, creativeDistance }),
      signal: controller.signal,
    });

    const data = await response.json().catch(() => ({})) as { prompt?: string; error?: string };
    if (!response.ok) {
      throw new Error(data.error || 'Não foi possível refinar o prompt agora. Suas edições foram preservadas.');
    }
    if (!data.prompt?.trim()) {
      throw new Error('A IA retornou uma resposta vazia. Tente novamente; suas edições foram preservadas.');
    }
    return data.prompt.trim();
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('O refinamento demorou mais que o esperado. Tente novamente; suas edições foram preservadas.');
    }
    if (error instanceof TypeError) {
      throw new Error('Não foi possível conectar ao serviço de IA. Verifique sua conexão; suas edições foram preservadas.');
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}
