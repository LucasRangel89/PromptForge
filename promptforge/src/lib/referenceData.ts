// Gerado por scripts/build-reference-data.mjs. Edite as fontes na raiz e data/references.curated.json; execute npm run refs:build.
// Tuplas reduzem o JS inicial; os objetos públicos são montados uma vez na inicialização.
import type { ReferenceItem, ReferenceKind } from './referenceTypes';

type ReferenceRow = [id: string, kind: ReferenceKind, name: string, output: string, category: string, era: string, source: number, description?: string, colors?: string[]];
const SOURCES = ["Sequenciador de Memórias","Cinema, TV, Games e HQs","Sequenciador HTML original","Sequenciador HTML v3","Sequenciador HTML v4","Curadoria expandida PromptForge"];
const rows: ReferenceRow[] = [
  [
    "memorias-anchor-elis-regina",
    "anchor",
    "Elis Regina",
    "Elis Regina performing on stage, intense and volcanic, 1970s Brazil",
    "Música BR",
    "70s",
    0
  ],
  [
    "memorias-anchor-joao-gilberto",
    "anchor",
    "João Gilberto",
    "João Gilberto, eyes half-closed, guitar in lap, bossa nova silence around him",
    "Música BR",
    "70s",
    0
  ],
  [
    "memorias-anchor-luiz-gonzaga",
    "anchor",
    "Luiz Gonzaga",
    "Luiz Gonzaga, accordion, leather hat, the king of baião in full costume",
    "Música BR",
    "70s",
    0
  ],
  [
    "memorias-anchor-grande-otelo",
    "anchor",
    "Grande Otelo",
    "Grande Otelo, expressive face, stage makeup, Brazilian cinema giant",
    "Cinema BR",
    "70s",
    0
  ],
  [
    "memorias-anchor-glauber-rocha",
    "anchor",
    "Glauber Rocha",
    "Glauber Rocha, wild-eyed, pointing a camera, Cinema Novo prophet",
    "Cinema BR",
    "70s",
    0
  ],
  [
    "memorias-anchor-dercy-goncalves",
    "anchor",
    "Dercy Gonçalves",
    "Dercy Gonçalves on stage, mouth wide open in laughter, Brazilian comedy legend",
    "TV BR",
    "70s",
    0
  ],
  [
    "memorias-anchor-carlos-drummond",
    "anchor",
    "Carlos Drummond",
    "Carlos Drummond de Andrade, seated at a typewriter, iron flower metaphor surrounding him",
    "Literatura BR",
    "70s",
    0
  ],
  [
    "memorias-anchor-mao-tse-tung",
    "anchor",
    "Mao Tsé-Tung",
    "Mao Zedong in Zhongshan suit, formal portrait, monumental presence",
    "Política",
    "70s",
    0
  ],
  [
    "memorias-anchor-jimi-hendrix",
    "anchor",
    "Jimi Hendrix",
    "Jimi Hendrix, guitar on fire at Woodstock, psychedelic light show behind him",
    "Música",
    "70s",
    0
  ],
  [
    "memorias-anchor-jim-morrison",
    "anchor",
    "Jim Morrison",
    "Jim Morrison on stage, leather pants, arms outstretched, shaman energy",
    "Música",
    "70s",
    0
  ],
  [
    "memorias-anchor-miles-davis",
    "anchor",
    "Miles Davis",
    "Miles Davis, trumpet raised, eyes closed, 1970s electric period, dark and abstract",
    "Música",
    "70s",
    0
  ],
  [
    "memorias-anchor-pele-copa-70",
    "anchor",
    "Pelé (Copa 70)",
    "Pelé lifting the 1970 World Cup trophy in Mexico City, pure joy, yellow jersey",
    "Esporte BR",
    "70s",
    0
  ],
  [
    "memorias-anchor-emerson-fittipaldi",
    "anchor",
    "Émerson Fittipaldi",
    "Emerson Fittipaldi in cockpit, 1972 Formula 1 World Champion, young and focused",
    "Esporte BR",
    "70s",
    0
  ],
  [
    "memorias-anchor-fidel-castro",
    "anchor",
    "Fidel Castro",
    "Fidel Castro at the podium, military uniform, cigar, commanding the crowd",
    "Política",
    "70s",
    0
  ],
  [
    "memorias-anchor-angela-davis",
    "anchor",
    "Angela Davis",
    "Angela Davis, fist raised, afro halo, 1970s civil rights presence",
    "Política",
    "70s",
    0
  ],
  [
    "memorias-anchor-muhammad-ali",
    "anchor",
    "Muhammad Ali",
    "Muhammad Ali, fists raised, standing over Sonny Liston, pure lightning",
    "Esporte",
    "70s",
    0
  ],
  [
    "memorias-anchor-bruce-lee",
    "anchor",
    "Bruce Lee",
    "Bruce Lee in nunchaku fighting stance, Enter the Dragon, absolute stillness before motion",
    "Cinema",
    "70s",
    0
  ],
  [
    "memorias-anchor-stanley-kubrick",
    "anchor",
    "Stanley Kubrick",
    "Stanley Kubrick behind a movie camera, intense stare, cold directorial genius",
    "Cinema",
    "70s",
    0
  ],
  [
    "memorias-anchor-sophia-loren",
    "anchor",
    "Sophia Loren",
    "Sophia Loren, Italian film diva, dark eyes, 1970s glamour and gravity",
    "Cinema",
    "70s",
    0
  ],
  [
    "memorias-anchor-che-guevara",
    "anchor",
    "Che Guevara",
    "Che Guevara, beret, star, the Guerrillero Heroico portrait by Korda, iconic red",
    "Política",
    "70s",
    0
  ],
  [
    "memorias-anchor-raul-seixas",
    "anchor",
    "Raul Seixas",
    "Raul Seixas, electric guitar, rock and roll meets mystic Brazil, rock do êgo",
    "Música BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-lobao",
    "anchor",
    "Lobão",
    "Lobão on stage, rebellious, Brazilian rock underground 1980s energy",
    "Música BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-gilberto-gil",
    "anchor",
    "Gilberto Gil",
    "Gilberto Gil with guitar, Bahian warmth, tropicália spirit in 1980s Brazil",
    "Música BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-bethania",
    "anchor",
    "Bethânia",
    "Maria Bethânia, hands expressive, dramatic stage pose, theatrical presence",
    "Música BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-sonia-braga",
    "anchor",
    "Sônia Braga",
    "Sônia Braga as Gabriela or Dancin' Days, Brazilian sexual liberation icon",
    "TV BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-tancredo-neves",
    "anchor",
    "Tancredo Neves",
    "Tancredo Neves, white hair, dignified, the hope of Brazilian redemocratization",
    "Política BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-hebe-camargo",
    "anchor",
    "Hebe Camargo",
    "Hebe Camargo on television, jewels, white smile, queen of Brazilian variety shows",
    "TV BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-prince",
    "anchor",
    "Prince",
    "Prince at Purple Rain era, lace shirt, guitar solo, Minneapolis paisley park universe",
    "Música",
    "80s",
    0
  ],
  [
    "memorias-anchor-michael-jackson-thriller",
    "anchor",
    "Michael Jackson (Thriller)",
    "Michael Jackson in red leather jacket, zombie pose, Thriller music video, moonlit cemetery",
    "Música",
    "80s",
    0
  ],
  [
    "memorias-anchor-madonna-like-a-virgin",
    "anchor",
    "Madonna (Like a Virgin)",
    "Madonna in white wedding dress and Boy Toy belt, Venice gondola, Like a Virgin",
    "Música",
    "80s",
    0
  ],
  [
    "memorias-anchor-freddie-mercury",
    "anchor",
    "Freddie Mercury",
    "Freddie Mercury at Live Aid Wembley 1985, white tank top, fist pump, singing to 72,000 people",
    "Música",
    "80s",
    0
  ],
  [
    "memorias-anchor-indiana-jones",
    "anchor",
    "Indiana Jones",
    "Indiana Jones, leather jacket, fedora, bullwhip, ancient artifact in hand, temple behind him",
    "Cinema",
    "80s",
    0
  ],
  [
    "memorias-anchor-ellen-ripley",
    "anchor",
    "Ellen Ripley",
    "Ellen Ripley from Aliens, power loader exosuit, flamethrower, terrified and determined",
    "Cinema",
    "80s",
    0
  ],
  [
    "memorias-anchor-rambo",
    "anchor",
    "Rambo",
    "John Rambo, red headband, machine gun, jungle backdrop, pure 80s excess",
    "Cinema",
    "80s",
    0
  ],
  [
    "memorias-anchor-ghostbusters",
    "anchor",
    "Ghostbusters",
    "the four Ghostbusters in tan jumpsuits, proton packs firing, New York City chaos",
    "Cinema",
    "80s",
    0
  ],
  [
    "memorias-anchor-falcao-mv-bill",
    "anchor",
    "Falcão (MV Bill)",
    "Falcão from O Mundo é dos Espertos, raw documentary, 1980s Brazilian street reality",
    "Cultura BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-rubens-barrichello",
    "anchor",
    "Rubens Barrichello",
    "young Rubens Barrichello in go-kart, early 1980s, future F1 champion in the making",
    "Esporte BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-zico",
    "anchor",
    "Zico",
    "Zico at Flamengo, white and red, greatest Brazilian number 10 of the 80s",
    "Esporte BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-socrates",
    "anchor",
    "Socrates",
    "Sócrates, Corinthians Democracy movement, intellectual footballer, beard and long legs",
    "Esporte BR",
    "80s",
    0
  ],
  [
    "memorias-anchor-reagan",
    "anchor",
    "Reagan",
    "Ronald Reagan, cowboy hat, rancher pose, the face of 1980s American conservatism",
    "Política",
    "80s",
    0
  ],
  [
    "memorias-anchor-gorbachev",
    "anchor",
    "Gorbachev",
    "Mikhail Gorbachev, birthmark on forehead, suit, the end of an empire in his eyes",
    "Política",
    "80s",
    0
  ],
  [
    "memorias-anchor-e-t",
    "anchor",
    "E.T.",
    "E.T. the Extra-Terrestrial reaching out his glowing finger, Spielberg warmth and melancholy",
    "Cinema",
    "80s",
    0
  ],
  [
    "memorias-anchor-marty-mcfly",
    "anchor",
    "Marty McFly",
    "Marty McFly on the DeLorean hood, orange life vest, clock tower behind him, 88mph moment",
    "Cinema",
    "80s",
    0
  ],
  [
    "memorias-anchor-cazuza",
    "anchor",
    "Cazuza",
    "Cazuza, cigarette, defiant and poetic, Brazilian rock and tragic beauty",
    "Música BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-cassia-eller",
    "anchor",
    "Cássia Eller",
    "Cássia Eller with electric guitar, raw Brazilian rock queen, intense dark eyes",
    "Música BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-djavan",
    "anchor",
    "Djavan",
    "Djavan, acoustic guitar, Brazilian MPB and jazz fusion master, warm stage light",
    "Música BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-mamonas-assassinas",
    "anchor",
    "Mamonas Assassinas",
    "Mamonas Assassinas in full parody costume, Brazilian comic rock phenomenon, absurd joy",
    "Música BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-e-o-tchan-conjunto",
    "anchor",
    "É o Tchan (conjunto)",
    "É o Tchan group in Axé Music formation, matching outfits, Carla Perez at center",
    "Música BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-racionais-mcs",
    "anchor",
    "Racionais MCs",
    "Racionais MCs, Mano Brown at the mic, São Paulo periphery, serious and raw",
    "Música BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-emicida-jovem",
    "anchor",
    "Emicida (jovem)",
    "young Emicida, freestyle rap on Largo do Arouche, São Paulo, 90s energy",
    "Música BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-princess-diana",
    "anchor",
    "Princess Diana",
    "Princess Diana, white dress, anti-landmine campaign, compassion and tragedy",
    "Cultura",
    "90s",
    0
  ],
  [
    "memorias-anchor-nelson-mandela",
    "anchor",
    "Nelson Mandela",
    "Nelson Mandela raising fist on release from prison, Robben Island chapter ending",
    "Política",
    "90s",
    0
  ],
  [
    "memorias-anchor-notorious-b-i-g",
    "anchor",
    "Notorious B.I.G.",
    "The Notorious B.I.G., crown, fur coat, New York royalty, throne pose",
    "Música",
    "90s",
    0
  ],
  [
    "memorias-anchor-dr-dre",
    "anchor",
    "Dr. Dre",
    "Dr. Dre in the studio, headphones around neck, G-funk era, Compton, 1992",
    "Música",
    "90s",
    0
  ],
  [
    "memorias-anchor-lauryn-hill",
    "anchor",
    "Lauryn Hill",
    "Lauryn Hill, Miseducation era, natural hair, microphone, raw emotion and power",
    "Música",
    "90s",
    0
  ],
  [
    "memorias-anchor-jay-z",
    "anchor",
    "Jay-Z",
    "Jay-Z, Reasonable Doubt era, Marcy Projects in the background, unflinching gaze",
    "Música",
    "90s",
    0
  ],
  [
    "memorias-anchor-rage-against-the-machine",
    "anchor",
    "Rage Against the Machine",
    "Zack de la Rocha on stage, fist up, Rage Against the Machine fury",
    "Música",
    "90s",
    0
  ],
  [
    "memorias-anchor-thom-yorke",
    "anchor",
    "Thom Yorke",
    "Thom Yorke at the OK Computer sessions, unsettled gaze, studio equipment, 1997",
    "Música",
    "90s",
    0
  ],
  [
    "memorias-anchor-eddie-vedder",
    "anchor",
    "Eddie Vedder",
    "Eddie Vedder, Pearl Jam, crowd surfing above thousands of hands, Pinkpop 1992",
    "Música",
    "90s",
    0
  ],
  [
    "memorias-anchor-leonardo-dicaprio-jovem",
    "anchor",
    "Leonardo DiCaprio (jovem)",
    "young Leonardo DiCaprio in Romeo + Juliet era, angelic face, raw intensity",
    "Cinema",
    "90s",
    0
  ],
  [
    "memorias-anchor-uma-thurman-pulp-fiction",
    "anchor",
    "Uma Thurman (Pulp Fiction)",
    "Uma Thurman as Mia Wallace, bob haircut, cigarette, Pulp Fiction adrenaline",
    "Cinema",
    "90s",
    0
  ],
  [
    "memorias-anchor-samuel-l-jackson-jules",
    "anchor",
    "Samuel L. Jackson (Jules)",
    "Samuel L. Jackson as Jules Winnfield, Jheri curl, suit, Bible verse face",
    "Cinema",
    "90s",
    0
  ],
  [
    "memorias-anchor-denzel-washington-malcolm-x",
    "anchor",
    "Denzel Washington (Malcolm X)",
    "Denzel Washington as Malcolm X, suit and glasses, finger pointing upward, righteous fire",
    "Cinema",
    "90s",
    0
  ],
  [
    "memorias-anchor-fhc",
    "anchor",
    "FHC",
    "Fernando Henrique Cardoso, Plano Real, presidential composure, sociologist in power",
    "Política BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-mano-brown",
    "anchor",
    "Mano Brown",
    "Mano Brown of Racionais MCs, microphone at lip, peripheral São Paulo, unflinching truth",
    "Música BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-roger-federer-jovem",
    "anchor",
    "Roger Federer (jovem)",
    "young Roger Federer at Wimbledon, early 2000s, effortless backhand, all-white",
    "Esporte",
    "90s",
    0
  ],
  [
    "memorias-anchor-tiger-woods-masters-97",
    "anchor",
    "Tiger Woods (Masters 97)",
    "Tiger Woods 21 years old winning his first Masters, fist pump, Augusta green",
    "Esporte",
    "90s",
    0
  ],
  [
    "memorias-anchor-ronaldo-lima-copa-94",
    "anchor",
    "Ronaldo Lima (Copa 94)",
    "Ronaldo Fenômeno at 17, sub in 1994 World Cup squad, the future in full bloom",
    "Esporte BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-romario-copa-94",
    "anchor",
    "Romário (Copa 94)",
    "Romário, golden boot, Copa 1994, celebrating in the Pasadena sun",
    "Esporte BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-guga-kuerten",
    "anchor",
    "Guga Kuerten",
    "Gustavo Kuerten drawing a heart on the Roland Garros clay, champion and beloved",
    "Esporte BR",
    "90s",
    0
  ],
  [
    "memorias-anchor-lula-posse-2003",
    "anchor",
    "Lula (posse 2003)",
    "Lula on inauguration day January 2003, fist raised, the workers president, Brasília",
    "Política BR",
    "2000s",
    0
  ],
  [
    "memorias-anchor-lula-jovem",
    "anchor",
    "Lula (jovem)",
    "young Lula, union leader in the 1970s ABC Paulista strikes, finger raised, factory backdrop",
    "Política BR",
    "2000s",
    0
  ],
  [
    "memorias-anchor-gisele-bundchen",
    "anchor",
    "Gisele Bündchen",
    "Gisele Bündchen, supermodel peak, Victoria's Secret angel wings, confidence absolute",
    "Moda BR",
    "2000s",
    0
  ],
  [
    "memorias-anchor-adriana-lima",
    "anchor",
    "Adriana Lima",
    "Adriana Lima, Brazilian supermodel, intense dark eyes, early 2000s fashion",
    "Moda BR",
    "2000s",
    0
  ],
  [
    "memorias-anchor-ivete-sangalo",
    "anchor",
    "Ivete Sangalo",
    "Ivete Sangalo on giant carnival stage, arms wide, queen of Axé and Brazilian pop",
    "Música BR",
    "2000s",
    0
  ],
  [
    "memorias-anchor-seu-jorge",
    "anchor",
    "Seu Jorge",
    "Seu Jorge with guitar, acoustic Bowie covers, Life Aquatic melancholy and beauty",
    "Música BR",
    "2000s",
    0
  ],
  [
    "memorias-anchor-criolo",
    "anchor",
    "Criolo",
    "Criolo on stage, São Paulo periphery hip-hop and samba fusion, political urgency",
    "Música BR",
    "2000s",
    0
  ],
  [
    "memorias-anchor-eminem",
    "anchor",
    "Eminem",
    "Eminem, Marshall Mathers LP era, bleached hair, trailer park rage and genius",
    "Música",
    "2000s",
    0
  ],
  [
    "memorias-anchor-kanye-west-college-dropout",
    "anchor",
    "Kanye West (College Dropout)",
    "Kanye West in College Dropout era, Louis Vuitton backpack, polo shirt, bear mascot",
    "Música",
    "2000s",
    0
  ],
  [
    "memorias-anchor-justin-timberlake",
    "anchor",
    "Justin Timberlake",
    "Justin Timberlake post-NSYNC, FutureSex era, slick and confident, microphone stand",
    "Música",
    "2000s",
    0
  ],
  [
    "memorias-anchor-beyonce-destiny-s-child",
    "anchor",
    "Beyoncé (Destiny's Child)",
    "Beyoncé in Destiny's Child formation, early 2000s, matching outfits, future queen ascending",
    "Música",
    "2000s",
    0
  ],
  [
    "memorias-anchor-amy-winehouse",
    "anchor",
    "Amy Winehouse",
    "Amy Winehouse, Back to Black, beehive, tattoos, Ronettes channeling 2006",
    "Música",
    "2000s",
    0
  ],
  [
    "memorias-anchor-jack-white",
    "anchor",
    "Jack White",
    "Jack White, White Stripes, red and white, raw blues scream, minimal stage",
    "Música",
    "2000s",
    0
  ],
  [
    "memorias-anchor-lady-gaga-debut",
    "anchor",
    "Lady Gaga (debut)",
    "Lady Gaga in her debut era, Just Dance, lightning bolt face paint, performance art",
    "Música",
    "2000s",
    0
  ],
  [
    "memorias-anchor-coringa-ledger",
    "anchor",
    "Coringa (Ledger)",
    "Heath Ledger as the Joker mid-monologue, hospital nurse disguise, chaos incarnate",
    "Cinema",
    "2000s",
    0
  ],
  [
    "memorias-anchor-tony-stark",
    "anchor",
    "Tony Stark",
    "Tony Stark in Mark I suit emerging from cave, Afghanistan dust, Iron Man origin",
    "Cinema",
    "2000s",
    0
  ],
  [
    "memorias-anchor-gollum",
    "anchor",
    "Gollum",
    "Gollum clutching the One Ring underwater, precious and destroyed by desire",
    "Cinema",
    "2000s",
    0
  ],
  [
    "memorias-anchor-capitao-nascimento",
    "anchor",
    "Capitão Nascimento",
    "Capitão Nascimento in BOPE uniform, skull insignia, Tropa de Elite intensity",
    "Cinema BR",
    "2000s",
    0
  ],
  [
    "memorias-anchor-barack-obama",
    "anchor",
    "Barack Obama",
    "Barack Obama at Grant Park, election night 2008, the world holding its breath",
    "Política",
    "2000s",
    0
  ],
  [
    "memorias-anchor-george-w-bush",
    "anchor",
    "George W. Bush",
    "George W. Bush in flight suit on aircraft carrier, Mission Accomplished banner, 2003",
    "Política",
    "2000s",
    0
  ],
  [
    "memorias-anchor-putin-2000",
    "anchor",
    "Putin (2000)",
    "Vladimir Putin in 2000, KGB past in his cold eyes, new Russian strongman rising",
    "Política",
    "2000s",
    0
  ],
  [
    "memorias-anchor-steve-jobs-iphone",
    "anchor",
    "Steve Jobs (iPhone)",
    "Steve Jobs holding the first iPhone on stage, January 2007, black turtleneck, history",
    "Tecnologia",
    "2000s",
    0
  ],
  [
    "memorias-anchor-mark-zuckerberg",
    "anchor",
    "Mark Zuckerberg",
    "young Mark Zuckerberg in his Harvard dorm, laptop glow, Facebook being born, 2004",
    "Tecnologia",
    "2000s",
    0
  ],
  [
    "memorias-anchor-ronaldinho-barcelona",
    "anchor",
    "Ronaldinho (Barcelona)",
    "Ronaldinho at Barcelona Camp Nou mid-elastico dribble, grin wider than the goal",
    "Esporte BR",
    "2000s",
    0
  ],
  [
    "memorias-anchor-adriano-imperador",
    "anchor",
    "Adriano Imperador",
    "Adriano Imperador at Inter Milan, most feared striker of 2004-05, Vila Cruzeiro pride",
    "Esporte BR",
    "2000s",
    0
  ],
  [
    "memorias-anchor-kobe-bryant",
    "anchor",
    "Kobe Bryant",
    "Kobe Bryant, fadeaway jumper, Los Angeles gold and purple, 2009 champion face",
    "Esporte",
    "2000s",
    0
  ],
  [
    "memorias-anchor-lebron-james",
    "anchor",
    "LeBron James",
    "LeBron James entering the NBA 2003, the Chosen One cover, raw teenage power",
    "Esporte",
    "2000s",
    0
  ],
  [
    "memorias-anchor-usain-bolt",
    "anchor",
    "Usain Bolt",
    "Usain Bolt lightning bolt pose at Beijing 2008 finish line, arms wide, cosmic grin",
    "Esporte",
    "2000s",
    0
  ],
  [
    "memorias-anchor-valentino-rossi",
    "anchor",
    "Valentino Rossi",
    "Valentino Rossi The Doctor, MotoGP celebration, yellow sun helmet, Italian theater",
    "Esporte",
    "2000s",
    0
  ],
  [
    "memorias-anchor-don-draper",
    "anchor",
    "Don Draper",
    "Don Draper, Mad Men, impeccable 1960s suit, whiskey in hand, secrets behind the eyes",
    "TV",
    "2000s",
    0
  ],
  [
    "memorias-anchor-walter-white",
    "anchor",
    "Walter White",
    "Walter White, Breaking Bad, hazmat suit, meth lab blue glow, I am the danger",
    "TV",
    "2000s",
    0
  ],
  [
    "memorias-anchor-marielle-franco",
    "anchor",
    "Marielle Franco",
    "Marielle Franco at a microphone, afro, earrings, Black feminist force, voice of Rio's favelas",
    "Política BR",
    "2010s",
    0
  ],
  [
    "memorias-anchor-bolsonaro",
    "anchor",
    "Bolsonaro",
    "Jair Bolsonaro in campaign, green and yellow, Brazilian political polarization",
    "Política BR",
    "2010s",
    0
  ],
  [
    "memorias-anchor-dilma-rousseff",
    "anchor",
    "Dilma Rousseff",
    "Dilma Rousseff, presidential sash, composed and embattled, first female president of Brazil",
    "Política BR",
    "2010s",
    0
  ],
  [
    "memorias-anchor-eduardo-paes",
    "anchor",
    "Eduardo Paes",
    "Eduardo Paes at Rio 2016 Olympics opening, Carnival and modernism on the world stage",
    "Política BR",
    "2010s",
    0
  ],
  [
    "memorias-anchor-mc-livinho",
    "anchor",
    "MC Livinho",
    "MC Livinho, Brazilian funk ostentação, gold chain, Anitta and 2010s funk explosion",
    "Música BR",
    "2010s",
    0
  ],
  [
    "memorias-anchor-anitta",
    "anchor",
    "Anitta",
    "Anitta, Brazilian pop and funk queen, international rise, Rio favela to global stage",
    "Música BR",
    "2010s",
    0
  ],
  [
    "memorias-anchor-emicida",
    "anchor",
    "Emicida",
    "Emicida on Marvelous City bridge, Brazilian hip-hop at its most humanist and poetic",
    "Música BR",
    "2010s",
    0
  ],
  [
    "memorias-anchor-beyonce-lemonade",
    "anchor",
    "Beyoncé (Lemonade)",
    "Beyoncé in yellow Lemonade dress, baseball bat, New Orleans flooding, Black power",
    "Música",
    "2010s",
    0
  ],
  [
    "memorias-anchor-taylor-swift",
    "anchor",
    "Taylor Swift",
    "Taylor Swift on the 1989 era, synth-pop transformation, stadium-scale singalongs",
    "Música",
    "2010s",
    0
  ],
  [
    "memorias-anchor-drake",
    "anchor",
    "Drake",
    "Drake in the Hotline Bling booth, purple light, meme and genuine emotion coexisting",
    "Música",
    "2010s",
    0
  ],
  [
    "memorias-anchor-kendrick-lamar",
    "anchor",
    "Kendrick Lamar",
    "Kendrick Lamar, To Pimp a Butterfly era, Compton backdrop, poetic gravity",
    "Música",
    "2010s",
    0
  ],
  [
    "memorias-anchor-adele",
    "anchor",
    "Adele",
    "Adele, 21 era, British council estate behind her, voice that bends nations",
    "Música",
    "2010s",
    0
  ],
  [
    "memorias-anchor-game-of-thrones-cersei",
    "anchor",
    "Game of Thrones (Cersei)",
    "Cersei Lannister, Iron Throne, wine goblet, political scheming behind green eyes",
    "TV",
    "2010s",
    0
  ],
  [
    "memorias-anchor-tyrion-lannister",
    "anchor",
    "Tyrion Lannister",
    "Tyrion Lannister, wine and wit, Game of Thrones dwarf genius, power in small frame",
    "TV",
    "2010s",
    0
  ],
  [
    "memorias-anchor-daenerys-targaryen",
    "anchor",
    "Daenerys Targaryen",
    "Daenerys Targaryen, silver hair, dragon on each shoulder, Meereen throne",
    "TV",
    "2010s",
    0
  ],
  [
    "memorias-anchor-breaking-bad-jesse",
    "anchor",
    "Breaking Bad Jesse",
    "Jesse Pinkman, yo, blue meth stained jeans, youth and moral destruction",
    "TV",
    "2010s",
    0
  ],
  [
    "memorias-anchor-lionel-messi-copa-14",
    "anchor",
    "Lionel Messi (Copa 14)",
    "Lionel Messi lifting the World Cup in Rio 2014, tears and pure transcendence",
    "Esporte",
    "2010s",
    0
  ],
  [
    "memorias-anchor-neymar-jr",
    "anchor",
    "Neymar Jr.",
    "Neymar Jr., Barcelona era, impossible dribbles, flair and skill, Brazilian joy",
    "Esporte BR",
    "2010s",
    0
  ],
  [
    "memorias-anchor-serena-williams",
    "anchor",
    "Serena Williams",
    "Serena Williams, catsuit, French Open, body and power defying every convention",
    "Esporte",
    "2010s",
    0
  ],
  [
    "memorias-anchor-simone-biles",
    "anchor",
    "Simone Biles",
    "Simone Biles mid-air triple twisting double layout, gravity simply does not apply",
    "Esporte",
    "2010s",
    0
  ],
  [
    "memorias-anchor-hamilton-f1",
    "anchor",
    "Hamilton (F1)",
    "Lewis Hamilton, rainbow helmet, seven world championships, F1 history personified",
    "Esporte",
    "2010s",
    0
  ],
  [
    "memorias-anchor-greta-thunberg",
    "anchor",
    "Greta Thunberg",
    "Greta Thunberg at the UN, braids, how dare you stare, generation Z fury",
    "Política",
    "2010s",
    0
  ],
  [
    "memorias-anchor-jeff-bezos",
    "anchor",
    "Jeff Bezos",
    "Jeff Bezos, shaved head, laughing on his yacht, Amazon empire at a glance",
    "Tecnologia",
    "2010s",
    0
  ],
  [
    "memorias-anchor-elon-musk-spacex",
    "anchor",
    "Elon Musk (SpaceX)",
    "Elon Musk watching a Falcon 9 rocket launch, SpaceX pride, Silicon Valley messiah",
    "Tecnologia",
    "2010s",
    0
  ],
  [
    "memorias-scenario-pelourinho-salvador-80s",
    "scenario",
    "Pelourinho, Salvador, 80s",
    "Pelourinho historic quarter, Salvador, 1980s, colorful colonial facades, street drummers, Candomblé energy",
    "Brasil",
    "80s",
    0
  ],
  [
    "memorias-scenario-masp-sp-anos-70",
    "scenario",
    "MASP, SP, Anos 70",
    "MASP museum on Avenida Paulista 1970s, Lina Bo Bardi's red concrete pillars, São Paulo before the skyscrapers",
    "Brasil",
    "70s",
    0
  ],
  [
    "memorias-scenario-feira-hippie-de-ipanema",
    "scenario",
    "Feira Hippie de Ipanema",
    "Hippie Fair of General Osório Square, Ipanema, 1975, leather crafts, macramé, peace signs and bossa nova",
    "Brasil",
    "70s",
    0
  ],
  [
    "memorias-scenario-brasilia-anos-60",
    "scenario",
    "Brasília Anos 60",
    "Brasília just inaugurated 1960, Oscar Niemeyer curves under enormous sky, red laterite dust everywhere",
    "Brasil",
    "70s",
    0
  ],
  [
    "memorias-scenario-rua-25-de-marco-sp",
    "scenario",
    "Rua 25 de Março, SP",
    "Rua 25 de Março São Paulo 1990s, total commercial chaos, goods stacked to the sky, Lebanese shopkeepers, immigrant energy",
    "Brasil",
    "90s",
    0
  ],
  [
    "memorias-scenario-baile-funk-rio-2005",
    "scenario",
    "Baile Funk, Rio 2005",
    "Baile funk in Rio de Janeiro favela, 2005, strobe light, bass frequencies shaking concrete walls, youth and danger",
    "Brasil",
    "2000s",
    0
  ],
  [
    "memorias-scenario-trincheira-da-greve-abc",
    "scenario",
    "Trincheira da Greve ABC",
    "ABC Paulista factory strike picket line, 1979, Lula in a white shirt, workers and police facing each other in the rain",
    "Brasil",
    "70s",
    0
  ],
  [
    "memorias-scenario-copacabana-palace-1950s",
    "scenario",
    "Copacabana Palace, 1950s",
    "Copacabana Palace hotel 1950s, Rio de Janeiro golden era, elegant suits and cocktails, Sugarloaf Mountain perfect",
    "Brasil",
    "70s",
    0
  ],
  [
    "memorias-scenario-hospital-das-clinicas-sp",
    "scenario",
    "Hospital das Clínicas SP",
    "Hospital das Clínicas São Paulo, 1990s, overflowing public health system, nurses running, stark fluorescent light",
    "Brasil",
    "90s",
    0
  ],
  [
    "memorias-scenario-carnaval-de-salvador",
    "scenario",
    "Carnaval de Salvador",
    "Carnival in Salvador Bahia, trio elétrico truck, Camarote da Cerveja, million bodies in the street, Axé loudspeakers",
    "Brasil",
    "2000s",
    0
  ],
  [
    "memorias-scenario-manaus-opera-house-1900s",
    "scenario",
    "Manaus Opera House, 1900s",
    "Teatro Amazonas Manaus, 1900 rubber boom, pink and white opera house, jungle and Italian marble collision",
    "Brasil",
    "70s",
    0
  ],
  [
    "memorias-scenario-comunidade-da-rocinha",
    "scenario",
    "Comunidade da Rocinha",
    "Rocinha favela, Rio de Janeiro, aerial view, brick labyrinth against the forest, the largest favela in Brazil",
    "Brasil",
    "2000s",
    0
  ],
  [
    "memorias-scenario-carandiru-1992",
    "scenario",
    "Carandiru, 1992",
    "Carandiru Penitentiary, São Paulo 1992, overcrowded cells, the day before the massacre, institutional dread",
    "Brasil",
    "90s",
    0
  ],
  [
    "memorias-scenario-lencois-maranhenses",
    "scenario",
    "Lençóis Maranhenses",
    "Lençóis Maranhenses, white sand dunes filled with turquoise lagoons, impossible lunar landscape in Maranhão",
    "Brasil",
    "",
    0
  ],
  [
    "memorias-scenario-alto-do-moura-caruaru",
    "scenario",
    "Alto do Moura, Caruaru",
    "Alto do Moura in Caruaru, the clay sculpture capital of Brazil, Mestre Vitalino workshop, rooster and human figures",
    "Brasil",
    "",
    0
  ],
  [
    "memorias-scenario-parque-do-ibirapuera-1970s",
    "scenario",
    "Parque do Ibirapuera, 1970s",
    "Ibirapuera Park São Paulo 1970s, Bienal Pavilion, cars parked on grass, people in bell-bottoms strolling",
    "Brasil",
    "70s",
    0
  ],
  [
    "memorias-scenario-woodstock-1969",
    "scenario",
    "Woodstock, 1969",
    "Woodstock festival, 1969, half million people, rain and mud, music as spiritual emergency",
    "Internacional",
    "70s",
    0
  ],
  [
    "memorias-scenario-harlem-nyc-1975",
    "scenario",
    "Harlem, NYC, 1975",
    "Harlem, New York City 1975, block parties, hip-hop being born in an abandoned building, summer heat",
    "Internacional",
    "70s",
    0
  ],
  [
    "memorias-scenario-saigon-1975",
    "scenario",
    "Saigon, 1975",
    "Saigon, April 1975, rooftop helicopter evacuation, a war ending in chaos and flight",
    "Internacional",
    "70s",
    0
  ],
  [
    "memorias-scenario-muro-de-berlim-1989",
    "scenario",
    "Muro de Berlim, 1989",
    "Berlin Wall, November 1989, the night it fell, people with hammers and tears, East and West touching",
    "Internacional",
    "80s",
    0
  ],
  [
    "memorias-scenario-praca-tiananmen-1989",
    "scenario",
    "Praça Tiananmen, 1989",
    "Tiananmen Square, Beijing, June 1989, one man facing a column of tanks, stillness against metal",
    "Internacional",
    "80s",
    0
  ],
  [
    "memorias-scenario-johannesburg-1994",
    "scenario",
    "Johannesburg, 1994",
    "Johannesburg, South Africa, election day 1994, the first democratic election, queues stretching to the horizon",
    "Internacional",
    "90s",
    0
  ],
  [
    "memorias-scenario-hong-kong-na-noite",
    "scenario",
    "Hong Kong na Noite",
    "Hong Kong at night, 1997, neon reflections in rain puddles, the last British governor leaving, handover tension",
    "Internacional",
    "90s",
    0
  ],
  [
    "memorias-scenario-manhattan-11-09-2001",
    "scenario",
    "Manhattan, 11/09/2001",
    "Lower Manhattan, September 11 2001, both towers still standing in smoke, silence before the second fall",
    "Internacional",
    "2000s",
    0
  ],
  [
    "memorias-scenario-bagda-ocupada-2003",
    "scenario",
    "Bagdá Ocupada, 2003",
    "Baghdad 2003, US soldiers, Saddam statue falling, dust and disoriented crowds, war without an ending",
    "Internacional",
    "2000s",
    0
  ],
  [
    "memorias-scenario-praia-de-tel-aviv",
    "scenario",
    "Praia de Tel Aviv",
    "Tel Aviv beach, warm Mediterranean evening, young people dancing next to artillery sound in the distance",
    "Internacional",
    "2000s",
    0
  ],
  [
    "memorias-scenario-fukushima-2011",
    "scenario",
    "Fukushima, 2011",
    "Fukushima exclusion zone, 2011, empty streets overgrown with grass, radiation silence, shopping mall abandoned",
    "Internacional",
    "2010s",
    0
  ],
  [
    "memorias-scenario-praca-tahrir-2011",
    "scenario",
    "Praça Tahrir, 2011",
    "Tahrir Square, Cairo 2011, Arab Spring, millions filling the square, mobile phones and revolution",
    "Internacional",
    "2010s",
    0
  ],
  [
    "memorias-scenario-silicon-valley-campus",
    "scenario",
    "Silicon Valley Campus",
    "Apple or Google campus, California 2010s, glass and grass, free cafeteria, the empire of algorithms with a pleasant face",
    "Internacional",
    "2010s",
    0
  ],
  [
    "memorias-scenario-kibera-nairobi",
    "scenario",
    "Kibera, Nairobi",
    "Kibera slum, Nairobi, largest informal settlement in Africa, density and color and music",
    "Internacional",
    "2010s",
    0
  ],
  [
    "memorias-scenario-toquio-shibuya-crossing",
    "scenario",
    "Tóquio Shibuya Crossing",
    "Shibuya crossing Tokyo at rush hour, the famous intersection flooded with umbrellas and direction",
    "Internacional",
    "2000s",
    0
  ],
  [
    "memorias-scenario-veneza-inundada",
    "scenario",
    "Veneza Inundada",
    "Venice at high tide, acqua alta, water lapping into St. Mark's Basilica, gondolas level with palazzos",
    "Internacional",
    "",
    0
  ],
  [
    "memorias-scenario-lagos-noturno",
    "scenario",
    "Lagos Noturno",
    "Lagos, Nigeria at night, Afrobeats pulsing from clubs, traffic standstill, the largest city in Africa",
    "Internacional",
    "2010s",
    0
  ],
  [
    "memorias-scenario-chernobyl-1986",
    "scenario",
    "Chernobyl, 1986",
    "Chernobyl, April 1986, the reactor burning blue in the night sky, the invisible catastrophe beginning",
    "Internacional",
    "80s",
    0
  ],
  [
    "memorias-scenario-deserto-do-atacama",
    "scenario",
    "Deserto do Atacama",
    "Atacama Desert, the driest place on Earth, red stone and white salt flats, sky like another planet",
    "Fantasia",
    "",
    0
  ],
  [
    "memorias-scenario-ilha-de-pascoa",
    "scenario",
    "Ilha de Páscoa",
    "Easter Island, moai statues against the Pacific Ocean horizon, ancient enigma and Polynesian silence",
    "Fantasia",
    "",
    0
  ],
  [
    "memorias-scenario-estacao-espacial-iss",
    "scenario",
    "Estação Espacial ISS",
    "International Space Station interior, weightlessness, cables and screens, Earth curving below the window",
    "Fantasia",
    "2010s",
    0
  ],
  [
    "memorias-scenario-submarino-profundo",
    "scenario",
    "Submarino Profundo",
    "Deep sea research submarine interior, bioluminescent creatures pressing against the porthole, absolute pressure and darkness",
    "Fantasia",
    "",
    0
  ],
  [
    "memorias-scenario-catedral-de-chartres",
    "scenario",
    "Catedral de Chartres",
    "Chartres Cathedral interior, French Gothic, rose window light flooding the nave in colored rivers, medieval devotion",
    "Fantasia",
    "",
    0
  ],
  [
    "memorias-scenario-campos-de-refugiados",
    "scenario",
    "Campos de Refugiados",
    "UNHCR refugee camp, tents to the horizon, the geography of displacement and human resilience",
    "Internacional",
    "2010s",
    0
  ],
  [
    "memorias-style-arte-rupestre-digital",
    "style",
    "Arte Rupestre Digital",
    "digital cave painting aesthetic — primitive marks and forms translated to glowing screen surfaces",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-azulejo-portugues",
    "style",
    "Azulejo Português",
    "traditional Portuguese azulejo tile illustration — blue and white cobalt, geometric floral borders, flat naïf figures",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-arte-marajoara",
    "style",
    "Arte Marajoara",
    "Pre-Columbian Marajó Island ceramic art style — geometric spirals, earthen red and black, ancient Amazonian patterns",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-entalhe-em-madeira-nordestina",
    "style",
    "Entalhe em Madeira Nordestina",
    "hand-carved Northeastern Brazilian woodcarving style — rough chisel marks, folk religious imagery, raw cedar and mahogany grain",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-foto-polaroid-desbotada",
    "style",
    "Foto Polaroid Desbotada",
    "instant Polaroid photograph, overexposed corners, 1980s color shift, square format, white border",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-arte-art-nouveau",
    "style",
    "Arte Art Nouveau",
    "Art Nouveau illustration — organic flowing lines, botanical motifs, Mucha-style female figure, decorative gold border",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-pintura-de-ossos-de-dia-dos-mortos",
    "style",
    "Pintura de Ossos de Dia dos Mortos",
    "Día de los Muertos skull and skeleton illustration, bright marigolds, vibrant Mexican folk art palette",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-pintura-sumi-e-japonesa",
    "style",
    "Pintura Sumi-e Japonesa",
    "Japanese sumi-e ink painting — gestural single brushstroke, vast empty space, mountain or figure barely suggested",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-risografia",
    "style",
    "Risografia",
    "risograph print — limited ink layers, deliberate color misregistration, granular texture, zine aesthetic",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-gravura-em-metal-etching",
    "style",
    "Gravura em Metal (Etching)",
    "copper plate etching print — fine cross-hatching, high detail, Goya-era chiaroscuro, plate texture visible",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-retrato-victorian-hand-colored",
    "style",
    "Retrato Victorian Hand-Colored",
    "Victorian-era hand-colored photograph — tinted cheeks and lips on otherwise monochrome daguerreotype, formal stiffness",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-arte-de-vitrine-natalina",
    "style",
    "Arte de Vitrine Natalina",
    "holiday window display illustration aesthetic — warm light from within, snow outside, nostalgic department store art",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-blueprint-tecnico",
    "style",
    "Blueprint Técnico",
    "technical blueprint drawing — white lines on Prussian blue, precise engineering annotations, elevation and section views",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-mapa-antigo-portugues",
    "style",
    "Mapa Antigo Português",
    "16th-century Portuguese cartographic illustration — Latin annotations, hand-drawn coastlines, sea monsters, compass rose",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-render-brutalist-3d",
    "style",
    "Render Brutalist 3D",
    "brutalist architecture 3D render — raw exposed concrete, geometric mass, overcast sky, no human figures",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-fotonovela-italiana-60s",
    "style",
    "Fotonovela Italiana 60s",
    "1960s Italian fumetti fotonovela aesthetic — photographed actors with speech bubbles, melodrama, Roman shadows",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-arte-budista-tibetana-thangka",
    "style",
    "Arte Budista Tibetana (Thangka)",
    "Tibetan Buddhist thangka painting — gold leaf, intricate mandala geometry, deity figures, deep jewel colors, linen cloth",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-cartaz-belle-epoque",
    "style",
    "Cartaz Belle Époque",
    "Belle Époque theater poster, Toulouse-Lautrec style — flat color, expressive linework, Parisian cabaret atmosphere",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-papel-de-parede-vitoriano",
    "style",
    "Papel de Parede Vitoriano",
    "Victorian wallpaper pattern rendered large scale — dense botanical repeat, Morris & Co style, dark and lush",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-diagrama-de-infografico-vintage",
    "style",
    "Diagrama de Infográfico Vintage",
    "vintage scientific infographic illustration — sepia, hand-lettered annotations, exploded mechanical diagrams, 1920s educational book",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-tapecaria-medieval",
    "style",
    "Tapeçaria Medieval",
    "medieval tapestry weaving style — flat woven figures, hunting scene, Bayeux Tapestry horizontal narrative, mille-fleurs background",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-capa-de-pulp-fiction",
    "style",
    "Capa de Pulp Fiction",
    "1950s pulp fiction magazine cover — lurid colors, sensational typography, exaggerated drama, grindhouse aesthetic",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-arte-celta-iluminada",
    "style",
    "Arte Celta Iluminada",
    "Celtic illuminated manuscript style — interlaced knotwork borders, zoomorphic initials, Book of Kells gold and ultramarine",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-foto-de-satelite-nasa",
    "style",
    "Foto de Satélite NASA",
    "NASA satellite imagery aesthetic — false-color elevation map, top-down orbital view, geographic abstraction",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-impressionismo-frances",
    "style",
    "Impressionismo Francês",
    "French Impressionist oil painting — loose visible brushwork, dappled natural light, Monet or Renoir atmospheric dissolve",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-expressionismo-alemao",
    "style",
    "Expressionismo Alemão",
    "German Expressionist painting — distorted faces, anguished angles, dark psychological terror, Kirchner or Nolde palette",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-litografia-de-cordel",
    "style",
    "Litografia de Cordel",
    "Brazilian cordel string literature lithograph cover — bold hand-carved face, extreme graphic contrast, northeastern hero narrative",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-arte-sequencial-hq-marvel-70s",
    "style",
    "Arte Sequencial (HQ Marvel 70s)",
    "1970s Marvel Comics sequential art — Jack Kirby dots, dynamic panel layouts, hyperbolic action poses, word balloon typography",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-animacao-disney-classica",
    "style",
    "Animação Disney Clássica",
    "Disney golden age hand-drawn animation style, 1940s — clean ink line, watercolor wash backgrounds, expressive eyes",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-street-art-tag-e-wildstyle",
    "style",
    "Street Art (Tag e Wildstyle)",
    "graffiti wildstyle lettering and character, spray can on brick, New York City subway heritage, chrome and color",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-fotografia-fashion-dos-anos-70",
    "style",
    "Fotografia Fashion dos Anos 70",
    "1970s fashion photography, Helmut Newton influence — stark shadows, power pose, black and white German edge",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "memorias-style-tarsila-do-amaral",
    "style",
    "Tarsila do Amaral",
    "in the style of Tarsila do Amaral — modernist Brazilian palette, rounded feminine forms, abaporu proportions, vivid tropicalism",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-candido-portinari",
    "style",
    "Cândido Portinari",
    "in the manner of Cândido Portinari — Brazilian social realism, elongated workers, red laterite earth, political humanity",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-di-cavalcanti",
    "style",
    "Di Cavalcanti",
    "in the painterly style of Di Cavalcanti — mulata figures, carnival colors, Brazilian sensuality, Cubist-Expressionist hybrid",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-nelson-leirner",
    "style",
    "Nelson Leirner",
    "in the conceptual-pop tradition of Nelson Leirner — Brazilian consumer culture deconstructed with humor and provocation",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-vik-muniz",
    "style",
    "Vik Muniz",
    "in the photographic tradition of Vik Muniz — image constructed from unexpected materials, seen from above, beauty from trash or chocolate",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-helio-oiticica",
    "style",
    "Hélio Oiticica",
    "in the spirit of Hélio Oiticica's Parangolés — participatory art, sensory color, favela geometry, the body as canvas",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-lygia-clark",
    "style",
    "Lygia Clark",
    "inspired by Lygia Clark's neo-concrete forms — relational objects, sensory participation, malleable aluminum, the body is the work",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-frans-post",
    "style",
    "Frans Post",
    "in the tradition of Frans Post, Dutch painter of colonial Brazil — 17th-century topographical precision, sugar mill landscapes, exotic flora",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-debret",
    "style",
    "Debret",
    "in the style of Jean-Baptiste Debret — 19th-century Brazilian court illustration, ethnographic precision, colonial ceremony",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-henri-cartier-bresson",
    "style",
    "Henri Cartier-Bresson",
    "in the decisive moment tradition of Henri Cartier-Bresson — black and white, geometry in street photography, the fraction of a second",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-vivian-maier",
    "style",
    "Vivian Maier",
    "in the style of Vivian Maier — street photography, mirror self-portrait, hidden observation, raw domestic and urban humanity",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-arbus",
    "style",
    "Arbus",
    "in the unsettling portrait tradition of Diane Arbus — flash, direct gaze, marginalized subjects treated with leveling dignity",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-saul-leiter",
    "style",
    "Saul Leiter",
    "in the painterly color photography style of Saul Leiter — snow, glass reflections, peripheral framing, New York impressionism",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-william-eggleston",
    "style",
    "William Eggleston",
    "in the democratic photography of William Eggleston — mundane American subject, dye transfer saturated color, radical ordinariness",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-edward-hopper",
    "style",
    "Edward Hopper",
    "in the mood of Edward Hopper — American loneliness, diner window light, urban solitude, 1950s petroleum hour",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-magritte",
    "style",
    "Magritte",
    "in the surrealist tradition of René Magritte — immaculate impossible image, bowler hats and blue skies, philosophical visual pun",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-salvador-dali",
    "style",
    "Salvador Dalí",
    "in the melting vision of Salvador Dalí — precise impossible forms, Catalan light, surrealist landscape, dream logic made painterly",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-hieronymus-bosch",
    "style",
    "Hieronymus Bosch",
    "in the nightmarish detail of Hieronymus Bosch — medieval hell populated with hybrid creatures, moral panorama, Garden of Earthly Delights",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-alphonse-mucha",
    "style",
    "Alphonse Mucha",
    "in the decorative style of Alphonse Mucha — Art Nouveau, botanical border, female figure as spiritual center, gold and pastel",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-gustav-klimt",
    "style",
    "Gustav Klimt",
    "in the golden mosaic style of Gustav Klimt — gold leaf, Byzantine pattern, embrace and erotic tension, decorative and profound",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-egon-schiele",
    "style",
    "Egon Schiele",
    "in the raw expressionist line of Egon Schiele — angular contorted bodies, nervous line, psychological exposure, Vienna 1910",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-pieter-bruegel",
    "style",
    "Pieter Bruegel",
    "in the panoramic tradition of Pieter Bruegel the Elder — Flemish landscape full of tiny human figures, moral allegory in community",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-vermeer",
    "style",
    "Vermeer",
    "in the intimate domestic light of Johannes Vermeer — single window, pearl luminescence, Dutch interior, stopped time",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-velazquez",
    "style",
    "Velázquez",
    "in the painterly authority of Diego Velázquez — court portrait with psychological depth, Las Meninas compositional mastery",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-j-m-w-turner",
    "style",
    "J.M.W. Turner",
    "in the atmospheric vortex of J.M.W. Turner — light dissolved into chaos, storm and sea, Romanticism at the verge of abstraction",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-caspar-david-friedrich",
    "style",
    "Caspar David Friedrich",
    "in the sublime of Caspar David Friedrich — solitary figure from behind, vast landscape, Romanticism, the individual against infinity",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-hokusai",
    "style",
    "Hokusai",
    "in the tradition of Katsushika Hokusai — woodblock ukiyo-e print, The Great Wave composition logic, Japanese nature and drama",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-hiroshige",
    "style",
    "Hiroshige",
    "in the serene landscape tradition of Utagawa Hiroshige — Japanese woodblock, rain or snow, travelers on mountain pass, quiet beauty",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-cindy-sherman",
    "style",
    "Cindy Sherman",
    "in the staged self-portrait tradition of Cindy Sherman — role and costume, film still implication, identity construction as art",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-jeff-wall",
    "style",
    "Jeff Wall",
    "in the large-format lightbox tradition of Jeff Wall — cinematically staged documentary scene, Vancouver, moral ambiguity in ordinary moment",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-wolfgang-tillmans",
    "style",
    "Wolfgang Tillmans",
    "in the intimate archive of Wolfgang Tillmans — casual photographs at eye level, nightlife and sunlight, queer and tender",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-peter-beard",
    "style",
    "Peter Beard",
    "in the wild diary tradition of Peter Beard — Africa, animals, handwriting over photographs, life annotated as art",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-ernesto-neto",
    "style",
    "Ernesto Neto",
    "inspired by Ernesto Neto's sensory installations — translucent fabric forms, smell and touch implied, body and space in dialogue",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-style-chris-ware",
    "style",
    "Chris Ware",
    "in the grid-mapped graphic novel style of Chris Ware — tiny panels, nostalgic color, emotional precision, loneliness as diagram",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "memorias-trend-retratado-como-boneco-de-cera-madame-tussauds",
    "trend",
    "Retratado como Boneco de Cera (Madame Tussauds)",
    "depicted as a wax figure in Madame Tussauds — hyper-realistic but uncanny, velvet rope in front, flash photograph lighting",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-capa-de-caras-magazine-anos-90",
    "trend",
    "Capa de Caras Magazine (Anos 90)",
    "staged as a 1990s Caras magazine cover — extreme close-up, glamour lighting, celebrities at their most staged and luminous",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-estatua-de-aeroporto",
    "trend",
    "Estátua de Aeroporto",
    "rendered as a bronze airport departure hall sculpture — life-size, anonymous travellers walking past unseeing",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-ex-voto-nordestino",
    "trend",
    "Ex-Voto Nordestino",
    "depicted as a hand-painted ex-voto wooden plaque — naïf style, miracle attributed, church wall setting, gratitude in primitive text",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-especime-de-museu-de-ciencias",
    "trend",
    "Espécime de Museu de Ciências",
    "displayed as a natural history museum specimen — glass case, pinned and labeled, institutional description placard, cold classification",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-corrida-de-videogame-sprite-select",
    "trend",
    "Corrida de Videogame (Sprite Select)",
    "as a character selection screen in a 1994 fighting game — stats panel, move list, select your fighter typography",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-personagem-de-cordel-em-verso",
    "trend",
    "Personagem de Cordel em Verso",
    "as hero of a printed cordel pamphlet — heptasyllabic verse narrates their deeds in woodcut panels, Northeastern Brazil",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-fotografia-de-escola",
    "trend",
    "Fotografia de Escola",
    "as an official school portrait photograph — blue backdrop, awkward smile, student uniform, 1997 yearbook format",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-mascote-de-time-brasileiro",
    "trend",
    "Mascote de Time Brasileiro",
    "reimagined as a Brazilian football club mascot — cartoon style, team colors, grito de guerra pose, stadium entrance gate",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-figura-de-presepio-nordestino",
    "trend",
    "Figura de Presépio Nordestino",
    "as a hand-painted clay nativity scene figure — folk religious tradition, earthen colors, simplified but expressive form",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-preso-em-ambar-museu-natural",
    "trend",
    "Preso em Âmbar (Museu Natural)",
    "preserved in amber, displayed in a natural history museum — ancient, suspended in gold resin, perfectly preserved tragedy",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-folha-de-album-de-figurinhas",
    "trend",
    "Folha de Álbum de Figurinhas",
    "as a Panini sticker album card — silver holographic border, name bar at bottom, 1994 World Cup sticker energy",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-verbete-da-wikipedia-2006",
    "trend",
    "Verbete da Wikipédia (2006)",
    "depicted as a Wikipedia article's main illustration — white background, descriptive caption, no-frills documentary neutrality",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-propaganda-de-cerveja-brasileira",
    "trend",
    "Propaganda de Cerveja Brasileira",
    "as a 1990s Brazilian beer advertisement — tropical setting, yellow and green, humor and sexual charge, Brahma or Skol aesthetic",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-cena-de-telenovela-das-9",
    "trend",
    "Cena de Telenovela das 9",
    "staged as a Brazilian prime-time novela scene — overlit studio, dramatic close-up, tears about to fall, Globo aesthetic",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-personagem-de-rpg-de-mesa",
    "trend",
    "Personagem de RPG de Mesa",
    "illustrated as a tabletop RPG character sheet — stats panel, equipment list, class and alignment, dungeon master's notebook",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-frente-de-camisa-de-time",
    "trend",
    "Frente de Camisa de Time",
    "as a football shirt graphic — club crest style, shield form, heraldic animal, Brazilian sports identity",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-heroi-de-cordel-em-quadrao",
    "trend",
    "Herói de Cordel em Quadrão",
    "as a full-panel Brazilian cordel comic book hero — dynamic pose, speech bubble in verse, Northeast setting",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-retrato-policial-mugshot",
    "trend",
    "Retrato Policial (Mugshot)",
    "as a police mugshot — front and profile views, height ruler, number placard, institutional fluorescent light, deadpan",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-poster-de-se-procura",
    "trend",
    "Pôster de Se Procura",
    "on a wanted poster — PROCURADO in bold, black and white portrait, reward amount, western or noir atmosphere",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-embrulho-de-produto-de-mercado",
    "trend",
    "Embrulho de Produto de Mercado",
    "illustrated on a consumer product package — mascot and brand language, nutritional information panel, Brazilian supermarket shelf",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-personagem-de-anime-brasileiro",
    "trend",
    "Personagem de Animê Brasileiro",
    "reimagined as a Brazilian anime character — large eyes, Rio or Salvador setting, Axé or funk soundtrack implied, mecha or magical girl genre",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-trend-santos-do-povo-garrafa-de-cachaca",
    "trend",
    "Santos do Povo (Garrafa de Cachaça)",
    "depicted as the label of an artisanal cachaça bottle — Northeastern saint iconography, hand-lettered name, sugar cane motif",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "memorias-detail-moscas-em-voo-lento",
    "detail",
    "Moscas em Voo Lento",
    "slow-motion flies visible in the air, suggesting heat, decay, and the tropics at their most humid and real",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-data-de-nascimento-como-codigo",
    "detail",
    "Data de Nascimento como Código",
    "a birth year or date encoded subtly in the image — as a license plate, a graffiti tag, or a worn tattoo",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-sombra-que-nao-corresponde",
    "detail",
    "Sombra que Não Corresponde",
    "the subject's shadow does not match their form — it belongs to someone or something else entirely, cast from an unseen source",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-espelho-rachado",
    "detail",
    "Espelho Rachado",
    "a cracked mirror somewhere in the frame — reflection multiplied and distorted, fracture as metaphor",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-relogio-parado",
    "detail",
    "Relógio Parado",
    "a clock visible in the scene showing a specific time — stopped, meaningful, the moment preserved in amber",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-bilhete-escrito-a-mao",
    "detail",
    "Bilhete Escrito à Mão",
    "a handwritten note visible somewhere in the scene — illegible but emotional, personal history in cursive",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-plastico-de-cadeira-coberto",
    "detail",
    "Plástico de Cadeira Coberto",
    "plastic furniture cover still on a chair or couch — Brazilian domestic detail, preservation as social anxiety",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-fotografia-dentro-da-fotografia",
    "detail",
    "Fotografia Dentro da Fotografia",
    "a framed photograph within the photograph — another scene nested inside, memory within memory",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-cigarro-a-consumir-se",
    "detail",
    "Cigarro a Consumir-se",
    "a burning cigarette balanced on an ashtray's edge — smoke rising, time passing, the scene about to change",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-cobertor-de-croche",
    "detail",
    "Cobertor de Crochê",
    "a handmade crochê blanket visible in the scene — grandmother's hands implied, domestic warmth, acrylic yarn and memory",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-garrafao-de-agua-mineral",
    "detail",
    "Garrafão de Água Mineral",
    "a blue plastic water gallon jug visible in the scene — Brazilian domestic signifier, social class quietly declared",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-tv-ligada-ao-fundo",
    "detail",
    "TV Ligada ao Fundo",
    "a CRT television playing something in the background — news or novela barely visible, blue light spilling into the room",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-cachorro-vira-lata",
    "detail",
    "Cachorro Vira-Lata",
    "a Brazilian mixed-breed street dog (vira-lata) somewhere in the frame — observing, resting, belonging fully to the scene",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-fio-de-cabelo-na-lente",
    "detail",
    "Fio de Cabelo na Lente",
    "a single hair resting on the camera lens — intimate imperfection, the photographer's presence implied",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-numero-de-protocolo",
    "detail",
    "Número de Protocolo",
    "an official protocol number stamped or written somewhere visible — bureaucracy as aesthetic, the state's fingerprint",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-ventilador-de-teto-girando",
    "detail",
    "Ventilador de Teto Girando",
    "a ceiling fan in slow motion above the scene — tropical heat, Southern light, the rhythm of humidity",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-caixa-de-fosforos",
    "detail",
    "Caixa de Fósforos",
    "a matchbox visible somewhere in the composition — fire potential, the ordinary made dangerous, Brazilian brand design",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-sandalia-havaiana",
    "detail",
    "Sandália Havaiana",
    "a pair of Havaianas somewhere in the scene — Brazilian universal object, class and comfort and beach collapsed into one",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-folha-de-bananeira",
    "detail",
    "Folha de Bananeira",
    "a banana leaf framing or cutting through the image — tropical weight, tropical green, tropical logic",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-mancha-de-umidade-na-parede",
    "detail",
    "Mancha de Umidade na Parede",
    "a damp stain on the wall behind the subject — tropical decay, time passing through plaster, interior weather",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-replica-em-miniatura",
    "detail",
    "Réplica em Miniatura",
    "a miniature replica of the main subject visible somewhere in the frame — the thing observing itself, uncanny repetition",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-rasgo-na-borda-do-frame",
    "detail",
    "Rasgo na Borda do Frame",
    "the image tears at one edge as if it is a printed photograph being ripped — the image as physical fragile object",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-balao-murchando",
    "detail",
    "Balão Murchando",
    "a deflating balloon somewhere in the scene — celebration ending, time's passage made rubber and color",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-abelha-no-quadro",
    "detail",
    "Abelha no Quadro",
    "a single bee resting somewhere unexpected in the composition — fragility, nature inserting itself, the detail that changes everything",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-vapor-de-comida-quente",
    "detail",
    "Vapor de Comida Quente",
    "steam rising from a plate of food in the foreground — meal as presence, warmth and nourishment, the domestic sacred",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-estatica-de-televisao",
    "detail",
    "Estática de Televisão",
    "television static snow texture overlaid at the edges of the image — signal lost, memory failing, the broadcast ending",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-passo-de-samba-em-blur",
    "detail",
    "Passo de Samba em Blur",
    "motion blur on feet that are dancing — the rest of the image sharp, only the rhythm is moving",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-rasura-de-censurado",
    "detail",
    "Rasura de Censurado",
    "a thick black censorship bar over some element of the image — what was removed matters as much as what remains",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-detail-corda-bamba",
    "detail",
    "Corda Bamba",
    "a tightrope wire visible across the image — the subject is or will be on it, equilibrium as permanent condition",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "memorias-medium-capa-de-livro-de-bolso",
    "medium",
    "Capa de Livro de Bolso",
    "mass market paperback book cover format — spine visible, author credit, tag-line below title, bookstore shelf context",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-poster-de-coluna-de-metro",
    "medium",
    "Pôster de Coluna de Metrô",
    "vertical subway column poster format, 3:1 ratio, designed for passing eyes, bold and immediate",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-tela-de-celular-9-16",
    "medium",
    "Tela de Celular (9:16)",
    "vertical 9:16 smartphone screen format, social media native, full-bleed immersion, thumb-scroll ready",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-fita-k7-j-card",
    "medium",
    "Fita K7 (J-Card)",
    "cassette tape J-card insert format — folded rectangle, tracklist side, lo-fi illustration, 1990s bedroom",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-ingresso-de-show",
    "medium",
    "Ingresso de Show",
    "concert ticket format — perforated edge, barcode, venue name, date stamped, collectible artifact",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-capa-de-almanaque",
    "medium",
    "Capa de Almanaque",
    "Brazilian almanaque calendar cover format — year prominent, folkloric illustration, 12-month calendar grid implied below",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-placa-de-transito",
    "medium",
    "Placa de Trânsito",
    "road sign format — standardized colors and shapes, pictographic language, warning or direction as image",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-selo-postal",
    "medium",
    "Selo Postal",
    "postage stamp format — perforated border, denomination value, miniature scene of national significance",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-rotulo-de-cachaca",
    "medium",
    "Rótulo de Cachaça",
    "cachaça bottle label format — Brazilian heraldic illustration, artisanal typography, geographical indication seal",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-placa-de-rua-artesanal",
    "medium",
    "Placa de Rua Artesanal",
    "hand-painted Brazilian city street sign format — azulejo tile or painted wood, neighborhood name, folk typography",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-capa-de-disco-maxi-single",
    "medium",
    "Capa de Disco (Maxi-Single)",
    "12-inch vinyl maxi-single cover format — square, design-forward, 1980s club aesthetic, genre information at bottom",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-capa-de-quadrinho",
    "medium",
    "Capa de Quadrinho",
    "comic book cover format — dynamic action framing, story-title typography, issue number and price in corner",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-fotografia-4x6-com-borda",
    "medium",
    "Fotografia 4x6 com Borda",
    "standard 4x6 developed photograph with white border, the physical object of memory",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-banner-de-caminhao-sonoro",
    "medium",
    "Banner de Caminhão Sonoro",
    "political campaign sound truck banner format — face enormous, name in impact typography, color-field background, Brazil election",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-peca-de-lego-instrucao",
    "medium",
    "Peça de LEGO (Instrução)",
    "LEGO instruction manual illustration format — white background, numbered step, isometric assembly diagram, primary colors",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-outdoor-de-rodovia",
    "medium",
    "Outdoor de Rodovia",
    "Brazilian highway billboard format — weathered, large, seen at 120km/h, political or beer or cell plan",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-medium-zine-underground-a5",
    "medium",
    "Zine Underground (A5)",
    "photocopied underground zine page, A5 format, risograph texture, cut-and-paste layout, punk DIY aesthetic",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "memorias-palette-verde-mata-atlantica",
    "palette",
    "Verde Mata Atlântica",
    "dominant palette: Atlantic Forest deep greens — emerald, moss, shadow-black, rain-wet leaf",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-amarelo-e-verde-brasilidade",
    "palette",
    "Amarelo e Verde Brasilidade",
    "dominant palette: Brazil national yellow and green — patriotic, ambiguous, beautiful and contested",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-marrom-seco-sertao",
    "palette",
    "Marrom Seco Sertão",
    "dominant palette: Brazilian sertão dry season — bleached bone white, dust gray, caatinga brown, minimal shadow",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-azul-e-branco-azulejo",
    "palette",
    "Azul e Branco Azulejo",
    "dominant palette: cobalt blue and stark white — Portuguese tile tradition, clean graphic contrast",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-roxo-e-dourado-carnaval",
    "palette",
    "Roxo e Dourado Carnaval",
    "dominant palette: carnival purple and gold — theatrical richness, feathers and sequins implied",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-cinza-industrial",
    "palette",
    "Cinza Industrial",
    "dominant palette: industrial gray scale — concrete, steel, factory, the ABC strikes palette",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-vermelho-sangue",
    "palette",
    "Vermelho Sangue",
    "dominant palette: deep blood red against near-black — political urgency, sacrifice, passion at its most extreme",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-rosa-millennial",
    "palette",
    "Rosa Millennial",
    "dominant palette: millennial pink and rose gold — Instagram-era softness, femininity, 2010s visual culture",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-bege-e-nude-moderno",
    "palette",
    "Bege e Nude Moderno",
    "dominant palette: warm nude and beige minimalism — skin tones, linen, sand, understated luxury",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-turquesa-e-coral",
    "palette",
    "Turquesa e Coral",
    "dominant palette: tropical turquoise and coral — Caribbean sea and tropical fish, Copacabana 1970s postcard",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-escuro-com-pops-neon",
    "palette",
    "Escuro com Pops Neon",
    "dominant palette: near-black with isolated neon accents — dark matter with flashes of electric color breaking through",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-dourado-oxidado",
    "palette",
    "Dourado Oxidado",
    "dominant palette: oxidized gold, verdigris, rust — aged metal, time's effect on wealth, patina as beauty",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-branco-hospitalar",
    "palette",
    "Branco Hospitalar",
    "dominant palette: clinical white and off-white — institutional, sterile, absence as presence",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-madrugada-azul",
    "palette",
    "Madrugada Azul",
    "dominant palette: 4am blue — the specific color of night just before dawn, cold and liminal and quiet",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-terroso-pre-colombiano",
    "palette",
    "Terroso Pré-Colombiano",
    "dominant palette: pre-Columbian earth — oxblood, ochre, raw umber, the Americas before Columbus",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-preto-e-vermelho-expressionista",
    "palette",
    "Preto e Vermelho Expressionista",
    "dominant palette: German Expressionist red and black — psychological violence, maximum graphic tension, Munch and Kirchner",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-ciano-ciberpunk",
    "palette",
    "Ciano Ciberpunk",
    "dominant palette: cyberpunk teal and electric cyan on black — digital rain, data streams, the city as circuit",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-palette-esverdeado-de-camera-de-seguranca",
    "palette",
    "Esverdeado de Câmera de Segurança",
    "dominant palette: security camera green-gray nightvision — surveillance aesthetic, thermal ambiguity, watching without feeling",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "memorias-mood-tedio-sagrado",
    "mood",
    "Tédio Sagrado",
    "emotional register: sacred boredom — the profound hidden inside the deeply, uselessly ordinary moment",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-orgulho-contido",
    "mood",
    "Orgulho Contido",
    "emotional register: restrained pride — dignity hard-won and held quietly, not performed but present",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-curiosidade-feroz",
    "mood",
    "Curiosidade Feroz",
    "emotional register: ferocious curiosity — intelligence hungry, eyes forward, the world as unsolved problem",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-saudade",
    "mood",
    "Saudade",
    "emotional register: pure saudade — the specifically Portuguese-Brazilian longing for something beautiful that is gone or maybe never was",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-terror-cotidiano",
    "mood",
    "Terror Cotidiano",
    "emotional register: everyday terror — the horror present in the mundane, the catastrophe that no one around you notices",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-carnavalesco",
    "mood",
    "Carnavalesco",
    "emotional register: carnivalesque — all hierarchies inverted, excess and play and the body sovereign for one night",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-clinico-dissociado",
    "mood",
    "Clínico / Dissociado",
    "emotional register: clinical dissociation — observed from outside oneself, the body visible but the self elsewhere",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-esperanca-exausta",
    "mood",
    "Esperança Exausta",
    "emotional register: exhausted hope — people who have been waiting for too long but still have not given up",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-gratidao-excessiva",
    "mood",
    "Gratidão Excessiva",
    "emotional register: excessive gratitude — overwhelming thankfulness for something small, grace in the ordinary",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-vergonha-alheia",
    "mood",
    "Vergonha Alheia",
    "emotional register: second-hand embarrassment — the viewer cannot look away and cannot look directly either",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-luxuria-tropical",
    "mood",
    "Luxúria Tropical",
    "emotional register: tropical lust — heat and slowness and the body as constant fact, desire in the air like humidity",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-melancolia-do-domingo",
    "mood",
    "Melancolia do Domingo",
    "emotional register: Sunday afternoon melancholy — the week ending, time passing, something small and irreversible",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-furia-justa",
    "mood",
    "Fúria Justa",
    "emotional register: righteous fury — anger completely deserved, moral clarity giving fire a direction and a target",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-extase-coletivo",
    "mood",
    "Êxtase Coletivo",
    "emotional register: collective ecstasy — one feeling shared by thousands of bodies simultaneously, the self dissolved in the crowd",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-resignacao-elegante",
    "mood",
    "Resignação Elegante",
    "emotional register: elegant resignation — acceptance of the unavoidable arrived at through long thought and not defeat",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-mood-ternura-improvavel",
    "mood",
    "Ternura Improvável",
    "emotional register: unlikely tenderness — softness discovered in the hardest context, the gentle detail in the brutal scene",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "memorias-composition-macro-extremo-textura",
    "composition",
    "Macro Extremo (Textura)",
    "extreme macro photography — surface texture fills the entire frame, material identity revealed at cellular scale",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-periscopio-agua",
    "composition",
    "Periscópio (Água)",
    "split-frame periscope shot — half above water, half below, two worlds divided by the surface tension line",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-retrovisor-de-carro",
    "composition",
    "Retrovisor de Carro",
    "view through a car rear-view mirror — the subject reflected small in the glass, the road ahead out of frame",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-camera-de-seguranca-cftv",
    "composition",
    "Câmera de Segurança (CFTV)",
    "CCTV security camera aesthetic — wide angle, timestamp burned into corner, surveillance green-gray color",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-camera-escondida-found-footage",
    "composition",
    "Câmera Escondida (Found Footage)",
    "found footage aesthetic — shaky, amateur, the camera barely keeping up with events, format suggests truth",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-camera-no-capacete",
    "composition",
    "Câmera no Capacete",
    "helmet-cam or body-cam POV — action sport or police footage, wide fisheye, physical urgency",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-teleobjetiva-comprimida",
    "composition",
    "Teleobjetiva Comprimida",
    "extreme telephoto lens compression — foreground and background smashed together, figures flattened into graphic layers",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-camera-por-debaixo-da-mesa",
    "composition",
    "Câmera por Debaixo da Mesa",
    "low angle shot from beneath a table — legs, shoes, and the undersides of surfaces, the overlooked world below",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-camera-no-teto-plafon",
    "composition",
    "Câmera no Teto (Plafôn)",
    "camera mounted on the ceiling looking straight down — figures seen only as tops of heads and shoulders, the God angle",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-camera-lenta-phantom",
    "composition",
    "Câmera Lenta (Phantom)",
    "ultra slow-motion Phantom camera — motion invisible to the naked eye revealed, droplets and fabric and fire",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-camera-rapida-time-lapse",
    "composition",
    "Câmera Rápida (Time-lapse)",
    "time-lapse photography — clouds race, crowds swirl, seasons pass, a single frame represents compressed time",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-perimetral-camera-de-futebol",
    "composition",
    "Perimetral (Câmera de Futebol)",
    "perimeter-camera football broadcast aesthetic — wide and slightly low, the pitch as theater, warm stadium light",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-camera-de-seguranca-de-banco",
    "composition",
    "Câmera de Segurança de Banco",
    "bank robbery surveillance camera aesthetic — extremely wide, ceiling corner, the entire room visible and impersonal",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-porta-entreaberta",
    "composition",
    "Porta Entreaberta",
    "shot through a barely open door — partial view, implied eavesdropping, the frame as threshold, intimacy observed from outside",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-camera-de-vestibulo",
    "composition",
    "Câmera de Vestíbulo",
    "hotel lobby or elevator security camera angle — overhead, slightly off-center, people waiting and unaware",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "memorias-composition-zoom-nervoso-newsreel",
    "composition",
    "Zoom Nervoso (Newsreel)",
    "handheld newsreel zoom — uncertain framing, something happening fast, journalism under pressure",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "midias-anchor-darth-vader",
    "anchor",
    "Darth Vader",
    "Darth Vader, black armor, red lightsaber ignited, the Death Star corridor behind him",
    "Cinema",
    "70s",
    1
  ],
  [
    "midias-anchor-alien-xenomorph",
    "anchor",
    "Alien (Xenomorph)",
    "H.R. Giger's Xenomorph creature from Alien, biomechanical horror, dripping corridor, Ridley Scott 1979",
    "Cinema",
    "70s",
    1
  ],
  [
    "midias-anchor-hal-9000",
    "anchor",
    "HAL 9000",
    "HAL 9000's red camera eye, Discovery One spacecraft, cold intelligence behind a glass lens",
    "Cinema",
    "70s",
    1
  ],
  [
    "midias-anchor-luke-skywalker",
    "anchor",
    "Luke Skywalker",
    "Luke Skywalker, blue lightsaber, binary Tatooine sunset, the hero's journey beginning",
    "Cinema",
    "70s",
    1
  ],
  [
    "midias-anchor-t-800-terminator",
    "anchor",
    "T-800 Terminator",
    "The Terminator T-800, chrome endoskeleton, red eye, Los Angeles ruins, unstoppable machine",
    "Cinema",
    "80s",
    1
  ],
  [
    "midias-anchor-john-mcclane",
    "anchor",
    "John McClane",
    "John McClane, barefoot on broken glass, Nakatomi Plaza, covered in sweat and grime, unwilling hero",
    "Cinema",
    "80s",
    1
  ],
  [
    "midias-anchor-patrick-bateman",
    "anchor",
    "Patrick Bateman",
    "Patrick Bateman, American Psycho, business card in hand, immaculate suit, something wrong behind the eyes",
    "Cinema",
    "2000s",
    1
  ],
  [
    "midias-anchor-anton-chigurh",
    "anchor",
    "Anton Chigurh",
    "Anton Chigurh, captive bolt pistol, dead eyes, No Country for Old Men, absolute evil wearing a bowl cut",
    "Cinema",
    "2000s",
    1
  ],
  [
    "midias-anchor-the-dude",
    "anchor",
    "The Dude",
    "The Dude from The Big Lebowski, bathrobe, White Russian in hand, bowling alley light, cosmic ease",
    "Cinema",
    "90s",
    1
  ],
  [
    "midias-anchor-hannibal-lecter",
    "anchor",
    "Hannibal Lecter",
    "Hannibal Lecter in his cell, mask on, Silence of the Lambs, intelligence as predation",
    "Cinema",
    "90s",
    1
  ],
  [
    "midias-anchor-clarice-starling",
    "anchor",
    "Clarice Starling",
    "Clarice Starling, FBI trainee, corridor of cells, the lambs screaming behind her eyes",
    "Cinema",
    "90s",
    1
  ],
  [
    "midias-anchor-vincent-vega",
    "anchor",
    "Vincent Vega",
    "Vincent Vega, Pulp Fiction, black suit, tired and dangerous, diner booth, Uma Thurman across from him",
    "Cinema",
    "90s",
    1
  ],
  [
    "midias-anchor-maximus-decimus",
    "anchor",
    "Maximus Decimus",
    "Maximus Decimus Meridius, Gladiator, sand and blood, Colosseum crowd, are you not entertained",
    "Cinema",
    "2000s",
    1
  ],
  [
    "midias-anchor-v-v-for-vendetta",
    "anchor",
    "V (V for Vendetta)",
    "V in Guy Fawkes mask and black cape, Parliament in flames, symbols and resistance",
    "Cinema",
    "2000s",
    1
  ],
  [
    "midias-anchor-amelie-poulain",
    "anchor",
    "Amélie Poulain",
    "Amélie Poulain, Montmartre rooftop, wide eyes, Paris in autumn colors, Jeunet's magical realism",
    "Cinema",
    "2000s",
    1
  ],
  [
    "midias-anchor-don-vito-corleone",
    "anchor",
    "Don Vito Corleone",
    "Don Vito Corleone, The Godfather, dark office, cat in lap, an offer you cannot refuse",
    "Cinema",
    "70s",
    1
  ],
  [
    "midias-anchor-alex-delarge",
    "anchor",
    "Alex DeLarge",
    "Alex DeLarge from A Clockwork Orange, bowler hat, white suit, single artificial eyelash, Kubrick ultra-violence",
    "Cinema",
    "70s",
    1
  ],
  [
    "midias-anchor-imperador-palpatine",
    "anchor",
    "Imperador Palpatine",
    "Emperor Palpatine, hooded, lightning from his fingers, the dark side throne room, Star Wars",
    "Cinema",
    "80s",
    1
  ],
  [
    "midias-anchor-roy-batty",
    "anchor",
    "Roy Batty",
    "Roy Batty, Blade Runner rooftop rain, tears in the rain speech, replicant at the end of his life",
    "Cinema",
    "80s",
    1
  ],
  [
    "midias-anchor-john-wick",
    "anchor",
    "John Wick",
    "John Wick, black suit, gun in each hand, tactical violence, they killed his dog",
    "Cinema",
    "2010s",
    1
  ],
  [
    "midias-anchor-katniss-everdeen",
    "anchor",
    "Katniss Everdeen",
    "Katniss Everdeen, Mockingjay, bow drawn, burning districts behind her, the revolution has a symbol",
    "Cinema",
    "2010s",
    1
  ],
  [
    "midias-anchor-mad-max-fury-road",
    "anchor",
    "Mad Max (Fury Road)",
    "Mad Max on the Interceptor, Fury Road desert, fire and war rigs, post-apocalyptic fury",
    "Cinema",
    "2010s",
    1
  ],
  [
    "midias-anchor-coringa-joker-2019",
    "anchor",
    "Coringa (Joker 2019)",
    "Arthur Fleck as the Joker, Phoenix performance, staircase dance, Gotham burning, clown makeup running",
    "Cinema",
    "2010s",
    1
  ],
  [
    "midias-anchor-thanos",
    "anchor",
    "Thanos",
    "Thanos, Infinity Gauntlet, six stones glowing, the universe rebalanced by one snap",
    "Cinema",
    "2010s",
    1
  ],
  [
    "midias-anchor-tony-soprano",
    "anchor",
    "Tony Soprano",
    "Tony Soprano, bathrobe, ducks in the pool, suburban New Jersey, the weight of two lives",
    "TV",
    "2000s",
    1
  ],
  [
    "midias-anchor-walter-white-heisenberg",
    "anchor",
    "Walter White (Heisenberg)",
    "Walter White as Heisenberg, porkpie hat, dark glasses, I am the one who knocks",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-anchor-jesse-pinkman",
    "anchor",
    "Jesse Pinkman",
    "Jesse Pinkman, yo, worn hoodie, meth lab blue glow, youth and moral catastrophe",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-anchor-omar-little",
    "anchor",
    "Omar Little",
    "Omar Little, The Wire, shotgun, long coat, whistling as he walks, Baltimore streets fear him",
    "TV",
    "2000s",
    1
  ],
  [
    "midias-anchor-cersei-lannister",
    "anchor",
    "Cersei Lannister",
    "Cersei Lannister, Iron Throne, blonde and armored, political intelligence behind green eyes",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-anchor-jon-snow",
    "anchor",
    "Jon Snow",
    "Jon Snow, Night's Watch black, sword in hand, north of the Wall, winter is here",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-anchor-eleven-stranger-things",
    "anchor",
    "Eleven (Stranger Things)",
    "Eleven from Stranger Things, shaved head, bloody nose, telekinetic power, Hawkins Indiana 1983",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-anchor-the-mandalorian",
    "anchor",
    "The Mandalorian",
    "The Mandalorian, beskar armor, Baby Yoda on his arm, outer rim planet, this is the way",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-anchor-jack-bauer",
    "anchor",
    "Jack Bauer",
    "Jack Bauer, 24 hours, gun raised, Los Angeles burning, the cost of safety is everything",
    "TV",
    "2000s",
    1
  ],
  [
    "midias-anchor-gregory-house",
    "anchor",
    "Gregory House",
    "Dr. Gregory House, cane, Vicodin bottle, differential diagnosis, brilliant and self-destructive",
    "TV",
    "2000s",
    1
  ],
  [
    "midias-anchor-dexter-morgan",
    "anchor",
    "Dexter Morgan",
    "Dexter Morgan, lab coat, blood slide, Miami, serial killer with a code of honor",
    "TV",
    "2000s",
    1
  ],
  [
    "midias-anchor-michael-scott",
    "anchor",
    "Michael Scott",
    "Michael Scott, The Office, Dunder Mifflin, cringe and desperate need for love, paper kingdom",
    "TV",
    "2000s",
    1
  ],
  [
    "midias-anchor-carrie-bradshaw",
    "anchor",
    "Carrie Bradshaw",
    "Carrie Bradshaw, Sex and the City, New York sidewalk, Manolo Blahnik shoes, laptop open",
    "TV",
    "2000s",
    1
  ],
  [
    "midias-anchor-mulder-e-scully",
    "anchor",
    "Mulder e Scully",
    "Mulder and Scully together, X-Files, flashlights in the dark, I want to believe",
    "TV",
    "90s",
    1
  ],
  [
    "midias-anchor-buffy-summers",
    "anchor",
    "Buffy Summers",
    "Buffy Summers, vampire slayer, stake in hand, Sunnydale cemetery, teenage savior of the world",
    "TV",
    "90s",
    1
  ],
  [
    "midias-anchor-homer-simpson",
    "anchor",
    "Homer Simpson",
    "Homer Simpson, Springfield, donut in hand, glazed eyes, the American dream devoured",
    "TV",
    "90s",
    1
  ],
  [
    "midias-anchor-bart-simpson",
    "anchor",
    "Bart Simpson",
    "Bart Simpson on his skateboard, Springfield, don't have a cow man, underachiever on purpose",
    "TV",
    "90s",
    1
  ],
  [
    "midias-anchor-eric-cartman",
    "anchor",
    "Eric Cartman",
    "Eric Cartman, South Park, Colorado mountains, pure unapologetic villainy in a child's body",
    "TV",
    "90s",
    1
  ],
  [
    "midias-anchor-negan",
    "anchor",
    "Negan",
    "Negan, The Walking Dead, Lucille barbed wire bat on shoulder, charismatic tyranny",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-anchor-villanelle",
    "anchor",
    "Villanelle",
    "Villanelle from Killing Eve, assassin in couture fashion, killing as performance art",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-anchor-mario-super-mario",
    "anchor",
    "Mario (Super Mario)",
    "Mario from Super Mario, red cap and overalls, coin floating above, Nintendo platform world",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-anchor-sonic-the-hedgehog",
    "anchor",
    "Sonic the Hedgehog",
    "Sonic the Hedgehog, original Sega design, speed blur, attitude, Green Hill Zone",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-anchor-link-zelda",
    "anchor",
    "Link (Zelda)",
    "Link from The Legend of Zelda: Ocarina of Time, green tunic, Master Sword raised, Hyrule behind him",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-anchor-samus-aran",
    "anchor",
    "Samus Aran",
    "Samus Aran from Metroid, power suit, arm cannon charged, alien planet, bounty hunter alone",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-anchor-cloud-strife",
    "anchor",
    "Cloud Strife",
    "Cloud Strife from Final Fantasy VII, enormous Buster Sword, Midgar city, blue SOLDIER eyes",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-anchor-solid-snake",
    "anchor",
    "Solid Snake",
    "Solid Snake from Metal Gear Solid, bandana, sneaking suit, cardboard box nearby, codec ready",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-anchor-master-chief",
    "anchor",
    "Master Chief",
    "Master Chief from Halo, Mjolnir armor, UNSC ship, universe-saving solitude",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-anchor-kratos",
    "anchor",
    "Kratos",
    "Kratos from God of War, Ghost of Sparta, Blades of Chaos, the gods fear him and rightly so",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-anchor-geralt-de-rivia",
    "anchor",
    "Geralt de Rívia",
    "Geralt of Rivia from The Witcher, silver hair, two swords crossed, monster hunter, morally grey",
    "Videogames",
    "2010s",
    1
  ],
  [
    "midias-anchor-joel-e-ellie",
    "anchor",
    "Joel e Ellie",
    "Joel and Ellie from The Last of Us, post-apocalyptic America, survivors and something like family",
    "Videogames",
    "2010s",
    1
  ],
  [
    "midias-anchor-doom-slayer",
    "anchor",
    "Doom Slayer",
    "Doom Slayer, green armor, shotgun, Mars surface, demons approaching, rip and tear",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-anchor-glados",
    "anchor",
    "GLaDOS",
    "GLaDOS from Portal, ceiling-mounted chassis, poisonous cake promise, Aperture Science laboratory",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-anchor-arthur-morgan",
    "anchor",
    "Arthur Morgan",
    "Arthur Morgan from Red Dead Redemption 2, cowboy hat, journal in hand, the American frontier dying around him",
    "Videogames",
    "2010s",
    1
  ],
  [
    "midias-anchor-commander-shepard",
    "anchor",
    "Commander Shepard",
    "Commander Shepard from Mass Effect, N7 armor, Normandy bridge, the Reapers are coming",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-anchor-pikachu",
    "anchor",
    "Pikachu",
    "Pikachu, original 1996 design, chubby and bright, electric sparks, genuine companion energy",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-anchor-lara-croft-1996",
    "anchor",
    "Lara Croft (1996)",
    "original Lara Croft, 1996 Tomb Raider low-poly look translated to photorealism, dual pistols, braid",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-anchor-max-payne",
    "anchor",
    "Max Payne",
    "Max Payne, noir detective, bullet time, New York rain, pain and painkiller pills",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-anchor-kratos-norse-era",
    "anchor",
    "Kratos (Norse Era)",
    "Kratos in his Norse God of War era, Leviathan Axe, Atreus by his side, Be better, boy",
    "Videogames",
    "2010s",
    1
  ],
  [
    "midias-anchor-isaac-clarke",
    "anchor",
    "Isaac Clarke",
    "Isaac Clarke from Dead Space, RIG suit, Plasma Cutter, USG Ishimura, necromorph nightmare",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-anchor-ezio-auditore",
    "anchor",
    "Ezio Auditore",
    "Ezio Auditore da Firenze, Assassin's Creed, Renaissance Italy rooftop, hidden blade, eagle vision",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-anchor-aloy",
    "anchor",
    "Aloy",
    "Aloy from Horizon Zero Dawn, red hair, bow, post-apocalyptic Earth with roaming machine dinosaurs",
    "Videogames",
    "2010s",
    1
  ],
  [
    "midias-anchor-cj-gta-san-andreas",
    "anchor",
    "CJ (GTA San Andreas)",
    "CJ from GTA San Andreas, Grove Street, Los Santos, the whole state to explore",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-anchor-tommy-vercetti",
    "anchor",
    "Tommy Vercetti",
    "Tommy Vercetti from GTA Vice City, Hawaiian shirt, 1986 Miami, cocaine and ambition",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-anchor-batman-frank-miller",
    "anchor",
    "Batman (Frank Miller)",
    "Batman in Frank Miller's Dark Knight Returns style, thick ink, brutal aging hero, Gotham's last guardian",
    "HQ",
    "80s",
    1
  ],
  [
    "midias-anchor-coringa-brian-bolland",
    "anchor",
    "Coringa (Brian Bolland)",
    "The Joker from The Killing Joke by Alan Moore and Brian Bolland, one bad day, carnival horror",
    "HQ",
    "80s",
    1
  ],
  [
    "midias-anchor-wolverine",
    "anchor",
    "Wolverine",
    "Wolverine, adamantium claws extended, torn yellow costume, berserker rage, X-Men",
    "HQ",
    "80s",
    1
  ],
  [
    "midias-anchor-rorschach",
    "anchor",
    "Rorschach",
    "Rorschach from Watchmen, inkblot mask shifting, trench coat, alley, the world is a sewer and I am not afraid",
    "HQ",
    "80s",
    1
  ],
  [
    "midias-anchor-v-v-for-vendetta-hq",
    "anchor",
    "V (V for Vendetta HQ)",
    "V from V for Vendetta graphic novel, Guy Fawkes mask, rose in hand, the Shadow Gallery, Alan Moore",
    "HQ",
    "80s",
    1
  ],
  [
    "midias-anchor-spider-man",
    "anchor",
    "Spider-Man",
    "Spider-Man, Steve Ditko original design, New York rooftop, web swinging, the amazing friendly neighborhood hero",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-anchor-spawn",
    "anchor",
    "Spawn",
    "Spawn from Todd McFarlane, cape billowing like a living shadow, hell and heaven at war in an alley",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-anchor-hellboy",
    "anchor",
    "Hellboy",
    "Hellboy, stone right hand, gun, cigar, supernatural investigator, Mike Mignola shadows",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-anchor-punisher",
    "anchor",
    "Punisher",
    "Frank Castle as the Punisher, skull chest insignia, weapons cache, war against crime without mercy",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-anchor-deadpool",
    "anchor",
    "Deadpool",
    "Deadpool, red and black costume, katanas, fourth wall breaking grin, mercenary chaos",
    "HQ",
    "2000s",
    1
  ],
  [
    "midias-anchor-dr-manhattan",
    "anchor",
    "Dr. Manhattan",
    "Doctor Manhattan, blue luminescence, Mars surface, the watch and the hydrogen atom, Watchmen",
    "HQ",
    "80s",
    1
  ],
  [
    "midias-anchor-captain-america",
    "anchor",
    "Captain America",
    "Captain America, star-spangled shield, World War II Europe, the ideal of America in its purest form",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-anchor-iron-man-extremis",
    "anchor",
    "Iron Man (Extremis)",
    "Iron Man in the Extremis armor era, Warren Ellis, biological integration, sleek and alien",
    "HQ",
    "2000s",
    1
  ],
  [
    "midias-anchor-black-panther",
    "anchor",
    "Black Panther",
    "Black Panther, vibranium suit, Wakanda forever, African technological supremacy, Ta-Nehisi Coates era",
    "HQ",
    "2010s",
    1
  ],
  [
    "midias-anchor-sandman-morpheus",
    "anchor",
    "Sandman (Morpheus)",
    "Morpheus the Sandman by Neil Gaiman, lord of dreams, star-filled eyes, endless black, the dreaming realm",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-anchor-lobo",
    "anchor",
    "Lobo",
    "Lobo, DC Comics intergalactic bounty hunter, motorcycle, massive chain, last Czarnian, gratuitous ultraviolence",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-anchor-persepolis-marji",
    "anchor",
    "Persépolis (Marji)",
    "Marjane Satrapi as a child in Persepolis, Tehran, black and white graphic novel, revolution from below",
    "HQ",
    "2000s",
    1
  ],
  [
    "midias-anchor-watchmen-grupo",
    "anchor",
    "Watchmen (grupo)",
    "the full Watchmen group, Rorschach, Nite Owl, Silk Spectre, Manhattan, Ozymandias, who watches the watchmen",
    "HQ",
    "80s",
    1
  ],
  [
    "midias-anchor-thanos-jim-starlin",
    "anchor",
    "Thanos (Jim Starlin)",
    "Thanos in the original Jim Starlin conception, Infinity Gauntlet, cosmic fatalism, love for death herself",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-anchor-nick-fury-ultimates",
    "anchor",
    "Nick Fury (Ultimates)",
    "Nick Fury in the Ultimates Marvel Comics, Samuel L. Jackson likeness, eyepatch, SHIELD helicarrier",
    "HQ",
    "2000s",
    1
  ],
  [
    "midias-anchor-barbarella",
    "anchor",
    "Barbarella",
    "Barbarella, Jean-Claude Forest space heroine, 1960s sci-fi eroticism, fur and weaponry among the stars",
    "HQ",
    "70s",
    1
  ],
  [
    "midias-anchor-astro-boy",
    "anchor",
    "Astro Boy",
    "Astro Boy by Osamu Tezuka, manga god of comics, jet-powered boy robot, innocent and powerful",
    "HQ",
    "70s",
    1
  ],
  [
    "midias-anchor-tintin",
    "anchor",
    "Tintin",
    "Tintin by Hergé, ligne claire, globe-trotting adventure, white dog Snowy, the Belgian boy eternal",
    "HQ",
    "70s",
    1
  ],
  [
    "midias-scenario-gotham-city-noturna",
    "scenario",
    "Gotham City (noturna)",
    "set in Gotham City at night, rain-slicked streets, gargoyles on Gothic skyscrapers, sirens distant",
    "Cinema / HQ",
    "",
    1
  ],
  [
    "midias-scenario-nakatomi-plaza-die-hard",
    "scenario",
    "Nakatomi Plaza (Die Hard)",
    "set in Nakatomi Plaza, Los Angeles, Christmas 1988, corporate tower turned warzone",
    "Cinema",
    "80s",
    1
  ],
  [
    "midias-scenario-nostromo-alien",
    "scenario",
    "Nostromo (Alien)",
    "set inside the Nostromo spaceship from Alien, Ridley Scott aesthetic, dripping corridors, motion tracker beeping",
    "Cinema",
    "70s",
    1
  ],
  [
    "midias-scenario-mos-eisley-cantina",
    "scenario",
    "Mos Eisley Cantina",
    "set in the Mos Eisley Cantina, Star Wars, aliens and bounty hunters, Tatooine twin sunset outside",
    "Cinema",
    "70s",
    1
  ],
  [
    "midias-scenario-death-star",
    "scenario",
    "Death Star",
    "set inside the Death Star, Star Wars, gleaming Imperial corridors, the ultimate weapon operational",
    "Cinema",
    "70s",
    1
  ],
  [
    "midias-scenario-the-shining-hotel",
    "scenario",
    "The Shining Hotel",
    "set in the Overlook Hotel, The Shining, Kubrick symmetry, Room 237, the hedge maze under snow",
    "Cinema",
    "80s",
    1
  ],
  [
    "midias-scenario-blade-runner-2019",
    "scenario",
    "Blade Runner 2019",
    "set in Blade Runner 2019 Los Angeles, acid rain, neon kanji holograms, Bradbury Building, spinners overhead",
    "Cinema",
    "80s",
    1
  ],
  [
    "midias-scenario-delorean-hill-valley",
    "scenario",
    "DeLorean + Hill Valley",
    "set at Hill Valley courthouse square with the DeLorean, Back to the Future, lightning rod atop the clock tower",
    "Cinema",
    "80s",
    1
  ],
  [
    "midias-scenario-jurassic-park-cozinha",
    "scenario",
    "Jurassic Park (Cozinha)",
    "set in the Jurassic Park kitchen, the raptors visible under the door, children hiding in the shadows",
    "Cinema",
    "90s",
    1
  ],
  [
    "midias-scenario-apartamento-de-pulp-fiction",
    "scenario",
    "Apartamento de Pulp Fiction",
    "set in the apartment from Pulp Fiction, briefcase open, divine light, Jules and Vincent in frame",
    "Cinema",
    "90s",
    1
  ],
  [
    "midias-scenario-matrix-construto-branco",
    "scenario",
    "Matrix — Construto Branco",
    "set in the white loading program construct from The Matrix, infinite white void, guns appearing from nowhere",
    "Cinema",
    "90s",
    1
  ],
  [
    "midias-scenario-rivendell-terra-media",
    "scenario",
    "Rivendell / Terra Média",
    "set in Rivendell, Middle-Earth, LOTR Peter Jackson aesthetic, elven architecture, waterfall mist, eternal afternoon",
    "Cinema",
    "2000s",
    1
  ],
  [
    "midias-scenario-hogwarts-grande-salao",
    "scenario",
    "Hogwarts (Grande Salão)",
    "set in the Hogwarts Great Hall, Harry Potter, floating candles, house banners, feast in full magic",
    "Cinema",
    "2000s",
    1
  ],
  [
    "midias-scenario-coruscant-star-wars",
    "scenario",
    "Coruscant (Star Wars)",
    "set on Coruscant, the city-planet of Star Wars, towers to the horizon, air traffic, the Jedi Temple visible",
    "Cinema",
    "2000s",
    1
  ],
  [
    "midias-scenario-fury-road-desert",
    "scenario",
    "Fury Road Desert",
    "set in the Mad Max Fury Road desert, war rigs on cracked earth, Immortan Joe's Citadel on a mesa",
    "Cinema",
    "2010s",
    1
  ],
  [
    "midias-scenario-wakanda",
    "scenario",
    "Wakanda",
    "set in Wakanda, Black Panther, vibranium city where ancient African aesthetics and advanced technology merge",
    "Cinema",
    "2010s",
    1
  ],
  [
    "midias-scenario-bada-bing-sopranos",
    "scenario",
    "Bada Bing (Sopranos)",
    "set at the Bada Bing strip club, Sopranos, back office, Tony's throne, criminal middle management",
    "TV",
    "2000s",
    1
  ],
  [
    "midias-scenario-los-pollos-hermanos",
    "scenario",
    "Los Pollos Hermanos",
    "set at Los Pollos Hermanos restaurant, Breaking Bad, Gus Fring's double life visible only to us",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-scenario-central-perk-friends",
    "scenario",
    "Central Perk (Friends)",
    "set at Central Perk coffee shop, Friends, the orange sofa, New York City light from the window",
    "TV",
    "90s",
    1
  ],
  [
    "midias-scenario-dunder-mifflin-the-office",
    "scenario",
    "Dunder Mifflin (The Office)",
    "set at Dunder Mifflin Scranton, The Office, fluorescent light, partition dividers, Michael Scott's glass office",
    "TV",
    "2000s",
    1
  ],
  [
    "midias-scenario-uss-enterprise",
    "scenario",
    "USS Enterprise",
    "set on the bridge of the USS Enterprise, Star Trek, viewscreen showing stars, command chair at center",
    "TV",
    "70s",
    1
  ],
  [
    "midias-scenario-winterfell",
    "scenario",
    "Winterfell",
    "set in Winterfell, Game of Thrones, stone walls and grey sky, winter has come, Stark banners",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-scenario-hawkins-stranger-things",
    "scenario",
    "Hawkins (Stranger Things)",
    "set in Hawkins Indiana, Stranger Things, 1983, suburban normalcy against supernatural terror, bikes on the road",
    "TV",
    "2010s",
    1
  ],
  [
    "midias-scenario-rapture-bioshock",
    "scenario",
    "Rapture (Bioshock)",
    "set in Rapture from Bioshock, art deco underwater city in decay, plasmid vending machines, 1960 catastrophe",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-scenario-mushroom-kingdom",
    "scenario",
    "Mushroom Kingdom",
    "set in the Mushroom Kingdom, Super Mario, floating question blocks, Bowser's castle on the horizon",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-scenario-hyrule-ocarina-of-time",
    "scenario",
    "Hyrule (Ocarina of Time)",
    "set in Hyrule, Zelda Ocarina of Time, Temple of Time spire, Lon Lon Ranch in the distance, Ganon's shadow",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-scenario-midgar-ff-vii",
    "scenario",
    "Midgar (FF VII)",
    "set in Midgar from Final Fantasy VII, reactor towers, slums below the plate, mako energy and poverty",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-scenario-shadow-moses-metal-gear",
    "scenario",
    "Shadow Moses (Metal Gear)",
    "set at Shadow Moses from Metal Gear Solid, Alaskan nuclear storage, blizzard, codec call in silence",
    "Videogames",
    "90s",
    1
  ],
  [
    "midias-scenario-city-17-half-life-2",
    "scenario",
    "City 17 (Half-Life 2)",
    "set in City 17 from Half-Life 2, Combine occupation, Eastern European architecture under alien control",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-scenario-aperture-science-portal",
    "scenario",
    "Aperture Science (Portal)",
    "set in the Aperture Science Enrichment Center from Portal, test chambers, GLaDOS ceiling mount, cake is a lie",
    "Videogames",
    "2000s",
    1
  ],
  [
    "midias-scenario-novigrad-the-witcher",
    "scenario",
    "Novigrad (The Witcher)",
    "set in Novigrad from The Witcher 3, medieval city, harbor, witch hunters and merchants, Geralt passing through",
    "Videogames",
    "2010s",
    1
  ],
  [
    "midias-scenario-gotham-dc-hq",
    "scenario",
    "Gotham (DC HQ)",
    "set in the Gotham City of DC Comics, Frank Miller Dark Knight aesthetic, rooftops, gargoyles, bat signal cutting fog",
    "HQ",
    "80s",
    1
  ],
  [
    "midias-scenario-daily-planet-dc",
    "scenario",
    "Daily Planet (DC)",
    "set in the Daily Planet newsroom, Superman's Metropolis, Clark Kent at his desk, Lois Lane filing the story",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-scenario-xavier-s-school",
    "scenario",
    "Xavier's School",
    "set in Xavier's School for Gifted Youngsters, X-Men, Westchester mansion, Cerebro chamber, mutant youth",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-scenario-the-dreaming-sandman",
    "scenario",
    "The Dreaming (Sandman)",
    "set in the Dreaming realm from Neil Gaiman's Sandman, Morpheus's castle, impossible geography, memories made place",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-scenario-wakanda-hq-classica",
    "scenario",
    "Wakanda (HQ Clássica)",
    "set in Wakanda as depicted in classic Black Panther comics, Golden City, vibranium technology and African grandeur",
    "HQ",
    "90s",
    1
  ],
  [
    "midias-style-hq-marvel-anos-70",
    "style",
    "HQ Marvel Anos 70",
    "1970s Marvel Comics sequential art, Jack Kirby dots, dynamic panel composition, bold Ben-Day print colors, hyperbolic action",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-hq-noir-sin-city",
    "style",
    "HQ Noir (Sin City)",
    "Sin City Frank Miller graphic novel style, pure black and white, single color accent (red or yellow), brutalist negative space",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-ligne-claire-herge",
    "style",
    "Ligne Claire (Hergé)",
    "Ligne claire clear-line illustration style, Hergé Tintin aesthetic, clean even outlines, flat color fills, no hatching",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-manga-anos-80",
    "style",
    "Manga Anos 80",
    "1980s Japanese manga aesthetic, screen-tone textures, large expressive eyes, speed lines, Akira-era Otomo influence",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-anime-cel-pintado",
    "style",
    "Anime Cel Pintado",
    "hand-painted anime cel animation, 1990s Japanese animation production art, cel shading visible, painted studio background",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-akira-katsuhiro-otomo",
    "style",
    "Akira (Katsuhiro Otomo)",
    "Katsuhiro Otomo Akira-style illustration, hyper-detailed dystopian cityscape, bike chase composition, neo-Tokyo 2019",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-pixel-art-rpg-16-bit",
    "style",
    "Pixel Art RPG 16-bit",
    "16-bit RPG pixel art, Super Nintendo era, character sprite with animated idle pose, overworld map tile perspective",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-concept-art-de-game-aaa",
    "style",
    "Concept Art de Game AAA",
    "AAA video game concept art, digital painting, environmental storytelling, production design document quality",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-screenshot-in-engine",
    "style",
    "Screenshot In-Engine",
    "in-engine video game screenshot aesthetic, Unreal Engine 5 real-time rendering, HUD elements ghosted at frame edge",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-arte-de-caixa-de-jogo-80s",
    "style",
    "Arte de Caixa de Jogo (80s)",
    "1980s video game box art, extreme dramatic painted illustration, characters much larger than the game could render, airbrushed heroism",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-capa-de-hq-jim-lee",
    "style",
    "Capa de HQ (Jim Lee)",
    "Jim Lee superhero cover art style, dynamic anatomy, dense cross-hatching, spectacularly choreographed power poses",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-capa-de-hq-moebius",
    "style",
    "Capa de HQ (Moebius)",
    "Moebius graphic novel cover, precise clean lines, alien landscapes, philosophical imagery, Les Humanoïdes Associés",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-estetica-ghibli-fundo",
    "style",
    "Estética Ghibli (Fundo)",
    "Studio Ghibli hand-painted background art, detailed naturalistic environment, every leaf, Kazuo Oga landscape tradition",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-arte-de-card-magic-tg",
    "style",
    "Arte de Card (Magic: TG)",
    "Magic: The Gathering card illustration style, painted fantasy art, dark border, card name and mana cost implied",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-loading-screen-de-ps1",
    "style",
    "Loading Screen de PS1",
    "PlayStation 1 era loading screen aesthetic, grey polygon shapes on black, blocky 3D figures, CD load progress implied",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "midias-style-jack-kirby",
    "style",
    "Jack Kirby",
    "in the dynamic style of Jack Kirby — Kirby Krackle energy dots, monumental figures, cosmic Marvel mythology",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-steve-ditko",
    "style",
    "Steve Ditko",
    "in the style of Steve Ditko — angular Spider-Man web-slinging, Doctor Strange psychedelia, precise moral panic energy",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-jim-lee",
    "style",
    "Jim Lee",
    "in the style of Jim Lee — 1990s X-Men era superhero anatomy, extreme cross-hatching, peak action composition",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-neal-adams",
    "style",
    "Neal Adams",
    "in the style of Neal Adams — realistic superhero anatomy, 1970s DC Comics, socially conscious storytelling, dramatic lighting",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-dave-mckean",
    "style",
    "Dave McKean",
    "in the mixed-media collage style of Dave McKean — Sandman covers, photography and painting and found imagery, dark symbolic",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-katsuhiro-otomo",
    "style",
    "Katsuhiro Otomo",
    "in the style of Katsuhiro Otomo's Akira — hyper-detailed mecha, neo-Tokyo crowds, kinetic action, prescient dystopia",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-hayao-miyazaki",
    "style",
    "Hayao Miyazaki",
    "in the world-building vision of Hayao Miyazaki — wind, flight, nature as spirit, the child as moral compass, Studio Ghibli",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-hideo-kojima",
    "style",
    "Hideo Kojima",
    "art direction by Hideo Kojima — cinematic hyper-realism, lengthy cutscene aesthetic, narrative excess as style",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-ridley-scott",
    "style",
    "Ridley Scott",
    "cinematography by Ridley Scott — atmospheric chiaroscuro, production design as storytelling, alien grandeur",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-david-fincher",
    "style",
    "David Fincher",
    "directed by David Fincher — desaturated cool palette, extreme compositional precision, dread in the ordinary",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-john-carpenter",
    "style",
    "John Carpenter",
    "in the John Carpenter tradition — widescreen Panavision, small town isolation, practical effects, synthesizer dread",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-guillermo-del-toro",
    "style",
    "Guillermo del Toro",
    "in Guillermo del Toro's aesthetic — baroque creature design, political fairy tale, candlelight and old gold and horror",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-tim-burton",
    "style",
    "Tim Burton",
    "in Tim Burton's visual world — striped black and white, curved architecture, the outsider as protagonist, Danny Elfman implied",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-christopher-nolan",
    "style",
    "Christopher Nolan",
    "directed by Christopher Nolan — IMAX scale, practical photography, temporal complexity, Hans Zimmer crescendo implied",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-masashi-kishimoto",
    "style",
    "Masashi Kishimoto",
    "in the manga style of Masashi Kishimoto's Naruto — ninja action, dramatic eye techniques, friendship as power source",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-style-frank-miller",
    "style",
    "Frank Miller",
    "in the graphic novel style of Frank Miller — extreme shadow, crime noir, hyper-masculine brutalism, Sin City or 300 era",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "midias-trend-crossover-impossivel",
    "trend",
    "Crossover Impossível",
    "an impossible crossover — characters from entirely different fictional universes meeting for the first time, consequences unknown",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-villao-como-protagonista",
    "trend",
    "Villão como Protagonista",
    "the villain reframed as the true protagonist — their perspective, their motivations, their grief, fully visible for the first time",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-lado-b-do-canon",
    "trend",
    "Lado B do Canon",
    "the untold side story — what happened in the room, on the ship, in the world while the main story was elsewhere",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-if-they-won",
    "trend",
    "If They Won",
    "an alternate history where they won — the defeated empire's victory, the hero's failure, all consequences that follow",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-versao-brasileira",
    "trend",
    "Versão Brasileira",
    "the story fully relocated to Brazil — cast, setting, aesthetic, social tensions all replaced with authentic Brazilian equivalents",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-universo-pos-apocalipse",
    "trend",
    "Universo Pós-Apocalipse",
    "the character surviving in a post-apocalyptic version of their world — the same person, transformed by devastation",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-versao-infantil",
    "trend",
    "Versão Infantil",
    "depicted as a children's illustration character — simplified, safe, slightly absurd, the horror made cute",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-versao-idosa",
    "trend",
    "Versão Idosa",
    "the character decades later, aged, carrying the weight of their story, how did the adventure end in their face",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-lado-de-dentro-da-cena",
    "trend",
    "Lado de Dentro da Cena",
    "depicted from inside a famous scene — the perspective never shown, the angle the camera never reached",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-objeto-perdido-encontrado",
    "trend",
    "Objeto Perdido Encontrado",
    "the character reduced to one personal object — a boot, a weapon, a letter — their entire story compressed into it",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-momento-de-paz",
    "trend",
    "Momento de Paz",
    "the character at rest, before or after everything — the quiet moment that action-driven narratives always skip",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-trend-fan-art-dentro-do-canon",
    "trend",
    "Fan Art Dentro do Canon",
    "depicted as in-universe fan art — how their own world imagines them as a legend, painted by a fictional admirer",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "midias-detail-easter-egg-de-outra-franquia",
    "detail",
    "Easter Egg de Outra Franquia",
    "a subtle easter egg from a different franchise hidden in the background — only true fans will notice",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-hud-de-videogame",
    "detail",
    "HUD de Videogame",
    "a barely visible heads-up display overlaid: health bar, minimap corner, ammo count — reality as a game",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-painel-de-hq-vizinho",
    "detail",
    "Painel de HQ Vizinho",
    "the edge of an adjacent comic panel bleeds into the frame — another story happening simultaneously just outside",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-cracha-de-convencao",
    "detail",
    "Crachá de Convenção",
    "a San Diego Comic-Con or similar fan convention badge visible on the subject — the boundary between fiction and devotion",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-autografo-do-autor",
    "detail",
    "Autógrafo do Autor",
    "a creator's signature visible somewhere in the scene — Stan Lee, Hideo Kojima, Hayao Miyazaki — the god of this world signing it",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-disco-de-vinil-visivel",
    "detail",
    "Disco de Vinil Visível",
    "a vinyl record visible with a tracklist that tells a story — the soundtrack to this moment made physical",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-cena-congelada-pause",
    "detail",
    "Cena Congelada (Pause)",
    "the image appears paused mid-action — pixelated pause symbol faint in corner, time stopped by someone watching",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-luz-de-cutscene",
    "detail",
    "Luz de Cutscene",
    "lighting that shifts unnaturally mid-scene, suggesting a cinematic cutscene has taken over from gameplay",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-breaking-fourth-wall",
    "detail",
    "Breaking Fourth Wall",
    "the character appears to look directly at the viewer — fully aware of being watched, the fourth wall acknowledged",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-fan-theory-confirmada",
    "detail",
    "Fan Theory Confirmada",
    "one detail in the image quietly confirms a fan theory — something canon never showed but everyone suspected",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-texto-comentario-de-reddit",
    "detail",
    "Texto Comentário de Reddit",
    "a Reddit comment thread watermarked faintly at the image edge, discussing what we are seeing in real time",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-detail-episodio-perdido",
    "detail",
    "Episódio Perdido",
    "the aesthetic of a lost episode — slightly degraded, wrong aspect ratio, the title card burned in, never officially released",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "midias-medium-painel-de-hq-simples",
    "medium",
    "Painel de HQ (simples)",
    "single comic book panel format, speech bubbles possible, panel border visible, Ben-Day print dot texture",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "midias-medium-pagina-dupla-de-hq",
    "medium",
    "Página Dupla de HQ",
    "double-page comic book spread format, extreme horizontal composition, two-page narrative sweep",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "midias-medium-splash-page-epica",
    "medium",
    "Splash Page Épica",
    "full splash page comic book format, single massive image, no panel borders, pure visual impact",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "midias-medium-capa-de-game-ps2",
    "medium",
    "Capa de Game (PS2)",
    "PlayStation 2 game cover format, vertical box art, blue disc icon at top right, PEGI rating, title typography",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "midias-medium-capa-de-bluray-4k",
    "medium",
    "Capa de Bluray 4K",
    "4K Ultra HD Blu-ray steelbook cover format, limited edition art, embossed metallic finish implied, collector aesthetic",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "midias-medium-loading-screen-de-jogo",
    "medium",
    "Loading Screen de Jogo",
    "video game loading screen format, progress bar at bottom, tip text visible, the world about to begin",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "midias-medium-game-over-screen",
    "medium",
    "Game Over Screen",
    "game over screen format, pixelated or stylized typography, skull or defeated sprite, insert coin or press start",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "midias-medium-menu-principal-de-game",
    "medium",
    "Menu Principal de Game",
    "video game main menu format, ambient environment visible, option list, the world waiting for the player to enter",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "midias-medium-curta-de-cinema-1-37-1",
    "medium",
    "Curta de Cinema (1.37:1)",
    "Academy ratio 1.37:1 format, classic pre-widescreen cinema, intimate and square, old Hollywood proportion",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "midias-medium-teaser-poster-atmosferico",
    "medium",
    "Teaser Poster (Atmosférico)",
    "teaser theatrical poster format, minimal imagery, enormous white space, one haunting image, release date only",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "html-original-anchor-kurt-cobain",
    "anchor",
    "Kurt Cobain",
    "Kurt Cobain",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-ayrton-senna",
    "anchor",
    "Ayrton Senna",
    "Ayrton Senna in his red and white racing helmet",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-ronaldo-fenomeno",
    "anchor",
    "Ronaldo Fenômeno",
    "Ronaldo Fenômeno, the Brazilian striker at his peak",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-tupac-shakur",
    "anchor",
    "Tupac Shakur",
    "Tupac Shakur",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-lara-croft",
    "anchor",
    "Lara Croft",
    "Lara Croft from the original 1996 Tomb Raider",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-fernanda-montenegro",
    "anchor",
    "Fernanda Montenegro",
    "Fernanda Montenegro as Dora from Central do Brasil",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-chico-science",
    "anchor",
    "Chico Science",
    "Chico Science in full Manguebeat attire",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-neo-matrix",
    "anchor",
    "Neo (Matrix)",
    "Neo from The Matrix, trench coat and sunglasses",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-xuxa-meneghel",
    "anchor",
    "Xuxa Meneghel",
    "Xuxa Meneghel, Queen of the Baixinhos",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-ronaldinho-gaucho",
    "anchor",
    "Ronaldinho Gaúcho",
    "Ronaldinho Gaúcho in his Barcelona 2004 era",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-heath-ledger-coringa",
    "anchor",
    "Heath Ledger Coringa",
    "Heath Ledger as The Joker, face paint, purple coat",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-britney-spears",
    "anchor",
    "Britney Spears",
    "Britney Spears at her peak, circa 2003",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-ze-pequeno",
    "anchor",
    "Zé Pequeno",
    "Zé Pequeno from Cidade de Deus",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-zidane",
    "anchor",
    "Zidane",
    "Zinedine Zidane",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-steve-jobs",
    "anchor",
    "Steve Jobs",
    "Steve Jobs holding the first iPhone on stage",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-sandy-junior",
    "anchor",
    "Sandy & Junior",
    "Sandy and Junior, the Brazilian pop duo siblings",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-osama-bin-laden",
    "anchor",
    "Osama Bin Laden",
    "Osama bin Laden",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-frodo-bolseiro",
    "anchor",
    "Frodo Bolseiro",
    "Frodo Baggins carrying the One Ring",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-tamagotchi",
    "anchor",
    "Tamagotchi",
    "a Tamagotchi creature brought to life",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-bill-gates",
    "anchor",
    "Bill Gates",
    "Bill Gates in 1995 with a Windows 95 box",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-e-o-tchan-carla",
    "anchor",
    "É o Tchan! (Carla)",
    "Carla Perez from É o Tchan! in Axé Music costume",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-anchor-jack-sparrow",
    "anchor",
    "Jack Sparrow",
    "Captain Jack Sparrow, rum in hand",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "html-original-style-pintura-barroca",
    "style",
    "Pintura Barroca",
    "Baroque oil painting, Caravaggio chiaroscuro lighting, museum quality canvas",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-fotografia-35mm",
    "style",
    "Fotografia 35mm",
    "Authentic 35mm film photography, heavy grain, slight underexposure, analog warmth",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-arte-egipcia-em-papiro",
    "style",
    "Arte Egípcia em Papiro",
    "Ancient Egyptian decorative painting on papyrus, gold leaf, strict hieratic style, profile pose",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-pixel-art-16-bit",
    "style",
    "Pixel Art 16-bit",
    "16-bit pixel art, SNES-era color palette, retro gaming sprite sheet",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-mural-mexicano",
    "style",
    "Mural Mexicano",
    "Mexican social realism mural, Diego Rivera and Orozco style, monumental wall painting",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-concept-art-cinemat",
    "style",
    "Concept Art Cinemat.",
    "Cinematic concept art, epic scale, Unreal Engine 5 photorealistic rendering",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-graphic-novel-noir",
    "style",
    "Graphic Novel Noir",
    "Graphic novel, high-contrast black ink with selective color, Frank Miller Sin City aesthetic",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-icone-sacro-bizantino",
    "style",
    "Ícone Sacro Bizantino",
    "Byzantine sacred icon on gilded wood panel, gold leaf halo, egg tempera, cracked varnish",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-vaporwave-estetico",
    "style",
    "Vaporwave Estético",
    "Vaporwave aesthetic, retrowave synthwave color palette, glitch art, 80s–90s nostalgia digital art",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-pop-art-warhol",
    "style",
    "Pop Art (Warhol)",
    "Pop Art, Andy Warhol silkscreen style, bold flat outlines, color grid repetition",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-escultura-grega",
    "style",
    "Escultura Grega",
    "Ancient Greek white Pentelic marble sculpture, museum documentation photography",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-aquarela-editorial",
    "style",
    "Aquarela Editorial",
    "Editorial watercolor illustration, New Yorker magazine style, loose impressionistic brushwork",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-xilogravura-de-cordel",
    "style",
    "Xilogravura de Cordel",
    "Brazilian cordel woodcut illustration, hand-carved black and white lines, rough texture",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-sci-fi-anos-70",
    "style",
    "Sci-fi Anos 70",
    "1970s science fiction paperback cover art, Moebius / Jean Giraud style, retro-futuristic",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-fotografia-infravermelha",
    "style",
    "Fotografia Infravermelha",
    "Infrared photography, white foliage, dark sky, surreal tonal reversal, dreamlike",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-storyboard-animacao",
    "style",
    "Storyboard Animação",
    "Hand-drawn animation storyboard, Studio Ghibli pencil sketch aesthetic",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-style-daguerreotipo",
    "style",
    "Daguerreótipo",
    "Daguerreotype photograph, sepia tones, 19th century portrait format, brass frame vignette",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "html-original-scenario-boteco-carioca-90s",
    "scenario",
    "Boteco Carioca, 90s",
    "inside a weathered Rio de Janeiro boteco, 1990s, neon Brahma signs, checkered floor, ceiling fan",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-amazonia-profunda",
    "scenario",
    "Amazônia Profunda",
    "deep Amazon rainforest at dusk, bioluminescent plants, mist rising from the canopy",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-lan-house-sp-2003",
    "scenario",
    "LAN House SP, 2003",
    "Brazilian LAN house interior, 2003, rows of CRT monitors, blue light, teenagers in plastic chairs",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-sertao-ao-amanhecer",
    "scenario",
    "Sertão ao Amanhecer",
    "Brazilian northeastern sertão at dawn, red caatinga earth, cacti, flat horizon",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-maracana-final-94",
    "scenario",
    "Maracanã — Final 94",
    "Maracanã stadium packed for the 1994 World Cup final, confetti, roaring crowd",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-museu-do-futuro-2150",
    "scenario",
    "Museu do Futuro (2150)",
    "a museum in the year 2150, white stone halls, climate-controlled glass cases, future visitors",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-roma-antiga",
    "scenario",
    "Roma Antiga",
    "ancient Rome, cobblestone streets, marble columns, torchlight, toga-clad crowds",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-cortico-paulistano-1999",
    "scenario",
    "Cortiço Paulistano, 1999",
    "downtown São Paulo cortiço, 1999, crumbling plaster, clotheslines between buildings, urban density",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-olimpo-grego",
    "scenario",
    "Olimpo Grego",
    "Mount Olympus above the clouds, divine golden light, celestial realm",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-galeria-bienal-sp",
    "scenario",
    "Galeria Bienal SP",
    "São Paulo Bienal white cube gallery, institutional overhead lighting, polished concrete floor",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-ciberespaco-y2k",
    "scenario",
    "Ciberespaço Y2K",
    "Y2K cyberspace, cascading green matrix code, glowing terminals, the year 1999",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-favela-ao-amanhecer",
    "scenario",
    "Favela ao Amanhecer",
    "Brazilian favela at dawn, warm ochre light, rooftop view of the city spreading below",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-praia-de-ipanema-90s",
    "scenario",
    "Praia de Ipanema, 90s",
    "Ipanema beach in the 1990s, golden afternoon light, Dois Irmãos hills in the background",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-espaco-sideral",
    "scenario",
    "Espaço Sideral",
    "outer space, cosmic scale, nebulae and star clusters, total weightlessness",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-camelodromo-94",
    "scenario",
    "Camelódromo, 94",
    "Brazilian informal market (camelódromo), chaotic stalls, bootleg VHS and CDs, 1994",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-underground-punk-sp",
    "scenario",
    "Underground Punk — SP",
    "underground São Paulo punk venue, graffiti walls, sweat, feedback, 1997",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-estacao-de-metro-no-rush",
    "scenario",
    "Estação de Metrô no Rush",
    "São Paulo metro station at rush hour, 1998, bodies pressing, fluorescent light, advertisement posters",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-scenario-feira-de-sao-cristovao",
    "scenario",
    "Feira de São Cristóvão",
    "Feira de São Cristóvão, Rio de Janeiro, forró music, leather hats, dust, barraca lights",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "html-original-trend-retratado-como-divindade",
    "trend",
    "Retratado como Divindade",
    "depicted as an ancient deity — sacred, transcendent, worshipped",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-transportado-ao-brasil",
    "trend",
    "Transportado ao Brasil",
    "fully transplanted into Brazilian culture, every detail authentically local",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-artefato-arqueologico",
    "trend",
    "Artefato Arqueológico",
    "presented as an ancient artifact under museum glass, centuries in the future",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-fundido-com-mitologia",
    "trend",
    "Fundido com Mitologia",
    "merged with Greco-Roman mythology, heroic and classical in scale",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-santo-popular-brasileiro",
    "trend",
    "Santo Popular Brasileiro",
    "reimagined as a Brazilian popular saint, ex-voto aesthetics, miracle attributed",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-cavaleiro-medieval",
    "trend",
    "Cavaleiro Medieval",
    "depicted as a medieval knight or noble, heraldic setting, armor reflecting candlelight",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-personagem-de-cordel",
    "trend",
    "Personagem de Cordel",
    "as a hero of a Brazilian cordel folk narrative, woodcut legend",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-monumento-publico",
    "trend",
    "Monumento Público",
    "rendered as a monumental bronze public sculpture in a city square, pigeons landing on it",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-fusao-com-candomble",
    "trend",
    "Fusão com Candomblé",
    "fused with Afro-Brazilian Candomblé iconography, Orixá aesthetics, sacred geometry",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-olhar-alienigena",
    "trend",
    "Olhar Alienígena",
    "as observed by alien anthropologists — clinical, distant, labeled with incomprehensible text",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-sprite-de-videogame",
    "trend",
    "Sprite de Videogame",
    "translated into a retro video game character, complete with health bar and stats panel",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-verso-de-enciclopedia",
    "trend",
    "Verso de Enciclopédia",
    "illustrated as an encyclopedia entry, clinical diagrammatic labels, cross-section view",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-heroi-tragico-grego",
    "trend",
    "Herói Trágico Grego",
    "as a tragic Greek hero at the moment of catastrophe, emotionally operatic",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-axe-meets-grunge",
    "trend",
    "Axé Meets Grunge",
    "aesthetics brutally fused — half Axé Music carnival feathers, half grunge flannel and ripped jeans",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-propaganda-sovietica",
    "trend",
    "Propaganda Soviética",
    "rendered as Soviet constructivist propaganda poster — strong diagonals, red and black",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-retrato-papal",
    "trend",
    "Retrato Papal",
    "painted as a formal papal or royal portrait, red robes, gilded frame, scepter",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-trend-planta-de-arquitetura",
    "trend",
    "Planta de Arquitetura",
    "rendered as a detailed architectural blueprint — top-down technical drawing, measurement annotations",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "html-original-style-sebastiao-salgado",
    "style",
    "Sebastião Salgado",
    "shot in the style of Sebastião Salgado — epic black and white, moral weight, raw humanism",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-caravaggio",
    "style",
    "Caravaggio",
    "painted in the manner of Caravaggio — impasto brushwork, single light source, chiaroscuro drama",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-roger-deakins",
    "style",
    "Roger Deakins",
    "cinematography by Roger Deakins — golden naturalistic light, restrained beauty",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-wes-anderson",
    "style",
    "Wes Anderson",
    "Wes Anderson color palette — salmon, mustard, powder blue, perfect symmetry, deadpan framing",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-norman-rockwell",
    "style",
    "Norman Rockwell",
    "illustrated by Norman Rockwell — warm American idealism, Saturday Evening Post narrative detail",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-eduardo-kobra",
    "style",
    "Eduardo Kobra",
    "in the style of Eduardo Kobra street murals — geometric kaleidoscope color, massive scale",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-annie-leibovitz",
    "style",
    "Annie Leibovitz",
    "photographed by Annie Leibovitz — dramatically staged, editorial gravitas, iconic composition",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-banksy",
    "style",
    "Banksy",
    "as a Banksy stencil installation — black spray on brick, one subversive visual joke",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-wong-kar-wai",
    "style",
    "Wong Kar-wai",
    "cinematographic style of Wong Kar-wai — saturated neon, slow-motion blur, melancholic longing",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-moebius-giraud",
    "style",
    "Moebius / Giraud",
    "illustrated by Moebius / Jean Giraud — clean luminous linework, retro sci-fi, desert light",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-alan-lee",
    "style",
    "Alan Lee",
    "illustrated by Alan Lee — misty loose watercolor, Tolkien spirit, ancient and ethereal",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-rembrandt",
    "style",
    "Rembrandt",
    "in the style of Rembrandt van Rijn — golden studio light, impasto textures, psychological depth",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-basquiat",
    "style",
    "Basquiat",
    "in the raw style of Jean-Michel Basquiat — expressionist marks, crown symbols, text overlays",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-stanley-kubrick",
    "style",
    "Stanley Kubrick",
    "directed by Stanley Kubrick — one-point perspective, perfect symmetry, geometric dread",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-pedro-almodovar",
    "style",
    "Pedro Almodóvar",
    "visual style of Pedro Almodóvar — saturated primaries, melodrama, ornate domestic interiors",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-carybe",
    "style",
    "Carybé",
    "in the illustrative style of Carybé — warm Bahian color, Candomblé iconography, fluid lines",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-style-isay-weinfeld",
    "style",
    "Isay Weinfeld",
    "architectural sensibility of Isay Weinfeld — brutal luxury, raw concrete, Brazilian modernism",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "html-original-detail-grao-analogico-pesado",
    "detail",
    "Grão Analógico Pesado",
    "heavy 35mm film grain, slightly underexposed, warm analog color shift",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-texto-em-portugues-arcaico",
    "detail",
    "Texto em Português Arcaico",
    "decorative text elements written in archaic 16th-century Portuguese calligraphy visible in the image",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-anacronia-deliberada",
    "detail",
    "Anacronia Deliberada",
    "one deliberate anachronism — a modern smartphone in an otherwise historical scene",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-easter-egg-brasileiro",
    "detail",
    "Easter Egg Brasileiro",
    "a hidden Brazilian cultural reference (a Brahma can, a Havaianas, a caipirinha) subtly visible",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-dutch-angle",
    "detail",
    "Dutch Angle",
    "Dutch angle camera tilt, disorienting, psychological unease",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-luz-de-vela-unica",
    "detail",
    "Luz de Vela Única",
    "single candle illumination, pool of warm light, everything else absorbed in deep shadow",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-moldura-polaroid",
    "detail",
    "Moldura Polaroid",
    "square Polaroid format, white border, handwritten date at bottom, slightly faded",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-fumaca-teatral",
    "detail",
    "Fumaça Teatral",
    "dramatic theatrical smoke, volumetric light beams cutting through",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-artefatos-jpeg",
    "detail",
    "Artefatos JPEG",
    "deliberate JPEG compression artifacts, pixelated blocks at the edges, digital degradation",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-worm-s-eye-view",
    "detail",
    "Worm's Eye View",
    "extreme low angle worm's eye view, subject rendered monumental and towering",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-olho-de-peixe",
    "detail",
    "Olho de Peixe",
    "fisheye lens, 180° field of view, spatial distortion, vertiginous",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-ruido-de-scanner",
    "detail",
    "Ruído de Scanner",
    "flatbed scanner noise, slight color channel bleed, digitized-document texture",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-letreiro-simbolico",
    "detail",
    "Letreiro Simbólico",
    "a prominent hand-lettered or neon sign with symbolic text placed deliberately in the composition",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-exposicao-multipla",
    "detail",
    "Exposição Múltipla",
    "multiple exposure — two or three layered takes blended, ghostly overlapping forms",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-vinheta-escura",
    "detail",
    "Vinheta Escura",
    "strong dark vignette, focus pulled brutally to center, edges dissolving to black",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-chuva-de-confete",
    "detail",
    "Chuva de Confete",
    "confetti explosion mid-frame, color fragments catching the light",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-original-detail-paleta-dessaturada-acento",
    "detail",
    "Paleta Dessaturada + Acento",
    "nearly desaturated image with a single accent color that stays vibrant — emotional punctuation",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "html-v3-anchor-pele",
    "anchor",
    "Pelé",
    "Pelé, the greatest footballer of all time, young and triumphant",
    "Esporte",
    "70s",
    3
  ],
  [
    "html-v3-anchor-david-bowie",
    "anchor",
    "David Bowie",
    "David Bowie as Ziggy Stardust, glam rock alien makeup",
    "Música",
    "70s",
    3
  ],
  [
    "html-v3-anchor-janis-joplin",
    "anchor",
    "Janis Joplin",
    "Janis Joplin, raw and electric, microphone in hand",
    "Música",
    "70s",
    3
  ],
  [
    "html-v3-anchor-caetano-veloso",
    "anchor",
    "Caetano Veloso",
    "Caetano Veloso in his Tropicália era, guitar and flowers",
    "Música BR",
    "70s",
    3
  ],
  [
    "html-v3-anchor-michael-jackson",
    "anchor",
    "Michael Jackson",
    "Michael Jackson in full Thriller-era costume, moonwalk pose",
    "Música",
    "80s",
    3
  ],
  [
    "html-v3-anchor-madonna",
    "anchor",
    "Madonna",
    "Madonna in her Like a Virgin era, lace and crucifix",
    "Música",
    "80s",
    3
  ],
  [
    "html-v3-anchor-maradona",
    "anchor",
    "Maradona",
    "Diego Maradona, the Hand of God raised, Mexico 1986",
    "Esporte",
    "80s",
    3
  ],
  [
    "html-v3-anchor-renato-russo",
    "anchor",
    "Renato Russo",
    "Renato Russo of Legião Urbana, intense, dark sweater",
    "Música BR",
    "80s",
    3
  ],
  [
    "html-v3-anchor-o-j-simpson",
    "anchor",
    "O.J. Simpson",
    "O.J. Simpson in the white Bronco, Los Angeles freeway",
    "Cultura",
    "90s",
    3
  ],
  [
    "html-v3-anchor-beyonce",
    "anchor",
    "Beyoncé",
    "Beyoncé in Lemonade era, yellow dress, baseball bat",
    "Música",
    "2010s",
    3
  ],
  [
    "html-v3-anchor-lionel-messi",
    "anchor",
    "Lionel Messi",
    "Lionel Messi lifting the World Cup 2014, tears and gold",
    "Esporte",
    "2010s",
    3
  ],
  [
    "html-v3-anchor-lady-gaga",
    "anchor",
    "Lady Gaga",
    "Lady Gaga in meat dress, VMAs 2010, surreal theatricality",
    "Música",
    "2010s",
    3
  ],
  [
    "html-v3-style-arte-egipcia",
    "style",
    "Arte Egípcia",
    "Ancient Egyptian painting on papyrus, gold leaf, strict hieratic style, profile pose",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "html-v3-style-vaporwave",
    "style",
    "Vaporwave",
    "Vaporwave aesthetic, retrowave synthwave color palette, glitch art, digital nostalgia",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "html-v3-style-storyboard-ghibli",
    "style",
    "Storyboard Ghibli",
    "Hand-drawn animation storyboard, Studio Ghibli pencil sketch, light and shadow notes",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "html-v3-style-arte-em-vitro",
    "style",
    "Arte em Vitrô",
    "Stained glass window illustration, lead outline, jewel-colored light, medieval cathedral aesthetic",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "html-v3-style-propaganda-construtivista",
    "style",
    "Propaganda Construtivista",
    "Soviet constructivist poster, bold diagonals, red and black, stark geometric typography",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "html-v3-style-minimalismo-japones",
    "style",
    "Minimalismo Japonês",
    "Japanese minimalist ink painting (sumi-e), gestural brushwork, vast empty space",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "html-v3-style-foto-de-arquivo-policial",
    "style",
    "Foto de Arquivo Policial",
    "Police archive photograph, mugshot lighting, date stamp, black and white institutional",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "html-v3-style-iluminura-medieval",
    "style",
    "Iluminura Medieval",
    "Medieval illuminated manuscript page, gold leaf borders, decorative script, flat figures",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "html-v3-scenario-discoteca-carioca-1978",
    "scenario",
    "Discoteca Carioca, 1978",
    "a Rio de Janeiro disco club, 1978, glitter ball, polyester suits, neon haze",
    "Brasil",
    "70s",
    3
  ],
  [
    "html-v3-scenario-estadio-azteca-mexico-86",
    "scenario",
    "Estádio Azteca, Mexico 86",
    "Azteca Stadium, Mexico City 1986, packed crowd, scorching sun, red earth",
    "Internacional",
    "70s",
    3
  ],
  [
    "html-v3-scenario-nyc-times-square-1977",
    "scenario",
    "NYC Times Square, 1977",
    "Times Square, New York City 1977, pre-cleanup era, neon, rain, danger",
    "Internacional",
    "70s",
    3
  ],
  [
    "html-v3-scenario-show-tropicalia-1968",
    "scenario",
    "Show Tropicália, 1968",
    "a Tropicália concert, 1968 São Paulo, electric guitars and maracas, political heat",
    "Brasil",
    "70s",
    3
  ],
  [
    "html-v3-scenario-rock-in-rio-1985",
    "scenario",
    "Rock in Rio, 1985",
    "Rock in Rio festival 1985, enormous crowd, stage lights, red clay mud",
    "Brasil",
    "80s",
    3
  ],
  [
    "html-v3-scenario-diretas-ja-1984",
    "scenario",
    "Diretas Já, 1984",
    "Diretas Já protest march, São Paulo 1984, millions in the streets, banners",
    "Brasil",
    "80s",
    3
  ],
  [
    "html-v3-scenario-berlim-ocidental-1987",
    "scenario",
    "Berlim Ocidental, 1987",
    "West Berlin near the Wall, 1987, graffiti, Cold War tension, divided city",
    "Internacional",
    "80s",
    3
  ],
  [
    "html-v3-scenario-arcade-dos-anos-80",
    "scenario",
    "Arcade dos Anos 80",
    "1980s arcade hall, rows of cabinet games, blue light, teenage energy",
    "Internacional",
    "80s",
    3
  ],
  [
    "html-v3-scenario-camelodromo-1994",
    "scenario",
    "Camelódromo, 1994",
    "Brazilian flea market (camelódromo), chaotic stalls, bootleg VHS and CDs, 1994",
    "Brasil",
    "90s",
    3
  ],
  [
    "html-v3-scenario-underground-punk-sp-97",
    "scenario",
    "Underground Punk SP, 97",
    "underground São Paulo punk venue, 1997, graffiti walls, sweat, feedback",
    "Brasil",
    "90s",
    3
  ],
  [
    "html-v3-scenario-seattle-1991",
    "scenario",
    "Seattle, 1991",
    "Seattle, Washington, 1991, rain, gray skies, thrift store flannel, grunge energy",
    "Internacional",
    "90s",
    3
  ],
  [
    "html-v3-scenario-recife-mangues-1994",
    "scenario",
    "Recife Mangues, 1994",
    "Recife mangroves, 1994, Manguebeat birthplace, factories and crabs and electricity",
    "Brasil",
    "90s",
    3
  ],
  [
    "html-v3-scenario-ground-zero-2001",
    "scenario",
    "Ground Zero, 2001",
    "Ground Zero, New York, September 12 2001, smoke and silence and flowers",
    "Internacional",
    "2000s",
    3
  ],
  [
    "html-v3-scenario-baghdade-2003",
    "scenario",
    "Baghdade, 2003",
    "Baghdad streets, 2003, rubble and palm trees, coalition checkpoint, dust light",
    "Internacional",
    "2000s",
    3
  ],
  [
    "html-v3-scenario-metro-sp-rush-hour",
    "scenario",
    "Metrô SP, Rush Hour",
    "São Paulo metro rush hour, bodies pressing together, fluorescent light, 1998",
    "Brasil",
    "2000s",
    3
  ],
  [
    "html-v3-scenario-manifestacoes-junho-2013",
    "scenario",
    "Manifestações Junho 2013",
    "June 2013 Brazil protests, Avenida Paulista, masks, gas, millions marching",
    "Brasil",
    "2010s",
    3
  ],
  [
    "html-v3-scenario-maracana-7x1-2014",
    "scenario",
    "Maracanã — 7x1, 2014",
    "Maracanã stadium, World Cup 2014 semifinal, the silence after the 7th German goal",
    "Brasil",
    "2010s",
    3
  ],
  [
    "html-v3-scenario-lava-jato-curitiba",
    "scenario",
    "Lava Jato — Curitiba",
    "Curitiba federal court, 2016, cameras, lawyers, the weight of an era ending",
    "Brasil",
    "2010s",
    3
  ],
  [
    "html-v3-scenario-museu-do-futuro-2150",
    "scenario",
    "Museu do Futuro, 2150",
    "museum in the year 2150, white stone halls, climate-controlled glass cases, future visitors",
    "Fantasia",
    "",
    3
  ],
  [
    "html-v3-trend-heroi-de-cordel",
    "trend",
    "Herói de Cordel",
    "hero of a Brazilian cordel folk narrative, larger than life, woodcut legend",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "html-v3-trend-estudo-alien",
    "trend",
    "Estudo Alien",
    "observed by alien anthropologists — clinical, distant, labeled with incomprehensible text",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "html-v3-trend-verbete-de-enciclopedia",
    "trend",
    "Verbete de Enciclopédia",
    "illustrated as a scientific encyclopedia entry, clinical labels, cross-section cutaway view",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "html-v3-trend-blueprint-de-arquitetura",
    "trend",
    "Blueprint de Arquitetura",
    "rendered as a detailed architectural blueprint, top-down technical drawing, measurement annotations",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "html-v3-trend-cena-de-telenovela",
    "trend",
    "Cena de Telenovela",
    "staged as a Brazilian telenovela dramatic scene, overlit, theatrical, actors facing camera",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "html-v3-trend-afresco-renascentista",
    "trend",
    "Afresco Renascentista",
    "depicted in a Renaissance fresco on a cathedral ceiling, surrounded by cherubs and clouds",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "html-v3-trend-personagem-de-manga",
    "trend",
    "Personagem de Mangá",
    "drawn in Japanese manga style, large expressive eyes, speed lines, emotion symbols",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "html-v3-trend-quadrinho-de-cordel",
    "trend",
    "Quadrinho de Cordel",
    "as a Brazilian cordel comic strip panel, hand-drawn speech bubbles in verse",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "html-v3-trend-tarot-card",
    "trend",
    "Tarot Card",
    "as a tarot card illustration: symbolic imagery, Roman numerals, archetypal meaning",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "html-v3-style-frida-kahlo",
    "style",
    "Frida Kahlo",
    "in the self-portrait style of Frida Kahlo — intense gaze, folk symbols, pain and beauty merged",
    "",
    "",
    3,
    "Referência de assinatura"
  ],
  [
    "html-v3-style-ernst-haeckel",
    "style",
    "Ernst Haeckel",
    "in the style of Ernst Haeckel scientific illustrations — obsessive botanical precision, symmetry",
    "",
    "",
    3,
    "Referência de assinatura"
  ],
  [
    "html-v3-style-yayoi-kusama",
    "style",
    "Yayoi Kusama",
    "in the style of Yayoi Kusama — infinite polka dots, obliteration, joyful obsession",
    "",
    "",
    3,
    "Referência de assinatura"
  ],
  [
    "html-v3-style-burle-marx",
    "style",
    "Burle Marx",
    "visual vocabulary of Roberto Burle Marx — organic biomorphic shapes, tropical color, topographic view",
    "",
    "",
    3,
    "Referência de assinatura"
  ],
  [
    "html-v3-detail-paleta-mono-acento",
    "detail",
    "Paleta Mono + Acento",
    "nearly desaturated image with a single vibrant accent color — emotional punctuation",
    "",
    "",
    3,
    "Referência de tempero"
  ],
  [
    "html-v3-detail-tilt-shift-miniatura",
    "detail",
    "Tilt-Shift Miniatura",
    "tilt-shift lens effect, miniaturized world, toy-like depth-of-field blur",
    "",
    "",
    3,
    "Referência de tempero"
  ],
  [
    "html-v3-detail-luz-neon-entrando",
    "detail",
    "Luz Neon Entrando",
    "neon light from outside bleeds through blinds, casting colored stripes across the scene",
    "",
    "",
    3,
    "Referência de tempero"
  ],
  [
    "html-v3-detail-reflexo-na-agua",
    "detail",
    "Reflexo na Água",
    "perfect reflection on wet surface or puddle below the subject, surreal doubling",
    "",
    "",
    3,
    "Referência de tempero"
  ],
  [
    "html-v3-medium-widescreen-2-35-1",
    "medium",
    "Widescreen 2.35:1",
    "2.35:1 cinemascope widescreen aspect ratio, horizontal cinematic sweep",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-quadrado-1-1",
    "medium",
    "Quadrado 1:1",
    "perfect square 1:1 format, balanced centered composition",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-polaroid",
    "medium",
    "Polaroid",
    "Polaroid instant photograph format, square with white border, nostalgic",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-poster-de-cinema",
    "medium",
    "Pôster de Cinema",
    "movie poster vertical format, title space at top, bold graphic hierarchy",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-capa-de-disco-de-vinil",
    "medium",
    "Capa de Disco de Vinil",
    "vinyl record album cover, square format, bold graphic design",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-dupla-pagina-de-revista",
    "medium",
    "Dupla-Página de Revista",
    "double-page magazine spread, editorial layout, text columns implied",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-tela-panoramica-3-1",
    "medium",
    "Tela Panorâmica 3:1",
    "ultra-wide panoramic format, 3:1 ratio, landscape sweep, horizon-first composition",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-mural-arquitetonico",
    "medium",
    "Mural Arquitetônico",
    "architectural wall mural scale, viewed from below, building-sized composition",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-triptico",
    "medium",
    "Tríptico",
    "triptych format — three equal panels telling one story across them",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-miniatura-tilt-shift",
    "medium",
    "Miniatura (Tilt-shift)",
    "tilt-shift miniaturized world, toy-like scale, everything precious and small",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-capa-de-cordel",
    "medium",
    "Capa de Cordel",
    "Brazilian cordel booklet cover, vertical pamphlet format, woodcut border frame",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-retrato-4x5",
    "medium",
    "Retrato 4x5",
    "portrait format 4:5 ratio, vertical, painterly close composition",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-cartao-postal",
    "medium",
    "Cartão Postal",
    "postcard format, horizontal, white border, caption space at bottom",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-medium-tela-de-abertura-de-game",
    "medium",
    "Tela de Abertura de Game",
    "video game title screen format, HUD elements implied, genre typography",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "html-v3-palette-dourado-e-sombra",
    "palette",
    "Dourado e Sombra",
    "dominant palette: deep shadow and warm gold, chiaroscuro contrast",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-neon-sobre-preto",
    "palette",
    "Neon sobre Preto",
    "dominant palette: neon electric colors on absolute black, synthwave night",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-pastel-desbotado",
    "palette",
    "Pastel Desbotado",
    "dominant palette: faded pastels, washed-out film photography warmth",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-vermelho-e-cinza",
    "palette",
    "Vermelho e Cinza",
    "dominant palette: stark red and gray, Soviet constructivist graphic tension",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-verde-selva",
    "palette",
    "Verde Selva",
    "dominant palette: deep jungle greens, earthy ochres, living darkness",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-azul-profundo",
    "palette",
    "Azul Profundo",
    "dominant palette: deep navy and cobalt, cold, melancholic, oceanic",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-sepia-envelhecida",
    "palette",
    "Sépia Envelhecida",
    "dominant palette: sepia tones, aged paper warmth, 19th century archive",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-branco-e-carvao",
    "palette",
    "Branco e Carvão",
    "dominant palette: near-white and charcoal, high contrast, austere",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-laranja-crepuscular",
    "palette",
    "Laranja Crepuscular",
    "dominant palette: burning sunset orange against deep violet sky",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-rosa-e-preto",
    "palette",
    "Rosa e Preto",
    "dominant palette: hot pink and black, confrontational, pop aggressive energy",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-terracota-e-ocre",
    "palette",
    "Terracota e Ocre",
    "dominant palette: terracotta reds and warm ochres, Brazilian earth tones",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-ciano-e-sombra",
    "palette",
    "Ciano e Sombra",
    "dominant palette: cold cyan highlights against dramatic charcoal shadow",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-amarelo-e-roxo",
    "palette",
    "Amarelo e Roxo",
    "dominant palette: saturated yellow and deep purple, high tension complementary",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-monocromatico-agressivo",
    "palette",
    "Monocromático Agressivo",
    "dominant palette: strict monochrome, single hue with extreme value range",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-palette-tropical-saturado",
    "palette",
    "Tropical Saturado",
    "dominant palette: maximum tropical saturation — mangoes, parrots, hibiscus",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "html-v3-mood-epico-grandioso",
    "mood",
    "Épico / Grandioso",
    "emotional register: epic and grandiose — mythological weight, vast scale, heroic proportion",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-intimo-delicado",
    "mood",
    "Íntimo / Delicado",
    "emotional register: intimate and tender — small scale, private moment, held breath",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-absurdo-deadpan",
    "mood",
    "Absurdo / Deadpan",
    "emotional register: absurdist and deadpan — the bizarre treated with total matter-of-fact seriousness",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-sombrio-elegiaco",
    "mood",
    "Sombrio / Elegíaco",
    "emotional register: somber and elegiac — grief, loss, quiet irreversible devastation",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-euforico-selvagem",
    "mood",
    "Eufórico / Selvagem",
    "emotional register: euphoric and uncontained — peak celebration, abandon, release",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-melancolia-dourada",
    "mood",
    "Melancolia Dourada",
    "emotional register: bittersweet nostalgia — golden light falling on a world already gone",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-tensao-silenciosa",
    "mood",
    "Tensão Silenciosa",
    "emotional register: silent dread — something wrong but unseen, still before the storm",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-ternura-brutal",
    "mood",
    "Ternura Brutal",
    "emotional register: brutal tenderness — roughness and gentleness inhabiting the same frame",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-ironia-fria",
    "mood",
    "Ironia Fria",
    "emotional register: cold irony — distance, dry wit, refusal to be moved",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-sacro-transcendente",
    "mood",
    "Sacro / Transcendente",
    "emotional register: sacred and transcendent — beyond the human, approaching the divine",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-raiva-contida",
    "mood",
    "Raiva Contida",
    "emotional register: barely contained fury — stillness that hides volcanic emotion beneath",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-mood-maravilha-inocente",
    "mood",
    "Maravilha Inocente",
    "emotional register: pure wonder — a child encountering the sublime for the first time",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "html-v3-composition-close-extremo",
    "composition",
    "Close Extremo",
    "extreme close-up, macro detail, texture fills the entire frame",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-aereo-drone",
    "composition",
    "Aéreo / Drone",
    "aerial drone shot, camera looking straight down from above, map-like",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-pov-subjetivo",
    "composition",
    "POV Subjetivo",
    "first-person POV shot — the camera IS the character's eyes, immersive",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-retrato-3-4",
    "composition",
    "Retrato 3/4",
    "classic 3/4 portrait angle, slight profile turn, painterly traditional framing",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-camera-no-chao",
    "composition",
    "Câmera no Chão",
    "ground-level camera, subject towers above, feet at the lens edge",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-reflexo-no-espelho",
    "composition",
    "Reflexo no Espelho",
    "subject reflected in a mirror, both reflection and reality visible simultaneously",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-sobre-o-ombro",
    "composition",
    "Sobre o Ombro",
    "over-the-shoulder shot, partial back of head in foreground, subject facing us",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-simetrico-central",
    "composition",
    "Simétrico Central",
    "perfectly centered symmetrical composition, Kubrickian one-point perspective, tunnel effect",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-silhueta-pura",
    "composition",
    "Silhueta Pura",
    "pure silhouette against a brightly lit background, form without facial detail",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-plano-americano",
    "composition",
    "Plano Americano",
    "medium shot cutting at the knees, classic western and noir framing",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-desfocado-a-frente",
    "composition",
    "Desfocado à Frente",
    "extreme shallow depth of field, blurred foreground element partially obscuring subject",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-zoom-lento-dolly",
    "composition",
    "Zoom Lento (Dolly)",
    "dolly zoom effect — background warps as subject remains stable, Hitchcock vertigo",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-contra-luz",
    "composition",
    "Contra-luz",
    "backlit subject, rim light only, interior thrown into darkness, halo effect",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v3-composition-two-shot-tenso",
    "composition",
    "Two-Shot Tenso",
    "two-shot framing, both subjects in frame, tension in the space between them",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "html-v4-anchor-neo",
    "anchor",
    "Neo",
    "Neo from The Matrix, black trench coat, sunglasses, bullet time stance",
    "Cinema",
    "90s",
    4
  ],
  [
    "html-v4-style-arte-em-vitral",
    "style",
    "Arte em Vitral",
    "Stained glass window illustration, lead outline, jewel-colored light, medieval cathedral",
    "",
    "",
    4,
    "Referência de linguagem"
  ],
  [
    "html-v4-style-gravura-em-metal",
    "style",
    "Gravura em Metal",
    "Copper plate etching print, fine cross-hatching, Goya-era chiaroscuro, plate texture",
    "",
    "",
    4,
    "Referência de linguagem"
  ],
  [
    "html-v4-trend-poster-se-procura",
    "trend",
    "Pôster Se Procura",
    "on a wanted PROCURADO poster — black and white portrait, reward amount, western atmosphere",
    "",
    "",
    4,
    "Referência de torcao"
  ],
  [
    "html-v4-trend-figurinha-panini",
    "trend",
    "Figurinha Panini",
    "as a Panini sticker album card — silver holographic border, name bar at bottom, 1994 energy",
    "",
    "",
    4,
    "Referência de torcao"
  ],
  [
    "html-v4-detail-neon-entrando",
    "detail",
    "Neon Entrando",
    "neon light from outside bleeds through blinds, casting colored stripes across the scene",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "html-v4-detail-sombra-dissidente",
    "detail",
    "Sombra Dissidente",
    "the subject's shadow does not match their form — it belongs to someone or something else entirely",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "html-v4-detail-bilhete-a-mao",
    "detail",
    "Bilhete à Mão",
    "a handwritten note visible somewhere in the scene — illegible but emotional, personal history in cursive",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "html-v4-detail-estatica-de-tv",
    "detail",
    "Estática de TV",
    "television static snow texture overlaid at the edges — signal lost, memory failing",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "html-v4-detail-rasura-censurada",
    "detail",
    "Rasura Censurada",
    "a thick black censorship bar over some element — what was removed matters as much as what remains",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "html-v4-detail-mancha-de-umidade",
    "detail",
    "Mancha de Umidade",
    "a damp stain on the wall behind the subject — tropical decay, time passing through plaster",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "html-v4-medium-tela-de-celular-9-16",
    "medium",
    "Tela de Celular 9:16",
    "vertical 9:16 smartphone screen format, social media native, full-bleed immersion",
    "",
    "",
    4,
    "Referência de formato"
  ],
  [
    "html-v4-medium-poster-de-metro",
    "medium",
    "Pôster de Metrô",
    "vertical subway column poster format, 3:1 ratio, designed for passing eyes",
    "",
    "",
    4,
    "Referência de formato"
  ],
  [
    "html-v4-medium-retrato-4-5",
    "medium",
    "Retrato 4:5",
    "portrait format 4:5 ratio, vertical, painterly close composition",
    "",
    "",
    4,
    "Referência de formato"
  ],
  [
    "html-v4-medium-panoramica-3-1",
    "medium",
    "Panorâmica 3:1",
    "ultra-wide panoramic format, 3:1 ratio, landscape sweep, horizon-first composition",
    "",
    "",
    4,
    "Referência de formato"
  ],
  [
    "html-v4-medium-stamp-selo-postal",
    "medium",
    "Stamp / Selo Postal",
    "postage stamp format, perforated border, denomination value, miniature scene of national significance",
    "",
    "",
    4,
    "Referência de formato"
  ],
  [
    "html-v4-palette-amarelo-brasil",
    "palette",
    "Amarelo Brasil",
    "dominant palette of national yellow and green, patriotic and beautiful and contested",
    "",
    "",
    4,
    "Referência de paleta"
  ],
  [
    "html-v4-palette-monocromatico",
    "palette",
    "Monocromático",
    "strict monochrome, single hue with extreme value range, emotional austerity",
    "",
    "",
    4,
    "Referência de paleta"
  ],
  [
    "html-v4-palette-ciberpunk-ciano",
    "palette",
    "Ciberpunk Ciano",
    "dominant palette of cyberpunk teal and electric cyan on black, digital rain and data streams",
    "",
    "",
    4,
    "Referência de paleta"
  ],
  [
    "html-v4-composition-camera-de-seguranca",
    "composition",
    "Câmera de Segurança",
    "CCTV security camera aesthetic, wide angle, timestamp burned in corner, surveillance gray-green",
    "",
    "",
    4,
    "Referência de camera"
  ],
  [
    "html-v4-composition-tilt-shift-miniatura",
    "composition",
    "Tilt-Shift Miniatura",
    "tilt-shift lens effect, miniaturized world, toy-like shallow depth-of-field blur",
    "",
    "",
    4,
    "Referência de camera"
  ],
  [
    "curadoria-anchor-cartografa-de-nuvens",
    "anchor",
    "Cartógrafa de nuvens",
    "a cloud cartographer with wind-tossed silver hair, a weatherproof indigo cape, brass surveying instruments and a folded atlas of hand-drawn cloud formations",
    "Profissões imaginárias",
    "Atemporal",
    5,
    "Pesquisadora que registra formas e correntes do céu."
  ],
  [
    "curadoria-anchor-guardiao-de-farol-subterraneo",
    "anchor",
    "Guardião de farol subterrâneo",
    "an underground lighthouse keeper with a salt-streaked wool coat, a warm lantern at the waist, mineral dust on his boots and a carefully groomed beard",
    "Fantasia",
    "Atemporal",
    5,
    "Zelador solitário de uma luz sob a terra."
  ],
  [
    "curadoria-anchor-chef-de-estacao-orbital",
    "anchor",
    "Chef de estação orbital",
    "an orbital station chef wearing a fitted graphite apron, magnetic shoes and floating utensil loops, with a composed expression and a small pouch of fresh herbs",
    "Ficção científica",
    "Futuro",
    5,
    "Cozinheira precisa adaptada à vida sem gravidade."
  ],
  [
    "curadoria-anchor-restauradora-de-vitrais",
    "anchor",
    "Restauradora de vitrais",
    "a stained-glass conservator with fine protective gloves, small glass cutters tucked into a canvas apron and flecks of colored glass reflected across her face",
    "Ofícios",
    "Contemporânea",
    5,
    "Especialista em vidro, cor e estruturas antigas."
  ],
  [
    "curadoria-anchor-mensageiro-de-bicicleta-solar",
    "anchor",
    "Mensageiro de bicicleta solar",
    "a solar bicycle courier in a lightweight ochre riding jacket, reflective straps, compact photovoltaic panels on the backpack and a secure leather message tube",
    "Ficção científica",
    "Futuro próximo",
    5,
    "Entregador urbano movido por energia limpa."
  ],
  [
    "curadoria-anchor-arquivista-de-sonhos",
    "anchor",
    "Arquivista de sonhos",
    "a dream archivist with softly rumpled midnight-blue clothing, translucent index cards, silver thread marking her fingertips and a cabinet key worn as a pendant",
    "Fantasia",
    "Atemporal",
    5,
    "Catalogadora de memórias que só existem ao dormir."
  ],
  [
    "curadoria-anchor-engenheira-de-mares",
    "anchor",
    "Engenheira de marés",
    "a tidal engineer in a practical seaweed-green dry suit, waterproof diagrams rolled under one arm and a compact brass flow meter clipped to her shoulder",
    "Profissões imaginárias",
    "Futuro próximo",
    5,
    "Técnica que transforma o movimento do mar em energia."
  ],
  [
    "curadoria-anchor-botanico-de-microclimas",
    "anchor",
    "Botânico de microclimas",
    "a microclimate botanist carrying glass terrarium capsules in a padded field vest, with soil on his cuffs, round protective glasses and delicate seedlings pinned like specimens",
    "Ciência",
    "Futuro próximo",
    5,
    "Cientista dedicado a pequenos ecossistemas portáteis."
  ],
  [
    "curadoria-anchor-detetive-de-aromas",
    "anchor",
    "Detetive de aromas",
    "an aroma detective with a tailored tobacco-brown coat, a case of tiny labeled scent vials, a notebook of botanical sketches and an intent, discerning gaze",
    "Mistério",
    "Anos 1930",
    5,
    "Investigadora que reconstrói histórias pelo olfato."
  ],
  [
    "curadoria-anchor-ferreiro-de-instrumentos",
    "anchor",
    "Ferreiro de instrumentos",
    "an instrument blacksmith with a scarred leather apron, fine engraving tools, curled metal shavings on his sleeves and a half-finished brass flute held with both hands",
    "Ofícios",
    "Atemporal",
    5,
    "Artesão que une metalurgia e música."
  ],
  [
    "curadoria-anchor-bailarina-de-sombras",
    "anchor",
    "Bailarina de sombras",
    "a shadow dancer in an asymmetrical charcoal costume with ribboned joints, bare feet and an elongated shadow peeling gracefully away from her body",
    "Fantasia",
    "Atemporal",
    5,
    "Dançarina cuja silhueta ganha movimento próprio."
  ],
  [
    "curadoria-anchor-pastor-de-automatos",
    "anchor",
    "Pastor de autômatos",
    "an automaton shepherd in a patched canvas coat, carrying a tuning-fork staff while a cluster of small brass mechanical animals gathers around his boots",
    "Ficção científica",
    "Retrofuturo",
    5,
    "Cuidador de pequenas máquinas com instinto de rebanho."
  ],
  [
    "curadoria-anchor-mergulhadora-de-naufragios",
    "anchor",
    "Mergulhadora de naufrágios",
    "a shipwreck diver in a weathered copper-and-canvas diving suit, reinforced gloves, a pressure gauge at the wrist and fine bubbles escaping around her helmet",
    "Exploração",
    "Anos 1950",
    5,
    "Exploradora técnica de embarcações submersas."
  ],
  [
    "curadoria-anchor-relojoeiro-de-tempestades",
    "anchor",
    "Relojoeiro de tempestades",
    "a storm clockmaker with static lifting strands of his hair, a vest of miniature barometers and a glass-cased pocket watch containing a tiny rotating thundercloud",
    "Profissões imaginárias",
    "Retrofuturo",
    5,
    "Artesão que mede fenômenos atmosféricos impossíveis."
  ],
  [
    "curadoria-anchor-curandeira-de-criaturas",
    "anchor",
    "Curandeira de criaturas",
    "a creature healer wearing a many-pocketed moss-green tunic, bandages and herbal salves at her belt, with a small injured winged animal resting against her shoulder",
    "Fantasia",
    "Atemporal",
    5,
    "Veterinária de seres raros e temperamentos difíceis."
  ],
  [
    "curadoria-anchor-cartazista-de-rua",
    "anchor",
    "Cartazista de rua",
    "a street sign painter with rolled sleeves, a brush held between his teeth, enamel paint marks across his hands and a wooden case of alphabet samples",
    "Cultura urbana",
    "Anos 1960",
    5,
    "Artista de letras manuais e comunicação urbana."
  ],
  [
    "curadoria-anchor-guarda-de-museu-noturno",
    "anchor",
    "Guarda de museu noturno",
    "a night museum guard in a formal dark uniform softened by age, carrying a small flashlight and an ornate ring of keys, with painted eyes watching from behind him",
    "Mistério",
    "Contemporânea",
    5,
    "Vigia atento a obras que despertam depois da meia-noite."
  ],
  [
    "curadoria-anchor-piloto-de-dirigivel-florestal",
    "anchor",
    "Piloto de dirigível florestal",
    "a forest airship pilot with a cropped leather flight jacket, leaf-shaped navigation badges, goggles pushed above her forehead and rope-burned gloves",
    "Aventura",
    "Retrofuturo",
    5,
    "Navegadora que atravessa copas de árvores gigantes."
  ],
  [
    "curadoria-anchor-tecelao-de-fibras-opticas",
    "anchor",
    "Tecelão de fibras ópticas",
    "a fiber-optic weaver in a simple dark work shirt, fine luminous threads passing through his fingers and delicate circuits embroidered along a traditional wooden loom",
    "Ofícios",
    "Futuro próximo",
    5,
    "Artesão que transforma luz em tecido vestível."
  ],
  [
    "curadoria-anchor-colhedora-de-orvalho",
    "anchor",
    "Colhedora de orvalho",
    "a dew harvester at first light wearing layered pale linen, a wide woven hood and a set of polished collection bowls strapped carefully across her back",
    "Fantasia",
    "Atemporal",
    5,
    "Trabalhadora matinal de uma cultura onde água é preciosa."
  ],
  [
    "curadoria-anchor-tradutor-de-passaros",
    "anchor",
    "Tradutor de pássaros",
    "a bird-language translator with a weatherproof field notebook, color-coded feathers tucked into his hatband and a small attentive bird perched near his ear",
    "Profissões imaginárias",
    "Atemporal",
    5,
    "Linguista dedicado a cantos, gestos e migrações."
  ],
  [
    "curadoria-anchor-cozinheira-de-realidades",
    "anchor",
    "Cozinheira de realidades",
    "a reality cook in a crisp ivory jacket dusted with iridescent spices, holding a shallow pan whose ingredients shift subtly between different possible dishes",
    "Fantasia",
    "Atemporal",
    5,
    "Chef experimental que serve memórias e possibilidades."
  ],
  [
    "curadoria-anchor-escultor-de-gelo-urbano",
    "anchor",
    "Escultor de gelo urbano",
    "an urban ice sculptor wearing a padded vermilion work coat, clear safety visor and heavy gloves, with precise chisels at his belt and ice crystals on his shoulders",
    "Artes",
    "Contemporânea",
    5,
    "Artista que trabalha em grande escala no frio da cidade."
  ],
  [
    "curadoria-anchor-maestrina-de-maquinas",
    "anchor",
    "Maestrina de máquinas",
    "a machine conductor in a sharply tailored black jacket with copper seams, holding a slender baton while pistons and gears around her move in measured rhythm",
    "Ficção científica",
    "Retrofuturo",
    5,
    "Regente que coordena motores como instrumentos musicais."
  ],
  [
    "curadoria-anchor-pesquisadora-de-cogumelos",
    "anchor",
    "Pesquisadora de cogumelos",
    "a mushroom researcher with a waxed canvas satchel, magnifying loupe around her neck, specimen envelopes in her vest and tiny spores dusting her notebook",
    "Ciência",
    "Contemporânea",
    5,
    "Micologista de campo atenta a formas microscópicas."
  ],
  [
    "curadoria-anchor-alfaiate-de-camuflagem",
    "anchor",
    "Alfaiate de camuflagem",
    "a camouflage tailor with a measuring tape over a muted patchwork suit, swatches of stone bark and grass pinned to his chest and silver scissors in one hand",
    "Ofícios",
    "Contemporânea",
    5,
    "Costureiro especializado em roupas que dialogam com paisagens."
  ],
  [
    "curadoria-anchor-avo-piloto-de-rally",
    "anchor",
    "Avó piloto de rally",
    "a grandmother rally driver with cropped white hair, a worn burgundy racing suit, sponsor patches from decades of travel and a helmet tucked confidently under one arm",
    "Esporte",
    "Anos 1980",
    5,
    "Competidora experiente, segura e cheia de personalidade."
  ],
  [
    "curadoria-anchor-colecionador-de-ecos",
    "anchor",
    "Colecionador de ecos",
    "an echo collector in a long sand-colored coat, carrying nested glass resonators and small acoustic horns, with visible ripples of sound held inside one bottle",
    "Fantasia",
    "Atemporal",
    5,
    "Viajante que guarda sons em recipientes delicados."
  ],
  [
    "curadoria-anchor-guardia-de-sementes",
    "anchor",
    "Guardiã de sementes",
    "a seed guardian wearing a sturdy indigo work dress, hand-stitched seed packets sorted in a wooden chest and a necklace of tiny labeled glass tubes",
    "Agricultura",
    "Futuro próximo",
    5,
    "Protetora de variedades agrícolas para as próximas gerações."
  ],
  [
    "curadoria-anchor-corredor-de-telhados",
    "anchor",
    "Corredor de telhados",
    "a rooftop runner in a fitted slate-gray jacket, flexible high-grip shoes and chalked fingertips, captured in a controlled stride with a compact safety line at the hip",
    "Esporte",
    "Contemporânea",
    5,
    "Atleta urbano que lê a cidade pelas coberturas."
  ],
  [
    "curadoria-anchor-bibliotecaria-submarina",
    "anchor",
    "Bibliotecária submarina",
    "a submarine librarian with neat braided hair, a high-collared waterproof uniform and a floating satchel of sealed books, accompanied by a small brass reading lamp",
    "Fantasia",
    "Retrofuturo",
    5,
    "Responsável por livros preservados sob o oceano."
  ],
  [
    "curadoria-anchor-cacador-de-meteoritos",
    "anchor",
    "Caçador de meteoritos",
    "a meteorite hunter in a sun-bleached field jacket, with a geological hammer, dark polarized glasses and a black stone fragment glowing faintly inside a specimen box",
    "Exploração",
    "Contemporânea",
    5,
    "Explorador que procura fragmentos de outros mundos."
  ],
  [
    "curadoria-anchor-costureira-de-asas",
    "anchor",
    "Costureira de asas",
    "a wing seamstress wearing a close-fitting workshop apron, fine needles held between her fingers and a delicate framework of fabric feathers spread across her shoulders",
    "Fantasia",
    "Atemporal",
    5,
    "Designer de estruturas leves para voo e performance."
  ],
  [
    "curadoria-anchor-poeta-de-neon",
    "anchor",
    "Poeta de neon",
    "a neon poet with a reflective black jacket, portable glass tubing bent into handwritten fragments and violet light illuminating his thoughtful face",
    "Cultura urbana",
    "Futuro próximo",
    5,
    "Artista que escreve versos com luz urbana."
  ],
  [
    "curadoria-anchor-domador-de-drones",
    "anchor",
    "Domador de drones",
    "a drone handler in a reinforced teal utility vest, gesture-control rings on both hands and a small flock of compact drones arranged attentively around her",
    "Tecnologia",
    "Futuro próximo",
    5,
    "Treinadora de enxames aéreos para tarefas delicadas."
  ],
  [
    "curadoria-anchor-alquimista-de-pigmentos",
    "anchor",
    "Alquimista de pigmentos",
    "a pigment alchemist with stained linen sleeves, rows of ground minerals in ceramic dishes and a mortar producing a subtle emerald phosphorescence",
    "Fantasia",
    "Renascimento imaginário",
    5,
    "Pesquisadora de cores minerais e reações luminosas."
  ],
  [
    "curadoria-anchor-guarda-costas-de-fantasma",
    "anchor",
    "Guarda-costas de fantasma",
    "a ghost bodyguard in a plain well-cut charcoal suit, one hand resting near an old silver charm while a translucent figure stays safely behind his shoulder",
    "Mistério",
    "Contemporânea",
    5,
    "Protetor discreto de uma presença quase transparente."
  ],
  [
    "curadoria-anchor-cartomante-cetica",
    "anchor",
    "Cartomante cética",
    "a skeptical fortune teller with minimal jewelry, an oversized rust-colored cardigan and worn illustrated cards spread analytically like clues rather than prophecy",
    "Fantasia",
    "Contemporânea",
    5,
    "Leitora de cartas que desconfia do próprio talento."
  ],
  [
    "curadoria-anchor-cientista-de-vulcoes",
    "anchor",
    "Cientista de vulcões",
    "a volcano scientist in a heat-resistant silver hood, ash-darkened boots and a rugged thermal sensor, with a clear visor reflecting a thin line of lava",
    "Ciência",
    "Contemporânea",
    5,
    "Vulcanologista equipada para calor e terreno instável."
  ],
  [
    "curadoria-anchor-surfista-de-dunas",
    "anchor",
    "Surfista de dunas",
    "a dune surfer in lightweight sand-repellent wraps, dark goggles and a broad crescent-shaped board, with fine grains streaming from the edge of the board",
    "Esporte",
    "Futuro próximo",
    5,
    "Atleta que desliza por cordões de areia gigantes."
  ],
  [
    "curadoria-anchor-marceneiro-de-casas-ambulantes",
    "anchor",
    "Marceneiro de casas ambulantes",
    "a wandering-house carpenter with a heavy canvas tool belt, cedar shavings in his beard and a miniature wheeled timber home held like a precise architectural model",
    "Ofícios",
    "Atemporal",
    5,
    "Construtor de moradias compactas sobre rodas."
  ],
  [
    "curadoria-anchor-fotografa-de-insetos",
    "anchor",
    "Fotógrafa de insetos",
    "an insect photographer kneeling with patient posture, a macro camera with a compact diffuser, knee pads and a magnified jewel-like beetle reflected in her glasses",
    "Ciência",
    "Contemporânea",
    5,
    "Especialista em retratos de fauna minúscula."
  ],
  [
    "curadoria-anchor-zelador-de-portal",
    "anchor",
    "Zelador de portal",
    "a portal caretaker in a practical navy maintenance uniform, carrying an old checklist, lubricant and a ring of geometric keys beside a doorway with softly shifting edges",
    "Fantasia",
    "Contemporânea",
    5,
    "Funcionário metódico de uma passagem entre lugares."
  ],
  [
    "curadoria-anchor-capita-de-quebra-mar",
    "anchor",
    "Capitã de quebra-mar",
    "a breakwater captain with salt-gray hair, a heavy orange storm coat and binoculars at her chest, standing with the steady posture of someone reading rough water",
    "Aventura",
    "Contemporânea",
    5,
    "Comandante acostumada a enfrentar águas violentas."
  ],
  [
    "curadoria-anchor-aprendiz-de-dragao",
    "anchor",
    "Aprendiz de dragão",
    "a dragon apprentice in oversized fireproof gloves, a patched leather tunic and a helmet slightly too large, holding a bucket while a small dragon noses at the pocket",
    "Fantasia",
    "Atemporal",
    5,
    "Jovem cuidador ainda desajeitado com criaturas enormes."
  ],
  [
    "curadoria-anchor-andarilho-de-feiras",
    "anchor",
    "Andarilho de feiras",
    "a fairground wanderer with a weathered satchel, layers of colorful woven cloth and a folding tray of curious handmade objects worn across the chest",
    "Cultura popular",
    "Atemporal",
    5,
    "Comerciante nômade de objetos curiosos e histórias."
  ],
  [
    "curadoria-anchor-arqueologa-de-futuros",
    "anchor",
    "Arqueóloga de futuros",
    "a future archaeologist in a clean bone-white field suit, with translucent excavation tools and a fragment of impossible architecture tagged with dates yet to come",
    "Ficção científica",
    "Futuro distante",
    5,
    "Pesquisadora de ruínas que ainda não aconteceram."
  ],
  [
    "curadoria-anchor-dancarino-de-chuva",
    "anchor",
    "Dançarino de chuva",
    "a rain dancer in a sleeveless cobalt costume with fine reflective seams, captured in a grounded turn as arcs of water trace the movement around his arms",
    "Artes",
    "Contemporânea",
    5,
    "Performista que transforma água em coreografia."
  ],
  [
    "curadoria-anchor-sentinela-de-jardim-vertical",
    "anchor",
    "Sentinela de jardim vertical",
    "a vertical garden sentinel in a structured leaf-green uniform, with discreet climbing harnesses and a pruning tool held like a ceremonial staff",
    "Ficção científica",
    "Futuro próximo",
    5,
    "Vigia silenciosa de uma floresta urbana suspensa."
  ],
  [
    "curadoria-anchor-ourives-de-circuitos",
    "anchor",
    "Ourives de circuitos",
    "a circuit jeweler wearing a magnifying visor, with fine tweezers, gold traces laid across a dark workbench and a delicate necklace made from reclaimed electronic components",
    "Ofícios",
    "Futuro próximo",
    5,
    "Artesã de joias eletrônicas minuciosas."
  ],
  [
    "curadoria-scenario-lavanderia-durante-apagao",
    "scenario",
    "Lavanderia durante apagão",
    "a neighborhood laundromat during a nighttime power outage, motionless washing machines, emergency lights above the change counter and wet pavement glowing through the glass door",
    "Interior urbano",
    "Contemporânea",
    5,
    "Um interior cotidiano iluminado apenas por emergência."
  ],
  [
    "curadoria-scenario-estufa-dentro-de-biblioteca",
    "scenario",
    "Estufa dentro de biblioteca",
    "a humid glass greenhouse built inside an old library, ferns rising between reading tables, condensation on high windows and narrow paths winding around book stacks",
    "Interior fantástico",
    "Atemporal",
    5,
    "Plantas tropicais crescendo entre livros e estantes."
  ],
  [
    "curadoria-scenario-cozinha-de-trem-noturno",
    "scenario",
    "Cozinha de trem noturno",
    "the compact galley kitchen of an overnight train, copper pans secured to rails, a narrow window streaked with rain and warm task lighting over a tiny preparation counter",
    "Interior",
    "Anos 1960",
    5,
    "Espaço compacto em movimento, cheio de utensílios."
  ],
  [
    "curadoria-scenario-feira-livre-depois-da-chuva",
    "scenario",
    "Feira livre depois da chuva",
    "a Brazilian open-air street market just after heavy rain, canvas awnings dripping onto crates of fruit, vendors packing produce and reflections rippling across the asphalt",
    "Brasil urbano",
    "Contemporânea",
    5,
    "Bancas coloridas e poças em uma rua brasileira."
  ],
  [
    "curadoria-scenario-oficina-de-barcos-no-igarape",
    "scenario",
    "Oficina de barcos no igarapé",
    "a small boat repair workshop beside an Amazonian igarapé, hand-built wooden hulls under a palm-roof shelter, curled shavings on the dock and dense forest reflected in dark water",
    "Amazônia",
    "Contemporânea",
    5,
    "Estrutura de madeira entre água e floresta amazônica."
  ],
  [
    "curadoria-scenario-cafe-de-estrada-no-cerrado",
    "scenario",
    "Café de estrada no cerrado",
    "a modest roadside café in the Brazilian cerrado, red earth around concrete tables, a hand-painted menu under a metal awning and twisted trees marking the immense horizon",
    "Cerrado",
    "Contemporânea",
    5,
    "Parada modesta cercada por vermelho e horizonte seco."
  ],
  [
    "curadoria-scenario-patio-de-escola-de-samba",
    "scenario",
    "Pátio de escola de samba",
    "an empty samba school rehearsal court before opening, stacked drums beside painted bleachers, rolled carnival banners and a single shaft of light crossing the polished floor",
    "Cultura brasileira",
    "Contemporânea",
    5,
    "Quadra vazia com cores e instrumentos armazenados."
  ],
  [
    "curadoria-scenario-estacao-de-trem-tomada-por-capim",
    "scenario",
    "Estação de trem tomada por capim",
    "a disused rural railway station overtaken by tall grass, faded tiles around the ticket window, rusted tracks disappearing into shrubs and swallows nesting beneath the platform roof",
    "Ruína",
    "Atemporal",
    5,
    "Ruína ferroviária sendo recuperada pela vegetação."
  ],
  [
    "curadoria-scenario-mercado-em-anel-orbital",
    "scenario",
    "Mercado em anel orbital",
    "a covered market curving through the inner ring of an orbital station, modular stalls beneath transparent ribs, produce in magnetic trays and the planet visible beyond the concourse",
    "Ficção científica",
    "Futuro distante",
    5,
    "Comércio movimentado dentro de uma estrutura espacial."
  ],
  [
    "curadoria-scenario-aldeia-no-casco-de-uma-nave",
    "scenario",
    "Aldeia no casco de uma nave",
    "a small village built across the hull of a grounded interstellar ship, vegetable gardens between antenna arrays, fabric walkways joining cabins and laundry moving in artificial gravity",
    "Ficção científica",
    "Futuro distante",
    5,
    "Moradias construídas sobre uma espaçonave desativada."
  ],
  [
    "curadoria-scenario-canion-que-respira-nuvens",
    "scenario",
    "Cânion que respira nuvens",
    "a deep sandstone canyon inhaling and releasing slow rivers of cloud, pale mist spilling over layered ledges while distant rock arches emerge and vanish",
    "Paisagem fantástica",
    "Atemporal",
    5,
    "Formação rochosa atravessada por névoa em movimento."
  ],
  [
    "curadoria-scenario-praia-de-vidro-negro",
    "scenario",
    "Praia de vidro negro",
    "a shoreline of smooth black volcanic glass, fragmented reflections beneath shallow tide pools, white sea foam tracing the edges and basalt cliffs disappearing into cold mist",
    "Paisagem natural",
    "Atemporal",
    5,
    "Litoral mineral com espuma sobre superfícies escuras."
  ],
  [
    "curadoria-scenario-floresta-de-arvores-metalicas",
    "scenario",
    "Floresta de árvores metálicas",
    "a forest of trees formed from brushed copper trunks and thin perforated metal leaves, soft light filtering through mechanical branches and moss growing around buried cables",
    "Ficção científica",
    "Futuro próximo",
    5,
    "Bosque futurista de troncos e folhas industriais."
  ],
  [
    "curadoria-scenario-biblioteca-em-caverna-de-sal",
    "scenario",
    "Biblioteca em caverna de sal",
    "a library carved into a vast salt cavern, wooden galleries following the mineral walls, translucent crystals around reading lamps and books protected behind glass cabinets",
    "Interior fantástico",
    "Atemporal",
    5,
    "Acervo instalado entre paredes minerais luminosas."
  ],
  [
    "curadoria-scenario-restaurante-no-guindaste-portuario",
    "scenario",
    "Restaurante no guindaste portuário",
    "a tiny restaurant built into the cabin and upper platform of a harbor crane, intimate tables behind wide glass panels, cargo ships below and rigging crossing the evening sky",
    "Arquitetura",
    "Futuro próximo",
    5,
    "Sala de jantar suspensa na estrutura do porto."
  ],
  [
    "curadoria-scenario-hotel-de-observacao-de-baleias",
    "scenario",
    "Hotel de observação de baleias",
    "a low timber whale-watching hotel on a rugged coast, quiet observation decks facing the open sea, wind-bent grasses around the cabins and binocular stands along the railing",
    "Arquitetura",
    "Contemporânea",
    5,
    "Hospedagem baixa voltada ao oceano aberto."
  ],
  [
    "curadoria-scenario-cinema-de-bairro-em-reforma",
    "scenario",
    "Cinema de bairro em reforma",
    "a neighborhood cinema midway through renovation, rows of seats protected by canvas, half-restored art deco walls, a ladder beneath the screen and afternoon dust in the projector beam",
    "Interior urbano",
    "Anos 1990",
    5,
    "Sala antiga entre poeira, pintura e nostalgia."
  ],
  [
    "curadoria-scenario-piscina-publica-no-inverno",
    "scenario",
    "Piscina pública no inverno",
    "an empty outdoor public swimming pool in winter, pale water beneath a gray sky, stacked plastic chairs, leafless trees beyond the tiled fence and steam rising from a maintenance vent",
    "Espaço público",
    "Contemporânea",
    5,
    "Espaço recreativo vazio sob céu frio."
  ],
  [
    "curadoria-scenario-padaria-antes-do-amanhecer",
    "scenario",
    "Padaria antes do amanhecer",
    "a small bakery working before dawn, flour suspended in warm light, trays of unbaked bread on wooden racks and the dark empty street visible through a fogged front window",
    "Interior urbano",
    "Contemporânea",
    5,
    "Cozinha iluminada enquanto a rua ainda dorme."
  ],
  [
    "curadoria-scenario-estacionamento-transformado-em-horta",
    "scenario",
    "Estacionamento transformado em horta",
    "a multistory parking garage converted into a community farm, planting beds between faded parking lines, trellises around concrete columns and rainwater pipes feeding irrigation channels",
    "Futuro urbano",
    "Futuro próximo",
    5,
    "Agricultura comunitária ocupando uma estrutura de concreto."
  ],
  [
    "curadoria-scenario-mirante-sobre-cidade-flutuante",
    "scenario",
    "Mirante sobre cidade flutuante",
    "a narrow observation deck overlooking a city of tethered floating buildings, cloud banks passing between suspended streets and distant airships following marked aerial lanes",
    "Paisagem fantástica",
    "Futuro distante",
    5,
    "Plataforma de observação acima de nuvens e edifícios."
  ],
  [
    "curadoria-scenario-tunel-de-vento-botanico",
    "scenario",
    "Túnel de vento botânico",
    "a botanical wind tunnel with rows of flexible trees anchored in test beds, sensors among the leaves, translucent airflow ribbons and researchers' markings on a glass observation wall",
    "Ciência",
    "Futuro próximo",
    5,
    "Laboratório vegetal atravessado por correntes de ar."
  ],
  [
    "curadoria-scenario-laboratorio-em-barco-de-pesca",
    "scenario",
    "Laboratório em barco de pesca",
    "a compact marine laboratory fitted inside a working fishing boat, sample coolers beside nets, microscopes bolted to a wooden bench and charts weighted down near the open cabin door",
    "Ciência",
    "Contemporânea",
    5,
    "Pesquisa improvisada em uma embarcação de trabalho."
  ],
  [
    "curadoria-scenario-casa-suspensa-em-desfiladeiro",
    "scenario",
    "Casa suspensa em desfiladeiro",
    "a small timber and steel house suspended across a narrow gorge, a footbridge leading to its entrance, water far below and warm interior windows contrasting with sheer stone walls",
    "Arquitetura",
    "Futuro próximo",
    5,
    "Moradia mínima apoiada entre paredes de rocha."
  ],
  [
    "curadoria-scenario-vilarejo-em-lago-congelado",
    "scenario",
    "Vilarejo em lago congelado",
    "a temporary village arranged across a frozen lake, small insulated huts around communal fire pits, sled tracks linking the doors and forested hills beyond the ice",
    "Paisagem fria",
    "Contemporânea",
    5,
    "Casas temporárias organizadas sobre o gelo."
  ],
  [
    "curadoria-scenario-sauna-em-cratera-vulcanica",
    "scenario",
    "Sauna em cratera vulcânica",
    "a geothermal sauna built into the safe rim of a volcanic crater, dark cedar rooms above mineral terraces, controlled steam channels and distant lava glowing far below",
    "Arquitetura fantástica",
    "Futuro próximo",
    5,
    "Arquitetura geotérmica entre rocha e vapor."
  ],
  [
    "curadoria-scenario-terminal-de-balsas-na-neblina",
    "scenario",
    "Terminal de balsas na neblina",
    "a river ferry terminal wrapped in dense morning fog, empty covered gangways, dim amber lamps along the water and the silhouettes of boats appearing only at the dock",
    "Água",
    "Contemporânea",
    5,
    "Estrutura ribeirinha com silhuetas e luzes difusas."
  ],
  [
    "curadoria-scenario-aquario-abandonado-e-reforestado",
    "scenario",
    "Aquário abandonado e reforestado",
    "an abandoned public aquarium reclaimed by vegetation, cracked tanks filled with ferns instead of fish, rain entering through broken skylights and vines following old underwater tunnels",
    "Ruína",
    "Futuro próximo",
    5,
    "Tanques antigos ocupados por plantas e chuva."
  ],
  [
    "curadoria-scenario-teatro-em-mina-desativada",
    "scenario",
    "Teatro em mina desativada",
    "an intimate theater constructed inside a decommissioned mine, tiered seating following the rock chamber, a small timber stage and discreet lights revealing veins of metal in the walls",
    "Arquitetura",
    "Contemporânea",
    5,
    "Palco e arquibancada dentro de uma cavidade mineral."
  ],
  [
    "curadoria-scenario-escola-em-reservatorio-de-agua",
    "scenario",
    "Escola em reservatório de água",
    "a circular community school inside a converted water reservoir, desks around the curved wall, acoustic panels above a central courtyard and shallow reflecting channels where water once flowed",
    "Arquitetura",
    "Futuro próximo",
    5,
    "Sala de aula instalada em estrutura circular adaptada."
  ],
  [
    "curadoria-scenario-praca-de-alimentacao-subterranea",
    "scenario",
    "Praça de alimentação subterrânea",
    "a busy underground food court beneath a vertical megacity, compact kitchens along tiled tunnels, ventilation gardens overhead and directional signs disappearing into several levels",
    "Ficção científica",
    "Futuro próximo",
    5,
    "Corredores de comida sob uma cidade vertical."
  ],
  [
    "curadoria-scenario-banca-de-jornal-em-marte",
    "scenario",
    "Banca de jornal em Marte",
    "a tiny newsstand inside a Martian settlement corridor, printed local bulletins beside oxygen notices, a scratched pressure window showing red dust and a canvas stool behind the counter",
    "Ficção científica",
    "Futuro distante",
    5,
    "Pequeno comércio cotidiano em uma colônia marciana."
  ],
  [
    "curadoria-scenario-loja-de-consertos-no-fim-da-rua",
    "scenario",
    "Loja de consertos no fim da rua",
    "a narrow repair shop at the quiet end of a residential street, radios and lamps labeled with handwritten tags, drawers of spare parts and a green work light above the counter",
    "Interior urbano",
    "Anos 1980",
    5,
    "Comércio antigo cheio de peças e objetos identificados."
  ],
  [
    "curadoria-scenario-museu-de-objetos-perdidos",
    "scenario",
    "Museu de objetos perdidos",
    "a museum dedicated to lost objects, glass cases displaying single gloves keys umbrellas and unread letters, each object carefully lit and cataloged like a precious artifact",
    "Interior fantástico",
    "Atemporal",
    5,
    "Galeria organizada com itens cotidianos sem dono."
  ],
  [
    "curadoria-scenario-santuario-de-maquinas-antigas",
    "scenario",
    "Santuário de máquinas antigas",
    "a quiet sanctuary for obsolete machines, monumental typewriters and mechanical calculators arranged on stone plinths, soft skylights and small offerings of oil and polished gears",
    "Fantasia",
    "Atemporal",
    5,
    "Espaço contemplativo dedicado a engenharia obsoleta."
  ],
  [
    "curadoria-scenario-jardim-de-esculturas-de-sal",
    "scenario",
    "Jardim de esculturas de sal",
    "a garden of large salt sculptures on a mineral plain, delicate carved forms surrounded by shallow brine channels, wind-softened edges and a horizon of white crystals",
    "Paisagem natural",
    "Atemporal",
    5,
    "Paisagem branca esculpida pelo clima e pelo tempo."
  ],
  [
    "curadoria-scenario-passarela-entre-copas-de-arvores",
    "scenario",
    "Passarela entre copas de árvores",
    "a narrow suspended walkway passing through the canopy of immense rainforest trees, moss on the cables, epiphytes along the rails and layers of foliage disappearing below",
    "Floresta",
    "Contemporânea",
    5,
    "Caminho estreito imerso na verticalidade da floresta."
  ],
  [
    "curadoria-scenario-ponto-de-onibus-interestadual-1987",
    "scenario",
    "Ponto de ônibus interestadual, 1987",
    "a Brazilian intercity bus stop in 1987, a concrete bench beneath a faded route sign, advertisements painted on the wall, a bulky luggage scale and heat shimmering over the road",
    "Brasil histórico",
    "Anos 1980",
    5,
    "Parada rodoviária brasileira com materiais de época."
  ],
  [
    "curadoria-scenario-lagoa-de-lotus-luminosas",
    "scenario",
    "Lagoa de lótus luminosas",
    "a still lagoon covered with softly luminous lotus flowers, broad leaves holding drops of water, submerged stems visible in clear depths and gentle light gathering above the mist",
    "Paisagem fantástica",
    "Atemporal",
    5,
    "Água calma pontuada por flores de luz suave."
  ],
  [
    "curadoria-scenario-deserto-de-antenas-parabolicas",
    "scenario",
    "Deserto de antenas parabólicas",
    "an arid desert filled with enormous satellite dishes at different angles, white structures casting precise shadows on ochre gravel and a service road shrinking toward the horizon",
    "Ciência",
    "Contemporânea",
    5,
    "Campo tecnológico monumental em região árida."
  ],
  [
    "curadoria-scenario-porto-de-barcos-de-papel",
    "scenario",
    "Porto de barcos de papel",
    "a fantastical harbor where enormous folded-paper boats are moored to ordinary wooden piers, crisp origami hulls resisting the water and ropes holding their angular sails",
    "Fantasia",
    "Atemporal",
    5,
    "Marina fantasiosa ocupada por embarcações dobradas."
  ],
  [
    "curadoria-scenario-cozinha-comunitaria-apos-tempestade",
    "scenario",
    "Cozinha comunitária após tempestade",
    "a community kitchen being reorganized after a severe storm, stacked dry blankets beside large cooking pots, taped windows and neighbors' supplies arranged along a long shared table",
    "Espaço comunitário",
    "Contemporânea",
    5,
    "Espaço coletivo reorganizado para acolher vizinhos."
  ],
  [
    "curadoria-scenario-fabrica-de-gelo-no-tropico",
    "scenario",
    "Fábrica de gelo no trópico",
    "an early industrial ice factory in a tropical port, frost around heavy pipes inside, corrugated walls sweating in the heat and lush vegetation pressing against the loading yard",
    "Industrial",
    "Anos 1940",
    5,
    "Edifício industrial frio cercado por vegetação quente."
  ],
  [
    "curadoria-scenario-observatorio-em-cupula-de-barro",
    "scenario",
    "Observatório em cúpula de barro",
    "a small astronomical observatory built inside a domed rammed-earth structure, a brass telescope aligned through a narrow roof opening and star charts pinned to curved clay walls",
    "Ciência",
    "Atemporal",
    5,
    "Astronomia artesanal sob uma estrutura de terra."
  ],
  [
    "curadoria-scenario-estudio-de-radio-em-elevador",
    "scenario",
    "Estúdio de rádio em elevador",
    "a tiny radio broadcast studio installed inside an old freight elevator, microphone fixed to a folding arm, acoustic blankets on the walls and floor numbers changing behind the host's chair",
    "Interior urbano",
    "Anos 1970",
    5,
    "Cabine de transmissão em movimento entre andares."
  ],
  [
    "curadoria-scenario-loja-de-guarda-chuvas-submarina",
    "scenario",
    "Loja de guarda-chuvas submarina",
    "an underwater umbrella shop on a submerged pedestrian street, umbrellas displayed in dry pressurized cases, fish passing the storefront and air bubbles marking the entrance curtain",
    "Fantasia",
    "Atemporal",
    5,
    "Comércio absurdo e coerente em uma rua inundada."
  ],
  [
    "curadoria-scenario-livraria-em-vagao-de-metro",
    "scenario",
    "Livraria em vagão de metrô",
    "a bookshop inside a decommissioned subway carriage, shelves fitted around the windows, reading lamps above original seats and a narrow counter beside the driver's cabin",
    "Arquitetura",
    "Contemporânea",
    5,
    "Estantes e poltronas adaptadas a um vagão parado."
  ],
  [
    "curadoria-scenario-pista-de-patinacao-em-estufa",
    "scenario",
    "Pista de patinação em estufa",
    "an ice-skating rink built inside a botanical greenhouse, transparent roof panels above frosted glass, tropical plants behind insulated barriers and cold mist near the ice",
    "Arquitetura fantástica",
    "Futuro próximo",
    5,
    "Gelo cercado por plantas e estrutura de vidro."
  ],
  [
    "curadoria-scenario-salao-de-baile-em-usina-desligada",
    "scenario",
    "Salão de baile em usina desligada",
    "a ballroom arranged inside a decommissioned power station, a polished temporary dance floor between turbines, strings of warm lights and formal balconies around industrial machinery",
    "Interior",
    "Anos 1950",
    5,
    "Dança e ornamentação ocupando uma estrutura industrial."
  ],
  [
    "curadoria-scenario-passagem-atras-do-armario",
    "scenario",
    "Passagem atrás do armário",
    "a narrow hidden passage revealed behind a moved linen cupboard, handwritten measurements on the plaster, a trail of dust-free floorboards and soft daylight arriving from an impossible opening",
    "Mistério",
    "Atemporal",
    5,
    "Corredor secreto revelado por móveis deslocados."
  ],
  [
    "curadoria-scenario-campo-de-girassois-noturnos",
    "scenario",
    "Campo de girassóis noturnos",
    "a moonlit field of night-blooming sunflowers, dark petals edged with silver, every flower turned toward the moon and narrow irrigation channels reflecting the sky",
    "Paisagem fantástica",
    "Atemporal",
    5,
    "Plantas voltadas para a lua em vez do sol."
  ],
  [
    "curadoria-scenario-cachoeira-na-escadaria-urbana",
    "scenario",
    "Cachoeira na escadaria urbana",
    "a stream cascading down a long urban staircase between apartment buildings, water flowing beside handrails, small bridges at each landing and residents' plants along the edges",
    "Fantasia urbana",
    "Contemporânea",
    5,
    "Água descendo por degraus entre edifícios comuns."
  ],
  [
    "curadoria-scenario-jardim-de-inverno-em-estacao-espacial",
    "scenario",
    "Jardim de inverno em estação espacial",
    "a winter garden inside a space station, cold-tolerant plants under full-spectrum lamps, condensation on curved windows and a quiet bench facing the stars",
    "Ficção científica",
    "Futuro distante",
    5,
    "Estufa de plantas resistentes sob luz artificial."
  ],
  [
    "curadoria-scenario-enfermaria-de-navio-em-alto-mar",
    "scenario",
    "Enfermaria de navio em alto-mar",
    "a compact ship infirmary on the open sea, secured medicine cabinets, folded white blankets, a rain-streaked porthole and hanging instruments moving gently with the swell",
    "Interior",
    "Anos 1940",
    5,
    "Interior compacto balançando com a navegação."
  ],
  [
    "curadoria-scenario-capela-de-concreto-na-mata",
    "scenario",
    "Capela de concreto na mata",
    "a small raw-concrete chapel in dense Atlantic forest, a narrow roof opening casting light onto the simple altar and roots beginning to frame the exterior walls",
    "Arquitetura",
    "Anos 1970",
    5,
    "Geometria brutalista atravessada por luz e vegetação."
  ],
  [
    "curadoria-scenario-galeria-de-arte-em-conteineres",
    "scenario",
    "Galeria de arte em contêineres",
    "an art gallery assembled from repurposed shipping containers, connected rooms with cut steel doorways, large works beneath skylights and an outdoor sculpture court between stacked modules",
    "Arquitetura",
    "Contemporânea",
    5,
    "Circuito expositivo formado por módulos industriais."
  ],
  [
    "curadoria-scenario-sala-de-aula-na-encosta",
    "scenario",
    "Sala de aula na encosta",
    "an open-air classroom built on a terraced hillside, simple desks facing a chalkboard, a woven shade roof and deep valleys visible beyond the low stone wall",
    "Espaço comunitário",
    "Contemporânea",
    5,
    "Espaço escolar aberto à paisagem montanhosa."
  ],
  [
    "curadoria-scenario-miradouro-de-teleferico-em-tempestade",
    "scenario",
    "Miradouro de teleférico em tempestade",
    "a cable-car lookout station during an approaching storm, empty cabins swinging gently at the platform, wet steel railings and dense clouds racing through the valley below",
    "Montanha",
    "Contemporânea",
    5,
    "Estrutura elevada sob vento e nuvens carregadas."
  ],
  [
    "curadoria-scenario-museu-do-vento-no-litoral",
    "scenario",
    "Museu do vento no litoral",
    "an open-air wind museum on a coastal dune, suspended kites and fabric instruments moving above pale galleries, wind channels shaped in concrete and the sea beyond the roofline",
    "Arquitetura fantástica",
    "Futuro próximo",
    5,
    "Edifício aberto dedicado a correntes de ar e pipas."
  ],
  [
    "curadoria-scenario-cozinha-de-estacao-lunar",
    "scenario",
    "Cozinha de estação lunar",
    "a lunar habitat kitchen with sealed ingredient drawers, covered pans attached to induction rails, a small hydroponic herb shelf and gray regolith visible through a thick round window",
    "Ficção científica",
    "Futuro distante",
    5,
    "Espaço funcional com utensílios preparados para baixa gravidade."
  ],
  [
    "curadoria-style-modernismo-tropical",
    "style",
    "Modernismo tropical",
    "a tropical modernist visual language with bold simplified geometry, generous open spaces, organic shadows and architecture integrated with dense vegetation",
    "Movimentos",
    "Século XX reinventado",
    5,
    "Geometria moderna integrada a vegetação e clima."
  ],
  [
    "curadoria-style-expressionismo-mineral",
    "style",
    "Expressionismo mineral",
    "mineral expressionism with jagged rock-like contours, forceful directional marks, distorted perspective and surfaces that seem emotionally pressurized",
    "Experimental",
    "Atemporal",
    5,
    "Formas geológicas distorcidas por intensidade emocional."
  ],
  [
    "curadoria-style-surrealismo-domestico",
    "style",
    "Surrealismo doméstico",
    "domestic surrealism in which ordinary furniture utensils and rooms behave with quiet impossible logic, rendered with coherent lighting and precise scale shifts",
    "Surrealismo",
    "Atemporal",
    5,
    "Objetos cotidianos organizados de maneira impossível."
  ],
  [
    "curadoria-style-realismo-de-bairro",
    "style",
    "Realismo de bairro",
    "neighborhood realism with closely observed everyday gestures, worn but specific environments, natural proportions and unembellished human detail",
    "Realismo",
    "Contemporânea",
    5,
    "Cotidiano local retratado com afeto e precisão."
  ],
  [
    "curadoria-style-barroco-eletrico",
    "style",
    "Barroco elétrico",
    "electric baroque with dense ornamental framing, theatrical movement, deep spatial layering and sharp luminous accents cutting through elaborate dark forms",
    "Ornamental",
    "Atemporal",
    5,
    "Ornamentação dramática atravessada por energia contemporânea."
  ],
  [
    "curadoria-style-cubismo-de-feira",
    "style",
    "Cubismo de feira",
    "market-inspired cubism with crates fabrics scales and stalls fractured into overlapping geometric planes, multiple viewpoints held in a lively structured composition",
    "Geométrico",
    "Século XX reinventado",
    5,
    "Volumes de mercado desdobrados em múltiplos planos."
  ],
  [
    "curadoria-style-futurismo-artesanal",
    "style",
    "Futurismo artesanal",
    "handcrafted futurism combining dynamic repeated silhouettes and mechanical rhythms with visible stitching, tool marks, imperfect edges and tactile materials",
    "Futurismo",
    "Retrofuturo",
    5,
    "Velocidade e tecnologia com marcas manuais evidentes."
  ],
  [
    "curadoria-style-minimalismo-organico",
    "style",
    "Minimalismo orgânico",
    "organic minimalism with a restrained number of forms, soft asymmetrical curves, natural material variation and generous silence between visual elements",
    "Minimalismo",
    "Contemporânea",
    5,
    "Poucos elementos, curvas suaves e matéria natural."
  ],
  [
    "curadoria-style-maximalismo-de-arquivo",
    "style",
    "Maximalismo de arquivo",
    "archive maximalism with densely layered documents, labels, specimen cards, marginal notes and collected fragments arranged in an exuberant but readable visual system",
    "Colagem",
    "Atemporal",
    5,
    "Composição densa de registros, etiquetas e achados."
  ],
  [
    "curadoria-style-art-nouveau-botanico",
    "style",
    "Art nouveau botânico",
    "botanical art nouveau with long sinuous stems framing the scene, elegant asymmetry, stylized flowers and ornament that grows naturally from the subject's contours",
    "Ornamental",
    "Belle Époque",
    5,
    "Linhas sinuosas inspiradas em caules e flores."
  ],
  [
    "curadoria-style-concretismo-de-papel",
    "style",
    "Concretismo de papel",
    "paper concrete art with precise cut and folded planes, flat geometric relationships, physical edges and a composition based on structure rather than representation",
    "Geométrico",
    "Anos 1950",
    5,
    "Composição concreta construída com cortes e dobras."
  ],
  [
    "curadoria-style-abstracionismo-climatico",
    "style",
    "Abstracionismo climático",
    "weather abstraction with broad drifting masses, pressure-like gradients, abrupt directional gestures and forms suggesting wind humidity and approaching storms without literal depiction",
    "Abstrato",
    "Contemporânea",
    5,
    "Massas e gestos visuais inspirados por fenômenos do ar."
  ],
  [
    "curadoria-style-naturalismo-cientifico",
    "style",
    "Naturalismo científico",
    "scientific naturalism with meticulous anatomical observation, accurate surface structures, clearly described scale and habitat, and restrained illustrative staging",
    "Científico",
    "Século XIX reinventado",
    5,
    "Observação rigorosa de anatomia, habitat e materiais."
  ],
  [
    "curadoria-style-simbolismo-de-viagem",
    "style",
    "Simbolismo de viagem",
    "journey symbolism with roads thresholds maps and vessels used as layered metaphor, contemplative staging and visual details that suggest an inner passage",
    "Narrativo",
    "Atemporal",
    5,
    "Objetos e paisagens carregados de significado narrativo."
  ],
  [
    "curadoria-style-geometria-textil-digital",
    "style",
    "Geometria têxtil digital",
    "digital textile geometry with interlaced pixel-like threads, repeated woven modules, precise rhythmic patterns and subtle dimensional depth beneath the flat design",
    "Digital",
    "Futuro próximo",
    5,
    "Tramas tradicionais convertidas em estruturas digitais."
  ],
  [
    "curadoria-style-romantismo-industrial",
    "style",
    "Romantismo industrial",
    "industrial romanticism with monumental machinery, dramatic atmospheric scale, small human figures and an emotional reverence for labor smoke steel and engineered landscapes",
    "Narrativo",
    "Século XIX reinventado",
    5,
    "Grandiosidade emocional aplicada a máquinas e trabalho."
  ],
  [
    "curadoria-style-neoclassicismo-espacial",
    "style",
    "Neoclassicismo espacial",
    "spatial neoclassicism with balanced temple-like compositions, idealized figures, measured columns and arches translated into orbital architecture and pressure suits",
    "Ficção científica",
    "Futuro distante",
    5,
    "Equilíbrio clássico aplicado a cenários de órbita."
  ],
  [
    "curadoria-style-pos-impressionismo-urbano",
    "style",
    "Pós-impressionismo urbano",
    "urban post-impressionism with distinct directional brushwork, vibrating color relationships, recognizable city forms and an emphasis on emotional structure over optical accuracy",
    "Pintura",
    "Século XX reinventado",
    5,
    "Pinceladas estruturadas e cor expressiva na cidade."
  ],
  [
    "curadoria-style-fauvismo-de-sertao",
    "style",
    "Fauvismo de sertão",
    "sertão fauvism with bold non-naturalistic color, simplified dry branches and red earth, energetic shapes and a heat-driven emotional intensity",
    "Pintura brasileira",
    "Século XX reinventado",
    5,
    "Cor livre e intensa aplicada à paisagem de caatinga."
  ],
  [
    "curadoria-style-realismo-magico-fotografico",
    "style",
    "Realismo mágico fotográfico",
    "photographic magical realism with an otherwise observational naturalistic image and one precisely integrated impossible event presented without spectacle or visual exaggeration",
    "Narrativo",
    "Contemporânea",
    5,
    "Fotografia crível com um único desvio impossível."
  ],
  [
    "curadoria-style-fantasia-botanica-vitoriana",
    "style",
    "Fantasia botânica vitoriana",
    "Victorian botanical fantasy with elaborate invented plants, fine engraved detail, dark polished wood and glass specimens, and carefully arranged ornamental excess",
    "Fantasia",
    "Século XIX reinventado",
    5,
    "Plantas imaginárias com ornamentação do século XIX."
  ],
  [
    "curadoria-style-gotico-de-estacao-espacial",
    "style",
    "Gótico de estação espacial",
    "space-station gothic with soaring ribbed corridors, pointed structural arches, small illuminated figures, cold metallic stone-like surfaces and immense shadowed vertical space",
    "Ficção científica",
    "Futuro distante",
    5,
    "Arcos e verticalidade sombria em ambiente orbital."
  ],
  [
    "curadoria-style-noir-de-verao",
    "style",
    "Noir de verão",
    "summer noir with hard midday shadows, sun-bleached surfaces, tense glances and mystery conveyed through heat reflective glass and sharply isolated figures rather than night fog",
    "Cinematográfico",
    "Anos 1950",
    5,
    "Mistério de alto contraste sob sol e calor."
  ],
  [
    "curadoria-style-western-de-manguezal",
    "style",
    "Western de manguezal",
    "mangrove western aesthetics with lone figures crossing tidal flats, weathered boats instead of horses, wide frontier-like horizons and tense standoffs framed by twisted roots",
    "Cinematográfico",
    "Atemporal",
    5,
    "Linguagem de fronteira adaptada ao litoral alagado."
  ],
  [
    "curadoria-style-road-movie-estatico",
    "style",
    "Road movie estático",
    "static road-movie storytelling with paused vehicles, roadside objects, distant destinations and compositions that imply a long journey through stillness and accumulated travel wear",
    "Cinematográfico",
    "Anos 1970",
    5,
    "Sensação de viagem construída sem mostrar movimento."
  ],
  [
    "curadoria-style-documental-lirico",
    "style",
    "Documental lírico",
    "lyrical documentary imagery with candid natural moments, patient framing, authentic environmental detail and a quiet poetic rhythm that never hides the reality of the scene",
    "Documental",
    "Contemporânea",
    5,
    "Registro observacional com ritmo visual contemplativo."
  ],
  [
    "curadoria-style-fotorrealismo-de-memoria",
    "style",
    "Fotorrealismo de memória",
    "memory photorealism with sharply rendered central details, subtly inconsistent peripheral objects and gentle temporal distortions that feel recalled rather than directly observed",
    "Fotográfico",
    "Atemporal",
    5,
    "Precisão fotográfica suavizada por lembranças imprecisas."
  ],
  [
    "curadoria-style-impressionismo-de-chuva",
    "style",
    "Impressionismo de chuva",
    "rain impressionism with broken reflections, soft transient strokes, figures reduced to luminous silhouettes and a sense of weather captured in a fleeting instant",
    "Pintura",
    "Século XIX reinventado",
    5,
    "Luz e movimento dissolvidos por água atmosférica."
  ],
  [
    "curadoria-style-pontilhismo-de-cidade",
    "style",
    "Pontilhismo de cidade",
    "urban pointillism with buildings streets and figures assembled from distinct accumulated dots, optical color mixing and lively density across the entire cityscape",
    "Pintura",
    "Século XX reinventado",
    5,
    "Áreas urbanas construídas por pontos de cor acumulados."
  ],
  [
    "curadoria-style-constructivismo-de-cartaz",
    "style",
    "Constructivismo de cartaz",
    "poster constructivism with forceful diagonals, geometric blocks, integrated typographic space, dynamic figures and an immediate public-message visual hierarchy",
    "Design gráfico",
    "Anos 1920",
    5,
    "Diagonais e tipografia com propósito gráfico direto."
  ],
  [
    "curadoria-style-suprematismo-de-objetos",
    "style",
    "Suprematismo de objetos",
    "object suprematism reducing familiar tools and vessels to floating basic geometric relationships, sparse spatial tension and nonliteral compositional balance",
    "Geométrico",
    "Anos 1920",
    5,
    "Utensílios reduzidos a relações geométricas essenciais."
  ],
  [
    "curadoria-style-de-stijl-domestico",
    "style",
    "De Stijl doméstico",
    "domestic De Stijl composition with orthogonal partitions, primary-color planes, household objects disciplined into a grid and small asymmetries preserving everyday warmth",
    "Design gráfico",
    "Anos 1920",
    5,
    "Grade primária aplicada a móveis e espaços comuns."
  ],
  [
    "curadoria-style-art-deco-costeiro",
    "style",
    "Art déco costeiro",
    "coastal art deco with streamlined geometric ornament, stepped silhouettes, nautical motifs, polished maritime materials and an elegant sense of forward motion",
    "Ornamental",
    "Anos 1930",
    5,
    "Elegância geométrica associada a portos e oceanos."
  ],
  [
    "curadoria-style-kitsch-de-sala-de-estar",
    "style",
    "Kitsch de sala de estar",
    "living-room kitsch with sincerely arranged decorative excess, clashing floral patterns, souvenir figurines, glossy surfaces and an affectionate rather than ironic attention to detail",
    "Cotidiano",
    "Anos 1970",
    5,
    "Excesso afetivo de enfeites, estampas e lembranças."
  ],
  [
    "curadoria-style-estetica-de-manual-tecnico",
    "style",
    "Estética de manual técnico",
    "technical-manual aesthetics with exploded views, numbered callouts, clean sectional diagrams, consistent line weights and instructional spatial organization",
    "Ilustração técnica",
    "Anos 1960",
    5,
    "Diagramas, cortes e instruções visuais precisas."
  ],
  [
    "curadoria-style-colagem-de-dicionario",
    "style",
    "Colagem de dicionário",
    "dictionary collage with clipped definitions, mismatched type sizes, torn printed illustrations and overlapping verbal fragments that create a second visual narrative",
    "Colagem",
    "Anos 1960",
    5,
    "Definições e fragmentos impressos formando novas cenas."
  ],
  [
    "curadoria-style-herbario-impossivel",
    "style",
    "Herbário impossível",
    "an impossible herbarium illustration with rigorously drawn invented specimens, labeled roots and cross-sections, believable botanical anatomy and understated notes on impossible behavior",
    "Científico",
    "Século XIX reinventado",
    5,
    "Ilustração científica de espécies que não existem."
  ],
  [
    "curadoria-style-conto-de-fadas-sombrio",
    "style",
    "Conto de fadas sombrio",
    "dark fairy-tale illustration with intricate forest detail, deceptively charming figures, unsettling symbolic objects and a clear sense that wonder and danger share the same space",
    "Narrativo",
    "Atemporal",
    5,
    "Encantamento narrativo com ameaça contida e floresta profunda."
  ],
  [
    "curadoria-style-realismo-social-de-interior",
    "style",
    "Realismo social de interior",
    "interior social realism with unidealized domestic spaces, visible labor, ordinary gestures, restrained natural light and close attention to the social meaning of objects",
    "Realismo",
    "Século XX",
    5,
    "Vida doméstica e trabalho retratados sem idealização."
  ],
  [
    "curadoria-style-utopia-modernista-brasileira",
    "style",
    "Utopia modernista brasileira",
    "Brazilian modernist utopia with sweeping concrete curves, generous collective spaces, brise-soleil patterns, lush planted interiors and an optimistic humane architectural scale",
    "Arquitetura",
    "Futuro imaginado nos anos 1960",
    5,
    "Arquitetura otimista entre paisagem e vida coletiva."
  ],
  [
    "curadoria-style-retrofuturismo-de-eletrodomesticos",
    "style",
    "Retrofuturismo de eletrodomésticos",
    "appliance retrofuturism with rounded chrome household machines, chunky controls, optimistic utility diagrams and a domestic future imagined through mid-century product design",
    "Retrofuturo",
    "Futuro imaginado nos anos 1950",
    5,
    "Futuro doméstico imaginado pelo design de antigas cozinhas."
  ],
  [
    "curadoria-style-fantasia-de-papel-dobrado",
    "style",
    "Fantasia de papel dobrado",
    "folded-paper fantasy with crisp origami structures, layered cardstock landscapes, visible creases and tiny fantastical scenes emerging from the geometry of the folds",
    "Papel",
    "Contemporânea",
    5,
    "Mundo impossível construído com dobras e volumes de papel."
  ],
  [
    "curadoria-style-expressionismo-de-tinta-sumie",
    "style",
    "Expressionismo de tinta sumiê",
    "sumi ink expressionism with economical black gestures, varied dry and loaded brush marks, expansive untouched paper and emotional force concentrated in a few strokes",
    "Tinta",
    "Atemporal",
    5,
    "Gestos de nanquim entre controle e intensidade."
  ],
  [
    "curadoria-style-minimalismo-de-sombra",
    "style",
    "Minimalismo de sombra",
    "shadow minimalism with sparse physical objects, long precisely shaped shadows carrying most of the narrative, empty surfaces and rigorous control of negative space",
    "Minimalismo",
    "Contemporânea",
    5,
    "Poucos objetos definidos principalmente por suas projeções."
  ],
  [
    "curadoria-style-barroco-de-feira-livre",
    "style",
    "Barroco de feira livre",
    "open-air-market baroque with abundant produce arranged like theatrical still life, swirling fabrics, deep layered crowds and dramatic diagonals of light through canvas stalls",
    "Ornamental",
    "Atemporal",
    5,
    "Dramaturgia ornamental com frutas, lonas e multidões."
  ],
  [
    "curadoria-style-surrealismo-arqueologico",
    "style",
    "Surrealismo arqueológico",
    "archaeological surrealism with meticulous excavation layers containing anachronistic objects, carefully measured ruins and impossible artifacts presented with scholarly seriousness",
    "Surrealismo",
    "Atemporal",
    5,
    "Escavações revelando objetos que desafiam a cronologia."
  ],
  [
    "curadoria-style-arquivo-meteorologico",
    "style",
    "Arquivo meteorológico",
    "meteorological-archive aesthetics with isobar lines, instrument readings, dated weather cards, translucent map overlays and atmospheric forms organized as collected evidence",
    "Ilustração técnica",
    "Anos 1960",
    5,
    "Linguagem visual de mapas, registros e instrumentos do tempo."
  ],
  [
    "curadoria-style-cubo-futurismo-de-oficina",
    "style",
    "Cubo-futurismo de oficina",
    "workshop cubo-futurism with tools benches and working bodies fractured into dynamic angular planes, repeated mechanical motion and tactile metal textures within the geometry",
    "Geométrico",
    "Anos 1910 reinventados",
    5,
    "Ferramentas e movimento desdobrados em geometria dinâmica."
  ],
  [
    "curadoria-style-naturalismo-de-microescala",
    "style",
    "Naturalismo de microescala",
    "micro-scale naturalism with moss soil fibers and tiny organisms rendered as immense landscapes, accurate microscopic textures and a convincing sense of miniature scale",
    "Científico",
    "Contemporânea",
    5,
    "Pequenos ecossistemas tratados como paisagens monumentais."
  ],
  [
    "curadoria-style-pop-art-de-supermercado",
    "style",
    "Pop art de supermercado",
    "supermarket pop art with repeated packages, flat commercial shapes, bold registration offsets, shelf-label rhythms and everyday products elevated into graphic icons",
    "Pop",
    "Anos 1960",
    5,
    "Embalagens e repetição comercial em linguagem gráfica intensa."
  ],
  [
    "curadoria-mood-assombro-sereno",
    "mood",
    "Assombro sereno",
    "a serene sense of awe, quiet wonder before something vast and unfamiliar, open body language and an atmosphere of attentive discovery",
    "Contemplação",
    "",
    5,
    "Admiração diante do desconhecido, sem medo."
  ],
  [
    "curadoria-mood-urgencia-contida",
    "mood",
    "Urgência contida",
    "contained urgency, purposeful gestures, compressed pauses and the feeling that every second matters while outward order is still maintained",
    "Tensão",
    "",
    5,
    "Pressa intensa mantida sob controle aparente."
  ],
  [
    "curadoria-mood-familiaridade-estranha",
    "mood",
    "Familiaridade estranha",
    "uncanny familiarity, an ordinary scene made emotionally unsettling by one slight displacement, as if a remembered place has returned subtly altered",
    "Mistério",
    "",
    5,
    "Algo reconhecível que parece sutilmente fora do lugar."
  ],
  [
    "curadoria-mood-alegria-discreta",
    "mood",
    "Alegria discreta",
    "discreet joy, restrained smiles, relaxed shoulders and small warm moments of pleasure that feel genuine rather than performative",
    "Emoção",
    "",
    5,
    "Felicidade pequena expressa sem celebração grandiosa."
  ],
  [
    "curadoria-mood-solidao-acolhedora",
    "mood",
    "Solidão acolhedora",
    "welcoming solitude, a comfortable self-chosen stillness, personal space and quiet independence without abandonment or emotional desolation",
    "Contemplação",
    "",
    5,
    "Estar sozinho com conforto, espaço e autonomia."
  ],
  [
    "curadoria-mood-suspense-cotidiano",
    "mood",
    "Suspense cotidiano",
    "everyday suspense, routine gestures interrupted by the expectation of news, a paused movement and ordinary objects acquiring sudden narrative importance",
    "Tensão",
    "",
    5,
    "Expectativa de mistério em uma situação comum."
  ],
  [
    "curadoria-mood-reverencia",
    "mood",
    "Reverência",
    "reverence, humbled posture, careful movement and a contemplative emotional register inspired by something sacred ancestral or immensely larger than the individual",
    "Contemplação",
    "",
    5,
    "Respeito profundo diante de algo maior que o indivíduo."
  ],
  [
    "curadoria-mood-vertigem-controlada",
    "mood",
    "Vertigem controlada",
    "controlled vertigo, exhilarating instability held within deliberate movement, heightened spatial awareness and a thrilling but manageable loss of balance",
    "Intensidade",
    "",
    5,
    "Desequilíbrio emocionante sem perda total de domínio."
  ],
  [
    "curadoria-mood-cansaco-poetico",
    "mood",
    "Cansaço poético",
    "poetic weariness, slowed gestures, heavy eyelids and meaningful pauses, with dignity and tenderness in the visible need for rest",
    "Emoção",
    "",
    5,
    "Exaustão honesta com beleza nas pequenas pausas."
  ],
  [
    "curadoria-mood-otimismo-resiliente",
    "mood",
    "Otimismo resiliente",
    "resilient optimism, visible signs of hardship met by practical gestures of repair, mutual support and a credible forward-looking emotional energy",
    "Social",
    "",
    5,
    "Esperança construída apesar de sinais de dificuldade."
  ],
  [
    "curadoria-mood-melancolia-solar",
    "mood",
    "Melancolia solar",
    "sunlit melancholy, a gentle emotional ache existing beneath bright pleasant surroundings, warm beauty contrasted with distant gazes and unspoken absence",
    "Emoção",
    "",
    5,
    "Tristeza leve sob luz clara e ambiente bonito."
  ],
  [
    "curadoria-mood-intimidade-publica",
    "mood",
    "Intimidade pública",
    "public intimacy, a private emotional exchange unfolding within a busy shared space, subtle gestures creating a small protected world between people",
    "Social",
    "",
    5,
    "Gestos reservados compartilhados em espaço movimentado."
  ],
  [
    "curadoria-mood-euforia-coletiva",
    "mood",
    "Euforia coletiva",
    "collective euphoria, synchronized excitement, spontaneous embraces and a crowd carried by the same joyful emotional peak",
    "Celebração",
    "",
    5,
    "Explosão de entusiasmo compartilhado por um grupo."
  ],
  [
    "curadoria-mood-calma-vigilante",
    "mood",
    "Calma vigilante",
    "vigilant calm, relaxed but attentive posture, measured breathing and quiet readiness, with no panic despite close observation of the surroundings",
    "Tensão",
    "",
    5,
    "Tranquilidade atenta, pronta para responder ao entorno."
  ],
  [
    "curadoria-mood-deslumbre-infantil",
    "mood",
    "Deslumbre infantil",
    "childlike wonder, unguarded curiosity and delighted astonishment at ordinary discoveries, expressed through spontaneous attention rather than exaggerated excitement",
    "Emoção",
    "",
    5,
    "Descoberta imediata do mundo com espanto genuíno."
  ],
  [
    "curadoria-mood-desconforto-elegante",
    "mood",
    "Desconforto elegante",
    "elegant discomfort, polished appearances and controlled etiquette barely concealing social tension, uncertain glances and carefully measured distance",
    "Social",
    "",
    5,
    "Tensão social contida por postura e boas maneiras."
  ],
  [
    "curadoria-mood-tristeza-quieta",
    "mood",
    "Tristeza quieta",
    "quiet sadness, inward grief expressed through still hands, lowered attention and small pauses, without theatrical tears or melodramatic gesture",
    "Emoção",
    "",
    5,
    "Pesar recolhido, sem dramatização explícita."
  ],
  [
    "curadoria-mood-alivio-depois-da-chuva",
    "mood",
    "Alívio depois da chuva",
    "relief after rain, renewed breathing space, tentative openness and the emotional release of a threshold passed as the environment begins to clear",
    "Contemplação",
    "",
    5,
    "Sensação de abertura após pressão atmosférica."
  ],
  [
    "curadoria-mood-curiosidade-cautelosa",
    "mood",
    "Curiosidade cautelosa",
    "cautious curiosity, a careful forward lean, attentive eyes and the desire to approach something unknown while maintaining a clear sense of self-protection",
    "Descoberta",
    "",
    5,
    "Desejo de explorar sem abandonar a prudência."
  ],
  [
    "curadoria-mood-nostalgia-futura",
    "mood",
    "Nostalgia futura",
    "future nostalgia, a tender longing for people places and possibilities not yet experienced, combining hopeful anticipation with the emotional texture of memory",
    "Temporal",
    "",
    5,
    "Saudade por um tempo que ainda não aconteceu."
  ],
  [
    "curadoria-mood-misterio-amigavel",
    "mood",
    "Mistério amigável",
    "friendly mystery, intriguing unanswered details presented with openness and playfulness, inviting investigation without dread or danger",
    "Mistério",
    "",
    5,
    "Curiosidade e segredo sem ameaça ou hostilidade."
  ],
  [
    "curadoria-mood-solenidade-domestica",
    "mood",
    "Solenidade doméstica",
    "domestic solemnity, ordinary household rituals performed with ceremonial care, deliberate gestures and quiet emotional significance attached to humble objects",
    "Cotidiano",
    "",
    5,
    "Pequenos rituais diários tratados com grande importância."
  ],
  [
    "curadoria-mood-humor-absurdo",
    "mood",
    "Humor absurdo",
    "absurd humor, a deadpan emotional register in which illogical events are treated with complete seriousness, creating comedy through incongruity rather than exaggerated expressions",
    "Humor",
    "",
    5,
    "Riso provocado por incoerência apresentada com seriedade."
  ],
  [
    "curadoria-mood-furia-contida",
    "mood",
    "Fúria contida",
    "contained fury, tightly restrained anger visible in a set jaw, precise movements and compressed energy, with confrontation imminent but not yet released",
    "Intensidade",
    "",
    5,
    "Raiva intensa comprimida em gestos mínimos."
  ],
  [
    "curadoria-mood-ternura-aspera",
    "mood",
    "Ternura áspera",
    "rough tenderness, sincere care conveyed through awkward practical gestures, guarded expressions and weathered hands helping without sentimental display",
    "Emoção",
    "",
    5,
    "Cuidado sincero expresso por pessoas pouco delicadas."
  ],
  [
    "curadoria-mood-encantamento-cientifico",
    "mood",
    "Encantamento científico",
    "scientific enchantment, focused amazement before observable phenomena, curious faces and instruments revealing a world more extraordinary than expected",
    "Descoberta",
    "",
    5,
    "Fascínio diante de fenômenos observáveis e mensuráveis."
  ],
  [
    "curadoria-mood-desamparo-urbano",
    "mood",
    "Desamparo urbano",
    "urban helplessness, emotional exposure within an indifferent built environment, small figures navigating systems and distances that feel larger than their capacity",
    "Social",
    "",
    5,
    "Sensação de isolamento em meio à estrutura da cidade."
  ],
  [
    "curadoria-mood-pertencimento",
    "mood",
    "Pertencimento",
    "belonging, relaxed mutual recognition, shared rituals and open spatial arrangements that communicate being accepted without needing to perform",
    "Social",
    "",
    5,
    "Conforto de ser reconhecido como parte de um grupo."
  ],
  [
    "curadoria-mood-liberdade-precaria",
    "mood",
    "Liberdade precária",
    "precarious freedom, exhilarating openness tempered by visible uncertainty, improvised choices and the emotional knowledge that independence has a cost",
    "Intensidade",
    "",
    5,
    "Sensação de expansão acompanhada por risco real."
  ],
  [
    "curadoria-mood-contemplacao-vasta",
    "mood",
    "Contemplação vasta",
    "vast contemplation, unhurried attention before immense space, reduced gesture and the feeling of thought expanding beyond immediate concerns",
    "Contemplação",
    "",
    5,
    "Silêncio reflexivo diante de grande escala."
  ],
  [
    "curadoria-mood-intensidade-ritual",
    "mood",
    "Intensidade ritual",
    "ritual intensity, concentrated shared focus, repeated symbolic gestures and an atmosphere in which every movement carries accumulated meaning",
    "Ritual",
    "",
    5,
    "Energia concentrada em gestos repetidos e simbólicos."
  ],
  [
    "curadoria-mood-suspensao-do-tempo",
    "mood",
    "Suspensão do tempo",
    "suspended time, a held instant in which gestures and surroundings feel temporarily paused, emotional attention stretched between what just happened and what comes next",
    "Temporal",
    "",
    5,
    "Instante em que tudo parece parar por um momento."
  ],
  [
    "curadoria-mood-confianca-silenciosa",
    "mood",
    "Confiança silenciosa",
    "silent confidence, grounded posture, economical gestures and calm direct attention, communicating capability without boasting or aggression",
    "Emoção",
    "",
    5,
    "Segurança demonstrada por presença, não por exibição."
  ],
  [
    "curadoria-mood-inquietacao-eletrica",
    "mood",
    "Inquietação elétrica",
    "electric restlessness, quick shifts of attention, kinetic nervous energy and the sensation that stillness cannot hold for more than a moment",
    "Intensidade",
    "",
    5,
    "Nervosismo acelerado com energia prestes a escapar."
  ],
  [
    "curadoria-mood-leveza-matinal",
    "mood",
    "Leveza matinal",
    "morning lightness, unhurried beginnings, relaxed movement and the fresh emotional possibility of a day not yet shaped by decisions",
    "Contemplação",
    "",
    5,
    "Sensação limpa de começo e possibilidades abertas."
  ],
  [
    "curadoria-mood-saudade-de-lugar-inventado",
    "mood",
    "Saudade de lugar inventado",
    "longing for an invented place, wistful attachment to an imagined home, familiar emotional details applied to somewhere that has never physically existed",
    "Temporal",
    "",
    5,
    "Nostalgia por um espaço que só existe na imaginação."
  ],
  [
    "curadoria-mood-dignidade-no-trabalho",
    "mood",
    "Dignidade no trabalho",
    "dignity in labor, focused effort, competent hands and an unsentimental sense of pride in useful work, with neither romanticization nor diminishment",
    "Social",
    "",
    5,
    "Respeito pela concentração e pelo valor do ofício."
  ],
  [
    "curadoria-mood-concentracao-artesanal",
    "mood",
    "Concentração artesanal",
    "artisanal concentration, absorbed attention on material and hand movement, a narrowed quiet world in which precision and touch matter more than distraction",
    "Cotidiano",
    "",
    5,
    "Atenção total ao gesto manual e ao material."
  ],
  [
    "curadoria-mood-despedida-serena",
    "mood",
    "Despedida serena",
    "serene farewell, affectionate acceptance of departure, unhurried final gestures and the calm sadness of leaving without conflict or abandonment",
    "Emoção",
    "",
    5,
    "Separação aceita com carinho e tranquilidade."
  ],
  [
    "curadoria-mood-desobediencia-alegre",
    "mood",
    "Desobediência alegre",
    "joyful disobedience, playful rule-breaking, shared conspiratorial delight and a buoyant sense of freedom without cruelty or hostility",
    "Humor",
    "",
    5,
    "Ruptura de regras com leveza e espírito brincalhão."
  ],
  [
    "curadoria-composition-plano-holandes-sutil",
    "composition",
    "Plano holandês sutil",
    "a subtly tilted Dutch angle, approximately eight degrees off horizontal, preserving a naturalistic scene while introducing restrained psychological instability",
    "Ângulo",
    "",
    5,
    "Inclinação discreta para introduzir instabilidade."
  ],
  [
    "curadoria-composition-travelling-lateral-continuo",
    "composition",
    "Travelling lateral contínuo",
    "a continuous lateral tracking shot moving parallel to the subject, maintaining consistent distance while foreground and background slide at different speeds",
    "Movimento",
    "",
    5,
    "Câmera acompanha o sujeito em movimento paralelo."
  ],
  [
    "curadoria-composition-enquadramento-pela-janela",
    "composition",
    "Enquadramento pela janela",
    "frame the scene through a window, using the sill and side frames as a clear architectural border while keeping the main subject readable beyond the glass",
    "Enquadramento",
    "",
    5,
    "A cena observada através de uma moldura arquitetônica."
  ],
  [
    "curadoria-composition-profundidade-em-tres-planos",
    "composition",
    "Profundidade em três planos",
    "compose three distinct depth planes with a foreground object, the principal subject at middle distance and a meaningful background element, all spatially legible",
    "Profundidade",
    "",
    5,
    "Elementos nítidos distribuídos em distâncias diferentes."
  ],
  [
    "curadoria-composition-perspectiva-de-corredor",
    "composition",
    "Perspectiva de corredor",
    "a corridor perspective with walls floor and ceiling forming strong converging lines, the subject placed along the visual path rather than simply centered",
    "Perspectiva",
    "",
    5,
    "Linhas convergentes conduzindo o olhar pela passagem."
  ],
  [
    "curadoria-composition-composicao-em-arco",
    "composition",
    "Composição em arco",
    "arrange the principal visual elements along a broad arc around the focal subject, creating a curved reading path and balanced open space inside the arc",
    "Composição",
    "",
    5,
    "Elementos organizados em curva ao redor do foco."
  ],
  [
    "curadoria-composition-espaco-negativo-superior",
    "composition",
    "Espaço negativo superior",
    "place the subject low in the frame with generous uncluttered negative space above, using the empty upper field to emphasize scale anticipation or isolation",
    "Espaço negativo",
    "",
    5,
    "Grande área vazia acima do elemento principal."
  ],
  [
    "curadoria-composition-linha-de-fuga-deslocada",
    "composition",
    "Linha de fuga deslocada",
    "use an off-center vanishing point near one edge of the frame, with architectural or environmental lines guiding attention diagonally toward the subject",
    "Perspectiva",
    "",
    5,
    "Convergência fora do centro para criar percurso lateral."
  ],
  [
    "curadoria-composition-detalhe-das-maos",
    "composition",
    "Detalhe das mãos",
    "a tight composition focused on the subject's hands and the object being handled, excluding the face while preserving material detail and the intention of the gesture",
    "Detalhe",
    "",
    5,
    "A narrativa concentrada em gestos e objetos manipulados."
  ],
  [
    "curadoria-composition-panoramica-vertical",
    "composition",
    "Panorâmica vertical",
    "a tall vertical panorama that reveals the environment from ground level to its highest point, using stacked spatial layers and an elongated sense of scale",
    "Formato",
    "",
    5,
    "Formato alto explorando escala de baixo para cima."
  ],
  [
    "curadoria-composition-grande-angular-proxima",
    "composition",
    "Grande angular próxima",
    "a close wide-angle composition with the subject near the lens, slight natural perspective exaggeration and substantial environmental context still visible around them",
    "Lente",
    "",
    5,
    "Lente ampla perto do sujeito, com entorno evidente."
  ],
  [
    "curadoria-composition-ponto-de-vista-do-objeto",
    "composition",
    "Ponto de vista do objeto",
    "position the camera at the physical location of a key object in the scene, looking back toward the subject and making the object's surroundings part of the foreground",
    "Ponto de vista",
    "",
    5,
    "Câmera posicionada onde estaria um objeto da cena."
  ],
  [
    "curadoria-composition-vista-de-dentro-do-armario",
    "composition",
    "Vista de dentro do armário",
    "view the scene from inside a cupboard, with dark interior edges framing the open doorway and the subject visible in the brighter room beyond",
    "Ponto de vista",
    "",
    5,
    "Interior escuro observa a cena pela porta aberta."
  ],
  [
    "curadoria-composition-plano-picado-moderado",
    "composition",
    "Plano picado moderado",
    "a moderately high-angle shot looking down at roughly thirty degrees, revealing relationships between the subject and the ground without becoming a top-down view",
    "Ângulo",
    "",
    5,
    "Câmera elevada sem alcançar visão totalmente zenital."
  ],
  [
    "curadoria-composition-perfil-duplo-em-movimento",
    "composition",
    "Perfil duplo em movimento",
    "compose two subjects in profile moving through the frame, their facing directions and spacing creating a clear visual rhythm and narrative relationship",
    "Retrato",
    "",
    5,
    "Duas figuras laterais relacionadas por direção e ritmo."
  ],
  [
    "curadoria-composition-simetria-interrompida",
    "composition",
    "Simetria interrompida",
    "build an almost symmetrical composition and interrupt it with one intentionally displaced element, preserving overall order while creating a precise point of tension",
    "Composição",
    "",
    5,
    "Estrutura quase simétrica quebrada por um elemento."
  ],
  [
    "curadoria-composition-moldura-circular",
    "composition",
    "Moldura circular",
    "use a circular opening or rounded environmental structure as the primary frame, with the subject contained inside and peripheral areas naturally obscured",
    "Enquadramento",
    "",
    5,
    "Abertura redonda delimita a área principal da cena."
  ],
  [
    "curadoria-composition-reflexo-fragmentado-em-vitrine",
    "composition",
    "Reflexo fragmentado em vitrine",
    "compose through a shop window where reflected street fragments and the interior subject occupy separate readable zones, creating a layered but controlled double image",
    "Reflexo",
    "",
    5,
    "Vidro divide a cena entre interior e reflexo externo."
  ],
  [
    "curadoria-composition-multidao-em-padrao",
    "composition",
    "Multidão em padrão",
    "arrange a crowd as a visible pattern of repeated bodies and gestures, with one controlled variation directing attention to the principal subject",
    "Multidão",
    "",
    5,
    "Repetição de pessoas forma ritmo e orientação visual."
  ],
  [
    "curadoria-composition-isolamento-no-canto-do-quadro",
    "composition",
    "Isolamento no canto do quadro",
    "place a small subject in one far corner of the frame, surrounded by a large coherent empty field that emphasizes isolation without cropping the environment",
    "Espaço negativo",
    "",
    5,
    "Sujeito pequeno separado por espaço vazio ao redor."
  ],
  [
    "curadoria-composition-olhar-atraves-de-cortina",
    "composition",
    "Olhar através de cortina",
    "view the subject through a partially open curtain, using translucent fabric and its folds to reveal and conceal different portions of the scene",
    "Enquadramento",
    "",
    5,
    "Tecido parcial encobre e revela a cena por camadas."
  ],
  [
    "curadoria-composition-distancia-intima",
    "composition",
    "Distância íntima",
    "frame the subject at intimate conversational distance from upper chest upward, preserving natural facial proportions and a small amount of meaningful surrounding space",
    "Retrato",
    "",
    5,
    "Proximidade de retrato sem chegar ao close extremo."
  ],
  [
    "curadoria-composition-camera-na-altura-de-crianca",
    "composition",
    "Câmera na altura de criança",
    "place the camera at a child's eye height, keeping adult figures furniture and doorways naturally taller while maintaining a grounded horizontal perspective",
    "Ponto de vista",
    "",
    5,
    "Perspectiva baixa baseada na experiência de uma criança."
  ],
  [
    "curadoria-composition-camera-presa-ao-objeto",
    "composition",
    "Câmera presa ao objeto",
    "mount the visual viewpoint on a moving handheld object, showing the subject from the object's trajectory with nearby motion emphasized and the background shifting around it",
    "Movimento",
    "",
    5,
    "Ponto de vista se desloca junto com um item em uso."
  ],
  [
    "curadoria-composition-ombros-como-moldura",
    "composition",
    "Ombros como moldura",
    "use the shoulders of two nearby foreground figures as a soft frame around the principal subject, with the foreground bodies cropped and the central face fully readable",
    "Retrato",
    "",
    5,
    "Figuras próximas delimitam a visão do sujeito principal."
  ],
  [
    "curadoria-composition-panorama-em-camadas",
    "composition",
    "Panorama em camadas",
    "a wide panoramic composition organized into successive landscape bands, each layer distinct in scale and detail, leading the eye laterally and into depth",
    "Paisagem",
    "",
    5,
    "Paisagem ampla organizada por faixas de profundidade."
  ],
  [
    "curadoria-composition-escala-pelo-horizonte",
    "composition",
    "Escala pelo horizonte",
    "use a long uninterrupted horizon as the principal compositional line, placing the subject against it to establish scale and orient the surrounding space",
    "Escala",
    "",
    5,
    "Linha do horizonte evidencia a pequenez do sujeito."
  ],
  [
    "curadoria-composition-close-com-espaco-para-o-olhar",
    "composition",
    "Close com espaço para o olhar",
    "a close portrait with intentional lead room in the direction of the subject's gaze, cropping the opposite side more tightly while keeping the eyes sharp",
    "Retrato",
    "",
    5,
    "Rosto próximo recebe área livre na direção do olhar."
  ],
  [
    "curadoria-composition-figura-pequena-na-arquitetura",
    "composition",
    "Figura pequena na arquitetura",
    "compose a small human figure within a much larger architectural structure, using the figure as a precise scale reference while preserving the building's dominant geometry",
    "Escala",
    "",
    5,
    "Pessoa funciona como referência de escala do edifício."
  ],
  [
    "curadoria-composition-quadro-dentro-do-quadro",
    "composition",
    "Quadro dentro do quadro",
    "create a frame within the frame using an interior doorway, mirror or opening, aligning the secondary frame around the subject while retaining context in the outer frame",
    "Enquadramento",
    "",
    5,
    "Segunda moldura interna reforça o foco narrativo."
  ],
  [
    "curadoria-composition-deslocamento-em-paralaxe",
    "composition",
    "Deslocamento em paralaxe",
    "a parallax composition with clearly separated foreground subject and distant background, implying lateral camera motion through different relative displacements of each plane",
    "Movimento",
    "",
    5,
    "Planos se movem em velocidades diferentes na composição."
  ],
  [
    "curadoria-composition-composicao-em-zigue-zague",
    "composition",
    "Composição em zigue-zague",
    "arrange visual anchors in a zigzag reading path across the image, alternating left and right points of interest until the eye reaches the principal subject",
    "Composição",
    "",
    5,
    "Percurso visual alterna direções entre os elementos."
  ],
  [
    "curadoria-composition-diagonal-de-acao",
    "composition",
    "Diagonal de ação",
    "organize the action along a strong diagonal from one lower corner toward the opposite upper corner, using bodies and environmental lines to reinforce the direction",
    "Movimento",
    "",
    5,
    "Movimento principal atravessa a imagem em diagonal."
  ],
  [
    "curadoria-composition-sujeito-fora-do-eixo",
    "composition",
    "Sujeito fora do eixo",
    "place the principal subject well off the central axis and balance the composition with a quieter secondary element, preserving an intentional asymmetrical weight",
    "Composição",
    "",
    5,
    "Foco deslocado equilibra elementos secundários da cena."
  ],
  [
    "curadoria-composition-plano-geral-vertical",
    "composition",
    "Plano geral vertical",
    "a vertical wide shot showing the full height of the environment and the subject within it, prioritizing architectural or natural vertical scale over lateral breadth",
    "Escala",
    "",
    5,
    "Visão ampla em formato alto para espaços elevados."
  ],
  [
    "curadoria-composition-vista-elevada-de-multidao",
    "composition",
    "Vista elevada de multidão",
    "an elevated eye-level-to-balcony viewpoint over a crowd, high enough to reveal collective paths and group formations but not a direct aerial or top-down view",
    "Multidão",
    "",
    5,
    "Câmera acima das cabeças revela fluxos coletivos."
  ],
  [
    "curadoria-composition-retrato-de-costas",
    "composition",
    "Retrato de costas",
    "a rear-view portrait showing the subject from behind, with posture clothing and gaze direction carrying identity while the surrounding destination remains visible",
    "Retrato",
    "",
    5,
    "Identidade sugerida por postura, roupa e direção."
  ],
  [
    "curadoria-composition-primeiro-plano-recortado",
    "composition",
    "Primeiro plano recortado",
    "place a recognizable object very close to the lens and crop it deliberately at one frame edge, creating immediate foreground depth while the subject remains clear behind it",
    "Profundidade",
    "",
    5,
    "Objeto próximo parcialmente cortado cria proximidade."
  ],
  [
    "curadoria-composition-sequencia-de-portas",
    "composition",
    "Sequência de portas",
    "compose through a succession of aligned open doorways, each smaller with distance, until the final opening reveals the principal subject in the deepest room",
    "Profundidade",
    "",
    5,
    "Vãos sucessivos conduzem a atenção até o sujeito."
  ],
  [
    "curadoria-composition-plano-de-conjunto-estatico",
    "composition",
    "Plano de conjunto estático",
    "a static ensemble shot showing every member of the group from head to toe, balanced spacing and clear sightlines between the figures without camera movement",
    "Multidão",
    "",
    5,
    "Grupo inteiro visível em enquadramento fixo e equilibrado."
  ],
  [
    "curadoria-palette-cacau-e-hortela",
    "palette",
    "Cacau e hortelã",
    "a cocoa and mint palette with deep chocolate brown foundations, muted cocoa midtones, cool fresh mint accents and warm cream highlights",
    "Natural",
    "",
    5,
    "Marrons profundos refrescados por verde suave.",
    [
      "#2F1F1A",
      "#725044",
      "#9FC7AD",
      "#EEE5D2"
    ]
  ],
  [
    "curadoria-palette-azul-piscina-desbotado",
    "palette",
    "Azul piscina desbotado",
    "a faded swimming-pool palette with sun-worn aqua, chalky turquoise, pale tile blue and small warm ivory highlights, all gently low in contrast",
    "Fria",
    "Anos 1980",
    5,
    "Azuis aquáticos envelhecidos pelo sol.",
    [
      "#397E8B",
      "#77ADB0",
      "#B8D1CD",
      "#E9E0C8"
    ]
  ],
  [
    "curadoria-palette-vinho-e-rosa-seco",
    "palette",
    "Vinho e rosa seco",
    "a wine and dried-rose palette dominated by burgundy and muted berry tones, softened by dusty pink and warm parchment rather than bright red",
    "Quente",
    "",
    5,
    "Vermelhos fechados com delicadeza envelhecida.",
    [
      "#4B1F2D",
      "#7D354B",
      "#C28E91",
      "#E8D6C2"
    ]
  ],
  [
    "curadoria-palette-areia-e-petroleo",
    "palette",
    "Areia e petróleo",
    "a sand and petroleum palette with warm dune beige and pale stone balanced against dark oil blue and desaturated blue-gray shadows",
    "Equilibrada",
    "",
    5,
    "Neutros claros equilibrados por azul profundo.",
    [
      "#D8C7A5",
      "#AA9877",
      "#213D46",
      "#637A7D"
    ]
  ],
  [
    "curadoria-palette-limao-e-concreto",
    "palette",
    "Limão e concreto",
    "a lemon and concrete palette with cool cement grays and off-white surfaces punctuated by restrained sharp lemon-yellow accents",
    "Urbana",
    "",
    5,
    "Cinza mineral com acentos ácidos controlados.",
    [
      "#595C5D",
      "#A9ABAA",
      "#DDDCD5",
      "#D5D942"
    ]
  ],
  [
    "curadoria-palette-lilas-e-musgo",
    "palette",
    "Lilás e musgo",
    "a lilac and moss palette with soft grayed purple petals against deep moss green, muted fern midtones and pale lavender highlights",
    "Natural",
    "",
    5,
    "Flores frias sobre uma base vegetal escura.",
    [
      "#344B35",
      "#718263",
      "#9A86B5",
      "#DDD0E4"
    ]
  ],
  [
    "curadoria-palette-ferrugem-e-ceu-cinzento",
    "palette",
    "Ferrugem e céu cinzento",
    "a rust and gray-sky palette with oxidized orange-brown metal against layered overcast grays and a narrow band of cold pale light",
    "Industrial",
    "",
    5,
    "Metal oxidado sob uma atmosfera fria.",
    [
      "#8C492F",
      "#B66C47",
      "#666E73",
      "#C3C9C9"
    ]
  ],
  [
    "curadoria-palette-coral-e-sombra-azul",
    "palette",
    "Coral e sombra azul",
    "a coral and blue-shadow palette with warm restrained coral surfaces, salmon midtones and deep marine-blue shadows with pale cool highlights",
    "Equilibrada",
    "",
    5,
    "Calor coral recortado por sombras marinhas.",
    [
      "#D87868",
      "#EBA38C",
      "#263F5D",
      "#B8CFD5"
    ]
  ],
  [
    "curadoria-palette-marfim-e-tinta",
    "palette",
    "Marfim e tinta",
    "an ivory and ink palette with warm fibrous ivory, muted parchment and dense blue-black ink, using fine dark accents instead of pure black masses",
    "Editorial",
    "",
    5,
    "Base clara atravessada por azul-negro denso.",
    [
      "#F1E8D2",
      "#D3C6AA",
      "#24313B",
      "#65717A"
    ]
  ],
  [
    "curadoria-palette-verde-garrafa-e-cobre",
    "palette",
    "Verde garrafa e cobre",
    "a bottle-green and copper palette with deep green shadows, glassy green midtones and warm hammered-copper accents with restrained amber highlights",
    "Nobre",
    "",
    5,
    "Verde escuro combinado a metal aquecido.",
    [
      "#173F35",
      "#316653",
      "#A8613D",
      "#D4A06F"
    ]
  ],
  [
    "curadoria-palette-caju-e-urucum",
    "palette",
    "Caju e urucum",
    "a cashew and annatto palette with golden cashew yellow, warm orange flesh, earthy red urucum accents and deep brown seed-like shadows",
    "Brasileira",
    "",
    5,
    "Amarelos frutais e vermelhos terrosos brasileiros.",
    [
      "#E4B54C",
      "#D98235",
      "#A83D2F",
      "#4D3027"
    ]
  ],
  [
    "curadoria-palette-noite-violeta",
    "palette",
    "Noite violeta",
    "a violet night palette with near-black indigo, layered muted purples and sparse cool lavender light, avoiding saturated neon",
    "Noturna",
    "",
    5,
    "Anoitecer roxo com azuis frios e luz distante.",
    [
      "#161A30",
      "#302A52",
      "#655681",
      "#B1A2C7"
    ]
  ],
  [
    "curadoria-palette-oceano-profundo-e-espuma",
    "palette",
    "Oceano profundo e espuma",
    "a deep-ocean and sea-foam palette with abyssal navy, rich blue-green water, desaturated turquoise and airy pale foam highlights",
    "Fria",
    "",
    5,
    "Azuis marinhos densos com espuma esverdeada.",
    [
      "#102E3B",
      "#155263",
      "#4F9391",
      "#C3DED5"
    ]
  ],
  [
    "curadoria-palette-terra-encharcada",
    "palette",
    "Terra encharcada",
    "a rain-soaked-earth palette with wet umber, dark loamy brown, subdued olive and small gray-beige highlights like water on soil",
    "Natural",
    "",
    5,
    "Solos escuros e vegetação após chuva intensa.",
    [
      "#2F2922",
      "#564537",
      "#74705A",
      "#B1AA97"
    ]
  ],
  [
    "curadoria-palette-papel-e-tinta-azul",
    "palette",
    "Papel e tinta azul",
    "a paper and blue-ink palette with warm uncoated paper, subtle cream shadows and several densities of classic blueprint-like blue linework",
    "Editorial",
    "",
    5,
    "Suporte artesanal claro e desenho azul tradicional.",
    [
      "#EFE5CE",
      "#D7C9AE",
      "#335F7C",
      "#183E59"
    ]
  ],
  [
    "curadoria-palette-amarelo-retro-e-nogueira",
    "palette",
    "Amarelo retrô e nogueira",
    "a retro-yellow and walnut palette with muted mustard appliances, warm aged yellow, medium walnut wood and creamy off-white balance",
    "Retrô",
    "Anos 1970",
    5,
    "Amarelo envelhecido com madeira marrom média.",
    [
      "#C2A13B",
      "#E0C66D",
      "#72503B",
      "#D9CBB1"
    ]
  ],
  [
    "curadoria-palette-flamingo-e-eucalipto",
    "palette",
    "Flamingo e eucalipto",
    "a flamingo and eucalyptus palette with soft coral-pink and deeper flamingo accents cooled by silvery eucalyptus green and dark leaf shadows",
    "Natural",
    "",
    5,
    "Rosa vivo moderado por verdes acinzentados.",
    [
      "#E5968D",
      "#C65E6B",
      "#78988A",
      "#304E43"
    ]
  ],
  [
    "curadoria-palette-neblina-rosada",
    "palette",
    "Neblina rosada",
    "a rose-fog palette with desaturated blush, mauve-gray mist and pale cool pink highlights, using very soft low-contrast transitions",
    "Suave",
    "",
    5,
    "Rosa atmosférico com transições suaves e frias.",
    [
      "#A9828C",
      "#C6A5AD",
      "#D9C6CA",
      "#E8E2E0"
    ]
  ],
  [
    "curadoria-palette-mostarda-e-vinho",
    "palette",
    "Mostarda e vinho",
    "a mustard and wine palette with deep burgundy masses, muted golden mustard accents, warm taupe transitions and soft oat-colored highlights",
    "Quente",
    "",
    5,
    "Dois tons densos equilibrados por neutros quentes.",
    [
      "#5B2737",
      "#A67B2E",
      "#9B7D68",
      "#DED0B2"
    ]
  ],
  [
    "curadoria-palette-azul-celeste-e-tijolo",
    "palette",
    "Azul-celeste e tijolo",
    "a sky-blue and brick palette with open pale blue, clear celestial midtones and warm fired-brick red grounded by dark clay shadows",
    "Arquitetura",
    "",
    5,
    "Céu aberto contrastando com construção terrosa.",
    [
      "#A9CDD7",
      "#6EA2B5",
      "#A6533F",
      "#603A32"
    ]
  ],
  [
    "curadoria-palette-salvia-e-damasco",
    "palette",
    "Sálvia e damasco",
    "a sage and apricot palette with gentle herbal green, dusty sage shadows, soft apricot warmth and pale creamy peach highlights",
    "Suave",
    "",
    5,
    "Verde herbal suave com fruta alaranjada delicada.",
    [
      "#78866C",
      "#A5AF91",
      "#D9A078",
      "#F0D5B7"
    ]
  ],
  [
    "curadoria-palette-grafite-e-acerola",
    "palette",
    "Grafite e acerola",
    "a graphite and acerola-cherry palette with layered charcoal grays and cool concrete midtones energized by small vivid acerola-red accents",
    "Urbana",
    "",
    5,
    "Base urbana escura com vermelho frutado pontual.",
    [
      "#292C30",
      "#575C61",
      "#A5A9AA",
      "#C83C45"
    ]
  ],
  [
    "curadoria-palette-ameixa-e-baunilha",
    "palette",
    "Ameixa e baunilha",
    "a plum and vanilla palette with dark ripe-plum purple, muted mauve midtones and generous warm vanilla-cream highlights",
    "Suave",
    "",
    5,
    "Roxos frutados com creme quente e macio.",
    [
      "#482B47",
      "#76516F",
      "#D8BEA0",
      "#F0E2C4"
    ]
  ],
  [
    "curadoria-palette-capim-e-argila",
    "palette",
    "Capim e argila",
    "a grass and clay palette with fresh but natural yellow-green, deeper pasture green, hand-fired clay orange and pale sandy highlights",
    "Natural",
    "",
    5,
    "Verdes de campo e barro cozido natural.",
    [
      "#7B8C45",
      "#4F6537",
      "#B86748",
      "#D9C8A1"
    ]
  ],
  [
    "curadoria-palette-algodao-e-cha",
    "palette",
    "Algodão e chá",
    "a cotton and tea palette with soft unbleached cotton white, warm flax beige and translucent amber-tea browns in gentle low contrast",
    "Neutra",
    "",
    5,
    "Neutros suaves de fibra clara e infusão âmbar.",
    [
      "#EEE7D9",
      "#D7C8AD",
      "#A77B4E",
      "#6E5138"
    ]
  ],
  [
    "curadoria-palette-indigo-e-abobora",
    "palette",
    "Índigo e abóbora",
    "an indigo and pumpkin palette with deep hand-dyed blue, faded denim midtones and warm pumpkin-orange accents against pale natural cloth",
    "Artesanal",
    "",
    5,
    "Azul artesanal profundo com laranja vegetal.",
    [
      "#233B5D",
      "#486785",
      "#C96D32",
      "#E6D5B8"
    ]
  ],
  [
    "curadoria-palette-verde-fosco-e-goiaba",
    "palette",
    "Verde-fosco e goiaba",
    "a matte-green and guava palette with dusty leaf green, deep matte foliage and soft guava-pink flesh with pale creamy highlights",
    "Natural",
    "",
    5,
    "Superfícies verdes opacas com interior rosado.",
    [
      "#536C50",
      "#83937A",
      "#D97D86",
      "#F0C5B6"
    ]
  ],
  [
    "curadoria-palette-areia-fria-e-ardosia",
    "palette",
    "Areia fria e ardósia",
    "a cool-sand and slate palette with pale gray-beige grains, cool stone midtones and layered blue-gray slate shadows",
    "Mineral",
    "",
    5,
    "Minerais claros e azuis-acinzentados de pedra.",
    [
      "#D4CEC0",
      "#AAA99F",
      "#64717A",
      "#394651"
    ]
  ],
  [
    "curadoria-palette-cereja-e-pistache",
    "palette",
    "Cereja e pistache",
    "a cherry and pistachio palette with deep cherry red, softer red-fruit midtones and muted creamy pistachio green balanced by pale ivory",
    "Lúdica",
    "",
    5,
    "Vermelho de fruta com verde cremoso inesperado.",
    [
      "#8D2F3E",
      "#C65560",
      "#9CAF73",
      "#E7E1BE"
    ]
  ],
  [
    "curadoria-palette-ouro-velho-e-petroleo-profundo",
    "palette",
    "Ouro velho e petróleo profundo",
    "an old-gold and deep-petroleum palette with tarnished muted gold, dark brass midtones and rich petroleum-blue shadows with restrained warm gleams",
    "Nobre",
    "",
    5,
    "Metal envelhecido sobre azul quase submarino.",
    [
      "#8A713D",
      "#C0A260",
      "#163C44",
      "#48666A"
    ]
  ],
  [
    "curadoria-medium-cianotipo",
    "medium",
    "Cianotipo",
    "a cyanotype contact print with Prussian-blue exposed areas, pale reserved highlights, soft brush-coated edges and the slight irregularities of sun-developed photographic paper",
    "Fotografia histórica",
    "Século XIX",
    5,
    "Processo fotográfico azul com contato e papel sensível."
  ],
  [
    "curadoria-medium-autocromo",
    "medium",
    "Autocromo",
    "an autochrome photograph with delicate pointillist color grain, softly muted early-color rendition, gentle focus and the luminous texture of a historical glass plate",
    "Fotografia histórica",
    "Anos 1910",
    5,
    "Cor fotográfica antiga com grão de batata visível."
  ],
  [
    "curadoria-medium-daguerreotipo",
    "medium",
    "Daguerreótipo",
    "a daguerreotype with mirrorlike silver-plate detail, exceptionally fine midtone rendering, subtle tarnish at the edges and a formal long-exposure stillness",
    "Fotografia histórica",
    "Anos 1840",
    5,
    "Imagem única sobre placa metálica polida."
  ],
  [
    "curadoria-medium-calotipo",
    "medium",
    "Calotipo",
    "a calotype paper photograph with warm brown-gray tonalities, softened fibrous detail, matte highlights and the delicate grain of an early paper negative",
    "Fotografia histórica",
    "Anos 1840",
    5,
    "Fotografia em papel negativo de textura suave."
  ],
  [
    "curadoria-medium-fotogravura",
    "medium",
    "Fotogravura",
    "a photogravure print with rich inked shadows, continuous photographic tonal transitions, a subtle plate impression and the velvety surface of ink pressed into cotton paper",
    "Impressão",
    "Século XX",
    5,
    "Impressão entalhada com riqueza tonal fotográfica."
  ],
  [
    "curadoria-medium-litografia-de-pedra",
    "medium",
    "Litografia de pedra",
    "a stone lithograph with greasy crayon marks, broad flat ink areas, subtle limestone grain and the controlled layering characteristic of hand-pulled lithographic printing",
    "Impressão",
    "Atemporal",
    5,
    "Desenho de impressão com gestos e retículas de pedra."
  ],
  [
    "curadoria-medium-serigrafia-de-dois-tons",
    "medium",
    "Serigrafia de dois tons",
    "a two-color screen print with opaque flat ink layers, crisp overlapping shapes, slight hand-registration offsets and uniform color coverage on textured paper",
    "Impressão",
    "Contemporânea",
    5,
    "Duas camadas de tinta opaca com registro manual."
  ],
  [
    "curadoria-medium-gravura-em-linoleo",
    "medium",
    "Gravura em linóleo",
    "a linoleum-block print with bold carved shapes, visible gouge marks, slightly uneven ink coverage and strong positive-negative relationships",
    "Impressão",
    "Atemporal",
    5,
    "Matriz entalhada com cortes largos e impressão vigorosa."
  ],
  [
    "curadoria-medium-monotipia",
    "medium",
    "Monotipia",
    "a monotype print with singular painterly ink sweeps, soft transferred textures, unpredictable wiped highlights and the unrepeatable character of a single pressed impression",
    "Impressão",
    "Contemporânea",
    5,
    "Impressão única com tinta manipulada livremente."
  ],
  [
    "curadoria-medium-colagem-analogica",
    "medium",
    "Colagem analógica",
    "an analog paper collage with physically cut photographs, torn edges, visible adhesive traces and layered printed materials arranged in a coherent tactile composition",
    "Colagem",
    "Anos 1960",
    5,
    "Recortes físicos, cola e fotografias sobrepostas."
  ],
  [
    "curadoria-medium-pintura-em-vidro",
    "medium",
    "Pintura em vidro",
    "a reverse painting on glass with crisp enclosed color areas, smooth reflective highlights, fine contour lines and the distinctive flat depth of pigment viewed through glass",
    "Pintura",
    "Atemporal",
    5,
    "Tintas aplicadas no verso de uma superfície transparente."
  ],
  [
    "curadoria-medium-azulejo-pintado-a-mao",
    "medium",
    "Azulejo pintado à mão",
    "a hand-painted ceramic tile panel with cobalt brushwork beneath a glossy glaze, fine pigment pooling and subtle grout lines dividing the image into individual tiles",
    "Cerâmica",
    "Atemporal",
    5,
    "Cena dividida pela grade de cerâmica vidrada."
  ],
  [
    "curadoria-medium-tempera-de-ovo",
    "medium",
    "Têmpera de ovo",
    "an egg-tempera painting with fine hatched brushwork, luminous thin layers, a matte mineral surface and precise forms built through patient crosshatched color",
    "Pintura",
    "Renascimento",
    5,
    "Pintura precisa de camadas finas e acabamento seco."
  ],
  [
    "curadoria-medium-guache-opaco",
    "medium",
    "Guache opaco",
    "an opaque gouache painting with velvety matte color, flat but hand-painted coverage, crisp overpaint edges and subtle variations from diluted pigment",
    "Pintura",
    "Contemporânea",
    5,
    "Pigmento aguado denso, fosco e de cobertura uniforme."
  ],
  [
    "curadoria-medium-pastel-oleoso",
    "medium",
    "Pastel oleoso",
    "an oil-pastel drawing with dense waxy pigment, broad creamy strokes, finger-blended transitions and small crumbs of color catching on the paper tooth",
    "Desenho",
    "Contemporânea",
    5,
    "Traços cremosos e pigmento espesso misturado manualmente."
  ],
  [
    "curadoria-medium-carvao-e-giz-branco",
    "medium",
    "Carvão e giz branco",
    "a charcoal and white-chalk drawing on midtone paper, broad smudged shadows, sharp erased edges and opaque white highlights drawn rather than left blank",
    "Desenho",
    "Atemporal",
    5,
    "Sombras de carvão e luzes desenhadas em papel médio."
  ],
  [
    "curadoria-medium-fresco-mineral",
    "medium",
    "Fresco mineral",
    "a mineral fresco with pigment absorbed into lime plaster, softly matte color, subtle trowel texture and small surface cracks integrated into the painted forms",
    "Pintura",
    "Atemporal",
    5,
    "Pigmento incorporado a reboco com textura arquitetônica."
  ],
  [
    "curadoria-medium-vitral-ilustrado",
    "medium",
    "Vitral ilustrado",
    "an illustrated stained-glass panel with individually colored glass shapes, dark lead came contours, subtle bubbles in the glass and light transmitted through every color area",
    "Vidro",
    "Atemporal",
    5,
    "Formas de vidro colorido separadas por perfis escuros."
  ],
  [
    "curadoria-medium-bordado-digitalizado",
    "medium",
    "Bordado digitalizado",
    "a high-resolution scan of hand embroidery with visible thread direction, raised stitches, tiny fibers and fabric weave defining every shape and tonal transition",
    "Têxtil",
    "Contemporânea",
    5,
    "Imagem formada por pontos e fios registrados em alta definição."
  ],
  [
    "curadoria-medium-tapecaria-de-fios",
    "medium",
    "Tapeçaria de fios",
    "a woven tapestry with shapes built from interlaced yarn, visible warp and weft, slight irregularities in the weave and softly stepped color boundaries",
    "Têxtil",
    "Atemporal",
    5,
    "Trama têxtil densa construindo figuras em grande escala."
  ],
  [
    "curadoria-medium-colcha-de-retalhos",
    "medium",
    "Colcha de retalhos",
    "a patchwork quilt composition with sewn fabric pieces, varied printed textures, visible seams and quilting stitches following the geometry of the assembled cloth",
    "Têxtil",
    "Atemporal",
    5,
    "Composição de tecidos costurados em módulos geométricos."
  ],
  [
    "curadoria-medium-diorama-fotografado",
    "medium",
    "Diorama fotografado",
    "a photographed physical diorama with handcrafted miniature scenery, real depth of field, tiny material imperfections and studio lighting that preserves the scale of the model",
    "Miniatura",
    "Contemporânea",
    5,
    "Cena miniatura real registrada com luz e profundidade."
  ],
  [
    "curadoria-medium-maquete-arquitetonica",
    "medium",
    "Maquete arquitetônica",
    "an architectural scale model made from chipboard basswood and acrylic, precise cut edges, miniature landscape materials and soft studio lighting on a worktable",
    "Arquitetura",
    "Contemporânea",
    5,
    "Construção em escala com papel, madeira e vegetação de modelo."
  ],
  [
    "curadoria-medium-animacao-em-recortes",
    "medium",
    "Animação em recortes",
    "a cutout-animation frame with separate layered paper figures, hinged silhouette-like joints, flat textured shapes and slight handmade offsets between moving elements",
    "Animação",
    "Atemporal",
    5,
    "Personagens e cenários planos articulados como papel."
  ],
  [
    "curadoria-medium-modelagem-em-plasticina",
    "medium",
    "Modelagem em plasticina",
    "a plasticine-clay model with soft hand-shaped volumes, visible fingerprints, small tool marks and blended colored clay maintaining a tactile stop-motion quality",
    "Animação",
    "Contemporânea",
    5,
    "Volumes maleáveis com marcas de dedos e ferramentas."
  ],
  [
    "curadoria-medium-fotografia-estereoscopica",
    "medium",
    "Fotografia estereoscópica",
    "a stereoscopic photograph with the visual characteristics of a historical stereo card, paired near-identical perspectives, crisp central depth and warm aged albumen tones",
    "Fotografia histórica",
    "Século XIX",
    5,
    "Par de perspectivas sutis para profundidade binocular."
  ],
  [
    "curadoria-medium-projecao-de-slides-1970",
    "medium",
    "Projeção de slides, 1970",
    "a 1970s projected color slide with slightly warm shifted dyes, visible dust at the frame edges, soft projector illumination and a dark surround beyond the image gate",
    "Fotografia analógica",
    "Anos 1970",
    5,
    "Imagem projetada com poeira, bordas e cor analógica."
  ],
  [
    "curadoria-medium-gravura-em-metal",
    "medium",
    "Gravura em metal",
    "a metal-plate engraving with extremely fine incised lines, crosshatched tonal modeling, crisp burin marks and rich ink held within the recessed grooves",
    "Impressão",
    "Atemporal",
    5,
    "Linhas finas incisas e tinta acumulada no sulco."
  ],
  [
    "curadoria-medium-desenho-a-bico-de-pena",
    "medium",
    "Desenho a bico de pena",
    "a dip-pen ink drawing with pressure-sensitive line variation, fine parallel hatching, tiny ink catches and generous untouched paper forming the highlights",
    "Desenho",
    "Atemporal",
    5,
    "Linhas de tinta variadas pela pressão e reserva de papel."
  ],
  [
    "curadoria-medium-estencil-de-rua",
    "medium",
    "Estêncil de rua",
    "a street stencil artwork with sharply cut mask shapes, controlled spray edges, slight paint overshoot and layered color passes on a weathered wall surface",
    "Arte urbana",
    "Contemporânea",
    5,
    "Formas vazadas com bordas e sobreposições de spray."
  ]
];

export const REFERENCE_DATA: ReferenceItem[] = rows.map(([id, kind, name, output, category, era, source, description, colors]) => ({
  id,
  kind,
  name,
  description: description ?? ([category, era].filter(Boolean).join(' · ') || 'Referência do acervo'),
  output,
  category,
  era,
  source: SOURCES[source],
  ...(colors ? { colors } : {}),
}));
