import React from 'react';
import { usePromptStore } from '@/store/usePromptStore';
import { PRESETS, ART_DIRECTIONS } from '@/lib/presets';
import { SelectCard } from '@/components/ui/SelectCard';
import { Sparkles } from 'lucide-react';

export function Step4Language() {
  const { style, medium, palette, lighting, texture, composition, updateField, setStep, generatePrompt } = usePromptStore();

  const toggleStyle = (item: string) => {
    if (style.includes(item)) {
      updateField('style', style.filter(s => s !== item));
    } else {
      updateField('style', [...style, item]);
    }
  };

  const applyArtDirection = (preset: typeof ART_DIRECTIONS[0]) => {
    updateField('style', preset.style);
    updateField('medium', preset.medium);
    updateField('palette', preset.palette);
    updateField('lighting', preset.lighting);
    updateField('texture', preset.texture);
    updateField('composition', preset.composition);
  };

  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500 pb-12">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-light text-slate-900 tracking-tight mb-2">03. Linguagem Visual</h2>
        </div>
        <p className="text-slate-500 font-sans text-sm max-w-2xl">
          A direção de arte e fotografia. Defina luz, meio, paleta e textura do seu prompt ou use as sugestões do Diretor de Arte.
        </p>
      </div>

      <div className="bg-slate-100 border border-slate-200 p-6 rounded-sm">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-slate-600" />
          <span className="text-[10px] font-bold text-slate-600 tracking-[0.2em] uppercase">Sugestões do Diretor de Arte</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ART_DIRECTIONS.map(dir => (
            <button
              key={dir.name}
              onClick={() => applyArtDirection(dir)}
              className="text-left p-4 bg-white border border-slate-200 hover:border-slate-400 hover:shadow-sm transition-all rounded-sm"
            >
              <h4 className="text-sm font-bold text-slate-900 mb-1">{dir.name}</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">{dir.description}</p>
            </button>
          ))}
        </div>
      </div>

      {[{ title: 'Estilo', key: 'style' as const, options: PRESETS.styles, isMulti: true, val: style },
        { title: 'Meio de Criação', key: 'medium' as const, options: PRESETS.mediums, isMulti: false, val: medium },
        { title: 'Paleta de Cores', key: 'palette' as const, options: PRESETS.palettes, isMulti: false, val: palette },
        { title: 'Design de Luz', key: 'lighting' as const, options: PRESETS.lightings, isMulti: false, val: lighting },
        { title: 'Textura e Acabamento', key: 'texture' as const, options: PRESETS.textures, isMulti: false, val: texture },
        { title: 'Câmera e Lente', key: 'composition' as const, options: PRESETS.compositions, isMulti: false, val: composition }
      ].map((section) => (
        <div key={section.title} className="space-y-4">
          <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase border-b border-slate-200 pb-2 block">
            {section.title} {section.isMulti && '(Múltipla escolha)'}
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {section.options.map((item) => (
               <SelectCard 
                 key={item.name} 
                 label={item.name} 
                 sublabel={item.description}
                 selected={section.isMulti ? (section.val as string[]).includes(item.name) : section.val === item.name} 
                 onClick={() => {
                   if (section.isMulti) toggleStyle(item.name);
                   else updateField(section.key as any, section.val === item.name ? '' : item.name);
                 }} 
               />
            ))}
          </div>
        </div>
      ))}

      <div className="pt-8 flex justify-between border-t border-slate-200">
        <button
          onClick={() => setStep(3)}
          className="text-slate-500 hover:text-slate-900 px-6 py-4 rounded-sm text-sm uppercase tracking-widest transition-colors font-bold"
        >
          Voltar
        </button>
        <button
          onClick={() => {
            generatePrompt();
            setStep(5);
          }}
          className="bg-slate-900 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-slate-800 transition-colors shadow-xl rounded-sm"
        >
          Sintetizar Prompt
        </button>
      </div>
    </div>
  );
}
