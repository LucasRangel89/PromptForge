import React from 'react';
import { usePromptStore } from '@/store/usePromptStore';
import { PRESETS } from '@/lib/presets';
import { SelectCard } from '@/components/ui/SelectCard';
import { Search, Sparkles } from 'lucide-react';

export function Step1Anchor() {
  const { anchor, customInput, updateField, setStep } = usePromptStore();

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-4">
        <h2 className="text-3xl font-light text-slate-900 tracking-tight mb-2">01. Âncora Criativa</h2>
        <p className="text-slate-500 font-sans text-sm max-w-2xl">
          A base da sua geração. Escolha um ícone estabelecido da cultura ou defina seu próprio protagonista/conceito inicial.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-6">
          <Sparkles className="w-4 h-4 text-slate-400" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Conceitos Pré-definidos</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRESETS.anchors.map((item) => (
             <SelectCard 
               key={item.name} 
               label={item.name} 
               sublabel={item.description}
               selected={anchor === item.name && !customInput} 
               onClick={() => {
                 updateField('anchor', item.name);
                 updateField('customInput', '');
               }} 
             />
          ))}
        </div>
      </div>

      <div className="space-y-6 mt-8">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <Search className="w-4 h-4 text-slate-400" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Texto Livre</span>
        </div>
        
        <div>
          <textarea
            value={customInput}
            onChange={(e) => {
              updateField('customInput', e.target.value);
              updateField('anchor', '');
            }}
            placeholder="Ou digite sua própria ideia (ex: Um detetive cyberpunk lendo um livro)..."
            className="w-full bg-white border border-slate-200 shadow-sm rounded-sm p-6 text-xl font-light focus:outline-none resize-none placeholder:text-slate-300 focus:border-slate-400 transition-colors h-32"
          />
        </div>
      </div>

      <div className="pt-8 flex justify-end">
        <button
          onClick={() => setStep(2)}
          disabled={!anchor && !customInput}
          className="bg-slate-900 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-slate-800 transition-colors shadow-xl disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
        >
          Avançar para o Mundo
        </button>
      </div>
    </div>
  );
}
