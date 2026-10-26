# PromptForge Studio

Painel responsivo para transformar uma ideia em um prompt de imagem estruturado. A interface foi construída sobre React, TypeScript, Vite, Tailwind CSS e Zustand, aproveitando a pesquisa, os presets e os protótipos presentes no repositório.

## Recursos

- Fluxo em quatro áreas: **Conceito, Cena, Estilo e Ajustes**.
- Prompt atualizado em tempo real, nos modos **Fluido**, **Compacto** e **JSON**.
- **Acervo com 1.124 referências únicas e pesquisáveis**: 300 novas entradas curadas, 780 opções das fontes originais e 62 presets, com 18 redundâncias homônimas removidas.
- Sugestões em grupos de 6 ou 12, com posição no conjunto, diversidade de origens/categorias e percurso sem repetição até concluir cada camada.
- Camadas navegáveis nas sugestões, placeholders variáveis e aplicação de referências sem apagar a digitação.
- Busca por nome, descrição e metadados, filtros por camada, categoria, época e origem, paginação e aplicação aleatória dentro do filtro.
- Todas as 1.124 referências visíveis possuem categoria, incluindo 439 registros antigos classificados retroativamente.
- Presets curados de sujeitos, cenários, ações, atmosfera, linguagem, luz, câmera e textura.
- Direções de arte completas e combinações aleatórias com travas por seção.
- Edição manual preservada ao alterar campos, com retorno explícito à versão automática.
- Ajustes de proporção, detalhe, distância criativa e prompt negativo.
- Saída para **Universal, Midjourney, DALL·E, Flux e SDXL**.
- Três variações por prompt e exportação em TXT ou JSON.
- Biblioteca persistente com busca, restauração, exclusão com opção de desfazer, importação e exportação de backups.
- Upload temporário de referência visual.
- Atalhos: `Ctrl/⌘ + Enter` para copiar e `Ctrl/⌘ + S` para salvar.
- Abas com navegação por setas, foco visível, alvos ampliados e suporte a redução de movimento.
- Funcionamento totalmente local, sem contas, chaves de API ou chamadas a provedores de IA.

## Executar localmente

Requisito: Node.js 22 ou superior recomendado.

```bash
npm install
npm run dev
```

O Vite disponibiliza a aplicação em `http://localhost:3000`. Nenhuma configuração de credenciais é necessária.

## Acervo e aleatorização

O acervo reúne as cinco fontes preservadas na raiz do repositório:

- `sequenciador-genes-expandido.json`;
- `sequenciador-cinema-tv-games-hq.json`;
- `gerador-de-prompts.html`;
- `gerador-de-prompts-v3.html`;
- `gerador-v4.html`.

O normalizador lê 1.374 entradas — 1.074 originais e 300 curadas —, valida os campos e deduplica por camada e nome normalizado, gerando 1.080 referências únicas entre as fontes importadas. Os 62 presets do aplicativo são acrescentados à mesma experiência; 18 homônimos redundantes são deduplicados com prioridade para a curadoria central, resultando em 1.124 referências visíveis. Nenhum arquivo-fonte original é alterado.

A expansão editorial fica em `data/references.curated.json`, um documento versionado com IDs estáveis, nome, descrição, saída em inglês, categoria, época e origem. Categoria é obrigatória nas novas entradas; paletas também exigem de três a seis cores hexadecimais. O importador rejeita campos desconhecidos, IDs ou nomes duplicados, descrições equivalentes e formatos inválidos.

A classificação retroativa fica em `data/reference-classifications.json`, associada aos IDs estáveis das fontes originais. O arquivo cobre 439 registros visíveis e 18 homônimos de suporte ocultados pela deduplicação. O importador valida IDs, impede sobrescrever categorias existentes e falha se qualquer referência gerada continuar sem categoria. Nomes, saídas, origens, épocas, cores e IDs permanecem preservados.

Para regenerar os dados depois de editar uma fonte:

```bash
npm run refs:build
```

O comando atualiza `src/lib/referenceData.ts`; esse arquivo é gerado e não deve ser editado manualmente. A representação em tuplas reduz o JavaScript enviado ao navegador e é convertida nos objetos tipados usados pelo app.

As sugestões mostram 6 ou 12 opções e distribuem o sorteio entre origens e categorias. O cursor percorre toda a camada sem repetir IDs antes de iniciar outra sequência; a última página pode ser menor. Cada painel preserva o progresso das camadas visitadas, e renovar as sugestões não modifica o campo em edição. Cena oferece cenário, atmosfera e reviravolta; Estilo oferece estilo, formato, paleta, câmera e detalhes. No Acervo, é possível exibir 24, 48 ou 96 referências por página.

**Surpreenda-me** também usa o acervo expandido, respeitando travas e limites de seleção.

## Operação local e sem credenciais

Todos os recursos do produto funcionam sem chaves de API, contas ou provedores externos. A montagem, as variações, o Acervo, a Biblioteca e as exportações são executados no navegador. Não há integração com serviços de IA nem endpoints de refinamento.

## Build e produção

```bash
npm run build
npm start
```

`npm run build` valida os tipos e gera `dist/`. O acervo é emitido em um chunk separado para que atualizações editoriais não invalidem o cache do código principal. `npm start` inicia o servidor Express na porta `3000` (ou na porta definida por `PORT`) e serve apenas os arquivos estáticos do aplicativo.

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` executa TypeScript, os 27 testes e o build antes de publicar `promptforge/dist`. O build do Pages usa o caminho-base `/PromptForge/`; os builds locais e de outros provedores continuam usando `/`.

Para ativar a publicação:

1. Abra **Settings → Pages → Build and deployment** no repositório.
2. Em **Source**, selecione **GitHub Actions** em vez de **Deploy from a branch**.
3. Faça push para `main` ou execute manualmente o workflow **Deploy GitHub Pages**.

Após uma implantação bem-sucedida, a interface estará disponível em `https://lucasrangel89.github.io/PromptForge/`. Não são necessários backend, variáveis de ambiente ou segredos.

## Verificações

```bash
npm run lint       # TypeScript estrito
npm test           # 27 testes: motor, acervo e store
npm run refs:build # valida e regenera o acervo normalizado
npm run build      # validação + bundle de produção
npm audit          # dependências
```

## Persistência e privacidade

- Rascunho, preferências e Biblioteca usam a chave `promptforge-studio-v2` em `localStorage`.
- A Biblioteca guarda até 60 prompts neste navegador. Ao atingir o limite, novos itens são recusados com orientação; nenhum prompt antigo é substituído automaticamente.
- **Novo prompt** e **Abrir no estúdio** preservam o trabalho atual antes da troca. Se não houver vaga para essa proteção, a operação é interrompida sem apagar o rascunho.
- Exclusões oferecem **Desfazer** em uma notificação que não desaparece automaticamente.
- Backups JSON podem ser exportados e reimportados; entradas duplicadas ou inválidas são ignoradas.
- A referência visual é limitada a PNG, JPG ou WEBP de até 5 MB. O conteúdo da imagem não é persistido nem incluído nos backups; versões salvas guardam apenas o nome do arquivo para orientar uma nova anexação.
- Não há autenticação, banco de dados ou sincronização entre dispositivos nesta versão.

## Estrutura

```text
data/
├── references.curated.json # 300 referências editoriais com IDs estáveis
└── reference-classifications.json # 457 classificações retroativas por ID
src/
├── components/
│   ├── layout/       # shell, navegação e topbar
│   ├── library/      # memória criativa e backups
│   ├── panels/       # Conceito, Cena, Estilo e Ajustes
│   ├── references/   # Acervo e sugestões renováveis
│   ├── studio/       # workspace e saída ao vivo
│   └── ui/           # controles, guia e notificações
├── lib/
│   ├── presets.ts         # curadoria tipada
│   ├── promptEngine.ts    # montagem e métricas do prompt
│   ├── referenceData.ts   # 1.080 referências geradas; não editar
│   ├── referenceTypes.ts  # contratos das nove camadas
│   ├── references.ts      # busca, índices e aleatorização
│   └── utils.ts           # clipboard e downloads
└── store/usePromptStore.ts
scripts/
└── build-reference-data.mjs # importação e deduplicação das fontes
server/
└── index.ts               # Express para os arquivos estáticos de produção
```

Os protótipos HTML/JSX e os arquivos de pesquisa na raiz foram preservados como material de referência.
