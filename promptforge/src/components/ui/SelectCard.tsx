import React from 'react';
import { cn } from '@/lib/utils';

interface SelectCardProps {
  selected: boolean;
  onClick: () => void;
  label: string;
  sublabel?: string;
}

export function SelectCard({ selected, onClick, label, sublabel }: SelectCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left p-4 rounded-md border transition-all duration-200 flex flex-col gap-1 items-center justify-center text-center aspect-[2/1] sm:aspect-auto sm:text-left sm:items-start sm:justify-start", 
        selected 
          ? "border-slate-900 bg-slate-900 text-white shadow-sm" 
          : "border-slate-200 bg-white hover:border-slate-400 text-slate-800"
      )}
    >
      <span className={cn(
        "text-[10px] uppercase font-bold tracking-tight",
        selected ? "text-white" : "text-slate-600"
      )}>
        {label}
      </span>
      {sublabel && (
        <span className="text-[10px] text-slate-400 font-mono line-clamp-2 mt-1">
          {sublabel}
        </span>
      )}
    </button>
  );
}
