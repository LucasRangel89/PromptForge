import { useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Copy, Download, LibraryBig, Search, Trash2, Upload } from 'lucide-react';
import { PALETTES } from '@/lib/presets';
import { copyToClipboard, downloadFile } from '@/lib/utils';
import { MAX_SAVED_PROMPTS, usePromptStore, type SavedPrompt } from '@/store/usePromptStore';

export function Library() {
  const { savedPrompts, loadPrompt, deletePrompt, restoreDeletedPrompt, importPrompts, setView, notify } = usePromptStore();
  const [query, setQuery] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const search = query.trim().toLocaleLowerCase('pt-BR');
    if (!search) return savedPrompts;
    return savedPrompts.filter((item) => `${item.name} ${item.prompt} ${item.draft.engine}`.toLocaleLowerCase('pt-BR').includes(search));
  }, [query, savedPrompts]);

  const copyPrompt = async (item: SavedPrompt) => {
    try {
      await copyToClipboard(item.prompt);
      notify(`“${item.name}” copiado.`);
    } catch {
      notify('O navegador bloqueou o acesso à área de transferência.', 'error');
    }
  };

  const openPrompt = (item: SavedPrompt) => {
    const result = loadPrompt(item.id);
    if (result === 'loaded') {
      notify(`“${item.name}” restaurado no estúdio.`);
    } else if (result === 'full') {
      notify('A Biblioteca está cheia. Exporte ou exclua um item antes de trocar de rascunho; seu trabalho atual foi preservado.', 'error');
    } else {
      notify('Esse prompt não está mais disponível. Atualize a Biblioteca.', 'error');
    }
  };

  const removePrompt = (item: SavedPrompt) => {
    const deleted = deletePrompt(item.id);
    if (!deleted) {
      notify('Esse prompt já havia sido removido.', 'info');
      return;
    }
    notify('Prompt excluído da Biblioteca.', 'info', {
      label: 'Desfazer',
      onClick: () => {
        const restored = restoreDeletedPrompt(deleted);
        notify(
          restored ? 'Exclusão desfeita; o prompt voltou à Biblioteca.' : 'Não foi possível desfazer porque a Biblioteca está cheia.',
          restored ? 'success' : 'error',
        );
      },
    });
  };

  const exportAll = () => {
    downloadFile('promptforge-biblioteca.json', JSON.stringify({ format: 'promptforge-library/v2', prompts: savedPrompts }, null, 2), 'application/json');
    notify('Biblioteca exportada em JSON.');
  };

  const importLibrary = async (file?: File) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      notify('O arquivo de biblioteca deve ter no máximo 5 MB.', 'error');
      return;
    }
    try {
      const data = JSON.parse(await file.text()) as { prompts?: unknown };
      if (!Array.isArray(data.prompts)) throw new Error('invalid');
      const result = importPrompts(data.prompts);
      if (result.imported) {
        const notes = [
          result.duplicates ? `${result.duplicates} ${result.duplicates === 1 ? 'duplicado ignorado' : 'duplicados ignorados'}` : '',
          result.invalid ? `${result.invalid} ${result.invalid === 1 ? 'inválido ignorado' : 'inválidos ignorados'}` : '',
          result.capacity ? `${result.capacity} fora do limite de ${MAX_SAVED_PROMPTS}` : '',
        ].filter(Boolean);
        notify(
          `${result.imported} ${result.imported === 1 ? 'prompt importado' : 'prompts importados'}.${notes.length ? ` ${notes.join(' · ')}.` : ''}`,
          result.capacity || result.invalid ? 'info' : 'success',
        );
      } else if (result.capacity) {
        notify(`A Biblioteca atingiu o limite de ${MAX_SAVED_PROMPTS}. Nenhum item existente foi substituído; exporte ou exclua prompts antes de importar.`, 'error');
      } else if (result.invalid) {
        notify('Nenhum prompt válido foi encontrado. Use um backup exportado pelo PromptForge.', 'error');
      } else {
        notify('Nenhum prompt novo foi encontrado; itens idênticos já estão na Biblioteca.', 'info');
      }
    } catch {
      notify('Arquivo inválido. Use um backup JSON exportado pelo PromptForge.', 'error');
    } finally {
      if (fileInput.current) fileInput.current.value = '';
    }
  };

  return (
    <div className="library-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow page-eyebrow"><LibraryBig size={13} /> MEMÓRIA CRIATIVA</span>
          <h1>Suas ideias, prontas para continuar.</h1>
          <p>Recupere combinações, compare caminhos e preserve a identidade visual dos seus projetos.</p>
        </div>
        <div className="page-actions">
          <button type="button" className="button secondary" onClick={() => fileInput.current?.click()}><Upload size={16} /> Importar backup</button>
          <button type="button" className="button dark" onClick={exportAll} disabled={!savedPrompts.length}><Download size={16} /> Exportar biblioteca</button>
          <input ref={fileInput} type="file" accept="application/json,.json" onChange={(event) => importLibrary(event.target.files?.[0])} hidden />
        </div>
      </div>

      <div className="library-toolbar">
        <label className="search-field">
          <Search size={17} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por projeto, conteúdo ou gerador..." aria-label="Buscar prompts salvos" />
        </label>
        <span className={savedPrompts.length >= MAX_SAVED_PROMPTS ? 'capacity-reached' : ''}>
          {filtered.length} {filtered.length === 1 ? 'prompt' : 'prompts'} · {savedPrompts.length >= MAX_SAVED_PROMPTS ? 'limite de 60 atingido' : 'até 60 neste navegador'}
        </span>
      </div>

      {savedPrompts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon"><LibraryBig size={30} strokeWidth={1.3} /></div>
          <span className="eyebrow">SUA MEMÓRIA COMEÇA AQUI</span>
          <h2>Nenhum prompt salvo ainda.</h2>
          <p>Crie uma combinação no estúdio e clique em “Salvar” no painel de síntese. Suas combinações ficam disponíveis mesmo depois de recarregar a página.</p>
          <button type="button" className="button dark" onClick={() => setView('studio')}>Criar primeiro prompt</button>
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty-state compact">
          <Search size={25} />
          <h2>Nada encontrado para “{query}”.</h2>
          <button type="button" className="button text" onClick={() => setQuery('')}>Limpar busca</button>
        </div>
      ) : (
        <div className="library-grid">
          {filtered.map((item) => {
            const palette = PALETTES.find((option) => option.name === item.draft.palette);
            return (
              <article className="saved-card" key={item.id}>
                <div className="saved-card-visual" style={{ background: palette?.colors?.[0] ?? '#252824' }}>
                  <div className="saved-visual-lines" aria-hidden="true" />
                  <div className="saved-card-swatches">
                    {(palette?.colors ?? ['#252824', '#d4d6cc', '#f46d43']).map((color) => <i key={color} style={{ background: color }} />)}
                  </div>
                  <span>{item.draft.aspectRatio}</span>
                </div>
                <div className="saved-card-content">
                  <div className="saved-card-meta"><span>{item.draft.engine}</span><time dateTime={item.createdAt}>{new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(item.createdAt))}</time></div>
                  <h2 title={item.name}>{item.name}</h2>
                  <p>{item.prompt}</p>
                  <div className="saved-card-footer">
                    <button type="button" className="restore-button" onClick={() => openPrompt(item)}>Abrir no estúdio <ArrowUpRight size={14} /></button>
                    <div>
                      <button type="button" className="icon-button light" onClick={() => copyPrompt(item)} aria-label={`Copiar ${item.name}`}><Copy size={15} /></button>
                      <button type="button" className="icon-button light danger" onClick={() => removePrompt(item)} aria-label={`Excluir ${item.name}`}><Trash2 size={15} /></button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
      <p className="privacy-note">Os prompts são armazenados apenas no armazenamento local deste navegador. Exporte a biblioteca para criar um backup.</p>
    </div>
  );
}
