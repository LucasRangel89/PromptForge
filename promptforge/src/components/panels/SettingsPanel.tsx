import { useState, type CSSProperties } from 'react';
import { Box, RectangleHorizontal, RectangleVertical, Square } from 'lucide-react';
import type { AspectRatio, Engine } from '@/lib/promptEngine';
import { usePromptStore } from '@/store/usePromptStore';
import { PanelHeader } from '@/components/ui/PanelHeader';

const ratios: { value: AspectRatio; name: string; use: string; icon: typeof Square }[] = [
  { value: '1:1', name: 'Quadrado', use: 'Capas e posts', icon: Square },
  { value: '4:5', name: 'Retrato', use: 'Editorial e social', icon: RectangleVertical },
  { value: '16:9', name: 'Panorâmico', use: 'Cinema e cenários', icon: RectangleHorizontal },
  { value: '9:16', name: 'Vertical', use: 'Stories e mobile', icon: RectangleVertical },
];

const engines: { value: Engine; description: string }[] = [
  { value: 'Universal', description: 'Texto limpo, sem parâmetros proprietários.' },
  { value: 'Midjourney', description: 'Adicionar --ar e --stylize.' },
  { value: 'DALL·E', description: 'Linguagem natural e intenção explícita.' },
  { value: 'Flux', description: 'Descrição fluida e coerência espacial.' },
  { value: 'SDXL', description: 'Prompt positivo + campo negativo separado.' },
];

const NEGATIVE_PLACEHOLDERS = [
  'Ex.: texto, logotipos, mãos deformadas, excesso de saturação...',
  'Ex.: fundo poluído, anatomia inconsistente, plástico brilhante...',
  'Ex.: marcas-d’água, tipografia ilegível, pele excessivamente lisa...',
  'Ex.: excesso de neon, simetria acidental, objetos cortados...',
];

export function SettingsPanel() {
  const {
    aspectRatio,
    engine,
    detailLevel,
    creativeDistance,
    negativePrompt,
    updateField,
    lockedSections,
    toggleLock,
  } = usePromptStore();
  const [negativePlaceholder] = useState(() => NEGATIVE_PLACEHOLDERS[Math.floor(Math.random() * NEGATIVE_PLACEHOLDERS.length)]);

  return (
    <section className="panel-content" aria-label="Ajustes do prompt">
      <PanelHeader
        number="04"
        eyebrow="Ajustes"
        title="Prepare o prompt para o destino."
        description="Escolha proporção, nível de detalhe e a sintaxe do seu gerador. Nenhuma imagem é criada aqui: o resultado é um prompt pronto para usar."
        locked={lockedSections.includes(4)}
        onToggleLock={() => toggleLock(4)}
      />

      <div className="subsection first">
        <div className="subsection-title"><span>Proporção da imagem</span><Box size={15} /></div>
        <div className="ratio-grid">
          {ratios.map((ratio) => {
            const Icon = ratio.icon;
            return (
              <button type="button" key={ratio.value} className={`ratio-card ${aspectRatio === ratio.value ? 'selected' : ''}`} onClick={() => updateField('aspectRatio', ratio.value)} aria-pressed={aspectRatio === ratio.value}>
                <span className={`ratio-visual ratio-${ratio.value.replace(':', '-')}`}><Icon size={22} strokeWidth={1.2} /></span>
                <strong>{ratio.value}</strong>
                <span>{ratio.name}</span>
                <small>{ratio.use}</small>
              </button>
            );
          })}
        </div>
      </div>

      <div className="field-group">
        <span className="field-label">Gerador de destino</span>
        <div className="engine-grid">
          {engines.map((item) => (
            <button type="button" key={item.value} className={`engine-option ${engine === item.value ? 'selected' : ''}`} onClick={() => updateField('engine', item.value)} aria-pressed={engine === item.value}>
              <strong>{item.value}</strong><small>{item.description}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="sliders-block">
        <label className="range-field">
          <span className="range-label"><span><strong>Profundidade de detalhes</strong><small>Da composição econômica à microtextura.</small></span><output>{detailLevel}%</output></span>
          <input type="range" min="0" max="100" step="1" value={detailLevel} onChange={(event) => updateField('detailLevel', Number(event.target.value))} style={{ '--range-progress': `${detailLevel}%` } as CSSProperties} />
          <span className="range-extremes"><span>Essencial</span><span>Minucioso</span></span>
        </label>
        <label className="range-field">
          <span className="range-label"><span><strong>Distância criativa</strong><small>Controle a interpretação e o stylize.</small></span><output>{creativeDistance}%</output></span>
          <input type="range" min="0" max="100" step="1" value={creativeDistance} onChange={(event) => updateField('creativeDistance', Number(event.target.value))} style={{ '--range-progress': `${creativeDistance}%` } as CSSProperties} />
          <span className="range-extremes"><span>Fiel</span><span>Experimental</span></span>
        </label>
      </div>

      <div className="field-group negative-field">
        <div className="field-label-row">
          <label htmlFor="negative-prompt" className="field-label">Prompt negativo <small>opcional</small></label>
          <span className="field-counter">{negativePrompt.length}/400</span>
        </div>
        <textarea
          id="negative-prompt"
          className="text-area negative-input"
          value={negativePrompt}
          maxLength={400}
          onChange={(event) => updateField('negativePrompt', event.target.value)}
          placeholder={negativePlaceholder}
        />
        <p className="field-hint">O painel de saída mantém este campo separado, como esperado por Stable Diffusion e interfaces compatíveis.</p>
      </div>
    </section>
  );
}
