import Attraction1 from '@/assets/cities/attraction1.jpeg';
import Attraction2 from '@/assets/cities/attraction2.jpeg';
import Attraction3 from '@/assets/cities/attraction3.jpeg';
import Attraction4 from '@/assets/cities/attraction4.jpeg';
import Attraction5 from '@/assets/cities/attraction5.jpeg';

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
        { image: images["brandenburg4"], name: "Brandenburg Tor - Nacht", description: "Das Brandenburg Tor bei Nacht, beleuchtet und beeindruckend." },
        { image: images["brandenburg5"], name: "Brandenburg Tor - Winter", description: "Das Brandenburg Tor im Winter, umgeben von Schnee." }
      ],
      [
        { image: images["reichstag1"], name: "Reichstag", description: "Der Reichstag ist der Sitz des Deutschen Bundestags und bekannt für seine gläserne Kuppel." },
        { image: images["reichstag2"], name: "Reichstag - Innenansicht", description: "Die beeindruckende Glaskuppel des Reichstags von innen." },
        { image: images["reichstag3"], name: "Reichstag - Innenansicht", description: "Die beeindruckende Glaskuppel des Reichstags von innen." }
      ],
      [
        { image: images["fernsehturm1"], name: "Fernsehturm", description: "Der Fernsehturm ist das höchste Bauwerk Deutschlands und bietet eine atemberaubende Aussicht über Berlin." },
        { image: images["fernsehturm2"], name: "Fernsehturm - Aussicht", description: "Die spektakuläre Aussicht von der Spitze des Fernsehturms." },
        { image: images["fernsehturm3"], name: "Fernsehturm - Aussicht", description: "Die spektakuläre Aussicht von der Spitze des Fernsehturms." }
      ],
      [
        { image: images["museum1"], name: "Museumsinsel", description: "Die Museumsinsel beherbergt eine Sammlung weltberühmter Museen und ist UNESCO-Welterbe." },
        { image: images["museum2"], name: "Museumsinsel", description: "Die Museumsinsel beherbergt eine Sammlung weltberühmter Museen und ist UNESCO-Welterbe." },
        { image: images["museum3"], name: "Museumsinsel", description: "Die Museumsinsel beherbergt eine Sammlung weltberühmter Museen und ist UNESCO-Welterbe." },
        { image: images["museum4"], name: "Museumsinsel - Pergamon", description: "Das Pergamonmuseum auf der Museumsinsel mit antiken Schätzen." }
      ],
    ]
  },
  Munich: {
    background: getCityImage('Munich'),
    carousels: [
      [
        { image: images["marienplatz1"], name: "Marienplatz", description: "Der Marienplatz ist das Herz Münchens mit dem berühmten Glockenspiel im Neuen Rathaus." },
        { image: images["marienplatz2"], name: "Marienplatz", description: "Der Marienplatz ist das Herz Münchens mit dem berühmten Glockenspiel im Neuen Rathaus." },
        { image: images["marienplatz3"], name: "Marienplatz", description: "Der Marienplatz ist das Herz Münchens mit dem berühmten Glockenspiel im Neuen Rathaus." },
        { image: images["marienplatz4"], name: "Marienplatz - Weihnachtsmarkt", description: "Der Marienplatz während des traditionellen Weihnachtsmarkts." }
      ],
      [
        { image: images["nymphenburg1"], name: "Nymphenburg Schloss", description: "Das Schloss Nymphenburg ist eine prächtige barocke Residenz mit wunderschönen Gärten." },
        { image: images["nymphenburg2"], name: "Nymphenburg Schloss", description: "Das Schloss Nymphenburg ist eine prächtige barocke Residenz mit wunderschönen Gärten." },
        { image: images["nymphenburg3"], name: "Nymphenburg - Garten", description: "Die weitläufigen Gärten des Schlosses Nymphenburg." }
      ],
      [
        { image: images["eng1"], name: "Englischer Garten", description: "Der Englische Garten ist einer der größten Stadtparks der Welt und ein beliebter Treffpunkt." },
        { image: images["eng2"], name: "Englischer Garten - Surfer", description: "Die berühmte Surferwelle im Englischen Garten." }
      ],
      [
        { image: images["vm1"], name: "Viktualienmarkt", description: "Der Viktualienmarkt ist ein traditioneller Markt mit frischen Lebensmitteln und bayerischen Spezialitäten." },
        { image: images["vm2"], name: "Viktualienmarkt - Stände", description: "Bunte Marktstände auf dem Viktualienmarkt." }
      ],
    ]
  },
  Hamburg: {
    background: getCityImage('Hamburg'),
    carousels: [
      [
        { image: images["elb1"], name: "Elbphilharmonie", description: "Die Elbphilharmonie ist ein modernes Konzerthaus an der Elbe mit einzigartiger Architektur." },
        { image: images["elb2"], name: "Elbphilharmonie", description: "Die Elbphilharmonie ist ein modernes Konzerthaus an der Elbe mit einzigartiger Architektur." },
        { image: images["elb3"], name: "Elbphilharmonie - Nacht", description: "Die Elbphilharmonie bei Nacht, mit beleuchteter Glasfassade." }
      ],
      [
        { image: images["ss1"], name: "Speicherstadt", description: "Die Speicherstadt ist das größte zusammenhängende Lagerhausensemble der Welt und UNESCO-Welterbe." },
        { image: images["ss2"], name: "Speicherstadt", description: "Die Speicherstadt ist das größte zusammenhängende Lagerhausensemble der Welt und UNESCO-Welterbe." },
        { image: images["ss3"], name: "Speicherstadt - Kanäle", description: "Die malerischen Kanäle der Speicherstadt." }
      ],
      [
        { image: images["reeperbahn1"], name: "Reeperbahn - Neonlichter", description: "Die neonbeleuchteten Straßen der Reeperbahn bei Nacht." }
      ],
      [
        { image: images["michelis1"], name: "St. Michaelis Kirche", description: "Die St. Michaelis Kirche, auch 'Michel' genannt, ist ein Wahrzeichen Hamburgs." },
        { image: images["michelis2"], name: "St. Michaelis - Aussicht", description: "Die Aussicht von der Plattform des Michel." }
      ],
    ]
  },
  Cologne: {
    background: getCityImage('Cologne'),
    carousels: [
      [
        { image: images["kd1"], name: "Kölner Dom", description: "Der Kölner Dom ist eine gotische Kathedrale und das bekannteste Wahrzeichen Kölns." },
        { image: images["kd2"], name: "Kölner Dom", description: "Der Kölner Dom ist eine gotische Kathedrale und das bekannteste Wahrzeichen Kölns." },
        { image: images["kd3"], name: "Kölner Dom", description: "Der Kölner Dom ist eine gotische Kathedrale und das bekannteste Wahrzeichen Kölns." },
        { image: images["kd4"], name: "Kölner Dom - Innen", description: "Die beeindruckende Innenarchitektur des Kölner Doms." }
      ],
      [
        { image: images["rheinp1"], name: "Rheinpromenade", description: "Die Rheinpromenade bietet malerische Ausblicke auf den Rhein und die Altstadt." },
        { image: images["rheinp2"], name: "Rheinpromenade - Sonnenuntergang", description: "Die Rheinpromenade bei einem malerischen Sonnenuntergang." }
      ],
      [
        { image: images["hb1"], name: "Hohenzollernbrücke", description: "Die Hohenzollernbrücke ist bekannt für ihre Liebesschlösser und die Aussicht auf den Dom." },
        { image: images["hb2"], name: "Hohenzollernbrücke - Schlösser", description: "Tausende Liebesschlösser an der Hohenzollernbrücke." }
      ],
      [
        { image: images["ludwig1"], name: "Museum Ludwig - Ausstellung", description: "Eine Ausstellungshalle im Museum Ludwig." }
      ],
    ]
  },
  Frankfurt: {
    background: getCityImage('Frankfurt'),
    carousels: [
      [
        { image: images["romer1"], name: "Römer", description: "Der Römer ist das historische Rathaus Frankfurts mit seiner charakteristischen Treppengiebelfassade." },
        { image: images["romer2"], name: "Römer", description: "Der Römer ist das historische Rathaus Frankfurts mit seiner charakteristischen Treppengiebelfassade." },
        { image: images["romer3"], name: "Römer - Innenhof", description: "Der malerische Innenhof des Römers." }
      ],
      [
        { image: images["tower1"], name: "Main Tower", description: "Der Main Tower bietet eine spektakuläre Aussicht auf die Skyline Frankfurts." },
        { image: images["tower2"], name: "Main Tower - Nacht", description: "Die beleuchtete Skyline vom Main Tower bei Nacht." }
      ],
      [
        { image: images["pg1"], name: "Palmengarten", description: "Der Palmengarten ist ein botanischer Garten mit exotischen Pflanzen und Gewächshäusern." },
        { image: images["pg2"], name: "Palmengarten - Tropenhaus", description: "Das Tropenhaus im Palmengarten." }
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
        { image: images["sp2"], name: "Schlossplatz", description: "Der Schlossplatz ist der zentrale Platz Stuttgarts mit dem Neuen Schloss." },
        { image: images["sp3"], name: "Schlossplatz - Fontäne", description: "Die Fontäne auf dem Schlossplatz bei Sonnenuntergang." }
      ],
      [
        { image: images["mercedes1"], name: "Mercedes-Benz Museum", description: "Das Mercedes-Benz Museum zeigt die Geschichte des Automobilherstellers." },
        { image: images["mercedes2"], name: "Mercedes-Benz Museum", description: "Das Mercedes-Benz Museum zeigt die Geschichte des Automobilherstellers." },
        { image: images["mercedes3"], name: "Mercedes-Benz Museum", description: "Das Mercedes-Benz Museum zeigt die Geschichte des Automobilherstellers." },
        { image: images["mercedes4"], name: "Mercedes-Benz - Ausstellung", description: "Eine Ausstellungshalle im Mercedes-Benz Museum." }
      ],
      [
        { image: images["pm1"], name: "Porsche Museum", description: "Das Porsche Museum widmet sich der Geschichte der Sportwagenmarke Porsche." },
        { image: images["pm2"], name: "Porsche - Klassiker", description: "Klassische Porsche-Modelle im Museum." }
      ],
      [
        { image: images["wilhelma1"], name: "Wilhelma", description: "Die Wilhelma ist ein zoologisch-botanischer Garten mit einer Vielzahl von Tieren und Pflanzen." },
        { image: images["wilhelma2"], name: "Wilhelma", description: "Die Wilhelma ist ein zoologisch-botanischer Garten mit einer Vielzahl von Tieren und Pflanzen." },
        { image: images["wilhelma3"], name: "Wilhelma - Aquarium", description: "Das Aquarium in der Wilhelma." }
      ],
    ]
  },
  Düsseldorf: {
    background: getCityImage('Düsseldorf'),
    carousels: [
      [
        { image: images["turm"], name: "Rheinturm", description: "Der Rheinturm ist das höchste Bauwerk Düsseldorfs mit einer Aussichtsplattform." },
        { image: images["turm2"], name: "Rheinturm - Aussicht", description: "Die Aussicht von der Spitze des Rheinturms." }
      ],
      [
        { image: images["altst"], name: "Altstadt", description: "Die Düsseldorfer Altstadt ist bekannt als die 'längste Theke der Welt'." },
        { image: images["altst2"], name: "Altstadt - Gassen", description: "Die charmanten Gassen der Düsseldorfer Altstadt." }
      ],
      [
        { image: images["konig"], name: "Königsallee", description: "Die Königsallee ist eine luxuriöse Einkaufsstraße mit exklusiven Boutiquen." },
        { image: images["konig2"], name: "Königsallee", description: "Die Königsallee ist eine luxuriöse Einkaufsstraße mit exklusiven Boutiquen." },
        { image: images["konig1"], name: "Königsallee - Kanal", description: "Der malerische Kanal entlang der Königsallee." }
      ],
      [
        { image: images["schlossturm1"], name: "Schlossturm", description: "Der Schlossturm ist das letzte Überbleibsel des ehemaligen Düsseldorfer Schlosses." },
        { image: images["schlossturm2"], name: "Schlossturm - Rhein", description: "Der Schlossturm mit Blick auf den Rhein." }
      ],
    ]
  },
  Dresden: {
    background: getCityImage('Dresden'),
    carousels: [
      [
        { image: images["fk1"], name: "Frauenkirche", description: "Die Frauenkirche ist eine barocke Kirche und ein Wahrzeichen Dresdens." },
        { image: images["fk2"], name: "Frauenkirche", description: "Die Frauenkirche ist eine barocke Kirche und ein Wahrzeichen Dresdens." },
        { image: images["fk3"], name: "Frauenkirche - Kuppel", description: "Die beeindruckende Kuppel der Frauenkirche von innen." }
      ],
      [
        { image: images["semper1 "], name: "Semperoper", description: "Die Semperoper ist eines der bekanntesten Opernhäuser Deutschlands." },
        { image: images["semper2"], name: "Semperoper - Innen", description: "Die prachtvolle Innenausstattung der Semperoper." }
      ],
      [
        { image: images["zwinger1"], name: "Zwinger", description: "Der Zwinger ist ein barockes Schloss mit Museen und einem schönen Innenhof." },
        { image: images["zwinger2"], name: "Zwinger - Innenhof", description: "Der malerische Innenhof des Zwingers." }
      ],
      [
        { image: images["rschloss1"], name: "Residenzschloss", description: "Das Residenzschloss beherbergt mehrere Museen, darunter das Historische Grüne Gewölbe." },
        { image: images["rschloss2"], name: "Residenzschloss - Gewölbe", description: "Das Historische Grüne Gewölbe im Residenzschloss." }
      ],
    ]
  },
  Leipzig: {
    background: getCityImage('Leipzig'),
    carousels: [
      [
        { image: Attraction1, name: "Nikolaikirche", description: "Die Nikolaikirche spielte eine zentrale Rolle in der friedlichen Revolution von 1989." },
        { image: Attraction2, name: "Nikolaikirche - Innen", description: "Die Innenarchitektur der Nikolaikirche." }
      ],
      [
        { image: Attraction3, name: "Völkerschlachtdenkmal", description: "Das Völkerschlachtdenkmal erinnert an die Schlacht von Leipzig 1813." },
        { image: Attraction4, name: "Völkerschlachtdenkmal - Aussicht", description: "Die Aussicht von der Plattform des Völkerschlachtdenkmals." }
      ],
      [
        { image: Attraction5, name: "Gewandhaus", description: "Das Gewandhaus ist ein weltberühmtes Konzerthaus mit herausragender Akustik." },
        { image: Attraction1, name: "Gewandhaus - Konzertsaal", description: "Der Konzertsaal des Gewandhauses." }
      ],
      [
        { image: Attraction2, name: "Zoo Leipzig", description: "Der Zoo Leipzig ist bekannt für seine modernen Anlagen wie die Gondwanaland-Halle." },
        { image: Attraction3, name: "Zoo Leipzig - Gondwanaland", description: "Die Gondwanaland-Halle im Zoo Leipzig." }
      ],
    ]
  },
  Hannover: {
    background: getCityImage('Hannover'),
    carousels: [
      [
        { image: Attraction1, name: "Neues Rathaus", description: "Das Neue Rathaus ist ein imposantes Gebäude mit einer Aussichtskuppel." },
        { image: Attraction2, name: "Neues Rathaus - Kuppel", description: "Die Aussichtskuppel des Neuen Rathauses." }
      ],
      [
        { image: Attraction3, name: "Herrenhäuser Gärten", description: "Die Herrenhäuser Gärten sind ein barockes Gartenensemble von internationalem Rang." },
        { image: Attraction4, name: "Herrenhäuser Gärten - Fontäne", description: "Die Große Fontäne in den Herrenhäuser Gärten." }
      ],
      [
        { image: Attraction5, name: "Maschsee", description: "Der Maschsee ist ein beliebter See für Freizeitaktivitäten und Spaziergänge." },
        { image: Attraction1, name: "Maschsee - Sonnenuntergang", description: "Der Maschsee bei einem malerischen Sonnenuntergang." }
      ],
      [
        { image: Attraction2, name: "Sprengel Museum", description: "Das Sprengel Museum zeigt moderne Kunst von Künstlern wie Picasso und Klee." },
        { image: Attraction3, name: "Sprengel - Ausstellung", description: "Eine Ausstellungshalle im Sprengel Museum." }
      ],
    ]
  },
  Nuremberg: {
    background: getCityImage('Nuremberg'),
    carousels: [
      [
        { image: Attraction1, name: "Kaiserburg", description: "Die Kaiserburg ist eine mittelalterliche Burg und ein Wahrzeichen Nürnbergs." },
        { image: Attraction2, name: "Kaiserburg - Innenhof", description: "Der Innenhof der Kaiserburg." }
      ],
      [
        { image: Attraction3, name: "Hauptmarkt", description: "Der Hauptmarkt ist bekannt für den Schönen Brunnen und den Christkindlesmarkt." },
        { image: Attraction4, name: "Hauptmarkt - Weihnachtsmarkt", description: "Der Christkindlesmarkt auf dem Hauptmarkt." }
      ],
      [
        { image: Attraction5, name: "Dokumentationszentrum", description: "Das Dokumentationszentrum informiert über die Geschichte des Nationalsozialismus." },
        { image: Attraction1, name: "Dokumentationszentrum - Ausstellung", description: "Eine Ausstellung im Dokumentationszentrum." }
      ],
      [
        { image: Attraction2, name: "St. Lorenz Kirche", description: "Die St. Lorenz Kirche ist eine gotische Kirche mit beeindruckender Architektur." },
        { image: Attraction3, name: "St. Lorenz - Innen", description: "Die Innenarchitektur der St. Lorenz Kirche." }
      ],
    ]
  },
  Bremen: {
    background: getCityImage('Bremen'),
    carousels: [
      [
        { image: Attraction1, name: "Bremer Stadtmusikanten", description: "Die Bremer Stadtmusikanten sind eine berühmte Bronzeskulptur nach dem Märchen." },
        { image: Attraction2, name: "Bremer Stadtmusikanten - Nacht", description: "Die Bremer Stadtmusikanten bei Nachtbeleuchtung." }
      ],
      [
        { image: Attraction3, name: "Rathaus", description: "Das Bremer Rathaus ist ein UNESCO-Welterbe mit einer prächtigen Fassade." },
        { image: Attraction4, name: "Rathaus - Innen", description: "Die prachtvolle Innenausstattung des Bremer Rathauses." }
      ],
      [
        { image: Attraction5, name: "Schnoorviertel", description: "Das Schnoorviertel ist ein malerisches Viertel mit engen Gassen und alten Häusern." },
        { image: Attraction1, name: "Schnoorviertel - Gassen", description: "Die charmanten Gassen des Schnoorviertels." }
      ],
      [
        { image: Attraction2, name: "Rolandstatue", description: "Die Rolandstatue ist ein Symbol für die Freiheit und Unabhängigkeit Bremens." },
        { image: Attraction3, name: "Rolandstatue - Platz", description: "Der Platz vor der Rolandstatue." }
      ],
    ]
  },
  Dortmund: {
    background: getCityImage('Dortmund'),
    carousels: [
      [
        { image: Attraction1, name: "Westfalenpark", description: "Der Westfalenpark ist ein großer Stadtpark mit dem Florianturm." },
        { image: Attraction2, name: "Westfalenpark - Rosen", description: "Die Rosengärten im Westfalenpark." }
      ],
      [
        { image: Attraction3, name: "Deutsches Fußballmuseum", description: "Das Deutsche Fußballmuseum widmet sich der Geschichte des deutschen Fußballs." },
        { image: Attraction4, name: "Fußballmuseum - Ausstellung", description: "Eine Ausstellungshalle im Deutschen Fußballmuseum." }
      ],
      [
        { image: Attraction5, name: "U-Turm", description: "Der U-Turm ist ein Kulturzentrum in einem ehemaligen Brauereiturm." },
        { image: Attraction1, name: "U-Turm - Kunst", description: "Eine Kunstausstellung im U-Turm." }
      ],
      [
        { image: Attraction2, name: "Reinoldikirche", description: "Die Reinoldikirche ist die älteste Kirche Dortmunds und ein Wahrzeichen." },
        { image: Attraction3, name: "Reinoldikirche - Innen", description: "Die Innenarchitektur der Reinoldikirche." }
      ],
    ]
  },
  Essen: {
    background: getCityImage('Essen'),
    carousels: [
      [
        { image: Attraction1, name: "Zeche Zollverein", description: "Die Zeche Zollverein ist ein UNESCO-Welterbe und ein Symbol für den Strukturwandel." },
        { image: Attraction2, name: "Zeche Zollverein - Nacht", description: "Die Zeche Zollverein bei Nachtbeleuchtung." }
      ],
      [
        { image: Attraction3, name: "Grugapark", description: "Der Grugapark ist ein großer Park mit botanischen Gärten und Freizeitangeboten." },
        { image: Attraction4, name: "Grugapark - Botanik", description: "Die botanischen Gärten im Grugapark." }
      ],
      [
        { image: Attraction5, name: "Museum Folkwang", description: "Das Museum Folkwang zeigt eine bedeutende Sammlung moderner Kunst." },
        { image: Attraction1, name: "Folkwang - Ausstellung", description: "Eine Ausstellungshalle im Museum Folkwang." }
      ],
      [
        { image: Attraction2, name: "Alfried Krupp von Bohlen und Halbach-Stiftung", description: "Die Stiftung fördert Kunst und Kultur in Essen." },
        { image: Attraction3, name: "Krupp-Stiftung - Veranstaltung", description: "Eine kulturelle Veranstaltung der Krupp-Stiftung." }
      ],
    ]
  },
  Bonn: {
    background: getCityImage('Bonn'),
    carousels: [
      [
        { image: Attraction1, name: "Beethoven-Haus", description: "Das Beethoven-Haus ist das Geburtshaus des Komponisten Ludwig van Beethoven." },
        { image: Attraction2, name: "Beethoven-Haus - Ausstellung", description: "Eine Ausstellung im Beethoven-Haus." }
      ],
      [
        { image: Attraction3, name: "Alter Zoll", description: "Der Alte Zoll ist eine historische Festung mit Blick auf den Rhein." },
        { image: Attraction4, name: "Alter Zoll - Rheinblick", description: "Die Aussicht auf den Rhein vom Alten Zoll." }
      ],
      [
        { image: Attraction5, name: "Botanischer Garten", description: "Der Botanische Garten Bonn zeigt eine Vielzahl exotischer Pflanzen." },
        { image: Attraction1, name: "Botanischer Garten - Gewächshaus", description: "Das Gewächshaus im Botanischen Garten." }
      ],
      [
        { image: Attraction2, name: "Haus der Geschichte", description: "Das Haus der Geschichte zeigt die Geschichte der Bundesrepublik Deutschland." },
        { image: Attraction3, name: "Haus der Geschichte - Ausstellung", description: "Eine Ausstellungshalle im Haus der Geschichte." }
      ],
    ]
  },
  Mannheim: {
    background: getCityImage('Mannheim'),
    carousels: [
      [
        { image: Attraction1, name: "Wasserturm", description: "Der Wasserturm ist das bekannteste Wahrzeichen Mannheims." },
        { image: Attraction2, name: "Wasserturm - Nacht", description: "Der Wasserturm bei Nachtbeleuchtung." }
      ],
      [
        { image: Attraction3, name: "Schloss Mannheim", description: "Das Schloss Mannheim ist eine barocke Residenz und Sitz der Universität." },
        { image: Attraction4, name: "Schloss Mannheim - Innenhof", description: "Der Innenhof des Schlosses Mannheim." }
      ],
      [
        { image: Attraction5, name: "Luisenpark", description: "Der Luisenpark ist ein großer Park mit Seen und botanischen Gärten." },
        { image: Attraction1, name: "Luisenpark - See", description: "Der malerische See im Luisenpark." }
      ],
      [
        { image: Attraction2, name: "Jesuitenkirche", description: "Die Jesuitenkirche ist eine barocke Kirche mit beeindruckender Innenausstattung." },
        { image: Attraction3, name: "Jesuitenkirche - Innen", description: "Die Innenarchitektur der Jesuitenkirche." }
      ],
    ]
  },
  Karlsruhe: {
    background: getCityImage('Karlsruhe'),
    carousels: [
      [
        { image: Attraction1, name: "Schloss Karlsruhe", description: "Das Schloss Karlsruhe ist das Wahrzeichen der Stadt und Sitz des Bundesgerichtshofs." },
        { image: Attraction2, name: "Schloss Karlsruhe - Innenhof", description: "Der Innenhof des Schlosses Karlsruhe." }
      ],
      [
        { image: Attraction3, name: "ZKM", description: "Das Zentrum für Kunst und Medien zeigt zeitgenössische Kunst und Medienkunst." },
        { image: Attraction4, name: "ZKM - Ausstellung", description: "Eine Ausstellungshalle im ZKM." }
      ],
      [
        { image: Attraction5, name: "Günther-Klotz-Anlage", description: "Die Günther-Klotz-Anlage ist ein beliebter Park für Freizeitaktivitäten." },
        { image: Attraction1, name: "Günther-Klotz-Anlage - See", description: "Der See in der Günther-Klotz-Anlage." }
      ],
      [
        { image: Attraction2, name: "Staatliche Kunsthalle", description: "Die Staatliche Kunsthalle zeigt europäische Kunstwerke aus mehreren Jahrhunderten." },
        { image: Attraction3, name: "Kunsthalle - Galerie", description: "Eine Galeriehalle in der Staatlichen Kunsthalle." }
      ],
    ]
  },
  Freiburg: {
    background: getCityImage('Freiburg'),
    carousels: [
      [
        { image: Attraction1, name: "Freiburger Münster", description: "Das Freiburger Münster ist eine gotische Kathedrale und Wahrzeichen der Stadt." },
        { image: Attraction2, name: "Freiburger Münster - Turm", description: "Der Turm des Freiburger Münsters mit Aussicht." }
      ],
      [
        { image: Attraction3, name: "Schwabentor", description: "Das Schwabentor ist eines der erhaltenen Stadttore Freiburgs." },
        { image: Attraction4, name: "Schwabentor - Nacht", description: "Das Schwabentor bei Nachtbeleuchtung." }
      ],
      [
        { image: Attraction5, name: "Augustiner Museum", description: "Das Augustiner Museum zeigt Kunst und Geschichte der Region." },
        { image: Attraction1, name: "Augustiner - Ausstellung", description: "Eine Ausstellungshalle im Augustiner Museum." }
      ],
      [
        { image: Attraction2, name: "Bächle", description: "Die Freiburger Bächle sind kleine Wasserläufe, die durch die Altstadt fließen." },
        { image: Attraction3, name: "Bächle - Altstadt", description: "Die Bächle in den Gassen der Freiburger Altstadt." }
      ],
    ]
  },
  Kiel: {
    background: getCityImage('Kiel'),
    carousels: [
      [
        { image: Attraction1, name: "Kieler Förde", description: "Die Kieler Förde ist eine malerische Bucht und ein Zentrum für Segelveranstaltungen." },
        { image: Attraction2, name: "Kieler Förde - Segeln", description: "Segelboote auf der Kieler Förde." }
      ],
      [
        { image: Attraction3, name: "Rathaus Kiel", description: "Das Rathaus Kiel ist bekannt für seinen markanten Turm." },
        { image: Attraction4, name: "Rathaus - Turm", description: "Der Turm des Rathauses Kiel." }
      ],
      [
        { image: Attraction5, name: "Schifffahrtsmuseum", description: "Das Schifffahrtsmuseum zeigt die maritime Geschichte Kiels." },
        { image: Attraction1, name: "Schifffahrtsmuseum - Ausstellung", description: "Eine Ausstellung im Schifffahrtsmuseum." }
      ],
      [
        { image: Attraction2, name: "Holtenauer Schleuse", description: "Die Holtenauer Schleuse ist Teil des Nord-Ostsee-Kanals." },
        { image: Attraction3, name: "Holtenauer Schleuse - Schiffe", description: "Schiffe passieren die Holtenauer Schleuse." }
      ],
    ]
  },
  Rostock: {
    background: getCityImage('Rostock'),
    carousels: [
      [
        { image: Attraction1, name: "Warnemünder Leuchtturm", description: "Der Warnemünder Leuchtturm ist ein Wahrzeichen Rostocks." },
        { image: Attraction2, name: "Warnemünder Leuchtturm - Strand", description: "Der Leuchtturm am Strand von Warnemünde." }
      ],
      [
        { image: Attraction3, name: "Rostocker Rathaus", description: "Das Rostocker Rathaus ist ein historisches Gebäude mit barocker Fassade." },
        { image: Attraction4, name: "Rostocker Rathaus - Innen", description: "Die Innenausstattung des Rostocker Rathauses." }
      ],
      [
        { image: Attraction5, name: "Kröpeliner Straße", description: "Die Kröpeliner Straße ist die Haupteinkaufsstraße Rostocks." },
        { image: Attraction1, name: "Kröpeliner Straße - Geschäfte", description: "Die Geschäfte entlang der Kröpeliner Straße." }
      ],
      [
        { image: Attraction2, name: "St. Marien Kirche", description: "Die St. Marien Kirche ist eine gotische Kirche mit einer astronomischen Uhr." },
        { image: Attraction3, name: "St. Marien - Uhr", description: "Die astronomische Uhr in der St. Marien Kirche." }
      ],
    ]
  },
  Mainz: {
    background: getCityImage('Mainz'),
    carousels: [
      [
        { image: Attraction1, name: "Mainzer Dom", description: "Der Mainzer Dom ist eine romanische Kathedrale und Wahrzeichen der Stadt." },
        { image: Attraction2, name: "Mainzer Dom - Innen", description: "Die Innenarchitektur des Mainzer Doms." }
      ],
      [
        { image: Attraction3, name: "Gutenberg-Museum", description: "Das Gutenberg-Museum widmet sich der Geschichte des Buchdrucks." },
        { image: Attraction4, name: "Gutenberg-Museum - Ausstellung", description: "Eine Ausstellung im Gutenberg-Museum." }
      ],
      [
        { image: Attraction5, name: "Rheinpromenade", description: "Die Rheinpromenade bietet schöne Ausblicke auf den Rhein." },
        { image: Attraction1, name: "Rheinpromenade - Sonnenuntergang", description: "Die Rheinpromenade bei Sonnenuntergang." }
      ],
      [
        { image: Attraction2, name: "Theater Mainz", description: "Das Staatstheater Mainz ist ein bedeutendes Kulturzentrum." },
        { image: Attraction3, name: "Theater Mainz - Bühne", description: "Die Bühne des Staatstheaters Mainz." }
      ],
    ]
  },
  Saarbrücken: {
    background: getCityImage('Saarbrücken'),
    carousels: [
      [
        { image: Attraction1, name: "Saarbrücker Schloss", description: "Das Saarbrücker Schloss ist eine barocke Residenz mit moderner Architektur." },
        { image: Attraction2, name: "Saarbrücker Schloss - Innenhof", description: "Der Innenhof des Saarbrücker Schlosses." }
      ],
      [
        { image: Attraction3, name: "Ludwigskirche", description: "Die Ludwigskirche ist eine barocke Kirche und ein Wahrzeichen Saarbrückens." },
        { image: Attraction4, name: "Ludwigskirche - Innen", description: "Die Innenarchitektur der Ludwigskirche." }
      ],
      [
        { image: Attraction5, name: "Saar", description: "Die Saar ist ein malerischer Fluss, der durch die Stadt fließt." },
        { image: Attraction1, name: "Saar - Ufer", description: "Das Ufer der Saar bei Sonnenuntergang." }
      ],
      [
        { image: Attraction2, name: "Deutsch-Französischer Garten", description: "Der Deutsch-Französische Garten ist ein großer Park für Freizeitaktivitäten." },
        { image: Attraction3, name: "Deutsch-Französischer Garten - See", description: "Der See im Deutsch-Französischen Garten." }
      ],
    ]
  },
  Augsburg: {
    background: getCityImage('Augsburg'),
    carousels: [
      [
        { image: Attraction1, name: "Augsburger Dom", description: "Der Augsburger Dom ist eine romanisch-gotische Kathedrale." },
        { image: Attraction2, name: "Augsburger Dom - Innen", description: "Die Innenarchitektur des Augsburger Doms." }
      ],
      [
        { image: Attraction3, name: "Fuggerei", description: "Die Fuggerei ist die älteste Sozialsiedlung der Welt." },
        { image: Attraction4, name: "Fuggerei - Gassen", description: "Die historischen Gassen der Fuggerei." }
      ],
      [
        { image: Attraction5, name: "Rathaus Augsburg", description: "Das Rathaus Augsburg ist bekannt für seinen Goldenen Saal." },
        { image: Attraction1, name: "Rathaus - Goldener Saal", description: "Der Goldene Saal im Rathaus Augsburg." }
      ],
      [
        { image: Attraction2, name: "Perlachturm", description: "Der Perlachturm bietet eine Aussicht über die Altstadt Augsburgs." },
        { image: Attraction3, name: "Perlachturm - Aussicht", description: "Die Aussicht vom Perlachturm." }
      ],
    ]
  },
  Wiesbaden: {
    background: getCityImage('Wiesbaden'),
    carousels: [
      [
        { image: Attraction1, name: "Kurhaus Wiesbaden", description: "Das Kurhaus Wiesbaden ist ein prächtiges Gebäude mit einem Casino." },
        { image: Attraction2, name: "Kurhaus - Casino", description: "Das Casino im Kurhaus Wiesbaden." }
      ],
      [
        { image: Attraction3, name: "Neroberg", description: "Der Neroberg bietet eine Aussicht auf Wiesbaden und einen historischen Tempel." },
        { image: Attraction4, name: "Neroberg - Tempel", description: "Der Monopteros-Tempel auf dem Neroberg." }
      ],
      [
        { image: Attraction5, name: "Marktkirche", description: "Die Marktkirche ist eine neugotische Kirche und Wahrzeichen Wiesbadens." },
        { image: Attraction1, name: "Marktkirche - Innen", description: "Die Innenarchitektur der Marktkirche." }
      ],
      [
        { image: Attraction2, name: "Rheingau", description: "Die Region Rheingau ist bekannt für ihre Weinberge und Schlösser." },
        { image: Attraction3, name: "Rheingau - Weinberge", description: "Die malerischen Weinberge des Rheingaus." }
      ],
    ]
  },
  Erfurt: {
    background: getCityImage('Erfurt'),
    carousels: [
      [
        { image: Attraction1, name: "Erfurter Dom", description: "Der Erfurter Dom ist eine gotische Kathedrale auf dem Domberg." },
        { image: Attraction2, name: "Erfurter Dom - Innen", description: "Die Innenarchitektur des Erfurter Doms." }
      ],
      [
        { image: Attraction3, name: "Krämerbrücke", description: "Die Krämerbrücke ist eine bebaute Brücke mit Fachwerkhäusern." },
        { image: Attraction4, name: "Krämerbrücke - Nacht", description: "Die Krämerbrücke bei Nachtbeleuchtung." }
      ],
      [
        { image: Attraction5, name: "Zitadelle Petersberg", description: "Die Zitadelle Petersberg ist eine historische Festung mit Aussicht." },
        { image: Attraction1, name: "Zitadelle Petersberg - Innenhof", description: "Der Innenhof der Zitadelle Petersberg." }
      ],
      [
        { image: Attraction2, name: "Egapark", description: "Der Egapark ist ein großer Park mit Blumenbeeten und Ausstellungen." },
        { image: Attraction3, name: "Egapark - Blumen", description: "Die farbenfrohen Blumenbeete im Egapark." }
      ],
    ]
  },
  Default: {
    background: getCityImage('Default'),
    carousels: [
      [
        { image: Attraction1, name: "Sehenswürdigkeit 1", description: "Eine typische Sehenswürdigkeit in der Stadt." },
        { image: Attraction2, name: "Sehenswürdigkeit 1 - Alternativ", description: "Eine andere Ansicht der Sehenswürdigkeit." }
      ],
      [
        { image: Attraction3, name: "Sehenswürdigkeit 2", description: "Ein bekanntes Wahrzeichen der Stadt." },
        { image: Attraction4, name: "Sehenswürdigkeit 2 - Nacht", description: "Das Wahrzeichen bei Nacht." }
      ],
      [
        { image: Attraction5, name: "Sehenswürdigkeit 3", description: "Ein beliebter Ort für Touristen." },
        { image: Attraction1, name: "Sehenswürdigkeit 3 - Detail", description: "Ein Detailansicht der Sehenswürdigkeit." }
      ],
      [
        { image: Attraction2, name: "Sehenswürdigkeit 4", description: "Ein historischer Ort mit viel Charme." },
        { image: Attraction3, name: "Sehenswürdigkeit 4 - Innen", description: "Die Innenausstattung der Sehenswürdigkeit." }
      ],
    ]
  },
};