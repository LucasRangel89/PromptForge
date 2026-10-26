import type { ReactNode } from 'react';
import { BookOpen, Braces, ChevronRight, Database, LibraryBig, WandSparkles } from 'lucide-react';
import { usePromptStore } from '@/store/usePromptStore';

export function AppLayout({ children }: { children: ReactNode }) {
  const { view, setView, savedPrompts, setGuideOpen } = usePromptStore();

  const navigation = (
    <>
      <button type="button" className={view === 'studio' ? 'active' : ''} onClick={() => setView('studio')} aria-label="Estúdio" title="Estúdio">
        <WandSparkles size={18} /><span>Estúdio</span>
      </button>
      <button type="button" className={view === 'library' ? 'active' : ''} onClick={() => setView('library')} aria-label="Biblioteca" title="Biblioteca">
        <LibraryBig size={18} /><span>Biblioteca</span><b>{savedPrompts.length}</b>
      </button>
      <button type="button" className={view === 'references' ? 'active' : ''} onClick={() => setView('references')} aria-label="Acervo de referências" title="Acervo de referências">
        <Database size={18} /><span>Acervo</span>
      </button>
    </>
  );

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button type="button" className="brand" onClick={() => setView('studio')} aria-label="PromptForge — ir ao Estúdio">
          <span className="brand-mark"><Braces size={21} strokeWidth={2.2} /></span>
          <span><strong>PromptForge</strong><small>IMAGE PROMPT STUDIO</small></span>
        </button>

        <div className="sidebar-section-label">ESPAÇO DE TRABALHO</div>
        <nav className="sidebar-nav" aria-label="Navegação principal">{navigation}</nav>

        <div className="sidebar-spacer" />
        <button type="button" className="memory-card" onClick={() => setView('library')}>
          <span className="memory-card-top"><i /> MEMÓRIA LOCAL <ChevronRight size={13} /></span>
          <strong>{savedPrompts.length.toString().padStart(2, '0')}</strong>
          <p>{savedPrompts.length === 1 ? 'prompt preservado' : 'prompts preservados'} neste navegador.</p>
        </button>
        <button type="button" className="sidebar-guide" onClick={() => setGuideOpen(true)}><BookOpen size={16} /> Guia de prompts <ChevronRight size={14} /></button>
        <div className="sidebar-footer"><span>PF / 2.0</span><span>PORTUGUÊS · BR</span></div>
      </aside>

      <div className="main-shell">
        <header className="topbar">
          <div className="mobile-brand"><span className="brand-mark"><Braces size={18} /></span><strong>PromptForge</strong></div>
          <div className="breadcrumbs"><span>PromptForge</span><ChevronRight size={12} /><strong>{view === 'studio' ? 'Estúdio' : view === 'library' ? 'Biblioteca' : 'Acervo'}</strong></div>
          <nav className="mobile-nav" aria-label="Navegação móvel">{navigation}</nav>
          <div className="topbar-right">
            <span className="system-status"><i /> SISTEMA LOCAL</span>
            <button type="button" className="guide-button" onClick={() => setGuideOpen(true)} aria-label="Abrir guia rápido"><BookOpen size={15} /><span>Guia rápido</span></button>
          </div>
        </header>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
