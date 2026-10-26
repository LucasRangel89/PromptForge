# PromptForge Studio

Painel responsivo para transformar uma ideia em um prompt de imagem estruturado. A interface foi construída sobre React, TypeScript, Vite, Tailwind CSS e Zustand, aproveitando a pesquisa, os presets e os protótipos presentes no repositório.

## Recursos

- Fluxo em quatro áreas: **Conceito, Cena, Estilo e Ajustes**.
- Prompt atualizado em tempo real, nos modos **Fluido**, **Compacto** e **JSON**.
- **Acervo com 842 referências pesquisáveis**: 780 opções únicas extraídas dos sequenciadores e protótipos, além de 62 itens da curadoria PromptForge.
- Sugestões renováveis em pequenos grupos, placeholders variáveis e aplicação de referências sem apagar a digitação.
- Busca por nome, descrição e metadados, filtros por camada, categoria, época e origem, paginação e aplicação aleatória dentro do filtro.
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
- Refinamento por IA opcional, executado no servidor sem expor a chave no navegador.

## Executar localmente

Requisito: Node.js 22 ou superior recomendado.

```bash
npm install
npm run dev
```

O Vite disponibiliza a aplicação em `http://localhost:3000` e também expõe o endpoint local de refinamento.

## Acervo e aleatorização

O acervo reúne as cinco fontes preservadas na raiz do repositório:

- `sequenciador-genes-expandido.json`;
- `sequenciador-cinema-tv-games-hq.json`;
- `gerador-de-prompts.html`;
- `gerador-de-prompts-v3.html`;
- `gerador-v4.html`.

O normalizador lê 1.074 entradas, valida os campos e deduplica por camada e nome normalizado, gerando 780 referências únicas. Os 62 presets do aplicativo são acrescentados à mesma experiência de descoberta. Nenhum arquivo-fonte é alterado.

Para regenerar os dados depois de editar uma fonte:

```bash
npm run refs:build
```

O comando atualiza `src/lib/referenceData.ts`; esse arquivo é gerado e não deve ser editado manualmente. A representação em tuplas reduz o JavaScript enviado ao navegador e é convertida nos objetos tipados usados pelo app.

As sugestões mostram apenas três opções por vez e podem ser renovadas sem modificar o campo em edição. **Surpreenda-me** também usa o acervo expandido, respeitando travas e limites de seleção.

## Refinamento opcional com IA

O construtor principal não depende de IA nem de chave de API. Para habilitar o botão **Refinar com IA**:

```bash
cp .env.example .env.local
```

Preencha `GEMINI_API_KEY` em `.env.local` e reinicie o servidor. A chave é lida somente pelo processo Node. O navegador chama o endpoint relativo `POST /api/refine-prompt`; nenhuma credencial é incluída no bundle do Vite.

Sem essa configuração, a interface informa que o recurso é opcional e todo o restante continua funcional.

## Build e produção

```bash
npm run build
npm start
```

`npm run build` valida os tipos e gera `dist/`. `npm start` inicia o servidor Express na porta `3000` (ou na porta definida por `PORT`), serve os arquivos estáticos e disponibiliza o mesmo endpoint de IA.

## Verificações

```bash
npm run lint       # TypeScript estrito
npm test           # 28 testes: motor, acervo, store e endpoint
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
│   ├── referenceData.ts   # 780 referências geradas; não editar
│   ├── referenceTypes.ts  # contratos das nove camadas
│   ├── references.ts      # busca, índices e aleatorização
│   └── utils.ts           # clipboard e downloads
├── services/aiService.ts  # cliente do endpoint relativo
└── store/usePromptStore.ts
scripts/
└── build-reference-data.mjs # importação e deduplicação das fontes
server/
├── index.ts               # Express para produção
└── refinePrompt.ts        # Gemini exclusivamente no servidor
```

Os protótipos HTML/JSX e os arquivos de pesquisa na raiz foram preservados como material de referência.
