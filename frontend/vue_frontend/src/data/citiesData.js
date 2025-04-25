
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
  "Mainz", "Saarbrücken", "Augsburg", "Wiesbaden", "Erfurt"
];

export const citiesData = {
  Berlin: {
    background: getCityImage('Berlin'),
    carousels: [
      [
        { image: images["brandenburg3"], name: "Brandenburg Tor", description: "Das Brandenburg Tor ist ein historisches Wahrzeichen Berlins und ein Symbol der deutschen Einheit." },
        { image: images["brandenburg4"] },
        { image: images["brandenburg5"] }
      ],
      [
        { image: images["reichstag1"], name: "Reichstag", description: "Der Reichstag ist der Sitz des Deutschen Bundestags und bekannt für seine gläserne Kuppel." },
        { image: images["reichstag2"] },
        { image: images["reichstag3"] }
      ],
      [
        { image: images["fernsehturm1"], name: "Fernsehturm", description: "Der Fernsehturm ist das höchste Bauwerk Deutschlands und bietet eine atemberaubende Aussicht über Berlin." },
        { image: images["fernsehturm2"] },
        { image: images["fernsehturm3"] }
      ],
      [
        { image: images["museum1"], name: "Museumsinsel", description: "Die Museumsinsel beherbergt eine Sammlung weltberühmter Museen und ist UNESCO-Welterbe." },
        { image: images["museum2"] },
        { image: images["museum3"] },
        { image: images["museum4"] }
      ],
    ]
  },
  Munich: {
    background: getCityImage('Munich'),
    carousels: [
      [
        { image: images["marienplatz1"], name: "Marienplatz", description: "Der Marienplatz ist das Herz Münchens mit dem berühmten Glockenspiel im Neuen Rathaus." },
        { image: images["marienplatz2"] },
        { image: images["marienplatz3"] },
        { image: images["marienplatz4"]  }
      ],
      [
        { image: images["nymphenburg1"], name: "Nymphenburg Schloss", description: "Das Schloss Nymphenburg ist eine prächtige barocke Residenz mit wunderschönen Gärten." },
        { image: images["nymphenburg2"] },
        { image: images["nymphenburg3"] }
      ],
      [
        { image: images["eng1"], name: "Englischer Garten", description: "Der Englische Garten ist einer der größten Stadtparks der Welt und ein beliebter Treffpunkt." },
        { image: images["eng2"] }
      ],
      [
        { image: images["vm1"], name: "Viktualienmarkt", description: "Der Viktualienmarkt ist ein traditioneller Markt mit frischen Lebensmitteln und bayerischen Spezialitäten." },
        { image: images["vm2"] }
      ],
    ]
  },
  Hamburg: {
    background: getCityImage('Hamburg'),
    carousels: [
      [
        { image: images["elb1"], name: "Elbphilharmonie", description: "Die Elbphilharmonie ist ein modernes Konzerthaus an der Elbe mit einzigartiger Architektur." },
        { image: images["elb2"]},
        { image: images["elb3"] }
      ],
      [
        { image: images["ss1"], name: "Speicherstadt", description: "Die Speicherstadt ist das größte zusammenhängende Lagerhausensemble der Welt und UNESCO-Welterbe." },
        { image: images["ss2"] },
        { image: images["ss3"]}
      ],
      [
        { image: images["reeperbahn1"], name: "Reeperbahn - Neonlichter", description: "Die neonbeleuchteten Straßen der Reeperbahn bei Nacht." }
      ],
      [
        { image: images["michelis1"], name: "St. Michaelis Kirche", description: "Die St. Michaelis Kirche, auch 'Michel' genannt, ist ein Wahrzeichen Hamburgs." },
        { image: images["michelis2"]}
      ],
    ]
  },
  Cologne: {
    background: getCityImage('Cologne'),
    carousels: [
      [
        { image: images["kd1"], name: "Kölner Dom", description: "Der Kölner Dom ist eine gotische Kathedrale und das bekannteste Wahrzeichen Kölns." },
        { image: images["kd2"]},
        { image: images["kd3"] },
        { image: images["kd4"] }
      ],
      [
        { image: images["rheinp1"], name: "Rheinpromenade", description: "Die Rheinpromenade bietet malerische Ausblicke auf den Rhein und die Altstadt." },
        { image: images["rheinp2"]}
      ],
      [
        { image: images["hb1"], name: "Hohenzollernbrücke", description: "Die Hohenzollernbrücke ist bekannt für ihre Liebesschlösser und die Aussicht auf den Dom." },
        { image: images["hb2"]}
      ],
      [
        { image: images["ludwig1"], name: "Museum Ludwig", description: "Eine Ausstellungshalle im Museum Ludwig." }
      ],
    ]
  },
  Frankfurt: {
    background: getCityImage('Frankfurt'),
    carousels: [
      [
        { image: images["romer1"], name: "Römer", description: "Der Römer ist das historische Rathaus Frankfurts mit seiner charakteristischen Treppengiebelfassade." },
        { image: images["romer2"]  },
        { image: images["romer3"] }
      ],
      [
        { image: images["tower1"], name: "Main Tower", description: "Der Main Tower bietet eine spektakuläre Aussicht auf die Skyline Frankfurts." },
        { image: images["tower2"]  }
      ],
      [
        { image: images["pg1"], name: "Palmengarten", description: "Der Palmengarten ist ein botanischer Garten mit exotischen Pflanzen und Gewächshäusern." },
        { image: images["pg2"]}
      ],
      [
        { image: images["sm1"], name: "Städel Museum", description: "Das Städel Museum zeigt eine beeindruckende Sammlung europäischer Kunst." },
      ],
    ]
  },
  Stuttgart: {
    background: getCityImage('Stuttgart'),
    carousels: [
      [
        { image: images["sp1"], name: "Schlossplatz", description: "Der Schlossplatz ist der zentrale Platz Stuttgarts mit dem Neuen Schloss." },
        { image: images["sp2"] },
        { image: images["sp3"] }
      ],
      [
        { image: images["mercedes1"], name: "Mercedes-Benz Museum", description: "Das Mercedes-Benz Museum zeigt die Geschichte des Automobilherstellers." },
        { image: images["mercedes2"] },
        { image: images["mercedes3"] },
        { image: images["mercedes4"]}
      ],
      [
        { image: images["pm1"], name: "Porsche Museum", description: "Das Porsche Museum widmet sich der Geschichte der Sportwagenmarke Porsche." },
        { image: images["pm2"] }
      ],
      [
        { image: images["wilhelma1"], name: "Wilhelma", description: "Die Wilhelma ist ein zoologisch-botanischer Garten mit einer Vielzahl von Tieren und Pflanzen." },
        { image: images["wilhelma2"]},
        { image: images["wilhelma3"] }
      ],
    ]
  },
  Düsseldorf: {
    background: getCityImage('Düsseldorf'),
    carousels: [
      [
        { image: images["turm"], name: "Rheinturm", description: "Der Rheinturm ist das höchste Bauwerk Düsseldorfs mit einer Aussichtsplattform." },
        { image: images["turm2"]  }
      ],
      [
        { image: images["altst"], name: "Altstadt", description: "Die Düsseldorfer Altstadt ist bekannt als die 'längste Theke der Welt'." },
        { image: images["altst2"] }
      ],
      [
        { image: images["konig"], name: "Königsallee", description: "Die Königsallee ist eine luxuriöse Einkaufsstraße mit exklusiven Boutiquen." },
        { image: images["konig2"]},
        { image: images["konig1"] }
      ],
      [
        { image: images["schlossturm1"], name: "Schlossturm", description: "Der Schlossturm ist das letzte Überbleibsel des ehemaligen Düsseldorfer Schlosses." },
        { image: images["schlossturm2"]  }
      ],
    ]
  },
  Dresden: {
    background: getCityImage('Dresden'),
    carousels: [
      [
        { image: images["fk1"], name: "Frauenkirche", description: "Die Frauenkirche ist eine barocke Kirche und ein Wahrzeichen Dresdens." },
        { image: images["fk2"] },
        { image: images["fk3"] }
      ],
      [
        { image: images["semper1"], name: "Semperoper", description: "Die Semperoper ist eines der bekanntesten Opernhäuser Deutschlands." },
        { image: images["semper2"] }
      ],
      [
        { image: images["zwinger1"], name: "Zwinger", description: "Der Zwinger ist ein barockes Schloss mit Museen und einem schönen Innenhof." },
        { image: images["zwinger2"] }
      ],
      [
        { image: images["rschloss1"], name: "Residenzschloss", description: "Das Residenzschloss beherbergt mehrere Museen, darunter das Historische Grüne Gewölbe." },
        { image: images["rschloss2"] }
      ],
    ]
  },
  Leipzig: {
    background: getCityImage('Leipzig'),
    carousels: [
      [
        { image: images["niko1"], name: "Nikolaikirche", description: "Die Nikolaikirche spielte eine zentrale Rolle in der friedlichen Revolution von 1989." },
        { image: images["niko2"] }
      ],
      [
        { image: images["volk1"], name: "Völkerschlachtdenkmal", description: "Das Völkerschlachtdenkmal erinnert an die Schlacht von Leipzig 1813." },
        { image: images["volk2"] }
      ],
      [
        { image: images["gwh1"], name: "Gewandhaus", description: "Das Gewandhaus ist ein weltberühmtes Konzerthaus mit herausragender Akustik." },
        { image: images["gwh2"]}
      ],
      [
        { image: images["zlp1"], name: "Zoo Leipzig", description: "Der Zoo Leipzig ist bekannt für seine modernen Anlagen wie die Gondwanaland-Halle." }
      ],
    ]
  },
  Hannover: {
    background: getCityImage('Hannover'),
    carousels: [
      [
        { image: images["hanrt1"], name: "Neues Rathaus", description: "Das Neue Rathaus ist ein imposantes Gebäude mit einer Aussichtskuppel." },
        { image: images["hanrt2"] }
      ],
      [
        { image: images["hga1"], name: "Herrenhäuser Gärten", description: "Die Herrenhäuser Gärten sind ein barockes Gartenensemble von internationalem Rang." },
        { image: images["hga2"]}
      ],
      [
        { image: images["masch1"], name: "Maschsee", description: "Der Maschsee ist ein beliebter See für Freizeitaktivitäten und Spaziergänge." },
        { image: images["masch2"] }
      ],
      [
        { image: images["sprengel"], name: "Sprengel Museum", description: "Das Sprengel Museum zeigt moderne Kunst von Künstlern wie Picasso und Klee." }

      ],
    ]
  },
  Nuremberg: {
    background: getCityImage('Nuremberg'),
    carousels: [
      [
        { image: images["kais1"], name: "Kaiserburg", description: "Die Kaiserburg ist eine mittelalterliche Burg und ein Wahrzeichen Nürnbergs." },
        { image: images["kais2"] }
      ],
      [
        { image: images["haum1"], name: "Hauptmarkt", description: "Der Hauptmarkt ist bekannt für den Schönen Brunnen und den Christkindlesmarkt." },
        { image: images["haum2"] }
      ],
      [
        { image: images["docu1"], name: "Dokumentationszentrum", description: "Das Dokumentationszentrum informiert über die Geschichte des Nationalsozialismus." },
        { image: images["docu2"] }
      ],
      [
        { image: images["lorenz1"], name: "St. Lorenz Kirche", description: "Die St. Lorenz Kirche ist eine gotische Kirche mit beeindruckender Architektur." },
        { image: images["lorenz2"] }
      ],
    ]
  },
  Bremen: {
    background: getCityImage('Bremen'),
    carousels: [
      [
        { image: images["musik1"], name: "Bremer Stadtmusikanten", description: "Die Bremer Stadtmusikanten sind eine berühmte Bronzeskulptur nach dem Märchen." },
        { image: images["musik2"]  }
      ],
      [
        { image: images["bremrt1"], name: "Rathaus", description: "Das Bremer Rathaus ist ein UNESCO-Welterbe mit einer prächtigen Fassade." },
        { image: images["bremrt2"] }
      ],
      [
        { image: images["viert1"], name: "Schnoorviertel", description: "Das Schnoorviertel ist ein malerisches Viertel mit engen Gassen und alten Häusern." },
        { image: images["viert2"] }
      ],
      [
        { image: images["sta1"], name: "Rolandstatue", description: "Die Rolandstatue ist ein Symbol für die Freiheit und Unabhängigkeit Bremens." },
        { image: images["sta2"]}
      ],
    ]
  },
  Dortmund: {
    background: getCityImage('Dortmund'),
    carousels: [
      [
        { image: images["dortp1"], name: "Westfalenpark", description: "Der Westfalenpark ist ein großer Stadtpark mit dem Florianturm." },
        { image: images["dortp2"] }
      ],
      [
        { image: images["fuss1"], name: "Deutsches Fußballmuseum", description: "Das Deutsche Fußballmuseum widmet sich der Geschichte des deutschen Fußballs." },
        { image: images["fuss2"] }
      ],
      [
        { image: images["uturm1"], name: "U-Turm", description: "Der U-Turm ist ein Kulturzentrum in einem ehemaligen Brauereiturm." },
        { image: images["uturm2"] }
      ],
      [
        { image: images["reino1"], name: "Reinoldikirche", description: "Die Reinoldikirche ist die älteste Kirche Dortmunds und ein Wahrzeichen." },
        { image: images["reino2"]}
      ],
    ]
  },
  Essen: {
    background: getCityImage('Essen'),
    carousels: [
      [
        { image: images["zoll1"], name: "Zeche Zollverein", description: "Die Zeche Zollverein ist ein UNESCO-Welterbe und ein Symbol für den Strukturwandel." },
        { image: images["zoll2"] }
      ],
      [
        { image: images["essp1"], name: "Grugapark", description: "Der Grugapark ist ein großer Park mit botanischen Gärten und Freizeitangeboten." },
        { image: images["essp2"] }
      ],
      [
        { image: images["essk1"], name: "Museum Folkwang", description: "Das Museum Folkwang zeigt eine bedeutende Sammlung moderner Kunst." },
        { image: images["essk2"] }
      ],
      [
        { image: images["stif"], name: "Alfried Krupp von Bohlen und Halbach-Stiftung", description: "Die Stiftung fördert Kunst und Kultur in Essen." }

      ],
    ]
  },
  Bonn: {
    background: getCityImage('Bonn'),
    carousels: [
      [
        { image: images["beth1"], name: "Beethoven-Haus", description: "Das Beethoven-Haus ist das Geburtshaus des Komponisten Ludwig van Beethoven." },
        { image: images["beth2"] }
      ],
      [
        { image: images["zol1"], name: "Alter Zoll", description: "Der Alte Zoll ist eine historische Festung mit Blick auf den Rhein." },
        { image: images["zol2"] }
      ],
      [
        { image: images["bonnp1"], name: "Botanischer Garten", description: "Der Botanische Garten Bonn zeigt eine Vielzahl exotischer Pflanzen." },
        { image: images["bonnp2"] }
      ],
      [
        { image: images["brt1"], name: "Rathaus", description:  "rathauss" },
        { image: images["brt2"] }
      ],
    ]
  },
  Mannheim: {
    background: getCityImage('Mannheim'),
    carousels: [
      [
        { image: images["wasst1"], name: "Wasserturm", description: "Der Wasserturm ist das bekannteste Wahrzeichen Mannheims." },
        { image: images["wasst2"] }
      ],
      [
        { image: images["manns1"], name: "Schloss Mannheim", description: "Das Schloss Mannheim ist eine barocke Residenz und Sitz der Universität." },
        { image: images["manns2"] }
      ],
      [
        { image: images["mannp1"], name: "Luisenpark", description: "Der Luisenpark ist ein großer Park mit Seen und botanischen Gärten." },
        { image: images["mannp2"]}
      ],
      [
        { image: images["mannk1"], name: "Jesuitenkirche", description: "Die Jesuitenkirche ist eine barocke Kirche mit beeindruckender Innenausstattung." },
        { image: images["mannk2"] }
      ],
    ]
  },
  Karlsruhe: {
    background: getCityImage('Karlsruhe'),
    carousels: [
      [
        { image: images["schkarl1"], name: "Schloss Karlsruhe", description: "Das Schloss Karlsruhe ist das Wahrzeichen der Stadt und Sitz des Bundesgerichtshofs." },
        { image: images["schkarl2"] }
      ],
      [
        { image: images["zkm1"], name: "ZKM", description: "Das Zentrum für Kunst und Medien zeigt zeitgenössische Kunst und Medienkunst." },
        { image: images["zkm2"] }
      ],
      [
        { image: images["anlage1"], name: "Günther-Klotz-Anlage", description: "Der See in der Günther-Klotz-Anlage." }
      ],
      [
        { image: images["knsthalle1"], name: "Kunsthalle", description: "Eine Galeriehalle in der Staatlichen Kunsthalle." }
      ],
    ]
  },
  Freiburg: {
    background: getCityImage('Freiburg'),
    carousels: [
      [
        { image: images["frmun1"], name: "Freiburger Münster", description: "Das Freiburger Münster ist eine gotische Kathedrale und Wahrzeichen der Stadt." },
        { image: images["frmun2"] }
      ],
      [
        { image: images["freiturm1"], name: "Schwabentor", description: "Das Schwabentor ist eines der erhaltenen Stadttore Freiburgs." },
        { image: images["freiturm2"] }
      ],
      [
        { image: images["frmus1"], name: "Augustiner Museum", description: "Das Augustiner Museum zeigt Kunst und Geschichte der Region." }

      ],
      [
        { image: images["bachl1"], name: "Bächle", description: "Die Freiburger Bächle sind kleine Wasserläufe, die durch die Altstadt fließen." },
        { image: images["bachl2"]}
      ],
    ]
  },
  Kiel: {
    background: getCityImage('Kiel'),
    carousels: [
      [
        { image: images["forde1"], name: "Kieler Förde", description: "Die Kieler Förde ist eine malerische Bucht und ein Zentrum für Segelveranstaltungen." },
        { image: images["forde2"]}
      ],
      [
        { image: images["rathkiel1"], name: "Rathaus Kiel", description: "Das Rathaus Kiel ist bekannt für seinen markanten Turm." },
        { image: images["rathkiel2"]},
        { image: images["rathkiel3"] }
      ],
      [
        { image: images["schiffm1"], name: "Schifffahrtsmuseum", description: "Das Schifffahrtsmuseum zeigt die maritime Geschichte Kiels." },
        { image: images["schiffm2"] }
      ],
      [
          { image: images["schleuse"], name: "Holtenauer Schleuse", description: "Schiffe passieren die Holtenauer Schleuse." }
      ],
    ]
  },
  Rostock: {
    background: getCityImage('Rostock'),
    carousels: [
      [
        { image: images["rostf1"], name: "Warnemünder Leuchtturm", description: "Der Warnemünder Leuchtturm ist ein Wahrzeichen Rostocks." },
        { image: images["rostf2"] }
      ],
      [
        { image: images["rostrt1"], name: "Rostocker Rathaus", description: "Das Rostocker Rathaus ist ein historisches Gebäude mit barocker Fassade." },
        { image: images["rostrt2"] }
      ],
      [
        { image: images["rostsr1"], name: "Kröpeliner Straße", description: "Die Kröpeliner Straße ist die Haupteinkaufsstraße Rostocks." },
        { image: images["rostsr2"]}
      ],
      [
        { image: images["rostk"], name: "St. Marien", description: "Die astronomische Uhr in der St. Marien Kirche." }
      ],
    ]
  },
  Mainz: {
    background: getCityImage('Mainz'),
    carousels: [
      [
        { image: images["mart1"], name: "Mainzer Dom", description: "Der Mainzer Dom ist eine romanische Kathedrale und Wahrzeichen der Stadt." },
        { image: images["mart2"]}
      ],
      [
        { image: images["mamus1"], name: "Gutenberg-Museum", description: "Das Gutenberg-Museum widmet sich der Geschichte des Buchdrucks." },
        { image: images["mamus2"] }
      ],
      [
        { image: images["rhpro1"], name: "Rheinpromenade", description: "Die Rheinpromenade bietet schöne Ausblicke auf den Rhein." },
        { image: images["rhpro2"]}
      ],
      [
        { image: images["mainzt1"], name: "Theater Mainz", description: "Das Staatstheater Mainz ist ein bedeutendes Kulturzentrum." },
        { image: images["mainzt2"] }
      ],
    ]
  },
  Saarbrücken: {
    background: getCityImage('Saarbrücken'),
    carousels: [
      [
        { image: images["saarsch1"], name: "Saarbrücker Schloss", description: "Das Saarbrücker Schloss ist eine barocke Residenz mit moderner Architektur." },
        { image: images["saarsch2"] }
      ],
      [
        { image: images["saark1"], name: "Ludwigskirche", description: "Die Ludwigskirche ist eine barocke Kirche und ein Wahrzeichen Saarbrückens." }

      ],
      [
        { image: images["saar1"], name: "Saar", description: "Die Saar ist ein malerischer Fluss, der durch die Stadt fließt." },
        { image: images["saar2"] }
      ],
      [
        { image: images["dfga1"], name: "Deutsch-Französischer Garten", description: "Der Deutsch-Französische Garten ist ein großer Park für Freizeitaktivitäten." }
      ],
    ]
  },
  Augsburg: {
    background: getCityImage('Augsburg'),
    carousels: [
      [
        { image: images["augd1"], name: "Augsburger Dom", description: "Der Augsburger Dom ist eine romanisch-gotische Kathedrale." },
        { image: images["augd2"] }
      ],
      [
        { image: images["fugg1"], name: "Fuggerei", description: "Die Fuggerei ist die älteste Sozialsiedlung der Welt." },
        { image: images["fugg2"] }
      ],
      [
        { image: images["rtaug1"], name: "Rathaus Augsburg", description: "Das Rathaus Augsburg ist bekannt für seinen Goldenen Saal." },
        { image: images["rtaug2"] }
      ],
      [
        { image: images["augt1"], name: "Perlachturm", description: "Die Aussicht vom Perlachturm." }
      ],
    ]
  },
  Wiesbaden: {
    background: getCityImage('Wiesbaden'),
    carousels: [
      [
        { image: images["wiesh1"], name: "Kurhaus Wiesbaden", description: "Das Kurhaus Wiesbaden ist ein prächtiges Gebäude mit einem Casino." },
        { image: images["wiesh2"] }
      ],
      [
        { image: images["nero1"], name: "Neroberg", description: "Der Neroberg bietet eine Aussicht auf Wiesbaden und einen historischen Tempel." },
        { image: images["nero2"] }
      ],
      [
        { image: images["wiesk1"], name: "Marktkirche", description: "Die Marktkirche ist eine neugotische Kirche und Wahrzeichen Wiesbadens." },
        { image: images["wiesk2"] }
      ],
      [
        { image: images["weinb1"], name: "Rheingau", description: "Die Region Rheingau ist bekannt für ihre Weinberge und Schlösser." },
        { image: images["weinb2"] }
      ],
    ]
  },
  Erfurt: {
    background: getCityImage('Erfurt'),
    carousels: [
      [
        { image: images["erfdom1"], name: "Erfurter Dom", description: "Der Erfurter Dom ist eine gotische Kathedrale auf dem Domberg." },
        { image: images["erfdom2"] }
      ],
      [
        { image: images["krame1"], name: "Krämerbrücke", description: "Die Krämerbrücke ist eine bebaute Brücke mit Fachwerkhäusern." },
        { image: images["krame2"] }
      ],
      [
        { image: images["peter1"], name: "Zitadelle Petersberg", description: "Die Zitadelle Petersberg ist eine historische Festung mit Aussicht." },
        { image: images["peter2"] }
      ],
      [
        { image: images["egapark"], name: "Egapark", description: "Der Egapark ist ein großer Park mit Blumenbeeten und Ausstellungen." }

      ],
    ]
  },
  Default: {
    background: getCityImage('Default'),
    carousels: [
      [
        { image: images["default"], name: "Sehenswürdigkeit 1", description: "Eine typische Sehenswürdigkeit in der Stadt." },

      ],
      [
        { image: images["default"], name: "Sehenswürdigkeit 2", description: "Ein bekanntes Wahrzeichen der Stadt." },

      ],
      [
        { image: images["default"], name: "Sehenswürdigkeit 3", description: "Ein beliebter Ort für Touristen." },

      ],
      [
        { image: images["default"], name: "Sehenswürdigkeit 4", description: "Ein historischer Ort mit viel Charme." },

      ],
    ]
  },
};