import { useMemo, useState } from 'react';
import { ArrowUpRight, Database, History, RefreshCw, Search, Shuffle, Star } from 'lucide-react';
import {
  ALL_REFERENCES,
  findReferenceById,
  normalizeSearch,
  REFERENCE_KIND_META,
  shuffleReferences,
  type ReferenceItem,
  type ReferenceKind,
} from '@/lib/references';
import { usePromptStore } from '@/store/usePromptStore';

const PAGE_SIZE_OPTIONS = [24, 48, 96] as const;
type PageSize = (typeof PAGE_SIZE_OPTIONS)[number];
const SEARCH_PLACEHOLDERS = [
  'Tente “Brasil”, “70s” ou “câmera”...',
  'Busque uma personagem, atmosfera ou textura...',
  'Explore “Marajoara”, “noir” ou “Videogames”...',
  'Digite uma referência, categoria ou descrição...',
];

type KindFilter = ReferenceKind | 'all';
type CollectionFilter = 'all' | 'favorites' | 'recent';

export function ReferenceLibrary() {
  const applyReference = usePromptStore((state) => state.applyReference);
  const favoriteReferenceIds = usePromptStore((state) => state.favoriteReferenceIds);
  const recentReferenceIds = usePromptStore((state) => state.recentReferenceIds);
  const toggleFavoriteReference = usePromptStore((state) => state.toggleFavoriteReference);
  const clearRecentReferences = usePromptStore((state) => state.clearRecentReferences);
  const [query, setQuery] = useState('');
  const [collection, setCollection] = useState<CollectionFilter>('all');
  const [kind, setKind] = useState<KindFilter>('all');
  const [category, setCategory] = useState('all');
  const [era, setEra] = useState('all');
  const [source, setSource] = useState('all');
  const [round, setRound] = useState(() => Math.floor(Math.random() * 10_000));
  const [pageSize, setPageSize] = useState<PageSize>(24);
  const [visible, setVisible] = useState(24);

  const sources = useMemo(() => [...new Set(ALL_REFERENCES.map((item) => item.source))].sort(), []);
  const favoriteIds = useMemo(() => favoriteReferenceIds.filter((id) => Boolean(findReferenceById(id))), [favoriteReferenceIds]);
  const recentIds = useMemo(() => recentReferenceIds.filter((id) => Boolean(findReferenceById(id))), [recentReferenceIds]);
  const favoriteSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);
  const recentSet = useMemo(() => new Set(recentIds), [recentIds]);
  const facetItems = useMemo(() => ALL_REFERENCES.filter((item) => (
    (kind === 'all' || item.kind === kind) && (source === 'all' || item.source === source)
  )), [kind, source]);
  const categories = useMemo(() => [...new Set(facetItems.map((item) => item.category).filter(Boolean))].sort(), [facetItems]);
  const eras = useMemo(() => [...new Set(facetItems.map((item) => item.era).filter(Boolean))].sort(), [facetItems]);

  const filtered = useMemo(() => {
    const search = normalizeSearch(query);
    return ALL_REFERENCES.filter((item) => {
      if (kind !== 'all' && item.kind !== kind) return false;
      if (source !== 'all' && item.source !== source) return false;
      if (collection === 'favorites' && !favoriteSet.has(item.id)) return false;
      if (collection === 'recent' && !recentSet.has(item.id)) return false;
      if (category !== 'all' && item.category !== category) return false;
      if (era !== 'all' && item.era !== era) return false;
      if (!search) return true;
      return normalizeSearch(`${item.name} ${item.output} ${item.description} ${item.category} ${item.era} ${item.source}`).includes(search);
    });
  }, [query, kind, source, category, era, collection, favoriteSet, recentSet]);

  const ordered = useMemo(() => {
    if (collection !== 'recent') return shuffleReferences(filtered, round);
    const included = new Set(filtered.map((item) => item.id));
    return recentIds
      .map((id) => findReferenceById(id))
      .filter((item): item is ReferenceItem => Boolean(item && included.has(item.id)));
  }, [filtered, round, collection, recentIds]);
  const displayed = ordered.slice(0, visible);
  const hasFilters = Boolean(query || kind !== 'all' || category !== 'all' || era !== 'all' || source !== 'all' || collection !== 'all');

  const resetPage = () => setVisible(pageSize);
  const clearFilters = () => {
    setQuery('');
    setCollection('all');
    setKind('all');
    setCategory('all');
    setEra('all');
    setSource('all');
    setVisible(pageSize);
  };
  const selectCollection = (value: CollectionFilter) => {
    setCollection(value);
    setVisible(pageSize);
  };
  const applyRandom = () => {
    if (!filtered.length) return;
    const item = filtered[Math.floor(Math.random() * filtered.length)];
    applyAndReturn(item.id);
  };
  const applyAndReturn = (id: string) => {
    if (!applyReference(id)) return;
    requestAnimationFrame(() => document.querySelector<HTMLElement>('.panel-heading-copy h2')?.focus());
  };

  return (
    <div className="references-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow page-eyebrow"><Database size={13} /> ACERVO CULTURAL E VISUAL</span>
          <h1>Referências para sair do óbvio.</h1>
          <p>{ALL_REFERENCES.length} opções pesquisáveis dos sequenciadores, protótipos e da curadoria PromptForge. Aplique uma camada por vez e mantenha o controle do prompt.</p>
        </div>
        <div className="page-actions">
          {collection !== 'recent' && <button type="button" className="button secondary" onClick={() => { setRound((value) => value + 1); resetPage(); }}><RefreshCw size={16} /> Atualizar sugestões</button>}
          <button type="button" className="button dark" disabled={!filtered.length} onClick={applyRandom}><Shuffle size={16} /> Aplicar aleatória</button>
        </div>
      </div>

      <section className="reference-filters" aria-label="Filtros do acervo">
        <label className="reference-search">
          <span>Buscar no acervo</span>
          <div><Search size={17} /><input value={query} onChange={(event) => { setQuery(event.target.value); resetPage(); }} placeholder={SEARCH_PLACEHOLDERS[round % SEARCH_PLACEHOLDERS.length]} /></div>
        </label>
        <div className="reference-filter-grid">
          <label className="reference-filter"><span>Camada</span><select value={kind} onChange={(event) => { setKind(event.target.value as KindFilter); setCategory('all'); setEra('all'); resetPage(); }}><option value="all">Todas as camadas</option>{Object.entries(REFERENCE_KIND_META).map(([value, meta]) => <option key={value} value={value}>{meta.plural}</option>)}</select></label>
          <label className="reference-filter"><span>Categoria</span><select value={category} onChange={(event) => { setCategory(event.target.value); resetPage(); }}><option value="all">Todas</option>{categories.map((value) => <option key={value}>{value}</option>)}</select></label>
          <label className="reference-filter"><span>Época</span><select value={era} onChange={(event) => { setEra(event.target.value); resetPage(); }}><option value="all">Todas</option>{eras.map((value) => <option key={value}>{value}</option>)}</select></label>
          <label className="reference-filter"><span>Origem</span><select value={source} onChange={(event) => { setSource(event.target.value); setCategory('all'); setEra('all'); resetPage(); }}><option value="all">Todas</option>{sources.map((value) => <option key={value}>{value}</option>)}</select></label>
        </div>
      </section>

      <div className="reference-collections" role="group" aria-label="Coleções do acervo">
        <button type="button" className={collection === 'all' ? 'selected' : ''} aria-pressed={collection === 'all'} onClick={() => selectCollection('all')}>Todas</button>
        <button type="button" className={collection === 'favorites' ? 'selected' : ''} aria-pressed={collection === 'favorites'} onClick={() => selectCollection('favorites')}><Star size={13} /> Favoritas <span>{favoriteIds.length}</span></button>
        <button type="button" className={collection === 'recent' ? 'selected' : ''} aria-pressed={collection === 'recent'} onClick={() => selectCollection('recent')}><History size={13} /> Recentes <span>{recentIds.length}</span></button>
      </div>

      <div className="reference-results-bar">
        <p role="status">Exibindo {displayed.length} de {filtered.length} {filtered.length === 1 ? 'referência' : 'referências'}.</p>
        <div className="reference-results-actions">
          <label className="reference-page-size"><span>Por página</span><select value={pageSize} onChange={(event) => { const value = Number(event.target.value) as PageSize; setPageSize(value); setVisible(value); }}>{PAGE_SIZE_OPTIONS.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
          {collection === 'recent' && recentIds.length > 0 && <button type="button" className="button text" onClick={clearRecentReferences}>Limpar recentes</button>}
          {hasFilters && <button type="button" className="button text" onClick={clearFilters}>Limpar filtros</button>}
        </div>
      </div>

      {displayed.length ? (
        <>
          <div className="reference-grid">
            {displayed.map((item) => {
              const favorite = favoriteSet.has(item.id);
              return (
              <article className="reference-card" key={item.id}>
                <div className="reference-card-top">
                  <span>{REFERENCE_KIND_META[item.kind].label}</span>
                  <div className="reference-card-tools">
                    <span>{item.era || 'Atemporal'}</span>
                    <button
                      type="button"
                      className={`reference-favorite ${favorite ? 'selected' : ''}`}
                      aria-pressed={favorite}
                      aria-label={favorite ? `Remover ${item.name} dos favoritos` : `Adicionar ${item.name} aos favoritos`}
                      title={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                      onClick={() => toggleFavoriteReference(item.id)}
                    ><Star size={14} fill={favorite ? 'currentColor' : 'none'} aria-hidden="true" /></button>
                  </div>
                </div>
                <h2>{item.name}</h2>
                <p title={item.output}>{item.output}</p>
                <div className="reference-card-source"><span>{item.category || item.source}</span><span>{item.source}</span></div>
                <button type="button" onClick={() => applyAndReturn(item.id)} aria-label={`Aplicar ${item.name} ao prompt`}>Usar no prompt <ArrowUpRight size={14} /></button>
              </article>
              );
            })}
          </div>
          {visible < filtered.length && <button type="button" className="button secondary reference-load-more" onClick={() => setVisible((value) => value + pageSize)}>Mostrar mais {Math.min(pageSize, filtered.length - visible)} referências</button>}
        </>
      ) : collection === 'favorites' && favoriteIds.length === 0 ? (
        <div className="empty-state compact">
          <Star size={25} />
          <h2>Nenhuma referência favorita.</h2>
          <p>Use a estrela nos cartões para montar uma coleção de acesso rápido. Favoritar não altera seu prompt.</p>
          <button type="button" className="button text" onClick={clearFilters}>Explorar referências</button>
        </div>
      ) : collection === 'recent' && recentIds.length === 0 ? (
        <div className="empty-state compact">
          <History size={25} />
          <h2>Nenhuma referência aplicada ainda.</h2>
          <p>Ao usar uma referência no prompt, ela aparecerá aqui. O histórico guarda somente os 12 IDs mais recentes neste navegador.</p>
          <button type="button" className="button text" onClick={clearFilters}>Explorar referências</button>
        </div>
      ) : (
        <div className="empty-state compact">
          <Search size={25} />
          <h2>Nenhuma referência encontrada.</h2>
          <p>Tente outro termo ou remova alguns filtros para ampliar as possibilidades.</p>
          <button type="button" className="button text" onClick={clearFilters}>Limpar busca e filtros</button>
        </div>
      )}
      <p className="privacy-note">Os sequenciadores originais foram preservados. Favoritos e recentes guardam apenas IDs neste navegador; nenhuma referência é aplicada sem uma ação explícita.</p>
    </div>
  );
}
