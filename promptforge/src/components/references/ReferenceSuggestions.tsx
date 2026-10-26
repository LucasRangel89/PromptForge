import { useMemo, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import {
  getReferenceSuggestions,
  REFERENCE_KIND_META,
  REFERENCE_POOLS,
  type ReferenceItem,
  type ReferenceKind,
} from '@/lib/references';
import { usePromptStore } from '@/store/usePromptStore';

export const SUGGESTION_COUNTS = [6, 12] as const;
export type SuggestionCount = (typeof SUGGESTION_COUNTS)[number];

type SuggestionRange = { start: number; end: number; total: number };
type SuggestionSession = { seed: number; cursor: number };
const randomSeed = () => Math.floor(Math.random() * 10_000);

export function useReferenceSuggestions(initialKind: ReferenceKind) {
  const [kind, setKind] = useState(initialKind);
  const [count, setCount] = useState<SuggestionCount>(6);
  const [sessions, setSessions] = useState<Partial<Record<ReferenceKind, SuggestionSession>>>(() => ({
    [initialKind]: { seed: randomSeed(), cursor: 0 },
  }));
  const [placeholderSeed] = useState(randomSeed);
  const [placeholderCursor, setPlaceholderCursor] = useState(0);

  const { seed, cursor } = sessions[kind] ?? { seed: 0, cursor: 0 };
  const total = REFERENCE_POOLS[kind].length;
  const suggestions = useMemo(
    () => getReferenceSuggestions(kind, count, seed, cursor),
    [kind, count, seed, cursor],
  );
  const placeholderName = useMemo(
    () => getReferenceSuggestions(initialKind, 1, placeholderSeed, placeholderCursor)[0]?.name,
    [initialKind, placeholderSeed, placeholderCursor],
  );

  const onRefresh = () => {
    setSessions((current) => {
      const active = current[kind] ?? { seed: randomSeed(), cursor: 0 };
      const nextCursor = active.cursor + suggestions.length;
      return {
        ...current,
        [kind]: suggestions.length && nextCursor < total
          ? { ...active, cursor: nextCursor }
          : { seed: active.seed + 1, cursor: 0 },
      };
    });
    setPlaceholderCursor((value) => (
      value + 1 >= REFERENCE_POOLS[initialKind].length ? 0 : value + 1
    ));
  };

  const onKindChange = (nextKind: ReferenceKind) => {
    if (nextKind === kind) return;
    setSessions((current) => current[nextKind] ? current : {
      ...current,
      [nextKind]: { seed: randomSeed(), cursor: 0 },
    });
    setKind(nextKind);
  };

  return {
    placeholderName,
    suggestionProps: {
      kind,
      suggestions,
      onRefresh,
      onKindChange,
      count,
      onCountChange: setCount,
      range: {
        start: suggestions.length ? cursor + 1 : 0,
        end: cursor + suggestions.length,
        total,
      } satisfies SuggestionRange,
    },
  };
}

export function ReferenceSuggestions({ kind, kinds, suggestions, onRefresh, onKindChange, count, onCountChange, range }: {
  kind: ReferenceKind;
  kinds?: ReferenceKind[];
  suggestions: ReferenceItem[];
  onRefresh: () => void;
  onKindChange: (kind: ReferenceKind) => void;
  count: SuggestionCount;
  onCountChange: (count: SuggestionCount) => void;
  range: SuggestionRange;
}) {
  const applyReference = usePromptStore((state) => state.applyReference);
  const layers = kinds ?? [kind];

  return (
    <div className="reference-suggestions">
      <div className="reference-suggestions-heading">
        <div className="reference-suggestions-title">
          <span>SUGESTÕES DO ACERVO</span>
          <span className="reference-suggestion-range" role="status">{range.start}–{range.end} de {range.total}</span>
        </div>
        <div className="reference-suggestions-controls">
          <select aria-label="Quantidade de sugestões por grupo" value={count} onChange={(event) => onCountChange(Number(event.target.value) as SuggestionCount)}>
            {SUGGESTION_COUNTS.map((value) => <option key={value} value={value}>{value} por vez</option>)}
          </select>
          <button type="button" onClick={onRefresh} disabled={!suggestions.length} aria-label={`Atualizar sugestões de ${REFERENCE_KIND_META[kind].plural.toLocaleLowerCase('pt-BR')}`}><RefreshCw size={12} /> Outras {count}</button>
        </div>
      </div>
      {layers.length > 1 && (
        <div className="reference-kind-tabs" role="group" aria-label="Camada das sugestões">
          {layers.map((value) => (
            <button type="button" key={value} className={value === kind ? 'selected' : ''} aria-pressed={value === kind} onClick={() => onKindChange(value)}>{REFERENCE_KIND_META[value].label}</button>
          ))}
        </div>
      )}
      <div className="reference-suggestion-list">
        {suggestions.map((item) => (
          <button type="button" key={item.id} className="reference-suggestion" title={item.output} aria-label={`Aplicar ${item.name} ao prompt`} onClick={() => applyReference(item.id)}>{item.name}</button>
        ))}
      </div>
    </div>
  );
}
