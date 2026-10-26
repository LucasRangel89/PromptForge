import React, { useMemo, useState } from "react";
import { Sparkles, Wand2, Copy, Save, Shuffle, MapPin, Clock3, CloudRain, Boxes, Layers3, History, CheckCircle2 } from "lucide-react";

const PRESETS = {
  places: [
    "rodoviária brasileira",
    "posto de gasolina",
    "shopping center",
    "apartamento antigo",
    "escola pública",
    "sala de espera",
    "casa de bairro",
    "estação de metrô",
  ],
  eras: ["anos 70", "anos 80", "anos 90", "anos 2000", "atualidade", "futuro próximo"],
  weather: ["noite chuvosa", "garoa leve", "céu nublado", "madrugada úmida", "calor abafado", "vento frio"],
  activities: [
    "espera silenciosa",
    "troca de turnos",
    "embarque apressado",
    "pausa para descanso",
    "circulação de pessoas",
    "consumo cotidiano",
    "conversa curta entre desconhecidos",
    "observação distante",
  ],
  objects: [
    "TV ligada ao fundo",
    "bancas antigas",
    "lâmpadas fluorescentes",
    "bancos de plástico",
    "cartazes gastos",
    "relógio analógico",
    "telefone público",
    "sacolas plásticas",
    "revistas velhas",
    "poças no chão",
    "neon discreto",
    "placas envelhecidas",
  ],
  density: ["minimalista", "equilibrada", "ocupada", "cheia", "caótica"],
  nostalgia: ["baixa", "moderada", "alta", "muito alta"],
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sentenceFrom(state) {
  const place = state.place || "um lugar indefinido";
  const era = state.era || "tempo indefinido";
  const weather = state.weather || "clima neutro";
  const activity = state.activity || "atividade silenciosa";
  const objects = state.objects.length ? state.objects.join(", ") : "poucos elementos de cena";
  const density = state.density || "equilibrada";
  const nostalgia = state.nostalgia || "moderada";

  return `${place} dos ${era}, em ${weather}, com ${activity}, ${objects}, densidade visual ${density} e nostalgia ${nostalgia}`;
}

export default function ScenarioForgePrototype() {
  const [place, setPlace] = useState("rodoviária brasileira");
  const [era, setEra] = useState("anos 90");
  const [weather, setWeather] = useState("noite chuvosa");
  const [activity, setActivity] = useState("espera silenciosa");
  const [objects, setObjects] = useState(["TV ligada ao fundo", "bancas antigas", "lâmpadas fluorescentes"]);
  const [density, setDensity] = useState("ocupada");
  const [nostalgia, setNostalgia] = useState("alta");
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);

  const scenario = useMemo(() => sentenceFrom({ place, era, weather, activity, objects, density, nostalgia }), [place, era, weather, activity, objects, density, nostalgia]);

  const jsonPreview = useMemo(() => ({
    place,
    era,
    weather,
    activity,
    objects,
    density,
    nostalgia,
    scenario_final: scenario,
  }), [place, era, weather, activity, objects, density, nostalgia, scenario]);

  const toggleObject = (obj) => {
    setObjects((prev) => (prev.includes(obj) ? prev.filter((x) => x !== obj) : [...prev, obj]));
  };

  const addToHistory = () => {
    setHistory((prev) => [
      { id: crypto.randomUUID(), createdAt: new Date().toLocaleTimeString("pt-BR"), scenario },
      ...prev,
    ].slice(0, 6));
  };

  const surpriseMe = () => {
    const shuffled = [...PRESETS.objects].sort(() => Math.random() - 0.5);
    setPlace(pickRandom(PRESETS.places));
    setEra(pickRandom(PRESETS.eras));
    setWeather(pickRandom(PRESETS.weather));
    setActivity(pickRandom(PRESETS.activities));
    setObjects(shuffled.slice(0, 4));
    setDensity(pickRandom(PRESETS.density));
    setNostalgia(pickRandom(PRESETS.nostalgia));
  };

  const copyScenario = async () => {
    await navigator.clipboard.writeText(scenario);
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

  const SectionLabel = ({ icon: Icon, title, subtitle }) => (
    <div className="mb-3 flex items-start gap-3">
      <div className="rounded-2xl bg-slate-900 p-2 text-slate-200 ring-1 ring-slate-800">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="font-semibold text-slate-100">{title}</div>
        <div className="text-sm text-slate-500">{subtitle}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100">
      <div className="mx-auto max-w-7xl p-6 lg:p-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
              <Sparkles className="h-3.5 w-3.5" /> ScenarioForge · motor de cenário
            </div>
            <h1 className="text-3xl font-semibold tracking-tight lg:text-5xl">Gerador dedicado de cenário</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Este protótipo resolve só a base espacial e temporal: lugar, época, clima, atividade, objetos, densidade e nostalgia.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={surpriseMe} className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-950 hover:bg-slate-200">
              <Wand2 className="h-4 w-4" /> Surpreenda-me
            </button>
            <button onClick={addToHistory} className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-100 hover:bg-slate-800">
              <Save className="h-4 w-4" /> Salvar cenário
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-black/20">
              <SectionLabel icon={MapPin} title="Lugar" subtitle="Define o palco físico da cena." />
              <div className="flex flex-wrap gap-2">
                {PRESETS.places.map((p) => <Pill key={p} value={p} active={place === p} onClick={() => setPlace(p)} />)}
              </div>
              <input
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="ou escreva um lugar específico"
                className="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-slate-500"
              />
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <SectionLabel icon={Clock3} title="Tempo e atmosfera" subtitle="Época e sensação climática da cena." />
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-slate-300">Época</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.eras.map((e) => <Pill key={e} value={e} active={era === e} onClick={() => setEra(e)} />)}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-slate-300">Clima</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.weather.map((w) => <Pill key={w} value={w} active={weather === w} onClick={() => setWeather(w)} />)}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <SectionLabel icon={Boxes} title="Ação e objetos de cena" subtitle="O que está acontecendo e o que aparece no quadro." />
              <div className="space-y-5">
                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Atividade</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.activities.map((a) => <Pill key={a} value={a} active={activity === a} onClick={() => setActivity(a)} />)}
                  </div>
                </div>

                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Objetos de cena</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.objects.map((obj) => <Pill key={obj} value={obj} active={objects.includes(obj)} onClick={() => toggleObject(obj)} />)}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <SectionLabel icon={Layers3} title="Complexidade visual e nostalgia" subtitle="Controla o peso visual e o grau de memória afetiva." />
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Densidade visual</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.density.map((d) => <Pill key={d} value={d} active={density === d} onClick={() => setDensity(d)} />)}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium text-slate-300">Nostalgia</div>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.nostalgia.map((n) => <Pill key={n} value={n} active={nostalgia === n} onClick={() => setNostalgia(n)} />)}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">Cenário gerado</div>
                  <div className="text-sm text-slate-500">Saída pronta para o app principal aplicar âncora + estilo.</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={copyScenario} className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm hover:bg-slate-800">
                    <Copy className="h-4 w-4" /> {copied ? "Copiado" : "Copiar"}
                  </button>
                  <button onClick={addToHistory} className="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-medium text-slate-950 hover:bg-slate-200">
                    <CheckCircle2 className="h-4 w-4" /> Salvar
                  </button>
                </div>
              </div>

              <textarea
                value={scenario}
                readOnly
                className="min-h-[210px] w-full rounded-3xl border border-slate-700 bg-[#0c1119] p-4 text-sm leading-6 text-slate-100 outline-none"
              />

              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">Estrutura da saída</div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Lugar</span><span className="text-slate-500">{place}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Época</span><span className="text-slate-500">{era}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Clima</span><span className="text-slate-500">{weather}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Atividade</span><span className="text-slate-500">{activity}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Densidade</span><span className="text-slate-500">{density}</span></div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950 px-3 py-2"><span>Nostalgia</span><span className="text-slate-500">{nostalgia}</span></div>
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
                      <div className="text-sm leading-6 text-slate-300">{item.scenario}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-800 p-6 text-sm text-slate-500">
                  Nenhum cenário salvo ainda. Gere uma base e clique em <span className="text-slate-300">Salvar cenário</span>.
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
