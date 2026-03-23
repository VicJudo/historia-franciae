// ============================================================
// HISTORIA FRANCIAE — Base de données historique complète
// De Clovis (481) à Charles de Gaulle (1969)
// ============================================================

const HISTORIA = {

  // ──────────────────────────────────────────────
  // DYNASTIES
  // ──────────────────────────────────────────────
  dynasties: [
    { id: "merovingiens",    nom: "Mérovingiens",         debut: 481,  fin: 751,  couleur: "#7B5E3A", description: "Fondateurs du royaume franc, descendants légendaires de Mérovée. Période de christianisation et d'unification des Francs." },
    { id: "carolingiens",    nom: "Carolingiens",         debut: 751,  fin: 987,  couleur: "#4A6741", description: "Issus de Charles Martel. Charlemagne porte la dynastie à son apogée avec la création de l'Empire d'Occident." },
    { id: "capetiens",       nom: "Capétiens directs",    debut: 987,  fin: 1328, couleur: "#2E5F8A", description: "Hugues Capet fonde la plus longue dynastie royale française. Treize rois sur trois siècles consolident le domaine royal." },
    { id: "valois",          nom: "Valois",               debut: 1328, fin: 1589, couleur: "#6B3D7A", description: "Branche cadette des Capétiens. Règnent pendant la Guerre de Cent Ans, la Renaissance et les Guerres de Religion." },
    { id: "bourbons",        nom: "Bourbons",             debut: 1589, fin: 1792, couleur: "#8A3A3A", description: "Henri IV fonde la branche. Louis XIV porte la monarchie absolue à son zénith. Fin avec la Révolution." },
    { id: "republique1",     nom: "Première République",  debut: 1792, fin: 1804, couleur: "#3A6B5A", description: "Née de la Révolution. Convention nationale, Directoire, Consulat. La France expérimente la république pour la première fois." },
    { id: "empire1",         nom: "Premier Empire",       debut: 1804, fin: 1814, couleur: "#5A3A6B", description: "Napoléon Bonaparte, Consul puis Empereur. L'apogée militaire de la France, de Madrid à Moscou." },
    { id: "restauration",    nom: "Restauration",         debut: 1814, fin: 1830, couleur: "#8A3A3A", description: "Retour des Bourbons après Waterloo. Louis XVIII puis Charles X tentent de réconcilier l'Ancien Régime et la France nouvelle." },
    { id: "juillet",         nom: "Monarchie de Juillet", debut: 1830, fin: 1848, couleur: "#3A5A8A", description: "Louis-Philippe d'Orléans, roi des Français (et non de France). Régime bourgeois et libéral, renversé en 1848." },
    { id: "republique2",     nom: "Deuxième République",  debut: 1848, fin: 1852, couleur: "#3A6B5A", description: "Courte expérience républicaine. Suffrage universel masculin. Louis-Napoléon Bonaparte en devient président, puis Empereur." },
    { id: "empire2",         nom: "Second Empire",        debut: 1852, fin: 1870, couleur: "#5A3A6B", description: "Napoléon III modernise la France (Haussmann, chemins de fer) mais capitule à Sedan face à la Prusse." },
    { id: "republique3",     nom: "Troisième République", debut: 1870, fin: 1940, couleur: "#3A6B5A", description: "La plus longue République française. Affaire Dreyfus, laïcité, Grande Guerre, Front Populaire." },
    { id: "vichyregime",     nom: "État français (Vichy)",debut: 1940, fin: 1944, couleur: "#5A5A5A", description: "Pétain chef de l'État. Collaboration avec l'Allemagne nazie. La France libre de De Gaulle s'y oppose depuis Londres." },
    { id: "republique4",     nom: "Quatrième République", debut: 1944, fin: 1958, couleur: "#3A6B5A", description: "Reconstruction après-guerre. Instabilité gouvernementale chronique. Guerre d'Algérie provoque la crise finale." },
    { id: "republique5",     nom: "Cinquième République", debut: 1958, fin: 9999, couleur: "#2E5A7A", description: "De Gaulle refonde les institutions. Présidentialisation du régime. Toujours en vigueur aujourd'hui." },
  ],

  // ──────────────────────────────────────────────
  // ROIS & CHEFS D'ÉTAT
  // ──────────────────────────────────────────────
  rois: [
    // ── MÉROVINGIENS ──
    {
      id: "clovis-1",
      nom: "Clovis Ier",
      surnom: "Le Fondateur",
      dynastie: "merovingiens",
      naissance: 466, mort: 511,
      debut_regne: 481, fin_regne: 511,
      epouse: "Clotilde de Bourgogne",
      enfants: ["Thierry Ier", "Clodomir", "Childebert Ier", "Clotaire Ier"],
      lieu_naissance: "Tournai", lieu_mort: "Paris",
      portrait_emoji: "👑",
      resume: "Premier roi des Francs unis et premier roi chrétien de France. Vainqueur de Syagrius (486), des Alamans à Tolbiac (496) et des Wisigoths à Vouillé (507). Son baptême par saint Remi marque la naissance de la 'fille aînée de l'Église'.",
      faits: [
        "Baptisé par Saint Remi à Reims vers 498-499",
        "Vainqueur de Syagrius, dernier gouverneur romain, en 486",
        "Bataille de Tolbiac contre les Alamans (496)",
        "Victoire sur les Wisigoths à Vouillé (507)",
        "Fait de Paris sa capitale",
        "Promulgue la Loi Salique"
      ],
      periodes_liees: [],
      batailles_liees: ["tolbiac", "vouille", "soissons"],
      carte_territoire: "francs_481"
    },
    {
      id: "dagobert-1",
      nom: "Dagobert Ier",
      surnom: "Le Grand",
      dynastie: "merovingiens",
      naissance: 603, mort: 639,
      debut_regne: 629, fin_regne: 639,
      epouse: "Nanthilde",
      lieu_naissance: "Inconnue", lieu_mort: "Saint-Denis",
      portrait_emoji: "👑",
      resume: "Dernier grand roi mérovingien. Réunifie le royaume franc, mène une politique extérieure active et protège les arts. Il est associé à la basilique de Saint-Denis.",
      faits: [
        "Dernier mérovingien à exercer réellement le pouvoir",
        "Grandes victoires contre les Slaves et les Bretons",
        "Inhumé à Saint-Denis, qu'il fit embellir",
        "Célèbre par la chanson satirique 'Le bon roi Dagobert'"
      ],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "francs_629"
    },
    // ── CAROLINGIENS ──
    {
      id: "pepin-bref",
      nom: "Pépin le Bref",
      surnom: "Le Bref",
      dynastie: "carolingiens",
      naissance: 714, mort: 768,
      debut_regne: 751, fin_regne: 768,
      epouse: "Bertrade de Laon",
      enfants: ["Charlemagne", "Carloman Ier"],
      lieu_naissance: "Jupille", lieu_mort: "Saint-Denis",
      portrait_emoji: "👑",
      resume: "Fils de Charles Martel, il dépose le dernier Mérovingien Childéric III avec l'appui du pape et fonde la dynastie carolingienne. Ses donations au pape fondent les États pontificaux.",
      faits: [
        "Premier roi carolingien (751)",
        "Sacré par le pape Zacharie, puis par saint Boniface",
        "Donation de Pépin : crée les États pontificaux",
        "Père de Charlemagne"
      ],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "francs_751"
    },
    {
      id: "charlemagne",
      nom: "Charlemagne",
      surnom: "Père de l'Europe",
      dynastie: "carolingiens",
      naissance: 742, mort: 814,
      debut_regne: 768, fin_regne: 814,
      epouse: "Hildegarde de Vinzgouw (principale)",
      enfants: ["Louis le Pieux", "Pépin d'Italie", "Charles le Jeune"],
      lieu_naissance: "Aix-la-Chapelle ou Ingelheim", lieu_mort: "Aix-la-Chapelle",
      portrait_emoji: "⚜",
      resume: "Roi des Francs et premier Empereur d'Occident depuis la chute de Rome. Il unifie une grande partie de l'Europe occidentale, favorise la renaissance carolingienne et pose les bases de la civilisation européenne médiévale.",
      faits: [
        "Couronné Empereur d'Occident par le pape Léon III le 25 décembre 800",
        "Conquête de la Saxe (772-804) et conversion forcée des Saxons",
        "Victoire sur les Lombards en Italie (773-774)",
        "Défaite de Roncevaux (778) chantée dans la Chanson de Roland",
        "Création des comtés et des missi dominici",
        "Réforme scolaire : l'École palatine et Alcuin",
        "Réforme monétaire et unification des poids et mesures",
        "Empire s'étend de l'Espagne à la Bohême, de la mer du Nord à l'Italie"
      ],
      periodes_liees: ["empire_carolingien"],
      batailles_liees: ["roncevaux"],
      carte_territoire: "empire_charlemagne"
    },
    {
      id: "louis-pieux",
      nom: "Louis le Pieux",
      surnom: "Le Débonnaire",
      dynastie: "carolingiens",
      naissance: 778, mort: 840,
      debut_regne: 814, fin_regne: 840,
      epouse: "Ermengarde d'Hesbaye, puis Judith de Bavière",
      enfants: ["Lothaire Ier", "Pépin Ier d'Aquitaine", "Louis le Germanique", "Charles le Chauve"],
      lieu_naissance: "Chasseneuil-du-Poitou", lieu_mort: "Ingelheim",
      portrait_emoji: "👑",
      resume: "Fils unique de Charlemagne à lui succéder, il règne sur l'Empire mais doit affronter les révoltes de ses fils et l'affaiblissement du pouvoir central.",
      faits: [
        "Partages successifs de l'Empire entre ses fils",
        "Révoltes de Lothaire et ses frères",
        "Traité de Verdun (843) signé par ses fils après sa mort, divisant l'Empire"
      ],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "empire_carolingien"
    },
    {
      id: "charles-chauve",
      nom: "Charles le Chauve",
      surnom: "Le Chauve",
      dynastie: "carolingiens",
      naissance: 823, mort: 877,
      debut_regne: 843, fin_regne: 877,
      epouse: "Ermentrude d'Orléans",
      lieu_naissance: "Francfort", lieu_mort: "Brides-les-Bains",
      portrait_emoji: "👑",
      resume: "Premier roi de Francia Occidentalis (la future France) par le Traité de Verdun (843). Son règne est marqué par les invasions vikings et les difficultés à maintenir l'autorité centrale.",
      faits: [
        "Traité de Verdun (843) : reçoit la Francia Occidentalis",
        "Invasions vikings répétées, siège de Paris (845)",
        "Édit de Quierzy (877) : premiers pas vers la féodalité",
        "Couronné Empereur en 875"
      ],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "francie_occidentale"
    },
    // ── CAPÉTIENS ──
    {
      id: "hugues-capet",
      nom: "Hugues Capet",
      surnom: "Fondateur des Capétiens",
      dynastie: "capetiens",
      naissance: 941, mort: 996,
      debut_regne: 987, fin_regne: 996,
      epouse: "Adélaïde d'Aquitaine",
      enfants: ["Robert II le Pieux"],
      lieu_naissance: "Inconnue", lieu_mort: "Paris",
      portrait_emoji: "👑",
      resume: "Duc des Francs, élu roi à la mort du dernier Carolingien. Il fonde la dynastie capétienne qui régnera, sous diverses branches, jusqu'en 1830. Son domaine direct est encore modeste : l'Île-de-France.",
      faits: [
        "Élu roi par les grands seigneurs en 987",
        "Fonde la dynastie capétienne",
        "Couronne son fils Robert de son vivant — tradition qui durera",
        "Domaine royal limité à l'Île-de-France"
      ],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "france_987"
    },
    {
      id: "robert-2",
      nom: "Robert II",
      surnom: "Le Pieux",
      dynastie: "capetiens",
      naissance: 972, mort: 1031,
      debut_regne: 996, fin_regne: 1031,
      epouse: "Berthe de Bourgogne, puis Constance d'Arles",
      lieu_naissance: "Orléans", lieu_mort: "Melun",
      portrait_emoji: "👑",
      resume: "Roi pieux et lettré, il agrandit légèrement le domaine royal en annexant le duché de Bourgogne. Il est excommunié par le pape pour avoir répudié sa femme.",
      faits: ["Annexion du duché de Bourgogne (1015)", "Excommunié par le pape pour sa première union (Berthe était sa cousine)", "Connu pour sa piété et son amour des lettres"],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "france_996"
    },
    {
      id: "henri-1",
      nom: "Henri Ier",
      surnom: "",
      dynastie: "capetiens",
      naissance: 1008, mort: 1060,
      debut_regne: 1031, fin_regne: 1060,
      epouse: "Anne de Kiev",
      lieu_naissance: "Reims", lieu_mort: "Vitry-en-Brie",
      portrait_emoji: "👑",
      resume: "Roi peu puissant face à la montée des grands féodaux. Il épouse Anne de Kiev, fille du prince de Kyiv, renforçant les liens avec l'Europe de l'Est.",
      faits: ["Épouse Anne de Kiev, apportant un lien avec la Russie kiévienne", "Nombreuses guerres contre les barons normands et angevins", "Doit céder la Bourgogne à son frère"],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "france_1031"
    },
    {
      id: "philippe-1",
      nom: "Philippe Ier",
      surnom: "",
      dynastie: "capetiens",
      naissance: 1052, mort: 1108,
      debut_regne: 1060, fin_regne: 1108,
      epouse: "Berthe de Hollande, puis Bertrade de Montfort",
      lieu_naissance: "Inconnue", lieu_mort: "Melun",
      portrait_emoji: "👑",
      resume: "Long règne marqué par les conflits avec les grands féodaux et une excommunication papale pour adultère. Il refuse de partir en Croisade.",
      faits: ["Excommunié pour sa relation avec Bertrade de Montfort", "Refuse de partir à la Première Croisade (1096)", "Agrandit lentement le domaine royal"],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "france_1060"
    },
    {
      id: "louis-6",
      nom: "Louis VI",
      surnom: "Le Gros",
      dynastie: "capetiens",
      naissance: 1081, mort: 1137,
      debut_regne: 1108, fin_regne: 1137,
      epouse: "Adélaïde de Savoie",
      lieu_naissance: "Paris", lieu_mort: "Béthisy-Saint-Pierre",
      portrait_emoji: "👑",
      resume: "Il pacifie l'Île-de-France en soumettant les petits seigneurs brigands, renforce le domaine royal et affirme l'autorité capétienne. Son conseiller Suger de Saint-Denis joue un rôle essentiel.",
      faits: ["Pacifie l'Île-de-France contre les seigneurs pillards", "Alliance avec les communes naissantes", "S'appuie sur l'abbé Suger, grand administrateur", "Marie son fils Louis à Aliénor d'Aquitaine"],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "france_1108"
    },
    {
      id: "louis-7",
      nom: "Louis VII",
      surnom: "Le Jeune",
      dynastie: "capetiens",
      naissance: 1120, mort: 1180,
      debut_regne: 1137, fin_regne: 1180,
      epouse: "Aliénor d'Aquitaine (div.), Constance de Castille, Adèle de Champagne",
      lieu_naissance: "Paris", lieu_mort: "Paris",
      portrait_emoji: "👑",
      resume: "Son divorce d'Aliénor d'Aquitaine, qui épouse Henri II Plantagenêt, donne à l'Angleterre un immense empire en France et crée un conflit séculaire.",
      faits: ["Divorce avec Aliénor d'Aquitaine (1152) — erreur stratégique majeure", "Aliénor épouse Henri II d'Angleterre, créant l'Empire Plantagenêt", "Participe à la Deuxième Croisade (1147) — échec total", "Conflit permanent avec Henri II Plantagenêt"],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "france_1137"
    },
    {
      id: "philippe-2",
      nom: "Philippe II",
      surnom: "Auguste",
      dynastie: "capetiens",
      naissance: 1165, mort: 1223,
      debut_regne: 1180, fin_regne: 1223,
      epouse: "Isabelle de Hainaut, puis Ingeburge de Danemark",
      enfants: ["Louis VIII"],
      lieu_naissance: "Gonesse", lieu_mort: "Mantes",
      portrait_emoji: "⚜",
      resume: "Un des plus grands rois capétiens. Il triple le domaine royal en battant les Plantagenêts, remporte Bouvines (1214) contre une coalition européenne et crée la première administration centralisée.",
      faits: [
        "Victoire décisive de Bouvines (1214) contre l'Empire germanique, l'Angleterre et la Flandre",
        "Conquête de la Normandie, de l'Anjou et du Poitou sur les Plantagenêts",
        "Triple le domaine royal",
        "Crée les baillis et sénéchaux : première administration royale",
        "Embellissement de Paris : premières rues pavées, enceinte, les Halles",
        "Participe à la 3e Croisade avec Richard Cœur de Lion"
      ],
      periodes_liees: [],
      batailles_liees: ["bouvines"],
      carte_territoire: "france_1180"
    },
    {
      id: "louis-8",
      nom: "Louis VIII",
      surnom: "Le Lion",
      dynastie: "capetiens",
      naissance: 1187, mort: 1226,
      debut_regne: 1223, fin_regne: 1226,
      epouse: "Blanche de Castille",
      enfants: ["Louis IX (Saint Louis)", "Robert Ier d'Artois"],
      lieu_naissance: "Paris", lieu_mort: "Montpensier",
      portrait_emoji: "👑",
      resume: "Court règne (3 ans) mais important : il lance la Croisade albigeoise et rattache le Poitou et une partie du Languedoc à la couronne.",
      faits: ["Mène la Croisade albigeoise dans le Midi", "Conquête du Poitou et d'une partie du Languedoc", "Meurt de maladie à 39 ans", "Laisse le royaume à son fils de 12 ans, sous la régence de Blanche de Castille"],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "france_1223"
    },
    {
      id: "louis-9",
      nom: "Louis IX",
      surnom: "Saint Louis",
      dynastie: "capetiens",
      naissance: 1214, mort: 1270,
      debut_regne: 1226, fin_regne: 1270,
      epouse: "Marguerite de Provence",
      enfants: ["Philippe III", "Robert de Clermont (ancêtre des Bourbons)"],
      lieu_naissance: "Poissy", lieu_mort: "Tunis",
      portrait_emoji: "✝",
      resume: "Canonisé en 1297, il est le roi idéal du Moyen Âge : juste, pieux, réformateur. Il crée le parlement de Paris, interdit les guerres privées et part deux fois en Croisade. Meurt de la peste devant Tunis.",
      faits: [
        "Seul roi de France canonisé (saint Louis)",
        "Crée le Parlement de Paris (1254)",
        "Interdit les guerres privées entre seigneurs",
        "7e Croisade (1248) : capturé en Égypte, rançonné",
        "8e Croisade (1270) : meurt de la peste devant Tunis",
        "Traité de Paris (1259) : règle le contentieux avec l'Angleterre",
        "Fonde la Sainte-Chapelle pour accueillir la Couronne d'épines",
        "Réforme monétaire et judiciaire"
      ],
      periodes_liees: [],
      batailles_liees: ["mansourah"],
      carte_territoire: "france_1226"
    },
    {
      id: "philippe-4",
      nom: "Philippe IV",
      surnom: "Le Bel",
      dynastie: "capetiens",
      naissance: 1268, mort: 1314,
      debut_regne: 1285, fin_regne: 1314,
      epouse: "Jeanne Ire de Navarre",
      enfants: ["Louis X", "Philippe V", "Charles IV", "Isabelle (épouse d'Édouard II)"],
      lieu_naissance: "Fontainebleau", lieu_mort: "Fontainebleau",
      portrait_emoji: "👑",
      resume: "Roi autoritaire et modernisateur. Il détruit l'ordre des Templiers, s'oppose au pape Boniface VIII et transfère la papauté à Avignon. Père de trois rois qui mourront sans héritiers mâles.",
      faits: [
        "Destruction de l'ordre du Temple (1307-1314), arrestation de Jacques de Molay",
        "Conflit avec le pape Boniface VIII : 'gifle d'Anagni' (1303)",
        "Pape Clément V s'installe à Avignon (début de la papauté avignonnaise)",
        "Réunion des premiers États généraux (1302)",
        "Renforce considérablement la bureaucratie royale",
        "Malédiction de Jacques de Molay sur sa lignée"
      ],
      periodes_liees: [],
      batailles_liees: ["courtrai"],
      carte_territoire: "france_1285"
    },
    {
      id: "charles-4",
      nom: "Charles IV",
      surnom: "Le Bel",
      dynastie: "capetiens",
      naissance: 1294, mort: 1328,
      debut_regne: 1322, fin_regne: 1328,
      epouse: "Blanche de Bourgogne (div.), Marie de Luxembourg, Jeanne d'Évreux",
      lieu_naissance: "Crécy", lieu_mort: "Vincennes",
      portrait_emoji: "👑",
      resume: "Dernier roi capétien direct. Meurt sans héritier mâle, ce qui provoque la guerre de succession avec l'Angleterre et ouvre la crise de la Guerre de Cent Ans.",
      faits: ["Dernier des fils de Philippe le Bel", "Meurt sans héritier mâle (1328)", "Sa mort déclenche la question de succession qui mènera à la Guerre de Cent Ans", "Édouard III d'Angleterre revendique le trône de France par sa mère Isabelle"],
      periodes_liees: ["guerre_cent_ans"],
      batailles_liees: [],
      carte_territoire: "france_1322"
    },
    // ── VALOIS ──
    {
      id: "philippe-6",
      nom: "Philippe VI",
      surnom: "De Valois",
      dynastie: "valois",
      naissance: 1293, mort: 1350,
      debut_regne: 1328, fin_Regne: 1350,
      fin_regne: 1350,
      epouse: "Jeanne de Bourgogne, puis Blanche de Navarre",
      lieu_naissance: "Inconnue", lieu_mort: "Nogent-le-Roi",
      portrait_emoji: "👑",
      resume: "Premier roi Valois, cousin de Charles IV. Son accession au trône, contestée par Édouard III d'Angleterre, déclenche la Guerre de Cent Ans. La défaite de Crécy (1346) et la Peste Noire (1348) ravagent son règne.",
      faits: ["Premier roi Valois (branche cadette des Capétiens)", "Déclenchement de la Guerre de Cent Ans", "Désastre de Crécy (1346) : archers anglais déciment la chevalerie française", "Prise de Calais par les Anglais (1347)", "Ravages de la Peste Noire (1347-1350)"],
      periodes_liees: ["guerre_cent_ans"],
      batailles_liees: ["crecy"],
      carte_territoire: "france_1328"
    },
    {
      id: "jean-2",
      nom: "Jean II",
      surnom: "Le Bon",
      dynastie: "valois",
      naissance: 1319, mort: 1364,
      debut_regne: 1350, fin_regne: 1364,
      epouse: "Bonne de Luxembourg, puis Jeanne d'Auvergne",
      lieu_naissance: "Le Mans", lieu_mort: "Londres",
      portrait_emoji: "👑",
      resume: "Capturé par le Prince Noir à Poitiers (1356), il doit signer le traité de Brétigny (1360) cédant un tiers de la France à l'Angleterre. Il mourra en captivité à Londres, honneur oblige.",
      faits: ["Capturé à la bataille de Poitiers (1356)", "Traité de Brétigny (1360) : cède l'Aquitaine et Calais à l'Angleterre contre rançon", "Rentre en captivité à Londres quand son fils otage s'échappe — par honneur", "Crée l'Ordre de l'Étoile, rival de l'Ordre de la Jarretière anglais"],
      periodes_liees: ["guerre_cent_ans"],
      batailles_liees: ["poitiers"],
      carte_territoire: "france_1350"
    },
    {
      id: "charles-5",
      nom: "Charles V",
      surnom: "Le Sage",
      dynastie: "valois",
      naissance: 1338, mort: 1380,
      debut_regne: 1364, fin_regne: 1380,
      epouse: "Jeanne de Bourbon",
      lieu_naissance: "Vincennes", lieu_mort: "Beauté-sur-Marne",
      portrait_emoji: "👑",
      resume: "Administrateur brillant qui redresse la France après les désastres. Il reconquiert avec Du Guesclin la majeure partie des territoires perdus et réforme les impôts et l'armée.",
      faits: ["S'appuie sur le connétable Du Guesclin pour reconquérir les territoires perdus", "Réforme fiscale : crée les aides et la gabelle", "Réforme militaire : mercenaires remplacent la chevalerie féodale", "Grand bibliophile : fonde la bibliothèque royale (ancêtre de la BnF)", "Reconquiert l'essentiel des territoires cédés à Brétigny"],
      periodes_liees: ["guerre_cent_ans"],
      batailles_liees: [],
      carte_territoire: "france_1364"
    },
    {
      id: "charles-6",
      nom: "Charles VI",
      surnom: "Le Fol / Le Bien-Aimé",
      dynastie: "valois",
      naissance: 1368, mort: 1422,
      debut_regne: 1380, fin_regne: 1422,
      epouse: "Isabeau de Bavière",
      enfants: ["Charles VII"],
      lieu_naissance: "Paris", lieu_mort: "Paris",
      portrait_emoji: "👑",
      resume: "Sa folie intermittente plonge le royaume dans la guerre civile entre Armagnacs et Bourguignons. La défaite d'Azincourt (1415) et le traité de Troyes (1420) donnent la couronne de France au roi d'Angleterre.",
      faits: ["Souffre de crises de folie récurrentes ('le Bal des Ardents', 1393)", "Guerre civile entre Armagnacs et Bourguignons", "Désastre d'Azincourt (1415) contre Henri V d'Angleterre", "Traité de Troyes (1420) : déshérite son fils au profit d'Henri V d'Angleterre", "La France au bord de l'effondrement"],
      periodes_liees: ["guerre_cent_ans"],
      batailles_liees: ["azincourt"],
      carte_territoire: "france_1380"
    },
    {
      id: "charles-7",
      nom: "Charles VII",
      surnom: "Le Victorieux / Le Bien Servi",
      dynastie: "valois",
      naissance: 1403, mort: 1461,
      debut_regne: 1422, fin_regne: 1461,
      epouse: "Marie d'Anjou",
      enfants: ["Louis XI"],
      lieu_naissance: "Paris", lieu_mort: "Mehun-sur-Yèvre",
      portrait_emoji: "⚜",
      resume: "D'abord 'le roi de Bourges' mal reconnu, il est sacré à Reims grâce à Jeanne d'Arc (1429), reconquiert progressivement son royaume et remporte la Guerre de Cent Ans.",
      faits: [
        "Sacré à Reims grâce à Jeanne d'Arc (17 juillet 1429)",
        "Réforme militaire : crée les Compagnies d'Ordonnance (1445), première armée permanente française",
        "Reprise de Paris (1436)",
        "Victoire de Castillon (1453) : fin de la Guerre de Cent Ans",
        "Seuls Calais reste anglais",
        "Fait brûler Jeanne d'Arc sans intervenir (1431)"
      ],
      periodes_liees: ["guerre_cent_ans"],
      batailles_liees: ["orleans", "patay", "castillon"],
      carte_territoire: "france_1422"
    },
    {
      id: "louis-11",
      nom: "Louis XI",
      surnom: "L'Universelle Araigne",
      dynastie: "valois",
      naissance: 1423, mort: 1483,
      debut_regne: 1461, fin_Regne: 1483,
      fin_regne: 1483,
      epouse: "Marguerite d'Écosse, puis Charlotte de Savoie",
      lieu_naissance: "Bourges", lieu_mort: "Plessis-lès-Tours",
      portrait_emoji: "👑",
      resume: "Roi araignée, machiavélique et diplomate, il brise la puissance des grands féodaux (notamment Charles le Téméraire) et réunit la quasi-totalité de la France moderne.",
      faits: ["Défaite et mort de Charles le Téméraire à Nancy (1477)", "Rattachement de la Bourgogne, de la Picardie, de l'Artois", "Crée la Poste royale", "Soumet les grandes seigneuries par la ruse plus que par la guerre"],
      periodes_liees: [],
      batailles_liees: ["nancy"],
      carte_territoire: "france_1461"
    },
    {
      id: "charles-8",
      nom: "Charles VIII",
      surnom: "L'Affable",
      dynastie: "valois",
      naissance: 1470, mort: 1498,
      debut_regne: 1483, fin_regne: 1498,
      epouse: "Anne de Bretagne",
      lieu_naissance: "Amboise", lieu_mort: "Amboise",
      portrait_emoji: "👑",
      resume: "Lance les Guerres d'Italie en 1494 pour conquérir le royaume de Naples. Ces guerres introduisent la Renaissance italienne en France. Meurt accidentellement à 27 ans.",
      faits: ["Invasion de l'Italie (1494) : début des Guerres d'Italie", "Entrée triomphale à Naples (1495)", "Retrait précipité face à la Ligue de Venise", "Épouse Anne de Bretagne : prépare le rattachement de la Bretagne", "Meurt en heurtant un linteau de porte à Amboise"],
      periodes_liees: ["guerres_italie"],
      batailles_liees: ["fornoue"],
      carte_territoire: "france_1483"
    },
    {
      id: "louis-12",
      nom: "Louis XII",
      surnom: "Le Père du Peuple",
      dynastie: "valois",
      naissance: 1462, mort: 1515,
      debut_regne: 1498, fin_Regne: 1515,
      fin_regne: 1515,
      epouse: "Jeanne de France (div.), Anne de Bretagne, Marie d'Angleterre",
      lieu_naissance: "Blois", lieu_mort: "Paris",
      portrait_emoji: "👑",
      resume: "Populaire pour ses réformes judiciaires et sa modération fiscale. Continue les Guerres d'Italie avec des succès (Milan) puis des échecs.",
      faits: ["Conquête du duché de Milan (1499)", "Réforme judiciaire et fiscale populaire", "Titre de 'Père du Peuple' décerné par les États généraux", "Défaites militaires en fin de règne (Novare, 1513)"],
      periodes_liees: ["guerres_italie"],
      batailles_liees: [],
      carte_territoire: "france_1498"
    },
    {
      id: "francois-1",
      nom: "François Ier",
      surnom: "Le Roi-Chevalier",
      dynastie: "valois",
      naissance: 1494, mort: 1547,
      debut_regne: 1515, fin_Reign: 1547,
      fin_regne: 1547,
      epouse: "Claude de France, puis Éléonore d'Autriche",
      enfants: ["Henri II"],
      lieu_naissance: "Cognac", lieu_mort: "Rambouillet",
      portrait_emoji: "⚜",
      resume: "Roi de la Renaissance par excellence. Vainqueur de Marignan, mécène de Léonard de Vinci, bâtisseur de Chambord et du Louvre. Sa rivalité avec Charles Quint domine toute l'Europe.",
      faits: [
        "Victoire de Marignan (1515) : reconquiert le Milanais",
        "Invite Léonard de Vinci en France (1516) — meurt à Amboise",
        "Édit de Villers-Cotterêts (1539) : le français langue officielle des actes royaux",
        "Construction de Chambord, Fontainebleau, aile François Ier du Louvre",
        "Capturé à Pavie (1525) par Charles Quint",
        "Fondation du Collège de France (1530)",
        "Alliance avec les Ottomans contre les Habsbourg"
      ],
      periodes_liees: ["guerres_italie", "guerres_religion"],
      batailles_liees: ["marignan", "pavie"],
      carte_territoire: "france_1515"
    },
    {
      id: "henri-2",
      nom: "Henri II",
      surnom: "",
      dynastie: "valois",
      naissance: 1519, mort: 1559,
      debut_regne: 1547, fin_Reign: 1559,
      fin_regne: 1559,
      epouse: "Catherine de Médicis",
      enfants: ["François II", "Charles IX", "Henri III", "Marguerite de Valois"],
      lieu_naissance: "Saint-Germain-en-Laye", lieu_mort: "Paris",
      portrait_emoji: "👑",
      resume: "Sous influence de Diane de Poitiers et du connétable de Montmorency. Meurt tragiquement dans un tournoi. Sa mort ouvre la crise de succession et les Guerres de Religion.",
      faits: ["Tué lors d'un tournoi (blessé par Montgomery, 1559)", "Traité du Cateau-Cambrésis : fin des Guerres d'Italie", "Reconquête de Calais sur les Anglais (1558)", "Persécution des Huguenots", "Sa mort laisse trois fils mineurs sous tutelle de Catherine de Médicis"],
      periodes_liees: ["guerres_religion"],
      batailles_liees: [],
      carte_territoire: "france_1547"
    },
    {
      id: "francois-2",
      nom: "François II",
      surnom: "",
      dynastie: "valois",
      naissance: 1544, mort: 1560,
      debut_regne: 1559, fin_Reign: 1560,
      fin_regne: 1560,
      epouse: "Marie Stuart (reine d'Écosse)",
      lieu_naissance: "Fontainebleau", lieu_mort: "Orléans",
      portrait_emoji: "👑",
      resume: "Roi à 15 ans, gouverné par les Guises (famille de sa femme Marie Stuart). Meurt d'une otite à 16 ans sans héritier.",
      faits: ["Gouverné par les Guises, oncles de sa femme Marie Stuart", "Conspiration d'Amboise (1560) : tentative des Huguenots d'enlever le roi", "Meurt à 16 ans d'une infection"],
      periodes_liees: ["guerres_religion"],
      batailles_liees: [],
      carte_territoire: "france_1559"
    },
    {
      id: "charles-9",
      nom: "Charles IX",
      surnom: "",
      dynastie: "valois",
      naissance: 1550, mort: 1574,
      debut_regne: 1560, fin_reign: 1574,
      fin_regne: 1574,
      epouse: "Élisabeth d'Autriche",
      lieu_naissance: "Saint-Germain-en-Laye", lieu_mort: "Vincennes",
      portrait_emoji: "👑",
      resume: "Roi sous la régence de sa mère Catherine de Médicis. Ordonne ou laisse faire le massacre de la Saint-Barthélemy (1572). Meurt rongé de remords à 23 ans.",
      faits: [
        "Massacre de la Saint-Barthélemy (24 août 1572) : 3 000 à 30 000 huguenots tués",
        "Sous l'influence de Coligny (huguenot) puis de sa mère Catherine de Médicis",
        "Aurait dit 'Tuez-les tous !' selon la légende",
        "Meurt tuberculeux à 23 ans, rongé de remords selon certaines sources"
      ],
      periodes_liees: ["guerres_religion"],
      batailles_liees: ["saint_barthelemy"],
      carte_territoire: "france_1560"
    },
    {
      id: "henri-3",
      nom: "Henri III",
      surnom: "",
      dynastie: "valois",
      naissance: 1551, mort: 1589,
      debut_regne: 1574, fin_reign: 1589,
      fin_regne: 1589,
      epouse: "Louise de Lorraine",
      lieu_naissance: "Fontainebleau", lieu_mort: "Saint-Cloud",
      portrait_emoji: "👑",
      resume: "Dernier Valois. Roi intelligent mais impuissant face à la Ligue catholique des Guises. Fait assassiner les frères Guise, puis est lui-même assassiné par un moine fanatique.",
      faits: ["Dernier roi de la lignée des Valois", "Conflit avec la Ligue catholique dirigée par les Guises", "Fait assassiner le duc de Guise et son frère (1588)", "Assassiné par le frère Jacques Clément (1589)", "Désigne Henri de Navarre (futur Henri IV) comme successeur"],
      periodes_liees: ["guerres_religion"],
      batailles_liees: [],
      carte_territoire: "france_1574"
    },
    // ── BOURBONS ──
    {
      id: "henri-4",
      nom: "Henri IV",
      surnom: "Le Grand / Vert-Galant",
      dynastie: "bourbons",
      naissance: 1553, mort: 1610,
      debut_regne: 1589, fin_reign: 1610,
      fin_regne: 1610,
      epouse: "Marguerite de Valois (div.), Marie de Médicis",
      enfants: ["Louis XIII"],
      lieu_naissance: "Pau", lieu_mort: "Paris (assassiné)",
      portrait_emoji: "⚜",
      resume: "Roi de Navarre protestant qui abjure ('Paris vaut bien une messe'), met fin aux Guerres de Religion et signe l'Édit de Nantes (1598). Réconciliateur et populaire, il sera assassiné par Ravaillac.",
      faits: [
        "Abjure le protestantisme pour devenir catholique et roi (1593)",
        "Édit de Nantes (1598) : accorde la liberté de culte aux protestants",
        "Met fin à 36 ans de Guerres de Religion",
        "Reconstruction économique : Sully son ministre",
        "Assassiné par Ravaillac le 14 mai 1610 rue de la Ferronnerie, Paris",
        "Premier roi de la maison de Bourbon",
        "Poule au pot : 'Je veux qu'il n'y ait si pauvre paysan en mon royaume qu'il n'ait tous les dimanches sa poule au pot'"
      ],
      periodes_liees: ["guerres_religion"],
      batailles_liees: ["ivry", "arques"],
      carte_territoire: "france_1589"
    },
    {
      id: "louis-13",
      nom: "Louis XIII",
      surnom: "Le Juste",
      dynastie: "bourbons",
      naissance: 1601, mort: 1643,
      debut_regne: 1610, fin_reign: 1643,
      fin_regne: 1643,
      epouse: "Anne d'Autriche",
      enfants: ["Louis XIV"],
      lieu_naissance: "Fontainebleau", lieu_mort: "Saint-Germain-en-Laye",
      portrait_emoji: "👑",
      resume: "Roi timide et mélancolique, il confie le gouvernement au cardinal de Richelieu qui brise la puissance des nobles et des protestants et engage la France dans la Guerre de Trente Ans.",
      faits: [
        "Richelieu devient Premier ministre (1624)",
        "Siège de La Rochelle (1628) : fin de l'indépendance politique des Huguenots",
        "Journée des Dupes (1630) : victoire de Richelieu sur la reine mère",
        "Entrée en guerre dans la Guerre de Trente Ans (1635)",
        "Traité de Westphalie préparé mais signé par son successeur"
      ],
      periodes_liees: ["guerre_trente_ans"],
      batailles_liees: ["la_rochelle"],
      carte_territoire: "france_1610"
    },
    {
      id: "louis-14",
      nom: "Louis XIV",
      surnom: "Le Roi-Soleil",
      dynastie: "bourbons",
      naissance: 1638, mort: 1715,
      debut_regne: 1643, fin_reign: 1715,
      fin_regne: 1715,
      epouse: "Marie-Thérèse d'Autriche",
      enfants: ["Louis de France (le Grand Dauphin)"],
      lieu_naissance: "Saint-Germain-en-Laye", lieu_mort: "Versailles",
      portrait_emoji: "☀",
      resume: "Le plus long règne de l'histoire de France (72 ans). Monarque absolu par excellence ('L'État c'est moi'). Versailles, Colbert, Vauban, Molière, Racine, Corneille. Guerres incessantes qui épuisent le royaume.",
      faits: [
        "Règne personnel à partir de 1661 (mort de Mazarin)",
        "Construction de Versailles (1661-1710)",
        "Colbert : mercantilisme, manufactures royales, marine",
        "Vauban : fortifications, places fortes",
        "Révocation de l'Édit de Nantes (1685) : fuite des protestants",
        "Guerre de Hollande (1672), Guerre de la Ligue d'Augsbourg (1688), Guerre de Succession d'Espagne (1701)",
        "Siècle de Molière, Racine, Corneille, La Fontaine, Bossuet",
        "'L'État c'est moi' (attribution discutée)",
        "Meurt en laissant un trésor vide et un arrière-petit-fils de 5 ans sur le trône"
      ],
      periodes_liees: ["grand_siecle"],
      batailles_liees: ["rocroi", "fontenoy"],
      carte_territoire: "france_1643"
    },
    {
      id: "louis-15",
      nom: "Louis XV",
      surnom: "Le Bien-Aimé",
      dynastie: "bourbons",
      naissance: 1710, mort: 1774,
      debut_regne: 1715, fin_reign: 1774,
      fin_reign: 1774,
      fin_regne: 1774,
      epouse: "Marie Leszczyńska",
      enfants: ["Louis (le Dauphin, père de Louis XVI)"],
      lieu_naissance: "Versailles", lieu_mort: "Versailles",
      portrait_emoji: "👑",
      resume: "Adoré dans sa jeunesse ('Bien-Aimé'), il finit honni. Son règne voit la perte du Canada et de l'Inde lors de la Guerre de Sept Ans. La marquise de Pompadour et Madame du Barry influencent sa politique.",
      faits: [
        "Tutelle du duc de Bourbon puis de Fleury jusqu'en 1743",
        "Guerre de Succession d'Autriche (1740-1748) : victoire de Fontenoy (1745)",
        "Marquise de Pompadour : influence politique et culturelle (Encyclopédie)",
        "Guerre de Sept Ans (1756-1763) : perte du Canada et de l'Inde",
        "Expulsion des Jésuites (1764)",
        "'Après moi, le déluge'"
      ],
      periodes_liees: [],
      batailles_liees: ["fontenoy"],
      carte_territoire: "france_1715"
    },
    {
      id: "louis-16",
      nom: "Louis XVI",
      surnom: "",
      dynastie: "bourbons",
      naissance: 1754, mort: 1793,
      debut_regne: 1774, fin_reign: 1792,
      fin_regne: 1792,
      epouse: "Marie-Antoinette d'Autriche",
      enfants: ["Louis XVII (mort en prison)", "Marie-Thérèse (duchesse d'Angoulême)"],
      lieu_naissance: "Versailles", lieu_mort: "Paris (guillotiné)",
      portrait_emoji: "✝",
      resume: "Roi réformateur mais indécis. Il soutient la Révolution américaine, convoque les États généraux pour résoudre la crise financière et déclenche ainsi involontairement la Révolution. Guillotiné le 21 janvier 1793.",
      faits: [
        "Soutient la Révolution américaine (envoie La Fayette)",
        "Crise financière : convocation des États généraux (mai 1789)",
        "Prise de la Bastille (14 juillet 1789)",
        "Fuite à Varennes (21 juin 1791) : trahison aux yeux du peuple",
        "Proclamation de la République (21 septembre 1792)",
        "Jugé et guillotiné le 21 janvier 1793 place de la Révolution"
      ],
      periodes_liees: ["revolution"],
      batailles_liees: [],
      carte_territoire: "france_1774"
    },
    // ── RÉVOLUTION & EMPIRE ──
    {
      id: "napoleon-1",
      nom: "Napoléon Ier",
      surnom: "L'Empereur / Le Petit Caporal",
      dynastie: "empire1",
      naissance: 1769, mort: 1821,
      debut_regne: 1804, fin_reign: 1814,
      fin_regne: 1815,
      epouse: "Joséphine de Beauharnais (div.), Marie-Louise d'Autriche",
      enfants: ["Napoléon II (roi de Rome)"],
      lieu_naissance: "Ajaccio, Corse", lieu_mort: "Sainte-Hélène",
      portrait_emoji: "⚜",
      resume: "Général issu de la Révolution, Premier Consul puis Empereur. Il crée le Code civil, le Lycée, la Légion d'honneur, et conquiert l'Europe. Vaincu à Waterloo, exilé à Sainte-Hélène.",
      faits: [
        "Coup d'état du 18 Brumaire (9 novembre 1799)",
        "Code civil napoléonien (1804) : toujours en vigueur",
        "Création de la Légion d'honneur (1802)",
        "Création des lycées et du baccalauréat",
        "Concordat avec le pape (1801)",
        "Victoire d'Austerlitz (2 décembre 1805) : 'la plus belle bataille'",
        "Campagne de Russie (1812) : catastrophe",
        "Défaite de Waterloo (18 juin 1815)",
        "Exil à Sainte-Hélène : mort le 5 mai 1821",
        "Retour des Cendres (1840)"
      ],
      periodes_liees: ["revolution", "guerres_napoleon"],
      batailles_liees: ["austerlitz", "iena", "wagram", "waterloo", "borodino"],
      carte_territoire: "empire_napoleon"
    },
    {
      id: "louis-18",
      nom: "Louis XVIII",
      surnom: "Le Désiré",
      dynastie: "restauration",
      naissance: 1755, mort: 1824,
      debut_regne: 1814, fin_reign: 1824,
      fin_regne: 1824,
      epouse: "Marie-Joséphine de Savoie",
      lieu_naissance: "Versailles", lieu_mort: "Paris",
      portrait_emoji: "👑",
      resume: "Frère de Louis XVI, il revient sur le trône après Waterloo. Il octroie une Charte constitutionnelle et gouverne prudemment entre Ultras et Libéraux.",
      faits: ["Adopte la Charte constitutionnelle (1814)", "Fuit pendant les Cent-Jours (retour de Napoléon)", "Revient après Waterloo", "Politique du juste milieu entre royalistes extrémistes et libéraux"],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "france_1814"
    },
    {
      id: "charles-10",
      nom: "Charles X",
      surnom: "L'Ultraroyaliste",
      dynastie: "restauration",
      naissance: 1757, mort: 1836,
      debut_regne: 1824, fin_reign: 1830,
      fin_regne: 1830,
      epouse: "Marie-Thérèse de Savoie",
      lieu_naissance: "Versailles", lieu_mort: "Görz (Autriche)",
      portrait_emoji: "👑",
      resume: "Frère de Louis XVI et Louis XVIII, il mène une politique réactionnaire qui provoque les Trois Glorieuses (27-29 juillet 1830) et son abdication.",
      faits: ["Ordonnances ultra-royalistes de juillet 1830", "Révolution des Trois Glorieuses (27-29 juillet 1830)", "Abdique et s'exile en Angleterre puis en Autriche", "Dernière tentative de monarchie absolutiste"],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "france_1824"
    },
    {
      id: "louis-philippe",
      nom: "Louis-Philippe Ier",
      surnom: "Le Roi-Citoyen",
      dynastie: "juillet",
      naissance: 1773, mort: 1850,
      debut_regne: 1830, fin_reign: 1848,
      fin_regne: 1848,
      epouse: "Marie-Amélie de Bourbon-Siciles",
      lieu_naissance: "Paris", lieu_mort: "Claremont, Angleterre",
      portrait_emoji: "👑",
      resume: "Roi des Français (non 'de France'), parapluie et costume bourgeois. Son régime libéral mais censitaire est renversé par la Révolution de 1848.",
      faits: ["Roi des Français (et non de France)", "Monarchie constitutionnelle libérale", "Conquête de l'Algérie (1830)", "Caricaturé en poire par Daumier", "Renversé par la Révolution de 1848"],
      periodes_liees: [],
      batailles_liees: [],
      carte_territoire: "france_1830"
    },
    {
      id: "napoleon-3",
      nom: "Napoléon III",
      surnom: "L'Homme de Décembre",
      dynastie: "empire2",
      naissance: 1808, mort: 1873,
      debut_regne: 1852, fin_reign: 1870,
      fin_reign: 1870,
      fin_regne: 1870,
      epouse: "Eugénie de Montijo",
      lieu_naissance: "Paris", lieu_mort: "Chislehurst, Angleterre",
      portrait_emoji: "👑",
      resume: "Neveu de Napoléon Ier, élu président puis se fait Empereur. Il modernise Paris avec Haussmann, développe les chemins de fer mais capitule à Sedan en 1870.",
      faits: ["Élu président de la IIe République (1848)", "Coup d'État du 2 décembre 1851", "Proclamé Empereur le 2 décembre 1852", "Haussmann transforme Paris", "Guerre de Crimée (1854), Italie (1859)", "Capitulation à Sedan (2 septembre 1870)", "Fin du Second Empire"],
      periodes_liees: [],
      batailles_liees: ["sedan"],
      carte_territoire: "france_1852"
    },
    // ── Ve RÉPUBLIQUE ──
    {
      id: "de-gaulle",
      nom: "Charles de Gaulle",
      surnom: "Le Général",
      dynastie: "republique5",
      naissance: 1890, mort: 1970,
      debut_regne: 1958, fin_reign: 1969,
      fin_regne: 1969,
      epouse: "Yvonne Vendroux",
      enfants: ["Philippe de Gaulle", "Élisabeth de Boissieu", "Anne de Gaulle"],
      lieu_naissance: "Lille", lieu_mort: "Colombey-les-Deux-Églises",
      portrait_emoji: "🎖",
      resume: "Général de brigade à titre temporaire en juin 1940, il refuse l'armistice et lance l'Appel du 18 juin depuis Londres. Libérateur de la France, fondateur de la Ve République et architecte de la grandeur française au XXe siècle.",
      faits: [
        "Appel du 18 juin 1940 depuis la BBC à Londres",
        "Dirige la France Libre pendant toute la guerre",
        "Défilé triomphal sur les Champs-Élysées (26 août 1944)",
        "Démissionne en 1946 (IV République lui déplaît)",
        "Revient au pouvoir pendant la crise algérienne (1958)",
        "Fonde la Ve République (Constitution de 1958)",
        "Indépendance de l'Algérie (Accords d'Évian, 1962)",
        "Retrait de l'OTAN (1966)",
        "'Vive le Québec libre !' (1967)",
        "Mai 68 : 'Je ne céderai pas'",
        "Démissionne après le référendum perdu (1969)"
      ],
      periodes_liees: ["ww2_france"],
      batailles_liees: [],
      carte_territoire: "france_1958"
    },
  ],

  // ──────────────────────────────────────────────
  // BATAILLES MAJEURES
  // ──────────────────────────────────────────────
  batailles: [
    { id: "tolbiac",        nom: "Tolbiac",                  date: 496,  lieu: "Zülpich (Allemagne)", vainqueur: "Clovis", perdant: "Alamans",             importance: 5, description: "Victoire de Clovis sur les Alamans. Selon la légende, c'est lors de cette bataille que Clovis implore le Dieu chrétien de sa femme Clotilde et promet de se convertir en cas de victoire.", lat: 50.70, lng: 6.65 },
    { id: "vouille",        nom: "Vouillé",                  date: 507,  lieu: "Vouillé (Vienne)", vainqueur: "Clovis", perdant: "Wisigoths",             importance: 4, description: "Victoire décisive de Clovis sur les Wisigoths d'Alaric II. La Gaule méridionale tombe dans l'orbite franque.", lat: 46.58, lng: 0.17 },
    { id: "poitiers_732",   nom: "Poitiers (Bataille de Tours-Poitiers)", date: 732, lieu: "Entre Tours et Poitiers", vainqueur: "Charles Martel", perdant: "Omeyyades", importance: 5, description: "Victoire capitale de Charles Martel contre l'invasion arabe. Stoppe l'expansion de l'Islam en Europe occidentale.", lat: 46.70, lng: 0.33 },
    { id: "roncevaux",      nom: "Roncevaux",                date: 778,  lieu: "Col de Roncevaux (Pyrénées)", vainqueur: "Vascons", perdant: "Francs (arrière-garde)", importance: 3, description: "Défaite de l'arrière-garde de Charlemagne. Roland y trouve la mort. L'événement sera magnifié dans la Chanson de Roland.", lat: 43.01, lng: -1.32 },
    { id: "bouvines",       nom: "Bouvines",                 date: 1214, lieu: "Bouvines (Nord)", vainqueur: "Philippe Auguste", perdant: "Coalition (Empire, Angleterre, Flandre)", importance: 5, description: "Victoire décisive de Philippe Auguste qui consolide la France contre une coalition européenne. Jean sans Terre perd ses possessions françaises. Premier grand sentiment national français.", lat: 50.60, lng: 3.22 },
    { id: "crecy",          nom: "Crécy",                    date: 1346, lieu: "Crécy-en-Ponthieu (Somme)", vainqueur: "Edouard III d'Angleterre", perdant: "Philippe VI", importance: 5, description: "Désastre pour la chevalerie française. Les archers gallois et la bombarde déciment les cavaliers français. Début des grandes défaites de la Guerre de Cent Ans.", lat: 50.27, lng: 1.87 },
    { id: "poitiers",       nom: "Poitiers",                 date: 1356, lieu: "Maupertuis (Vienne)", vainqueur: "Prince Noir (Angleterre)", perdant: "Jean le Bon", importance: 5, description: "Jean le Bon est capturé par le Prince Noir. La France doit payer une rançon colossale. La crise sociale explose (Jacquerie, Etienne Marcel).", lat: 46.52, lng: 0.28 },
    { id: "azincourt",      nom: "Azincourt",                date: 1415, lieu: "Azincourt (Pas-de-Calais)", vainqueur: "Henri V d'Angleterre", perdant: "Armée française", importance: 5, description: "Désastre absolu. 6 000 Anglais épuisés battent 15 000 Français. La noblesse française est décimée. Mène au traité de Troyes (1420).", lat: 50.46, lng: 2.15 },
    { id: "orleans",        nom: "Siège d'Orléans",          date: 1429, lieu: "Orléans", vainqueur: "Jeanne d'Arc / France", perdant: "Angleterre", importance: 5, description: "Jeanne d'Arc lève le siège d'Orléans (mai 1429). Tournant de la Guerre de Cent Ans. La France reprend confiance.", lat: 47.90, lng: 1.90 },
    { id: "patay",          nom: "Patay",                    date: 1429, lieu: "Patay (Loiret)", vainqueur: "France (La Hire, Dunois)", perdant: "Angleterre", importance: 4, description: "Victoire française en rase campagne après Orléans. Les archers anglais sont pris par surprise. Permite le sacre de Charles VII à Reims.", lat: 48.04, lng: 1.69 },
    { id: "castillon",      nom: "Castillon",                date: 1453, lieu: "Castillon-la-Bataille (Gironde)", vainqueur: "France (Bureau)", perdant: "Angleterre (Talbot)", importance: 5, description: "Dernière bataille de la Guerre de Cent Ans. L'artillerie française de Jean Bureau écrase la cavalerie anglaise. Talbot est tué. La Guyenne retourne à la France.", lat: 44.85, lng: -0.05 },
    { id: "marignan",       nom: "Marignan",                 date: 1515, lieu: "Marignano (Italie)", vainqueur: "François Ier", perdant: "Suisses / Sforza", importance: 5, description: "Victoire éclatante de François Ier deux semaines après son couronnement. Il reconquiert le Milanais. 'Je suis roi, je suis vainqueur, je suis en vie !'", lat: 45.42, lng: 9.33 },
    { id: "pavie",          nom: "Pavie",                    date: 1525, lieu: "Pavie (Italie)", vainqueur: "Charles Quint", perdant: "François Ier", importance: 5, description: "Désastre total. François Ier est capturé. Il écrit à sa mère : 'Tout est perdu fors l'honneur.' Sera libéré contre le Traité de Madrid.", lat: 45.18, lng: 9.16 },
    { id: "ivry",           nom: "Ivry",                     date: 1590, lieu: "Ivry-la-Bataille (Eure)", vainqueur: "Henri IV", perdant: "Ligue catholique", importance: 4, description: "Grande victoire d'Henri IV contre la Ligue catholique. 'Ralliez-vous à mon panache blanc !' Consolide sa prise du pouvoir.", lat: 48.88, lng: 1.45 },
    { id: "la_rochelle",    nom: "Siège de La Rochelle",     date: 1628, lieu: "La Rochelle (Charente-Maritime)", vainqueur: "Richelieu / Louis XIII", perdant: "Huguenots", importance: 4, description: "Richelieu construit une digue pour bloquer le port. Capitulation de la ville protestante après 15 mois de siège. Fin de l'État dans l'État huguenot.", lat: 46.16, lng: -1.15 },
    { id: "rocroi",         nom: "Rocroi",                   date: 1643, lieu: "Rocroi (Ardennes)", vainqueur: "Condé (France)", perdant: "Espagne", importance: 5, description: "Le Grand Condé à 21 ans remporte une victoire éclatante sur la Tercio espagnole réputée invincible. Début de la supériorité militaire française en Europe.", lat: 49.92, lng: 4.52 },
    { id: "fontenoy",       nom: "Fontenoy",                 date: 1745, lieu: "Fontenoy (Belgique)", vainqueur: "Maurice de Saxe / France", perdant: "Anglo-Hollandais-Autrichiens", importance: 4, description: "Victoire de Louis XV et du maréchal de Saxe. 'Messieurs les Anglais, tirez les premiers !' — citation probablement apocryphe.", lat: 50.53, lng: 3.47 },
    { id: "austerlitz",     nom: "Austerlitz",               date: 1805, lieu: "Austerlitz (Rep. Tchèque)", vainqueur: "Napoléon Ier", perdant: "Russie / Autriche", importance: 5, description: "La plus grande victoire de Napoléon. Le 2 décembre, il bat les empereurs d'Autriche et de Russie. 'Soldats, je suis content de vous !'", lat: 49.14, lng: 16.77 },
    { id: "iena",           nom: "Iéna-Auerstaedt",          date: 1806, lieu: "Iéna (Allemagne)", vainqueur: "Napoléon / Davout", perdant: "Prusse", importance: 4, description: "Double victoire : Napoléon à Iéna, Davout à Auerstaedt. La Prusse s'effondre en une semaine. Napoléon entre dans Berlin.", lat: 50.93, lng: 11.59 },
    { id: "borodino",       nom: "Borodino (La Moskova)",    date: 1812, lieu: "Borodino (Russie)", vainqueur: "Indécis / France (tactique)", perdant: "Russie", importance: 5, description: "La bataille la plus sanglante des guerres napoléoniennes. 75 000 morts en un jour. Napoléon prend Moscou mais ne peut l'occuper.", lat: 55.52, lng: 35.83 },
    { id: "waterloo",       nom: "Waterloo",                 date: 1815, lieu: "Waterloo (Belgique)", vainqueur: "Wellington / Blücher", perdant: "Napoléon Ier", importance: 5, description: "La défaite finale. Wellington résiste toute la journée, Blücher arrive en renfort. Napoléon abdique pour la seconde fois. 'La Belle Alliance'.", lat: 50.68, lng: 4.41 },
    { id: "sedan",          nom: "Sedan",                    date: 1870, lieu: "Sedan (Ardennes)", vainqueur: "Prusse / Bismarck", perdant: "Napoléon III", importance: 5, description: "Capitulation de Napoléon III et de 100 000 soldats. Fin du Second Empire. Proclamation de la IIIe République à Paris. Début du siège de Paris.", lat: 49.70, lng: 4.94 },
    { id: "verdun",         nom: "Verdun",                   date: 1916, lieu: "Verdun (Meuse)", vainqueur: "France (Pétain)", perdant: "Allemagne", importance: 5, description: "La bataille la plus symbolique de la Grande Guerre. 300 000 morts en 10 mois. 'Ils ne passeront pas !' La victoire fait la gloire de Pétain.", lat: 49.16, lng: 5.39 },
    { id: "marne_1914",     nom: "La Marne",                 date: 1914, lieu: "Marne (Île-de-France)", vainqueur: "France / Alliés (Joffre)", perdant: "Allemagne", importance: 5, description: "Contre-offensive française qui stoppe l'avance allemande. Les 'taxis de la Marne' acheminent des renforts. Sauve Paris et la France.", lat: 48.87, lng: 3.53 },
  ],

  // ──────────────────────────────────────────────
  // GRANDES PÉRIODES / CONFLITS
  // ──────────────────────────────────────────────
  periodes: [
    {
      id: "empire_carolingien",
      titre: "L'Empire de Charlemagne",
      debut: 768, fin: 843,
      couleur: "#4A6741",
      type: "apogee",
      resume: "Charlemagne unifie l'Europe occidentale sous un seul empire chrétien et crée les bases de la civilisation européenne.",
      chapitres: [
        { titre: "La montée des Carolingiens", annee: 751, texte: "Pépin le Bref dépose le dernier Mérovingien avec la bénédiction papale et fonde la dynastie carolingienne." },
        { titre: "Les conquêtes de Charlemagne", annee: 768, texte: "En 46 ans de règne, Charlemagne mène 53 campagnes militaires. Saxons, Lombards, Avars, Espagnols — l'empire s'étend de l'Atlantique à l'Elbe." },
        { titre: "Noël 800 : l'Empire renaît", annee: 800, texte: "Le 25 décembre 800, le pape Léon III couronne Charlemagne Empereur d'Occident. L'Empire romain renaît en Occident après 324 ans d'absence." },
        { titre: "La renaissance carolingienne", annee: 790, texte: "L'École palatine, Alcuin, la réforme de l'écriture (minuscule carolingienne), les scriptoria — Charlemagne relance la culture dans un monde plongé dans l'obscurantisme." },
        { titre: "Le partage de Verdun", annee: 843, texte: "Les trois fils de Louis le Pieux se disputent l'empire. Le traité de Verdun (843) divise l'empire en trois : Francia Orientalis (Allemagne), Francia Occidentalis (France), et la Lotharingie." }
      ],
      personnages_cles: ["charlemagne", "pepin-bref", "louis-pieux"],
      carte_id: "empire_charlemagne",
      belligerants: []
    },
    {
      id: "guerre_cent_ans",
      titre: "La Guerre de Cent Ans",
      debut: 1337, fin: 1453,
      couleur: "#8B1A1A",
      type: "conflit",
      resume: "116 ans de guerre franco-anglaise pour la couronne de France. De Crécy à Castillon, en passant par Jeanne d'Arc, la France renaît de ses cendres.",
      chapitres: [
        { titre: "Les origines : une question de succession", annee: 1328, texte: "La mort de Charles IV sans héritier mâle pose la question : Édouard III d'Angleterre (petit-fils de Philippe le Bel par sa mère) peut-il prétendre à la couronne ? La loi salique l'en empêche. Philippe VI de Valois monte sur le trône. Édouard refuse." },
        { titre: "Les grandes défaites (1337-1380)", annee: 1346, texte: "Crécy (1346), Poitiers (1356), la capture de Jean le Bon... La chevalerie française, superbe mais inefficace face aux archers anglais, accumule les désastres. La Peste Noire emporte un tiers de la population." },
        { titre: "L'apogée de la menace anglaise", annee: 1415, texte: "Azincourt (1415) : catastrophe. Le traité de Troyes (1420) donne la France à Henri V d'Angleterre. Le roi Charles VII, surnommé le 'roi de Bourges', n'est reconnu que dans le centre de la France." },
        { titre: "Jeanne d'Arc, l'espoir de France", annee: 1429, texte: "Jeanne d'Arc, paysanne de 17 ans de Domrémy, entend des voix. Elle convainc Charles VII, lève le siège d'Orléans (mai 1429) et fait sacrer le roi à Reims. Capturée par les Bourguignons, vendue aux Anglais, brûlée à Rouen en 1431." },
        { titre: "La reconquête et la victoire", annee: 1450, texte: "Charles VII, armé d'une vraie armée et d'une artillerie moderne (les frères Bureau), reconquiert méthodiquement. Formigny (1450) libère la Normandie. Castillon (1453) libère la Guyenne. Seul Calais reste anglais." }
      ],
      personnages_cles: ["philippe-6", "jean-2", "charles-5", "charles-6", "charles-7"],
      personnages_secondaires: ["jeanne-arc", "du-guesclin", "prince-noir", "henri-5"],
      carte_id: "guerre_cent_ans",
      belligerants: ["France", "Angleterre", "Bourgogne (alliée des Anglais)"]
    },
    {
      id: "guerres_religion",
      titre: "Les Guerres de Religion",
      debut: 1562, fin: 1598,
      couleur: "#7A3A5A",
      type: "conflit",
      resume: "36 ans de guerre civile entre catholiques et protestants (Huguenots). 8 guerres, des massacres, des régicides, jusqu'à l'Édit de Nantes.",
      chapitres: [
        { titre: "La Réforme s'installe en France", annee: 1517, texte: "Calvin s'installe à Genève (1536). Le calvinisme gagne une partie de la noblesse française — les Huguenots. Sous Henri II, les persécutions commencent." },
        { titre: "Le massacre de Wassy déclenche la guerre", annee: 1562, texte: "Le 1er mars 1562, le duc de Guise fait massacrer une assemblée de protestants à Wassy. C'est le début de la première guerre de Religion." },
        { titre: "La Saint-Barthélemy", annee: 1572, texte: "Dans la nuit du 23 au 24 août 1572, Catherine de Médicis ordonne l'assassinat des chefs protestants réunis à Paris pour le mariage de Henri de Navarre. Le massacre s'étend à toute la France : entre 3 000 et 30 000 victimes." },
        { titre: "La Ligue catholique et Henri III", annee: 1576, texte: "La Sainte Ligue, dirigée par le duc de Guise, veut exclure tout protestant du trône. Henri III, coincé, fait assassiner les Guises (1588), puis est lui-même assassiné par un moine." },
        { titre: "Henri IV et l'Édit de Nantes", annee: 1598, texte: "Henri de Navarre abjure le protestantisme ('Paris vaut bien une messe') et est sacré Henri IV. En 1598, l'Édit de Nantes accorde aux protestants la liberté de culte, des places de sûreté. La paix civile est enfin rétablie." }
      ],
      personnages_cles: ["charles-9", "henri-3", "henri-4"],
      personnages_secondaires: ["catherine-medicis", "coligny", "guise", "coligny"],
      carte_id: "guerres_religion",
      belligerants: ["Catholiques (Ligue)", "Protestants (Huguenots)"]
    },
    {
      id: "guerre_trente_ans",
      titre: "La Guerre de Trente Ans",
      debut: 1618, fin: 1648,
      couleur: "#3A5A6B",
      type: "conflit",
      resume: "Le grand conflit européen du XVIIe siècle. La France de Richelieu et Mazarin entre dans la guerre et sort de Westphalie en grande puissance.",
      chapitres: [
        { titre: "Les origines religieuses en Empire", annee: 1618, texte: "La 'défenestration de Prague' (1618) lance la guerre entre princes protestants et Habsbourg catholiques en Allemagne. La France observe." },
        { titre: "La stratégie de Richelieu", annee: 1624, texte: "Richelieu comprend que les Habsbourg (Autriche + Espagne) encerclent la France. Il finance les ennemis protestants des Habsbourg (Suède, princes allemands) sans entrer en guerre." },
        { titre: "L'entrée en guerre de la France", annee: 1635, texte: "La France entre officiellement en guerre en 1635 contre l'Espagne. Rocroi (1643) marque le premier grand succès français. Mais la guerre dure encore 13 ans." },
        { titre: "Les traités de Westphalie", annee: 1648, texte: "Les traités de Westphalie (1648) et des Pyrénées (1659) consacrent la France grande puissance. Alsace-Moselle revient à la France. L'hégémonie espagnole en Europe est brisée. Le système d'États souverains est fondé." }
      ],
      personnages_cles: ["louis-13"],
      personnages_secondaires: ["richelieu", "mazarin", "conde", "turenne"],
      carte_id: "guerre_trente_ans",
      belligerants: ["France", "Suède", "Provinces-Unies", "Habsbourg (Autriche)", "Espagne", "Saint-Empire"]
    },
    {
      id: "revolution",
      titre: "La Révolution française",
      debut: 1789, fin: 1799,
      couleur: "#3A6B5A",
      type: "rupture",
      resume: "La rupture la plus radicale de l'histoire de France. En 10 ans, la France passe de la monarchie absolue à la République, traverse la Terreur et débouche sur Napoléon.",
      chapitres: [
        { titre: "La crise de l'Ancien Régime", annee: 1788, texte: "La France est en faillite. Louis XVI convoque les États généraux (mai 1789) pour lever de nouveaux impôts. Le Tiers État (97% de la population) prend conscience de son pouvoir." },
        { titre: "La Révolution éclate", annee: 1789, texte: "Serment du Jeu de Paume (20 juin). Prise de la Bastille (14 juillet). Nuit du 4 août : abolition des privilèges. Déclaration des Droits de l'Homme. La révolution est libérale et modérée." },
        { titre: "La Monarchie constitutionnelle", annee: 1791, texte: "La Constitution de 1791 crée une monarchie constitutionnelle. Mais la fuite de Louis XVI à Varennes (juin 1791) détruit sa crédibilité. La guerre contre l'Europe coalisée commence (1792)." },
        { titre: "La Terreur", annee: 1793, texte: "Exécution de Louis XVI (21 janvier 1793). La Convention montagnarde et le Comité de Salut Public gouvernent. Robespierre instaure la Terreur : 40 000 morts. Lui-même guillotiné lors de Thermidor (juillet 1794)." },
        { titre: "Du Directoire au Consulat", annee: 1795, texte: "Le Directoire (1795-1799) est instable et corrompu. Le général Bonaparte, auréolé de ses victoires en Italie, réalise le coup d'État du 18 Brumaire (9 novembre 1799). La Révolution est terminée, l'épopée napoléonienne commence." }
      ],
      personnages_cles: ["louis-16"],
      personnages_secondaires: ["robespierre", "danton", "marat", "marie-antoinette", "napoleon-1"],
      carte_id: "revolution",
      belligerants: []
    },
    {
      id: "guerres_napoleon",
      titre: "Les Guerres napoléoniennes",
      debut: 1803, fin: 1815,
      couleur: "#5A3A6B",
      type: "conflit",
      resume: "D'Austerlitz à Waterloo, Napoléon réécrit la carte de l'Europe. 12 ans de guerres quasi-ininterrompues, 3 millions de morts français, et la gloire impérissable de la Grande Armée.",
      chapitres: [
        { titre: "La Grande Armée se forme", annee: 1804, texte: "Napoléon se sacre Empereur le 2 décembre 1804 en présence du pape Pie VII. La Grande Armée, campée à Boulogne pour envahir l'Angleterre, est la meilleure armée du monde." },
        { titre: "Austerlitz : le soleil de la gloire", annee: 1805, texte: "Le 2 décembre 1805, un an jour pour jour après son sacre, Napoléon remporte Austerlitz. Il bat simultanément l'Autriche et la Russie. L'Empire français domine l'Europe." },
        { titre: "L'apogée et le Blocus", annee: 1807, texte: "Après Iéna (1806) et Friedland (1807), la Prusse et la Russie s'inclinent. Tilsit : Napoléon maître de l'Europe. Le Blocus continental tente d'asphyxier l'Angleterre mais ruine l'économie européenne." },
        { titre: "Le tournant : Espagne et Russie", annee: 1812, texte: "La guerilla espagnole (depuis 1808) saigne l'armée française. La campagne de Russie (1812) est catastrophique : 600 000 hommes entrent, 100 000 reviennent. L'étoile de Napoléon pâlit." },
        { titre: "La chute et les Cent-Jours", annee: 1814, texte: "Coalition de toute l'Europe. Napoléon abdique à Fontainebleau (1814). Les Bourbons reviennent. Mais le 1er mars 1815, Napoléon débarque à Golfe-Juan. Les Cent-Jours. Waterloo (18 juin 1815). Exil définitif à Sainte-Hélène." }
      ],
      personnages_cles: ["napoleon-1"],
      personnages_secondaires: ["josephine", "davout", "ney", "murat", "soult", "talleyrand"],
      carte_id: "empire_napoleon",
      belligerants: ["France (Empire)", "Angleterre", "Autriche", "Russie", "Prusse", "Espagne"]
    },
  ],

  // ──────────────────────────────────────────────
  // PERSONNAGES SECONDAIRES
  // ──────────────────────────────────────────────
  personnages: [
    { id: "jeanne-arc", nom: "Jeanne d'Arc", dates: "1412-1431", role: "Héroïne nationale", epoque: "guerre_cent_ans", portrait_emoji: "⚔", resume: "Paysanne lorraine de 17 ans qui entend des voix divines lui ordonnant de bouter les Anglais hors de France. Elle lève le siège d'Orléans, fait sacrer Charles VII à Reims. Capturée, jugée pour hérésie, brûlée vive à Rouen. Canonisée en 1920.", faits: ["Lève le siège d'Orléans (mai 1429)", "Fait sacrer Charles VII à Reims (juillet 1429)", "Capturée par les Bourguignons à Compiègne (1430)", "Jugée et brûlée à Rouen (30 mai 1431)", "Réhabilitée en 1456", "Canonisée le 16 mai 1920 par Benoît XV"] },
    { id: "du-guesclin", nom: "Bertrand du Guesclin", dates: "1320-1380", role: "Connétable de France", epoque: "guerre_cent_ans", portrait_emoji: "⚔", resume: "Connétable de France sous Charles V. Breton de petite noblesse, il révolutionne la tactique militaire : éviter les batailles rangées, harceler l'ennemi, reprendre les places fortes une à une. Reconquiert la majeure partie des territoires perdus.", faits: ["Vainqueur à Cocherel (1364)", "Connétable de France (1370)", "Reconquiert l'essentiel des territoires perdus à Brétigny", "Meurt au siège de Châteauneuf-de-Randon (1380)"] },
    { id: "richelieu", nom: "Cardinal de Richelieu", dates: "1585-1642", role: "Premier ministre de Louis XIII", epoque: "guerre_trente_ans", portrait_emoji: "✝", resume: "Armand Jean du Plessis, cardinal-duc de Richelieu, Premier ministre de Louis XIII de 1624 à sa mort. Il brise la puissance des huguenots, soumet les grands nobles, centralise le pouvoir royal et engage la France dans la Guerre de Trente Ans.", faits: ["Siège de La Rochelle (1628) : fin de l'État huguenot", "Journée des Dupes (1630) : triomphe sur la reine mère", "Entrée en guerre de Trente Ans (1635)", "Fondation de l'Académie française (1635)", "Crée les intendants de justice, police et finances"] },
    { id: "mazarin", nom: "Cardinal Mazarin", dates: "1602-1661", role: "Premier ministre (régence d'Anne d'Autriche)", epoque: "grand_siecle", portrait_emoji: "✝", resume: "Successeur de Richelieu, il guide la France pendant la minorité de Louis XIV. Conclut les traités de Westphalie (1648) et des Pyrénées (1659). Surmonte la Fronde. Forme Louis XIV à la politique.", faits: ["Traités de Westphalie (1648)", "Survit à la Fronde (1648-1653)", "Traité des Pyrénées (1659) : paix avec l'Espagne", "Mariage de Louis XIV avec Marie-Thérèse d'Autriche", "Meurt en laissant une fortune colossale"] },
    { id: "colbert", nom: "Jean-Baptiste Colbert", dates: "1619-1683", role: "Ministre des finances de Louis XIV", epoque: "grand_siecle", portrait_emoji: "📜", resume: "Ministre des Finances et de la Marine de Louis XIV. Père du colbertisme (mercantilisme d'État). Crée les manufactures royales, développe la flotte, fonde les grandes compagnies de commerce.", faits: ["Réforme fiscale et assainissement des finances", "Crée les manufactures royales (Gobelins, Sèvres)", "Développe la marine de guerre", "Fonde la Compagnie des Indes", "Creuse le Canal du Midi", "Patron des arts et des sciences"] },
    { id: "vauban", nom: "Sébastien Le Prestre de Vauban", dates: "1633-1707", role: "Ingénieur militaire de Louis XIV", epoque: "grand_siecle", portrait_emoji: "🏰", resume: "Commissaire général des fortifications, il transforme la France en une forteresse. Il conçoit ou améliore 300 places fortes, invente le système de siège scientifique et est l'un des rares à oser dire la vérité à Louis XIV.", faits: ["Construit ou améliore 300 places fortes", "Invente la fortification bastionnée moderne", "Prend 53 places de vive force", "Rédige la 'Dîme royale' (1707) critiquant les inégalités fiscales", "Disgrâcié pour ses idées sociales"] },
    { id: "robespierre", nom: "Maximilien Robespierre", dates: "1758-1794", role: "Leader de la Terreur", epoque: "revolution", portrait_emoji: "🗡", resume: "Avocat d'Arras, député aux États généraux, chef du Comité de Salut Public. 'L'Incorruptible'. Il instaure la Terreur au nom de la vertu républicaine. Guillotiné lors de Thermidor après avoir lui-même envoyé des milliers à l'échafaud.", faits: ["Élu aux États généraux (1789)", "Chef de facto du Comité de Salut Public (1793)", "Fait guillotiner Danton et Desmoulins (1794)", "Fête de l'Être Suprême (juin 1794)", "Renversé lors du 9 Thermidor (27 juillet 1794)", "Guillotiné le 28 juillet 1794"] },
    { id: "napoleon-1-secondaire", nom: "Napoléon Bonaparte", dates: "1769-1821", role: "Général, Consul, Empereur", epoque: "guerres_napoleon", portrait_emoji: "⚜", resume: "Voir fiche roi.", faits: [] },
    { id: "talleyrand", nom: "Charles-Maurice de Talleyrand", dates: "1754-1838", role: "Diplomate", epoque: "revolution", portrait_emoji: "📜", resume: "Évêque, révolutionnaire, ministre de Napoléon, puis des Bourbons. 'Il a trahi tous les régimes, et tous lui ont confié leurs secrets.' Représente la France au Congrès de Vienne (1815) avec un talent exceptionnel.", faits: ["Présente la Déclaration des droits (1789)", "Ministre des Relations extérieures de Napoléon", "Représente la France au Congrès de Vienne (1815)", "'Ce qui est excessif est insignifiant'"] },
    { id: "lafayette", nom: "Marquis de La Fayette", dates: "1757-1834", role: "Général, révolutionnaire", epoque: "revolution", portrait_emoji: "⚔", resume: "Héros de la Révolution américaine, il rentre en France auréolé de gloire. Commande la Garde nationale en 1789. Symbole de la liberté des deux côtés de l'Atlantique.", faits: ["Part en Amérique soutenir la Révolution (1777)", "Ami de Washington et de Jefferson", "Commande la Garde nationale (1789)", "Fuit en 1792, revient sous Napoléon", "'La France et l'Amérique, c'est la même cause'"] },
    { id: "napoleon-3-secondaire", nom: "Napoléon III", dates: "1808-1873", role: "Président puis Empereur", epoque: "second_empire", portrait_emoji: "👑", resume: "Voir fiche roi.", faits: [] },
    { id: "de-gaulle-secondaire", nom: "Charles de Gaulle", dates: "1890-1970", role: "Général, Président", epoque: "republique5", portrait_emoji: "🎖", resume: "Voir fiche chef d'État.", faits: [] },
    { id: "poincare", nom: "Raymond Poincaré", dates: "1860-1934", role: "Président de la République (1913-1920)", epoque: "republique3", portrait_emoji: "📜", resume: "Président pendant la Grande Guerre. Symbole de la résistance nationale et de l'union sacrée.", faits: ["Président pendant la Première Guerre mondiale", "Politique de 'Bloc national'", "Stabilise le franc (1926-1928)"] },
  ],

  // ──────────────────────────────────────────────
  // ÉVÉNEMENTS CULTURELS & MARQUANTS
  // ──────────────────────────────────────────────
  evenements: [
    { id: "bapteme-clovis",       date: 498,  titre: "Baptême de Clovis",                type: "religion",  description: "Clovis est baptisé par saint Remi à Reims. La France devient la 'fille aînée de l'Église'." },
    { id: "couronnement-charlmg", date: 800,  titre: "Couronnement de Charlemagne",       type: "politique", description: "Le pape Léon III couronne Charlemagne Empereur d'Occident à Rome le 25 décembre 800." },
    { id: "traite-verdun",        date: 843,  titre: "Traité de Verdun",                  type: "politique", description: "Division de l'Empire carolingien en trois royaumes — ancêtres de la France, l'Allemagne et la Lotharingie." },
    { id: "capetiens-fondation",  date: 987,  titre: "Élection d'Hugues Capet",           type: "politique", description: "Hugues Capet est élu roi des Francs. Début de la plus longue dynastie royale de l'histoire française." },
    { id: "croisade-1",           date: 1096, titre: "Première Croisade",                 type: "religion",  description: "Pierre l'Ermite et Godefroy de Bouillon partent depuis la France pour Jérusalem." },
    { id: "magna-carta",          date: 1215, titre: "Quatrième Concile du Latran",       type: "religion",  description: "Innocent III impose de nouvelles règles à l'Église. La France et ses rois jouent un rôle central." },
    { id: "sorbonne",             date: 1257, titre: "Fondation de la Sorbonne",          type: "culture",   description: "Robert de Sorbon fonde le collège de théologie à Paris qui deviendra la Sorbonne." },
    { id: "peste-noire",          date: 1347, titre: "La Peste Noire",                    type: "catastrophe", description: "La grande peste bubonique tue un tiers à la moitié de la population européenne entre 1347 et 1352." },
    { id: "edict-nantes",         date: 1598, titre: "Édit de Nantes",                    type: "religion",  description: "Henri IV accorde la liberté de culte aux protestants. Fin des guerres de Religion après 36 ans." },
    { id: "versailles-inaug",     date: 1682, titre: "Louis XIV s'installe à Versailles", type: "culture",   description: "La Cour s'installe définitivement à Versailles. Le château devient le centre du monde." },
    { id: "edict-nantes-revoc",   date: 1685, titre: "Révocation de l'Édit de Nantes",   type: "religion",  description: "Louis XIV révoque l'Édit de Nantes. 200 000 protestants (artisans, marchands, officiers) fuient la France." },
    { id: "bastille",             date: 1789, titre: "Prise de la Bastille",              type: "politique", description: "Le 14 juillet 1789, la foule parisienne prend la Bastille. Symbole de la fin de l'Ancien Régime." },
    { id: "declaration-droits",   date: 1789, titre: "Déclaration des Droits de l'Homme",type: "politique", description: "'Les hommes naissent et demeurent libres et égaux en droits.' Un des textes fondateurs de la démocratie moderne." },
    { id: "guillotine-roi",       date: 1793, titre: "Exécution de Louis XVI",            type: "politique", description: "Le 21 janvier 1793, Louis XVI est guillotiné place de la Révolution (aujourd'hui Concordia). La monarchie est morte." },
    { id: "code-civil",           date: 1804, titre: "Code civil napoléonien",            type: "droit",     description: "Napoléon codifie le droit français en un texte cohérent. Toujours en vigueur dans ses grandes lignes." },
    { id: "sacre-napoleon",       date: 1804, titre: "Sacre de Napoléon",                 type: "politique", description: "Napoléon se sacre lui-même Empereur le 2 décembre 1804 à Notre-Dame, en présence du pape." },
    { id: "retour-cendres",       date: 1840, titre: "Retour des Cendres",                type: "culture",   description: "Les cendres de Napoléon rentrent à Paris. Enterré aux Invalides. La légende napoléonienne est fondée." },
    { id: "commune",              date: 1871, titre: "La Commune de Paris",               type: "politique", description: "Paris insurgé contre le gouvernement de Versailles. 72 jours de commune révolutionnaire. 30 000 morts lors de la 'Semaine sanglante'." },
    { id: "dreyfus",              date: 1894, titre: "Affaire Dreyfus",                   type: "politique", description: "Alfred Dreyfus, officier juif, est accusé à tort d'espionnage. L'affaire divise la France. Zola publie 'J'accuse'." },
    { id: "loi-1905",             date: 1905, titre: "Loi de séparation Église/État",     type: "droit",     description: "La loi du 9 décembre 1905 sépare l'Église et l'État. La laïcité devient un principe fondamental de la République." },
    { id: "armistice-1918",       date: 1918, titre: "Armistice du 11 novembre",          type: "politique", description: "La Grande Guerre s'achève. 1 400 000 soldats français morts. La France victorieuse mais saignée." },
    { id: "appel-18-juin",        date: 1940, titre: "Appel du 18 juin",                  type: "politique", description: "De Gaulle depuis la BBC : 'La France a perdu une bataille ! Mais la France n'a pas perdu la guerre !' La Résistance commence." },
    { id: "liberation",           date: 1944, titre: "Libération de Paris",               type: "politique", description: "Le 25 août 1944, Paris est libérée. De Gaulle défile sur les Champs-Élysées le 26 août." },
    { id: "algerie-ind",          date: 1962, titre: "Indépendance de l'Algérie",         type: "politique", description: "Les accords d'Évian (18 mars 1962) mettent fin à la guerre d'Algérie. 132 ans de présence française." },
    { id: "mai-68",               date: 1968, titre: "Mai 68",                            type: "social",    description: "Soulèvement étudiant puis grève générale. 'Il est interdit d'interdire.' De Gaulle tient mais démissionne un an plus tard." },
  ],

  // ──────────────────────────────────────────────
  // TERRITOIRES (pour les cartes)
  // ──────────────────────────────────────────────
  territoires: [
    { id: "francs_481",           annee: 481,  description: "Royaume franc de Clovis, essentiellement entre la Loire et le Rhin" },
    { id: "empire_charlemagne",   annee: 814,  description: "Empire carolingien à son apogée : de l'Espagne du Nord à l'Elbe, de la mer du Nord à Rome" },
    { id: "francie_occidentale",  annee: 843,  description: "Francia Occidentalis après le traité de Verdun — ancêtre direct de la France" },
    { id: "france_987",           annee: 987,  description: "Royaume de France à l'avènement d'Hugues Capet. Domaine royal = Île-de-France uniquement" },
    { id: "france_1180",          annee: 1180, description: "France au début de Philippe Auguste — encore morcelée en grands fiefs" },
    { id: "france_1328",          annee: 1328, description: "France des Capétiens directs à son apogée avant la Guerre de Cent Ans" },
    { id: "france_1429",          annee: 1429, description: "France pendant la Guerre de Cent Ans — zones d'occupation anglaise et bourguignonne" },
    { id: "france_1453",          annee: 1453, description: "France après la victoire de la Guerre de Cent Ans — seul Calais manque" },
    { id: "france_1515",          annee: 1515, description: "France de François Ier au début des guerres d'Italie" },
    { id: "france_1598",          annee: 1598, description: "France d'Henri IV après les guerres de Religion — territoires protestants" },
    { id: "france_1643",          annee: 1643, description: "France de Louis XIV — début du Grand Siècle" },
    { id: "empire_napoleon",      annee: 1811, description: "Empire napoléonien à son apogée — de l'Espagne à la Pologne" },
    { id: "france_1814",          annee: 1814, description: "France de la Restauration — frontières de 1792" },
    { id: "france_1870",          annee: 1870, description: "France du Second Empire — perd l'Alsace-Lorraine après Sedan" },
    { id: "france_1918",          annee: 1918, description: "France de la victoire — récupère l'Alsace-Lorraine" },
    { id: "france_1958",          annee: 1958, description: "France métropolitaine de la Ve République" },
  ],

  // ──────────────────────────────────────────────
  // FONCTIONS UTILITAIRES
  // ──────────────────────────────────────────────
  utils: {
    getRoiById: function(id) {
      return HISTORIA.rois.find(r => r.id === id);
    },
    getRoisByDynastie: function(dynastieId) {
      return HISTORIA.rois.filter(r => r.dynastie === dynastieId);
    },
    getBatailleById: function(id) {
      return HISTORIA.batailles.find(b => b.id === id);
    },
    getPeriodeById: function(id) {
      return HISTORIA.periodes.find(p => p.id === id);
    },
    getPersonnageById: function(id) {
      return HISTORIA.personnages.find(p => p.id === id);
    },
    getRoisParAnnee: function(annee) {
      return HISTORIA.rois.filter(r => r.debut_regne <= annee && r.fin_regne >= annee);
    },
    getDynastieParAnnee: function(annee) {
      return HISTORIA.dynasties.find(d => d.debut <= annee && d.fin >= annee);
    },
    getEvenementsParPeriode: function(debut, fin) {
      return HISTORIA.evenements.filter(e => e.date >= debut && e.date <= fin);
    },
    getBataillesParPeriode: function(debut, fin) {
      return HISTORIA.batailles.filter(b => b.date >= debut && b.date <= fin);
    },
    getTerritoireParAnnee: function(annee) {
      const territoires = HISTORIA.territoires.filter(t => t.annee <= annee);
      return territoires[territoires.length - 1];
    }
  }
};

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HISTORIA;
}
