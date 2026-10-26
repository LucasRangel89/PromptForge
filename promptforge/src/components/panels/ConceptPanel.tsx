import { Aperture, Bot, DraftingCompass, Leaf, PersonStanding, Shield, Sparkles } from 'lucide-react';
import { ANCHORS } from '@/lib/presets';
import { usePromptStore } from '@/store/usePromptStore';
import { PanelHeader } from '@/components/ui/PanelHeader';
import { SelectCard } from '@/components/ui/SelectCard';
import { ReferenceSuggestions, useReferenceSuggestions } from '@/components/references/ReferenceSuggestions';

const icons = [Shield, PersonStanding, Bot, Aperture, Leaf, DraftingCompass];

export function ConceptPanel() {
  const { anchor, customInput, setSubject, selectAnchor, lockedSections, toggleLock } = usePromptStore();
  const subject = customInput || anchor;
  const { placeholderName, suggestionProps } = useReferenceSuggestions('anchor');

  return (
    <section className="panel-content" aria-label="Conceito do prompt">
      <PanelHeader
        number="01"
        eyebrow="Conceito"
        title="Dê um centro à sua imagem."
        description="Comece por uma pessoa, objeto, personagem ou ideia. Uma boa âncora mantém o resultado reconhecível."
        locked={lockedSections.includes(1)}
        onToggleLock={() => toggleLock(1)}
      />

      <div className="field-group">
        <div className="field-label-row">
          <label htmlFor="subject" className="field-label">Sua ideia principal</label>
          <span className="field-counter">{subject.length}/600</span>
        </div>
        <textarea
          id="subject"
          className="text-area subject-input"
          value={subject}
          maxLength={600}
          onChange={(event) => setSubject(event.target.value)}
          placeholder={`Ex.: ${placeholderName ?? 'uma bibliotecária que guarda memórias'} — ou descreva sua própria ideia...`}
        />
        <p className="field-hint">Seja específico sobre aparência, materiais e atitude. O texto livre é preservado como você escrever.</p>
      </div>

      <ReferenceSuggestions {...suggestionProps} />

      <div className="subsection">
        <div className="subsection-title">
          <span>Ou escolha uma âncora</span>
          <span className="mono-note">CURADORIA PROMPTFORGE</span>
        </div>
        <div className="choice-grid anchor-grid">
          {ANCHORS.map((item, index) => {
            const Icon = icons[index];
            return (
              <SelectCard
                key={item.name}
                label={item.name}
                sublabel={item.description}
                icon={<Icon size={17} strokeWidth={1.7} />}
                selected={anchor === item.name && !customInput}
                onClick={() => selectAnchor(item.name)}
              />
            );
          })}
        </div>
      </div>

      {anchor === 'O Eternauta' && !customInput && (
        <div className="dna-note">
          <Sparkles size={17} aria-hidden="true" />
          <div>
            <strong>DNA visual preservado</strong>
            <p>Traje funcional, rosto oculto, silhueta humana e resistência sem heroização — diretrizes da bíblia visual do repositório.</p>
          </div>
        </div>
      )}
    </section>
  );
}
