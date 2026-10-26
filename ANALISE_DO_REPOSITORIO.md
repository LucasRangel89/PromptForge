# PromptForge — análise do repositório e plano de evolução

## 1. Escopo analisado

A revisão considerou o aplicativo React, os protótipos, os dados, a especificação e os materiais de pesquisa presentes na raiz.

### Aplicação existente

- React 19 + TypeScript + Vite + Tailwind 4 + Zustand.
- Fluxo original dividido em cinco componentes de etapa.
- Estado centralizado em `usePromptStore`, presets em `lib/presets.ts` e montagem determinística em `lib/promptEngine.ts`.
- A especificação de produto descreve Next.js, orquestração multiagente e banco de dados, mas a implementação era um MVP Vite predominantemente local.

### Protótipos e recursos conceituais

- `promptforge_prototipo_react.jsx`: painel de duas colunas, histórico, variações e JSON.
- `cenario_forge_prototipo_react.jsx`: decomposição de cenário por lugar, época, clima, ação e objetos.
- `linguagem_visual_forge_prototipo_react.jsx`: composição de estilo, mídia, cor, luz, câmera e acabamento.
- `gemini-code-1776962850659.html`: wizard com console de agentes simulado.
- `gerador-de-prompts.html`, `gerador-de-prompts-v3.html`, `gerador-v3.html` e `gerador-v4.html`: evolução do Sequenciador de Memórias com genes, travas, chips personalizados, filtros, aleatorização e importação/exportação.
- `gerador-de-prompts-v3.html` e `gerador-v3.html` são arquivos byte a byte idênticos.
- Os JSONs e os arrays `GENES` dos protótipos HTML contêm uma biblioteca ampla de referências culturais, artísticas, cinematográficas e brasileiras. Eles estavam desconectados do app React antes desta implementação e agora alimentam o Acervo.

### Pesquisa e identidade

- O PDF de 10 páginas e `deep-research-report.md` aprofundam origem, temas e possibilidades visuais do Eternauta.
- `biblia_visual_dna_do_eternauta_versao_superior.md` fornece regras particularmente úteis para prompts consistentes: silhueta, traje funcional, rosto oculto, desgaste e resistência sem super-heroização.
- `prompt_forge_product_specification_md.md` oferece uma boa visão de produto, motor de prompts e roadmap.

## 2. Pontos fortes identificados

1. **Visão de produto clara.** O objetivo não é apenas concatenar adjetivos, mas construir consistência criativa e memória.
2. **Pesquisa autoral relevante.** O DNA visual do Eternauta é mais acionável que uma lista genérica de referências.
3. **Boa base de curadoria.** Há centenas de possibilidades de combinação entre sujeitos, cenários, linguagens e detalhes.
4. **Separação inicial de responsabilidades.** Estado, presets, motor e componentes estão em módulos distintos.
5. **Aprendizado entre protótipos.** Travas, modos de saída, chips, histórico e exportação respondem a necessidades reais de exploração.
6. **Stack adequada ao MVP.** Vite, React e Zustand permitem iterar rapidamente sem exigir infraestrutura para o construtor determinístico.

## 3. Fraquezas e riscos encontrados antes desta revisão

### Prioridade alta

- **Credencial no cliente.** O Vite injetava `process.env.GEMINI_API_KEY` no bundle e o SDK era chamado diretamente do navegador.
- **Persistência incompleta.** Combinações salvas desapareciam ao recarregar; não havia biblioteca recuperável ou backup no app React.
- **Recursos declarados sem efeito.** `resolution` e `variations` existiam no estado, mas não participavam da saída.
- **Referência visual subutilizada.** O upload criava uma URL de objeto temporária e não alimentava a análise ou o prompt de maneira clara.

### Experiência e arquitetura

- Numeração divergente: cinco etapas na navegação, mas telas finais exibiam `03` e `04`.
- Fluxo longo escondia o resultado até a última tela e dificultava comparar escolhas.
- Textos em português e inglês se misturavam inclusive nos rótulos de ações.
- Alertas nativos interrompiam o fluxo e não havia feedbacks discretos.
- Seleção múltipla sem limites aumentava o risco de estilos contraditórios.
- A montagem adicionava sempre `8k` e `masterpiece`, independentemente do destino ou da intenção.
- A navegação aparentava bloquear etapas futuras, mas a expressão de `disabled` sempre resultava em falso.
- O tipo genérico de `updateField` também admitia métodos do store como se fossem campos editáveis.

### Manutenção

- Ausência de testes automatizados, TypeScript estrito e `.gitignore`.
- Nome de pacote e título HTML ainda eram os padrões do AI Studio.
- Dependências apresentavam 14 alertas de auditoria no início: 1 crítico, 8 altos, 3 moderados e 2 baixos.
- Múltiplas fontes de verdade e protótipos duplicados dificultavam decidir o que deveria evoluir.
- A orquestração multiagente descrita na especificação era, nos protótipos, principalmente uma simulação visual.

## 4. Correções implementadas

### Produto e interface

- Wizard substituído por um **estúdio de quatro áreas com síntese sempre visível**.
- Exemplo inicial do Eternauta baseado na bíblia visual, sem tornar o aplicativo dependente desse personagem.
- Presets tipados e curados para conceito, cenário, ação, atmosfera, tendência, estilo, mídia, cor, luz, textura e câmera.
- Limites de dois estilos, quatro detalhes e cinco elementos de cena para reduzir ambiguidade.
- Direções de arte coerentes e aleatorização que respeita travas.
- Layout responsivo para desktop, tablet e mobile, tipografia local e navegação por teclado.
- Edição manual permanece preservada ao alterar campos; somente uma ação explícita restaura a montagem automática.
- Abas com setas/Home/End, foco reforçado, alvos interativos ampliados e notificações de recuperação sem desaparecimento automático.
- **Acervo com 842 referências pesquisáveis**: 780 opções únicas normalizadas de 1.074 entradas dos dois JSONs e três protótipos HTML, mais 62 itens da curadoria existente.
- Busca, filtros por camada/categoria/época/origem, paginação, aplicação aleatória dentro dos filtros e sugestões renováveis em grupos de três, sem despejar centenas de opções na tela inicial.
- Placeholders variáveis e aplicação de sugestões sem alterar a digitação; referências escolhidas continuam visíveis nos controles e são resolvidas pelo motor na camada correta.
- `scripts/build-reference-data.mjs` valida e deduplica as cinco fontes preservadas. A saída gerada usa tuplas compactas para reduzir o bundle sem descartar conteúdo.
- Publicação estática preparada para GitHub Pages: o Vite usa `/PromptForge/` somente no build do Pages, e o workflow valida tipos e testes antes de publicar `promptforge/dist`.

### Motor e memória

- Novo `promptEngine.ts` com saída fluida, compacta e estruturada.
- Sintaxe adaptada ao gerador de destino; prompt negativo mantido separado.
- Controles de proporção, detalhe e distância criativa efetivamente conectados à saída.
- Edição manual reversível, três variações, cópia e download.
- Store tipado e persistente, com Biblioteca de até 60 prompts.
- Busca, restauração, exclusão e backup JSON com importação validada e deduplicação.
- Novo rascunho e abertura de itens preservam automaticamente o trabalho anterior.
- Exclusão com **Desfazer** e restauração na posição original.
- Limite de 60 itens sem evicção silenciosa: quando cheia, a Biblioteca bloqueia a operação com segurança e orienta exportação ou exclusão.
- Importação com limites estruturais, deduplicação pelo conteúdo completo e relatório de itens importados, duplicados, inválidos ou fora da capacidade.

### Segurança e qualidade

- Integração Gemini removida de ponta a ponta: botão, cliente, endpoint, middleware, SDK, variáveis de ambiente e testes dedicados foram eliminados.
- Todos os recursos são locais e não exigem credenciais, contas ou provedores externos; o servidor de produção serve apenas os arquivos estáticos.
- Upload validado por tipo e tamanho; dados da imagem não entram no armazenamento persistente.
- Metadados, título, idioma, favicon, scripts e nome do pacote atualizados.
- TypeScript estrito e 23 testes automatizados para motor, integridade e aleatorização do Acervo, persistência, travas, capacidade, edição manual, exclusão, importação e restauração.
- Auditoria reduzida a um alerta de baixa severidade no `esbuild`, relacionado ao servidor de desenvolvimento em Windows.
- Validação em navegador: quatro etapas sem overflow em sete larguras entre 320 e 1280 px, sem erros de console, com navegação, variações, salvamento, backups e restauração exercitados.
- Auditoria `axe-core` WCAG A/AA sem violações nas quatro etapas, na Biblioteca vazia, populada e cheia, no guia e no toast de recuperação, incluindo desktop e mobile. Contraste de estados extremos, nome acessível, foco do modal e semântica das abas foram revistos.
- Regressão no Chromium para teclado, edição manual, exclusão/desfazer, restauração, capacidade, cópia contextual e referência visual; nenhum erro de console. O Acervo também foi exercitado com 842 itens, renovação, busca, aplicação, persistência, paginação e filtro aleatório, sem overflow entre 320 e 1280 px e sem violações axe nos estados desktop/mobile testados. Essa automação foi executada no ambiente, mas ainda precisa ser formalizada em CI.

## 5. Arquitetura atual

```text
Interface React
  ├── painéis de intenção e linguagem
  ├── motor determinístico de prompts
  ├── Acervo e variações locais
  └── Zustand + localStorage
          │
          └── exportação local TXT / JSON

Hospedagem estática
  ├── GitHub Pages via GitHub Actions
  └── Node + Express como alternativa, sem endpoints de IA
```

Essa arquitetura mantém todo o produto funcional sem credenciais ou chamadas a serviços externos. O backend não é obrigatório: o GitHub Pages pode servir diretamente o build estático.

## 6. Próximas oportunidades, em ordem sugerida

### Curto prazo

1. **Coleções e etiquetas.** Organizar prompts por projeto, personagem ou identidade visual.
2. **Histórico de revisões.** Guardar versões do mesmo prompt em vez de apenas snapshots independentes.
3. **Testes E2E em CI e validação complementar.** Formalizar os fluxos agora verificados em navegador, incluir auditoria automatizada de acessibilidade e complementar com leitores de tela, ampliação real e Core Web Vitals — verificações não executadas nesta revisão.

### Médio prazo

4. **Persistência multi-dispositivo.** Autenticação e banco de dados apenas quando houver necessidade real de sincronização.
5. **Preset DNA reutilizável.** Transformar regras como as do Eternauta em documentos de identidade visual aplicáveis a qualquer personagem autoral.
6. **Revisor de conflitos.** Detectar combinações contraditórias de câmera, luz, mídia e estilo antes da exportação.

## 7. Decisão recomendada

Consolidar este aplicativo como fonte principal e manter os protótipos da raiz apenas como arquivo de referência. A biblioteca cultural já está integrada por busca, filtros, sugestões e aleatorização; a prioridade seguinte é formalizar os testes E2E em CI e evoluir a organização dos prompts, em vez de criar mais uma versão isolada do gerador.
