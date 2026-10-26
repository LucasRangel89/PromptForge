import React from 'react';
import { usePromptStore } from '@/store/usePromptStore';
import { PRESETS } from '@/lib/presets';
import { SelectCard } from '@/components/ui/SelectCard';
import { Upload, X } from 'lucide-react';

export function Step2World() {
  const { scenario, trend, context, characters, referenceImage, updateField, setStep } = usePromptStore();

  const handleAddCharacter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      e.preventDefault();
      updateField('characters', [...characters, e.currentTarget.value.trim()]);
      e.currentTarget.value = '';
    }
  };

  const removeCharacter = (idx: number) => {
    updateField('characters', characters.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500 pb-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-light text-slate-900 tracking-tight mb-2">02. Mundo Visual</h2>
        <p className="text-slate-500 font-sans text-sm max-w-2xl">
          Construa o cenário, defina tendências culturais e o contexto ao redor da sua âncora.
        </p>
      </div>

      <div className="space-y-6">
        <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase border-b border-slate-200 pb-2 block">
          Personagens Secundários / Entidades
        </label>
        {characters.length > 0 && <div className="flex flex-wrap gap-2 mb-3">
          {characters.map((char, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-sm flex items-center gap-2 font-mono uppercase border border-slate-200">
              {char}
              <button onClick={() => removeCharacter(idx)} className="hover:text-slate-900"><X className="w-3 h-3" /></button>
            </span>
          ))}
        </div>}
        <input
            type="text"
            onKeyDown={handleAddCharacter}
            placeholder="Digite e pressione Enter (ex: multidão, animais, NPCs)..."
            className="w-full bg-white border border-slate-200 shadow-sm rounded-sm p-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-slate-400 transition-colors font-sans text-sm"
          />
      </div>

      <div className="space-y-6">
        <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase border-b border-slate-200 pb-2 block">
          Tendência / Movimento
        </label>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PRESETS.trends.map((item) => (
             <SelectCard 
               key={item.name} 
               label={item.name} 
               sublabel={item.description}
               selected={trend === item.name} 
               onClick={() => updateField('trend', trend === item.name ? '' : item.name)} 
             />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase border-b border-slate-200 pb-2 block">
          Cenário
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRESETS.scenarios.map((item) => (
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
            type="text"
            value={scenario && !PRESETS.scenarios.find(s => s.name === scenario) ? scenario : ''}
            onChange={(e) => updateField('scenario', e.target.value)}
            placeholder="Cenário customizado (ex: Ruas de Tokyo chuvosa)..."
            className="w-full bg-white border border-slate-200 shadow-sm rounded-sm p-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-slate-400 transition-colors font-sans text-sm"
          />
      </div>

      <div className="space-y-6">
        <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase border-b border-slate-200 pb-2 block">
          Contexto / Emoção (Opcional)
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {["Melancólico", "Nostálgico", "Frenético", "Sombrio", "Eufórico", "Épico", "Misterioso", "Caótico", "Isolado"].map((mood) => (
            <button
              key={mood}
              onClick={() => updateField('context', context === mood ? '' : mood)}
              className={`px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all border ${
                context === mood
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
              }`}
            >
              {mood}
            </button>
          ))}
        </div>
        <input
            type="text"
            value={context && !["Melancólico", "Nostálgico", "Frenético", "Sombrio", "Eufórico", "Épico", "Misterioso", "Caótico", "Isolado"].includes(context) ? context : ''}
            onChange={(e) => updateField('context', e.target.value)}
            placeholder="Outra emoção ou contexto livre..."
            className="w-full bg-white border border-slate-200 shadow-sm rounded-sm p-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-slate-400 transition-colors font-sans text-sm"
          />
      </div>

      <div className="space-y-6">
        <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase border-b border-slate-200 pb-2 block">
          Imagem de Referência (Opcional)
        </label>
        
        {referenceImage ? (
          <div className="relative w-32 h-32 rounded-sm overflow-hidden border border-slate-300 shadow-sm">
            <img src={referenceImage} alt="Reference" className="w-full h-full object-cover" />
            <button 
              onClick={() => updateField('referenceImage', '')}
              className="absolute top-1 right-1 bg-white/80 p-1 rounded-sm text-slate-900 hover:text-red-600 shadow-sm border border-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <label className="border-2 border-dashed border-slate-300 hover:border-slate-500 rounded-sm p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors bg-white group">
            <Upload className="w-6 h-6 text-slate-300 group-hover:text-slate-500 transition-colors" />
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 uppercase tracking-widest">
              Drag Image Here
            </span>
            <input 
              type="file" 
              className="hidden" 
              accept="image/*"
              onChange={(e) => {
                if(e.target.files && e.target.files[0]) {
                  updateField('referenceImage', URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
          </label>
        )}
      </div>

      <div className="pt-8 flex justify-between border-t border-slate-200">
        <button
          onClick={() => setStep(1)}
          className="text-slate-500 hover:text-slate-900 px-6 py-4 rounded-sm text-sm uppercase tracking-widest transition-colors font-bold"
        >
          Voltar
        </button>
        <button
          onClick={() => setStep(3)}
          className="bg-slate-900 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-slate-800 transition-colors shadow-xl rounded-sm"
        >
          Avançar para Cena
        </button>
      </div>
    </div>
  );
}
