import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

const jsonSources = [
  { file: 'sequenciador-genes-expandido.json', label: 'Sequenciador de Memórias', prefix: 'memorias' },
  { file: 'sequenciador-cinema-tv-games-hq.json', label: 'Cinema, TV, Games e HQs', prefix: 'midias' },
];
const htmlSources = [
  { file: 'gerador-de-prompts.html', label: 'Sequenciador HTML original', prefix: 'html-original' },
  { file: 'gerador-de-prompts-v3.html', label: 'Sequenciador HTML v3', prefix: 'html-v3' },
  { file: 'gerador-v4.html', label: 'Sequenciador HTML v4', prefix: 'html-v4' },
];

const kindByGene = {
  icone: 'anchor',
  universo: 'scenario',
  linguagem: 'style',
  assinatura: 'style',
  torcao: 'trend',
  tempero: 'detail',
  formato: 'medium',
  paleta: 'palette',
  escala: 'mood',
  camera: 'composition',
};
const referenceKinds = new Set([...Object.values(kindByGene), 'action', 'lighting', 'texture']);
const curatedFields = new Set(['id', 'kind', 'name', 'description', 'output', 'category', 'era', 'source', 'colors']);
const requiredCuratedStrings = ['id', 'kind', 'name', 'description', 'output', 'category', 'era', 'source'];

const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const normalizeOutput = (value) => normalize(value).replace(/\s+/g, ' ');
const slugify = (value) => normalize(value).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const references = [];
const seenNames = new Set();
const seenIds = new Set();
const outputOwners = new Map();
let rawCount = 0;
let duplicateCount = 0;
let curatedCount = 0;
let classificationCount = 0;

function registerReference(item) {
  if (seenIds.has(item.id)) throw new Error(`ID duplicado: ${item.id}`);
  seenIds.add(item.id);
  seenNames.add(`${item.kind}:${normalize(item.name)}`);
  const outputKey = `${item.kind}:${normalizeOutput(item.output)}`;
  if (!outputOwners.has(outputKey)) outputOwners.set(outputKey, item.id);
  references.push(item);
}

function addReference(item, kind, source, gene) {
  rawCount += 1;
  if (!item || typeof item.label !== 'string' || typeof item.out !== 'string' || !item.label.trim() || !item.out.trim()) {
    throw new Error(`Referência inválida em ${source.file} → ${gene}`);
  }
  const name = item.label.trim();
  const key = `${kind}:${normalize(name)}`;
  if (seenNames.has(key)) {
    duplicateCount += 1;
    return;
  }
  const id = `${source.prefix}-${kind}-${slugify(name)}`;
  if (!slugify(name)) throw new Error(`Nome sem slug válido em ${source.file} → ${gene}: ${name}`);
  const category = typeof item.cat === 'string' ? item.cat.trim() : '';
  const era = typeof item.era === 'string' ? item.era.trim() : '';
  registerReference({
    id,
    kind,
    name,
    description: [category, era].filter(Boolean).join(' · ') || `Referência de ${gene}`,
    output: item.out.trim(),
    category,
    era,
    source: source.label,
  });
}

for (const source of jsonSources) {
  const data = JSON.parse(await readFile(new URL(`../../${source.file}`, import.meta.url), 'utf8'));
  for (const [gene, kind] of Object.entries(kindByGene)) {
    const items = data.custom_chips?.[gene];
    if (!Array.isArray(items)) continue;
    for (const item of items) addReference(item, kind, source, gene);
  }
}

for (const source of htmlSources) {
  const html = await readFile(new URL(`../../${source.file}`, import.meta.url), 'utf8');
  const match = html.match(/const GENES\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) throw new Error(`Bloco GENES não encontrado em ${source.file}`);
  const genes = runInNewContext(`(${match[1]})`, Object.create(null), { timeout: 100 });
  for (const gene of genes) {
    const kind = kindByGene[gene.id];
    if (!kind || !Array.isArray(gene.options)) continue;
    for (const item of gene.options) addReference(item, kind, source, gene.id);
  }
}

const classificationsUrl = new URL('../data/reference-classifications.json', import.meta.url);
const classificationDocument = JSON.parse(await readFile(classificationsUrl, 'utf8'));
if (!classificationDocument || classificationDocument.version !== 1
  || !classificationDocument.classifications || typeof classificationDocument.classifications !== 'object'
  || Array.isArray(classificationDocument.classifications)) {
  throw new Error('A classificação retroativa deve ter version: 1 e um objeto classifications.');
}
const referencesById = new Map(references.map((item) => [item.id, item]));
for (const [id, category] of Object.entries(classificationDocument.classifications)) {
  const item = referencesById.get(id);
  if (!item) throw new Error(`Classificação aponta para ID inexistente: ${id}.`);
  if (typeof category !== 'string' || !category.trim()) throw new Error(`Categoria vazia para ${id}.`);
  if (item.category) throw new Error(`${id} já possui categoria; revise ou remova a classificação retroativa.`);
  item.category = category.trim();
  item.description = [item.category, item.era].filter(Boolean).join(' · ');
  classificationCount += 1;
}

const curatedUrl = new URL('../data/references.curated.json', import.meta.url);
const curatedDocument = JSON.parse(await readFile(curatedUrl, 'utf8'));
if (!curatedDocument || curatedDocument.version !== 1 || !Array.isArray(curatedDocument.references)) {
  throw new Error('A curadoria expandida deve ter version: 1 e uma lista references.');
}

for (const [index, item] of curatedDocument.references.entries()) {
  rawCount += 1;
  const location = `references.curated.json → item ${index + 1}`;
  if (!item || typeof item !== 'object' || Array.isArray(item)) throw new Error(`${location}: registro inválido.`);
  for (const field of Object.keys(item)) {
    if (!curatedFields.has(field)) throw new Error(`${location}: campo desconhecido “${field}”.`);
  }
  for (const field of requiredCuratedStrings) {
    if (typeof item[field] !== 'string') throw new Error(`${location}: ${field} deve ser texto.`);
    if (field !== 'era' && !item[field].trim()) throw new Error(`${location}: ${field} não pode ser vazio.`);
  }
  if (!referenceKinds.has(item.kind)) throw new Error(`${location}: camada desconhecida “${item.kind}”.`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id)) throw new Error(`${location}: ID inválido “${item.id}”.`);
  if (seenIds.has(item.id)) throw new Error(`${location}: ID duplicado “${item.id}”.`);

  const nameKey = `${item.kind}:${normalize(item.name)}`;
  if (seenNames.has(nameKey)) throw new Error(`${location}: nome já existente na camada ${item.kind}: ${item.name}.`);
  const outputKey = `${item.kind}:${normalizeOutput(item.output)}`;
  if (outputOwners.has(outputKey)) {
    throw new Error(`${location}: descrição equivalente à referência ${outputOwners.get(outputKey)}.`);
  }
  if (item.colors !== undefined) {
    if (item.kind !== 'palette') throw new Error(`${location}: colors só é permitido em paletas.`);
    if (!Array.isArray(item.colors) || item.colors.length < 3 || item.colors.length > 6) {
      throw new Error(`${location}: paletas devem ter de 3 a 6 cores.`);
    }
    if (!item.colors.every((color) => typeof color === 'string' && /^#[0-9A-Fa-f]{6}$/.test(color))) {
      throw new Error(`${location}: use cores hexadecimais no formato #RRGGBB.`);
    }
  } else if (item.kind === 'palette') {
    throw new Error(`${location}: paletas curadas precisam de amostras colors.`);
  }

  registerReference({
    id: item.id,
    kind: item.kind,
    name: item.name.trim(),
    description: item.description.trim(),
    output: item.output.trim(),
    category: item.category.trim(),
    era: item.era.trim(),
    source: item.source.trim(),
    ...(item.colors ? { colors: [...item.colors] } : {}),
  });
  curatedCount += 1;
}

const uncategorized = references.filter((item) => !item.category);
if (uncategorized.length) {
  throw new Error(`${uncategorized.length} referências continuam sem categoria: ${uncategorized.map((item) => item.id).join(', ')}`);
}

const outputPath = fileURLToPath(new URL('../src/lib/referenceData.ts', import.meta.url));
const sourceLabels = [...jsonSources, ...htmlSources].map((source) => source.label);
for (const item of references) {
  if (!sourceLabels.includes(item.source)) sourceLabels.push(item.source);
}
const rows = references.map((item) => {
  const generatedDescription = [item.category, item.era].filter(Boolean).join(' · ') || 'Referência do acervo';
  const row = [item.id, item.kind, item.name, item.output, item.category, item.era, sourceLabels.indexOf(item.source)];
  if (item.description !== generatedDescription || item.colors) row.push(item.description);
  if (item.colors) row.push(item.colors);
  return row;
});
const content = `// Gerado por scripts/build-reference-data.mjs. Edite as fontes na raiz e data/references.curated.json; execute npm run refs:build.\n// Tuplas reduzem o JS inicial; os objetos públicos são montados uma vez na inicialização.\nimport type { ReferenceItem, ReferenceKind } from './referenceTypes';\n\ntype ReferenceRow = [id: string, kind: ReferenceKind, name: string, output: string, category: string, era: string, source: number, description?: string, colors?: string[]];\nconst SOURCES = ${JSON.stringify(sourceLabels)};\nconst rows: ReferenceRow[] = ${JSON.stringify(rows, null, 2)};\n\nexport const REFERENCE_DATA: ReferenceItem[] = rows.map(([id, kind, name, output, category, era, source, description, colors]) => ({\n  id,\n  kind,\n  name,\n  description: description ?? ([category, era].filter(Boolean).join(' · ') || 'Referência do acervo'),\n  output,\n  category,\n  era,\n  source: SOURCES[source],\n  ...(colors ? { colors } : {}),\n}));\n`;
await writeFile(outputPath, content);

const counts = references.reduce((result, item) => ({ ...result, [item.kind]: (result[item.kind] ?? 0) + 1 }), {});
console.log(`Acervo normalizado: ${references.length} referências únicas (${rawCount} entradas lidas; ${duplicateCount} duplicidades entre fontes; ${curatedCount} itens da curadoria expandida; ${classificationCount} classificações retroativas).`);
console.log(counts);
