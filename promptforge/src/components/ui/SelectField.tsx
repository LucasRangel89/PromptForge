import { ChevronDown } from 'lucide-react';
import type { PresetOption } from '@/lib/presets';

export function SelectField({
  label,
  value,
  options,
  onChange,
  allowEmpty = true,
}: {
  label: string;
  value: string;
  options: PresetOption[];
  onChange: (value: string) => void;
  allowEmpty?: boolean;
}) {
  return (
    <label className="select-field">
      <span className="field-label">{label}</span>
      <span className="select-wrap">
        <select value={value} onChange={(event) => onChange(event.target.value)}>
          {allowEmpty && <option value="">Selecionar...</option>}
          {options.map((option) => (
            <option key={option.name} value={option.name}>{option.name}</option>
          ))}
        </select>
        <ChevronDown size={15} aria-hidden="true" />
      </span>
      <span className="field-hint">
        {value ? options.find((option) => option.name === value)?.description : 'Escolha uma opção para compor o prompt.'}
      </span>
    </label>
  );
}
