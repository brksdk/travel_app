const getImageMap = () => {
  const modules = import.meta.glob('@/assets/cities/**/*.{jpeg,jpg,png,webp,jfif}', { eager: true });

  const imageMap = {};

  for (const [path, mod] of Object.entries(modules)) {
    const filename = path.split('/').pop().split('.').slice(0, -1).join('.').toLowerCase();
    imageMap[filename] = mod.default;
  }

  return imageMap;
};

const images = getImageMap();

const getCityImage = (cityName) => {
  const key = cityName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ''); // umlaut fix
  return images[key] || images['default'];
};

export const citiesList = [
  "Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dresden", "Leipzig", "Hannover",
  "Nuremberg", "Bremen", "Dortmund", "Essen", "Bonn", "Mannheim", "Karlsruhe", "Freiburg", "Kiel", "Rostock",
  "Mainz", "Saarbrücken", "Augsburg", "Wiesbaden", "Erfurt","Heidelberg"
];

export const citiesData = {
  Berlin: {
    background: getCityImage('Berlin'),
    carousels: [
      [
        { image: images["brandenburg3"], name: "sights.berlin.brandenburg_tor", description: "sights.berlin.brandenburg_tor_desc" },
        { image: images["brandenburg4"], name: "sights.berlin.brandenburg_tor", description: "sights.berlin.brandenburg_tor_desc" },
        { image: images["brandenburg5"], name: "sights.berlin.brandenburg_tor", description: "sights.berlin.brandenburg_tor_desc" }
      ],
      [
        { image: images["reichstag1"], name: "sights.berlin.reichstag", description: "sights.berlin.reichstag_desc" },
        { image: images["reichstag2"], name: "sights.berlin.reichstag", description: "sights.berlin.reichstag_desc" },
        { image: images["reichstag3"], name: "sights.berlin.reichstag", description: "sights.berlin.reichstag_desc" }
      ],
      [
        { image: images["fernsehturm1"], name: "sights.berlin.fernsehturm", description: "sights.berlin.fernsehturm_desc" },
        { image: images["fernsehturm2"], name: "sights.berlin.fernsehturm", description: "sights.berlin.fernsehturm_desc" },
        { image: images["fernsehturm3"], name: "sights.berlin.fernsehturm", description: "sights.berlin.fernsehturm_desc" }
      ],
      [
        { image: images["museum1"], name: "sights.berlin.museumsinsel", description: "sights.berlin.museumsinsel_desc" },
        { image: images["museum2"], name: "sights.berlin.museumsinsel", description: "sights.berlin.museumsinsel_desc" },
        { image: images["museum3"], name: "sights.berlin.museumsinsel", description: "sights.berlin.museumsinsel_desc" },
        { image: images["museum4"], name: "sights.berlin.museumsinsel", description: "sights.berlin.museumsinsel_desc" }
      ],
    ]
  },
  Munich: {
    background: getCityImage('Munich'),
    carousels: [
      [
        { image: images["marienplatz1"], name: "sights.munich.marienplatz", description: "sights.munich.marienplatz_desc" },
        { image: images["marienplatz2"], name: "sights.munich.marienplatz", description: "sights.munich.marienplatz_desc" },
        { image: images["marienplatz3"], name: "sights.munich.marienplatz", description: "sights.munich.marienplatz_desc" },
        { image: images["marienplatz4"], name: "sights.munich.marienplatz", description: "sights.munich.marienplatz_desc" }
      ],
      [
        { image: images["nymphenburg1"], name: "sights.munich.nymphenburg_schloss", description: "sights.munich.nymphenburg_schloss_desc" },
        { image: images["nymphenburg2"], name: "sights.munich.nymphenburg_schloss", description: "sights.munich.nymphenburg_schloss_desc" },
        { image: images["nymphenburg3"], name: "sights.munich.nymphenburg_schloss", description: "sights.munich.nymphenburg_schloss_desc" }
      ],
      [
        { image: images["eng1"], name: "sights.munich.englischer_garten", description: "sights.munich.englischer_garten_desc" },
        { image: images["eng2"], name: "sights.munich.englischer_garten", description: "sights.munich.englischer_garten_desc" }
      ],
      [
        { image: images["vm1"], name: "sights.munich.viktualienmarkt", description: "sights.munich.viktualienmarkt_desc" },
        { image: images["vm2"], name: "sights.munich.viktualienmarkt", description: "sights.munich.viktualienmarkt_desc" }
      ],
    ]
  },
  Hamburg: {
    background: getCityImage('Hamburg'),
    carousels: [
      [
        { image: images["elb1"], name: "sights.hamburg.elbphilharmonie", description: "sights.hamburg.elbphilharmonie_desc" },
        { image: images["elb2"], name: "sights.hamburg.elbphilharmonie", description: "sights.hamburg.elbphilharmonie_desc" },
        { image: images["elb3"], name: "sights.hamburg.elbphilharmonie", description: "sights.hamburg.elbphilharmonie_desc" }
      ],
      [
        { image: images["ss1"], name: "sights.hamburg.speicherstadt", description: "sights.hamburg.speicherstadt_desc" },
        { image: images["ss2"], name: "sights.hamburg.speicherstadt", description: "sights.hamburg.speicherstadt_desc" },
        { image: images["ss3"], name: "sights.hamburg.speicherstadt", description: "sights.hamburg.speicherstadt_desc" }
      ],
      [
        { image: images["reeperbahn1"], name: "sights.hamburg.reeperbahn", description: "sights.hamburg.reeperbahn_desc" }
      ],
      [
        { image: images["michelis1"], name: "sights.hamburg.st_michaelis_kirche", description: "sights.hamburg.st_michaelis_kirche_desc" },
        { image: images["michelis2"], name: "sights.hamburg.st_michaelis_kirche", description: "sights.hamburg.st_michaelis_kirche_desc" }
      ],
    ]
  },
  Cologne: {
    background: getCityImage('Cologne'),
    carousels: [
      [
        { image: images["kd1"], name: "sights.cologne.kolner_dom", description: "sights.cologne.kolner_dom_desc" },
        { image: images["kd2"], name: "sights.cologne.kolner_dom", description: "sights.cologne.kolner_dom_desc" },
        { image: images["kd3"], name: "sights.cologne.kolner_dom", description: "sights.cologne.kolner_dom_desc" },
        { image: images["kd4"], name: "sights.cologne.kolner_dom", description: "sights.cologne.kolner_dom_desc" }
      ],
      [
        { image: images["rheinp1"], name: "sights.cologne.rheinpromenade", description: "sights.cologne.rheinpromenade_desc" },
        { image: images["rheinp2"], name: "sights.cologne.rheinpromenade", description: "sights.cologne.rheinpromenade_desc" }
      ],
      [
        { image: images["hb1"], name: "sights.cologne.hohenzollernbrucke", description: "sights.cologne.hohenzollernbrucke_desc" },
        { image: images["hb2"], name: "sights.cologne.hohenzollernbrucke", description: "sights.cologne.hohenzollernbrucke_desc" }
      ],
      [
        { image: images["ludwig1"], name: "sights.cologne.museum_ludwig", description: "sights.cologne.museum_ludwig_desc" }
      ],
    ]
  },
  Frankfurt: {
    background: getCityImage('Frankfurt'),
    carousels: [
      [
        { image: images["romer1"], name: "sights.frankfurt.romer", description: "sights.frankfurt.romer_desc" },
        { image: images["romer2"], name: "sights.frankfurt.romer", description: "sights.frankfurt.romer_desc" },
        { image: images["romer3"], name: "sights.frankfurt.romer", description: "sights.frankfurt.romer_desc" }
      ],
      [
        { image: images["tower1"], name: "sights.frankfurt.main_tower", description: "sights.frankfurt.main_tower_desc" },
        { image: images["tower2"], name: "sights.frankfurt.main_tower", description: "sights.frankfurt.main_tower_desc" }
      ],
      [
        { image: images["pg1"], name: "sights.frankfurt.palmengarten", description: "sights.frankfurt.palmengarten_desc" },
        { image: images["pg2"], name: "sights.frankfurt.palmengarten", description: "sights.frankfurt.palmengarten_desc" }
      ],
      [
        { image: images["sm1"], name: "sights.frankfurt.stadel_museum", description: "sights.frankfurt.stadel_museum_desc" },
      ],
    ]
  },
  Stuttgart: {
    background: getCityImage('Stuttgart'),
    carousels: [
      [
        { image: images["sp1"], name: "sights.stuttgart.schlossplatz", description: "sights.stuttgart.schlossplatz_desc" },
        { image: images["sp2"], name: "sights.stuttgart.schlossplatz", description: "sights.stuttgart.schlossplatz_desc" },
        { image: images["sp3"], name: "sights.stuttgart.schlossplatz", description: "sights.stuttgart.schlossplatz_desc" }
      ],
      [
        { image: images["mercedes1"], name: "sights.stuttgart.mercedes_benz_museum", description: "sights.stuttgart.mercedes_benz_museum_desc" },
        { image: images["mercedes2"], name: "sights.stuttgart.mercedes_benz_museum", description: "sights.stuttgart.mercedes_benz_museum_desc" },
        { image: images["mercedes3"], name: "sights.stuttgart.mercedes_benz_museum", description: "sights.stuttgart.mercedes_benz_museum_desc" },
        { image: images["mercedes4"], name: "sights.stuttgart.mercedes_benz_museum", description: "sights.stuttgart.mercedes_benz_museum_desc" }
      ],
      [
        { image: images["pm1"], name: "sights.stuttgart.porsche_museum", description: "sights.stuttgart.porsche_museum_desc" },
        { image: images["pm2"], name: "sights.stuttgart.porsche_museum", description: "sights.stuttgart.porsche_museum_desc" }
      ],
      [
        { image: images["wilhelma1"], name: "sights.stuttgart.wilhelma", description: "sights.stuttgart.wilhelma_desc" },
        { image: images["wilhelma2"], name: "sights.stuttgart.wilhelma", description: "sights.stuttgart.wilhelma_desc" },
        { image: images["wilhelma3"], name: "sights.stuttgart.wilhelma", description: "sights.stuttgart.wilhelma_desc" }
      ],
    ]
  },
  Düsseldorf: {
    background: getCityImage('Düsseldorf'),
    carousels: [
      [
        { image: images["turm"], name: "sights.dusseldorf.rheinturm", description: "sights.dusseldorf.rheinturm_desc" },
        { image: images["turm2"], name: "sights.dusseldorf.rheinturm", description: "sights.dusseldorf.rheinturm_desc" }
      ],
      [
        { image: images["altst"], name: "sights.dusseldorf.altstadt", description: "sights.dusseldorf.altstadt_desc" },
        { image: images["altst2"], name: "sights.dusseldorf.altstadt", description: "sights.dusseldorf.altstadt_desc" }
      ],
      [
        { image: images["konig"], name: "sights.dusseldorf.konigsallee", description: "sights.dusseldorf.konigsallee_desc" },
        { image: images["konig2"], name: "sights.dusseldorf.konigsallee", description: "sights.dusseldorf.konigsallee_desc" },
        { image: images["konig1"], name: "sights.dusseldorf.konigsallee", description: "sights.dusseldorf.konigsallee_desc" }
      ],
      [
        { image: images["schlossturm1"], name: "sights.dusseldorf.schlossturm", description: "sights.dusseldorf.schlossturm_desc" },
        { image: images["schlossturm2"], name: "sights.dusseldorf.schlossturm", description: "sights.dusseldorf.schlossturm_desc" }
      ],
    ]
  },
  Dresden: {
    background: getCityImage('Dresden'),
    carousels: [
      [
        { image: images["fk1"], name: "sights.dresden.frauenkirche", description: "sights.dresden.frauenkirche_desc" },
        { image: images["fk2"], name: "sights.dresden.frauenkirche", description: "sights.dresden.frauenkirche_desc" },
        { image: images["fk3"], name: "sights.dresden.frauenkirche", description: "sights.dresden.frauenkirche_desc" }
      ],
      [
        { image: images["semper1"], name: "sights.dresden.semperoper", description: "sights.dresden.semperoper_desc" },
        { image: images["semper2"], name: "sights.dresden.semperoper", description: "sights.dresden.semperoper_desc" }
      ],
      [
        { image: images["zwinger1"], name: "sights.dresden.zwinger", description: "sights.dresden.zwinger_desc" },
        { image: images["zwinger2"], name: "sights.dresden.zwinger", description: "sights.dresden.zwinger_desc" }
      ],
      [
        { image: images["rschloss1"], name: "sights.dresden.residenzschloss", description: "sights.dresden.residenzschloss_desc" },
        { image: images["rschloss2"], name: "sights.dresden.residenzschloss", description: "sights.dresden.residenzschloss_desc" }
      ],
    ]
  },
  Leipzig: {
    background: getCityImage('Leipzig'),
    carousels: [
      [
        { image: images["niko1"], name: "sights.leipzig.nikolaikirche", description: "sights.leipzig.nikolaikirche_desc" },
        { image: images["niko2"], name: "sights.leipzig.nikolaikirche", description: "sights.leipzig.nikolaikirche_desc" }
      ],
      [
        { image: images["volk1"], name: "sights.leipzig.volkerschlachtdenkmal", description: "sights.leipzig.volkerschlachtdenkmal_desc" },
        { image: images["volk2"], name: "sights.leipzig.volkerschlachtdenkmal", description: "sights.leipzig.volkerschlachtdenkmal_desc" }
      ],
      [
        { image: images["gwh1"], name: "sights.leipzig.gewandhaus", description: "sights.leipzig.gewandhaus_desc" },
        { image: images["gwh2"], name: "sights.leipzig.gewandhaus", description: "sights.leipzig.gewandhaus_desc" }
      ],
      [
        { image: images["zlp1"], name: "sights.leipzig.zoo_leipzig", description: "sights.leipzig.zoo_leipzig_desc" }
      ],
    ]
  },
  Hannover: {
    background: getCityImage('Hannover'),
    carousels: [
      [
        { image: images["hanrt1"], name: "sights.hannover.neues_rathaus", description: "sights.hannover.neues_rathaus_desc" },
        { image: images["hanrt2"], name: "sights.hannover.neues_rathaus", description: "sights.hannover.neues_rathaus_desc" }
      ],
      [
        { image: images["hga1"], name: "sights.hannover.herrenhauser_garten", description: "sights.hannover.herrenhauser_garten_desc" },
        { image: images["hga2"], name: "sights.hannover.herrenhauser_garten", description: "sights.hannover.herrenhauser_garten_desc" }
      ],
      [
        { image: images["masch1"], name: "sights.hannover.maschsee", description: "sights.hannover.maschsee_desc" },
        { image: images["masch2"], name: "sights.hannover.maschsee", description: "sights.hannover.maschsee_desc" }
      ],
      [
        { image: images["sprengel"], name: "sights.hannover.sprengel_museum", description: "sights.hannover.sprengel_museum_desc" }
      ],
    ]
  },
  Nuremberg: {
    background: getCityImage('Nuremberg'),
    carousels: [
      [
        { image: images["kais1"], name: "sights.nuremberg.kaiserburg", description: "sights.nuremberg.kaiserburg_desc" },
        { image: images["kais2"], name: "sights.nuremberg.kaiserburg", description: "sights.nuremberg.kaiserburg_desc" }
      ],
      [
        { image: images["haum1"], name: "sights.nuremberg.hauptmarkt", description: "sights.nuremberg.hauptmarkt_desc" },
        { image: images["haum2"], name: "sights.nuremberg.hauptmarkt", description: "sights.nuremberg.hauptmarkt_desc" }
      ],
      [
        { image: images["docu1"], name: "sights.nuremberg.dokumentationszentrum", description: "sights.nuremberg.dokumentationszentrum_desc" },
        { image: images["docu2"], name: "sights.nuremberg.dokumentationszentrum", description: "sights.nuremberg.dokumentationszentrum_desc" }
      ],
      [
        { image: images["lorenz1"], name: "sights.nuremberg.st_lorenz_kirche", description: "sights.nuremberg.st_lorenz_kirche_desc" },
        { image: images["lorenz2"], name: "sights.nuremberg.st_lorenz_kirche", description: "sights.nuremberg.st_lorenz_kirche_desc" }
      ],
    ]
  },
  Bremen: {
    background: getCityImage('Bremen'),
    carousels: [
      [
        { image: images["musik1"], name: "sights.bremen.bremer_stadtmusikanten", description: "sights.bremen.bremer_stadtmusikanten_desc" },
        { image: images["musik2"], name: "sights.bremen.bremer_stadtmusikanten", description: "sights.bremen.bremer_stadtmusikanten_desc" }
      ],
      [
        { image: images["bremrt1"], name: "sights.bremen.rathaus", description: "sights.bremen.rathaus_desc" },
        { image: images["bremrt2"], name: "sights.bremen.rathaus", description: "sights.bremen.rathaus_desc" }
      ],
      [
        { image: images["viert1"], name: "sights.bremen.schnoorviertel", description: "sights.bremen.schnoorviertel_desc" },
        { image: images["viert2"], name: "sights.bremen.schnoorviertel", description: "sights.bremen.schnoorviertel_desc" }
      ],
      [
        { image: images["sta1"], name: "sights.bremen.rolandstatue", description: "sights.bremen.rolandstatue_desc" },
        { image: images["sta2"], name: "sights.bremen.rolandstatue", description: "sights.bremen.rolandstatue_desc" }
      ],
    ]
  },
  Dortmund: {
    background: getCityImage('Dortmund'),
    carousels: [
      [
        { image: images["dortp1"], name: "sights.dortmund.westfalenpark", description: "sights.dortmund.westfalenpark_desc" },
        { image: images["dortp2"], name: "sights.dortmund.westfalenpark", description: "sights.dortmund.westfalenpark_desc" }
      ],
      [
        { image: images["fuss1"], name: "sights.dortmund.deutsches_fussballmuseum", description: "sights.dortmund.deutsches_fussballmuseum_desc" },
        { image: images["fuss2"], name: "sights.dortmund.deutsches_fussballmuseum", description: "sights.dortmund.deutsches_fussballmuseum_desc" }
      ],
      [
        { image: images["uturm1"], name: "sights.dortmund.u_turm", description: "sights.dortmund.u_turm_desc" },
        { image: images["uturm2"], name: "sights.dortmund.u_turm", description: "sights.dortmund.u_turm_desc" }
      ],
      [
        { image: images["reino1"], name: "sights.dortmund.reinoldikirche", description: "sights.dortmund.reinoldikirche_desc" },
        { image: images["reino2"], name: "sights.dortmund.reinoldikirche", description: "sights.dortmund.reinoldikirche_desc" }
      ],
    ]
  },
  Essen: {
    background: getCityImage('Essen'),
    carousels: [
      [
        { image: images["zoll1"], name: "sights.essen.zeche_zollverein", description: "sights.essen.zeche_zollverein_desc" },
        { image: images["zoll2"], name: "sights.essen.zeche_zollverein", description: "sights.essen.zeche_zollverein_desc" }
      ],
      [
        { image: images["essp1"], name: "sights.essen.grugapark", description: "sights.essen.grugapark_desc" },
        { image: images["essp2"], name: "sights.essen.grugapark", description: "sights.essen.grugapark_desc" }
      ],
      [
        { image: images["essk1"], name: "sights.essen.museum_folkwang", description: "sights.essen.museum_folkwang_desc" },
        { image: images["essk2"], name: "sights.essen.museum_folkwang", description: "sights.essen.museum_folkwang_desc" }
      ],
      [
        { image: images["stif"], name: "sights.essen.alfried_krupp_stiftung", description: "sights.essen.alfried_krupp_stiftung_desc" }
      ],
    ]
  },
  Bonn: {
    background: getCityImage('Bonn'),
    carousels: [
      [
        { image: images["beth1"], name: "sights.bonn.beethoven_haus", description: "sights.bonn.beethoven_haus_desc" },
        { image: images["beth2"], name: "sights.bonn.beethoven_haus", description: "sights.bonn.beethoven_haus_desc" }
      ],
      [
        { image: images["zol1"], name: "sights.bonn.alter_zoll", description: "sights.bonn.alter_zoll_desc" },
        { image: images["zol2"], name: "sights.bonn.alter_zoll", description: "sights.bonn.alter_zoll_desc" }
      ],
      [
        { image: images["bonnp1"], name: "sights.bonn.botanischer_garten", description: "sights.bonn.botanischer_garten_desc" },
        { image: images["bonnp2"], name: "sights.bonn.botanischer_garten", description: "sights.bonn.botanischer_garten_desc" }
      ],
      [
        { image: images["brt1"], name: "sights.bonn.rathaus", description: "sights.bonn.rathaus_desc" },
        { image: images["brt2"], name: "sights.bonn.rathaus", description: "sights.bonn.rathaus_desc" }
      ],
    ]
  },
  Mannheim: {
    background: getCityImage('Mannheim'),
    carousels: [
      [
        { image: images["wasst1"], name: "sights.mannheim.wasserturm", description: "sights.mannheim.wasserturm_desc" },
        { image: images["wasst2"], name: "sights.mannheim.wasserturm", description: "sights.mannheim.wasserturm_desc" }
      ],
      [
        { image: images["manns1"], name: "sights.mannheim.schloss_mannheim", description: "sights.mannheim.schloss_mannheim_desc" },
        { image: images["manns2"], name: "sights.mannheim.schloss_mannheim", description: "sights.mannheim.schloss_mannheim_desc" }
      ],
      [
        { image: images["mannp1"], name: "sights.mannheim.luisenpark", description: "sights.mannheim.luisenpark_desc" },
        { image: images["mannp2"], name: "sights.mannheim.luisenpark", description: "sights.mannheim.luisenpark_desc" }
      ],
      [
        { image: images["mannk1"], name: "sights.mannheim.jesuitenkirche", description: "sights.mannheim.jesuitenkirche_desc" },
        { image: images["mannk2"], name: "sights.mannheim.jesuitenkirche", description: "sights.mannheim.jesuitenkirche_desc" }
      ],
    ]
  },
  Karlsruhe: {
    background: getCityImage('Karlsruhe'),
    carousels: [
      [
        { image: images["schkarl1"], name: "sights.karlsruhe.schloss_karlsruhe", description: "sights.karlsruhe.schloss_karlsruhe_desc" },
        { image: images["schkarl2"], name: "sights.karlsruhe.schloss_karlsruhe", description: "sights.karlsruhe.schloss_karlsruhe_desc" }
      ],
      [
        { image: images["zkm1"], name: "sights.karlsruhe.zkm", description: "sights.karlsruhe.zkm_desc" },
        { image: images["zkm2"], name: "sights.karlsruhe.zkm", description: "sights.karlsruhe.zkm_desc" }
      ],
      [
        { image: images["anlage1"], name: "sights.karlsruhe.gunther_klotz_anlage", description: "sights.karlsruhe.gunther_klotz_anlage_desc" }
      ],
      [
        { image: images["knsthalle1"], name: "sights.karlsruhe.kunsthalle", description: "sights.karlsruhe.kunsthalle_desc" }
      ],
    ]
  },
  Freiburg: {
    background: getCityImage('Freiburg'),
    carousels: [
      [
        { image: images["frmun1"], name: "sights.freiburg.freiburger_munster", description: "sights.freiburg.freiburger_munster_desc" },
        { image: images["frmun2"], name: "sights.freiburg.freiburger_munster", description: "sights.freiburg.freiburger_munster_desc" }
      ],
      [
        { image: images["freiturm1"], name: "sights.freiburg.schwabentor", description: "sights.freiburg.schwabentor_desc" },
        { image: images["freiturm2"], name: "sights.freiburg.schwabentor", description: "sights.freiburg.schwabentor_desc" }
      ],
      [
        { image: images["frmus1"], name: "sights.freiburg.augustiner_museum", description: "sights.freiburg.augustiner_museum_desc" }
      ],
      [
        { image: images["bachl1"], name: "sights.freiburg.bachle", description: "sights.freiburg.bachle_desc" },
        { image: images["bachl2"], name: "sights.freiburg.bachle", description: "sights.freiburg.bachle_desc" }
      ],
    ]
  },
  Kiel: {
    background: getCityImage('Kiel'),
    carousels: [
      [
        { image: images["forde1"], name: "sights.kiel.kieler_forde", description: "sights.kiel.kieler_forde_desc" },
        { image: images["forde2"], name: "sights.kiel.kieler_forde", description: "sights.kiel.kieler_forde_desc" }
      ],
      [
        { image: images["rathkiel1"], name: "sights.kiel.rathaus_kiel", description: "sights.kiel.rathaus_kiel_desc" },
        { image: images["rathkiel2"], name: "sights.kiel.rathaus_kiel", description: "sights.kiel.rathaus_kiel_desc" },
        { image: images["rathkiel3"], name: "sights.kiel.rathaus_kiel", description: "sights.kiel.rathaus_kiel_desc" }
      ],
      [
        { image: images["schiffm1"], name: "sights.kiel.schifffahrtsmuseum", description: "sights.kiel.schifffahrtsmuseum_desc" },
        { image: images["schiffm2"], name: "sights.kiel.schifffahrtsmuseum", description: "sights.kiel.schifffahrtsmuseum_desc" }
      ],
      [
        { image: images["schleuse"], name: "sights.kiel.holtenauer_schleuse", description: "sights.kiel.holtenauer_schleuse_desc" }
      ],
    ]
  },
  Rostock: {
    background: getCityImage('Rostock'),
    carousels: [
      [
        { image: images["rostf1"], name: "sights.rostock.warnemunder_leuchtturm", description: "sights.rostock.warnemunder_leuchtturm_desc" },
        { image: images["rostf2"], name: "sights.rostock.warnemunder_leuchtturm", description: "sights.rostock.warnemunder_leuchtturm_desc" }
      ],
      [
        { image: images["rostrt1"], name: "sights.rostock.rostocker_rathaus", description: "sights.rostock.rostocker_rathaus_desc" },
        { image: images["rostrt2"], name: "sights.rostock.rostocker_rathaus", description: "sights.rostock.rostocker_rathaus_desc" }
      ],
      [
        { image: images["rostsr1"], name: "sights.rostock.kropeliner_strasse", description: "sights.rostock.kropeliner_strasse_desc" },
        { image: images["rostsr2"], name: "sights.rostock.kropeliner_strasse", description: "sights.rostock.kropeliner_strasse_desc" }
      ],
      [
        { image: images["rostk"], name: "sights.rostock.st_marien", description: "sights.rostock.st_marien_desc" }
      ],
    ]
  },
  Mainz: {
    background: getCityImage('Mainz'),
    carousels: [
      [
        { image: images["mart1"], name: "sights.mainz.mainzer_dom", description: "sights.mainz.mainzer_dom_desc" },
        { image: images["mart2"], name: "sights.mainz.mainzer_dom", description: "sights.mainz.mainzer_dom_desc" }
      ],
      [
        { image: images["mamus1"], name: "sights.mainz.gutenberg_museum", description: "sights.mainz.gutenberg_museum_desc" },
        { image: images["mamus2"], name: "sights.mainz.gutenberg_museum", description: "sights.mainz.gutenberg_museum_desc" }
      ],
      [
        { image: images["rhpro1"], name: "sights.mainz.rheinpromenade", description: "sights.mainz.rheinpromenade_desc" },
        { image: images["rhpro2"], name: "sights.mainz.rheinpromenade", description: "sights.mainz.rheinpromenade_desc" }
      ],
      [
        { image: images["mainzt1"], name: "sights.mainz.theater_mainz", description: "sights.mainz.theater_mainz_desc" },
        { image: images["mainzt2"], name: "sights.mainz.theater_mainz", description: "sights.mainz.theater_mainz_desc" }
      ],
    ]
  },
  Saarbrücken: {
    background: getCityImage('Saarbrücken'),
    carousels: [
      [
        { image: images["saarsch1"], name: "sights.saarbrucken.saarbrucker_schloss", description: "sights.saarbrucken.saarbrucker_schloss_desc" },
        { image: images["saarsch2"], name: "sights.saarbrucken.saarbrucker_schloss", description: "sights.saarbrucken.saarbrucker_schloss_desc" }
      ],
      [
        { image: images["saark1"], name: "sights.saarbrucken.ludwigskirche", description: "sights.saarbrucken.ludwigskirche_desc" }
      ],
      [
        { image: images["saar1"], name: "sights.saarbrucken.saar", description: "sights.saarbrucken.saar_desc" },
        { image: images["saar2"], name: "sights.saarbrucken.saar", description: "sights.saarbrucken.saar_desc" }
      ],
      [
        { image: images["dfga1"], name: "sights.saarbrucken.deutsch_franzosischer_garten", description: "sights.saarbrucken.deutsch_franzosischer_garten_desc" }
      ],
    ]
  },
  Augsburg: {
    background: getCityImage('Augsburg'),
    carousels: [
      [
        { image: images["augd1"], name: "sights.augsburg.augsburger_dom", description: "sights.augsburg.augsburger_dom_desc" },
        { image: images["augd2"], name: "sights.augsburg.augsburger_dom", description: "sights.augsburg.augsburger_dom_desc" }
      ],
      [
        { image: images["fugg1"], name: "sights.augsburg.fuggerei", description: "sights.augsburg.fuggerei_desc" },
        { image: images["fugg2"], name: "sights.augsburg.fuggerei", description: "sights.augsburg.fuggerei_desc" }
      ],
      [
        { image: images["rtaug1"], name: "sights.augsburg.rathaus_augsburg", description: "sights.augsburg.rathaus_augsburg_desc" },
        { image: images["rtaug2"], name: "sights.augsburg.rathaus_augsburg", description: "sights.augsburg.rathaus_augsburg_desc" }
      ],
      [
        { image: images["augt1"], name: "sights.augsburg.perlachturm", description: "sights.augsburg.perlachturm_desc" }
      ],
    ]
  },
  Wiesbaden: {
    background: getCityImage('Wiesbaden'),
    carousels: [
      [
        { image: images["wiesh1"], name: "sights.wiesbaden.kurhaus_wiesbaden", description: "sights.wiesbaden.kurhaus_wiesbaden_desc" },
        { image: images["wiesh2"], name: "sights.wiesbaden.kurhaus_wiesbaden", description: "sights.wiesbaden.kurhaus_wiesbaden_desc" }
      ],
      [
        { image: images["nero1"], name: "sights.wiesbaden.neroberg", description: "sights.wiesbaden.neroberg_desc" },
        { image: images["nero2"], name: "sights.wiesbaden.neroberg", description: "sights.wiesbaden.neroberg_desc" }
      ],
      [
        { image: images["wiesk1"], name: "sights.wiesbaden.marktkirche", description: "sights.wiesbaden.marktkirche_desc" },
        { image: images["wiesk2"], name: "sights.wiesbaden.marktkirche", description: "sights.wiesbaden.marktkirche_desc" }
      ],
      [
        { image: images["weinb1"], name: "sights.wiesbaden.rheingau", description: "sights.wiesbaden.rheingau_desc" },
        { image: images["weinb2"], name: "sights.wiesbaden.rheingau", description: "sights.wiesbaden.rheingau_desc" }
      ],
    ]
  },
  Erfurt: {
    background: getCityImage('Erfurt'),
    carousels: [
      [
        { image: images["erfdom1"], name: "sights.erfurt.erfurter_dom", description: "sights.erfurt.erfurter_dom_desc" },
        { image: images["erfdom2"], name: "sights.erfurt.erfurter_dom", description: "sights.erfurt.erfurter_dom_desc" }
      ],
      [
        { image: images["krame1"], name: "sights.erfurt.kramerbrucke", description: "sights.erfurt.kramerbrucke_desc" },
        { image: images["krame2"], name: "sights.erfurt.kramerbrucke", description: "sights.erfurt.kramerbrucke_desc" }
      ],
      [
        { image: images["peter1"], name: "sights.erfurt.zitadelle_petersberg", description: "sights.erfurt.zitadelle_petersberg_desc" },
        { image: images["peter2"], name: "sights.erfurt.zitadelle_petersberg", description: "sights.erfurt.zitadelle_petersberg_desc" }
      ],
      [
        { image: images["egapark"], name: "sights.erfurt.egapark", description: "sights.erfurt.egapark_desc" }
      ],
    ]
  },

  Heidelberg: {
  background: getCityImage('Heidelberg'),
  carousels: [
    [
      { image: images["heidelberg_schloss1"], name: "sights.heidelberg.heidelberg_schloss", description: "sights.heidelberg.heidelberg_schloss_desc" },
      { image: images["heidelberg_schloss2"], name: "sights.heidelberg.heidelberg_schloss", description: "sights.heidelberg.heidelberg_schloss_desc" },
      { image: images["heidelberg_schloss3"], name: "sights.heidelberg.heidelberg_schloss", description: "sights.heidelberg.heidelberg_schloss_desc" }
    ],
    [
      { image: images["alte_bruecke1"], name: "sights.heidelberg.alte_bruecke", description: "sights.heidelberg.alte_bruecke_desc" },
      { image: images["alte_bruecke2"], name: "sights.heidelberg.alte_bruecke", description: "sights.heidelberg.alte_bruecke_desc" }
    ],
    [
      { image: images["philosophenweg1"], name: "sights.heidelberg.philosophenweg", description: "sights.heidelberg.philosophenweg_desc" },
      { image: images["philosophenweg2"], name: "sights.heidelberg.philosophenweg", description: "sights.heidelberg.philosophenweg_desc" }
    ],
    [
      { image: images["universitaetsbibliothek1"], name: "sights.heidelberg.universitaetsbibliothek", description: "sights.heidelberg.universitaetsbibliothek_desc" },
      { image: images["universitaetsbibliothek2"], name: "sights.heidelberg.universitaetsbibliothek", description: "sights.heidelberg.universitaetsbibliothek_desc" }
    ]
  ]
},

  Default: {
    background: getCityImage('Default'),
    carousels: [
      [
        { image: images["default"], name: "sights.default.sight_1", description: "sights.default.sight_1_desc" },
      ],
      [
        { image: images["default"], name: "sights.default.sight_2", description: "sights.default.sight_2_desc" },
      ],
      [
        { image: images["default"], name: "sights.default.sight_3", description: "sights.default.sight_3_desc" },
      ],
      [
        { image: images["default"], name: "sights.default.sight_4", description: "sights.default.sight_4_desc" },
      ],
    ]
  },
};