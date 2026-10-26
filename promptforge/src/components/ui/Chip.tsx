import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  children: ReactNode;
};

export function Chip({ selected = false, children, className, ...props }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn('chip', selected && 'selected', className)}
      {...props}
    >
      {selected && <Check size={12} strokeWidth={2.5} aria-hidden="true" />}
      {children}
    </button>
  );
}
