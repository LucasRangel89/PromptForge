import { Check, Palette, WandSparkles } from 'lucide-react';
import {
  ART_DIRECTIONS,
  COMPOSITIONS,
  DETAILS,
  LIGHTINGS,
  MEDIUMS,
  PALETTES,
  STYLES,
  TEXTURES,
} from '@/lib/presets';
import { usePromptStore } from '@/store/usePromptStore';
import { Chip } from '@/components/ui/Chip';
import { PanelHeader } from '@/components/ui/PanelHeader';
import { SelectField } from '@/components/ui/SelectField';
import { ReferenceSuggestions, useReferenceSuggestions } from '@/components/references/ReferenceSuggestions';
import { withSelectedReferences } from '@/lib/references';

export function StylePanel() {
  const {
    style,
    medium,
    palette,
    lighting,
    texture,
    composition,
    details,
    updateField,
    applyArtDirection,
    lockedSections,
    toggleLock,
    notify,
  } = usePromptStore();
  const { suggestionProps } = useReferenceSuggestions('style');

  const toggleStyle = (name: string) => {
    if (style.includes(name)) {
      updateField('style', style.filter((item) => item !== name));
      return;
    }
    if (style.length >= 2) {
      notify('Combine no máximo 2 estilos para evitar uma direção ambígua.', 'info');
      return;
    }
    updateField('style', [...style, name]);
  };

  const toggleDetail = (name: string) => {
    if (details.includes(name)) {
      updateField('details', details.filter((item) => item !== name));
    } else if (details.length >= 4) {
      notify('Escolha até 4 detalhes para não disputar atenção com o sujeito.', 'info');
    } else {
      updateField('details', [...details, name]);
    }
  };

  const styleOptions = withSelectedReferences(STYLES, style, 'style');
  const mediumOptions = withSelectedReferences(MEDIUMS, medium, 'medium');
  const paletteOptions = withSelectedReferences(PALETTES, palette, 'palette');
  const compositionOptions = withSelectedReferences(COMPOSITIONS, composition, 'composition');
  const detailOptions = withSelectedReferences(DETAILS, details, 'detail');
  const selectedPalette = paletteOptions.find((item) => item.name === palette);

  return (
    <section className="panel-content" aria-label="Linguagem visual do prompt">
      <PanelHeader
        number="03"
        eyebrow="Linguagem visual"
        title="Defina como o mundo será visto."
        description="Aplique uma direção completa ou combine cada camada. Menos estilos, escolhidos com intenção, geram mais coerência."
        locked={lockedSections.includes(3)}
        onToggleLock={() => toggleLock(3)}
      />

      <div className="subsection first">
        <div className="subsection-title"><span>Direções de arte</span><WandSparkles size={15} /></div>
        <div className="art-direction-grid">
          {ART_DIRECTIONS.map((direction) => {
            const selected = direction.values.medium === medium
              && direction.values.palette === palette
              && direction.values.lighting === lighting
              && direction.values.texture === texture
              && direction.values.composition === composition
              && direction.values.style.every((item) => style.includes(item));
            return (
              <button type="button" className={`art-direction ${selected ? 'selected' : ''}`} key={direction.name} onClick={() => applyArtDirection(direction.name)} aria-pressed={selected}>
                <span className="art-swatches" aria-hidden="true">
                  {direction.colors.map((color) => <i key={color} style={{ background: color }} />)}
                </span>
                <span className="art-direction-copy"><strong>{direction.name}</strong><small>{direction.description}</small></span>
                <span className="art-check">{selected && <Check size={13} />}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="field-group">
        <div className="field-label-row">
          <span className="field-label">Estilo artístico</span>
          <span className="field-counter">{style.length}/2 selecionados</span>
        </div>
        <div className="chip-list">
          {styleOptions.map((item) => (
            <Chip key={item.name} selected={style.includes(item.name)} onClick={() => toggleStyle(item.name)} title={item.description}>{item.name}</Chip>
          ))}
        </div>
      </div>

      <ReferenceSuggestions {...suggestionProps} kinds={['style', 'medium', 'palette', 'composition', 'detail']} />

      <div className="select-grid">
        <SelectField label="Meio de criação" value={medium} options={mediumOptions} onChange={(value) => updateField('medium', value)} />
        <SelectField label="Paleta dominante" value={palette} options={paletteOptions} onChange={(value) => updateField('palette', value)} />
        <SelectField label="Desenho de luz" value={lighting} options={LIGHTINGS} onChange={(value) => updateField('lighting', value)} />
        <SelectField label="Textura e acabamento" value={texture} options={TEXTURES} onChange={(value) => updateField('texture', value)} />
        <SelectField label="Câmera e enquadramento" value={composition} options={compositionOptions} onChange={(value) => updateField('composition', value)} />
        <div className="palette-preview">
          <span className="field-label"><Palette size={13} /> Amostra da paleta</span>
          <div className={`palette-colors ${!selectedPalette ? 'empty' : ''}`}>
            {(selectedPalette?.colors ?? ['#e6e6e0', '#d8d9d2', '#cbccc5']).map((color) => <i key={color} style={{ background: color }} />)}
          </div>
          <span className="field-hint">{selectedPalette?.name ?? 'Selecione uma paleta para visualizar.'}</span>
        </div>
      </div>

      <div className="field-group detail-field">
        <div className="field-label-row">
          <span className="field-label">Detalhes que contam história</span>
          <span className="field-counter">{details.length}/4</span>
        </div>
        <div className="chip-list">
          {detailOptions.map((item) => (
            <Chip key={item.name} selected={details.includes(item.name)} onClick={() => toggleDetail(item.name)} title={item.description}>{item.name}</Chip>
          ))}
        </div>
      </div>
    </section>
  );
}
