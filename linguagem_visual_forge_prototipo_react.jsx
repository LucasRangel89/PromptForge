import React, { useMemo, useState } from "react";
import { Sparkles, Wand2, Copy, Save, Shuffle, Palette, Camera, Layers3, History, CheckCircle2 } from "lucide-react";

const PRESETS = {
  styles: [
    "graphic novel",
    "cinematic",
    "editorial",
    "analog film",
    "surreal",
    "concept art",
    "minimalist",
    "noir",
    "retro-futuristic",
  ],
  mediums: ["35mm", "digital painting", "ink wash", "mixed media", "3D render", "pastel", "pencil sketch"],
  palettes: ["high contrast", "warm", "cold", "monochrome", "muted", "neon", "earth tones"],
  textures: ["granulação analógica", "film grain", "paper texture", "painterly", "glossy finish", "gritty texture"],
  lightings: ["luz difusa", "dramatic lighting", "backlight", "soft shadows", "neon glow", "natural light"],
  cameras: ["composição cinematográfica", "wide shot", "close-up", "low angle", "over-the-shoulder", "shallow depth of field"],
  finishes: ["acabamento nostálgico", "acabamento limpo", "acabamento cru", "acabamento premium", "acabamento sombrio"],
  moods: ["nostálgica", "tensa", "melancólica", "épica", "onírica", "futurista", "intimista"],
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildStyle({ style, medium, palette, texture, lighting, camera, finish, mood }) {
  const chunks = [style, medium, palette, texture, lighting, camera, finish, mood]
    .filter(Boolean)
    .join(", ");
  return `${chunks}`;
}

export default function VisualLanguageForgePrototype() {
  const [style, setStyle] = useState("graphic novel");
  const [medium, setMedium] = useState("35mm");
  const [palette, setPalette] = useState("high contrast");
  const [texture, setTexture] = useState("granulação analógica");
  const [lighting, setLighting] = useState("luz difusa");
  const [camera, setCamera] = useState("composição cinematográfica");
  const [finish, setFinish] = useState("acabamento nostálgico");
  const [mood, setMood] = useState("nostálgica");
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);

  const stylePrompt = useMemo(
    () => buildStyle({ style, medium, palette, texture, lighting, camera, finish, mood }),
    [style, medium, palette, texture, lighting, camera, finish, mood]
  );

  const jsonPreview = useMemo(
    () => ({
      style_artistic: style,
      medium,
      palette,
      texture,
      lighting,
      camera,
      finish,
      mood,
      style_final: stylePrompt,
    }),
    [style, medium, palette, texture, lighting, camera, finish, mood, stylePrompt]
  );

  const addToHistory = () => {
    setHistory((prev) => [
      { id: crypto.randomUUID(), createdAt: new Date().toLocaleTimeString("pt-BR"), stylePrompt },
      ...prev,
    ].slice(0, 6));
  };

  const surpriseMe = () => {
    setStyle(pickRandom(PRESETS.styles));
    setMedium(pickRandom(PRESETS.mediums));
    setPalette(pickRandom(PRESETS.palettes));
    setTexture(pickRandom(PRESETS.textures));
    setLighting(pickRandom(PRESETS.lightings));
    setCamera(pickRandom(PRESETS.cameras));
    setFinish(pickRandom(PRESETS.finishes));
    setMood(pickRandom(PRESETS.moods));
  };

  const copyStyle = async () => {
    await navigator.clipboard.writeText(stylePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const Pill = ({ value, active, onClick }) => (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-sm transition ${active ? "bg-white text-slate-950" : "bg-slate-800 text-slate-200 hover:bg-slate-700"}`}
    >
      {value}
    </button>
  );

  const Section = ({ icon: Icon, title, subtitle, children }) => (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-black/20">
      <div className="mb-4 flex items-start gap-3">
        <div className="rounded-2xl bg-slate-900 p-2 text-slate-200 ring-1 ring-slate-800">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <div className="font-semibold text-slate-100">{title}</div>
          <div className="text-sm text-slate-500">{subtitle}</div>
        </div>
      </div>
      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100">
      <div className="mx-auto max-w-7xl p-6 lg:p-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
              <Sparkles className="h-3.5 w-3.5" /> VisualLanguageForge · motor de estilo
            </div>
            <h1 className="text-3xl font-semibold tracking-tight lg:text-5xl">Gerador dedicado de linguagem visual</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Este gerador não pensa em cenário. Ele só compõe a assinatura estética: estilo, mídia, paleta, textura, iluminação, câmera e acabamento.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={surpriseMe} className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-950 hover:bg-slate-200">
              <Wand2 className="h-4 w-4" /> Surpreenda-me
            </button>
            <button onClick={addToHistory} className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-100 hover:bg-slate-800">
              <Save className="h-4 w-4" /> Salvar estilo
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6">
            <Section icon={Palette} title="Estilo e mídia" subtitle="A personalidade estética do resultado.">
              <div className="space-y-5">
                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Estilo artístico</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.styles.map((item) => <Pill key={item} value={item} active={style === item} onClick={() => setStyle(item)} />)}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Mídia</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.mediums.map((item) => <Pill key={item} value={item} active={medium === item} onClick={() => setMedium(item)} />)}
                  </div>
                </div>
              </div>
            </Section>

            <Section icon={Layers3} title="Cor, textura e luz" subtitle="Aqui mora o peso visual da imagem.">
              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Paleta</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.palettes.map((item) => <Pill key={item} value={item} active={palette === item} onClick={() => setPalette(item)} />)}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Textura</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.textures.map((item) => <Pill key={item} value={item} active={texture === item} onClick={() => setTexture(item)} />)}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Iluminação</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.lightings.map((item) => <Pill key={item} value={item} active={lighting === item} onClick={() => setLighting(item)} />)}
                  </div>
                </div>
              </div>
            </Section>

            <Section icon={Camera} title="Câmera, enquadramento e acabamento" subtitle="Define o olhar e o polimento final da imagem.">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Câmera / composição</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.cameras.map((item) => <Pill key={item} value={item} active={camera === item} onClick={() => setCamera(item)} />)}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Acabamento</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.finishes.map((item) => <Pill key={item} value={item} active={finish === item} onClick={() => setFinish(item)} />)}
                  </div>
                </div>
              </div>
            </Section>

            <Section icon={Sparkles} title="Tom emocional" subtitle="A camada final de atmosfera visual.">
              <div className="flex flex-wrap gap-2">
                {PRESETS.moods.map((item) => <Pill key={item} value={item} active={mood === item} onClick={() => setMood(item)} />)}
              </div>
            </Section>
          </div>

          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">Linguagem visual gerada</div>
                  <div className="text-sm text-slate-500">Saída pronta para receber o cenário do outro motor.</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={copyStyle} className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm hover:bg-slate-800">
                    <Copy className="h-4 w-4" /> {copied ? "Copiado" : "Copiar"}
                  </button>
                  <button onClick={addToHistory} className="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-medium text-slate-950 hover:bg-slate-200">
                    <CheckCircle2 className="h-4 w-4" /> Salvar
                  </button>
                </div>
              </div>

              <textarea
                value={stylePrompt}
                readOnly
                className="min-h-[210px] w-full rounded-3xl border border-slate-700 bg-[#0c1119] p-4 text-sm leading-6 text-slate-100 outline-none"
              />

              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">Estrutura da saída</div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Estilo</span><span className="text-slate-500">{style}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Mídia</span><span className="text-slate-500">{medium}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Paleta</span><span className="text-slate-500">{palette}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Textura</span><span className="text-slate-500">{texture}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Iluminação</span><span className="text-slate-500">{lighting}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Câmera</span><span className="text-slate-500">{camera}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Acabamento</span><span className="text-slate-500">{finish}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Tom</span><span className="text-slate-500">{mood}</span></div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <History className="h-5 w-5" /> Histórico recente
              </div>
              {history.length ? (
                <div className="space-y-3">
                  {history.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                      <div className="mb-2 text-xs uppercase tracking-[0.15em] text-slate-500">{item.createdAt}</div>
                      <div className="text-sm leading-6 text-slate-300">{item.stylePrompt}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-800 p-6 text-sm text-slate-500">
                  Nenhum estilo salvo ainda. Gere uma linguagem visual e clique em <span className="text-slate-300">Salvar estilo</span>.
                </div>
              )}
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="mb-3 text-lg font-semibold">Prévia JSON</div>
              <pre className="overflow-auto rounded-2xl border border-slate-800 bg-slate-900 p-4 text-xs leading-5 text-slate-300">
                {JSON.stringify(jsonPreview, null, 2)}
              </pre>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
