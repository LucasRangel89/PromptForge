# 🧠 PromptForge — Especificação de Produto (MVP + Arquitetura)

## 📌 Visão Geral

**PromptForge** é um sistema pessoal para geração de prompts de imagem com consistência criativa, baseado em uma orquestração de multiagentes de IA.

O objetivo é transformar uma ideia simples em um **prompt visual forte, coerente e reutilizável**, com o mínimo de atrito.

---

## 🎯 Objetivos do Produto

- Reduzir fricção criativa
- Manter consistência visual (âncora como Eternauta)
- Permitir exploração livre de estilos
- Gerar prompts limpos, sem redundância
- Criar um sistema autoral de geração de conteúdo

---

## 🧩 Arquitetura Geral

```
[Frontend (Next.js)]
        ↓
[Orquestrador de Fluxo]
        ↓
[Multiagentes IA]
        ↓
[Motor de Prompt]
        ↓
[Banco de Dados]
```

---

## 🖥️ Stack Tecnológica Sugerida

### Frontend
- Next.js (React)
- TailwindCSS
- Zustand (estado global)

### Backend
- Node.js (NestJS ou Express)

### IA
- OpenAI API
- Orquestração própria (simples e controlada)

### Banco de Dados
- PostgreSQL
- Redis (cache opcional)

### Storage
- AWS S3 ou equivalente (uploads)

---

## 🔁 Fluxo do Usuário (MVP)

1. Escolher Âncora
2. Definir Mundo Visual
3. Definir Linguagem Visual
4. Gerar Prompt
5. Ajustar / Salvar / Exportar

---

## 📱 Especificação de Telas

### 🔹 Tela 1 — Âncora Criativa

**Componentes:**
- Select (pré-definidos)
- Input texto livre
- Botão "Gerar sugestões"
- Botão "Surpreenda-me"
- Histórico recente

**Output:**
```json
{
  "anchor": "Eternauta",
  "custom_input": "",
  "tags": ["nostalgia", "tempo"]
}
```

---

### 🔹 Tela 2 — Mundo Visual

**Componentes:**
- Cenário
- Contexto
- Toggle trend (opcional)
- Personagens
- Upload de imagem
- Gerar sugestões

**Output:**
```json
{
  "scenario": "shopping anos 90",
  "context": "nostalgia urbana",
  "trend": "Y2K",
  "characters": ["adolescentes"],
  "reference_image": "url"
}
```

---

### 🔹 Tela 3 — Linguagem Visual

**Componentes:**
- Estilo (multi)
- Meio técnico
- Paleta
- Iluminação
- Textura
- Composição

**Output:**
```json
{
  "style": ["cinematic"],
  "medium": "35mm",
  "palette": "warm",
  "lighting": "soft",
  "texture": "film grain",
  "composition": "wide"
}
```

---

### 🔹 Tela 4 — Síntese

**Componentes:**
- Prompt editável
- Regenerar
- Salvar
- Copiar

**Output:**
```json
{
  "prompt_final": "string",
  "resolution": "1024x1024",
  "variations": 3
}
```

---

## 🤖 Arquitetura de Multiagentes

### 1. Curador de Conceito
- Interpreta a âncora
- Gera intenção visual

### 2. Pesquisador de Tendências (opcional)
- Sugere trends culturais

### 3. Diretor de Arte
- Cria cenário e contexto

### 4. Analista de Imagem
- Converte imagem em descrição

### 5. Curador de Estilo
- Sugere estilos compatíveis

### 6. Conselheiro de Render
- Define luz, textura e acabamento

### 7. Redator de Prompt
- Consolida tudo

### 8. Revisor Crítico
- Remove redundância
- Simplifica

---

## 🧠 Motor de Prompt

### Template Base

```
{anchor} in {scene}, {style}, {lighting}, {composition}, highly detailed
```

### Template Avançado

```
{anchor}, in {scene}, surrounded by {elements}, evoking {emotion}, rendered in {style}, using {medium}, with {lighting}, {texture}, composition {composition}, color palette {palette}, ultra detailed
```

---

## 🗄️ Banco de Dados

### Tabela: prompts

```sql
id
created_at
anchor
concept
scenario
context
trend
characters
reference_image
style
medium
palette
lighting
texture
composition
prompt_final
resolution
variations
```

---

### Tabela: presets

```sql
id
type
name
value
```

---

## ⚙️ Regras de Negócio

- Todos os campos são opcionais (exceto âncora)
- Sempre gerar prompt
- Priorizar clareza
- Evitar conflito de estilos
- Limitar tamanho do prompt

---

## 🚀 Roadmap

### V1
- Geração de prompt
- Fluxo completo
- Salvamento

### V2
- Banco de referências
- Presets avançados
- Aprendizado de preferências

### V3
- Integração com geração de imagem
- Automação de posts

---

## 🧠 Diferencial

Não é apenas um gerador de prompt.

É um sistema de:

- curadoria
- consistência
- memória criativa

---

## 🔚 Conclusão

PromptForge é um sistema de direção criativa assistida por IA, projetado para transformar ideias em imagens com consistência, identidade e eficiência.

