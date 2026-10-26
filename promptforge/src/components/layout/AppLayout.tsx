import React from 'react';
import { cn } from '@/lib/utils';
import { usePromptStore } from '@/store/usePromptStore';
import { Sparkles, Image as ImageIcon, SlidersHorizontal, Wand2, FileImage } from 'lucide-react';

const steps = [
  { id: 1, name: 'Âncora', icon: Sparkles },
  { id: 2, name: 'Mundo', icon: ImageIcon },
  { id: 3, name: 'Cena', icon: FileImage },
  { id: 4, name: 'Linguagem', icon: SlidersHorizontal },
  { id: 5, name: 'Síntese', icon: Wand2 },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { step, setStep } = usePromptStore();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-slate-200 selection:text-slate-900">
      {/* Header */}
      <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <span className="font-bold tracking-tight text-xl">PromptForge</span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium text-slate-500">
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">V1.0 - Orquestrador de Agentes</span>
          </nav>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Nav */}
        <aside className="w-24 lg:w-64 border-r border-slate-200 bg-white flex flex-col shrink-0">
          <nav className="flex-1 py-8 flex flex-col gap-2 px-4">
            {steps.map((s) => {
              const Icon = s.icon;
              const isActive = step === s.id;
              const isPast = step > s.id;
              
              return (
                <button
                  key={s.id}
                  onClick={() => setStep(s.id)}
                  className={cn(
                    "flex flex-col lg:flex-row items-center gap-3 p-4 rounded-md transition-all",
                    "border border-transparent",
                    isActive && "bg-slate-50 border-slate-200 text-slate-900",
                    !isActive && isPast && "text-slate-500 hover:bg-slate-50",
                    !isActive && !isPast && "text-slate-300 cursor-not-allowed"
                  )}
                  disabled={!isPast && !isActive && false} 
                >
                  <div className={cn(
                    "w-8 h-8 rounded-sm flex items-center justify-center font-mono text-sm border",
                    isActive ? "bg-slate-900 border-slate-900 text-white" : "border-slate-200 bg-white"
                  )}>
                    {isActive ? <Icon className="w-4 h-4" /> : `0${s.id}`}
                  </div>
                  <span className="text-[10px] lg:text-xs font-bold uppercase tracking-widest hidden lg:block">
                    {s.name}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-slate-50/50">
          <div className="flex-1 w-full max-w-5xl mx-auto p-6 md:p-10 lg:p-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
