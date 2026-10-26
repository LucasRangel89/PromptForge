import React, { useState } from 'react';
import { usePromptStore } from '@/store/usePromptStore';

export function Step5Synthesis() {
  const { promptFinal, updateField, generatePrompt, setStep } = usePromptStore();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptFinal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500">
      <div className="space-y-4">
        <h2 className="text-3xl font-light text-slate-900 tracking-tight mb-2">
          04. Output Final
        </h2>
        <p className="text-slate-500 font-sans text-sm max-w-2xl">
          Seu prompt orquestrado está pronto. Copie e use no Midjourney, DALL-E, ou Stable Diffusion.
        </p>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm flex flex-col rounded-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Prompt Constructor</span>
          <span className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded text-slate-600 font-bold">V 1.0</span>
        </div>
        <textarea
          value={promptFinal}
          onChange={(e) => updateField('promptFinal', e.target.value)}
          className="p-8 h-[250px] text-xl font-light focus:outline-none resize-y placeholder:text-slate-200 text-slate-900 leading-relaxed bg-white"
        />
      </div>

      <div className="flex justify-center">
        <button 
          onClick={() => generatePrompt()}
          className="bg-slate-900 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-slate-800 transition-colors shadow-xl rounded-sm">
          Regenerate Parameters
        </button>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-slate-200"></div>
          <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Final Result</span>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>
        <div className="p-8 bg-slate-900 text-slate-300 rounded-sm relative shadow-md">
          <p className="text-lg leading-relaxed italic font-light">
            "{promptFinal}"
          </p>
          <button 
            onClick={handleCopy}
            className="absolute top-4 right-4 text-[10px] border border-slate-700 px-3 py-1 hover:bg-slate-800 text-slate-400 uppercase tracking-tighter rounded-sm">
            {copied ? 'Copied' : 'Copy Prompt'}
          </button>
        </div>
      </div>

      <div className="pt-12 flex justify-between">
        <button
          onClick={() => setStep(4)}
          className="text-slate-500 hover:text-slate-900 px-6 py-4 rounded-sm text-sm uppercase tracking-widest transition-colors font-bold border border-slate-200 bg-white shadow-sm"
        >
          Ajustar Linguagem
        </button>
        <button
          onClick={() => {
            updateField('anchor', '');
            updateField('customInput', '');
            updateField('scenario', '');
            updateField('trend', '');
            updateField('context', '');
            updateField('style', []);
            updateField('medium', '');
            updateField('palette', '');
            updateField('lighting', '');
            updateField('texture', '');
            updateField('composition', '');
            updateField('sceneDescription', '');
            setStep(1);
          }}
          className="text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-10 py-4 border border-slate-200 font-bold text-sm tracking-widest uppercase transition-colors rounded-sm"
        >
          Criar Novo
        </button>
      </div>
    </div>
  );
}
