import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Plus, Shuffle, Sparkles } from 'lucide-react';
import { ConceptPanel } from '@/components/panels/ConceptPanel';
import { ScenePanel } from '@/components/panels/ScenePanel';
import { SettingsPanel } from '@/components/panels/SettingsPanel';
import { StylePanel } from '@/components/panels/StylePanel';
import { PromptOutput } from '@/components/studio/PromptOutput';
import { buildPrompt } from '@/lib/promptEngine';
import { copyToClipboard } from '@/lib/utils';
import { MAX_SAVED_PROMPTS, usePromptStore } from '@/store/usePromptStore';

const steps = [
  { id: 1, label: 'Conceito', description: 'O protagonista' },
  { id: 2, label: 'Cena', description: 'Mundo e ação' },
  { id: 3, label: 'Estilo', description: 'Linguagem visual' },
  { id: 4, label: 'Ajustes', description: 'Formato e destino' },
];

export function Studio() {
  const state = usePromptStore();

  useEffect(() => {
    const handleKeyboard = async (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey)) return;
      const store = usePromptStore.getState();
      if (store.guideOpen) return;
      if (event.repeat) {
        event.preventDefault();
        return;
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        const prompt = store.promptEdited ? store.promptFinal : buildPrompt(store, 'fluid');
        if (!prompt.trim()) {
          store.notify('Adicione conteúdo antes de copiar.', 'info');
          return;
        }
        try {
          await copyToClipboard(prompt);
          store.notify('Prompt copiado pelo atalho de teclado.');
        } catch {
          store.notify('O navegador bloqueou o acesso à área de transferência.', 'error');
        }
      }
      if (event.key.toLowerCase() === 's') {
        event.preventDefault();
        const prompt = store.promptEdited ? store.promptFinal : buildPrompt(store, 'fluid');
        const id = store.savePrompt();
        if (id) store.notify('Prompt salvo na Biblioteca.');
        else if (prompt.trim()) store.notify(`A Biblioteca atingiu o limite de ${MAX_SAVED_PROMPTS}. Exporte ou exclua um item; o rascunho atual continua aberto.`, 'error');
        else store.notify('Adicione conteúdo antes de salvar.', 'info');
      }
    };
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, []);

  const isComplete = (id: number) => {
    if (id === 1) return Boolean(state.anchor || state.customInput.trim());
    if (id === 2) return Boolean(state.scenario || state.action);
    if (id === 3) return Boolean(state.style.length || state.medium);
    return true;
  };

  const handleSurprise = () => {
    const manualWasActive = state.promptEdited;
    state.surpriseMe();
    const locked = state.lockedSections.length;
    if (manualWasActive) {
      state.notify('Nova combinação preparada sem apagar sua edição manual. Restaure a versão automática no painel para aplicá-la.', 'info');
    } else {
      state.notify(locked ? `Nova combinação criada; ${locked} ${locked === 1 ? 'seção preservada' : 'seções preservadas'}.` : 'Uma nova combinação foi forjada.');
    }
  };

  const handleNew = () => {
    const result = state.startNewDraft();
    if (result === 'full') {
      state.notify(`A Biblioteca atingiu o limite de ${MAX_SAVED_PROMPTS}. O novo rascunho não foi aberto e seu trabalho atual foi preservado.`, 'error');
      return;
    }
    state.notify(result === 'saved' ? 'Novo rascunho criado. O anterior foi salvo na Biblioteca.' : 'Novo rascunho criado.', 'info');
  };

  const goToOutput = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelector('.output-card')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="studio-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow page-eyebrow"><Sparkles size={13} /> ESTÚDIO DE DIREÇÃO CRIATIVA</span>
          <h1>Transforme intenção em imagem.</h1>
          <p>Combine narrativa e linguagem visual. O prompt se organiza em tempo real, sem caixa-preta.</p>
        </div>
        <div className="page-actions">
          <button type="button" className="button secondary" onClick={handleNew}><Plus size={16} /> Novo prompt</button>
          <button type="button" className="button dark" onClick={handleSurprise}><Shuffle size={16} /> Surpreenda-me</button>
        </div>
      </div>

      <div className="workspace-grid">
        <div className="builder-card">
          <div className="project-bar">
            <div className="project-name-wrap">
              <span className="project-label">PROJETO ATUAL</span>
              <input value={state.projectName} maxLength={70} onChange={(event) => state.updateField('projectName', event.target.value)} aria-label="Nome do projeto" />
            </div>
            <span className="local-status"><Check size={12} /> Salvo neste navegador</span>
          </div>

          <nav className="stepper" aria-label="Etapas do prompt">
            {steps.map((step) => {
              const active = state.step === step.id;
              const complete = isComplete(step.id) && !active;
              return (
                <button
                  type="button"
                  aria-current={active ? 'step' : undefined}
                  aria-label={`${step.label}: ${step.description}`}
                  key={step.id}
                  className={`step-tab ${active ? 'active' : ''} ${complete ? 'complete' : ''}`}
                  onClick={() => state.setStep(step.id)}
                >
                  <span className="step-index">{complete ? <Check size={13} /> : `0${step.id}`}</span>
                  <span><strong>{step.label}</strong><small>{step.description}</small></span>
                </button>
              );
            })}
          </nav>

          <div className="panel-transition" key={state.step}>
            {state.step === 1 && <ConceptPanel />}
            {state.step === 2 && <ScenePanel />}
            {state.step === 3 && <StylePanel />}
            {state.step === 4 && <SettingsPanel />}
          </div>

          <div className="panel-footer">
            {state.step > 1 ? (
              <button type="button" className="button text" onClick={() => state.setStep(state.step - 1)}><ArrowLeft size={15} /> Etapa anterior</button>
            ) : (
              <span className="panel-footer-note">Tudo pode ser editado depois.</span>
            )}
            {state.step < 4 ? (
              <button type="button" className="button next" onClick={() => state.setStep(state.step + 1)}>
                Próxima: {steps[state.step].label} <ArrowRight size={15} />
              </button>
            ) : (
              <button type="button" className="button next" onClick={goToOutput}>Revisar prompt <ArrowRight size={15} /></button>
            )}
          </div>
        </div>

        <PromptOutput />
      </div>
    </div>
  );
}
