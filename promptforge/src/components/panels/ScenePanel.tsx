import { useState, type KeyboardEvent } from 'react';
import { ImagePlus, MapPin, Plus, X } from 'lucide-react';
import { ACTIONS, CHARACTER_PRESETS, MOODS, SCENARIOS, TRENDS } from '@/lib/presets';
import { usePromptStore } from '@/store/usePromptStore';
import { Chip } from '@/components/ui/Chip';
import { PanelHeader } from '@/components/ui/PanelHeader';
import { SelectCard } from '@/components/ui/SelectCard';
import { ReferenceSuggestions, useReferenceSuggestions } from '@/components/references/ReferenceSuggestions';
import { withSelectedReferences } from '@/lib/references';

export function ScenePanel() {
  const {
    scenario,
    action,
    context,
    trend,
    characters,
    referenceImage,
    referenceImageName,
    promptEdited,
    updateField,
    lockedSections,
    toggleLock,
    notify,
  } = usePromptStore();
  const [newCharacter, setNewCharacter] = useState('');
  const { placeholderName, suggestionProps } = useReferenceSuggestions('scenario');

  const addCharacter = (value = newCharacter) => {
    const cleanValue = value.trim();
    if (!cleanValue) return;
    if (characters.includes(cleanValue)) {
      notify('Esse elemento já está na cena.', 'info');
      return;
    }
    if (characters.length >= 5) {
      notify('Use até 5 elementos para manter a cena legível.', 'info');
      return;
    }
    updateField('characters', [...characters, cleanValue]);
    setNewCharacter('');
  };

  const handleCharacterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addCharacter();
    }
  };

  const handleReference = (file?: File) => {
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
      notify('Escolha uma imagem PNG, JPG ou WEBP.', 'error');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      notify('A imagem deve ter no máximo 5 MB.', 'error');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        notify('Não foi possível ler a imagem. Tente outro arquivo.', 'error');
        return;
      }
      updateField('referenceImageName', file.name);
      updateField('referenceImage', reader.result);
      notify(promptEdited
        ? 'Referência anexada para esta sessão; sua edição manual foi preservada. Anexe-a também no gerador de imagem.'
        : 'Referência anexada e mencionada no prompt. Anexe-a também no gerador de imagem.');
    };
    reader.onerror = () => notify('Não foi possível ler a imagem. Tente outro arquivo.', 'error');
    reader.readAsDataURL(file);
  };

  const customScenario = scenario && !SCENARIOS.some((item) => item.name === scenario) ? scenario : '';
  const moodOptions = withSelectedReferences(MOODS, context, 'mood');
  const trendOptions = withSelectedReferences(TRENDS, trend, 'trend');

  return (
    <section className="panel-content" aria-label="Cena do prompt">
      <PanelHeader
        number="02"
        eyebrow="Cena"
        title="Construa o mundo ao redor."
        description="Combine lugar, ação e atmosfera. Os melhores prompts mostram o que acontece, não apenas o que existe."
        locked={lockedSections.includes(2)}
        onToggleLock={() => toggleLock(2)}
      />

      <div className="subsection first">
        <div className="subsection-title"><span>Cenário</span><MapPin size={15} /></div>
        <div className="choice-grid scenario-grid">
          {SCENARIOS.map((item) => (
            <SelectCard
              key={item.name}
              label={item.name}
              sublabel={item.description}
              selected={scenario === item.name}
              onClick={() => updateField('scenario', scenario === item.name ? '' : item.name)}
            />
          ))}
        </div>
        <input
          className="text-input standalone-input"
          value={customScenario}
          onChange={(event) => updateField('scenario', event.target.value)}
          placeholder={`Ex.: ${placeholderName ?? 'um lugar inesperado'} — ou descreva outro cenário...`}
          aria-label="Cenário personalizado"
          maxLength={600}
        />
      </div>

      <ReferenceSuggestions {...suggestionProps} kinds={['scenario', 'mood', 'trend']} />

      <div className="subsection">
        <div className="subsection-title"><span>Ação na cena</span><span className="mono-note">O QUE ACONTECE?</span></div>
        <div className="chip-list">
          {ACTIONS.map((item) => (
            <Chip key={item.name} selected={action === item.name} onClick={() => updateField('action', action === item.name ? '' : item.name)} title={item.description}>
              {item.name}
            </Chip>
          ))}
        </div>
      </div>

      <div className="two-column-fields">
        <div className="field-group">
          <span className="field-label">Atmosfera</span>
          <div className="chip-list compact">
            {moodOptions.map((item) => (
              <Chip key={item.name} selected={context === item.name} onClick={() => updateField('context', context === item.name ? '' : item.name)} title={item.description}>
                {item.name}
              </Chip>
            ))}
          </div>
        </div>
        <div className="field-group">
          <span className="field-label">Tendência visual <small>opcional</small></span>
          <div className="chip-list compact">
            {trendOptions.map((item) => (
              <Chip key={item.name} selected={trend === item.name} onClick={() => updateField('trend', trend === item.name ? '' : item.name)} title={item.description}>
                {item.name}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title"><span>Personagens e elementos</span><span className="mono-note">ATÉ 5</span></div>
        {characters.length > 0 && (
          <div className="tag-list">
            {characters.map((character) => (
              <span className="scene-tag" key={character}>
                {character}
                <button type="button" onClick={() => updateField('characters', characters.filter((item) => item !== character))} aria-label={`Remover ${character}`}>
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}
        <div className="input-with-button">
          <input
            className="text-input"
            value={newCharacter}
            onChange={(event) => setNewCharacter(event.target.value)}
            onKeyDown={handleCharacterKey}
            placeholder="Adicionar personagem ou objeto e pressionar Enter"
            aria-label="Novo personagem ou elemento"
            maxLength={300}
          />
          <button type="button" className="icon-button light" onClick={() => addCharacter()} aria-label="Adicionar elemento"><Plus size={17} /></button>
        </div>
        <div className="suggestion-row">
          {CHARACTER_PRESETS.filter((item) => !characters.includes(item.name)).slice(0, 3).map((item) => (
            <button type="button" key={item.name} onClick={() => addCharacter(item.name)}>+ {item.name}</button>
          ))}
        </div>
      </div>

      <div className="reference-block">
        {!referenceImage && referenceImageName && (
          <p className="reference-warning">A versão salva usava “{referenceImageName}”, mas a imagem não foi persistida. Reanexe-a se ainda precisar dessa referência.</p>
        )}
        {referenceImage ? (
          <div className="reference-preview">
            <img src={referenceImage} alt="Referência visual anexada" />
            <div><strong>{referenceImageName}</strong><span>{promptEdited ? 'Disponível nesta sessão · edição manual ativa' : 'Mencionada no prompt · disponível nesta sessão'}</span></div>
            <button type="button" className="icon-button light" onClick={() => { updateField('referenceImage', ''); updateField('referenceImageName', ''); }} aria-label="Remover referência"><X size={16} /></button>
          </div>
        ) : (
          <label className="reference-upload">
            <ImagePlus size={20} />
            <span><strong>Adicionar referência visual</strong><small>PNG, JPG ou WEBP · até 5 MB · anexe também no gerador; não persiste após recarregar</small></span>
            <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => { handleReference(event.target.files?.[0]); event.target.value = ''; }} />
          </label>
        )}
      </div>
    </section>
  );
}
