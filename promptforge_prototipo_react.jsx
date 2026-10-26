import React, { useMemo, useState } from "react";
import { Sparkles, Copy, RotateCcw, Wand2, Save, Image as ImageIcon, Layers3, CheckCircle2, ChevronRight } from "lucide-react";

const PRESETS = {
  anchors: ["Eternauta", "Neo", "Gandalf", "Che Guevara", "Freud", "Carranca", "Chaplin"],
  styles: ["cinematic", "editorial", "concept art", "analog film", "dark fantasy", "surreal", "minimal"],
  mediums: ["35mm", "digital painting", "3D render", "oil on canvas", "pixel art"],
  palettes: ["warm", "cold", "monochrome", "neon", "earth tones"],
  lightings: ["soft", "dramatic", "backlit", "neon glow", "natural light"],
  textures: ["film grain", "matte", "glossy", "gritty", "painterly"],
  compositions: ["wide", "close-up", "low angle", "symmetrical", "over-the-shoulder"],
  scenes: ["shopping center anos 90", "rua chuvosa à noite", "deserto pós-apocalíptico", "biblioteca antiga", "metrô futurista"],
  contexts: ["nostalgia urbana", "memória coletiva", "tensão silenciosa", "redenção", "mistério"],
  trends: ["Y2K", "retro-futurism", "vaporwave", "brutalist UI", "solarpunk"],
  characters: ["adolescentes", "um viajante solitário", "grupo diverso", "figura mítica", "observadores silenciosos"],
};

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const uniqueJoin = (items) => [...new Set(items.filter(Boolean))].join(", ");

function buildPrompt(state) {
  const parts = [];
  if (state.anchor) parts.push(state.anchor);
  const world = [state.scenario, state.context].filter(Boolean).join(", ");
  if (world) parts.push(`in ${world}`);
  if (state.characters) parts.push(`featuring ${state.characters}`);
  if (state.trend) parts.push(`with ${state.trend} influence`);
  const look = [state.styles, state.medium, state.palette, state.lighting, state.texture, state.composition]
    .filter(Boolean)
    .join(", ");
  if (look) parts.push(`rendered as ${look}`);
  if (state.referenceImage) parts.push(`based on reference image`);
  return `${parts.join(", ")}, highly detailed, coherent composition`;
}

export default function PromptForgePrototype() {
  const [anchor, setAnchor] = useState("Eternauta");
  const [scenario, setScenario] = useState("shopping center anos 90");
  const [context, setContext] = useState("nostalgia urbana");
  const [trend, setTrend] = useState("Y2K");
  const [characters, setCharacters] = useState("adolescentes");
  const [styles, setStyles] = useState(["cinematic", "analog film"]);
  const [medium, setMedium] = useState("35mm");
  const [palette, setPalette] = useState("warm");
  const [lighting, setLighting] = useState("soft");
  const [texture, setTexture] = useState("film grain");
  const [composition, setComposition] = useState("wide");
  const [referenceImage, setReferenceImage] = useState("");
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () => buildPrompt({ anchor, scenario, context, trend, characters, styles: styles.join(" + "), medium, palette, lighting, texture, composition, referenceImage }),
    [anchor, scenario, context, trend, characters, styles, medium, palette, lighting, texture, composition, referenceImage]
  );

  const variations = useMemo(() => [
    `${prompt}, alternative framing, subtle mood shift`,
    `${prompt.replace("highly detailed", "ultra-detailed")}, richer atmosphere`,
    `${prompt}, simplified shapes, stronger visual hierarchy`,
  ], [prompt]);

  const jsonPreview = useMemo(() => ({
    anchor,
    scenario,
    context,
    trend,
    characters,
    style: styles,
    medium,
    palette,
    lighting,
    texture,
    composition,
    reference_image: referenceImage || null,
    prompt_final: prompt,
    variations: 3,
  }), [anchor, scenario, context, trend, characters, styles, medium, palette, lighting, texture, composition, referenceImage, prompt]);

  const pushHistory = () => {
    setHistory((prev) => [{ id: crypto.randomUUID(), prompt, anchor, createdAt: new Date().toLocaleTimeString("pt-BR") }, ...prev].slice(0, 6));
  };

  const surpriseMe = () => {
    setAnchor(randomFrom(PRESETS.anchors));
    setScenario(randomFrom(PRESETS.scenes));
    setContext(randomFrom(PRESETS.contexts));
    setTrend(randomFrom(PRESETS.trends));
    setCharacters(randomFrom(PRESETS.characters));
    setStyles([randomFrom(PRESETS.styles), randomFrom(PRESETS.styles)]);
    setMedium(randomFrom(PRESETS.mediums));
    setPalette(randomFrom(PRESETS.palettes));
    setLighting(randomFrom(PRESETS.lightings));
    setTexture(randomFrom(PRESETS.textures));
    setComposition(randomFrom(PRESETS.compositions));
    setReferenceImage("");
  };

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const toggleStyle = (value) => {
    setStyles((prev) => prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]);
  };

  const Field = ({ label, value, onChange, options, placeholder }) => (
    <div className="space-y-2">
      <div className="text-sm font-medium text-slate-300">{label}</div>
      {options ? (
        <div className="flex flex-wrap gap-2">
          {options.map((opt) => {
            const active = Array.isArray(value) ? value.includes(opt) : value === opt;
            return (
              <button
                key={opt}
                onClick={() => Array.isArray(value) ? toggleStyle(opt) : onChange(opt)}
                className={`rounded-full px-3 py-1.5 text-sm transition ${active ? "bg-white text-slate-950" : "bg-slate-800 text-slate-200 hover:bg-slate-700"}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-slate-500"
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100">
      <div className="mx-auto max-w-7xl p-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
              <Sparkles className="h-3.5 w-3.5" /> PromptForge · protótipo
            </div>
            <h1 className="text-3xl font-semibold tracking-tight lg:text-5xl">Gerador de prompts de imagem com memória criativa</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Um app pessoal para transformar uma ideia solta em prompt forte, limpo e consistente.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={surpriseMe} className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-950 hover:bg-slate-200">
              <Wand2 className="h-4 w-4" /> Surpreenda-me
            </button>
            <button onClick={pushHistory} className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-100 hover:bg-slate-800">
              <Save className="h-4 w-4" /> Salvar na fila
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5 shadow-2xl shadow-black/20">
              <div className="mb-5 flex items-center gap-2 text-lg font-semibold"><Layers3 className="h-5 w-5" /> Camada 1 — Âncora e mundo</div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Âncora criativa" value={anchor} onChange={setAnchor} options={PRESETS.anchors} />
                <Field label="Cenário" value={scenario} onChange={setScenario} options={PRESETS.scenes} />
                <Field label="Contexto" value={context} onChange={setContext} options={PRESETS.contexts} />
                <Field label="Tendência (opcional)" value={trend} onChange={setTrend} options={PRESETS.trends} />
                <Field label="Personagens" value={characters} onChange={setCharacters} options={PRESETS.characters} />
                <div className="space-y-2">
                  <div className="text-sm font-medium text-slate-300">Imagem de referência (URL)</div>
                  <div className="flex gap-2">
                    <div className="flex-1 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100">
                      <input
                        value={referenceImage}
                        onChange={(e) => setReferenceImage(e.target.value)}
                        placeholder="cole um link, se quiser"
                        className="w-full bg-transparent outline-none placeholder:text-slate-500"
                      />
                    </div>
                    <div className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-400"><ImageIcon className="h-5 w-5" /></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="mb-5 flex items-center gap-2 text-lg font-semibold">Camada 2 — Linguagem visual</div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Estilo" value={styles} onChange={() => {}} options={PRESETS.styles} />
                <Field label="Meio técnico" value={medium} onChange={setMedium} options={PRESETS.mediums} />
                <Field label="Paleta" value={palette} onChange={setPalette} options={PRESETS.palettes} />
                <Field label="Iluminação" value={lighting} onChange={setLighting} options={PRESETS.lightings} />
                <Field label="Textura" value={texture} onChange={setTexture} options={PRESETS.textures} />
                <Field label="Composição" value={composition} onChange={setComposition} options={PRESETS.compositions} />
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="text-lg font-semibold">Síntese do prompt</div>
                <div className="flex items-center gap-2">
                  <button onClick={copyPrompt} className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm hover:bg-slate-800">
                    <Copy className="h-4 w-4" /> {copied ? "Copiado" : "Copiar"}
                  </button>
                  <button onClick={pushHistory} className="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-medium text-slate-950 hover:bg-slate-200">
                    <CheckCircle2 className="h-4 w-4" /> Salvar
                  </button>
                </div>
              </div>

              <textarea
                value={prompt}
                readOnly
                className="min-h-[220px] w-full rounded-3xl border border-slate-700 bg-[#0c1018] p-4 text-sm leading-6 text-slate-100 outline-none"
              />

              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">Fluxo multiagente simulado</div>
                <div className="space-y-2 text-sm text-slate-300">
                  {[
                    ["Curador de Conceito", anchor || "pendente"],
                    ["Diretor de Arte", scenario || "pendente"],
                    ["Curador de Estilo", uniqueJoin(styles) || "pendente"],
                    ["Redator de Prompt", "síntese final"],
                    ["Revisor Crítico", "remoção de redundância"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-3 rounded-xl bg-slate-950 px-3 py-2">
                      <span>{label}</span>
                      <span className="text-slate-500">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="mb-4 flex items-center gap-2 text-lg font-semibold">Variações geradas</div>
              <div className="space-y-3">
                {variations.map((v, i) => (
                  <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
                    <div className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-slate-500">
                      <ChevronRight className="h-3.5 w-3.5" /> Variação {i + 1}
                    </div>
                    {v}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="mb-4 text-lg font-semibold">Prévia JSON</div>
              <pre className="overflow-auto rounded-2xl border border-slate-800 bg-slate-900 p-4 text-xs leading-5 text-slate-300">
                {JSON.stringify(jsonPreview, null, 2)}
              </pre>
            </section>
          </div>
        </div>

        <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-lg font-semibold">Histórico recente</div>
            <div className="text-sm text-slate-500">máximo de 6 itens</div>
          </div>
          {history.length ? (
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {history.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="mb-2 text-xs uppercase tracking-[0.15em] text-slate-500">{item.createdAt}</div>
                  <div className="mb-2 font-medium text-slate-100">{item.anchor}</div>
                  <div className="line-clamp-3 text-sm leading-6 text-slate-400">{item.prompt}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-800 p-6 text-sm text-slate-500">
              Nenhum item salvo ainda. Gere um prompt e clique em <span className="text-slate-300">Salvar</span>.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
