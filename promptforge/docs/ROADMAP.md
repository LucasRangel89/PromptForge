# Roadmap de camadas e melhorias

Este documento organiza próximas etapas possíveis. Exceto pela seção “Base entregue”, os itens são propostas, não funcionalidades já implementadas. Cada etapa deve ter escopo, validação e PR próprios.

## Critérios de evolução

- Preservar o funcionamento local, sem credenciais, e a edição manual do prompt.
- Não alterar IDs, nomes ou saídas de referências existentes sem necessidade editorial explícita.
- Manter backups e rascunhos antigos legíveis; novos campos precisam de valor padrão e migração tolerante.
- Expandir o acervo somente com curadoria específica, categorias úteis e saídas reutilizáveis em inglês.
- Evitar novas dependências, camadas ou abstrações sem um problema de uso demonstrável.
- Validar motor, store, filtros, teclado, estados vazios, responsividade, build normal e Pages.

## Base entregue

| Camada | Composição | Integração |
| --- | --- | --- |
| Ação | 40 referências curadas + 6 presets | Cena, sugestões, Acervo, aleatorização e motor |
| Iluminação | 40 referências curadas + 6 presets | Estilo, sugestões, Acervo, aleatorização e motor |
| Textura | 40 referências curadas + 6 presets | Estilo, sugestões, Acervo, aleatorização e motor |

Essas camadas usam os campos `action`, `lighting` e `texture`, que já existiam nos rascunhos. Por isso não exigiram migração de backups.

## P1 — Próximas etapas recomendadas

### 1. Clima e tempo como camada opcional

**Problema:** hoje, chuva, neve, vento e condições atmosféricas ficam misturados a cenário, atmosfera e detalhes. Isso dificulta variar o clima sem trocar o lugar ou a direção emocional.

**Escopo proposto:**
- novo campo opcional `weather` em `PromptDraft`, com padrão vazio;
- nova camada `weather` em Cena, no Acervo e nas sugestões;
- curadoria inicial de 40 referências em categorias como Chuva, Neve, Seca, Vento, Névoa, Calor, Frio e Transições;
- saída no prompt depois do cenário e antes da atmosfera, sem apagar descrições manuais;
- participação em “Surpreenda-me”, travas, exportação e biblioteca.

**Compatibilidade necessária:** backups atuais não possuem `weather`; a importação deverá aceitar essa ausência e preencher o padrão sem rejeitar o restante do rascunho.

**Aceite:** prompts antigos permanecem inalterados quando o campo está vazio; uma referência de clima pode ser trocada sem alterar cenário, ação ou atmosfera.

### 2. Favoritos e usados recentemente no Acervo

**Problema:** com 1.262 referências, reencontrar uma opção recorrente depende de repetir buscas e filtros.

**Escopo proposto:**
- marcar e desmarcar favoritos diretamente nos cartões;
- filtro “Favoritas” e seção de itens aplicados recentemente;
- persistência local apenas dos IDs, com limite explícito e remoção de IDs que deixem de existir;
- ações disponíveis por teclado e estados vazios com orientação.

**Aceite:** favoritos sobrevivem à recarga, não alteram o prompt e podem ser limpos sem apagar a Biblioteca.

### 3. Testes de navegador permanentes no CI

**Problema:** os testes unitários cobrem motor e store, mas os fluxos completos de Acervo, sugestões, Biblioteca e responsividade ainda dependem de verificações pontuais no navegador.

**Escopo proposto:**
- suíte Playwright versionada para os fluxos essenciais;
- auditoria axe nos estados críticos, sem declarar conformidade WCAG integral;
- execução do build do Pages antes da publicação;
- artefatos de erro úteis, sem dados pessoais ou imagens de usuários.

**Aceite:** falhas de integração impedem publicação; a suíte é reproduzível localmente e não depende de serviços externos.

## P2 — Depois das prioridades

### 4. Direções de arte pessoais

Permitir salvar uma combinação de estilo, formato, paleta, iluminação, textura e câmera como uma direção reutilizável. Deve usar a mesma Biblioteca local, ter nome editável, exportação em backup e limites de armazenamento. Não deve substituir as direções curadas existentes.

### 5. Comparação de versões do prompt

Oferecer comparação entre a versão atual e uma variação ou versão salva, destacando diferenças e permitindo restaurar explicitamente. Não deve criar histórico automático ilimitado nem sobrescrever a edição ativa.

### 6. Orientação de coerência entre camadas

Criar avisos locais e não bloqueantes para combinações que mereçam revisão. Regras devem ser poucas, explicáveis e testadas; contrastes intencionais continuam permitidos. A ferramenta não deve declarar que uma combinação é “errada” nem reescrever o prompt automaticamente.

### 7. Figurino como camada independente

Avaliar figurino somente se houver necessidade de variar roupas sem trocar a âncora. Exigiria novo campo, curadoria própria e regras para não apagar características de identidade presentes na âncora. Antes da implementação, é preciso definir como tratar conflitos com personagens cuja vestimenta é essencial.

## P3 — Melhorias condicionadas a evidência

### 8. Interface em outros idiomas

Separar textos da interface das saídas em inglês e preparar internacionalização sem duplicar componentes. Deve começar por um inventário de strings e manter português como idioma padrão.

### 9. Otimização do Acervo orientada por medição

Paginação e separação do chunk de dados já existem. Virtualização, indexação de busca ou carregamento sob demanda só devem ser introduzidos após profiling demonstrar gargalo em dispositivos e volumes reais de uso.

### 10. Governança editorial da taxonomia

Revisar categorias com poucos itens, sinônimos e sobreposições antes de novas expansões. Mudanças de rótulo devem preservar IDs e saídas, ter comparação antes/depois e evitar categorias genéricas como “Outros”.

## Critérios para qualquer nova camada

1. Problema distinto das doze camadas existentes.
2. Contrato de dados e posição na frase do prompt definidos.
3. Compatibilidade com rascunhos, backups, travas e edição manual.
4. Curadoria suficiente para busca, categorias e sugestões úteis.
5. Aplicação pelo Acervo, pelos controles e pela aleatorização.
6. Testes de integridade, snapshot do comportamento anterior e validação no navegador.
7. Documentação de totais, limitações e comportamento vazio.

## Não introduzir sem decisão de produto separada

Contas, sincronização em nuvem, backend, chamadas a provedores de IA ou envio de imagens e prompts a terceiros não são necessários para este roadmap e não devem ser adicionados como efeito colateral das melhorias locais.
