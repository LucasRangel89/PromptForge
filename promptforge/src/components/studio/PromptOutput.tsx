import { useMemo, useState, type CSSProperties, type KeyboardEvent } from 'react';
import {
  Braces,
  Check,
  Copy,
  Download,
  FileText,
  RotateCcw,
  Save,
  WandSparkles,
} from 'lucide-react';
import { buildPrompt, calculatePromptScore, draftForExport } from '@/lib/promptEngine';
import { copyToClipboard, downloadFile, slugify } from '@/lib/utils';
import { MAX_SAVED_PROMPTS, usePromptStore } from '@/store/usePromptStore';

type OutputTab = 'fluid' | 'compact' | 'json';

const outputTabs: OutputTab[] = ['fluid', 'compact', 'json'];

export function PromptOutput() {
  const state = usePromptStore();
  const [tab, setTab] = useState<OutputTab>('fluid');
  const [copied, setCopied] = useState(false);

  const fluidPrompt = state.promptEdited ? state.promptFinal : buildPrompt(state, 'fluid');
  const prompt = state.promptEdited ? state.promptFinal : buildPrompt(state, tab === 'compact' ? 'compact' : 'fluid');
  const score = calculatePromptScore(state);
  const words = fluidPrompt.trim() ? fluidPrompt.trim().split(/\s+/).length : 0;

  const jsonContent = useMemo(() => JSON.stringify({
    format: 'promptforge/v2',
    ...draftForExport(state),
    prompt_final: fluidPrompt,
  }, null, 2), [state, fluidPrompt]);

  const visibleContent = tab === 'json' ? jsonContent : prompt;

  const handleCopy = async (content = visibleContent, successMessage?: string) => {
    try {
      await copyToClipboard(content);
      if (!successMessage) {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
      state.notify(successMessage ?? (tab === 'json' ? 'JSON copiado para a área de transferência.' : 'Prompt copiado. Pronto para gerar sua imagem.'));
    } catch (error) {
      state.notify(error instanceof Error ? error.message : 'Não foi possível copiar.', 'error');
    }
  };

  const handleSave = () => {
    const id = state.savePrompt();
    if (id) state.notify('Prompt salvo na sua memória criativa.');
    else if (fluidPrompt.trim()) state.notify(`A Biblioteca atingiu o limite de ${MAX_SAVED_PROMPTS}. Exporte ou exclua um item; o rascunho atual continua aberto.`, 'error');
    else state.notify('Adicione conteúdo antes de salvar.', 'info');
  };

  const handleDownload = () => {
    if (!visibleContent.trim()) {
      state.notify('Adicione conteúdo antes de exportar.', 'info');
      return;
    }
    const extension = tab === 'json' ? 'json' : 'txt';
    downloadFile(`${slugify(state.projectName)}.${extension}`, visibleContent, tab === 'json' ? 'application/json' : 'text/plain;charset=utf-8');
    state.notify(`Arquivo .${extension} exportado.`);
  };

  const handleVariations = () => {
    if (!fluidPrompt.trim()) {
      state.notify('Crie um prompt antes de gerar variações.', 'info');
      return;
    }
    state.generateVariations();
    state.notify('Três caminhos criativos gerados a partir do prompt atual.', 'info');
  };

  const handleTabKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const currentIndex = outputTabs.indexOf(tab);
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? outputTabs.length - 1
        : event.key === 'ArrowRight'
          ? (currentIndex + 1) % outputTabs.length
          : (currentIndex - 1 + outputTabs.length) % outputTabs.length;
    const nextTab = outputTabs[nextIndex];
    setTab(nextTab);
    event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus();
  };

  return (
    <aside className="output-card" aria-label="Prompt final">
      <div className="output-header">
        <div>
          <span className="output-kicker"><i /> SÍNTESE AO VIVO</span>
          <h2>Prompt final</h2>
        </div>
        <div className="score-ring" style={{ '--score': `${score * 3.6}deg` } as CSSProperties} title={`${score}% das camadas preenchidas`}>
          <div><strong>{score}</strong><span>cobertura</span></div>
        </div>
      </div>

      <div className="output-tabs" role="tablist" aria-label="Formato do prompt" onKeyDown={handleTabKey}>
        <button id="output-tab-fluid" type="button" role="tab" aria-selected={tab === 'fluid'} aria-controls="prompt-output-panel" tabIndex={tab === 'fluid' ? 0 : -1} className={tab === 'fluid' ? 'active' : ''} onClick={() => setTab('fluid')}><FileText size={13} /> Fluido</button>
        <button id="output-tab-compact" type="button" role="tab" aria-selected={tab === 'compact'} aria-controls="prompt-output-panel" tabIndex={tab === 'compact' ? 0 : -1} className={tab === 'compact' ? 'active' : ''} onClick={() => setTab('compact')}><WandSparkles size={13} /> Compacto</button>
        <button id="output-tab-json" type="button" role="tab" aria-selected={tab === 'json'} aria-controls="prompt-output-panel" tabIndex={tab === 'json' ? 0 : -1} className={tab === 'json' ? 'active' : ''} onClick={() => setTab('json')}><Braces size={13} /> JSON</button>
      </div>

      <div className="prompt-editor-wrap" role="tabpanel" id="prompt-output-panel" aria-labelledby={`output-tab-${tab}`}>
        {state.promptEdited && tab !== 'json' && (
          <button type="button" className="restore-prompt" onClick={state.resetPrompt} title="Substituir a edição manual pela versão gerada a partir dos campos atuais">
            <RotateCcw size={11} /> Edição manual ativa · restaurar automática
          </button>
        )}
        {tab === 'json' ? (
          <pre className="json-output">{jsonContent}</pre>
        ) : (
          <textarea
            className="prompt-editor"
            value={prompt}
            onChange={(event) => state.setPromptManual(event.target.value)}
            placeholder="Seu prompt aparecerá aqui. Comece descrevendo uma ideia no Conceito."
            aria-label="Prompt gerado editável"
            maxLength={50_000}
            spellCheck={false}
          />
        )}
        <div className="prompt-meta">
          <span>{words} palavras</span><i />
          <span>{fluidPrompt.length} caracteres</span><i />
          <span>{state.aspectRatio}</span>
        </div>
      </div>

      {state.negativePrompt && tab !== 'json' && (
        <div className="negative-output">
          <div><span>PROMPT NEGATIVO</span><button type="button" onClick={() => handleCopy(state.negativePrompt, 'Prompt negativo copiado.')} aria-label="Copiar prompt negativo"><Copy size={12} /> Copiar</button></div>
          <p>{state.negativePrompt}</p>
        </div>
      )}

      <div className="output-primary-actions">
        <button type="button" className="copy-button" onClick={() => handleCopy()} disabled={!visibleContent.trim()}>
          {copied ? <Check size={17} /> : <Copy size={17} />}
          <span className="copy-label">{copied ? 'Copiado!' : tab === 'json' ? 'Copiar JSON' : 'Copiar prompt'}</span>
          <kbd>⌘ ↵</kbd>
        </button>
        <div className="output-secondary-actions">
          <button type="button" onClick={handleSave} aria-label="Salvar prompt na Biblioteca"><Save size={15} /><span>Salvar</span></button>
          <button type="button" onClick={handleVariations} aria-label="Gerar três variações do prompt"><WandSparkles size={15} /><span>Variações</span></button>
          <button type="button" onClick={handleDownload} aria-label="Exportar prompt"><Download size={15} /><span>Exportar</span></button>
        </div>
      </div>

      {state.variations.length > 0 && (
        <div className="variations-block">
          <div className="variations-title"><span>Variações do prompt</span></div>
          {state.variations.map((variation, index) => (
            <article key={`${index}-${variation.slice(0, 24)}`} className="variation-item">
              <div><span>0{index + 1}</span><strong>{['Mais íntima', 'Mais aberta', 'Mais experimental'][index]}</strong><button type="button" onClick={() => handleCopy(variation, `Variação ${index + 1} copiada.`)} aria-label={`Copiar variação ${index + 1}`}><Copy size={12} /></button></div>
              <p>{variation}</p>
            </article>
          ))}
        </div>
      )}

      <div className="output-footer">
        <span><i /> {state.engine}</span>
        <span>Seu texto, suas escolhas. Sem geração automática de imagem.</span>
      </div>
    </aside>
  );
}
