import { useEffect, useRef } from 'react';
import { ArrowRight, Command, X } from 'lucide-react';
import { usePromptStore } from '@/store/usePromptStore';

export function GuideModal() {
  const { guideOpen, setGuideOpen } = usePromptStore();
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!guideOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setGuideOpen(false);
      if (event.key !== 'Tab') return;

      const focusable = modalRef.current?.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
      previousFocus?.focus();
    };
  }, [guideOpen, setGuideOpen]);

  if (!guideOpen) return null;

  return (
    <div className="modal-backdrop" onMouseDown={() => setGuideOpen(false)}>
      <section ref={modalRef} className="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guide-title" aria-describedby="guide-intro" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={() => setGuideOpen(false)} aria-label="Fechar guia" autoFocus><X size={19} /></button>
        <span className="eyebrow">GUIA RÁPIDO · 2 MIN</span>
        <h2 id="guide-title">Um bom prompt tem hierarquia,<br />não apenas adjetivos.</h2>
        <p id="guide-intro" className="guide-intro">O PromptForge organiza suas escolhas na ordem em que uma equipe de arte pensaria a imagem.</p>

        <div className="formula-row">
          {['Sujeito', 'Ação + mundo', 'Luz + câmera', 'Matéria'].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < 3 && <ArrowRight size={14} />}</div>
          ))}
        </div>

        <div className="guide-tips">
          <article><span>01</span><div><h3>Preserve o que faz o sujeito único.</h3><p>Silhueta, roupa, materiais e atitude funcionam melhor que uma lista genérica de qualidades.</p></div></article>
          <article><span>02</span><div><h3>Prefira uma luz e uma intenção de câmera.</h3><p>Elas definem onde o olhar chega e como a cena deve ser sentida.</p></div></article>
          <article><span>03</span><div><h3>Use detalhes como evidência.</h3><p>Três objetos com história valem mais que dez elementos decorativos disputando atenção.</p></div></article>
        </div>

        <div className="shortcut-row">
          <Command size={17} />
          <span><strong>Ctrl/⌘ + Enter</strong> copiar prompt</span>
          <span><strong>Ctrl/⌘ + S</strong> salvar na Biblioteca</span>
        </div>
        <p className="guide-note">Os presets possuem descrições otimizadas em inglês. Textos livres são incorporados exatamente como digitados; o refinamento por IA é opcional e depende de configuração no servidor.</p>
      </section>
    </div>
  );
}
