import { useMemo, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import {
  getReferenceSuggestions,
  REFERENCE_KIND_META,
  type ReferenceItem,
  type ReferenceKind,
} from '@/lib/references';
import { usePromptStore } from '@/store/usePromptStore';

export function useReferenceSuggestions(kind: ReferenceKind) {
  const [round, setRound] = useState(() => Math.floor(Math.random() * 10_000));
  const suggestions = useMemo(() => getReferenceSuggestions(kind, 3, round), [kind, round]);
  return { suggestions, refresh: () => setRound((value) => value + 1) };
}

export function ReferenceSuggestions({ kind, suggestions, onRefresh }: {
  kind: ReferenceKind;
  suggestions: ReferenceItem[];
  onRefresh: () => void;
}) {
  const applyReference = usePromptStore((state) => state.applyReference);

  return (
    <div className="reference-suggestions">
      <div className="reference-suggestions-heading">
        <span>SUGESTÕES DO ACERVO</span>
        <button type="button" onClick={onRefresh} aria-label={`Atualizar sugestões de ${REFERENCE_KIND_META[kind].plural.toLocaleLowerCase('pt-BR')}`}><RefreshCw size={12} /> Outras</button>
      </div>
      <div className="reference-suggestion-list">
        {suggestions.map((item) => (
          <button type="button" key={item.id} className="reference-suggestion" title={item.output} aria-label={`Aplicar ${item.name} ao prompt`} onClick={() => applyReference(item.id)}>{item.name}</button>
        ))}
      </div>
    </div>
  );
}
