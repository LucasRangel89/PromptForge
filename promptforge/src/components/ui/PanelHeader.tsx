import { Lock, LockOpen } from 'lucide-react';

export function PanelHeader({
  number,
  eyebrow,
  title,
  description,
  locked,
  onToggleLock,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  locked: boolean;
  onToggleLock: () => void;
}) {
  return (
    <div className="panel-header">
      <div className="panel-number" aria-hidden="true">{number}</div>
      <div className="panel-heading-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h2 tabIndex={-1}>{title}</h2>
        <p>{description}</p>
      </div>
      <button
        type="button"
        className={`lock-button ${locked ? 'locked' : ''}`}
        onClick={onToggleLock}
        aria-pressed={locked}
        aria-label={locked ? `Seção ${eyebrow} travada; desbloquear na aleatorização` : `Travar seção ${eyebrow} na aleatorização`}
        title={locked ? 'Desbloquear esta seção na aleatorização' : 'Preservar esta seção na aleatorização'}
      >
        {locked ? <Lock size={14} /> : <LockOpen size={14} />}
        <span>{locked ? 'Travada' : 'Travar'}</span>
      </button>
    </div>
  );
}
