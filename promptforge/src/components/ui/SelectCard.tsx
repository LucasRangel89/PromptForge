import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SelectCardProps {
  selected: boolean;
  onClick: () => void;
  label: string;
  sublabel?: string;
  icon?: ReactNode;
}

export function SelectCard({ selected, onClick, label, sublabel, icon }: SelectCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn('choice-card', selected && 'selected')}
    >
      <span className="choice-card-top">
        {icon && <span className="choice-card-icon">{icon}</span>}
        <span className="choice-check" aria-hidden="true">{selected && <Check size={12} />}</span>
      </span>
      <span className="choice-card-label">{label}</span>
      {sublabel && <span className="choice-card-description">{sublabel}</span>}
    </button>
  );
}
