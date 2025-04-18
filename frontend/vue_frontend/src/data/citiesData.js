import BerlinImage from '@/assets/cities/berlin.jpeg';
import MunichImage from '@/assets/cities/munich.jpeg';
import HamburgImage from '@/assets/cities/hamburg.jpeg';
import CologneImage from '@/assets/cities/cologne.jpeg';
import FrankfurtImage from '@/assets/cities/frankfurt.jpeg';
import StuttgartImage from '@/assets/cities/stuttgart.jpeg';
import DusseldorfImage from '@/assets/cities/dusseldorf.jpeg';
import DresdenImage from '@/assets/cities/dresden.jpeg';
import LeipzigImage from '@/assets/cities/leipzig.jpeg';
import HannoverImage from '@/assets/cities/hannover.jpeg';
import NurembergImage from '@/assets/cities/nuremberg.jpeg';
import BremenImage from '@/assets/cities/bremen.jpeg';
import DortmundImage from '@/assets/cities/dortmund.jpeg';
import EssenImage from '@/assets/cities/essen.jpeg';
import BonnImage from '@/assets/cities/bonn.jpeg';
import MannheimImage from '@/assets/cities/mannheim.jpeg';
import KarlsruheImage from '@/assets/cities/karlsruhe.jpeg';
import FreiburgImage from '@/assets/cities/freiburg.jpeg';
import KielImage from '@/assets/cities/kiel.jpeg';
import RostockImage from '@/assets/cities/rostock.jpeg';
import MainzImage from '@/assets/cities/mainz.jpeg';
import SaarbruckenImage from '@/assets/cities/saarbrucken.jpeg';
import AugsburgImage from '@/assets/cities/augsburg.jpeg';
import WiesbadenImage from '@/assets/cities/wiesbaden.jpeg';
import ErfurtImage from '@/assets/cities/erfurt.jpeg';
import DefaultImage from '@/assets/cities/default.jpeg';
import Attraction1 from '@/assets/cities/attraction1.jpeg';
import Attraction2 from '@/assets/cities/attraction2.jpeg';
import Attraction3 from '@/assets/cities/attraction3.jpeg';
import Attraction4 from '@/assets/cities/attraction4.jpeg';
import Attraction5 from '@/assets/cities/attraction5.jpeg';

export const citiesList = [
  "Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dresden", "Leipzig", "Hannover",
  "Nuremberg", "Bremen", "Dortmund", "Essen", "Bonn", "Mannheim", "Karlsruhe", "Freiburg", "Kiel", "Rostock",
  "Mainz", "Saarbrücken", "Augsburg", "Wiesbaden", "Erfurt"
];

export const citiesData = {
  Berlin: {
    background: BerlinImage,
    carousels: [
      [
        { image: Attraction1, name: "Brandenburg Tor", description: "Das Brandenburg Tor ist ein historisches Wahrzeichen Berlins und ein Symbol der deutschen Einheit." },
        { image: Attraction2, name: "Brandenburg Tor - Nacht", description: "Das Brandenburg Tor bei Nacht, beleuchtet und beeindruckend." },
        { image: Attraction3, name: "Brandenburg Tor - Winter", description: "Das Brandenburg Tor im Winter, umgeben von Schnee." }
      ],
      [
        { image: Attraction4, name: "Reichstag", description: "Der Reichstag ist der Sitz des Deutschen Bundestags und bekannt für seine gläserne Kuppel." },
        { image: Attraction5, name: "Reichstag - Innenansicht", description: "Die beeindruckende Glaskuppel des Reichstags von innen." }
      ],
      [
        { image: Attraction1, name: "Fernsehturm", description: "Der Fernsehturm ist das höchste Bauwerk Deutschlands und bietet eine atemberaubende Aussicht über Berlin." },
        { image: Attraction2, name: "Fernsehturm - Aussicht", description: "Die spektakuläre Aussicht von der Spitze des Fernsehturms." }
      ],
      [
        { image: Attraction3, name: "Museumsinsel", description: "Die Museumsinsel beherbergt eine Sammlung weltberühmter Museen und ist UNESCO-Welterbe." },
        { image: Attraction4, name: "Museumsinsel - Pergamon", description: "Das Pergamonmuseum auf der Museumsinsel mit antiken Schätzen." }
      ],
    ]
  },
  Munich: {
    background: MunichImage,
    carousels: [
      [
        { image: Attraction1, name: "Marienplatz", description: "Der Marienplatz ist das Herz Münchens mit dem berühmten Glockenspiel im Neuen Rathaus." },
        { image: Attraction2, name: "Marienplatz - Weihnachtsmarkt", description: "Der Marienplatz während des traditionellen Weihnachtsmarkts." }
      ],
      [
        { image: Attraction3, name: "Nymphenburg Schloss", description: "Das Schloss Nymphenburg ist eine prächtige barocke Residenz mit wunderschönen Gärten." },
        { image: Attraction4, name: "Nymphenburg - Garten", description: "Die weitläufigen Gärten des Schlosses Nymphenburg." }
      ],
      [
        { image: Attraction5, name: "Englischer Garten", description: "Der Englische Garten ist einer der größten Stadtparks der Welt und ein beliebter Treffpunkt." },
        { image: Attraction1, name: "Englischer Garten - Surfer", description: "Die berühmte Surferwelle im Englischen Garten." }
      ],
      [
        { image: Attraction2, name: "Viktualienmarkt", description: "Der Viktualienmarkt ist ein traditioneller Markt mit frischen Lebensmitteln und bayerischen Spezialitäten." },
        { image: Attraction3, name: "Viktualienmarkt - Stände", description: "Bunte Marktstände auf dem Viktualienmarkt." }
      ],
    ]
  },
  Hamburg: {
    background: HamburgImage,
    carousels: [
      [
        { image: Attraction1, name: "Elbphilharmonie", description: "Die Elbphilharmonie ist ein modernes Konzerthaus an der Elbe mit einzigartiger Architektur." },
        { image: Attraction2, name: "Elbphilharmonie - Nacht", description: "Die Elbphilharmonie bei Nacht, mit beleuchteter Glasfassade." }
      ],
      [
        { image: Attraction3, name: "Speicherstadt", description: "Die Speicherstadt ist das größte zusammenhängende Lagerhausensemble der Welt und UNESCO-Welterbe." },
        { image: Attraction4, name: "Speicherstadt - Kanäle", description: "Die malerischen Kanäle der Speicherstadt." }
      ],
      [
        { image: Attraction5, name: "Reeperbahn", description: "Die Reeperbahn ist das berühmte Vergnügungsviertel Hamburgs mit zahlreichen Bars und Theatern." },
        { image: Attraction1, name: "Reeperbahn - Neonlichter", description: "Die neonbeleuchteten Straßen der Reeperbahn bei Nacht." }
      ],
      [
        { image: Attraction2, name: "St. Michaelis Kirche", description: "Die St. Michaelis Kirche, auch 'Michel' genannt, ist ein Wahrzeichen Hamburgs." },
        { image: Attraction3, name: "St. Michaelis - Aussicht", description: "Die Aussicht von der Plattform des Michel." }
      ],
    ]
  },
  Cologne: {
    background: CologneImage,
    carousels: [
      [
        { image: Attraction1, name: "Kölner Dom", description: "Der Kölner Dom ist eine gotische Kathedrale und das bekannteste Wahrzeichen Kölns." },
        { image: Attraction2, name: "Kölner Dom - Innen", description: "Die beeindruckende Innenarchitektur des Kölner Doms." }
      ],
      [
        { image: Attraction3, name: "Rheinpromenade", description: "Die Rheinpromenade bietet malerische Ausblicke auf den Rhein und die Altstadt." },
        { image: Attraction4, name: "Rheinpromenade - Sonnenuntergang", description: "Die Rheinpromenade bei einem malerischen Sonnenuntergang." }
      ],
      [
        { image: Attraction5, name: "Hohenzollernbrücke", description: "Die Hohenzollernbrücke ist bekannt für ihre Liebesschlösser und die Aussicht auf den Dom." },
        { image: Attraction1, name: "Hohenzollernbrücke - Schlösser", description: "Tausende Liebesschlösser an der Hohenzollernbrücke." }
      ],
      [
        { image: Attraction2, name: "Museum Ludwig", description: "Das Museum Ludwig beherbergt eine bedeutende Sammlung moderner Kunst." },
        { image: Attraction3, name: "Museum Ludwig - Ausstellung", description: "Eine Ausstellungshalle im Museum Ludwig." }
      ],
    ]
  },
  Frankfurt: {
    background: FrankfurtImage,
    carousels: [
      [
        { image: Attraction1, name: "Römer", description: "Der Römer ist das historische Rathaus Frankfurts mit seiner charakteristischen Treppengiebelfassade." },
        { image: Attraction2, name: "Römer - Innenhof", description: "Der malerische Innenhof des Römers." }
      ],
      [
        { image: Attraction3, name: "Main Tower", description: "Der Main Tower bietet eine spektakuläre Aussicht auf die Skyline Frankfurts." },
        { image: Attraction4, name: "Main Tower - Nacht", description: "Die beleuchtete Skyline vom Main Tower bei Nacht." }
      ],
      [
        { image: Attraction5, name: "Palmengarten", description: "Der Palmengarten ist ein botanischer Garten mit exotischen Pflanzen und Gewächshäusern." },
        { image: Attraction1, name: "Palmengarten - Tropenhaus", description: "Das Tropenhaus im Palmengarten." }
      ],
      [
        { image: Attraction2, name: "Städel Museum", description: "Das Städel Museum zeigt eine beeindruckende Sammlung europäischer Kunst." },
        { image: Attraction3, name: "Städel - Galerie", description: "Eine Galeriehalle im Städel Museum." }
      ],
    ]
  },
  Stuttgart: {
    background: StuttgartImage,
    carousels: [
      [
        { image: Attraction1, name: "Schlossplatz", description: "Der Schlossplatz ist der zentrale Platz Stuttgarts mit dem Neuen Schloss." },
        { image: Attraction2, name: "Schlossplatz - Fontäne", description: "Die Fontäne auf dem Schlossplatz bei Sonnenuntergang." }
      ],
      [
        { image: Attraction3, name: "Mercedes-Benz Museum", description: "Das Mercedes-Benz Museum zeigt die Geschichte des Automobilherstellers." },
        { image: Attraction4, name: "Mercedes-Benz - Ausstellung", description: "Eine Ausstellungshalle im Mercedes-Benz Museum." }
      ],
      [
        { image: Attraction5, name: "Porsche Museum", description: "Das Porsche Museum widmet sich der Geschichte der Sportwagenmarke Porsche." },
        { image: Attraction1, name: "Porsche - Klassiker", description: "Klassische Porsche-Modelle im Museum." }
      ],
      [
        { image: Attraction2, name: "Wilhelma", description: "Die Wilhelma ist ein zoologisch-botanischer Garten mit einer Vielzahl von Tieren und Pflanzen." },
        { image: Attraction3, name: "Wilhelma - Aquarium", description: "Das Aquarium in der Wilhelma." }
      ],
    ]
  },
  Düsseldorf: {
    background: DusseldorfImage,
    carousels: [
      [
        { image: Attraction1, name: "Rheinturm", description: "Der Rheinturm ist das höchste Bauwerk Düsseldorfs mit einer Aussichtsplattform." },
        { image: Attraction2, name: "Rheinturm - Aussicht", description: "Die Aussicht von der Spitze des Rheinturms." }
      ],
      [
        { image: Attraction3, name: "Altstadt", description: "Die Düsseldorfer Altstadt ist bekannt als die 'längste Theke der Welt'." },
        { image: Attraction4, name: "Altstadt - Gassen", description: "Die charmanten Gassen der Düsseldorfer Altstadt." }
      ],
      [
        { image: Attraction5, name: "Königsallee", description: "Die Königsallee ist eine luxuriöse Einkaufsstraße mit exklusiven Boutiquen." },
        { image: Attraction1, name: "Königsallee - Kanal", description: "Der malerische Kanal entlang der Königsallee." }
      ],
      [
        { image: Attraction2, name: "Schlossturm", description: "Der Schlossturm ist das letzte Überbleibsel des ehemaligen Düsseldorfer Schlosses." },
        { image: Attraction3, name: "Schlossturm - Rhein", description: "Der Schlossturm mit Blick auf den Rhein." }
      ],
    ]
  },
  Dresden: {
    background: DresdenImage,
    carousels: [
      [
        { image: Attraction1, name: "Frauenkirche", description: "Die Frauenkirche ist eine barocke Kirche und ein Wahrzeichen Dresdens." },
        { image: Attraction2, name: "Frauenkirche - Kuppel", description: "Die beeindruckende Kuppel der Frauenkirche von innen." }
      ],
      [
        { image: Attraction3, name: "Semperoper", description: "Die Semperoper ist eines der bekanntesten Opernhäuser Deutschlands." },
        { image: Attraction4, name: "Semperoper - Innen", description: "Die prachtvolle Innenausstattung der Semperoper." }
      ],
      [
        { image: Attraction5, name: "Zwinger", description: "Der Zwinger ist ein barockes Schloss mit Museen und einem schönen Innenhof." },
        { image: Attraction1, name: "Zwinger - Innenhof", description: "Der malerische Innenhof des Zwingers." }
      ],
      [
        { image: Attraction2, name: "Residenzschloss", description: "Das Residenzschloss beherbergt mehrere Museen, darunter das Historische Grüne Gewölbe." },
        { image: Attraction3, name: "Residenzschloss - Gewölbe", description: "Das Historische Grüne Gewölbe im Residenzschloss." }
      ],
    ]
  },
  Leipzig: {
    background: LeipzigImage,
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
    background: HannoverImage,
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
    background: NurembergImage,
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
    background: BremenImage,
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
    background: DortmundImage,
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
    background: EssenImage,
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
    background: BonnImage,
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
    background: MannheimImage,
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
    background: KarlsruheImage,
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
    background: FreiburgImage,
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
    background: KielImage,
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
    background: RostockImage,
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
    background: MainzImage,
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
    background: SaarbruckenImage,
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
    background: AugsburgImage,
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
    background: WiesbadenImage,
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
    background: ErfurtImage,
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
    background: DefaultImage,
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