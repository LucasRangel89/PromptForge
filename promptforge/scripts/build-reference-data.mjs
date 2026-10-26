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

const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const slugify = (value) => normalize(value).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const references = [];
const seen = new Set();
let rawCount = 0;

function addReference(item, kind, source, gene) {
  rawCount += 1;
  if (!item || typeof item.label !== 'string' || typeof item.out !== 'string' || !item.label.trim() || !item.out.trim()) {
    throw new Error(`Referência inválida em ${source.file} → ${gene}`);
  }
  const name = item.label.trim();
  const key = `${kind}:${normalize(name)}`;
  if (seen.has(key)) return;
  seen.add(key);
  const category = typeof item.cat === 'string' ? item.cat.trim() : '';
  const era = typeof item.era === 'string' ? item.era.trim() : '';
  references.push({
    id: `${source.prefix}-${kind}-${slugify(name)}`,
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

const outputPath = fileURLToPath(new URL('../src/lib/referenceData.ts', import.meta.url));
const sourceLabels = [...jsonSources, ...htmlSources].map((source) => source.label);
const rows = references.map((item) => {
  const generatedDescription = [item.category, item.era].filter(Boolean).join(' · ') || 'Referência do acervo';
  const row = [item.kind, item.name, item.output, item.category, item.era, sourceLabels.indexOf(item.source)];
  if (item.description !== generatedDescription) row.push(item.description);
  return row;
});
const content = `// Gerado por scripts/build-reference-data.mjs. Edite as fontes na raiz e execute npm run refs:build.\n// Tuplas reduzem o JS inicial; os objetos públicos são montados uma vez na inicialização.\nimport type { ReferenceItem, ReferenceKind } from './referenceTypes';\n\ntype ReferenceRow = [kind: ReferenceKind, name: string, output: string, category: string, era: string, source: number, description?: string];\nconst SOURCES = ${JSON.stringify(sourceLabels)};\nconst rows: ReferenceRow[] = ${JSON.stringify(rows, null, 2)};\n\nexport const REFERENCE_DATA: ReferenceItem[] = rows.map(([kind, name, output, category, era, source, description], index) => ({\n  id: \`ref-\${index}\`,\n  kind,\n  name,\n  description: description ?? ([category, era].filter(Boolean).join(' · ') || 'Referência do acervo'),\n  output,\n  category,\n  era,\n  source: SOURCES[source],\n}));\n`;
await writeFile(outputPath, content);

const counts = references.reduce((result, item) => ({ ...result, [item.kind]: (result[item.kind] ?? 0) + 1 }), {});
console.log(`Acervo normalizado: ${references.length} referências únicas (${rawCount} entradas lidas).`);
console.log(counts);
