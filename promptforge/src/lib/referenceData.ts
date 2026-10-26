// Gerado por scripts/build-reference-data.mjs. Edite as fontes na raiz e execute npm run refs:build.
// Tuplas reduzem o JS inicial; os objetos públicos são montados uma vez na inicialização.
import type { ReferenceItem, ReferenceKind } from './referenceTypes';

type ReferenceRow = [kind: ReferenceKind, name: string, output: string, category: string, era: string, source: number, description?: string];
const SOURCES = ["Sequenciador de Memórias","Cinema, TV, Games e HQs","Sequenciador HTML original","Sequenciador HTML v3","Sequenciador HTML v4"];
const rows: ReferenceRow[] = [
  [
    "anchor",
    "Elis Regina",
    "Elis Regina performing on stage, intense and volcanic, 1970s Brazil",
    "Música BR",
    "70s",
    0
  ],
  [
    "anchor",
    "João Gilberto",
    "João Gilberto, eyes half-closed, guitar in lap, bossa nova silence around him",
    "Música BR",
    "70s",
    0
  ],
  [
    "anchor",
    "Luiz Gonzaga",
    "Luiz Gonzaga, accordion, leather hat, the king of baião in full costume",
    "Música BR",
    "70s",
    0
  ],
  [
    "anchor",
    "Grande Otelo",
    "Grande Otelo, expressive face, stage makeup, Brazilian cinema giant",
    "Cinema BR",
    "70s",
    0
  ],
  [
    "anchor",
    "Glauber Rocha",
    "Glauber Rocha, wild-eyed, pointing a camera, Cinema Novo prophet",
    "Cinema BR",
    "70s",
    0
  ],
  [
    "anchor",
    "Dercy Gonçalves",
    "Dercy Gonçalves on stage, mouth wide open in laughter, Brazilian comedy legend",
    "TV BR",
    "70s",
    0
  ],
  [
    "anchor",
    "Carlos Drummond",
    "Carlos Drummond de Andrade, seated at a typewriter, iron flower metaphor surrounding him",
    "Literatura BR",
    "70s",
    0
  ],
  [
    "anchor",
    "Mao Tsé-Tung",
    "Mao Zedong in Zhongshan suit, formal portrait, monumental presence",
    "Política",
    "70s",
    0
  ],
  [
    "anchor",
    "Jimi Hendrix",
    "Jimi Hendrix, guitar on fire at Woodstock, psychedelic light show behind him",
    "Música",
    "70s",
    0
  ],
  [
    "anchor",
    "Jim Morrison",
    "Jim Morrison on stage, leather pants, arms outstretched, shaman energy",
    "Música",
    "70s",
    0
  ],
  [
    "anchor",
    "Miles Davis",
    "Miles Davis, trumpet raised, eyes closed, 1970s electric period, dark and abstract",
    "Música",
    "70s",
    0
  ],
  [
    "anchor",
    "Pelé (Copa 70)",
    "Pelé lifting the 1970 World Cup trophy in Mexico City, pure joy, yellow jersey",
    "Esporte BR",
    "70s",
    0
  ],
  [
    "anchor",
    "Émerson Fittipaldi",
    "Emerson Fittipaldi in cockpit, 1972 Formula 1 World Champion, young and focused",
    "Esporte BR",
    "70s",
    0
  ],
  [
    "anchor",
    "Fidel Castro",
    "Fidel Castro at the podium, military uniform, cigar, commanding the crowd",
    "Política",
    "70s",
    0
  ],
  [
    "anchor",
    "Angela Davis",
    "Angela Davis, fist raised, afro halo, 1970s civil rights presence",
    "Política",
    "70s",
    0
  ],
  [
    "anchor",
    "Muhammad Ali",
    "Muhammad Ali, fists raised, standing over Sonny Liston, pure lightning",
    "Esporte",
    "70s",
    0
  ],
  [
    "anchor",
    "Bruce Lee",
    "Bruce Lee in nunchaku fighting stance, Enter the Dragon, absolute stillness before motion",
    "Cinema",
    "70s",
    0
  ],
  [
    "anchor",
    "Stanley Kubrick",
    "Stanley Kubrick behind a movie camera, intense stare, cold directorial genius",
    "Cinema",
    "70s",
    0
  ],
  [
    "anchor",
    "Sophia Loren",
    "Sophia Loren, Italian film diva, dark eyes, 1970s glamour and gravity",
    "Cinema",
    "70s",
    0
  ],
  [
    "anchor",
    "Che Guevara",
    "Che Guevara, beret, star, the Guerrillero Heroico portrait by Korda, iconic red",
    "Política",
    "70s",
    0
  ],
  [
    "anchor",
    "Raul Seixas",
    "Raul Seixas, electric guitar, rock and roll meets mystic Brazil, rock do êgo",
    "Música BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Lobão",
    "Lobão on stage, rebellious, Brazilian rock underground 1980s energy",
    "Música BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Gilberto Gil",
    "Gilberto Gil with guitar, Bahian warmth, tropicália spirit in 1980s Brazil",
    "Música BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Bethânia",
    "Maria Bethânia, hands expressive, dramatic stage pose, theatrical presence",
    "Música BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Sônia Braga",
    "Sônia Braga as Gabriela or Dancin' Days, Brazilian sexual liberation icon",
    "TV BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Tancredo Neves",
    "Tancredo Neves, white hair, dignified, the hope of Brazilian redemocratization",
    "Política BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Hebe Camargo",
    "Hebe Camargo on television, jewels, white smile, queen of Brazilian variety shows",
    "TV BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Prince",
    "Prince at Purple Rain era, lace shirt, guitar solo, Minneapolis paisley park universe",
    "Música",
    "80s",
    0
  ],
  [
    "anchor",
    "Michael Jackson (Thriller)",
    "Michael Jackson in red leather jacket, zombie pose, Thriller music video, moonlit cemetery",
    "Música",
    "80s",
    0
  ],
  [
    "anchor",
    "Madonna (Like a Virgin)",
    "Madonna in white wedding dress and Boy Toy belt, Venice gondola, Like a Virgin",
    "Música",
    "80s",
    0
  ],
  [
    "anchor",
    "Freddie Mercury",
    "Freddie Mercury at Live Aid Wembley 1985, white tank top, fist pump, singing to 72,000 people",
    "Música",
    "80s",
    0
  ],
  [
    "anchor",
    "Indiana Jones",
    "Indiana Jones, leather jacket, fedora, bullwhip, ancient artifact in hand, temple behind him",
    "Cinema",
    "80s",
    0
  ],
  [
    "anchor",
    "Ellen Ripley",
    "Ellen Ripley from Aliens, power loader exosuit, flamethrower, terrified and determined",
    "Cinema",
    "80s",
    0
  ],
  [
    "anchor",
    "Rambo",
    "John Rambo, red headband, machine gun, jungle backdrop, pure 80s excess",
    "Cinema",
    "80s",
    0
  ],
  [
    "anchor",
    "Ghostbusters",
    "the four Ghostbusters in tan jumpsuits, proton packs firing, New York City chaos",
    "Cinema",
    "80s",
    0
  ],
  [
    "anchor",
    "Falcão (MV Bill)",
    "Falcão from O Mundo é dos Espertos, raw documentary, 1980s Brazilian street reality",
    "Cultura BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Rubens Barrichello",
    "young Rubens Barrichello in go-kart, early 1980s, future F1 champion in the making",
    "Esporte BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Zico",
    "Zico at Flamengo, white and red, greatest Brazilian number 10 of the 80s",
    "Esporte BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Socrates",
    "Sócrates, Corinthians Democracy movement, intellectual footballer, beard and long legs",
    "Esporte BR",
    "80s",
    0
  ],
  [
    "anchor",
    "Reagan",
    "Ronald Reagan, cowboy hat, rancher pose, the face of 1980s American conservatism",
    "Política",
    "80s",
    0
  ],
  [
    "anchor",
    "Gorbachev",
    "Mikhail Gorbachev, birthmark on forehead, suit, the end of an empire in his eyes",
    "Política",
    "80s",
    0
  ],
  [
    "anchor",
    "E.T.",
    "E.T. the Extra-Terrestrial reaching out his glowing finger, Spielberg warmth and melancholy",
    "Cinema",
    "80s",
    0
  ],
  [
    "anchor",
    "Marty McFly",
    "Marty McFly on the DeLorean hood, orange life vest, clock tower behind him, 88mph moment",
    "Cinema",
    "80s",
    0
  ],
  [
    "anchor",
    "Cazuza",
    "Cazuza, cigarette, defiant and poetic, Brazilian rock and tragic beauty",
    "Música BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Cássia Eller",
    "Cássia Eller with electric guitar, raw Brazilian rock queen, intense dark eyes",
    "Música BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Djavan",
    "Djavan, acoustic guitar, Brazilian MPB and jazz fusion master, warm stage light",
    "Música BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Mamonas Assassinas",
    "Mamonas Assassinas in full parody costume, Brazilian comic rock phenomenon, absurd joy",
    "Música BR",
    "90s",
    0
  ],
  [
    "anchor",
    "É o Tchan (conjunto)",
    "É o Tchan group in Axé Music formation, matching outfits, Carla Perez at center",
    "Música BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Racionais MCs",
    "Racionais MCs, Mano Brown at the mic, São Paulo periphery, serious and raw",
    "Música BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Emicida (jovem)",
    "young Emicida, freestyle rap on Largo do Arouche, São Paulo, 90s energy",
    "Música BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Princess Diana",
    "Princess Diana, white dress, anti-landmine campaign, compassion and tragedy",
    "Cultura",
    "90s",
    0
  ],
  [
    "anchor",
    "Nelson Mandela",
    "Nelson Mandela raising fist on release from prison, Robben Island chapter ending",
    "Política",
    "90s",
    0
  ],
  [
    "anchor",
    "Notorious B.I.G.",
    "The Notorious B.I.G., crown, fur coat, New York royalty, throne pose",
    "Música",
    "90s",
    0
  ],
  [
    "anchor",
    "Dr. Dre",
    "Dr. Dre in the studio, headphones around neck, G-funk era, Compton, 1992",
    "Música",
    "90s",
    0
  ],
  [
    "anchor",
    "Lauryn Hill",
    "Lauryn Hill, Miseducation era, natural hair, microphone, raw emotion and power",
    "Música",
    "90s",
    0
  ],
  [
    "anchor",
    "Jay-Z",
    "Jay-Z, Reasonable Doubt era, Marcy Projects in the background, unflinching gaze",
    "Música",
    "90s",
    0
  ],
  [
    "anchor",
    "Rage Against the Machine",
    "Zack de la Rocha on stage, fist up, Rage Against the Machine fury",
    "Música",
    "90s",
    0
  ],
  [
    "anchor",
    "Thom Yorke",
    "Thom Yorke at the OK Computer sessions, unsettled gaze, studio equipment, 1997",
    "Música",
    "90s",
    0
  ],
  [
    "anchor",
    "Eddie Vedder",
    "Eddie Vedder, Pearl Jam, crowd surfing above thousands of hands, Pinkpop 1992",
    "Música",
    "90s",
    0
  ],
  [
    "anchor",
    "Leonardo DiCaprio (jovem)",
    "young Leonardo DiCaprio in Romeo + Juliet era, angelic face, raw intensity",
    "Cinema",
    "90s",
    0
  ],
  [
    "anchor",
    "Uma Thurman (Pulp Fiction)",
    "Uma Thurman as Mia Wallace, bob haircut, cigarette, Pulp Fiction adrenaline",
    "Cinema",
    "90s",
    0
  ],
  [
    "anchor",
    "Samuel L. Jackson (Jules)",
    "Samuel L. Jackson as Jules Winnfield, Jheri curl, suit, Bible verse face",
    "Cinema",
    "90s",
    0
  ],
  [
    "anchor",
    "Denzel Washington (Malcolm X)",
    "Denzel Washington as Malcolm X, suit and glasses, finger pointing upward, righteous fire",
    "Cinema",
    "90s",
    0
  ],
  [
    "anchor",
    "FHC",
    "Fernando Henrique Cardoso, Plano Real, presidential composure, sociologist in power",
    "Política BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Mano Brown",
    "Mano Brown of Racionais MCs, microphone at lip, peripheral São Paulo, unflinching truth",
    "Música BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Roger Federer (jovem)",
    "young Roger Federer at Wimbledon, early 2000s, effortless backhand, all-white",
    "Esporte",
    "90s",
    0
  ],
  [
    "anchor",
    "Tiger Woods (Masters 97)",
    "Tiger Woods 21 years old winning his first Masters, fist pump, Augusta green",
    "Esporte",
    "90s",
    0
  ],
  [
    "anchor",
    "Ronaldo Lima (Copa 94)",
    "Ronaldo Fenômeno at 17, sub in 1994 World Cup squad, the future in full bloom",
    "Esporte BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Romário (Copa 94)",
    "Romário, golden boot, Copa 1994, celebrating in the Pasadena sun",
    "Esporte BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Guga Kuerten",
    "Gustavo Kuerten drawing a heart on the Roland Garros clay, champion and beloved",
    "Esporte BR",
    "90s",
    0
  ],
  [
    "anchor",
    "Lula (posse 2003)",
    "Lula on inauguration day January 2003, fist raised, the workers president, Brasília",
    "Política BR",
    "2000s",
    0
  ],
  [
    "anchor",
    "Lula (jovem)",
    "young Lula, union leader in the 1970s ABC Paulista strikes, finger raised, factory backdrop",
    "Política BR",
    "2000s",
    0
  ],
  [
    "anchor",
    "Gisele Bündchen",
    "Gisele Bündchen, supermodel peak, Victoria's Secret angel wings, confidence absolute",
    "Moda BR",
    "2000s",
    0
  ],
  [
    "anchor",
    "Adriana Lima",
    "Adriana Lima, Brazilian supermodel, intense dark eyes, early 2000s fashion",
    "Moda BR",
    "2000s",
    0
  ],
  [
    "anchor",
    "Ivete Sangalo",
    "Ivete Sangalo on giant carnival stage, arms wide, queen of Axé and Brazilian pop",
    "Música BR",
    "2000s",
    0
  ],
  [
    "anchor",
    "Seu Jorge",
    "Seu Jorge with guitar, acoustic Bowie covers, Life Aquatic melancholy and beauty",
    "Música BR",
    "2000s",
    0
  ],
  [
    "anchor",
    "Criolo",
    "Criolo on stage, São Paulo periphery hip-hop and samba fusion, political urgency",
    "Música BR",
    "2000s",
    0
  ],
  [
    "anchor",
    "Eminem",
    "Eminem, Marshall Mathers LP era, bleached hair, trailer park rage and genius",
    "Música",
    "2000s",
    0
  ],
  [
    "anchor",
    "Kanye West (College Dropout)",
    "Kanye West in College Dropout era, Louis Vuitton backpack, polo shirt, bear mascot",
    "Música",
    "2000s",
    0
  ],
  [
    "anchor",
    "Justin Timberlake",
    "Justin Timberlake post-NSYNC, FutureSex era, slick and confident, microphone stand",
    "Música",
    "2000s",
    0
  ],
  [
    "anchor",
    "Beyoncé (Destiny's Child)",
    "Beyoncé in Destiny's Child formation, early 2000s, matching outfits, future queen ascending",
    "Música",
    "2000s",
    0
  ],
  [
    "anchor",
    "Amy Winehouse",
    "Amy Winehouse, Back to Black, beehive, tattoos, Ronettes channeling 2006",
    "Música",
    "2000s",
    0
  ],
  [
    "anchor",
    "Jack White",
    "Jack White, White Stripes, red and white, raw blues scream, minimal stage",
    "Música",
    "2000s",
    0
  ],
  [
    "anchor",
    "Lady Gaga (debut)",
    "Lady Gaga in her debut era, Just Dance, lightning bolt face paint, performance art",
    "Música",
    "2000s",
    0
  ],
  [
    "anchor",
    "Coringa (Ledger)",
    "Heath Ledger as the Joker mid-monologue, hospital nurse disguise, chaos incarnate",
    "Cinema",
    "2000s",
    0
  ],
  [
    "anchor",
    "Tony Stark",
    "Tony Stark in Mark I suit emerging from cave, Afghanistan dust, Iron Man origin",
    "Cinema",
    "2000s",
    0
  ],
  [
    "anchor",
    "Gollum",
    "Gollum clutching the One Ring underwater, precious and destroyed by desire",
    "Cinema",
    "2000s",
    0
  ],
  [
    "anchor",
    "Capitão Nascimento",
    "Capitão Nascimento in BOPE uniform, skull insignia, Tropa de Elite intensity",
    "Cinema BR",
    "2000s",
    0
  ],
  [
    "anchor",
    "Barack Obama",
    "Barack Obama at Grant Park, election night 2008, the world holding its breath",
    "Política",
    "2000s",
    0
  ],
  [
    "anchor",
    "George W. Bush",
    "George W. Bush in flight suit on aircraft carrier, Mission Accomplished banner, 2003",
    "Política",
    "2000s",
    0
  ],
  [
    "anchor",
    "Putin (2000)",
    "Vladimir Putin in 2000, KGB past in his cold eyes, new Russian strongman rising",
    "Política",
    "2000s",
    0
  ],
  [
    "anchor",
    "Steve Jobs (iPhone)",
    "Steve Jobs holding the first iPhone on stage, January 2007, black turtleneck, history",
    "Tecnologia",
    "2000s",
    0
  ],
  [
    "anchor",
    "Mark Zuckerberg",
    "young Mark Zuckerberg in his Harvard dorm, laptop glow, Facebook being born, 2004",
    "Tecnologia",
    "2000s",
    0
  ],
  [
    "anchor",
    "Ronaldinho (Barcelona)",
    "Ronaldinho at Barcelona Camp Nou mid-elastico dribble, grin wider than the goal",
    "Esporte BR",
    "2000s",
    0
  ],
  [
    "anchor",
    "Adriano Imperador",
    "Adriano Imperador at Inter Milan, most feared striker of 2004-05, Vila Cruzeiro pride",
    "Esporte BR",
    "2000s",
    0
  ],
  [
    "anchor",
    "Kobe Bryant",
    "Kobe Bryant, fadeaway jumper, Los Angeles gold and purple, 2009 champion face",
    "Esporte",
    "2000s",
    0
  ],
  [
    "anchor",
    "LeBron James",
    "LeBron James entering the NBA 2003, the Chosen One cover, raw teenage power",
    "Esporte",
    "2000s",
    0
  ],
  [
    "anchor",
    "Usain Bolt",
    "Usain Bolt lightning bolt pose at Beijing 2008 finish line, arms wide, cosmic grin",
    "Esporte",
    "2000s",
    0
  ],
  [
    "anchor",
    "Valentino Rossi",
    "Valentino Rossi The Doctor, MotoGP celebration, yellow sun helmet, Italian theater",
    "Esporte",
    "2000s",
    0
  ],
  [
    "anchor",
    "Don Draper",
    "Don Draper, Mad Men, impeccable 1960s suit, whiskey in hand, secrets behind the eyes",
    "TV",
    "2000s",
    0
  ],
  [
    "anchor",
    "Walter White",
    "Walter White, Breaking Bad, hazmat suit, meth lab blue glow, I am the danger",
    "TV",
    "2000s",
    0
  ],
  [
    "anchor",
    "Marielle Franco",
    "Marielle Franco at a microphone, afro, earrings, Black feminist force, voice of Rio's favelas",
    "Política BR",
    "2010s",
    0
  ],
  [
    "anchor",
    "Bolsonaro",
    "Jair Bolsonaro in campaign, green and yellow, Brazilian political polarization",
    "Política BR",
    "2010s",
    0
  ],
  [
    "anchor",
    "Dilma Rousseff",
    "Dilma Rousseff, presidential sash, composed and embattled, first female president of Brazil",
    "Política BR",
    "2010s",
    0
  ],
  [
    "anchor",
    "Eduardo Paes",
    "Eduardo Paes at Rio 2016 Olympics opening, Carnival and modernism on the world stage",
    "Política BR",
    "2010s",
    0
  ],
  [
    "anchor",
    "MC Livinho",
    "MC Livinho, Brazilian funk ostentação, gold chain, Anitta and 2010s funk explosion",
    "Música BR",
    "2010s",
    0
  ],
  [
    "anchor",
    "Anitta",
    "Anitta, Brazilian pop and funk queen, international rise, Rio favela to global stage",
    "Música BR",
    "2010s",
    0
  ],
  [
    "anchor",
    "Emicida",
    "Emicida on Marvelous City bridge, Brazilian hip-hop at its most humanist and poetic",
    "Música BR",
    "2010s",
    0
  ],
  [
    "anchor",
    "Beyoncé (Lemonade)",
    "Beyoncé in yellow Lemonade dress, baseball bat, New Orleans flooding, Black power",
    "Música",
    "2010s",
    0
  ],
  [
    "anchor",
    "Taylor Swift",
    "Taylor Swift on the 1989 era, synth-pop transformation, stadium-scale singalongs",
    "Música",
    "2010s",
    0
  ],
  [
    "anchor",
    "Drake",
    "Drake in the Hotline Bling booth, purple light, meme and genuine emotion coexisting",
    "Música",
    "2010s",
    0
  ],
  [
    "anchor",
    "Kendrick Lamar",
    "Kendrick Lamar, To Pimp a Butterfly era, Compton backdrop, poetic gravity",
    "Música",
    "2010s",
    0
  ],
  [
    "anchor",
    "Adele",
    "Adele, 21 era, British council estate behind her, voice that bends nations",
    "Música",
    "2010s",
    0
  ],
  [
    "anchor",
    "Game of Thrones (Cersei)",
    "Cersei Lannister, Iron Throne, wine goblet, political scheming behind green eyes",
    "TV",
    "2010s",
    0
  ],
  [
    "anchor",
    "Tyrion Lannister",
    "Tyrion Lannister, wine and wit, Game of Thrones dwarf genius, power in small frame",
    "TV",
    "2010s",
    0
  ],
  [
    "anchor",
    "Daenerys Targaryen",
    "Daenerys Targaryen, silver hair, dragon on each shoulder, Meereen throne",
    "TV",
    "2010s",
    0
  ],
  [
    "anchor",
    "Breaking Bad Jesse",
    "Jesse Pinkman, yo, blue meth stained jeans, youth and moral destruction",
    "TV",
    "2010s",
    0
  ],
  [
    "anchor",
    "Lionel Messi (Copa 14)",
    "Lionel Messi lifting the World Cup in Rio 2014, tears and pure transcendence",
    "Esporte",
    "2010s",
    0
  ],
  [
    "anchor",
    "Neymar Jr.",
    "Neymar Jr., Barcelona era, impossible dribbles, flair and skill, Brazilian joy",
    "Esporte BR",
    "2010s",
    0
  ],
  [
    "anchor",
    "Serena Williams",
    "Serena Williams, catsuit, French Open, body and power defying every convention",
    "Esporte",
    "2010s",
    0
  ],
  [
    "anchor",
    "Simone Biles",
    "Simone Biles mid-air triple twisting double layout, gravity simply does not apply",
    "Esporte",
    "2010s",
    0
  ],
  [
    "anchor",
    "Hamilton (F1)",
    "Lewis Hamilton, rainbow helmet, seven world championships, F1 history personified",
    "Esporte",
    "2010s",
    0
  ],
  [
    "anchor",
    "Greta Thunberg",
    "Greta Thunberg at the UN, braids, how dare you stare, generation Z fury",
    "Política",
    "2010s",
    0
  ],
  [
    "anchor",
    "Jeff Bezos",
    "Jeff Bezos, shaved head, laughing on his yacht, Amazon empire at a glance",
    "Tecnologia",
    "2010s",
    0
  ],
  [
    "anchor",
    "Elon Musk (SpaceX)",
    "Elon Musk watching a Falcon 9 rocket launch, SpaceX pride, Silicon Valley messiah",
    "Tecnologia",
    "2010s",
    0
  ],
  [
    "scenario",
    "Pelourinho, Salvador, 80s",
    "Pelourinho historic quarter, Salvador, 1980s, colorful colonial facades, street drummers, Candomblé energy",
    "Brasil",
    "80s",
    0
  ],
  [
    "scenario",
    "MASP, SP, Anos 70",
    "MASP museum on Avenida Paulista 1970s, Lina Bo Bardi's red concrete pillars, São Paulo before the skyscrapers",
    "Brasil",
    "70s",
    0
  ],
  [
    "scenario",
    "Feira Hippie de Ipanema",
    "Hippie Fair of General Osório Square, Ipanema, 1975, leather crafts, macramé, peace signs and bossa nova",
    "Brasil",
    "70s",
    0
  ],
  [
    "scenario",
    "Brasília Anos 60",
    "Brasília just inaugurated 1960, Oscar Niemeyer curves under enormous sky, red laterite dust everywhere",
    "Brasil",
    "70s",
    0
  ],
  [
    "scenario",
    "Rua 25 de Março, SP",
    "Rua 25 de Março São Paulo 1990s, total commercial chaos, goods stacked to the sky, Lebanese shopkeepers, immigrant energy",
    "Brasil",
    "90s",
    0
  ],
  [
    "scenario",
    "Baile Funk, Rio 2005",
    "Baile funk in Rio de Janeiro favela, 2005, strobe light, bass frequencies shaking concrete walls, youth and danger",
    "Brasil",
    "2000s",
    0
  ],
  [
    "scenario",
    "Trincheira da Greve ABC",
    "ABC Paulista factory strike picket line, 1979, Lula in a white shirt, workers and police facing each other in the rain",
    "Brasil",
    "70s",
    0
  ],
  [
    "scenario",
    "Copacabana Palace, 1950s",
    "Copacabana Palace hotel 1950s, Rio de Janeiro golden era, elegant suits and cocktails, Sugarloaf Mountain perfect",
    "Brasil",
    "70s",
    0
  ],
  [
    "scenario",
    "Hospital das Clínicas SP",
    "Hospital das Clínicas São Paulo, 1990s, overflowing public health system, nurses running, stark fluorescent light",
    "Brasil",
    "90s",
    0
  ],
  [
    "scenario",
    "Carnaval de Salvador",
    "Carnival in Salvador Bahia, trio elétrico truck, Camarote da Cerveja, million bodies in the street, Axé loudspeakers",
    "Brasil",
    "2000s",
    0
  ],
  [
    "scenario",
    "Manaus Opera House, 1900s",
    "Teatro Amazonas Manaus, 1900 rubber boom, pink and white opera house, jungle and Italian marble collision",
    "Brasil",
    "70s",
    0
  ],
  [
    "scenario",
    "Comunidade da Rocinha",
    "Rocinha favela, Rio de Janeiro, aerial view, brick labyrinth against the forest, the largest favela in Brazil",
    "Brasil",
    "2000s",
    0
  ],
  [
    "scenario",
    "Carandiru, 1992",
    "Carandiru Penitentiary, São Paulo 1992, overcrowded cells, the day before the massacre, institutional dread",
    "Brasil",
    "90s",
    0
  ],
  [
    "scenario",
    "Lençóis Maranhenses",
    "Lençóis Maranhenses, white sand dunes filled with turquoise lagoons, impossible lunar landscape in Maranhão",
    "Brasil",
    "",
    0
  ],
  [
    "scenario",
    "Alto do Moura, Caruaru",
    "Alto do Moura in Caruaru, the clay sculpture capital of Brazil, Mestre Vitalino workshop, rooster and human figures",
    "Brasil",
    "",
    0
  ],
  [
    "scenario",
    "Parque do Ibirapuera, 1970s",
    "Ibirapuera Park São Paulo 1970s, Bienal Pavilion, cars parked on grass, people in bell-bottoms strolling",
    "Brasil",
    "70s",
    0
  ],
  [
    "scenario",
    "Woodstock, 1969",
    "Woodstock festival, 1969, half million people, rain and mud, music as spiritual emergency",
    "Internacional",
    "70s",
    0
  ],
  [
    "scenario",
    "Harlem, NYC, 1975",
    "Harlem, New York City 1975, block parties, hip-hop being born in an abandoned building, summer heat",
    "Internacional",
    "70s",
    0
  ],
  [
    "scenario",
    "Saigon, 1975",
    "Saigon, April 1975, rooftop helicopter evacuation, a war ending in chaos and flight",
    "Internacional",
    "70s",
    0
  ],
  [
    "scenario",
    "Muro de Berlim, 1989",
    "Berlin Wall, November 1989, the night it fell, people with hammers and tears, East and West touching",
    "Internacional",
    "80s",
    0
  ],
  [
    "scenario",
    "Praça Tiananmen, 1989",
    "Tiananmen Square, Beijing, June 1989, one man facing a column of tanks, stillness against metal",
    "Internacional",
    "80s",
    0
  ],
  [
    "scenario",
    "Johannesburg, 1994",
    "Johannesburg, South Africa, election day 1994, the first democratic election, queues stretching to the horizon",
    "Internacional",
    "90s",
    0
  ],
  [
    "scenario",
    "Hong Kong na Noite",
    "Hong Kong at night, 1997, neon reflections in rain puddles, the last British governor leaving, handover tension",
    "Internacional",
    "90s",
    0
  ],
  [
    "scenario",
    "Manhattan, 11/09/2001",
    "Lower Manhattan, September 11 2001, both towers still standing in smoke, silence before the second fall",
    "Internacional",
    "2000s",
    0
  ],
  [
    "scenario",
    "Bagdá Ocupada, 2003",
    "Baghdad 2003, US soldiers, Saddam statue falling, dust and disoriented crowds, war without an ending",
    "Internacional",
    "2000s",
    0
  ],
  [
    "scenario",
    "Praia de Tel Aviv",
    "Tel Aviv beach, warm Mediterranean evening, young people dancing next to artillery sound in the distance",
    "Internacional",
    "2000s",
    0
  ],
  [
    "scenario",
    "Fukushima, 2011",
    "Fukushima exclusion zone, 2011, empty streets overgrown with grass, radiation silence, shopping mall abandoned",
    "Internacional",
    "2010s",
    0
  ],
  [
    "scenario",
    "Praça Tahrir, 2011",
    "Tahrir Square, Cairo 2011, Arab Spring, millions filling the square, mobile phones and revolution",
    "Internacional",
    "2010s",
    0
  ],
  [
    "scenario",
    "Silicon Valley Campus",
    "Apple or Google campus, California 2010s, glass and grass, free cafeteria, the empire of algorithms with a pleasant face",
    "Internacional",
    "2010s",
    0
  ],
  [
    "scenario",
    "Kibera, Nairobi",
    "Kibera slum, Nairobi, largest informal settlement in Africa, density and color and music",
    "Internacional",
    "2010s",
    0
  ],
  [
    "scenario",
    "Tóquio Shibuya Crossing",
    "Shibuya crossing Tokyo at rush hour, the famous intersection flooded with umbrellas and direction",
    "Internacional",
    "2000s",
    0
  ],
  [
    "scenario",
    "Veneza Inundada",
    "Venice at high tide, acqua alta, water lapping into St. Mark's Basilica, gondolas level with palazzos",
    "Internacional",
    "",
    0
  ],
  [
    "scenario",
    "Lagos Noturno",
    "Lagos, Nigeria at night, Afrobeats pulsing from clubs, traffic standstill, the largest city in Africa",
    "Internacional",
    "2010s",
    0
  ],
  [
    "scenario",
    "Chernobyl, 1986",
    "Chernobyl, April 1986, the reactor burning blue in the night sky, the invisible catastrophe beginning",
    "Internacional",
    "80s",
    0
  ],
  [
    "scenario",
    "Deserto do Atacama",
    "Atacama Desert, the driest place on Earth, red stone and white salt flats, sky like another planet",
    "Fantasia",
    "",
    0
  ],
  [
    "scenario",
    "Ilha de Páscoa",
    "Easter Island, moai statues against the Pacific Ocean horizon, ancient enigma and Polynesian silence",
    "Fantasia",
    "",
    0
  ],
  [
    "scenario",
    "Estação Espacial ISS",
    "International Space Station interior, weightlessness, cables and screens, Earth curving below the window",
    "Fantasia",
    "2010s",
    0
  ],
  [
    "scenario",
    "Submarino Profundo",
    "Deep sea research submarine interior, bioluminescent creatures pressing against the porthole, absolute pressure and darkness",
    "Fantasia",
    "",
    0
  ],
  [
    "scenario",
    "Catedral de Chartres",
    "Chartres Cathedral interior, French Gothic, rose window light flooding the nave in colored rivers, medieval devotion",
    "Fantasia",
    "",
    0
  ],
  [
    "scenario",
    "Campos de Refugiados",
    "UNHCR refugee camp, tents to the horizon, the geography of displacement and human resilience",
    "Internacional",
    "2010s",
    0
  ],
  [
    "style",
    "Arte Rupestre Digital",
    "digital cave painting aesthetic — primitive marks and forms translated to glowing screen surfaces",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Azulejo Português",
    "traditional Portuguese azulejo tile illustration — blue and white cobalt, geometric floral borders, flat naïf figures",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Arte Marajoara",
    "Pre-Columbian Marajó Island ceramic art style — geometric spirals, earthen red and black, ancient Amazonian patterns",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Entalhe em Madeira Nordestina",
    "hand-carved Northeastern Brazilian woodcarving style — rough chisel marks, folk religious imagery, raw cedar and mahogany grain",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Foto Polaroid Desbotada",
    "instant Polaroid photograph, overexposed corners, 1980s color shift, square format, white border",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Arte Art Nouveau",
    "Art Nouveau illustration — organic flowing lines, botanical motifs, Mucha-style female figure, decorative gold border",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Pintura de Ossos de Dia dos Mortos",
    "Día de los Muertos skull and skeleton illustration, bright marigolds, vibrant Mexican folk art palette",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Pintura Sumi-e Japonesa",
    "Japanese sumi-e ink painting — gestural single brushstroke, vast empty space, mountain or figure barely suggested",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Risografia",
    "risograph print — limited ink layers, deliberate color misregistration, granular texture, zine aesthetic",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Gravura em Metal (Etching)",
    "copper plate etching print — fine cross-hatching, high detail, Goya-era chiaroscuro, plate texture visible",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Retrato Victorian Hand-Colored",
    "Victorian-era hand-colored photograph — tinted cheeks and lips on otherwise monochrome daguerreotype, formal stiffness",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Arte de Vitrine Natalina",
    "holiday window display illustration aesthetic — warm light from within, snow outside, nostalgic department store art",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Blueprint Técnico",
    "technical blueprint drawing — white lines on Prussian blue, precise engineering annotations, elevation and section views",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Mapa Antigo Português",
    "16th-century Portuguese cartographic illustration — Latin annotations, hand-drawn coastlines, sea monsters, compass rose",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Render Brutalist 3D",
    "brutalist architecture 3D render — raw exposed concrete, geometric mass, overcast sky, no human figures",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Fotonovela Italiana 60s",
    "1960s Italian fumetti fotonovela aesthetic — photographed actors with speech bubbles, melodrama, Roman shadows",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Arte Budista Tibetana (Thangka)",
    "Tibetan Buddhist thangka painting — gold leaf, intricate mandala geometry, deity figures, deep jewel colors, linen cloth",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Cartaz Belle Époque",
    "Belle Époque theater poster, Toulouse-Lautrec style — flat color, expressive linework, Parisian cabaret atmosphere",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Papel de Parede Vitoriano",
    "Victorian wallpaper pattern rendered large scale — dense botanical repeat, Morris & Co style, dark and lush",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Diagrama de Infográfico Vintage",
    "vintage scientific infographic illustration — sepia, hand-lettered annotations, exploded mechanical diagrams, 1920s educational book",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Tapeçaria Medieval",
    "medieval tapestry weaving style — flat woven figures, hunting scene, Bayeux Tapestry horizontal narrative, mille-fleurs background",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Capa de Pulp Fiction",
    "1950s pulp fiction magazine cover — lurid colors, sensational typography, exaggerated drama, grindhouse aesthetic",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Arte Celta Iluminada",
    "Celtic illuminated manuscript style — interlaced knotwork borders, zoomorphic initials, Book of Kells gold and ultramarine",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Foto de Satélite NASA",
    "NASA satellite imagery aesthetic — false-color elevation map, top-down orbital view, geographic abstraction",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Impressionismo Francês",
    "French Impressionist oil painting — loose visible brushwork, dappled natural light, Monet or Renoir atmospheric dissolve",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Expressionismo Alemão",
    "German Expressionist painting — distorted faces, anguished angles, dark psychological terror, Kirchner or Nolde palette",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Litografia de Cordel",
    "Brazilian cordel string literature lithograph cover — bold hand-carved face, extreme graphic contrast, northeastern hero narrative",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Arte Sequencial (HQ Marvel 70s)",
    "1970s Marvel Comics sequential art — Jack Kirby dots, dynamic panel layouts, hyperbolic action poses, word balloon typography",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Animação Disney Clássica",
    "Disney golden age hand-drawn animation style, 1940s — clean ink line, watercolor wash backgrounds, expressive eyes",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Street Art (Tag e Wildstyle)",
    "graffiti wildstyle lettering and character, spray can on brick, New York City subway heritage, chrome and color",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Fotografia Fashion dos Anos 70",
    "1970s fashion photography, Helmut Newton influence — stark shadows, power pose, black and white German edge",
    "",
    "",
    0,
    "Referência de linguagem"
  ],
  [
    "style",
    "Tarsila do Amaral",
    "in the style of Tarsila do Amaral — modernist Brazilian palette, rounded feminine forms, abaporu proportions, vivid tropicalism",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Cândido Portinari",
    "in the manner of Cândido Portinari — Brazilian social realism, elongated workers, red laterite earth, political humanity",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Di Cavalcanti",
    "in the painterly style of Di Cavalcanti — mulata figures, carnival colors, Brazilian sensuality, Cubist-Expressionist hybrid",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Nelson Leirner",
    "in the conceptual-pop tradition of Nelson Leirner — Brazilian consumer culture deconstructed with humor and provocation",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Vik Muniz",
    "in the photographic tradition of Vik Muniz — image constructed from unexpected materials, seen from above, beauty from trash or chocolate",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Hélio Oiticica",
    "in the spirit of Hélio Oiticica's Parangolés — participatory art, sensory color, favela geometry, the body as canvas",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Lygia Clark",
    "inspired by Lygia Clark's neo-concrete forms — relational objects, sensory participation, malleable aluminum, the body is the work",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Frans Post",
    "in the tradition of Frans Post, Dutch painter of colonial Brazil — 17th-century topographical precision, sugar mill landscapes, exotic flora",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Debret",
    "in the style of Jean-Baptiste Debret — 19th-century Brazilian court illustration, ethnographic precision, colonial ceremony",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Henri Cartier-Bresson",
    "in the decisive moment tradition of Henri Cartier-Bresson — black and white, geometry in street photography, the fraction of a second",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Vivian Maier",
    "in the style of Vivian Maier — street photography, mirror self-portrait, hidden observation, raw domestic and urban humanity",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Arbus",
    "in the unsettling portrait tradition of Diane Arbus — flash, direct gaze, marginalized subjects treated with leveling dignity",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Saul Leiter",
    "in the painterly color photography style of Saul Leiter — snow, glass reflections, peripheral framing, New York impressionism",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "William Eggleston",
    "in the democratic photography of William Eggleston — mundane American subject, dye transfer saturated color, radical ordinariness",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Edward Hopper",
    "in the mood of Edward Hopper — American loneliness, diner window light, urban solitude, 1950s petroleum hour",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Magritte",
    "in the surrealist tradition of René Magritte — immaculate impossible image, bowler hats and blue skies, philosophical visual pun",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Salvador Dalí",
    "in the melting vision of Salvador Dalí — precise impossible forms, Catalan light, surrealist landscape, dream logic made painterly",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Hieronymus Bosch",
    "in the nightmarish detail of Hieronymus Bosch — medieval hell populated with hybrid creatures, moral panorama, Garden of Earthly Delights",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Alphonse Mucha",
    "in the decorative style of Alphonse Mucha — Art Nouveau, botanical border, female figure as spiritual center, gold and pastel",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Gustav Klimt",
    "in the golden mosaic style of Gustav Klimt — gold leaf, Byzantine pattern, embrace and erotic tension, decorative and profound",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Egon Schiele",
    "in the raw expressionist line of Egon Schiele — angular contorted bodies, nervous line, psychological exposure, Vienna 1910",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Pieter Bruegel",
    "in the panoramic tradition of Pieter Bruegel the Elder — Flemish landscape full of tiny human figures, moral allegory in community",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Vermeer",
    "in the intimate domestic light of Johannes Vermeer — single window, pearl luminescence, Dutch interior, stopped time",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Velázquez",
    "in the painterly authority of Diego Velázquez — court portrait with psychological depth, Las Meninas compositional mastery",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "J.M.W. Turner",
    "in the atmospheric vortex of J.M.W. Turner — light dissolved into chaos, storm and sea, Romanticism at the verge of abstraction",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Caspar David Friedrich",
    "in the sublime of Caspar David Friedrich — solitary figure from behind, vast landscape, Romanticism, the individual against infinity",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Hokusai",
    "in the tradition of Katsushika Hokusai — woodblock ukiyo-e print, The Great Wave composition logic, Japanese nature and drama",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Hiroshige",
    "in the serene landscape tradition of Utagawa Hiroshige — Japanese woodblock, rain or snow, travelers on mountain pass, quiet beauty",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Cindy Sherman",
    "in the staged self-portrait tradition of Cindy Sherman — role and costume, film still implication, identity construction as art",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Jeff Wall",
    "in the large-format lightbox tradition of Jeff Wall — cinematically staged documentary scene, Vancouver, moral ambiguity in ordinary moment",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Wolfgang Tillmans",
    "in the intimate archive of Wolfgang Tillmans — casual photographs at eye level, nightlife and sunlight, queer and tender",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Peter Beard",
    "in the wild diary tradition of Peter Beard — Africa, animals, handwriting over photographs, life annotated as art",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Ernesto Neto",
    "inspired by Ernesto Neto's sensory installations — translucent fabric forms, smell and touch implied, body and space in dialogue",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "style",
    "Chris Ware",
    "in the grid-mapped graphic novel style of Chris Ware — tiny panels, nostalgic color, emotional precision, loneliness as diagram",
    "",
    "",
    0,
    "Referência de assinatura"
  ],
  [
    "trend",
    "Retratado como Boneco de Cera (Madame Tussauds)",
    "depicted as a wax figure in Madame Tussauds — hyper-realistic but uncanny, velvet rope in front, flash photograph lighting",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Capa de Caras Magazine (Anos 90)",
    "staged as a 1990s Caras magazine cover — extreme close-up, glamour lighting, celebrities at their most staged and luminous",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Estátua de Aeroporto",
    "rendered as a bronze airport departure hall sculpture — life-size, anonymous travellers walking past unseeing",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Ex-Voto Nordestino",
    "depicted as a hand-painted ex-voto wooden plaque — naïf style, miracle attributed, church wall setting, gratitude in primitive text",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Espécime de Museu de Ciências",
    "displayed as a natural history museum specimen — glass case, pinned and labeled, institutional description placard, cold classification",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Corrida de Videogame (Sprite Select)",
    "as a character selection screen in a 1994 fighting game — stats panel, move list, select your fighter typography",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Personagem de Cordel em Verso",
    "as hero of a printed cordel pamphlet — heptasyllabic verse narrates their deeds in woodcut panels, Northeastern Brazil",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Fotografia de Escola",
    "as an official school portrait photograph — blue backdrop, awkward smile, student uniform, 1997 yearbook format",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Mascote de Time Brasileiro",
    "reimagined as a Brazilian football club mascot — cartoon style, team colors, grito de guerra pose, stadium entrance gate",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Figura de Presépio Nordestino",
    "as a hand-painted clay nativity scene figure — folk religious tradition, earthen colors, simplified but expressive form",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Preso em Âmbar (Museu Natural)",
    "preserved in amber, displayed in a natural history museum — ancient, suspended in gold resin, perfectly preserved tragedy",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Folha de Álbum de Figurinhas",
    "as a Panini sticker album card — silver holographic border, name bar at bottom, 1994 World Cup sticker energy",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Verbete da Wikipédia (2006)",
    "depicted as a Wikipedia article's main illustration — white background, descriptive caption, no-frills documentary neutrality",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Propaganda de Cerveja Brasileira",
    "as a 1990s Brazilian beer advertisement — tropical setting, yellow and green, humor and sexual charge, Brahma or Skol aesthetic",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Cena de Telenovela das 9",
    "staged as a Brazilian prime-time novela scene — overlit studio, dramatic close-up, tears about to fall, Globo aesthetic",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Personagem de RPG de Mesa",
    "illustrated as a tabletop RPG character sheet — stats panel, equipment list, class and alignment, dungeon master's notebook",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Frente de Camisa de Time",
    "as a football shirt graphic — club crest style, shield form, heraldic animal, Brazilian sports identity",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Herói de Cordel em Quadrão",
    "as a full-panel Brazilian cordel comic book hero — dynamic pose, speech bubble in verse, Northeast setting",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Retrato Policial (Mugshot)",
    "as a police mugshot — front and profile views, height ruler, number placard, institutional fluorescent light, deadpan",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Pôster de Se Procura",
    "on a wanted poster — PROCURADO in bold, black and white portrait, reward amount, western or noir atmosphere",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Embrulho de Produto de Mercado",
    "illustrated on a consumer product package — mascot and brand language, nutritional information panel, Brazilian supermarket shelf",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Personagem de Animê Brasileiro",
    "reimagined as a Brazilian anime character — large eyes, Rio or Salvador setting, Axé or funk soundtrack implied, mecha or magical girl genre",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "trend",
    "Santos do Povo (Garrafa de Cachaça)",
    "depicted as the label of an artisanal cachaça bottle — Northeastern saint iconography, hand-lettered name, sugar cane motif",
    "",
    "",
    0,
    "Referência de torcao"
  ],
  [
    "detail",
    "Moscas em Voo Lento",
    "slow-motion flies visible in the air, suggesting heat, decay, and the tropics at their most humid and real",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Data de Nascimento como Código",
    "a birth year or date encoded subtly in the image — as a license plate, a graffiti tag, or a worn tattoo",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Sombra que Não Corresponde",
    "the subject's shadow does not match their form — it belongs to someone or something else entirely, cast from an unseen source",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Espelho Rachado",
    "a cracked mirror somewhere in the frame — reflection multiplied and distorted, fracture as metaphor",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Relógio Parado",
    "a clock visible in the scene showing a specific time — stopped, meaningful, the moment preserved in amber",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Bilhete Escrito à Mão",
    "a handwritten note visible somewhere in the scene — illegible but emotional, personal history in cursive",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Plástico de Cadeira Coberto",
    "plastic furniture cover still on a chair or couch — Brazilian domestic detail, preservation as social anxiety",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Fotografia Dentro da Fotografia",
    "a framed photograph within the photograph — another scene nested inside, memory within memory",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Cigarro a Consumir-se",
    "a burning cigarette balanced on an ashtray's edge — smoke rising, time passing, the scene about to change",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Cobertor de Crochê",
    "a handmade crochê blanket visible in the scene — grandmother's hands implied, domestic warmth, acrylic yarn and memory",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Garrafão de Água Mineral",
    "a blue plastic water gallon jug visible in the scene — Brazilian domestic signifier, social class quietly declared",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "TV Ligada ao Fundo",
    "a CRT television playing something in the background — news or novela barely visible, blue light spilling into the room",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Cachorro Vira-Lata",
    "a Brazilian mixed-breed street dog (vira-lata) somewhere in the frame — observing, resting, belonging fully to the scene",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Fio de Cabelo na Lente",
    "a single hair resting on the camera lens — intimate imperfection, the photographer's presence implied",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Número de Protocolo",
    "an official protocol number stamped or written somewhere visible — bureaucracy as aesthetic, the state's fingerprint",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Ventilador de Teto Girando",
    "a ceiling fan in slow motion above the scene — tropical heat, Southern light, the rhythm of humidity",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Caixa de Fósforos",
    "a matchbox visible somewhere in the composition — fire potential, the ordinary made dangerous, Brazilian brand design",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Sandália Havaiana",
    "a pair of Havaianas somewhere in the scene — Brazilian universal object, class and comfort and beach collapsed into one",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Folha de Bananeira",
    "a banana leaf framing or cutting through the image — tropical weight, tropical green, tropical logic",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Mancha de Umidade na Parede",
    "a damp stain on the wall behind the subject — tropical decay, time passing through plaster, interior weather",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Réplica em Miniatura",
    "a miniature replica of the main subject visible somewhere in the frame — the thing observing itself, uncanny repetition",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Rasgo na Borda do Frame",
    "the image tears at one edge as if it is a printed photograph being ripped — the image as physical fragile object",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Balão Murchando",
    "a deflating balloon somewhere in the scene — celebration ending, time's passage made rubber and color",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Abelha no Quadro",
    "a single bee resting somewhere unexpected in the composition — fragility, nature inserting itself, the detail that changes everything",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Vapor de Comida Quente",
    "steam rising from a plate of food in the foreground — meal as presence, warmth and nourishment, the domestic sacred",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Estática de Televisão",
    "television static snow texture overlaid at the edges of the image — signal lost, memory failing, the broadcast ending",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Passo de Samba em Blur",
    "motion blur on feet that are dancing — the rest of the image sharp, only the rhythm is moving",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Rasura de Censurado",
    "a thick black censorship bar over some element of the image — what was removed matters as much as what remains",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "detail",
    "Corda Bamba",
    "a tightrope wire visible across the image — the subject is or will be on it, equilibrium as permanent condition",
    "",
    "",
    0,
    "Referência de tempero"
  ],
  [
    "medium",
    "Capa de Livro de Bolso",
    "mass market paperback book cover format — spine visible, author credit, tag-line below title, bookstore shelf context",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Pôster de Coluna de Metrô",
    "vertical subway column poster format, 3:1 ratio, designed for passing eyes, bold and immediate",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Tela de Celular (9:16)",
    "vertical 9:16 smartphone screen format, social media native, full-bleed immersion, thumb-scroll ready",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Fita K7 (J-Card)",
    "cassette tape J-card insert format — folded rectangle, tracklist side, lo-fi illustration, 1990s bedroom",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Ingresso de Show",
    "concert ticket format — perforated edge, barcode, venue name, date stamped, collectible artifact",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Capa de Almanaque",
    "Brazilian almanaque calendar cover format — year prominent, folkloric illustration, 12-month calendar grid implied below",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Placa de Trânsito",
    "road sign format — standardized colors and shapes, pictographic language, warning or direction as image",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Selo Postal",
    "postage stamp format — perforated border, denomination value, miniature scene of national significance",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Rótulo de Cachaça",
    "cachaça bottle label format — Brazilian heraldic illustration, artisanal typography, geographical indication seal",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Placa de Rua Artesanal",
    "hand-painted Brazilian city street sign format — azulejo tile or painted wood, neighborhood name, folk typography",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Capa de Disco (Maxi-Single)",
    "12-inch vinyl maxi-single cover format — square, design-forward, 1980s club aesthetic, genre information at bottom",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Capa de Quadrinho",
    "comic book cover format — dynamic action framing, story-title typography, issue number and price in corner",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Fotografia 4x6 com Borda",
    "standard 4x6 developed photograph with white border, the physical object of memory",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Banner de Caminhão Sonoro",
    "political campaign sound truck banner format — face enormous, name in impact typography, color-field background, Brazil election",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Peça de LEGO (Instrução)",
    "LEGO instruction manual illustration format — white background, numbered step, isometric assembly diagram, primary colors",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Outdoor de Rodovia",
    "Brazilian highway billboard format — weathered, large, seen at 120km/h, political or beer or cell plan",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "medium",
    "Zine Underground (A5)",
    "photocopied underground zine page, A5 format, risograph texture, cut-and-paste layout, punk DIY aesthetic",
    "",
    "",
    0,
    "Referência de formato"
  ],
  [
    "palette",
    "Verde Mata Atlântica",
    "dominant palette: Atlantic Forest deep greens — emerald, moss, shadow-black, rain-wet leaf",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Amarelo e Verde Brasilidade",
    "dominant palette: Brazil national yellow and green — patriotic, ambiguous, beautiful and contested",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Marrom Seco Sertão",
    "dominant palette: Brazilian sertão dry season — bleached bone white, dust gray, caatinga brown, minimal shadow",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Azul e Branco Azulejo",
    "dominant palette: cobalt blue and stark white — Portuguese tile tradition, clean graphic contrast",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Roxo e Dourado Carnaval",
    "dominant palette: carnival purple and gold — theatrical richness, feathers and sequins implied",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Cinza Industrial",
    "dominant palette: industrial gray scale — concrete, steel, factory, the ABC strikes palette",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Vermelho Sangue",
    "dominant palette: deep blood red against near-black — political urgency, sacrifice, passion at its most extreme",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Rosa Millennial",
    "dominant palette: millennial pink and rose gold — Instagram-era softness, femininity, 2010s visual culture",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Bege e Nude Moderno",
    "dominant palette: warm nude and beige minimalism — skin tones, linen, sand, understated luxury",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Turquesa e Coral",
    "dominant palette: tropical turquoise and coral — Caribbean sea and tropical fish, Copacabana 1970s postcard",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Escuro com Pops Neon",
    "dominant palette: near-black with isolated neon accents — dark matter with flashes of electric color breaking through",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Dourado Oxidado",
    "dominant palette: oxidized gold, verdigris, rust — aged metal, time's effect on wealth, patina as beauty",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Branco Hospitalar",
    "dominant palette: clinical white and off-white — institutional, sterile, absence as presence",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Madrugada Azul",
    "dominant palette: 4am blue — the specific color of night just before dawn, cold and liminal and quiet",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Terroso Pré-Colombiano",
    "dominant palette: pre-Columbian earth — oxblood, ochre, raw umber, the Americas before Columbus",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Preto e Vermelho Expressionista",
    "dominant palette: German Expressionist red and black — psychological violence, maximum graphic tension, Munch and Kirchner",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Ciano Ciberpunk",
    "dominant palette: cyberpunk teal and electric cyan on black — digital rain, data streams, the city as circuit",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "palette",
    "Esverdeado de Câmera de Segurança",
    "dominant palette: security camera green-gray nightvision — surveillance aesthetic, thermal ambiguity, watching without feeling",
    "",
    "",
    0,
    "Referência de paleta"
  ],
  [
    "mood",
    "Tédio Sagrado",
    "emotional register: sacred boredom — the profound hidden inside the deeply, uselessly ordinary moment",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Orgulho Contido",
    "emotional register: restrained pride — dignity hard-won and held quietly, not performed but present",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Curiosidade Feroz",
    "emotional register: ferocious curiosity — intelligence hungry, eyes forward, the world as unsolved problem",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Saudade",
    "emotional register: pure saudade — the specifically Portuguese-Brazilian longing for something beautiful that is gone or maybe never was",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Terror Cotidiano",
    "emotional register: everyday terror — the horror present in the mundane, the catastrophe that no one around you notices",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Carnavalesco",
    "emotional register: carnivalesque — all hierarchies inverted, excess and play and the body sovereign for one night",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Clínico / Dissociado",
    "emotional register: clinical dissociation — observed from outside oneself, the body visible but the self elsewhere",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Esperança Exausta",
    "emotional register: exhausted hope — people who have been waiting for too long but still have not given up",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Gratidão Excessiva",
    "emotional register: excessive gratitude — overwhelming thankfulness for something small, grace in the ordinary",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Vergonha Alheia",
    "emotional register: second-hand embarrassment — the viewer cannot look away and cannot look directly either",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Luxúria Tropical",
    "emotional register: tropical lust — heat and slowness and the body as constant fact, desire in the air like humidity",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Melancolia do Domingo",
    "emotional register: Sunday afternoon melancholy — the week ending, time passing, something small and irreversible",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Fúria Justa",
    "emotional register: righteous fury — anger completely deserved, moral clarity giving fire a direction and a target",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Êxtase Coletivo",
    "emotional register: collective ecstasy — one feeling shared by thousands of bodies simultaneously, the self dissolved in the crowd",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Resignação Elegante",
    "emotional register: elegant resignation — acceptance of the unavoidable arrived at through long thought and not defeat",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "mood",
    "Ternura Improvável",
    "emotional register: unlikely tenderness — softness discovered in the hardest context, the gentle detail in the brutal scene",
    "",
    "",
    0,
    "Referência de escala"
  ],
  [
    "composition",
    "Macro Extremo (Textura)",
    "extreme macro photography — surface texture fills the entire frame, material identity revealed at cellular scale",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Periscópio (Água)",
    "split-frame periscope shot — half above water, half below, two worlds divided by the surface tension line",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Retrovisor de Carro",
    "view through a car rear-view mirror — the subject reflected small in the glass, the road ahead out of frame",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Câmera de Segurança (CFTV)",
    "CCTV security camera aesthetic — wide angle, timestamp burned into corner, surveillance green-gray color",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Câmera Escondida (Found Footage)",
    "found footage aesthetic — shaky, amateur, the camera barely keeping up with events, format suggests truth",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Câmera no Capacete",
    "helmet-cam or body-cam POV — action sport or police footage, wide fisheye, physical urgency",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Teleobjetiva Comprimida",
    "extreme telephoto lens compression — foreground and background smashed together, figures flattened into graphic layers",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Câmera por Debaixo da Mesa",
    "low angle shot from beneath a table — legs, shoes, and the undersides of surfaces, the overlooked world below",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Câmera no Teto (Plafôn)",
    "camera mounted on the ceiling looking straight down — figures seen only as tops of heads and shoulders, the God angle",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Câmera Lenta (Phantom)",
    "ultra slow-motion Phantom camera — motion invisible to the naked eye revealed, droplets and fabric and fire",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Câmera Rápida (Time-lapse)",
    "time-lapse photography — clouds race, crowds swirl, seasons pass, a single frame represents compressed time",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Perimetral (Câmera de Futebol)",
    "perimeter-camera football broadcast aesthetic — wide and slightly low, the pitch as theater, warm stadium light",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Câmera de Segurança de Banco",
    "bank robbery surveillance camera aesthetic — extremely wide, ceiling corner, the entire room visible and impersonal",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Porta Entreaberta",
    "shot through a barely open door — partial view, implied eavesdropping, the frame as threshold, intimacy observed from outside",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Câmera de Vestíbulo",
    "hotel lobby or elevator security camera angle — overhead, slightly off-center, people waiting and unaware",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "composition",
    "Zoom Nervoso (Newsreel)",
    "handheld newsreel zoom — uncertain framing, something happening fast, journalism under pressure",
    "",
    "",
    0,
    "Referência de camera"
  ],
  [
    "anchor",
    "Darth Vader",
    "Darth Vader, black armor, red lightsaber ignited, the Death Star corridor behind him",
    "Cinema",
    "70s",
    1
  ],
  [
    "anchor",
    "Alien (Xenomorph)",
    "H.R. Giger's Xenomorph creature from Alien, biomechanical horror, dripping corridor, Ridley Scott 1979",
    "Cinema",
    "70s",
    1
  ],
  [
    "anchor",
    "HAL 9000",
    "HAL 9000's red camera eye, Discovery One spacecraft, cold intelligence behind a glass lens",
    "Cinema",
    "70s",
    1
  ],
  [
    "anchor",
    "Luke Skywalker",
    "Luke Skywalker, blue lightsaber, binary Tatooine sunset, the hero's journey beginning",
    "Cinema",
    "70s",
    1
  ],
  [
    "anchor",
    "T-800 Terminator",
    "The Terminator T-800, chrome endoskeleton, red eye, Los Angeles ruins, unstoppable machine",
    "Cinema",
    "80s",
    1
  ],
  [
    "anchor",
    "John McClane",
    "John McClane, barefoot on broken glass, Nakatomi Plaza, covered in sweat and grime, unwilling hero",
    "Cinema",
    "80s",
    1
  ],
  [
    "anchor",
    "Patrick Bateman",
    "Patrick Bateman, American Psycho, business card in hand, immaculate suit, something wrong behind the eyes",
    "Cinema",
    "2000s",
    1
  ],
  [
    "anchor",
    "Anton Chigurh",
    "Anton Chigurh, captive bolt pistol, dead eyes, No Country for Old Men, absolute evil wearing a bowl cut",
    "Cinema",
    "2000s",
    1
  ],
  [
    "anchor",
    "The Dude",
    "The Dude from The Big Lebowski, bathrobe, White Russian in hand, bowling alley light, cosmic ease",
    "Cinema",
    "90s",
    1
  ],
  [
    "anchor",
    "Hannibal Lecter",
    "Hannibal Lecter in his cell, mask on, Silence of the Lambs, intelligence as predation",
    "Cinema",
    "90s",
    1
  ],
  [
    "anchor",
    "Clarice Starling",
    "Clarice Starling, FBI trainee, corridor of cells, the lambs screaming behind her eyes",
    "Cinema",
    "90s",
    1
  ],
  [
    "anchor",
    "Vincent Vega",
    "Vincent Vega, Pulp Fiction, black suit, tired and dangerous, diner booth, Uma Thurman across from him",
    "Cinema",
    "90s",
    1
  ],
  [
    "anchor",
    "Maximus Decimus",
    "Maximus Decimus Meridius, Gladiator, sand and blood, Colosseum crowd, are you not entertained",
    "Cinema",
    "2000s",
    1
  ],
  [
    "anchor",
    "V (V for Vendetta)",
    "V in Guy Fawkes mask and black cape, Parliament in flames, symbols and resistance",
    "Cinema",
    "2000s",
    1
  ],
  [
    "anchor",
    "Amélie Poulain",
    "Amélie Poulain, Montmartre rooftop, wide eyes, Paris in autumn colors, Jeunet's magical realism",
    "Cinema",
    "2000s",
    1
  ],
  [
    "anchor",
    "Don Vito Corleone",
    "Don Vito Corleone, The Godfather, dark office, cat in lap, an offer you cannot refuse",
    "Cinema",
    "70s",
    1
  ],
  [
    "anchor",
    "Alex DeLarge",
    "Alex DeLarge from A Clockwork Orange, bowler hat, white suit, single artificial eyelash, Kubrick ultra-violence",
    "Cinema",
    "70s",
    1
  ],
  [
    "anchor",
    "Imperador Palpatine",
    "Emperor Palpatine, hooded, lightning from his fingers, the dark side throne room, Star Wars",
    "Cinema",
    "80s",
    1
  ],
  [
    "anchor",
    "Roy Batty",
    "Roy Batty, Blade Runner rooftop rain, tears in the rain speech, replicant at the end of his life",
    "Cinema",
    "80s",
    1
  ],
  [
    "anchor",
    "John Wick",
    "John Wick, black suit, gun in each hand, tactical violence, they killed his dog",
    "Cinema",
    "2010s",
    1
  ],
  [
    "anchor",
    "Katniss Everdeen",
    "Katniss Everdeen, Mockingjay, bow drawn, burning districts behind her, the revolution has a symbol",
    "Cinema",
    "2010s",
    1
  ],
  [
    "anchor",
    "Mad Max (Fury Road)",
    "Mad Max on the Interceptor, Fury Road desert, fire and war rigs, post-apocalyptic fury",
    "Cinema",
    "2010s",
    1
  ],
  [
    "anchor",
    "Coringa (Joker 2019)",
    "Arthur Fleck as the Joker, Phoenix performance, staircase dance, Gotham burning, clown makeup running",
    "Cinema",
    "2010s",
    1
  ],
  [
    "anchor",
    "Thanos",
    "Thanos, Infinity Gauntlet, six stones glowing, the universe rebalanced by one snap",
    "Cinema",
    "2010s",
    1
  ],
  [
    "anchor",
    "Tony Soprano",
    "Tony Soprano, bathrobe, ducks in the pool, suburban New Jersey, the weight of two lives",
    "TV",
    "2000s",
    1
  ],
  [
    "anchor",
    "Walter White (Heisenberg)",
    "Walter White as Heisenberg, porkpie hat, dark glasses, I am the one who knocks",
    "TV",
    "2010s",
    1
  ],
  [
    "anchor",
    "Jesse Pinkman",
    "Jesse Pinkman, yo, worn hoodie, meth lab blue glow, youth and moral catastrophe",
    "TV",
    "2010s",
    1
  ],
  [
    "anchor",
    "Omar Little",
    "Omar Little, The Wire, shotgun, long coat, whistling as he walks, Baltimore streets fear him",
    "TV",
    "2000s",
    1
  ],
  [
    "anchor",
    "Cersei Lannister",
    "Cersei Lannister, Iron Throne, blonde and armored, political intelligence behind green eyes",
    "TV",
    "2010s",
    1
  ],
  [
    "anchor",
    "Jon Snow",
    "Jon Snow, Night's Watch black, sword in hand, north of the Wall, winter is here",
    "TV",
    "2010s",
    1
  ],
  [
    "anchor",
    "Eleven (Stranger Things)",
    "Eleven from Stranger Things, shaved head, bloody nose, telekinetic power, Hawkins Indiana 1983",
    "TV",
    "2010s",
    1
  ],
  [
    "anchor",
    "The Mandalorian",
    "The Mandalorian, beskar armor, Baby Yoda on his arm, outer rim planet, this is the way",
    "TV",
    "2010s",
    1
  ],
  [
    "anchor",
    "Jack Bauer",
    "Jack Bauer, 24 hours, gun raised, Los Angeles burning, the cost of safety is everything",
    "TV",
    "2000s",
    1
  ],
  [
    "anchor",
    "Gregory House",
    "Dr. Gregory House, cane, Vicodin bottle, differential diagnosis, brilliant and self-destructive",
    "TV",
    "2000s",
    1
  ],
  [
    "anchor",
    "Dexter Morgan",
    "Dexter Morgan, lab coat, blood slide, Miami, serial killer with a code of honor",
    "TV",
    "2000s",
    1
  ],
  [
    "anchor",
    "Michael Scott",
    "Michael Scott, The Office, Dunder Mifflin, cringe and desperate need for love, paper kingdom",
    "TV",
    "2000s",
    1
  ],
  [
    "anchor",
    "Carrie Bradshaw",
    "Carrie Bradshaw, Sex and the City, New York sidewalk, Manolo Blahnik shoes, laptop open",
    "TV",
    "2000s",
    1
  ],
  [
    "anchor",
    "Mulder e Scully",
    "Mulder and Scully together, X-Files, flashlights in the dark, I want to believe",
    "TV",
    "90s",
    1
  ],
  [
    "anchor",
    "Buffy Summers",
    "Buffy Summers, vampire slayer, stake in hand, Sunnydale cemetery, teenage savior of the world",
    "TV",
    "90s",
    1
  ],
  [
    "anchor",
    "Homer Simpson",
    "Homer Simpson, Springfield, donut in hand, glazed eyes, the American dream devoured",
    "TV",
    "90s",
    1
  ],
  [
    "anchor",
    "Bart Simpson",
    "Bart Simpson on his skateboard, Springfield, don't have a cow man, underachiever on purpose",
    "TV",
    "90s",
    1
  ],
  [
    "anchor",
    "Eric Cartman",
    "Eric Cartman, South Park, Colorado mountains, pure unapologetic villainy in a child's body",
    "TV",
    "90s",
    1
  ],
  [
    "anchor",
    "Negan",
    "Negan, The Walking Dead, Lucille barbed wire bat on shoulder, charismatic tyranny",
    "TV",
    "2010s",
    1
  ],
  [
    "anchor",
    "Villanelle",
    "Villanelle from Killing Eve, assassin in couture fashion, killing as performance art",
    "TV",
    "2010s",
    1
  ],
  [
    "anchor",
    "Mario (Super Mario)",
    "Mario from Super Mario, red cap and overalls, coin floating above, Nintendo platform world",
    "Videogames",
    "90s",
    1
  ],
  [
    "anchor",
    "Sonic the Hedgehog",
    "Sonic the Hedgehog, original Sega design, speed blur, attitude, Green Hill Zone",
    "Videogames",
    "90s",
    1
  ],
  [
    "anchor",
    "Link (Zelda)",
    "Link from The Legend of Zelda: Ocarina of Time, green tunic, Master Sword raised, Hyrule behind him",
    "Videogames",
    "90s",
    1
  ],
  [
    "anchor",
    "Samus Aran",
    "Samus Aran from Metroid, power suit, arm cannon charged, alien planet, bounty hunter alone",
    "Videogames",
    "90s",
    1
  ],
  [
    "anchor",
    "Cloud Strife",
    "Cloud Strife from Final Fantasy VII, enormous Buster Sword, Midgar city, blue SOLDIER eyes",
    "Videogames",
    "90s",
    1
  ],
  [
    "anchor",
    "Solid Snake",
    "Solid Snake from Metal Gear Solid, bandana, sneaking suit, cardboard box nearby, codec ready",
    "Videogames",
    "90s",
    1
  ],
  [
    "anchor",
    "Master Chief",
    "Master Chief from Halo, Mjolnir armor, UNSC ship, universe-saving solitude",
    "Videogames",
    "2000s",
    1
  ],
  [
    "anchor",
    "Kratos",
    "Kratos from God of War, Ghost of Sparta, Blades of Chaos, the gods fear him and rightly so",
    "Videogames",
    "2000s",
    1
  ],
  [
    "anchor",
    "Geralt de Rívia",
    "Geralt of Rivia from The Witcher, silver hair, two swords crossed, monster hunter, morally grey",
    "Videogames",
    "2010s",
    1
  ],
  [
    "anchor",
    "Joel e Ellie",
    "Joel and Ellie from The Last of Us, post-apocalyptic America, survivors and something like family",
    "Videogames",
    "2010s",
    1
  ],
  [
    "anchor",
    "Doom Slayer",
    "Doom Slayer, green armor, shotgun, Mars surface, demons approaching, rip and tear",
    "Videogames",
    "90s",
    1
  ],
  [
    "anchor",
    "GLaDOS",
    "GLaDOS from Portal, ceiling-mounted chassis, poisonous cake promise, Aperture Science laboratory",
    "Videogames",
    "2000s",
    1
  ],
  [
    "anchor",
    "Arthur Morgan",
    "Arthur Morgan from Red Dead Redemption 2, cowboy hat, journal in hand, the American frontier dying around him",
    "Videogames",
    "2010s",
    1
  ],
  [
    "anchor",
    "Commander Shepard",
    "Commander Shepard from Mass Effect, N7 armor, Normandy bridge, the Reapers are coming",
    "Videogames",
    "2000s",
    1
  ],
  [
    "anchor",
    "Pikachu",
    "Pikachu, original 1996 design, chubby and bright, electric sparks, genuine companion energy",
    "Videogames",
    "90s",
    1
  ],
  [
    "anchor",
    "Lara Croft (1996)",
    "original Lara Croft, 1996 Tomb Raider low-poly look translated to photorealism, dual pistols, braid",
    "Videogames",
    "90s",
    1
  ],
  [
    "anchor",
    "Max Payne",
    "Max Payne, noir detective, bullet time, New York rain, pain and painkiller pills",
    "Videogames",
    "2000s",
    1
  ],
  [
    "anchor",
    "Kratos (Norse Era)",
    "Kratos in his Norse God of War era, Leviathan Axe, Atreus by his side, Be better, boy",
    "Videogames",
    "2010s",
    1
  ],
  [
    "anchor",
    "Isaac Clarke",
    "Isaac Clarke from Dead Space, RIG suit, Plasma Cutter, USG Ishimura, necromorph nightmare",
    "Videogames",
    "2000s",
    1
  ],
  [
    "anchor",
    "Ezio Auditore",
    "Ezio Auditore da Firenze, Assassin's Creed, Renaissance Italy rooftop, hidden blade, eagle vision",
    "Videogames",
    "2000s",
    1
  ],
  [
    "anchor",
    "Aloy",
    "Aloy from Horizon Zero Dawn, red hair, bow, post-apocalyptic Earth with roaming machine dinosaurs",
    "Videogames",
    "2010s",
    1
  ],
  [
    "anchor",
    "CJ (GTA San Andreas)",
    "CJ from GTA San Andreas, Grove Street, Los Santos, the whole state to explore",
    "Videogames",
    "2000s",
    1
  ],
  [
    "anchor",
    "Tommy Vercetti",
    "Tommy Vercetti from GTA Vice City, Hawaiian shirt, 1986 Miami, cocaine and ambition",
    "Videogames",
    "2000s",
    1
  ],
  [
    "anchor",
    "Batman (Frank Miller)",
    "Batman in Frank Miller's Dark Knight Returns style, thick ink, brutal aging hero, Gotham's last guardian",
    "HQ",
    "80s",
    1
  ],
  [
    "anchor",
    "Coringa (Brian Bolland)",
    "The Joker from The Killing Joke by Alan Moore and Brian Bolland, one bad day, carnival horror",
    "HQ",
    "80s",
    1
  ],
  [
    "anchor",
    "Wolverine",
    "Wolverine, adamantium claws extended, torn yellow costume, berserker rage, X-Men",
    "HQ",
    "80s",
    1
  ],
  [
    "anchor",
    "Rorschach",
    "Rorschach from Watchmen, inkblot mask shifting, trench coat, alley, the world is a sewer and I am not afraid",
    "HQ",
    "80s",
    1
  ],
  [
    "anchor",
    "V (V for Vendetta HQ)",
    "V from V for Vendetta graphic novel, Guy Fawkes mask, rose in hand, the Shadow Gallery, Alan Moore",
    "HQ",
    "80s",
    1
  ],
  [
    "anchor",
    "Spider-Man",
    "Spider-Man, Steve Ditko original design, New York rooftop, web swinging, the amazing friendly neighborhood hero",
    "HQ",
    "90s",
    1
  ],
  [
    "anchor",
    "Spawn",
    "Spawn from Todd McFarlane, cape billowing like a living shadow, hell and heaven at war in an alley",
    "HQ",
    "90s",
    1
  ],
  [
    "anchor",
    "Hellboy",
    "Hellboy, stone right hand, gun, cigar, supernatural investigator, Mike Mignola shadows",
    "HQ",
    "90s",
    1
  ],
  [
    "anchor",
    "Punisher",
    "Frank Castle as the Punisher, skull chest insignia, weapons cache, war against crime without mercy",
    "HQ",
    "90s",
    1
  ],
  [
    "anchor",
    "Deadpool",
    "Deadpool, red and black costume, katanas, fourth wall breaking grin, mercenary chaos",
    "HQ",
    "2000s",
    1
  ],
  [
    "anchor",
    "Dr. Manhattan",
    "Doctor Manhattan, blue luminescence, Mars surface, the watch and the hydrogen atom, Watchmen",
    "HQ",
    "80s",
    1
  ],
  [
    "anchor",
    "Captain America",
    "Captain America, star-spangled shield, World War II Europe, the ideal of America in its purest form",
    "HQ",
    "90s",
    1
  ],
  [
    "anchor",
    "Iron Man (Extremis)",
    "Iron Man in the Extremis armor era, Warren Ellis, biological integration, sleek and alien",
    "HQ",
    "2000s",
    1
  ],
  [
    "anchor",
    "Black Panther",
    "Black Panther, vibranium suit, Wakanda forever, African technological supremacy, Ta-Nehisi Coates era",
    "HQ",
    "2010s",
    1
  ],
  [
    "anchor",
    "Sandman (Morpheus)",
    "Morpheus the Sandman by Neil Gaiman, lord of dreams, star-filled eyes, endless black, the dreaming realm",
    "HQ",
    "90s",
    1
  ],
  [
    "anchor",
    "Lobo",
    "Lobo, DC Comics intergalactic bounty hunter, motorcycle, massive chain, last Czarnian, gratuitous ultraviolence",
    "HQ",
    "90s",
    1
  ],
  [
    "anchor",
    "Persépolis (Marji)",
    "Marjane Satrapi as a child in Persepolis, Tehran, black and white graphic novel, revolution from below",
    "HQ",
    "2000s",
    1
  ],
  [
    "anchor",
    "Watchmen (grupo)",
    "the full Watchmen group, Rorschach, Nite Owl, Silk Spectre, Manhattan, Ozymandias, who watches the watchmen",
    "HQ",
    "80s",
    1
  ],
  [
    "anchor",
    "Thanos (Jim Starlin)",
    "Thanos in the original Jim Starlin conception, Infinity Gauntlet, cosmic fatalism, love for death herself",
    "HQ",
    "90s",
    1
  ],
  [
    "anchor",
    "Nick Fury (Ultimates)",
    "Nick Fury in the Ultimates Marvel Comics, Samuel L. Jackson likeness, eyepatch, SHIELD helicarrier",
    "HQ",
    "2000s",
    1
  ],
  [
    "anchor",
    "Barbarella",
    "Barbarella, Jean-Claude Forest space heroine, 1960s sci-fi eroticism, fur and weaponry among the stars",
    "HQ",
    "70s",
    1
  ],
  [
    "anchor",
    "Astro Boy",
    "Astro Boy by Osamu Tezuka, manga god of comics, jet-powered boy robot, innocent and powerful",
    "HQ",
    "70s",
    1
  ],
  [
    "anchor",
    "Tintin",
    "Tintin by Hergé, ligne claire, globe-trotting adventure, white dog Snowy, the Belgian boy eternal",
    "HQ",
    "70s",
    1
  ],
  [
    "scenario",
    "Gotham City (noturna)",
    "set in Gotham City at night, rain-slicked streets, gargoyles on Gothic skyscrapers, sirens distant",
    "Cinema / HQ",
    "",
    1
  ],
  [
    "scenario",
    "Nakatomi Plaza (Die Hard)",
    "set in Nakatomi Plaza, Los Angeles, Christmas 1988, corporate tower turned warzone",
    "Cinema",
    "80s",
    1
  ],
  [
    "scenario",
    "Nostromo (Alien)",
    "set inside the Nostromo spaceship from Alien, Ridley Scott aesthetic, dripping corridors, motion tracker beeping",
    "Cinema",
    "70s",
    1
  ],
  [
    "scenario",
    "Mos Eisley Cantina",
    "set in the Mos Eisley Cantina, Star Wars, aliens and bounty hunters, Tatooine twin sunset outside",
    "Cinema",
    "70s",
    1
  ],
  [
    "scenario",
    "Death Star",
    "set inside the Death Star, Star Wars, gleaming Imperial corridors, the ultimate weapon operational",
    "Cinema",
    "70s",
    1
  ],
  [
    "scenario",
    "The Shining Hotel",
    "set in the Overlook Hotel, The Shining, Kubrick symmetry, Room 237, the hedge maze under snow",
    "Cinema",
    "80s",
    1
  ],
  [
    "scenario",
    "Blade Runner 2019",
    "set in Blade Runner 2019 Los Angeles, acid rain, neon kanji holograms, Bradbury Building, spinners overhead",
    "Cinema",
    "80s",
    1
  ],
  [
    "scenario",
    "DeLorean + Hill Valley",
    "set at Hill Valley courthouse square with the DeLorean, Back to the Future, lightning rod atop the clock tower",
    "Cinema",
    "80s",
    1
  ],
  [
    "scenario",
    "Jurassic Park (Cozinha)",
    "set in the Jurassic Park kitchen, the raptors visible under the door, children hiding in the shadows",
    "Cinema",
    "90s",
    1
  ],
  [
    "scenario",
    "Apartamento de Pulp Fiction",
    "set in the apartment from Pulp Fiction, briefcase open, divine light, Jules and Vincent in frame",
    "Cinema",
    "90s",
    1
  ],
  [
    "scenario",
    "Matrix — Construto Branco",
    "set in the white loading program construct from The Matrix, infinite white void, guns appearing from nowhere",
    "Cinema",
    "90s",
    1
  ],
  [
    "scenario",
    "Rivendell / Terra Média",
    "set in Rivendell, Middle-Earth, LOTR Peter Jackson aesthetic, elven architecture, waterfall mist, eternal afternoon",
    "Cinema",
    "2000s",
    1
  ],
  [
    "scenario",
    "Hogwarts (Grande Salão)",
    "set in the Hogwarts Great Hall, Harry Potter, floating candles, house banners, feast in full magic",
    "Cinema",
    "2000s",
    1
  ],
  [
    "scenario",
    "Coruscant (Star Wars)",
    "set on Coruscant, the city-planet of Star Wars, towers to the horizon, air traffic, the Jedi Temple visible",
    "Cinema",
    "2000s",
    1
  ],
  [
    "scenario",
    "Fury Road Desert",
    "set in the Mad Max Fury Road desert, war rigs on cracked earth, Immortan Joe's Citadel on a mesa",
    "Cinema",
    "2010s",
    1
  ],
  [
    "scenario",
    "Wakanda",
    "set in Wakanda, Black Panther, vibranium city where ancient African aesthetics and advanced technology merge",
    "Cinema",
    "2010s",
    1
  ],
  [
    "scenario",
    "Bada Bing (Sopranos)",
    "set at the Bada Bing strip club, Sopranos, back office, Tony's throne, criminal middle management",
    "TV",
    "2000s",
    1
  ],
  [
    "scenario",
    "Los Pollos Hermanos",
    "set at Los Pollos Hermanos restaurant, Breaking Bad, Gus Fring's double life visible only to us",
    "TV",
    "2010s",
    1
  ],
  [
    "scenario",
    "Central Perk (Friends)",
    "set at Central Perk coffee shop, Friends, the orange sofa, New York City light from the window",
    "TV",
    "90s",
    1
  ],
  [
    "scenario",
    "Dunder Mifflin (The Office)",
    "set at Dunder Mifflin Scranton, The Office, fluorescent light, partition dividers, Michael Scott's glass office",
    "TV",
    "2000s",
    1
  ],
  [
    "scenario",
    "USS Enterprise",
    "set on the bridge of the USS Enterprise, Star Trek, viewscreen showing stars, command chair at center",
    "TV",
    "70s",
    1
  ],
  [
    "scenario",
    "Winterfell",
    "set in Winterfell, Game of Thrones, stone walls and grey sky, winter has come, Stark banners",
    "TV",
    "2010s",
    1
  ],
  [
    "scenario",
    "Hawkins (Stranger Things)",
    "set in Hawkins Indiana, Stranger Things, 1983, suburban normalcy against supernatural terror, bikes on the road",
    "TV",
    "2010s",
    1
  ],
  [
    "scenario",
    "Rapture (Bioshock)",
    "set in Rapture from Bioshock, art deco underwater city in decay, plasmid vending machines, 1960 catastrophe",
    "Videogames",
    "2000s",
    1
  ],
  [
    "scenario",
    "Mushroom Kingdom",
    "set in the Mushroom Kingdom, Super Mario, floating question blocks, Bowser's castle on the horizon",
    "Videogames",
    "90s",
    1
  ],
  [
    "scenario",
    "Hyrule (Ocarina of Time)",
    "set in Hyrule, Zelda Ocarina of Time, Temple of Time spire, Lon Lon Ranch in the distance, Ganon's shadow",
    "Videogames",
    "90s",
    1
  ],
  [
    "scenario",
    "Midgar (FF VII)",
    "set in Midgar from Final Fantasy VII, reactor towers, slums below the plate, mako energy and poverty",
    "Videogames",
    "90s",
    1
  ],
  [
    "scenario",
    "Shadow Moses (Metal Gear)",
    "set at Shadow Moses from Metal Gear Solid, Alaskan nuclear storage, blizzard, codec call in silence",
    "Videogames",
    "90s",
    1
  ],
  [
    "scenario",
    "City 17 (Half-Life 2)",
    "set in City 17 from Half-Life 2, Combine occupation, Eastern European architecture under alien control",
    "Videogames",
    "2000s",
    1
  ],
  [
    "scenario",
    "Aperture Science (Portal)",
    "set in the Aperture Science Enrichment Center from Portal, test chambers, GLaDOS ceiling mount, cake is a lie",
    "Videogames",
    "2000s",
    1
  ],
  [
    "scenario",
    "Novigrad (The Witcher)",
    "set in Novigrad from The Witcher 3, medieval city, harbor, witch hunters and merchants, Geralt passing through",
    "Videogames",
    "2010s",
    1
  ],
  [
    "scenario",
    "Gotham (DC HQ)",
    "set in the Gotham City of DC Comics, Frank Miller Dark Knight aesthetic, rooftops, gargoyles, bat signal cutting fog",
    "HQ",
    "80s",
    1
  ],
  [
    "scenario",
    "Daily Planet (DC)",
    "set in the Daily Planet newsroom, Superman's Metropolis, Clark Kent at his desk, Lois Lane filing the story",
    "HQ",
    "90s",
    1
  ],
  [
    "scenario",
    "Xavier's School",
    "set in Xavier's School for Gifted Youngsters, X-Men, Westchester mansion, Cerebro chamber, mutant youth",
    "HQ",
    "90s",
    1
  ],
  [
    "scenario",
    "The Dreaming (Sandman)",
    "set in the Dreaming realm from Neil Gaiman's Sandman, Morpheus's castle, impossible geography, memories made place",
    "HQ",
    "90s",
    1
  ],
  [
    "scenario",
    "Wakanda (HQ Clássica)",
    "set in Wakanda as depicted in classic Black Panther comics, Golden City, vibranium technology and African grandeur",
    "HQ",
    "90s",
    1
  ],
  [
    "style",
    "HQ Marvel Anos 70",
    "1970s Marvel Comics sequential art, Jack Kirby dots, dynamic panel composition, bold Ben-Day print colors, hyperbolic action",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "HQ Noir (Sin City)",
    "Sin City Frank Miller graphic novel style, pure black and white, single color accent (red or yellow), brutalist negative space",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Ligne Claire (Hergé)",
    "Ligne claire clear-line illustration style, Hergé Tintin aesthetic, clean even outlines, flat color fills, no hatching",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Manga Anos 80",
    "1980s Japanese manga aesthetic, screen-tone textures, large expressive eyes, speed lines, Akira-era Otomo influence",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Anime Cel Pintado",
    "hand-painted anime cel animation, 1990s Japanese animation production art, cel shading visible, painted studio background",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Akira (Katsuhiro Otomo)",
    "Katsuhiro Otomo Akira-style illustration, hyper-detailed dystopian cityscape, bike chase composition, neo-Tokyo 2019",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Pixel Art RPG 16-bit",
    "16-bit RPG pixel art, Super Nintendo era, character sprite with animated idle pose, overworld map tile perspective",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Concept Art de Game AAA",
    "AAA video game concept art, digital painting, environmental storytelling, production design document quality",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Screenshot In-Engine",
    "in-engine video game screenshot aesthetic, Unreal Engine 5 real-time rendering, HUD elements ghosted at frame edge",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Arte de Caixa de Jogo (80s)",
    "1980s video game box art, extreme dramatic painted illustration, characters much larger than the game could render, airbrushed heroism",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Capa de HQ (Jim Lee)",
    "Jim Lee superhero cover art style, dynamic anatomy, dense cross-hatching, spectacularly choreographed power poses",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Capa de HQ (Moebius)",
    "Moebius graphic novel cover, precise clean lines, alien landscapes, philosophical imagery, Les Humanoïdes Associés",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Estética Ghibli (Fundo)",
    "Studio Ghibli hand-painted background art, detailed naturalistic environment, every leaf, Kazuo Oga landscape tradition",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Arte de Card (Magic: TG)",
    "Magic: The Gathering card illustration style, painted fantasy art, dark border, card name and mana cost implied",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Loading Screen de PS1",
    "PlayStation 1 era loading screen aesthetic, grey polygon shapes on black, blocky 3D figures, CD load progress implied",
    "",
    "",
    1,
    "Referência de linguagem"
  ],
  [
    "style",
    "Jack Kirby",
    "in the dynamic style of Jack Kirby — Kirby Krackle energy dots, monumental figures, cosmic Marvel mythology",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Steve Ditko",
    "in the style of Steve Ditko — angular Spider-Man web-slinging, Doctor Strange psychedelia, precise moral panic energy",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Jim Lee",
    "in the style of Jim Lee — 1990s X-Men era superhero anatomy, extreme cross-hatching, peak action composition",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Neal Adams",
    "in the style of Neal Adams — realistic superhero anatomy, 1970s DC Comics, socially conscious storytelling, dramatic lighting",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Dave McKean",
    "in the mixed-media collage style of Dave McKean — Sandman covers, photography and painting and found imagery, dark symbolic",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Katsuhiro Otomo",
    "in the style of Katsuhiro Otomo's Akira — hyper-detailed mecha, neo-Tokyo crowds, kinetic action, prescient dystopia",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Hayao Miyazaki",
    "in the world-building vision of Hayao Miyazaki — wind, flight, nature as spirit, the child as moral compass, Studio Ghibli",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Hideo Kojima",
    "art direction by Hideo Kojima — cinematic hyper-realism, lengthy cutscene aesthetic, narrative excess as style",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Ridley Scott",
    "cinematography by Ridley Scott — atmospheric chiaroscuro, production design as storytelling, alien grandeur",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "David Fincher",
    "directed by David Fincher — desaturated cool palette, extreme compositional precision, dread in the ordinary",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "John Carpenter",
    "in the John Carpenter tradition — widescreen Panavision, small town isolation, practical effects, synthesizer dread",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Guillermo del Toro",
    "in Guillermo del Toro's aesthetic — baroque creature design, political fairy tale, candlelight and old gold and horror",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Tim Burton",
    "in Tim Burton's visual world — striped black and white, curved architecture, the outsider as protagonist, Danny Elfman implied",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Christopher Nolan",
    "directed by Christopher Nolan — IMAX scale, practical photography, temporal complexity, Hans Zimmer crescendo implied",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Masashi Kishimoto",
    "in the manga style of Masashi Kishimoto's Naruto — ninja action, dramatic eye techniques, friendship as power source",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "style",
    "Frank Miller",
    "in the graphic novel style of Frank Miller — extreme shadow, crime noir, hyper-masculine brutalism, Sin City or 300 era",
    "",
    "",
    1,
    "Referência de assinatura"
  ],
  [
    "trend",
    "Crossover Impossível",
    "an impossible crossover — characters from entirely different fictional universes meeting for the first time, consequences unknown",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "Villão como Protagonista",
    "the villain reframed as the true protagonist — their perspective, their motivations, their grief, fully visible for the first time",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "Lado B do Canon",
    "the untold side story — what happened in the room, on the ship, in the world while the main story was elsewhere",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "If They Won",
    "an alternate history where they won — the defeated empire's victory, the hero's failure, all consequences that follow",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "Versão Brasileira",
    "the story fully relocated to Brazil — cast, setting, aesthetic, social tensions all replaced with authentic Brazilian equivalents",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "Universo Pós-Apocalipse",
    "the character surviving in a post-apocalyptic version of their world — the same person, transformed by devastation",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "Versão Infantil",
    "depicted as a children's illustration character — simplified, safe, slightly absurd, the horror made cute",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "Versão Idosa",
    "the character decades later, aged, carrying the weight of their story, how did the adventure end in their face",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "Lado de Dentro da Cena",
    "depicted from inside a famous scene — the perspective never shown, the angle the camera never reached",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "Objeto Perdido Encontrado",
    "the character reduced to one personal object — a boot, a weapon, a letter — their entire story compressed into it",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "Momento de Paz",
    "the character at rest, before or after everything — the quiet moment that action-driven narratives always skip",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "trend",
    "Fan Art Dentro do Canon",
    "depicted as in-universe fan art — how their own world imagines them as a legend, painted by a fictional admirer",
    "",
    "",
    1,
    "Referência de torcao"
  ],
  [
    "detail",
    "Easter Egg de Outra Franquia",
    "a subtle easter egg from a different franchise hidden in the background — only true fans will notice",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "HUD de Videogame",
    "a barely visible heads-up display overlaid: health bar, minimap corner, ammo count — reality as a game",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "Painel de HQ Vizinho",
    "the edge of an adjacent comic panel bleeds into the frame — another story happening simultaneously just outside",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "Crachá de Convenção",
    "a San Diego Comic-Con or similar fan convention badge visible on the subject — the boundary between fiction and devotion",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "Autógrafo do Autor",
    "a creator's signature visible somewhere in the scene — Stan Lee, Hideo Kojima, Hayao Miyazaki — the god of this world signing it",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "Disco de Vinil Visível",
    "a vinyl record visible with a tracklist that tells a story — the soundtrack to this moment made physical",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "Cena Congelada (Pause)",
    "the image appears paused mid-action — pixelated pause symbol faint in corner, time stopped by someone watching",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "Luz de Cutscene",
    "lighting that shifts unnaturally mid-scene, suggesting a cinematic cutscene has taken over from gameplay",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "Breaking Fourth Wall",
    "the character appears to look directly at the viewer — fully aware of being watched, the fourth wall acknowledged",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "Fan Theory Confirmada",
    "one detail in the image quietly confirms a fan theory — something canon never showed but everyone suspected",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "Texto Comentário de Reddit",
    "a Reddit comment thread watermarked faintly at the image edge, discussing what we are seeing in real time",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "detail",
    "Episódio Perdido",
    "the aesthetic of a lost episode — slightly degraded, wrong aspect ratio, the title card burned in, never officially released",
    "",
    "",
    1,
    "Referência de tempero"
  ],
  [
    "medium",
    "Painel de HQ (simples)",
    "single comic book panel format, speech bubbles possible, panel border visible, Ben-Day print dot texture",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "medium",
    "Página Dupla de HQ",
    "double-page comic book spread format, extreme horizontal composition, two-page narrative sweep",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "medium",
    "Splash Page Épica",
    "full splash page comic book format, single massive image, no panel borders, pure visual impact",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "medium",
    "Capa de Game (PS2)",
    "PlayStation 2 game cover format, vertical box art, blue disc icon at top right, PEGI rating, title typography",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "medium",
    "Capa de Bluray 4K",
    "4K Ultra HD Blu-ray steelbook cover format, limited edition art, embossed metallic finish implied, collector aesthetic",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "medium",
    "Loading Screen de Jogo",
    "video game loading screen format, progress bar at bottom, tip text visible, the world about to begin",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "medium",
    "Game Over Screen",
    "game over screen format, pixelated or stylized typography, skull or defeated sprite, insert coin or press start",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "medium",
    "Menu Principal de Game",
    "video game main menu format, ambient environment visible, option list, the world waiting for the player to enter",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "medium",
    "Curta de Cinema (1.37:1)",
    "Academy ratio 1.37:1 format, classic pre-widescreen cinema, intimate and square, old Hollywood proportion",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "medium",
    "Teaser Poster (Atmosférico)",
    "teaser theatrical poster format, minimal imagery, enormous white space, one haunting image, release date only",
    "",
    "",
    1,
    "Referência de formato"
  ],
  [
    "anchor",
    "Kurt Cobain",
    "Kurt Cobain",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Ayrton Senna",
    "Ayrton Senna in his red and white racing helmet",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Ronaldo Fenômeno",
    "Ronaldo Fenômeno, the Brazilian striker at his peak",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Tupac Shakur",
    "Tupac Shakur",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Lara Croft",
    "Lara Croft from the original 1996 Tomb Raider",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Fernanda Montenegro",
    "Fernanda Montenegro as Dora from Central do Brasil",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Chico Science",
    "Chico Science in full Manguebeat attire",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Neo (Matrix)",
    "Neo from The Matrix, trench coat and sunglasses",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Xuxa Meneghel",
    "Xuxa Meneghel, Queen of the Baixinhos",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Ronaldinho Gaúcho",
    "Ronaldinho Gaúcho in his Barcelona 2004 era",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Heath Ledger Coringa",
    "Heath Ledger as The Joker, face paint, purple coat",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Britney Spears",
    "Britney Spears at her peak, circa 2003",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Zé Pequeno",
    "Zé Pequeno from Cidade de Deus",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Zidane",
    "Zinedine Zidane",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Steve Jobs",
    "Steve Jobs holding the first iPhone on stage",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Sandy & Junior",
    "Sandy and Junior, the Brazilian pop duo siblings",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Osama Bin Laden",
    "Osama bin Laden",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Frodo Bolseiro",
    "Frodo Baggins carrying the One Ring",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Tamagotchi",
    "a Tamagotchi creature brought to life",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Bill Gates",
    "Bill Gates in 1995 with a Windows 95 box",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "É o Tchan! (Carla)",
    "Carla Perez from É o Tchan! in Axé Music costume",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "anchor",
    "Jack Sparrow",
    "Captain Jack Sparrow, rum in hand",
    "",
    "",
    2,
    "Referência de icone"
  ],
  [
    "style",
    "Pintura Barroca",
    "Baroque oil painting, Caravaggio chiaroscuro lighting, museum quality canvas",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Fotografia 35mm",
    "Authentic 35mm film photography, heavy grain, slight underexposure, analog warmth",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Arte Egípcia em Papiro",
    "Ancient Egyptian decorative painting on papyrus, gold leaf, strict hieratic style, profile pose",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Pixel Art 16-bit",
    "16-bit pixel art, SNES-era color palette, retro gaming sprite sheet",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Mural Mexicano",
    "Mexican social realism mural, Diego Rivera and Orozco style, monumental wall painting",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Concept Art Cinemat.",
    "Cinematic concept art, epic scale, Unreal Engine 5 photorealistic rendering",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Graphic Novel Noir",
    "Graphic novel, high-contrast black ink with selective color, Frank Miller Sin City aesthetic",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Ícone Sacro Bizantino",
    "Byzantine sacred icon on gilded wood panel, gold leaf halo, egg tempera, cracked varnish",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Vaporwave Estético",
    "Vaporwave aesthetic, retrowave synthwave color palette, glitch art, 80s–90s nostalgia digital art",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Pop Art (Warhol)",
    "Pop Art, Andy Warhol silkscreen style, bold flat outlines, color grid repetition",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Escultura Grega",
    "Ancient Greek white Pentelic marble sculpture, museum documentation photography",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Aquarela Editorial",
    "Editorial watercolor illustration, New Yorker magazine style, loose impressionistic brushwork",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Xilogravura de Cordel",
    "Brazilian cordel woodcut illustration, hand-carved black and white lines, rough texture",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Sci-fi Anos 70",
    "1970s science fiction paperback cover art, Moebius / Jean Giraud style, retro-futuristic",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Fotografia Infravermelha",
    "Infrared photography, white foliage, dark sky, surreal tonal reversal, dreamlike",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Storyboard Animação",
    "Hand-drawn animation storyboard, Studio Ghibli pencil sketch aesthetic",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "style",
    "Daguerreótipo",
    "Daguerreotype photograph, sepia tones, 19th century portrait format, brass frame vignette",
    "",
    "",
    2,
    "Referência de linguagem"
  ],
  [
    "scenario",
    "Boteco Carioca, 90s",
    "inside a weathered Rio de Janeiro boteco, 1990s, neon Brahma signs, checkered floor, ceiling fan",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Amazônia Profunda",
    "deep Amazon rainforest at dusk, bioluminescent plants, mist rising from the canopy",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "LAN House SP, 2003",
    "Brazilian LAN house interior, 2003, rows of CRT monitors, blue light, teenagers in plastic chairs",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Sertão ao Amanhecer",
    "Brazilian northeastern sertão at dawn, red caatinga earth, cacti, flat horizon",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Maracanã — Final 94",
    "Maracanã stadium packed for the 1994 World Cup final, confetti, roaring crowd",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Museu do Futuro (2150)",
    "a museum in the year 2150, white stone halls, climate-controlled glass cases, future visitors",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Roma Antiga",
    "ancient Rome, cobblestone streets, marble columns, torchlight, toga-clad crowds",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Cortiço Paulistano, 1999",
    "downtown São Paulo cortiço, 1999, crumbling plaster, clotheslines between buildings, urban density",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Olimpo Grego",
    "Mount Olympus above the clouds, divine golden light, celestial realm",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Galeria Bienal SP",
    "São Paulo Bienal white cube gallery, institutional overhead lighting, polished concrete floor",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Ciberespaço Y2K",
    "Y2K cyberspace, cascading green matrix code, glowing terminals, the year 1999",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Favela ao Amanhecer",
    "Brazilian favela at dawn, warm ochre light, rooftop view of the city spreading below",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Praia de Ipanema, 90s",
    "Ipanema beach in the 1990s, golden afternoon light, Dois Irmãos hills in the background",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Espaço Sideral",
    "outer space, cosmic scale, nebulae and star clusters, total weightlessness",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Camelódromo, 94",
    "Brazilian informal market (camelódromo), chaotic stalls, bootleg VHS and CDs, 1994",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Underground Punk — SP",
    "underground São Paulo punk venue, graffiti walls, sweat, feedback, 1997",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Estação de Metrô no Rush",
    "São Paulo metro station at rush hour, 1998, bodies pressing, fluorescent light, advertisement posters",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "scenario",
    "Feira de São Cristóvão",
    "Feira de São Cristóvão, Rio de Janeiro, forró music, leather hats, dust, barraca lights",
    "",
    "",
    2,
    "Referência de universo"
  ],
  [
    "trend",
    "Retratado como Divindade",
    "depicted as an ancient deity — sacred, transcendent, worshipped",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Transportado ao Brasil",
    "fully transplanted into Brazilian culture, every detail authentically local",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Artefato Arqueológico",
    "presented as an ancient artifact under museum glass, centuries in the future",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Fundido com Mitologia",
    "merged with Greco-Roman mythology, heroic and classical in scale",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Santo Popular Brasileiro",
    "reimagined as a Brazilian popular saint, ex-voto aesthetics, miracle attributed",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Cavaleiro Medieval",
    "depicted as a medieval knight or noble, heraldic setting, armor reflecting candlelight",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Personagem de Cordel",
    "as a hero of a Brazilian cordel folk narrative, woodcut legend",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Monumento Público",
    "rendered as a monumental bronze public sculpture in a city square, pigeons landing on it",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Fusão com Candomblé",
    "fused with Afro-Brazilian Candomblé iconography, Orixá aesthetics, sacred geometry",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Olhar Alienígena",
    "as observed by alien anthropologists — clinical, distant, labeled with incomprehensible text",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Sprite de Videogame",
    "translated into a retro video game character, complete with health bar and stats panel",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Verso de Enciclopédia",
    "illustrated as an encyclopedia entry, clinical diagrammatic labels, cross-section view",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Herói Trágico Grego",
    "as a tragic Greek hero at the moment of catastrophe, emotionally operatic",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Axé Meets Grunge",
    "aesthetics brutally fused — half Axé Music carnival feathers, half grunge flannel and ripped jeans",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Propaganda Soviética",
    "rendered as Soviet constructivist propaganda poster — strong diagonals, red and black",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Retrato Papal",
    "painted as a formal papal or royal portrait, red robes, gilded frame, scepter",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "trend",
    "Planta de Arquitetura",
    "rendered as a detailed architectural blueprint — top-down technical drawing, measurement annotations",
    "",
    "",
    2,
    "Referência de torcao"
  ],
  [
    "style",
    "Sebastião Salgado",
    "shot in the style of Sebastião Salgado — epic black and white, moral weight, raw humanism",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Caravaggio",
    "painted in the manner of Caravaggio — impasto brushwork, single light source, chiaroscuro drama",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Roger Deakins",
    "cinematography by Roger Deakins — golden naturalistic light, restrained beauty",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Wes Anderson",
    "Wes Anderson color palette — salmon, mustard, powder blue, perfect symmetry, deadpan framing",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Norman Rockwell",
    "illustrated by Norman Rockwell — warm American idealism, Saturday Evening Post narrative detail",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Eduardo Kobra",
    "in the style of Eduardo Kobra street murals — geometric kaleidoscope color, massive scale",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Annie Leibovitz",
    "photographed by Annie Leibovitz — dramatically staged, editorial gravitas, iconic composition",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Banksy",
    "as a Banksy stencil installation — black spray on brick, one subversive visual joke",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Wong Kar-wai",
    "cinematographic style of Wong Kar-wai — saturated neon, slow-motion blur, melancholic longing",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Moebius / Giraud",
    "illustrated by Moebius / Jean Giraud — clean luminous linework, retro sci-fi, desert light",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Alan Lee",
    "illustrated by Alan Lee — misty loose watercolor, Tolkien spirit, ancient and ethereal",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Rembrandt",
    "in the style of Rembrandt van Rijn — golden studio light, impasto textures, psychological depth",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Basquiat",
    "in the raw style of Jean-Michel Basquiat — expressionist marks, crown symbols, text overlays",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Stanley Kubrick",
    "directed by Stanley Kubrick — one-point perspective, perfect symmetry, geometric dread",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Pedro Almodóvar",
    "visual style of Pedro Almodóvar — saturated primaries, melodrama, ornate domestic interiors",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Carybé",
    "in the illustrative style of Carybé — warm Bahian color, Candomblé iconography, fluid lines",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "style",
    "Isay Weinfeld",
    "architectural sensibility of Isay Weinfeld — brutal luxury, raw concrete, Brazilian modernism",
    "",
    "",
    2,
    "Referência de assinatura"
  ],
  [
    "detail",
    "Grão Analógico Pesado",
    "heavy 35mm film grain, slightly underexposed, warm analog color shift",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Texto em Português Arcaico",
    "decorative text elements written in archaic 16th-century Portuguese calligraphy visible in the image",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Anacronia Deliberada",
    "one deliberate anachronism — a modern smartphone in an otherwise historical scene",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Easter Egg Brasileiro",
    "a hidden Brazilian cultural reference (a Brahma can, a Havaianas, a caipirinha) subtly visible",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Dutch Angle",
    "Dutch angle camera tilt, disorienting, psychological unease",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Luz de Vela Única",
    "single candle illumination, pool of warm light, everything else absorbed in deep shadow",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Moldura Polaroid",
    "square Polaroid format, white border, handwritten date at bottom, slightly faded",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Fumaça Teatral",
    "dramatic theatrical smoke, volumetric light beams cutting through",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Artefatos JPEG",
    "deliberate JPEG compression artifacts, pixelated blocks at the edges, digital degradation",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Worm's Eye View",
    "extreme low angle worm's eye view, subject rendered monumental and towering",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Olho de Peixe",
    "fisheye lens, 180° field of view, spatial distortion, vertiginous",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Ruído de Scanner",
    "flatbed scanner noise, slight color channel bleed, digitized-document texture",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Letreiro Simbólico",
    "a prominent hand-lettered or neon sign with symbolic text placed deliberately in the composition",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Exposição Múltipla",
    "multiple exposure — two or three layered takes blended, ghostly overlapping forms",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Vinheta Escura",
    "strong dark vignette, focus pulled brutally to center, edges dissolving to black",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Chuva de Confete",
    "confetti explosion mid-frame, color fragments catching the light",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "detail",
    "Paleta Dessaturada + Acento",
    "nearly desaturated image with a single accent color that stays vibrant — emotional punctuation",
    "",
    "",
    2,
    "Referência de tempero"
  ],
  [
    "anchor",
    "Pelé",
    "Pelé, the greatest footballer of all time, young and triumphant",
    "Esporte",
    "70s",
    3
  ],
  [
    "anchor",
    "David Bowie",
    "David Bowie as Ziggy Stardust, glam rock alien makeup",
    "Música",
    "70s",
    3
  ],
  [
    "anchor",
    "Janis Joplin",
    "Janis Joplin, raw and electric, microphone in hand",
    "Música",
    "70s",
    3
  ],
  [
    "anchor",
    "Caetano Veloso",
    "Caetano Veloso in his Tropicália era, guitar and flowers",
    "Música BR",
    "70s",
    3
  ],
  [
    "anchor",
    "Michael Jackson",
    "Michael Jackson in full Thriller-era costume, moonwalk pose",
    "Música",
    "80s",
    3
  ],
  [
    "anchor",
    "Madonna",
    "Madonna in her Like a Virgin era, lace and crucifix",
    "Música",
    "80s",
    3
  ],
  [
    "anchor",
    "Maradona",
    "Diego Maradona, the Hand of God raised, Mexico 1986",
    "Esporte",
    "80s",
    3
  ],
  [
    "anchor",
    "Renato Russo",
    "Renato Russo of Legião Urbana, intense, dark sweater",
    "Música BR",
    "80s",
    3
  ],
  [
    "anchor",
    "O.J. Simpson",
    "O.J. Simpson in the white Bronco, Los Angeles freeway",
    "Cultura",
    "90s",
    3
  ],
  [
    "anchor",
    "Beyoncé",
    "Beyoncé in Lemonade era, yellow dress, baseball bat",
    "Música",
    "2010s",
    3
  ],
  [
    "anchor",
    "Lionel Messi",
    "Lionel Messi lifting the World Cup 2014, tears and gold",
    "Esporte",
    "2010s",
    3
  ],
  [
    "anchor",
    "Lady Gaga",
    "Lady Gaga in meat dress, VMAs 2010, surreal theatricality",
    "Música",
    "2010s",
    3
  ],
  [
    "style",
    "Arte Egípcia",
    "Ancient Egyptian painting on papyrus, gold leaf, strict hieratic style, profile pose",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "style",
    "Vaporwave",
    "Vaporwave aesthetic, retrowave synthwave color palette, glitch art, digital nostalgia",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "style",
    "Storyboard Ghibli",
    "Hand-drawn animation storyboard, Studio Ghibli pencil sketch, light and shadow notes",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "style",
    "Arte em Vitrô",
    "Stained glass window illustration, lead outline, jewel-colored light, medieval cathedral aesthetic",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "style",
    "Propaganda Construtivista",
    "Soviet constructivist poster, bold diagonals, red and black, stark geometric typography",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "style",
    "Minimalismo Japonês",
    "Japanese minimalist ink painting (sumi-e), gestural brushwork, vast empty space",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "style",
    "Foto de Arquivo Policial",
    "Police archive photograph, mugshot lighting, date stamp, black and white institutional",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "style",
    "Iluminura Medieval",
    "Medieval illuminated manuscript page, gold leaf borders, decorative script, flat figures",
    "",
    "",
    3,
    "Referência de linguagem"
  ],
  [
    "scenario",
    "Discoteca Carioca, 1978",
    "a Rio de Janeiro disco club, 1978, glitter ball, polyester suits, neon haze",
    "Brasil",
    "70s",
    3
  ],
  [
    "scenario",
    "Estádio Azteca, Mexico 86",
    "Azteca Stadium, Mexico City 1986, packed crowd, scorching sun, red earth",
    "Internacional",
    "70s",
    3
  ],
  [
    "scenario",
    "NYC Times Square, 1977",
    "Times Square, New York City 1977, pre-cleanup era, neon, rain, danger",
    "Internacional",
    "70s",
    3
  ],
  [
    "scenario",
    "Show Tropicália, 1968",
    "a Tropicália concert, 1968 São Paulo, electric guitars and maracas, political heat",
    "Brasil",
    "70s",
    3
  ],
  [
    "scenario",
    "Rock in Rio, 1985",
    "Rock in Rio festival 1985, enormous crowd, stage lights, red clay mud",
    "Brasil",
    "80s",
    3
  ],
  [
    "scenario",
    "Diretas Já, 1984",
    "Diretas Já protest march, São Paulo 1984, millions in the streets, banners",
    "Brasil",
    "80s",
    3
  ],
  [
    "scenario",
    "Berlim Ocidental, 1987",
    "West Berlin near the Wall, 1987, graffiti, Cold War tension, divided city",
    "Internacional",
    "80s",
    3
  ],
  [
    "scenario",
    "Arcade dos Anos 80",
    "1980s arcade hall, rows of cabinet games, blue light, teenage energy",
    "Internacional",
    "80s",
    3
  ],
  [
    "scenario",
    "Camelódromo, 1994",
    "Brazilian flea market (camelódromo), chaotic stalls, bootleg VHS and CDs, 1994",
    "Brasil",
    "90s",
    3
  ],
  [
    "scenario",
    "Underground Punk SP, 97",
    "underground São Paulo punk venue, 1997, graffiti walls, sweat, feedback",
    "Brasil",
    "90s",
    3
  ],
  [
    "scenario",
    "Seattle, 1991",
    "Seattle, Washington, 1991, rain, gray skies, thrift store flannel, grunge energy",
    "Internacional",
    "90s",
    3
  ],
  [
    "scenario",
    "Recife Mangues, 1994",
    "Recife mangroves, 1994, Manguebeat birthplace, factories and crabs and electricity",
    "Brasil",
    "90s",
    3
  ],
  [
    "scenario",
    "Ground Zero, 2001",
    "Ground Zero, New York, September 12 2001, smoke and silence and flowers",
    "Internacional",
    "2000s",
    3
  ],
  [
    "scenario",
    "Baghdade, 2003",
    "Baghdad streets, 2003, rubble and palm trees, coalition checkpoint, dust light",
    "Internacional",
    "2000s",
    3
  ],
  [
    "scenario",
    "Metrô SP, Rush Hour",
    "São Paulo metro rush hour, bodies pressing together, fluorescent light, 1998",
    "Brasil",
    "2000s",
    3
  ],
  [
    "scenario",
    "Manifestações Junho 2013",
    "June 2013 Brazil protests, Avenida Paulista, masks, gas, millions marching",
    "Brasil",
    "2010s",
    3
  ],
  [
    "scenario",
    "Maracanã — 7x1, 2014",
    "Maracanã stadium, World Cup 2014 semifinal, the silence after the 7th German goal",
    "Brasil",
    "2010s",
    3
  ],
  [
    "scenario",
    "Lava Jato — Curitiba",
    "Curitiba federal court, 2016, cameras, lawyers, the weight of an era ending",
    "Brasil",
    "2010s",
    3
  ],
  [
    "scenario",
    "Museu do Futuro, 2150",
    "museum in the year 2150, white stone halls, climate-controlled glass cases, future visitors",
    "Fantasia",
    "",
    3
  ],
  [
    "trend",
    "Herói de Cordel",
    "hero of a Brazilian cordel folk narrative, larger than life, woodcut legend",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "trend",
    "Estudo Alien",
    "observed by alien anthropologists — clinical, distant, labeled with incomprehensible text",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "trend",
    "Verbete de Enciclopédia",
    "illustrated as a scientific encyclopedia entry, clinical labels, cross-section cutaway view",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "trend",
    "Blueprint de Arquitetura",
    "rendered as a detailed architectural blueprint, top-down technical drawing, measurement annotations",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "trend",
    "Cena de Telenovela",
    "staged as a Brazilian telenovela dramatic scene, overlit, theatrical, actors facing camera",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "trend",
    "Afresco Renascentista",
    "depicted in a Renaissance fresco on a cathedral ceiling, surrounded by cherubs and clouds",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "trend",
    "Personagem de Mangá",
    "drawn in Japanese manga style, large expressive eyes, speed lines, emotion symbols",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "trend",
    "Quadrinho de Cordel",
    "as a Brazilian cordel comic strip panel, hand-drawn speech bubbles in verse",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "trend",
    "Tarot Card",
    "as a tarot card illustration: symbolic imagery, Roman numerals, archetypal meaning",
    "",
    "",
    3,
    "Referência de torcao"
  ],
  [
    "style",
    "Frida Kahlo",
    "in the self-portrait style of Frida Kahlo — intense gaze, folk symbols, pain and beauty merged",
    "",
    "",
    3,
    "Referência de assinatura"
  ],
  [
    "style",
    "Ernst Haeckel",
    "in the style of Ernst Haeckel scientific illustrations — obsessive botanical precision, symmetry",
    "",
    "",
    3,
    "Referência de assinatura"
  ],
  [
    "style",
    "Yayoi Kusama",
    "in the style of Yayoi Kusama — infinite polka dots, obliteration, joyful obsession",
    "",
    "",
    3,
    "Referência de assinatura"
  ],
  [
    "style",
    "Burle Marx",
    "visual vocabulary of Roberto Burle Marx — organic biomorphic shapes, tropical color, topographic view",
    "",
    "",
    3,
    "Referência de assinatura"
  ],
  [
    "detail",
    "Paleta Mono + Acento",
    "nearly desaturated image with a single vibrant accent color — emotional punctuation",
    "",
    "",
    3,
    "Referência de tempero"
  ],
  [
    "detail",
    "Tilt-Shift Miniatura",
    "tilt-shift lens effect, miniaturized world, toy-like depth-of-field blur",
    "",
    "",
    3,
    "Referência de tempero"
  ],
  [
    "detail",
    "Luz Neon Entrando",
    "neon light from outside bleeds through blinds, casting colored stripes across the scene",
    "",
    "",
    3,
    "Referência de tempero"
  ],
  [
    "detail",
    "Reflexo na Água",
    "perfect reflection on wet surface or puddle below the subject, surreal doubling",
    "",
    "",
    3,
    "Referência de tempero"
  ],
  [
    "medium",
    "Widescreen 2.35:1",
    "2.35:1 cinemascope widescreen aspect ratio, horizontal cinematic sweep",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Quadrado 1:1",
    "perfect square 1:1 format, balanced centered composition",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Polaroid",
    "Polaroid instant photograph format, square with white border, nostalgic",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Pôster de Cinema",
    "movie poster vertical format, title space at top, bold graphic hierarchy",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Capa de Disco de Vinil",
    "vinyl record album cover, square format, bold graphic design",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Dupla-Página de Revista",
    "double-page magazine spread, editorial layout, text columns implied",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Tela Panorâmica 3:1",
    "ultra-wide panoramic format, 3:1 ratio, landscape sweep, horizon-first composition",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Mural Arquitetônico",
    "architectural wall mural scale, viewed from below, building-sized composition",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Tríptico",
    "triptych format — three equal panels telling one story across them",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Miniatura (Tilt-shift)",
    "tilt-shift miniaturized world, toy-like scale, everything precious and small",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Capa de Cordel",
    "Brazilian cordel booklet cover, vertical pamphlet format, woodcut border frame",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Retrato 4x5",
    "portrait format 4:5 ratio, vertical, painterly close composition",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Cartão Postal",
    "postcard format, horizontal, white border, caption space at bottom",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "medium",
    "Tela de Abertura de Game",
    "video game title screen format, HUD elements implied, genre typography",
    "",
    "",
    3,
    "Referência de formato"
  ],
  [
    "palette",
    "Dourado e Sombra",
    "dominant palette: deep shadow and warm gold, chiaroscuro contrast",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Neon sobre Preto",
    "dominant palette: neon electric colors on absolute black, synthwave night",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Pastel Desbotado",
    "dominant palette: faded pastels, washed-out film photography warmth",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Vermelho e Cinza",
    "dominant palette: stark red and gray, Soviet constructivist graphic tension",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Verde Selva",
    "dominant palette: deep jungle greens, earthy ochres, living darkness",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Azul Profundo",
    "dominant palette: deep navy and cobalt, cold, melancholic, oceanic",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Sépia Envelhecida",
    "dominant palette: sepia tones, aged paper warmth, 19th century archive",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Branco e Carvão",
    "dominant palette: near-white and charcoal, high contrast, austere",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Laranja Crepuscular",
    "dominant palette: burning sunset orange against deep violet sky",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Rosa e Preto",
    "dominant palette: hot pink and black, confrontational, pop aggressive energy",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Terracota e Ocre",
    "dominant palette: terracotta reds and warm ochres, Brazilian earth tones",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Ciano e Sombra",
    "dominant palette: cold cyan highlights against dramatic charcoal shadow",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Amarelo e Roxo",
    "dominant palette: saturated yellow and deep purple, high tension complementary",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Monocromático Agressivo",
    "dominant palette: strict monochrome, single hue with extreme value range",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "palette",
    "Tropical Saturado",
    "dominant palette: maximum tropical saturation — mangoes, parrots, hibiscus",
    "",
    "",
    3,
    "Referência de paleta"
  ],
  [
    "mood",
    "Épico / Grandioso",
    "emotional register: epic and grandiose — mythological weight, vast scale, heroic proportion",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Íntimo / Delicado",
    "emotional register: intimate and tender — small scale, private moment, held breath",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Absurdo / Deadpan",
    "emotional register: absurdist and deadpan — the bizarre treated with total matter-of-fact seriousness",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Sombrio / Elegíaco",
    "emotional register: somber and elegiac — grief, loss, quiet irreversible devastation",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Eufórico / Selvagem",
    "emotional register: euphoric and uncontained — peak celebration, abandon, release",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Melancolia Dourada",
    "emotional register: bittersweet nostalgia — golden light falling on a world already gone",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Tensão Silenciosa",
    "emotional register: silent dread — something wrong but unseen, still before the storm",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Ternura Brutal",
    "emotional register: brutal tenderness — roughness and gentleness inhabiting the same frame",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Ironia Fria",
    "emotional register: cold irony — distance, dry wit, refusal to be moved",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Sacro / Transcendente",
    "emotional register: sacred and transcendent — beyond the human, approaching the divine",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Raiva Contida",
    "emotional register: barely contained fury — stillness that hides volcanic emotion beneath",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "mood",
    "Maravilha Inocente",
    "emotional register: pure wonder — a child encountering the sublime for the first time",
    "",
    "",
    3,
    "Referência de escala"
  ],
  [
    "composition",
    "Close Extremo",
    "extreme close-up, macro detail, texture fills the entire frame",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Aéreo / Drone",
    "aerial drone shot, camera looking straight down from above, map-like",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "POV Subjetivo",
    "first-person POV shot — the camera IS the character's eyes, immersive",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Retrato 3/4",
    "classic 3/4 portrait angle, slight profile turn, painterly traditional framing",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Câmera no Chão",
    "ground-level camera, subject towers above, feet at the lens edge",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Reflexo no Espelho",
    "subject reflected in a mirror, both reflection and reality visible simultaneously",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Sobre o Ombro",
    "over-the-shoulder shot, partial back of head in foreground, subject facing us",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Simétrico Central",
    "perfectly centered symmetrical composition, Kubrickian one-point perspective, tunnel effect",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Silhueta Pura",
    "pure silhouette against a brightly lit background, form without facial detail",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Plano Americano",
    "medium shot cutting at the knees, classic western and noir framing",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Desfocado à Frente",
    "extreme shallow depth of field, blurred foreground element partially obscuring subject",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Zoom Lento (Dolly)",
    "dolly zoom effect — background warps as subject remains stable, Hitchcock vertigo",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Contra-luz",
    "backlit subject, rim light only, interior thrown into darkness, halo effect",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "composition",
    "Two-Shot Tenso",
    "two-shot framing, both subjects in frame, tension in the space between them",
    "",
    "",
    3,
    "Referência de camera"
  ],
  [
    "anchor",
    "Neo",
    "Neo from The Matrix, black trench coat, sunglasses, bullet time stance",
    "Cinema",
    "90s",
    4
  ],
  [
    "style",
    "Arte em Vitral",
    "Stained glass window illustration, lead outline, jewel-colored light, medieval cathedral",
    "",
    "",
    4,
    "Referência de linguagem"
  ],
  [
    "style",
    "Gravura em Metal",
    "Copper plate etching print, fine cross-hatching, Goya-era chiaroscuro, plate texture",
    "",
    "",
    4,
    "Referência de linguagem"
  ],
  [
    "trend",
    "Pôster Se Procura",
    "on a wanted PROCURADO poster — black and white portrait, reward amount, western atmosphere",
    "",
    "",
    4,
    "Referência de torcao"
  ],
  [
    "trend",
    "Figurinha Panini",
    "as a Panini sticker album card — silver holographic border, name bar at bottom, 1994 energy",
    "",
    "",
    4,
    "Referência de torcao"
  ],
  [
    "detail",
    "Neon Entrando",
    "neon light from outside bleeds through blinds, casting colored stripes across the scene",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "detail",
    "Sombra Dissidente",
    "the subject's shadow does not match their form — it belongs to someone or something else entirely",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "detail",
    "Bilhete à Mão",
    "a handwritten note visible somewhere in the scene — illegible but emotional, personal history in cursive",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "detail",
    "Estática de TV",
    "television static snow texture overlaid at the edges — signal lost, memory failing",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "detail",
    "Rasura Censurada",
    "a thick black censorship bar over some element — what was removed matters as much as what remains",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "detail",
    "Mancha de Umidade",
    "a damp stain on the wall behind the subject — tropical decay, time passing through plaster",
    "",
    "",
    4,
    "Referência de tempero"
  ],
  [
    "medium",
    "Tela de Celular 9:16",
    "vertical 9:16 smartphone screen format, social media native, full-bleed immersion",
    "",
    "",
    4,
    "Referência de formato"
  ],
  [
    "medium",
    "Pôster de Metrô",
    "vertical subway column poster format, 3:1 ratio, designed for passing eyes",
    "",
    "",
    4,
    "Referência de formato"
  ],
  [
    "medium",
    "Retrato 4:5",
    "portrait format 4:5 ratio, vertical, painterly close composition",
    "",
    "",
    4,
    "Referência de formato"
  ],
  [
    "medium",
    "Panorâmica 3:1",
    "ultra-wide panoramic format, 3:1 ratio, landscape sweep, horizon-first composition",
    "",
    "",
    4,
    "Referência de formato"
  ],
  [
    "medium",
    "Stamp / Selo Postal",
    "postage stamp format, perforated border, denomination value, miniature scene of national significance",
    "",
    "",
    4,
    "Referência de formato"
  ],
  [
    "palette",
    "Amarelo Brasil",
    "dominant palette of national yellow and green, patriotic and beautiful and contested",
    "",
    "",
    4,
    "Referência de paleta"
  ],
  [
    "palette",
    "Monocromático",
    "strict monochrome, single hue with extreme value range, emotional austerity",
    "",
    "",
    4,
    "Referência de paleta"
  ],
  [
    "palette",
    "Ciberpunk Ciano",
    "dominant palette of cyberpunk teal and electric cyan on black, digital rain and data streams",
    "",
    "",
    4,
    "Referência de paleta"
  ],
  [
    "composition",
    "Câmera de Segurança",
    "CCTV security camera aesthetic, wide angle, timestamp burned in corner, surveillance gray-green",
    "",
    "",
    4,
    "Referência de camera"
  ],
  [
    "composition",
    "Tilt-Shift Miniatura",
    "tilt-shift lens effect, miniaturized world, toy-like shallow depth-of-field blur",
    "",
    "",
    4,
    "Referência de camera"
  ]
];

export const REFERENCE_DATA: ReferenceItem[] = rows.map(([kind, name, output, category, era, source, description], index) => ({
  id: `ref-${index}`,
  kind,
  name,
  description: description ?? ([category, era].filter(Boolean).join(' · ') || 'Referência do acervo'),
  output,
  category,
  era,
  source: SOURCES[source],
}));
