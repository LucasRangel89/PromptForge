export type PresetOption = {
  name: string;
  description: string;
  output: string;
  colors?: string[];
};

export const ANCHORS: PresetOption[] = [
  {
    name: 'O Eternauta',
    description: 'Sobrevivência, neve e resistência coletiva.',
    output: 'a human survivor in a weathered protective suit and sealed helmet, obscured face, strong human silhouette, functional survival gear, grounded and never superheroic',
  },
  {
    name: 'Exploradora urbana',
    description: 'Uma presença curiosa entre ruínas modernas.',
    output: 'a female urban explorer wearing a practical canvas jacket and carrying a worn film camera, curious and quietly alert',
  },
  {
    name: 'Androide doméstico',
    description: 'Tecnologia cotidiana com desgaste e afeto.',
    output: 'an aging household android with scratched ivory panels, gentle expressive eyes and carefully repaired joints',
  },
  {
    name: 'Retrato editorial',
    description: 'Uma pessoa real, com presença e textura.',
    output: 'a compelling editorial portrait of an ordinary person with natural skin texture, understated clothing and a direct, thoughtful gaze',
  },
  {
    name: 'Criatura da Amazônia',
    description: 'Fantasia orgânica enraizada na floresta.',
    output: 'an original Amazonian forest creature made of moss, translucent leaves and dark wood, biologically plausible and quietly majestic',
  },
  {
    name: 'Arquiteto do futuro',
    description: 'Precisão técnica em um mundo por imaginar.',
    output: 'a future architect in modular workwear holding rolled luminous blueprints, calm, precise and deeply focused',
  },
];

export const SCENARIOS: PresetOption[] = [
  {
    name: 'Buenos Aires sob neve',
    description: 'A cidade familiar tornada estranha.',
    output: 'a recognizable Buenos Aires street covered in luminous toxic snow, silent apartment blocks and everyday objects interrupted by catastrophe',
  },
  {
    name: 'LAN House, 2003',
    description: 'CRTs, cadeiras plásticas e luz azul.',
    output: 'a Brazilian LAN house in 2003, rows of glowing CRT monitors, plastic chairs, tangled cables and faded wall posters',
  },
  {
    name: 'Rodoviária à meia-noite',
    description: 'Espera, fluorescentes e últimos ônibus.',
    output: 'a nearly empty Brazilian bus terminal at midnight, fluorescent tubes, worn benches, a distant idling bus and reflective tiled floors',
  },
  {
    name: 'Sertão ao amanhecer',
    description: 'Terra vermelha e horizonte sem fim.',
    output: 'the Brazilian sertão at dawn, red caatinga earth, twisted shrubs, a flat horizon and the first warm light touching dry branches',
  },
  {
    name: 'Shopping abandonado',
    description: 'Ruínas do consumo dos anos 90.',
    output: 'an abandoned 1990s shopping mall, shuttered stores, a dry fountain, dusty skylights and vegetation emerging through cracked tile',
  },
  {
    name: 'Amazônia bioluminescente',
    description: 'Uma floresta real com pulso fantástico.',
    output: 'deep inside the Amazon rainforest at dusk, bioluminescent plants, rising mist, layered canopy and wet leaves catching tiny points of light',
  },
  {
    name: 'Museu do futuro',
    description: 'Memória humana preservada em 2150.',
    output: 'a quiet museum in the year 2150, monolithic stone galleries, climate-controlled glass cases and ordinary objects displayed as precious artifacts',
  },
  {
    name: 'Telhados de São Paulo',
    description: 'A metrópole vista de cima ao entardecer.',
    output: 'the layered rooftops of São Paulo at dusk, water tanks, antennas, distant towers and laundry moving gently in the wind',
  },
];

export const ACTIONS: PresetOption[] = [
  { name: 'Em vigilância', description: 'Contida e atenta.', output: 'standing in quiet vigilance, body turned toward the horizon, observing before acting' },
  { name: 'Em deslocamento', description: 'Movimento com propósito.', output: 'moving forward with deliberate, grounded steps, carrying the weight of the journey' },
  { name: 'Gesto de cuidado', description: 'O coletivo em primeiro lugar.', output: 'helping another person adjust their protective gear, a small gesture of care under pressure' },
  { name: 'Descoberta', description: 'Algo acaba de mudar.', output: 'pausing at the exact moment of discovering something unexpected, restrained body language' },
  { name: 'Pausa silenciosa', description: 'O instante entre dois eventos.', output: 'taking a silent pause amid the surroundings, shoulders heavy, time briefly suspended' },
  { name: 'Ação decisiva', description: 'Energia sem heroização.', output: 'in the middle of a decisive physical action, realistic movement and believable weight' },
];

export const WEATHERS: PresetOption[] = [
  { name: 'Chuva fina', description: 'Precipitação delicada e superfícies úmidas.', output: 'gentle fine rainfall with small droplets and gradually dampening surfaces' },
  { name: 'Céu limpo', description: 'Poucas nuvens e visibilidade ampla.', output: 'clear weather with an open cloudless sky and unobstructed atmospheric visibility' },
  { name: 'Névoa baixa', description: 'Umidade suspensa junto ao chão.', output: 'low ground mist softening nearby forms while upper outlines remain readable' },
  { name: 'Vento constante', description: 'Direção estável percebida nos objetos.', output: 'steady directional wind moving loose fabric, hair and nearby vegetation in a consistent flow' },
  { name: 'Neve leve', description: 'Flocos esparsos sem perda de visibilidade.', output: 'light scattered snowfall with small flakes and clear surrounding visibility' },
  { name: 'Calor seco', description: 'Ar quente e baixa umidade.', output: 'hot dry weather with parched surfaces and clear heat-tinged air' },
];

export const MOODS: PresetOption[] = [
  { name: 'Tensão silenciosa', description: 'Algo errado, ainda invisível.', output: 'silent dread, the stillness just before a storm' },
  { name: 'Nostálgico', description: 'Beleza em algo que passou.', output: 'a deep sense of nostalgia for a familiar world that has already changed' },
  { name: 'Melancólico', description: 'Introspecção e perda.', output: 'quiet melancholy, emotional restraint and unresolved memory' },
  { name: 'Esperançoso', description: 'Luz sem ingenuidade.', output: 'hard-won hope, fragile but persistent, grounded in human connection' },
  { name: 'Onírico', description: 'Realidade levemente deslocada.', output: 'a dreamlike atmosphere, familiar yet subtly impossible' },
  { name: 'Épico', description: 'Escala e grandiosidade.', output: 'epic emotional scale, monumental atmosphere and a sense of history unfolding' },
  { name: 'Íntimo', description: 'Um instante privado.', output: 'an intimate, tender emotional register, a private moment observed with care' },
  { name: 'Caótico', description: 'Energia fora de controle.', output: 'controlled visual chaos, overlapping movement and unresolved energy' },
];

export const TRENDS: PresetOption[] = [
  { name: 'Y2K', description: 'Prata, plástico e otimismo digital.', output: 'subtle Y2K design influences, translucent plastic, brushed silver and early digital optimism' },
  { name: 'Retrofuturismo', description: 'O futuro imaginado no passado.', output: '1970s retrofuturist design language, analog technology and speculative optimism' },
  { name: 'Grunge 90s', description: 'Cru, rasgado e sem polimento.', output: '1990s grunge attitude, worn layers, raw textures and anti-gloss styling' },
  { name: 'Brutalismo', description: 'Concreto, escala e geometria.', output: 'brutalist spatial design, raw concrete, massive geometry and uncompromising rhythm' },
  { name: 'Solarpunk', description: 'Tecnologia a serviço da vida.', output: 'solarpunk details, practical renewable technology integrated with abundant plant life' },
  { name: 'Sem tendência', description: 'Atemporal e sem referência de época.', output: 'a timeless visual language without explicit period references' },
];

export const CHARACTER_PRESETS: PresetOption[] = [
  { name: 'Grupo de sobreviventes', description: 'Ninguém se salva sozinho.', output: 'accompanied by a small group of survivors moving and cooperating as one' },
  { name: 'Cachorro vira-lata', description: 'Um observador inesperado.', output: 'a Brazilian mixed-breed street dog watching from a short distance' },
  { name: 'Multidão distante', description: 'Vida em segundo plano.', output: 'a distant crowd moving through the background, anonymous but full of life' },
  { name: 'Criança com lanterna', description: 'Uma pequena fonte de luz.', output: 'a child holding a small flashlight close by, curious rather than frightened' },
  { name: 'Dois viajantes', description: 'Parceria e silêncio.', output: 'two travel companions sharing the frame, their relationship conveyed through body language' },
];

export const STYLES: PresetOption[] = [
  { name: 'Cinematográfico', description: 'Escala e fotografia de cinema.', output: 'cinematic realism with restrained production design and photographic depth' },
  { name: 'Graphic novel noir', description: 'Nanquim, contraste e silêncio.', output: 'a graphic novel noir illustration, expressive black ink and controlled negative space' },
  { name: 'Anime anos 90', description: 'Células pintadas à mão.', output: '1990s hand-painted anime cel aesthetics, detailed backgrounds and expressive linework' },
  { name: 'Xilogravura de cordel', description: 'Traço popular brasileiro.', output: 'Brazilian cordel woodcut illustration, hand-carved lines and rough printed texture' },
  { name: 'Aquarela editorial', description: 'Leveza e gesto visível.', output: 'editorial watercolor illustration, loose translucent washes and deliberate white space' },
  { name: 'Fotografia documental', description: 'Realidade sem encenação excessiva.', output: 'observational documentary photography, natural gestures and visual honesty' },
  { name: 'Risografia', description: 'Camadas de tinta e desregistro.', output: 'risograph print aesthetics, limited ink layers, granular texture and subtle misregistration' },
  { name: 'Concept art 3D', description: 'Volume, escala e mundo imaginado.', output: 'polished 3D concept art with believable materials and environmental storytelling' },
];

export const MEDIUMS: PresetOption[] = [
  { name: 'Fotografia 35mm', description: 'Película e resposta analógica.', output: 'authentic 35mm film photography' },
  { name: 'Pintura digital', description: 'Pincel e controle contemporâneo.', output: 'a meticulously layered digital painting' },
  { name: 'Nanquim sobre papel', description: 'Linha, mancha e papel visível.', output: 'india ink on textured cotton paper' },
  { name: 'Render 3D', description: 'Materiais e geometria digital.', output: 'a physically based 3D render' },
  { name: 'Aquarela', description: 'Transparência e pigmento.', output: 'traditional watercolor on cold-pressed paper' },
  { name: 'Polaroid', description: 'Instantâneo e imperfeito.', output: 'an instant Polaroid photograph with analog color response' },
];

export const PALETTES: PresetOption[] = [
  { name: 'Madrugada azul', description: 'Frio, liminal e silencioso.', output: 'a dominant 4am blue palette, cold navy shadows and faint cyan highlights', colors: ['#101a35', '#315a78', '#a9d6db'] },
  { name: 'Terracota e ocre', description: 'Terra, calor e memória.', output: 'a terracotta and warm ochre palette, sun-baked earth and restrained browns', colors: ['#532f24', '#b76542', '#e4b878'] },
  { name: 'Neon e preto', description: 'Contraste elétrico noturno.', output: 'electric neon accents against absolute black, saturated cyan and hot magenta', colors: ['#090b12', '#00d9d2', '#f04b9b'] },
  { name: 'Pastel desbotado', description: 'Cores lavadas pelo tempo.', output: 'faded pastel colors, washed-out warmth and soft low-contrast transitions', colors: ['#b9c9c4', '#e4c4ba', '#eee4c5'] },
  { name: 'Monocromático', description: 'Uma cor, todo o contraste.', output: 'strict monochrome with a single hue and an extreme but controlled value range', colors: ['#141414', '#777777', '#e7e7df'] },
  { name: 'Tropical saturado', description: 'Verde, fruta e luz intensa.', output: 'maximum tropical saturation, deep leaf greens, mango orange and hibiscus pink', colors: ['#165b3b', '#f0a329', '#e84b72'] },
];

export const LIGHTINGS: PresetOption[] = [
  { name: 'Luz difusa', description: 'Sombras suaves e atmosfera.', output: 'soft diffused lighting with gentle shadow transitions' },
  { name: 'Chiaroscuro', description: 'Drama entre luz e treva.', output: 'dramatic chiaroscuro, one motivated light source and deep shadows' },
  { name: 'Hora dourada', description: 'Sol baixo e calor natural.', output: 'warm low-angle golden hour light with long natural shadows' },
  { name: 'Neon ambiente', description: 'Cor refletida no ambiente.', output: 'motivated neon light spilling from practical signs and screens' },
  { name: 'Flash direto', description: 'Editorial cru e frontal.', output: 'raw direct on-camera flash, dark background and immediate editorial energy' },
  { name: 'Contra-luz', description: 'Silhueta e contorno luminoso.', output: 'strong backlighting, luminous rim light and partially silhouetted forms' },
];

export const TEXTURES: PresetOption[] = [
  { name: 'Grão analógico', description: 'Película tátil e orgânica.', output: 'organic 35mm film grain and subtle analog imperfections' },
  { name: 'Papel poroso', description: 'Fibra e absorção visíveis.', output: 'visible porous paper fibers and slight pigment bleed' },
  { name: 'VHS / tracking', description: 'Memória de fita magnética.', output: 'restrained VHS tracking lines and analog chroma bleed' },
  { name: 'Baixa poligonia', description: 'Geometria de outra era.', output: 'intentional low-poly geometry and visibly simplified surfaces' },
  { name: 'Retícula de impressão', description: 'Pontos e materialidade gráfica.', output: 'fine offset-print halftone dots and subtle ink texture' },
  { name: 'Superfície limpa', description: 'Acabamento controlado.', output: 'clean controlled surfaces with minimal visual noise' },
];

export const COMPOSITIONS: PresetOption[] = [
  { name: 'Plano aberto', description: 'O ambiente conta a história.', output: 'a wide establishing shot with environmental context and strong visual hierarchy' },
  { name: 'Close-up', description: 'Textura e presença.', output: 'an intimate close-up with shallow depth of field and precise focal detail' },
  { name: 'Retrato 3/4', description: 'Clássico e levemente lateral.', output: 'a classic three-quarter portrait composition with balanced negative space' },
  { name: 'Simetria central', description: 'Ordem e tensão geométrica.', output: 'perfectly centered symmetry and one-point perspective' },
  { name: 'Câmera no chão', description: 'Escala vista de baixo.', output: 'a ground-level low-angle camera, making the subject feel physically imposing' },
  { name: 'Aéreo / drone', description: 'O espaço como desenho.', output: 'a top-down aerial composition revealing graphic patterns in the environment' },
];

export const DETAILS: PresetOption[] = [
  { name: 'Neve luminosa', description: 'Flocos como assinatura atmosférica.', output: 'tiny luminous snow particles suspended in the air' },
  { name: 'Fumaça volumétrica', description: 'Luz ganhando corpo.', output: 'subtle volumetric haze revealing the path of light' },
  { name: 'Reflexo na água', description: 'Duplicação e profundidade.', output: 'a precise reflection on a wet surface below the subject' },
  { name: 'TV CRT ao fundo', description: 'Um objeto de época.', output: 'a CRT television glowing faintly in the background' },
  { name: 'Sombra dissidente', description: 'Um impossível discreto.', output: 'a subtle shadow that does not exactly match the subject silhouette' },
  { name: 'Anacronismo', description: 'Um objeto fora do tempo.', output: 'one deliberate anachronistic object placed naturally in the scene' },
  { name: 'Objetos de memória', description: 'História em pequenos artefatos.', output: 'a few personal memory objects with visible wear and implied history' },
  { name: 'Chuva de confete', description: 'Fragmentos de cor em suspensão.', output: 'small confetti fragments caught mid-air and lit with precision' },
];

export type ArtDirection = {
  name: string;
  description: string;
  colors: string[];
  values: {
    style: string[];
    medium: string;
    palette: string;
    lighting: string;
    texture: string;
    composition: string;
  };
};

export const ART_DIRECTIONS: ArtDirection[] = [
  {
    name: 'Noir sob a neve',
    description: 'Cinema analógico, azul profundo e silêncio.',
    colors: ['#10182e', '#668a9b', '#e0e4db'],
    values: { style: ['Cinematográfico'], medium: 'Fotografia 35mm', palette: 'Madrugada azul', lighting: 'Luz difusa', texture: 'Grão analógico', composition: 'Plano aberto' },
  },
  {
    name: 'Cordel do futuro',
    description: 'Tradição impressa encontra ficção científica.',
    colors: ['#b84b32', '#e4b563', '#20201c'],
    values: { style: ['Xilogravura de cordel'], medium: 'Nanquim sobre papel', palette: 'Terracota e ocre', lighting: 'Chiaroscuro', texture: 'Papel poroso', composition: 'Retrato 3/4' },
  },
  {
    name: 'Y2K analógico',
    description: 'Flash direto, neon e textura de revista.',
    colors: ['#17121d', '#db4a99', '#69d5d0'],
    values: { style: ['Fotografia documental', 'Risografia'], medium: 'Polaroid', palette: 'Neon e preto', lighting: 'Flash direto', texture: 'Retícula de impressão', composition: 'Close-up' },
  },
  {
    name: 'Amazônia onírica',
    description: 'Aquarela translúcida e verde exuberante.',
    colors: ['#164f3b', '#69a876', '#e4bb69'],
    values: { style: ['Aquarela editorial'], medium: 'Aquarela', palette: 'Tropical saturado', lighting: 'Contra-luz', texture: 'Papel poroso', composition: 'Plano aberto' },
  },
];

export const RANDOM_PROJECT_NAMES = [
  'Arquivo de outro tempo',
  'Geografia do improvável',
  'Memória em suspensão',
  'Atlas das cenas possíveis',
  'Matéria e lembrança',
  'Um futuro já visto',
];
