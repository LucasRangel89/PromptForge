# Roadmap de expansão do PromptForge

Este documento registra a base entregue e prioriza as próximas melhorias. Exceto pela seção **Base entregue**, todos os itens são propostas, não funcionalidades já implementadas.

## Base entregue

| Camada | Conteúdo | Integrações |
|---|---|---|
| **Ação** | 40 referências curadas + 6 presets | Campo `action`, motor, Cena, Acervo, sugestões, trava e aleatorização |
| **Iluminação** | 40 referências curadas + 6 presets | Motor, Estilo, Acervo, sugestões e aleatorização |
| **Textura** | 40 referências curadas + 6 presets | Campo `texture`, motor, Estilo, Acervo, sugestões, trava e aleatorização |
| **Clima e tempo** | 40 referências curadas + 6 presets | Campo opcional `weather`, motor, Cena, Acervo, sugestões, trava, Biblioteca e exportações |

O clima possui oito categorias editoriais: **Chuva, Neve, Seca, Vento, Névoa, Calor, Frio e Transições**. Quando o campo está vazio, nenhum texto climático é adicionado. Backups anteriores a essa camada e prompts antigos já persistidos são normalizados com `weather: ''`; a compatibilidade foi preservada sem alterar o prompt padrão.

### Organização pessoal do Acervo

- Favoritos por ID, limitados a 100, com estrela nos cartões e feedback acessível.
- Visões **Todas**, **Favoritas** e **Recentes**, combináveis com busca e filtros existentes.
- Até 12 referências recentes, únicas e em ordem de aplicação, com ação para limpar apenas esse histórico.
- IDs obsoletos são descartados ao reidratar o armazenamento local.
- Favoritar ou consultar recentes não altera o prompt nem a Biblioteca.

### Integração contínua

- 31 testes unitários cobrem motor, acervo, compatibilidade, favoritos e recentes.
- Cinco testes Playwright exercitam o build real do GitHub Pages, persistência, clima, coleções, Biblioteca e layout responsivo.
- Axe é executado nos estados críticos cobertos pela suíte; erros do navegador também fazem o teste falhar.
- O workflow publica somente após lint, testes unitários, build e E2E. Relatórios e diagnósticos de falhas são retidos por sete dias.

## Próximas etapas recomendadas

### 1. Direções de arte pessoais

Permitir nomear, editar, duplicar e excluir combinações de referências independentemente dos prompts salvos.

**Dependências e proteções**
- Esquema versionado, validação e limites próprios.
- Migração explícita do armazenamento atual.
- IDs estáveis; exclusão de uma direção não pode apagar prompts.
- Sem reutilizar silenciosamente a lista de 60 prompts da Biblioteca.

**Aceite:** aplicar uma direção preserva edições manuais, travas e campos não contemplados; backups antigos continuam válidos.

### 2. Modo claro e preferências de aparência

Adicionar um tema claro completo, sem simples inversão de cores.

**Aceite:** contraste, foco, estados ativos, código, menus, notificações e upload verificados nos dois temas; preferência persistida e respeito inicial a `prefers-color-scheme`.

### 3. Figurino

Nova camada de vestuário e silhueta no Conceito/Cena, com curadoria própria e distinção entre roupa, época, material e caracterização. Deve entrar por etapas, com estudo de compatibilidade antes de alterar `PromptDraft`.

### 4. Internacionalização da interface

Separar textos visíveis da lógica e preparar português/inglês sem traduzir automaticamente as saídas editoriais já escritas para os geradores.

### 5. Nuvem e colaboração

Só deve ser iniciado após uma decisão separada sobre contas, provedor, privacidade, custos e operação. A versão atual continua inteiramente local e sem credenciais.

### 6. Refinamento por IA externa

Exige decisão separada sobre finalidade, provedor, consentimento, tratamento de prompts/imagens e fallback local. Não há integração de IA nem endpoint ativo nesta versão.

### 7. Profiling e otimização

Medir antes de otimizar: busca e filtros com o acervo completo, paginação, reidratação e renderização dos cartões. Virtualização, memoização adicional ou divisão de índices só devem ser adotadas com evidência de gargalo e testes de regressão.

## Critérios para qualquer nova camada

1. Definir destino semântico no `PromptDraft` e compatibilidade com backups.
2. Preservar texto livre, edição manual e prompts existentes.
3. Criar IDs e categorias estáveis na curadoria versionada.
4. Integrar motor, presets, painel, Acervo, sugestões, travas e aleatorização.
5. Cobrir busca, combinação, serialização e restauração com testes.
6. Validar teclado, foco, contraste, zoom, telas estreitas e estados vazios/erro.
7. Atualizar contadores e documentação a partir dos dados gerados, sem estimativas.
