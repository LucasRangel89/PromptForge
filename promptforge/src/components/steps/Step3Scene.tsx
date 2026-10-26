import React from 'react';
import { usePromptStore } from '@/store/usePromptStore';
import { Pencil, Sparkles, Loader2, Save, Wand2 } from 'lucide-react';
import { PRESETS } from '@/lib/presets';

const MOOD_TAGS = [
  "Melancólico", "Nostálgico", "Frenético", "Sombrio", 
  "Eufórico", "Épico", "Misterioso", "Caótico", "Isolado"
];

export function Step3Scene() {
  const { 
    anchor, customInput, scenario, context, trend, characters, 
    sceneDescription, updateField, setStep, generateScene, isGeneratingScene,
    creativeDistance, refineScene, saveCombination, savedCombinations
  } = usePromptStore();

  const handleGenerate = () => {
    generateScene();
  };

  const handleRefine = () => {
    refineScene();
  };

  const handleSave = () => {
    saveCombination();
  };

  const toggleMood = (mood: string) => {
    if (context === mood) {
      updateField('context', '');
    } else {
      updateField('context', mood);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500 pb-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-light text-slate-900 tracking-tight mb-2">03. Roteirista de Cena</h2>
        <p className="text-slate-500 font-sans text-sm max-w-2xl">
          Transforme os elementos selecionados em uma narrativa forte e fotográfica antes de aplicar a linguagem visual. O IA Roteirista cria a cola semântica ideal para os geradores de imagem.
        </p>
      </div>

      {/* Mood Suggestions */}
      <div className="space-y-4">
        <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase border-b border-slate-200 pb-2 block">
          Sugestões de Atmosfera/Emoção
        </label>
        <div className="flex flex-wrap gap-2">
          {MOOD_TAGS.map((mood) => (
            <button
              key={mood}
              onClick={() => toggleMood(mood)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all border ${
                context === mood
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
              }`}
            >
              {mood}
            </button>
          ))}
        </div>
      </div>

      {/* Creative Distance Slider */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">
            Distância Criativa da IA
          </label>
          <span className="text-xs font-bold text-slate-900">{creativeDistance}%</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">0% (Coerente)</span>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={creativeDistance}
            onChange={(e) => updateField('creativeDistance', parseInt(e.target.value))}
            className="flex-1 accent-slate-900"
          />
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">100% (Experimental)</span>
        </div>
      </div>


      <div className="flex flex-col md:flex-row gap-6">
        {/* Input Parameters Feedback */}
        <div className="w-full md:w-1/3 space-y-4">
          <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase border-b border-slate-200 pb-2 block">
            Ingredientes Atuais
          </label>
          <ul className="space-y-2 text-sm text-slate-600 font-sans">
            <li className="flex gap-2">
              <span className="font-bold text-slate-900">Alvo:</span> 
              <span>{anchor || customInput || 'Não definido'}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-slate-900">Cenário:</span> 
              <span>{scenario || 'Não definido'}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-slate-900">Atmosfera:</span> 
              <span>{context || 'Não definido'}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-slate-900">Estética:</span> 
              <span>{trend || 'Nenhuma'}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-slate-900">Adicionais:</span> 
              <span>{characters.length > 0 ? characters.join(', ') : 'Nenhum'}</span>
            </li>
          </ul>

          <button
            onClick={handleGenerate}
            disabled={isGeneratingScene}
            className="w-full mt-6 bg-slate-900 text-white px-4 py-4 font-bold text-xs tracking-widest uppercase hover:bg-slate-800 transition-colors shadow-sm rounded-sm flex items-center justify-center gap-2 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            {isGeneratingScene ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Escrevendo...</>
            ) : (
              <><Sparkles className="w-4 h-4" /> Gerar Descrição</>
            )}
          </button>
        </div>

        {/* Output Scene */}
        <div className="w-full md:w-2/3 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">
              Narrativa do Diretor de Arte
            </label>
            <Pencil className="w-3 h-3 text-slate-400" />
            
            {(sceneDescription && !isGeneratingScene) && (
              <div className="ml-auto flex gap-2">
                <button
                  onClick={handleRefine}
                  className="text-[10px] font-bold tracking-widest uppercase text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-400 px-3 py-1 rounded-sm flex items-center gap-1 transition-colors bg-white"
                  title="Adicionar mais detalhes sensoriais e peso emocional"
                >
                  <Wand2 className="w-3 h-3" /> Refinar Detalhes
                </button>
                <button
                  onClick={handleSave}
                  className="text-[10px] font-bold tracking-widest uppercase text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-400 px-3 py-1 rounded-sm flex items-center gap-1 transition-colors bg-white"
                  title="Salvar esta combinação para o futuro"
                >
                  <Save className="w-3 h-3" /> Salvar Combo
                </button>
              </div>
            )}
          </div>
          
          <div className={`relative transition-all duration-500 ${isGeneratingScene ? 'opacity-50 animate-pulse' : 'opacity-100'}`}>
            <textarea
              value={sceneDescription}
              onChange={(e) => updateField('sceneDescription', e.target.value)}
              disabled={isGeneratingScene}
              placeholder="Clique em 'Gerar Descrição' para que a IA crie a narrativa... ou digite sua cena se preferir."
              className="w-full min-h-[250px] bg-slate-50 border border-slate-200 rounded-sm p-6 text-slate-900 focus:outline-none focus:border-slate-400 transition-colors text-lg font-light leading-relaxed resize-y placeholder:text-slate-300 disabled:cursor-not-allowed"
            />
          </div>
        </div>
      </div>
      
      {/* Saved Combinations Preview (if any) */}
      {savedCombinations.length > 0 && (
         <div className="mt-8 border border-slate-200 bg-slate-50 p-6 rounded-sm">
            <h4 className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-4">Suas Combinações Salvas</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedCombinations.map(combo => (
                <div key={combo.id} className="bg-white p-4 border border-slate-200 rounded-sm shadow-sm text-sm">
                  <div className="font-bold text-slate-900 mb-1">{combo.anchor || combo.customInput}</div>
                  <div className="text-slate-500 text-xs mb-2">em {combo.scenario}</div>
                  <p className="text-slate-700 italic text-xs line-clamp-3">"{combo.sceneDescription}"</p>
                  <button 
                    onClick={() => {
                        updateField('anchor', combo.anchor);
                        updateField('customInput', combo.customInput);
                        updateField('scenario', combo.scenario);
                        updateField('sceneDescription', combo.sceneDescription);
                    }}
                    className="mt-3 text-[10px] font-bold tracking-widest uppercase text-slate-600 hover:text-slate-900 underline"
                  >
                    Restaurar Combinação
                  </button>
                </div>
              ))}
            </div>
         </div>
      )}


      <div className="pt-8 flex justify-between border-t border-slate-200 mt-12">
        <button
          onClick={() => setStep(2)}
          className="text-slate-500 hover:text-slate-900 px-6 py-4 rounded-sm text-sm uppercase tracking-widest transition-colors font-bold border border-transparent"
        >
          Voltar
        </button>
        <button
          onClick={() => setStep(4)}
          className="text-slate-600 hover:text-slate-900 bg-white px-10 py-4 border border-slate-200 shadow-sm font-bold text-sm tracking-widest uppercase transition-colors rounded-sm"
        >
          Avançar para Linguagem Visual
        </button>
      </div>
    </div>
  );
}
