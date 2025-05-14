import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    navbar: {
      home: 'Home',
      login: 'Log In',
      register: 'Register',
      logout: 'Log Out',
      humidity: 'Humidity',
      wind: 'Wind',
      routeMap: "Where to?",
      weatherLoading: 'Weather is loading...'
    },
    routemap: {
    title: "Find Your Route",
    from: "From",
    to: "To",
    fromPlaceholder: "Enter starting station",
    toPlaceholder: "Enter destination station",
    search: "Show Route",
    routeInfo: "Route Details",
    trainNumber: "Train Number",
    stations: "Stations",
    invalidSelection: "Please select valid stations",
    errorFetching: "Error fetching route",
    errorLoadingStations: "Error loading stations",
    errorLoadingCoordinates: "Error loading coordinates"
  },
    home: {
      slogan: 'Book your train tickets, plan your trip',
      search: 'Search',
      from: 'From (e.g., Köln Hbf)',
      to: 'To (e.g., Aachen Hbf)',
      popularCities: 'Popular Cities in Germany',
      noTrains: 'No trains found for this route.',
      availableTrains: 'Available Trains',
      trainNumber: 'Train Number',
      trainType: 'Train Type',
      departure: 'Departure',
      arrival: 'Arrival',
      plannedDeparture: 'Planned Departure',
      plannedArrival: 'Planned Arrival',
      delay: 'Delay (Min)',
      error: 'Error',
      availableRoutes: "Available Routes",
      route: "Route",
      fromStation: "From Station",
      toStation: "To Station",
      date: "Date",
      noRoutes: "No routes found",
      start: "Start",
      goal: "Goal",
      details: "Details",
      hideDetails:"Hide details",
      loading:"Please wait",
      showAlternative:"Alternative",
      alternativeRoute:"Alternative Route",
      hideAlternative:"Hide Alternative",
      missingFields:"Missing Fields!"
    },
    city: {
      hide: 'Hide',
      show: 'Show',
      welcome: 'Welcome to {city}',
      close: 'Close',
      sights: 'Sights',
      viewMore: 'View More'
    },
    weather: {
      temperature: 'Temperature',
      feelsLike: 'Feels Like',
      description: 'Weather Description',
      error: 'Unable to fetch weather data'
    },
    cities: {
      Berlin: 'Berlin',
      Munich: 'Munich',
      Hamburg: 'Hamburg',
      Cologne: 'Cologne',
      Frankfurt: 'Frankfurt',
      Stuttgart: 'Stuttgart',
      Düsseldorf: 'Düsseldorf',
      Dresden: 'Dresden',
      Leipzig: 'Leipzig',
      Hannover: 'Hannover',
      Nuremberg: 'Nuremberg',
      Bremen: 'Bremen',
      Dortmund: 'Dortmund',
      Essen: 'Essen',
      Bonn: 'Bonn',
      Mannheim: 'Mannheim',
      Karlsruhe: 'Karlsruhe',
      Freiburg: 'Freiburg',
      Kiel: 'Kiel',
      Rostock: 'Rostock',
      Mainz: 'Mainz',
      Saarbrücken: 'Saarbrücken',
      Augsburg: 'Augsburg',
      Wiesbaden: 'Wiesbaden',
      Erfurt: 'Erfurt',
      Heidelberg: 'Heidelberg'
    },
    sights: {
      berlin: {
        brandenburg_tor: 'Brandenburg Gate',
        brandenburg_tor_desc: 'The Brandenburg Gate is an iconic neoclassical monument in Berlin, symbolizing peace and unity. Built in the late 18th century, it once marked the start of the road from Berlin to Brandenburg an der Havel. It was a significant site during the Cold War, standing at the border between East and West Berlin. Today, it is a popular tourist attraction and a venue for major public events. Visitors can enjoy its impressive architecture and explore nearby historical sites.',
        reichstag: 'Reichstag',
        reichstag_desc: 'The Reichstag is the seat of the German parliament and a historic landmark in Berlin. Its glass dome, designed by Norman Foster, offers panoramic views of the city. The building has witnessed key moments in German history, including its burning in 1933 and its restoration after reunification. Visitors can book tours to learn about its political significance and architectural beauty. It’s a must-visit for those interested in history and governance.',
        fernsehturm: 'TV Tower',
        fernsehturm_desc: 'The Berlin TV Tower, or Fernsehturm, is the tallest structure in Germany, standing at 368 meters. Located in Alexanderplatz, it was built in the 1960s by the German Democratic Republic to showcase technological prowess. The observation deck provides stunning views of Berlin’s skyline, and the revolving restaurant offers a unique dining experience. It’s a beloved symbol of the city, attracting millions of visitors annually. The tower is especially striking when illuminated at night.',
        museumsinsel: 'Museum Island',
        museumsinsel_desc: 'Museum Island is a UNESCO World Heritage Site in Berlin, home to five world-renowned museums. Located on the Spree River, it includes the Pergamon Museum, the Altes Museum, and the Neues Museum, among others. The island showcases art and artifacts from ancient civilizations to modern times. Its stunning architecture and cultural significance make it a top destination for art lovers. Visitors can spend hours exploring its vast collections and beautiful surroundings.'
      },
      munich: {
        marienplatz: 'Marienplatz',
        marienplatz_desc: 'Marienplatz is the central square in Munich, known for its lively atmosphere and historic buildings. The New Town Hall, with its famous Glockenspiel, is a highlight, entertaining visitors with daily performances. The square has been the heart of the city since the 12th century, hosting markets and festivals. Surrounded by shops and cafes, it’s a perfect spot to experience Bavarian culture. The nearby Frauenkirche is also worth a visit.',
        nymphenburg_schloss: 'Nymphenburg Palace',
        nymphenburg_schloss_desc: 'Nymphenburg Palace is a magnificent Baroque residence in Munich, once the summer home of Bavarian rulers. Its sprawling gardens, adorned with fountains and pavilions, are a delight to explore. The palace’s interior features opulent rooms, including the Hall of Mirrors. Visitors can also tour museums within the complex, such as the Carriage Museum. It’s a testament to Munich’s royal heritage and architectural grandeur.',
        englischer_garten: 'English Garden',
        englischer_garten_desc: 'The English Garden is one of the largest urban parks in the world, located in the heart of Munich. Spanning over 900 acres, it offers scenic paths, lakes, and even a surfing spot on the Eisbach river. The park is a favorite among locals for picnics, jogging, and relaxing. Visitors can enjoy beer gardens, like the one at the Chinese Tower, serving traditional Bavarian fare. It’s a green oasis perfect for a leisurely day out.',
        viktualienmarkt: 'Viktualienmarkt',
        viktualienmarkt_desc: 'Viktualienmarkt is Munich’s famous open-air market, offering fresh produce, flowers, and Bavarian specialties. Located near Marienplatz, it has been a staple since the early 19th century. The market is a vibrant hub where locals and tourists mingle, sampling cheeses, sausages, and pastries. Its beer garden is a great place to enjoy a refreshing drink. Visiting the market is a delicious way to experience Munich’s culinary culture.'
      },
      hamburg: {
        elbphilharmonie: 'Elbphilharmonie',
        elbphilharmonie_desc: 'The Elbphilharmonie is a stunning concert hall located on the Elbe River in Hamburg’s HafenCity. Its glass structure, resembling waves, has become an architectural icon since its opening in 2017. The venue hosts world-class performances, from classical to contemporary music. Visitors can explore the public plaza for panoramic views of the harbor. It’s a must-see for music lovers and architecture enthusiasts alike.',
        speicherstadt: 'Speicherstadt',
        speicherstadt_desc: 'Speicherstadt is the world’s largest contiguous warehouse district, a UNESCO World Heritage Site in Hamburg. Built in the late 19th century, its red-brick buildings are connected by canals and bridges. The district houses museums, cafes, and the Miniatur Wunderland, a massive model railway. Its unique architecture and waterways make it a photographer’s paradise. Visitors can take guided tours to learn about its maritime history.',
        reeperbahn: 'Reeperbahn',
        reeperbahn_desc: 'The Reeperbahn is Hamburg’s famous entertainment district, known as the “sinful mile” for its vibrant nightlife. Located in St. Pauli, it’s home to bars, clubs, theaters, and music venues, including the birthplace of The Beatles’ early performances. By day, it offers a more relaxed vibe with cafes and shops. The area is steeped in history and counterculture, attracting a diverse crowd. It’s a lively spot to experience Hamburg’s eclectic energy.',
        st_michaelis_kirche: 'St. Michaelis Church',
        st_michaelis_kirche_desc: 'St. Michaelis Church, or “Michel,” is Hamburg’s most iconic church, with its 132-meter tower dominating the skyline. Built in the Baroque style, it has been a landmark since the 17th century. Visitors can climb the tower or take an elevator for breathtaking views of the city and harbor. The church also hosts concerts and events, showcasing its excellent acoustics. It’s a symbol of Hamburg’s maritime and spiritual heritage.'
      },
      cologne: {
        kolner_dom: 'Cologne Cathedral',
        kolner_dom_desc: 'Cologne Cathedral is a masterpiece of Gothic architecture and a UNESCO World Heritage Site. Its twin spires, standing at 157 meters, are a defining feature of Cologne’s skyline. Construction began in the 13th century and took over 600 years to complete. The cathedral houses the Shrine of the Three Kings, a significant pilgrimage site. Visitors can climb the south tower for a rewarding view of the city.',
        rheinpromenade: 'Rhine Promenade',
        rheinpromenade_desc: 'The Rhine Promenade is a scenic walkway along the Rhine River in Cologne’s Old Town. It offers stunning views of the river, the Hohenzollern Bridge, and the cathedral. The promenade is lined with cafes, restaurants, and historic buildings, making it ideal for a leisurely stroll. It’s a popular spot for both locals and tourists, especially during festivals like Cologne Carnival. The area comes alive with vibrant energy year-round.',
        hohenzollernbrucke: 'Hohenzollern Bridge',
        hohenzollernbrucke_desc: 'The Hohenzollern Bridge is a famous railway and pedestrian bridge in Cologne, adorned with thousands of love locks. Spanning the Rhine, it connects the cathedral area with the modern KölnTriangle building. The bridge offers picturesque views, especially at sunset when the cathedral is illuminated. It’s a romantic spot for couples and a favorite for photographers. The structure is also a vital link for regional trains.',
        museum_ludwig: 'Museum Ludwig',
        museum_ludwig_desc: 'Museum Ludwig is a premier modern art museum in Cologne, located near the cathedral. It houses an extensive collection of 20th-century art, including works by Picasso, Warhol, and Lichtenstein. The museum’s sleek design complements its vibrant exhibitions, which also include photography and graphic art. It’s a cultural hub that attracts art enthusiasts from around the world. Visitors can enjoy temporary exhibitions alongside the permanent collection.'
      },
      frankfurt: {
        romer: 'Römer',
        romer_desc: 'The Römer is Frankfurt’s historic city hall, located in the Römerberg square since the 15th century. Its stepped gable facade is one of the city’s most recognizable landmarks. The Römer has hosted countless weddings and civic events, including imperial coronations in the past. Visitors can explore the Kaiser Hall, adorned with portraits of German emperors. The surrounding square is a lively spot with cafes and seasonal markets.',
        main_tower: 'Main Tower',
        main_tower_desc: 'Main Tower is a 200-meter skyscraper in Frankfurt, offering unparalleled views of the city’s skyline. Completed in 1999, it’s one of the few observation decks open to the public in Frankfurt. The tower’s sleek design reflects the city’s status as a financial hub. Visitors can enjoy cocktails at the rooftop restaurant while taking in the panorama. It’s a great spot to see Frankfurt’s blend of old and new architecture.',
        palmengarten: 'Palmengarten',
        palmengarten_desc: 'The Palmengarten is a 22-hectare botanical garden in Frankfurt, showcasing plants from around the world. Established in 1871, it features tropical greenhouses, rose gardens, and seasonal flower displays. The garden is a peaceful retreat in the bustling city, perfect for families and nature lovers. Visitors can attend concerts or guided tours to learn about exotic flora. Its serene lakes and paths make it a delightful escape.',
        stadel_museum: 'Städel Museum',
        stadel_museum_desc: 'The Städel Museum is one of Germany’s finest art museums, located along Frankfurt’s Museum Embankment. Its collection spans 700 years, featuring masterpieces by Rembrandt, Monet, and Picasso. The museum’s modern extension houses contemporary art, adding to its diverse offerings. It’s a cultural gem that draws art lovers with its engaging exhibitions. Guided tours and workshops make it accessible for all ages.'
      },
      stuttgart: {
        schlossplatz: 'Schlossplatz',
        schlossplatz_desc: 'Schlossplatz is the largest square in Stuttgart, centered around the New Palace, a Baroque masterpiece. The square is a vibrant public space, hosting concerts, markets, and festivals throughout the year. Its manicured gardens and fountains create a welcoming atmosphere for visitors. Surrounded by historic buildings, it’s a great starting point for exploring Stuttgart. The nearby Old Palace and art museum add to its cultural appeal.',
        mercedes_benz_museum: 'Mercedes-Benz Museum',
        mercedes_benz_museum_desc: 'The Mercedes-Benz Museum in Stuttgart chronicles the history of the iconic car manufacturer. Housed in a futuristic building, it features over 160 vehicles, from the first automobile to modern race cars. Interactive exhibits explore automotive innovation and design across 130 years. Visitors can follow a timeline that blends technology with cultural history. It’s a must-visit for car enthusiasts and curious travelers alike.',
        porsche_museum: 'Porsche Museum',
        porsche_museum_desc: 'The Porsche Museum in Stuttgart celebrates the legacy of the legendary sports car brand. Located in Zuffenhausen, it displays around 80 vehicles, including rare prototypes and classic models. The museum’s sleek architecture mirrors Porsche’s innovative spirit. Exhibits highlight the brand’s racing heritage and engineering milestones. Guided tours offer insights into Porsche’s impact on automotive culture.',
        wilhelma: 'Wilhelma',
        wilhelma_desc: 'Wilhelma is a zoological and botanical garden in Stuttgart, home to over 11,000 animals and 7,000 plant species. Originally built as a royal garden in the 19th century, it now attracts families and nature enthusiasts. The park features themed areas like the African savanna and an aquarium with coral reefs. Its historic Moorish-style architecture adds a unique charm. Visitors can enjoy educational programs and seasonal events.'
      },
      dusseldorf: {
        rheinturm: 'Rheinturm',
        rheinturm_desc: 'The Rheinturm is Düsseldorf’s tallest structure at 240.5 meters, offering breathtaking views of the city and the Rhine River. Completed in 1984, it serves as a telecommunications tower and a popular tourist attraction. The observation deck provides a 360-degree panorama, while the revolving restaurant is perfect for a scenic meal. Its modern design is a symbol of Düsseldorf’s progressive spirit. Nighttime visits showcase the city’s illuminated skyline.',
        altstadt: 'Altstadt',
        altstadt_desc: 'Düsseldorf’s Altstadt, or Old Town, is a charming historic district known as the “longest bar in the world” due to its numerous pubs and breweries. Its cobblestone streets are lined with 17th-century buildings, cafes, and shops. The area is a cultural hub, hosting festivals and art events year-round. Visitors can sample local Altbier and explore landmarks like the Marktplatz. It’s a vibrant spot to soak up Düsseldorf’s history and nightlife.',
        konigsallee: 'Königsallee',
        konigsallee_desc: 'Königsallee, or “Kö,” is Düsseldorf’s premier shopping boulevard, renowned for its luxury boutiques and designer stores. Flanked by a picturesque canal and chestnut trees, it’s a scenic spot for a stroll. The street attracts fashion enthusiasts and visitors seeking high-end dining. Its elegant atmosphere reflects Düsseldorf’s status as a cosmopolitan city. Seasonal events, like Christmas markets, add to its allure.',
        schlossturm: 'Schlossturm',
        schlossturm_desc: 'The Schlossturm is the last remaining part of Düsseldorf’s former castle, now housing the SchifffahrtMuseum. Located by the Rhine, it offers insights into the city’s maritime history with exhibits on shipping and trade. The tower’s historic architecture contrasts with the modern waterfront nearby. Visitors can enjoy views of the river from its surroundings. It’s a hidden gem for history buffs exploring Düsseldorf.'
      },
      dresden: {
        frauenkirche: 'Frauenkirche',
        frauenkirche_desc: 'The Frauenkirche is a stunning Baroque church in Dresden, rebuilt after its destruction in World War II. Its dome, known as the “Stone Bell,” is a symbol of peace and reconstruction. The interior features a magnificent organ and intricate frescoes. Visitors can climb the dome for panoramic views of the Elbe River and Old Town. The church hosts concerts, adding to its cultural significance.',
        semperoper: 'Semperoper',
        semperoper_desc: 'The Semperoper is Dresden’s world-famous opera house, renowned for its Neo-Renaissance architecture. Named after architect Gottfried Semper, it has hosted premieres of operas by Wagner and Strauss. The opulent interior, with chandeliers and gilded details, is a sight to behold. Guided tours offer a glimpse into its rich history and acoustics. It’s a must-visit for music lovers and architecture enthusiasts.',
        zwinger: 'Zwinger',
        zwinger_desc: 'The Zwinger is a Baroque palace complex in Dresden, known for its ornate courtyards and museums. Built in the 18th century, it houses collections like the Dresden Porcelain Collection and the Old Masters Gallery. Its Crown Gate is an architectural masterpiece, attracting photographers. The gardens are perfect for a leisurely stroll. Visitors can explore its cultural treasures and historic charm.',
        residenzschloss: 'Residenzschloss',
        residenzschloss_desc: 'The Residenzschloss is Dresden’s former royal palace, now a museum complex showcasing art and history. Its Green Vault displays exquisite treasures, including Baroque jewelry and goldwork. The palace’s architecture blends Renaissance and Baroque styles, reflecting centuries of Saxon rule. Visitors can explore exhibits on Dresden’s royal past and cultural heritage. The restored interiors make it a highlight of the city.'
      },
      leipzig: {
        nikolaikirche: 'Nikolai Church',
        nikolaikirche_desc: 'The Nikolaikirche is a historic church in Leipzig, pivotal in the 1989 Peaceful Revolution. Its Gothic and Baroque architecture includes a striking columned interior. The church hosts concerts and organ recitals, showcasing its excellent acoustics. Weekly peace prayers continue its legacy of social activism. Visitors can learn about its role in German history through guided tours.',
        volkerschlachtdenkmal: 'Völkerschlachtdenkmal',
        volkerschlachtdenkmal_desc: 'The Völkerschlachtdenkmal is a monumental memorial in Leipzig, commemorating the 1813 Battle of Leipzig. Standing at 91 meters, it’s one of Europe’s largest monuments, with a viewing platform offering city views. The structure’s imposing design reflects the era’s nationalist spirit. Visitors can explore its museum to learn about the Napoleonic Wars. It’s a powerful symbol of Leipzig’s historical significance.',
        gewandhaus: 'Gewandhaus',
        gewandhaus_desc: 'The Gewandhaus is Leipzig’s premier concert hall, home to the renowned Gewandhaus Orchestra. Its modern building, opened in 1981, boasts exceptional acoustics and sleek design. The venue hosts classical music performances, from Beethoven to contemporary composers. Visitors can attend concerts or take guided tours to explore its history. It’s a cultural cornerstone of Leipzig’s vibrant music scene.',
        zoo_leipzig: 'Zoo Leipzig',
        zoo_leipzig_desc: 'Zoo Leipzig is one of Germany’s most modern zoos, famous for its immersive habitats like Gondwanaland. Spanning 26 hectares, it houses over 850 animal species, from tigers to penguins. The zoo emphasizes conservation and education, offering interactive exhibits for families. Its tropical rainforest dome is a visitor favorite. It’s a perfect destination for nature lovers and children.'
      },
      hannover: {
        neues_rathaus: 'New Town Hall',
        neues_rathaus_desc: 'The New Town Hall in Hannover is an architectural gem, built in the early 20th century with an eclectic design. Its 98-meter dome offers sweeping views of the city and surrounding countryside. The building’s interior features detailed frescoes depicting Hannover’s history. Visitors can take a unique arched elevator to the dome for a memorable experience. It’s a symbol of the city’s civic pride.',
        herrenhauser_garten: 'Herrenhausen Gardens',
        herrenhauser_garten_desc: 'The Herrenhausen Gardens are a Baroque masterpiece in Hannover, comprising four distinct gardens. The Great Garden, with its fountains and maze, is the centerpiece, reflecting 17th-century royal splendor. The gardens host festivals, fireworks, and theater performances in summer. Visitors can explore the Grotto, designed by Niki de Saint Phalle, for a modern touch. It’s a serene escape in the city.',
        maschsee: 'Maschsee',
        maschsee_desc: 'The Maschsee is a large artificial lake in Hannover, popular for sailing, rowing, and lakeside strolls. Created in the 1930s, it spans 78 hectares and is a hub for outdoor activities. The lake’s promenade is lined with cafes and event spaces, hosting festivals like Maschsee Lake Festival. Visitors can rent boats or bikes to explore its scenic shores. It’s a lively spot for relaxation and recreation.',
        sprengel_museum: 'Sprengel Museum',
        sprengel_museum_desc: 'The Sprengel Museum in Hannover is a leading museum of modern art, featuring works by Picasso, Klee, and Nolde. Its collection spans Expressionism to contemporary art, housed in a striking modernist building. The museum hosts temporary exhibitions and educational programs for all ages. Visitors can enjoy its sculpture garden and cafe. It’s a cultural highlight for art enthusiasts visiting Hannover.'
      },
      nuremberg: {
        kaiserburg: 'Kaiserburg',
        kaiserburg_desc: 'Kaiserburg is Nuremberg’s medieval castle, perched above the Old Town with commanding views. Built in the 11th century, it served as a residence for Holy Roman Emperors. The castle’s museum showcases medieval life and weaponry. Visitors can explore its towers, courtyards, and the Deep Well, a marvel of engineering. It’s a key stop for understanding Nuremberg’s imperial past.',
        hauptmarkt: 'Hauptmarkt',
        hauptmarkt_desc: 'The Hauptmarkt is Nuremberg’s bustling central square, famous for its Christmas Market and the Schöner Brunnen fountain. Surrounded by historic buildings, it’s a vibrant hub for shopping and dining. The square hosts daily markets selling fresh produce and local crafts. Visitors can admire the nearby Frauenkirche’s clock performance. It’s the heart of Nuremberg’s cultural and social life.',
        dokumentationszentrum: 'Documentation Center',
        dokumentationszentrum_desc: 'The Documentation Center in Nuremberg is a museum within the former Nazi Party Rally Grounds, exploring the history of the Third Reich. Its exhibits detail the rise and fall of National Socialism with powerful displays and artifacts. The center’s modern architecture contrasts with its somber subject matter. Visitors can take guided tours for deeper insights. It’s an essential visit for understanding 20th-century history.',
        st_lorenz_kirche: 'St. Lorenz Church',
        st_lorenz_kirche_desc: 'St. Lorenz Church is a Gothic masterpiece in Nuremberg, known for its intricate stonework and stained glass. Built in the 14th century, it houses treasures like the Angelic Salutation sculpture. The church’s twin towers are a landmark of the Old Town skyline. Visitors can attend organ concerts or explore its historical artifacts. It’s a serene space reflecting Nuremberg’s medieval heritage.'
      },
      bremen: {
        bremer_stadtmusikanten: 'Bremen Town Musicians',
        bremer_stadtmusikanten_desc: 'The Bremen Town Musicians is a beloved bronze statue inspired by the Grimm Brothers’ fairy tale, located near Bremen’s Town Hall. Erected in 1951, it depicts a donkey, dog, cat, and rooster stacked atop each other. The statue is a popular photo spot, with visitors touching the donkey’s hooves for luck. It symbolizes Bremen’s playful spirit and storytelling tradition. The nearby Town Hall enhances its historic charm.',
        rathaus: 'Town Hall',
        rathaus_desc: 'Bremen’s Town Hall is a UNESCO World Heritage Site, renowned for its Weser Renaissance facade. Built in the 15th century, it features intricate gables and statues of emperors. The Upper Hall and Golden Chamber are highlights, showcasing opulent interiors. Visitors can join guided tours to explore its history and cellars, home to the Ratskeller restaurant. It’s a cornerstone of Bremen’s civic and cultural identity.',
        schnoorviertel: 'Schnoorviertel',
        schnoorviertel_desc: 'Schnoorviertel is Bremen’s oldest district, with narrow cobblestone streets and 15th-century houses. Once a fishermen’s quarter, it’s now a vibrant area with boutiques, cafes, and galleries. The neighborhood’s fairy-tale charm makes it a favorite for photographers. Visitors can explore hidden courtyards and artisan shops. It’s a delightful way to experience Bremen’s historic character.',
        rolandstatue: 'Roland Statue',
        rolandstatue_desc: 'The Roland Statue in Bremen’s market square is a UNESCO-listed symbol of the city’s independence. Erected in 1404, the 5.5-meter statue depicts a knight representing freedom and trade rights. Its intricate details and historical significance draw history enthusiasts. Visitors can admire it alongside the nearby Town Hall. The statue is a proud emblem of Bremen’s medieval legacy.'
      },
      dortmund: {
        westfalenpark: 'Westfalenpark',
        westfalenpark_desc: 'Westfalenpark is a sprawling green space in Dortmund, known for its floral displays and the Florianturm, Germany’s tallest tower. The park hosts festivals, concerts, and the annual rose show, attracting nature lovers. Its lakes, playgrounds, and cable car make it family-friendly. Visitors can relax in themed gardens or enjoy panoramic views from the tower. It’s a tranquil retreat in the industrial city.',
        deutsches_fussballmuseum: 'German Football Museum',
        deutsches_fussballmuseum_desc: 'The German Football Museum in Dortmund celebrates the history of German soccer, from World Cup triumphs to grassroots clubs. Interactive exhibits include memorabilia, virtual games, and a replica of the 1954 World Cup trophy. The museum appeals to fans of all ages with its immersive displays. Located near the central station, it’s easily accessible. It’s a must for sports enthusiasts visiting Dortmund.',
        u_turm: 'U-Turm',
        u_turm_desc: 'The U-Turm is a former brewery tower in Dortmund, now a cultural center for art and creativity. Its distinctive “U” shape makes it a city landmark, hosting exhibitions, concerts, and film screenings. The top floor houses the Museum Ostwall, showcasing modern art. Visitors can enjoy panoramic views from its rooftop terrace. It’s a vibrant hub for Dortmund’s cultural scene.',
        reinoldikirche: 'Reinoldikirche',
        reinoldikirche_desc: 'Reinoldikirche is Dortmund’s oldest church, dedicated to the city’s patron saint, Reinold. Its Gothic tower, rebuilt after World War II, offers views of the city center. The church’s interior features medieval artifacts and a historic organ. Visitors can attend services or concerts to experience its spiritual ambiance. It’s a quiet oasis amid Dortmund’s bustling streets.'
      },
      essen: {
        zeche_zollverein: 'Zeche Zollverein',
        zeche_zollverein_desc: 'Zeche Zollverein is a UNESCO World Heritage Site in Essen, a former coal mine turned cultural complex. Its Bauhaus-inspired architecture is a testament to the Ruhr region’s industrial past. The site hosts museums, art galleries, and events like the Red Dot Design Museum. Visitors can take guided tours to explore its machinery and history. It’s a striking blend of industry and culture.',
        grugapark: 'Grugapark',
        grugapark_desc: 'Grugapark is a lush urban park in Essen, offering gardens, sculptures, and a small train for families. Established for a 1929 horticultural show, it features themed areas like the Japanese Garden. The park hosts concerts and seasonal events, creating a lively atmosphere. Visitors can relax by its ponds or explore the botanical house. It’s a green haven in the heart of Essen.',
        museum_folkwang: 'Museum Folkwang',
        museum_folkwang_desc: 'Museum Folkwang in Essen is a renowned art museum, showcasing modern and classical works by Van Gogh, Cézanne, and more. Its sleek building, designed by David Chipperfield, enhances the viewing experience. The museum’s photography collection is particularly notable, attracting global visitors. Temporary exhibitions keep the offerings fresh and engaging. It’s a cultural highlight for art lovers in the Ruhr region.',
        alfried_krupp_stiftung: 'Alfried Krupp von Bohlen und Halbach Foundation',
        alfried_krupp_stiftung_desc: 'The Alfried Krupp von Bohlen und Halbach Foundation in Essen supports cultural and scientific projects, reflecting the Krupp family’s industrial legacy. Its headquarters are near the Villa Hügel, a historic mansion open to visitors. The foundation funds exhibitions and events, enriching Essen’s cultural scene. Visitors can explore the villa’s opulent rooms and park. It’s a window into Essen’s industrial and philanthropic history.'
      },
      bonn: {
        beethoven_haus: 'Beethoven House',
        beethoven_haus_desc: 'The Beethoven House in Bonn is the birthplace of composer Ludwig van Beethoven, now a museum dedicated to his life. Exhibits include original manuscripts, instruments, and personal items, offering insights into his genius. The museum hosts concerts and lectures, celebrating Beethoven’s legacy. Visitors can explore the historic house and its serene courtyard. It’s a pilgrimage site for music lovers worldwide.',
        alter_zoll: 'Alter Zoll',
        alter_zoll_desc: 'Alter Zoll is a historic fortress in Bonn, offering panoramic views of the Rhine and Siebengebirge hills. Built in the 17th century, its star-shaped walls are a remnant of Bonn’s defenses. The site is a popular spot for picnics and sunset views. Visitors can learn about its military history through informational plaques. It’s a peaceful retreat with a rich past.',
        botanischer_garten: 'Botanical Garden',
        botanischer_garten_desc: 'The Botanical Garden in Bonn, part of the University of Bonn, houses over 8,000 plant species across 6 hectares. Its greenhouses feature tropical and desert plants, including rare orchids. The garden is a hub for research and education, with guided tours available. Visitors can wander through its themed sections, like the medicinal plant area. It’s a serene escape for nature enthusiasts.',
        rathaus: 'Town Hall',
        rathaus_desc: 'Bonn’s Town Hall is a Rococo masterpiece, built in the 18th century with an elegant pink and white facade. Its golden staircase has welcomed dignitaries, including JFK and Queen Elizabeth II. The building is still used for civic events and weddings, adding to its charm. Visitors can admire its architecture from the market square. It’s a symbol of Bonn’s historical significance as a former capital.'
      },
      mannheim: {
        wasserturm: 'Water Tower',
        wasserturm_desc: 'The Mannheim Water Tower is an iconic landmark, standing proudly in Friedrichsplatz. Built in 1886, this neo-Baroque structure is surrounded by beautifully landscaped gardens and fountains. It serves as a symbol of the city’s industrial heritage and is a popular meeting point for locals and tourists. Visitors can enjoy its picturesque setting, especially during evening illuminations. The tower is a must-see for its architectural elegance and historical significance.',
        schloss_mannheim: 'Mannheim Palace',
        schloss_mannheim_desc: 'Mannheim Palace is one of the largest Baroque palaces in Germany, once home to the Electors Palatine. Its grand facade and opulent interiors, including the Knights’ Hall, reflect 18th-century splendor. The palace now houses parts of the University of Mannheim and a museum showcasing its history. Visitors can explore its restored rooms and sprawling courtyard. It’s a testament to Mannheim’s royal past and architectural grandeur.',
        luisenpark: 'Luisenpark',
        luisenpark_desc: 'Luisenpark is a 41-hectare urban park in Mannheim, renowned for its diverse gardens and serene lake. Highlights include the Chinese Garden, butterfly house, and a small train for families. The park hosts concerts and festivals, creating a vibrant atmosphere year-round. Visitors can relax by the water or explore its themed areas, like the rose garden. It’s a green oasis perfect for nature lovers and leisurely strolls.',
        jesuitenkirche: 'Jesuit Church',
        jesuitenkirche_desc: 'The Jesuit Church in Mannheim is a Baroque masterpiece, known for its ornate interior and striking frescoes. Built in the 18th century, it served as a court church for the Electors Palatine. The church’s acoustics make it a popular venue for concerts and organ recitals. Visitors can admire its detailed altars and sculptures, reflecting Mannheim’s religious heritage. It’s a serene spot for history and architecture enthusiasts.'
      },
      karlsruhe: {
        schloss_karlsruhe: 'Karlsruhe Palace',
        schloss_karlsruhe_desc: 'Karlsruhe Palace is a Baroque masterpiece, serving as the city’s architectural centerpiece. Built in 1715 for Margrave Charles III William, it now houses the Baden State Museum. The palace’s fan-shaped layout influenced the city’s unique radial street design. Visitors can explore its historical exhibits and enjoy views from the tower. The surrounding gardens are perfect for a relaxing stroll.',
        zkm: 'ZKM | Center for Art and Media',
        zkm_desc: 'The ZKM in Karlsruhe is a pioneering museum for digital and media art, housed in a former munitions factory. It features interactive installations, virtual reality exhibits, and contemporary artworks. The center also hosts performances and workshops, pushing the boundaries of art and technology. Visitors can engage with cutting-edge creativity in a dynamic setting. It’s a must-visit for those interested in modern art and innovation.',
        gunther_klotz_anlage: 'Günther-Klotz-Anlage',
        gunther_klotz_anlage_desc: 'Günther-Klotz-Anlage is a popular park in Karlsruhe, offering green spaces, playgrounds, and a small lake. Named after a former mayor, it’s a favorite for families and outdoor enthusiasts. The park hosts events like open-air concerts and flea markets, creating a lively community vibe. Visitors can enjoy cycling paths or relax under shady trees. It’s a welcoming spot for recreation and relaxation.',
        kunsthalle: 'Staatliche Kunsthalle',
        kunsthalle_desc: 'The Staatliche Kunsthalle in Karlsruhe is an art museum showcasing European masterpieces from the Middle Ages to the present. Its collection includes works by Dürer, Monet, and Kirchner, housed in a neoclassical building. The museum offers guided tours and workshops, making art accessible to all. Visitors can admire its sculpture garden and temporary exhibitions. It’s a cultural gem for art lovers visiting Karlsruhe.'
      },
      freiburg: {
        freiburger_munster: 'Freiburg Minster',
        freiburger_munster_desc: 'Freiburg Minster is a Gothic cathedral, renowned for its intricate spire and vibrant stained glass. Built over three centuries, it’s a symbol of Freiburg’s medieval heritage. The tower offers panoramic views of the Black Forest and the city’s red rooftops. Visitors can explore its ornate interiors, including the high altar. The cathedral’s plaza hosts a daily market, adding to its lively atmosphere.',
        schwabentor: 'Schwabentor',
        schwabentor_desc: 'Schwabentor is one of Freiburg’s two surviving medieval city gates, built in the 13th century. Its tower features a painted mural and offers views of the Old Town. The gate is a reminder of Freiburg’s fortified past and a popular photo spot. Visitors can walk through its arch to explore nearby cobblestone streets. It’s a charming piece of the city’s history.',
        augustiner_museum: 'Augustiner Museum',
        augustiner_museum_desc: 'The Augustiner Museum in Freiburg showcases art and history from the Middle Ages to the Baroque era. Housed in a former monastery, it features sculptures, paintings, and regional artifacts. The museum’s serene courtyard and Gothic architecture enhance the experience. Visitors can explore exhibits on Freiburg’s cultural heritage. It’s a cultural highlight for those interested in the city’s past.',
        bachle: 'Bächle',
        bachle_desc: 'The Bächle are small water channels running through Freiburg’s Old Town, a unique feature since the Middle Ages. Originally used for irrigation and firefighting, they now add charm to the city’s streets. Locals say stepping into a Bächle means you’ll return to Freiburg—or marry a local! Visitors can follow their paths while exploring shops and cafes. They’re a delightful symbol of Freiburg’s character.'
      },
      kiel: {
        kieler_forde: 'Kiel Fjord',
        kieler_forde_desc: 'Kiel Fjord is a scenic inlet of the Baltic Sea, shaping Kiel’s maritime identity. It’s a hub for sailing, with events like Kiel Week, the world’s largest sailing festival. The fjord’s promenade offers stunning views and is lined with cafes and museums. Visitors can take boat tours to explore its waters and nearby lighthouses. It’s a vibrant spot for nature and nautical enthusiasts.',
        rathaus_kiel: 'Kiel Town Hall',
        rathaus_kiel_desc: 'Kiel Town Hall is a striking Art Nouveau building, known for its 106-meter tower resembling Venice’s Campanile. Built in 1911, it’s a symbol of the city’s maritime and civic pride. The tower’s observation deck offers panoramic views of the fjord and city. Visitors can explore its historic interiors during guided tours. It’s a must-see for its architectural beauty and historical significance.',
        schifffahrtsmuseum: 'Maritime Museum',
        schifffahrtsmuseum_desc: 'The Maritime Museum in Kiel explores the city’s seafaring history, housed in a former fish market by the fjord. Exhibits include ship models, navigation tools, and stories of Kiel’s shipbuilding past. The museum’s waterfront location adds to its nautical charm. Visitors can learn about the region’s role in maritime trade and exploration. It’s a fascinating stop for history and sea lovers.',
        holtenauer_schleuse: 'Holtenau Lock',
        holtenauer_schleuse_desc: 'The Holtenau Lock is part of the Kiel Canal, one of the world’s busiest artificial waterways, connecting the North Sea to the Baltic. Built in 1895, it’s an engineering marvel allowing ships to pass through different water levels. Visitors can watch massive vessels navigate the lock from viewing platforms. Informational displays explain its global trade significance. It’s a unique attraction for those interested in maritime engineering.'
      },
      rostock: {
        warnemunder_leuchtturm: 'Warnemünde Lighthouse',
        warnemunder_leuchtturm_desc: 'The Warnemünde Lighthouse in Rostock is a 37-meter beacon guiding ships along the Baltic coast. Built in 1898, it’s a beloved symbol of the seaside district, offering views of the harbor and beach. Visitors can climb its spiral staircase in summer for panoramic vistas. The lighthouse is a focal point during Hanse Sail, Rostock’s maritime festival. It’s a picturesque spot for coastal charm.',
        rostocker_rathaus: 'Rostock Town Hall',
        rostocker_rathaus_desc: 'Rostock Town Hall is a Gothic and Baroque landmark in the city’s historic center, dating back to the 13th century. Its ornate facade features seven spires and a historic clock. The interior houses a museum showcasing Rostock’s Hanseatic past. Visitors can admire its architecture from the bustling market square. It’s a proud symbol of the city’s medieval trading legacy.',
        kropeliner_strasse: 'Kröpeliner Straße',
        kropeliner_strasse_desc: 'Kröpeliner Straße is Rostock’s vibrant pedestrian street, lined with historic gabled houses and modern shops. Leading to the Kröpeliner Tor, it’s a hub for shopping, dining, and people-watching. The street’s lively atmosphere reflects Rostock’s blend of past and present. Visitors can explore nearby cafes and the university, one of Europe’s oldest. It’s a perfect place to soak up the city’s energy.',
        st_marien: 'St. Marien Church',
        st_marien_desc: 'St. Marien Church is Rostock’s largest medieval church, known for its Gothic architecture and astronomical clock from 1472. The clock, still functional, displays zodiac signs and lunar phases. The church’s 85-meter tower offers views of the city and harbor. Visitors can attend organ concerts or explore its historic interiors. It’s a serene space reflecting Rostock’s spiritual and cultural heritage.'
      },
      mainz: {
        mainzer_dom: 'Mainz Cathedral',
        mainzer_dom_desc: 'Mainz Cathedral, or Mainzer Dom, is a Romanesque masterpiece, standing for over 1,000 years. Its red sandstone facade and six towers dominate the city’s skyline. The cathedral survived wars and fires, housing treasures like medieval tombs and stained glass. Visitors can explore its cloister and attend organ concerts. It’s a central symbol of Mainz’s religious and historical significance.',
        gutenberg_museum: 'Gutenberg Museum',
        gutenberg_museum_desc: 'The Gutenberg Museum in Mainz celebrates Johannes Gutenberg, the inventor of the printing press. Exhibits include original Gutenberg Bibles, historic presses, and early printed books. The museum offers printing demonstrations, bringing history to life for visitors. Its location near the cathedral adds to its cultural appeal. It’s a must-visit for those interested in the history of communication.',
        rheinpromenade: 'Rhine Promenade',
        rheinpromenade_desc: 'The Rhine Promenade in Mainz is a scenic walkway along the river, offering views of passing ships and the Taunus hills. Lined with cafes and benches, it’s a relaxing spot for locals and tourists. The promenade hosts festivals like Johannisnacht, celebrating Mainz’s heritage. Visitors can stroll to nearby landmarks like the Theodor Heuss Bridge. It’s a vibrant area to enjoy the Rhine’s beauty.',
        theater_mainz: 'Mainz State Theater',
        theater_mainz_desc: 'The Mainz State Theater is a neoclassical gem, hosting operas, plays, and ballets in an elegant setting. Built in 1829, its grand auditorium and ornate decor create a memorable experience. The theater’s diverse program appeals to culture enthusiasts of all ages. Visitors can take guided tours to explore its history and architecture. It’s a cultural cornerstone in Mainz’s vibrant arts scene.'
      },
      saarbrucken: {
        saarbrucker_schloss: 'Saarbrücken Palace',
        saarbrucker_schloss_desc: 'Saarbrücken Palace is a Baroque residence, rebuilt after World War II, showcasing elegant architecture. Once home to the Saarland princes, it now hosts cultural events and government offices. The palace’s white facade and manicured gardens are a highlight for visitors. Guided tours reveal its history and restored interiors. It’s a proud symbol of Saarbrücken’s heritage and resilience.',
        ludwigskirche: 'Ludwigskirche',
        ludwigskirche_desc: 'Ludwigskirche is a Baroque masterpiece in Saarbrücken, often called the “most beautiful Baroque church in Germany.” Built in 1775, its symmetrical design and pastel interior are breathtaking. The church hosts concerts, showcasing its superb acoustics. Visitors can admire its ornate altar and ceiling frescoes. It’s a serene spot reflecting the city’s architectural splendor.',
        saar: 'Saar River',
        saar_desc: 'The Saar River flows through Saarbrücken, shaping the city’s landscape and history. Its banks offer scenic paths for walking and cycling, with views of historic bridges. The river is a hub for boat tours and festivals, like the Saar Spectacle. Visitors can relax at riverside cafes or explore nearby parks. It’s a tranquil setting to experience Saarbrücken’s charm.',
        deutsch_franzosischer_garten: 'German-French Garden',
        deutsch_franzosischer_garten_desc: 'The German-French Garden in Saarbrücken is a symbol of cross-border friendship, blending German and French landscaping styles. Spanning 50 hectares, it features lakes, sculptures, and themed gardens. The park hosts concerts and family-friendly events, creating a lively atmosphere. Visitors can enjoy boat rides or relax in its serene spaces. It’s a peaceful retreat celebrating cultural unity.'
      },
      augsburg: {
        augsburger_dom: 'Augsburg Cathedral',
        augsburger_dom_desc: 'Augsburg Cathedral is a Romanesque and Gothic marvel, dating back to the 11th century. Its ancient stained glass, among the world’s oldest, depicts biblical scenes in vivid colors. The cathedral’s cloister and bronze door are highlights for visitors. It hosts concerts, enhancing its spiritual ambiance. It’s a key stop for exploring Augsburg’s rich religious history.',
        fuggerei: 'Fuggerei',
        fuggerei_desc: 'The Fuggerei in Augsburg is the world’s oldest social housing complex, founded in 1516 by Jakob Fugger. Still in use, it provides affordable homes for a symbolic rent of one guilder per year. The complex’s gated streets and quaint houses offer a glimpse into Renaissance life. Visitors can explore its museum and a preserved apartment. It’s a unique testament to Augsburg’s social and economic past.',
        rathaus_augsburg: 'Augsburg Town Hall',
        rathaus_augsburg_desc: 'Augsburg Town Hall is a Renaissance masterpiece, known for its Golden Hall, adorned with gold leaf and frescoes. Built in 1620, it’s a symbol of the city’s wealth during the Holy Roman Empire. The building’s facade and clock tower are iconic landmarks. Visitors can tour its opulent interiors and learn about Augsburg’s civic history. It’s a highlight of the city’s architectural heritage.',
        perlachturm: 'Perlachturm',
        perlachturm_desc: 'Perlachturm is a 70-meter medieval tower in Augsburg, offering panoramic views of the city and Alps on clear days. Paired with the Town Hall, it’s a defining feature of the skyline. The tower once served as a watchtower and fire signal point. Visitors can climb its 261 steps for a rewarding experience. It’s a must for those seeking history and stunning vistas.'
      },
      wiesbaden: {
        kurhaus_wiesbaden: 'Kurhaus Wiesbaden',
        kurhaus_wiesbaden_desc: 'The Kurhaus Wiesbaden is a grand neoclassical building, home to the city’s casino and concert halls. Built in 1907, its opulent interiors and colonnades exude elegance. The surrounding Bowling Green and fountains create a picturesque setting. Visitors can attend events or simply admire its architecture. It’s a cultural and social hub in Wiesbaden’s spa town atmosphere.',
        neroberg: 'Neroberg',
        neroberg_desc: 'Neroberg is a scenic hill in Wiesbaden, offering vineyards, a funicular railway, and views of the Rhine Valley. The hill’s Russian Orthodox Church, with its golden domes, adds an exotic touch. The Opel Baths, a historic pool complex, attract families in summer. Visitors can hike trails or relax in its parkland. It’s a tranquil escape blending nature and history.',
        marktkirche: 'Marktkirche',
        marktkirche_desc: 'Marktkirche is Wiesbaden’s main Protestant church, a neo-Gothic landmark with five distinctive towers. Built in 1862, its red brick facade dominates the market square. The church’s organ concerts and interior mosaics draw visitors. Its 92-meter tower offers city views for those who climb it. It’s a striking symbol of Wiesbaden’s architectural and spiritual heritage.',
        rheingau: 'Rheingau Wine Region',
        rheingau_desc: 'The Rheingau, near Wiesbaden, is a renowned wine region famous for Riesling and Pinot Noir. Its rolling vineyards and historic estates, like Schloss Johannisberg, attract wine enthusiasts. Visitors can tour cellars, sample wines, and enjoy festivals like the Rheingau Music Festival. The Rhine’s scenic beauty enhances the experience. It’s a delightful destination for food and wine lovers.'
      },
      erfurt: {
        erfurter_dom: 'Erfurt Cathedral',
        erfurter_dom_desc: 'Erfurt Cathedral, or Mariendom, is a Gothic and Romanesque landmark atop a hill, paired with St. Severi Church. Its treasures include a 13th-century Madonna statue and vibrant stained glass. The cathedral’s steps host festivals and markets, creating a lively atmosphere. Visitors can explore its ornate interiors and enjoy city views. It’s a spiritual and cultural heart of Erfurt.',
        kramerbrucke: 'Krämerbrücke',
        kramerbrucke_desc: 'Krämerbrücke is a medieval bridge in Erfurt, lined with half-timbered shops and houses, a rare architectural gem. Built in 1325, it spans the Gera River and remains a bustling commercial hub. Visitors can browse artisan shops selling crafts and sweets. The bridge’s charm makes it a photographer’s favorite. It’s a living piece of Erfurt’s history, vibrant day and night.',
        zitadelle_petersberg: 'Petersberg Citadel',
        zitadelle_petersberg_desc: 'Petersberg Citadel is a 17th-century fortress in Erfurt, one of Germany’s best-preserved. Its star-shaped design and underground tunnels offer a glimpse into military history. The citadel hosts events like open-air concerts and historical reenactments. Visitors can take guided tours to explore its ramparts and exhibits. It’s a fascinating site for history buffs and families.',
        egapark: 'EgaPark',
        egapark_desc: 'EgaPark is a sprawling garden in Erfurt, known for its colorful flowerbeds, sculptures, and observation tower. Spanning 36 hectares, it features themed areas like the Japanese Garden and a butterfly house. The park hosts horticultural shows and family-friendly events. Visitors can relax by its ponds or explore seasonal displays. It’s a vibrant green space for nature and leisure.'
      },
    heidelberg: {
      heidelberg_schloss: 'Heidelberg Castle',
      heidelberg_schloss_desc: 'Heidelberg Castle is one of the most famous castle ruins in Germany. Perched above the Old Town, it offers not only a rich history but also breathtaking views over the Neckar River and the city. Visitors can explore the impressive remains, visit the Pharmacy Museum, and reach the site via the mountain railway.',
      alte_bruecke: 'Old Bridge',
      alte_bruecke_desc: 'The Old Bridge, officially known as the Karl Theodor Bridge, is a historic landmark of Heidelberg. It connects the Old Town with the opposite bank of the Neckar River and offers picturesque views of the castle. Built in the 18th century, it is a popular photo spot for tourists.',
      philosophenweg: 'Philosopher\'s Walk',
      philosophenweg_desc: 'The Philosopher\'s Walk is a scenic walking path with spectacular views of Heidelberg’s Old Town, the castle, and the river. Once a retreat for scholars and poets, it is now a popular place for walks, especially in spring when the surrounding nature is in full bloom.',
      universitaetsbibliothek: 'Heidelberg University Library',
      universitaetsbibliothek_desc: 'The Heidelberg University Library is an architectural gem and one of the oldest libraries in Germany. Part of the prestigious Heidelberg University, it impresses with its magnificent facade and valuable historical collections. A must-visit for those interested in history and literature.'
    },
      default: {
        sight_1: 'Default Sight 1',
        sight_1_desc: 'This is a placeholder for a notable sight in a city. It represents a historic or cultural landmark that attracts visitors. The site may offer guided tours or exhibits to explore its significance. Its architecture or history makes it a must-see destination. Visitors can enjoy its beauty and learn about the city’s heritage.',
        sight_2: 'Default Sight 2',
        sight_2_desc: 'This placeholder represents another key attraction in a city, known for its unique features. It could be a park, museum, or historic structure with deep cultural roots. Visitors can engage with interactive displays or enjoy its scenic surroundings. The site is popular for both locals and tourists. It’s a great spot to experience the city’s character.',
        sight_3: 'Default Sight 3',
        sight_3_desc: 'This default sight is a fictional landmark, symbolizing a city’s vibrant heritage. It might include historic architecture, art, or natural beauty that captivates visitors. The site offers opportunities for exploration and relaxation. Its significance is highlighted through events or guided tours. It’s an essential stop for understanding the city’s identity.',
        sight_4: 'Default Sight 4',
        sight_4_desc: 'This placeholder marks a cultural or natural highlight in a city, drawing visitors with its charm. It could be a historic site, garden, or cultural center with engaging activities. The area is known for its welcoming atmosphere and scenic views. Visitors can immerse themselves in its stories and ambiance. It’s a memorable part of any city visit.'
      }
    }
  },
  de: {
    navbar: {
      home: 'Startseite',
      login: 'Anmelden',
      register: 'Registrieren',
      logout: 'Abmelden',
      humidity: 'Luftfeuchtigkeit',
      wind: 'Wind',
      routeMap: "Wohin?",
      weatherLoading: 'Wetter wird geladen...'
    },
    routemap: {
    title: "Reiseroute",
    from: "Von",
    to: "Nach",
    fromPlaceholder: "Startbahnhof",
    toPlaceholder: "Zielbahnhof",
    search: "Route anzeigen",
    invalidSelection: "Bitte wählen Sie unterschiedliche Start- und Zielbahnhöfe.",
    errorFetching: "Fehler beim Abrufen der Route",
    routeInfo: "Routeninformationen",
    trainNumber: "Zugnummer",
    stations: "Stationen"
  },
    home: {
      slogan: 'Buchen Sie Ihre Zugtickets, planen Sie Ihre Reise',
      search: 'Suchen',
      from: 'Von (z.B. Köln Hbf)',
      to: 'Nach (z.B. Aachen Hbf)',
      popularCities: 'Beliebte Städte in Deutschland',
      noTrains: 'Keine Züge für diese Strecke gefunden.',
      availableTrains: 'Verfügbare Züge',
      trainNumber: 'Zugnummer',
      trainType: 'Zugtyp',
      departure: 'Abfahrt',
      arrival: 'Ankunft',
      plannedDeparture: 'Geplante Abfahrt',
      plannedArrival: 'Geplante Ankunft',
      delay: 'Verspätung (Min)',
      error: 'Fehler',
      availableRoutes: "Verfügbare Routen",
      route: "Route",
      fromStation: "Abfahrtsstation",
      toStation: "Ankunftsstation",
      date: "Datum",
      noRoutes: "Keine Routen gefunden",
      start: "Start",
      goal: "Ziel",
      details: "Details",
      hideDetails:"Details ausblenden",
      loading:"Bitte warten Sie",
      showAlternative:"Alternative",
      alternativeRoute:"Alternativroute",
      hideAlternative:"Alternative ausblenden",
      missingFields:"Fehlende Felder!"
    },
    city: {
      hide: 'Ausblenden',
      show: 'Anzeigen',
      welcome: 'Willkommen in {city}',
      close: 'Schließen',
      sights: 'Sehenswürdigkeiten',
      viewMore: 'Mehr anzeigen'
    },
    weather: {
      temperature: 'Temperatur',
      feelsLike: 'Gefühlt wie',
      description: 'Wetterbeschreibung',
      error: 'Wetterdaten konnten nicht abgerufen werden'
    },
    cities: {
      Berlin: 'Berlin',
      Munich: 'München',
      Hamburg: 'Hamburg',
      Cologne: 'Köln',
      Frankfurt: 'Frankfurt',
      Stuttgart: 'Stuttgart',
      Düsseldorf: 'Düsseldorf',
      Dresden: 'Dresden',
      Leipzig: 'Leipzig',
      Hannover: 'Hannover',
      Nuremberg: 'Nürnberg',
      Bremen: 'Bremen',
      Dortmund: 'Dortmund',
      Essen: 'Essen',
      Bonn: 'Bonn',
      Mannheim: 'Mannheim',
      Karlsruhe: 'Karlsruhe',
      Freiburg: 'Freiburg',
      Kiel: 'Kiel',
      Rostock: 'Rostock',
      Mainz: 'Mainz',
      Saarbrücken: 'Saarbrücken',
      Augsburg: 'Augsburg',
      Wiesbaden: 'Wiesbaden',
      Erfurt: 'Erfurt',
      Heidelberg: 'Heidelberg'
    },
    sights: {
      berlin: {
        brandenburg_tor: 'Brandenburger Tor',
        brandenburg_tor_desc: 'Das Brandenburger Tor ist ein ikonisches neoklassizistisches Denkmal in Berlin, das Frieden und Einheit symbolisiert. Es wurde Ende des 18. Jahrhunderts erbaut und markierte einst den Beginn der Straße von Berlin nach Brandenburg an der Havel. Während des Kalten Krieges war es ein bedeutender Ort an der Grenze zwischen Ost- und West-Berlin. Heute ist es eine beliebte Touristenattraktion und ein Veranstaltungsort für große öffentliche Ereignisse. Besucher können die beeindruckende Architektur genießen und nahegelegene historische Stätten erkunden.',
        reichstag: 'Reichstag',
        reichstag_desc: 'Der Reichstag ist der Sitz des Deutschen Bundestages und ein historisches Wahrzeichen in Berlin. Seine Glaskuppel, entworfen von Norman Foster, bietet einen Panoramablick über die Stadt. Das Gebäude war Zeuge wichtiger Momente der deutschen Geschichte, einschließlich des Brandes von 1933 und seiner Wiederherstellung nach der Wiedervereinigung. Besucher können Führungen buchen, um seine politische Bedeutung und architektonische Schönheit zu entdecken. Es ist ein Muss für alle, die sich für Geschichte und Politik interessieren.',
        fernsehturm: 'Fernsehturm',
        fernsehturm_desc: 'Der Berliner Fernsehturm ist mit 368 Metern das höchste Bauwerk Deutschlands. In der Alexanderplatz gelegen, wurde er in den 1960er Jahren von der DDR erbaut, um technologische Überlegenheit zu demonstrieren. Die Aussichtsplattform bietet atemberaubende Ausblicke auf Berlins Skyline, und das drehbare Restaurant sorgt für ein einzigartiges kulinarisches Erlebnis. Er ist ein geliebtes Symbol der Stadt und zieht jährlich Millionen von Besuchern an. Besonders beeindruckend ist der Turm nachts, wenn er beleuchtet ist.',
        museumsinsel: 'Museumsinsel',
        museumsinsel_desc: 'Die Museumsinsel ist ein UNESCO-Weltkulturerbe in Berlin, das fünf weltberühmte Museen beherbergt. Am Spreeufer gelegen, umfasst sie das Pergamonmuseum, das Alte Museum und das Neue Museum, unter anderem. Die Insel zeigt Kunst und Artefakte von antiken Zivilisationen bis zur Moderne. Ihre beeindruckende Architektur und kulturelle Bedeutung machen sie zu einem Top-Ziel für Kunstliebhaber. Besucher können Stunden damit verbringen, die umfangreichen Sammlungen und die wunderschöne Umgebung zu erkunden.'
      },
      munich: {
        marienplatz: 'Marienplatz',
        marienplatz_desc: 'Der Marienplatz ist der zentrale Platz in München, bekannt für seine lebhafte Atmosphäre und historische Gebäude. Das Neue Rathaus mit seinem berühmten Glockenspiel ist ein Highlight und unterhält Besucher mit täglichen Vorführungen. Der Platz ist seit dem 12. Jahrhundert das Herz der Stadt und beherbergt Märkte und Festivals. Umgeben von Geschäften und Cafés ist er ideal, um die bayerische Kultur zu erleben. Die nahegelegene Frauenkirche ist ebenfalls einen Besuch wert.',
        nymphenburg_schloss: 'Schloss Nymphenburg',
        nymphenburg_schloss_desc: 'Schloss Nymphenburg ist eine prächtige barocke Residenz in München, einst Sommerresidenz der bayerischen Herrscher. Die weitläufigen Gärten mit Springbrunnen und Pavillons sind ein Genuss zum Erkunden. Das Innere des Schlosses zeigt prunkvolle Räume, darunter den Spiegelsaal. Besucher können auch Museen im Komplex besichtigen, wie das Kutschenmuseum. Es ist ein Zeugnis von Münchens königlichem Erbe und architektonischer Pracht.',
        englischer_garten: 'Englischer Garten',
        englischer_garten_desc: 'Der Englische Garten ist einer der größten Stadtparks der Welt und liegt im Herzen von München. Auf über 900 Hektar bietet er malerische Wege, Seen und sogar eine Surferstelle am Eisbach. Der Park ist bei Einheimischen beliebt für Picknicks, Joggen und Entspannung. Besucher können Biergärten wie den am Chinesischen Turm genießen, die traditionelle bayerische Speisen servieren. Es ist eine grüne Oase, perfekt für einen gemütlichen Tag.',
        viktualienmarkt: 'Viktualienmarkt',
        viktualienmarkt_desc: 'Der Viktualienmarkt ist Münchens berühmter Freiluftmarkt, der frische Produkte, Blumen und bayerische Spezialitäten bietet. In der Nähe des Marienplatzes gelegen, ist er seit dem frühen 19. Jahrhundert ein fester Bestandteil. Der Markt ist ein lebendiger Treffpunkt, an dem Einheimische und Touristen Käse, Würste und Gebäck probieren. Der Biergarten ist ein großartiger Ort, um ein erfrischendes Getränk zu genießen. Ein Besuch ist eine köstliche Möglichkeit, Münchens kulinarische Kultur zu erleben.'
      },
      hamburg: {
        elbphilharmonie: 'Elbphilharmonie',
        elbphilharmonie_desc: 'Die Elbphilharmonie ist ein atemberaubender Konzertsaal am Elbufer in Hamburgs HafenCity. Ihre wellenförmige Glasstruktur ist seit ihrer Eröffnung 2017 ein architektonisches Wahrzeichen. Der Veranstaltungsort beherbergt erstklassige Aufführungen, von klassischer bis zeitgenössischer Musik. Besucher können die öffentliche Plaza erkunden, die Panoramablicke auf den Hafen bietet. Es ist ein Muss für Musikliebhaber und Architekturbegeisterte.',
        speicherstadt: 'Speicherstadt',
        speicherstadt_desc: 'Die Speicherstadt ist das größte zusammenhängende Lagerhausviertel der Welt und ein UNESCO-Weltkulturerbe in Hamburg. Ende des 19. Jahrhunderts erbaut, sind die roten Backsteingebäude durch Kanäle und Brücken verbunden. Das Viertel beherbergt Museen, Cafés und das Miniatur Wunderland, eine riesige Modelleisenbahn. Die einzigartige Architektur und die Wasserwege machen es zu einem Paradies für Fotografen. Besucher können an Führungen teilnehmen, um mehr über die maritime Geschichte zu erfahren.',
        reeperbahn: 'Reeperbahn',
        reeperbahn_desc: 'Die Reeperbahn ist Hamburgs berühmtes Vergnügungsviertel, bekannt als die „sündige Meile“ für ihr lebendiges Nachtleben. Im Stadtteil St. Pauli gelegen, gibt es dort Bars, Clubs, Theater und Musiklokale, einschließlich der Geburtsstätte der frühen Auftritte der Beatles. Tagsüber bietet sie eine entspanntere Atmosphäre mit Cafés und Geschäften. Das Viertel ist von Geschichte und Subkultur durchdrungen und zieht eine vielfältige Menge an. Es ist ein lebendiger Ort, um Hamburgs eklektische Energie zu erleben.',
        st_michaelis_kirche: 'St.-Michaelis-Kirche',
        st_michaelis_kirche_desc: 'Die St.-Michaelis-Kirche, oder „Michel“, ist Hamburgs ikonischste Kirche, deren 132-Meter-Turm die Skyline prägt. Im Barockstil erbaut, ist sie seit dem 17. Jahrhundert ein Wahrzeichen. Besucher können den Turm erklimmen oder einen Aufzug nehmen, um atemberaubende Ausblicke auf die Stadt und den Hafen zu genießen. Die Kirche veranstaltet auch Konzerte und Events, die ihre hervorragende Akustik präsentieren. Sie ist ein Symbol für Hamburgs maritimes und spirituelles Erbe.'
      },
      cologne: {
        kolner_dom: 'Kölner Dom',
        kolner_dom_desc: 'Der Kölner Dom ist ein Meisterwerk gotischer Architektur und ein UNESCO-Weltkulturerbe. Seine Zwillingstürme, 157 Meter hoch, prägen die Skyline Kölns. Der Bau begann im 13. Jahrhundert und dauerte über 600 Jahre. Der Dom beherbergt den Schrein der Heiligen Drei Könige, ein bedeutender Pilgerort. Besucher können den Südturm erklimmen, um eine lohnende Aussicht auf die Stadt zu genießen.',
        rheinpromenade: 'Rheinpromenade',
        rheinpromenade_desc: 'Die Rheinpromenade ist ein malerischer Spazierweg entlang des Rheins in Kölns Altstadt. Sie bietet atemberaubende Ausblicke auf den Fluss, die Hohenzollernbrücke und den Dom. Die Promenade ist gesäumt von Cafés, Restaurants und historischen Gebäuden, ideal für einen gemütlichen Spaziergang. Sie ist besonders während Festivals wie dem Kölner Karneval ein beliebter Treffpunkt für Einheimische und Touristen. Das Gebiet lebt das ganze Jahr über mit lebendiger Energie.',
        hohenzollernbrucke: 'Hohenzollernbrücke',
        hohenzollernbrucke_desc: 'Die Hohenzollernbrücke ist eine berühmte Eisenbahn- und Fußgängerbrücke in Köln, geschmückt mit Tausenden von Liebesschlössern. Über den Rhein spannend, verbindet sie das Domgebiet mit dem modernen KölnTriangle-Gebäude. Die Brücke bietet malerische Ausblicke, besonders bei Sonnenuntergang, wenn der Dom beleuchtet ist. Sie ist ein romantischer Ort für Paare und ein Favorit für Fotografen. Die Struktur ist auch eine wichtige Verbindung für regionale Züge.',
        museum_ludwig: 'Museum Ludwig',
        museum_ludwig_desc: 'Das Museum Ludwig ist ein führendes Museum für moderne Kunst in Köln, in der Nähe des Doms gelegen. Es beherbergt eine umfangreiche Sammlung von Kunst des 20. Jahrhunderts, einschließlich Werken von Picasso, Warhol und Lichtenstein. Das elegante Design des Museums ergänzt seine lebendigen Ausstellungen, die auch Fotografie und Grafikkunst umfassen. Es ist ein kulturelles Zentrum, das Kunstliebhaber aus aller Welt anzieht. Besucher können temporäre Ausstellungen neben der ständigen Sammlung genießen.'
      },
      frankfurt: {
        romer: 'Römer',
        romer_desc: 'Der Römer ist Frankfurts historisches Rathaus, seit dem 15. Jahrhundert im Römerberg gelegen. Seine gestufte Giebelfassade ist eines der bekanntesten Wahrzeichen der Stadt. Der Römer war Schauplatz zahlreicher Hochzeiten und städtischer Veranstaltungen, einschließlich kaiserlicher Krönungen in der Vergangenheit. Besucher können den Kaisersaal erkunden, der mit Porträts deutscher Kaiser geschmückt ist. Der umliegende Platz ist ein lebendiger Ort mit Cafés und saisonalen Märkten.',
        main_tower: 'Main Tower',
        main_tower_desc: 'Der Main Tower ist ein 200-Meter-Wolkenkratzer in Frankfurt, der unvergleichliche Ausblicke auf die Skyline der Stadt bietet. 1999 fertiggestellt, ist er eine der wenigen Aussichtsplattformen, die für die Öffentlichkeit zugänglich sind. Das elegante Design des Turms spiegelt den Status der Stadt als Finanzzentrum wider. Besucher können Cocktails im Dachrestaurant genießen und das Panorama auf sich wirken lassen. Es ist ein großartiger Ort, um Frankfurts Mischung aus alter und neuer Architektur zu sehen.',
        palmengarten: 'Palmengarten',
        palmengarten_desc: 'Der Palmengarten ist ein 22 Hektar großer botanischer Garten in Frankfurt, der Pflanzen aus aller Welt zeigt. 1871 gegründet, bietet er tropische Gewächshäuser, Rosengärten und saisonale Blumenschauen. Der Garten ist ein friedlicher Rückzugsort in der geschäftigen Stadt, ideal für Familien und Naturliebhaber. Besucher können Konzerte oder geführte Touren besuchen, um mehr über exotische Flora zu erfahren. Die ruhigen Seen und Wege machen ihn zu einem herrlichen Ausflugsziel.',
        stadel_museum: 'Städel Museum',
        stadel_museum_desc: 'Das Städel Museum ist eines der besten Kunstmuseen Deutschlands, entlang Frankfurts Museumsufer gelegen. Seine Sammlung umfasst 700 Jahre, mit Meisterwerken von Rembrandt, Monet und Picasso. Der moderne Anbau des Museums beherbergt zeitgenössische Kunst und erweitert das vielfältige Angebot. Es ist ein kulturelles Juwel, das Kunstliebhaber mit seinen ansprechenden Ausstellungen anzieht. Geführte Touren und Workshops machen es für alle Altersgruppen zugänglich.'
      },
      stuttgart: {
        schlossplatz: 'Schlossplatz',
        schlossplatz_desc: 'Der Schlossplatz ist der größte Platz in Stuttgart, zentriert um das Neue Schloss, ein barockes Meisterwerk. Der Platz ist ein lebendiger öffentlicher Raum, der das ganze Jahr über Konzerte, Märkte und Festivals beherbergt. Seine gepflegten Gärten und Springbrunnen schaffen eine einladende Atmosphäre für Besucher. Umgeben von historischen Gebäuden ist er ein großartiger Ausgangspunkt, um Stuttgart zu erkunden. Das nahegelegene Alte Schloss und Kunstmuseum tragen zu seinem kulturellen Reiz bei.',
        mercedes_benz_museum: 'Mercedes-Benz Museum',
        mercedes_benz_museum_desc: 'Das Mercedes-Benz Museum in Stuttgart erzählt die Geschichte des ikonischen Automobilherstellers. In einem futuristischen Gebäude untergebracht, zeigt es über 160 Fahrzeuge, vom ersten Automobil bis zu modernen Rennwagen. Interaktive Ausstellungen erkunden die Innovation und das Design der Automobilindustrie über 130 Jahre hinweg. Besucher können einer Zeitleiste folgen, die Technologie mit Kulturgeschichte verbindet. Es ist ein Muss für Autofans und neugierige Reisende.',
        porsche_museum: 'Porsche Museum',
        porsche_museum_desc: 'Das Porsche Museum in Stuttgart feiert das Erbe der legendären Sportwagenmarke. In Zuffenhausen gelegen, zeigt es etwa 80 Fahrzeuge, darunter seltene Prototypen und klassische Modelle. Die elegante Architektur des Museums spiegelt den innovativen Geist von Porsche wider. Ausstellungen heben das Rennsport-Erbe und technische Meilensteine der Marke hervor. Geführte Touren bieten Einblicke in Porsches Einfluss auf die Automobilkultur.',
        wilhelma: 'Wilhelma',
        wilhelma_desc: 'Die Wilhelma ist ein zoologischer und botanischer Garten in Stuttgart, der über 11.000 Tiere und 7.000 Pflanzenarten beherbergt. Ursprünglich im 19. Jahrhundert als königlicher Garten angelegt, zieht sie heute Familien und Naturliebhaber an. Der Park bietet Themenbereiche wie die afrikanische Savanne und ein Aquarium mit Korallenriffen. Die historische maurische Architektur verleiht einen einzigartigen Charme. Besucher können Bildungsprogramme und saisonale Veranstaltungen genießen.'
      },
      dusseldorf: {
        rheinturm: 'Rheinturm',
        rheinturm_desc: 'Der Rheinturm ist mit 240,5 Metern das höchste Bauwerk Düsseldorfs und bietet atemberaubende Ausblicke auf die Stadt und den Rhein. 1984 fertiggestellt, dient er als Telekommunikationsturm und beliebte Touristenattraktion. Die Aussichtsplattform bietet ein 360-Grad-Panorama, während das drehbare Restaurant ein kulinarisches Erlebnis mit Aussicht ermöglicht. Sein modernes Design ist ein Symbol für Düsseldorfs fortschrittlichen Geist. Nachtbesuche zeigen die beleuchtete Skyline der Stadt.',
        altstadt: 'Altstadt',
        altstadt_desc: 'Düsseldorfs Altstadt ist ein charmantes historisches Viertel, bekannt als „längste Theke der Welt“ aufgrund ihrer zahlreichen Kneipen und Brauereien. Die Kopfsteinpflasterstraßen sind gesäumt von Gebäuden aus dem 17. Jahrhundert, Cafés und Geschäften. Das Viertel ist ein kulturelles Zentrum, das das ganze Jahr über Festivals und Kunstevents veranstaltet. Besucher können lokales Altbier probieren und Sehenswürdigkeiten wie den Marktplatz erkunden. Es ist ein lebendiger Ort, um Düsseldorfs Geschichte und Nachtleben zu erleben.',
        konigsallee: 'Königsallee',
        konigsallee_desc: 'Die Königsallee, oder „Kö“, ist Düsseldorfs führende Einkaufsstraße, bekannt für ihre Luxusboutiquen und Designerläden. Gesäumt von einem malerischen Kanal und Kastanienbäumen, ist sie ein schöner Ort für einen Spaziergang. Die Straße zieht Modebegeisterte und Besucher an, die gehobene Restaurants suchen. Ihre elegante Atmosphäre spiegelt Düsseldorfs Status als kosmopolitische Stadt wider. Saisonale Veranstaltungen wie Weihnachtsmärkte erhöhen ihren Reiz.',
        schlossturm: 'Schlossturm',
        schlossturm_desc: 'Der Schlossturm ist der letzte verbliebene Teil des ehemaligen Düsseldorfer Schlosses und beherbergt heute das SchifffahrtMuseum. Am Rhein gelegen, bietet er Einblicke in die maritime Geschichte der Stadt mit Ausstellungen über Schifffahrt und Handel. Die historische Architektur des Turms kontrastiert mit der modernen Uferpromenade in der Nähe. Besucher können die Aussicht auf den Fluss von der Umgebung genießen. Es ist ein verstecktes Juwel für Geschichtsinteressierte, die Düsseldorf erkunden.'
      },
      dresden: {
        frauenkirche: 'Frauenkirche',
        frauenkirche_desc: 'Die Frauenkirche ist eine atemberaubende barocke Kirche in Dresden, die nach ihrer Zerstörung im Zweiten Weltkrieg wiederaufgebaut wurde. Ihre Kuppel, bekannt als „Steinerne Glocke“, ist ein Symbol für Frieden und Wiederaufbau. Das Innere zeigt eine prächtige Orgel und aufwendige Fresken. Besucher können die Kuppel erklimmen, um Panoramablicke auf die Elbe und die Altstadt zu genießen. Die Kirche veranstaltet Konzerte, die ihre kulturelle Bedeutung unterstreichen.',
        semperoper: 'Semperoper',
        semperoper_desc: 'Die Semperoper ist Dresdens weltberühmtes Opernhaus, bekannt für seine neorenaissance Architektur. Benannt nach dem Architekten Gottfried Semper, war es Schauplatz von Premieren von Wagner und Strauss. Das prunkvolle Innere mit Kronleuchtern und vergoldeten Details ist ein Anblick für sich. Geführte Touren bieten Einblicke in die reiche Geschichte und Akustik. Es ist ein Muss für Musikliebhaber und Architekturbegeisterte.',
        zwinger: 'Zwinger',
        zwinger_desc: 'Der Zwinger ist ein barocker Palastkomplex in Dresden, bekannt für seine verzierten Innenhöfe und Museen. Im 18. Jahrhundert erbaut, beherbergt er Sammlungen wie die Dresdner Porzellansammlung und die Gemäldegalerie Alte Meister. Das Krontor ist ein architektonisches Meisterwerk, das Fotografen anzieht. Die Gärten sind perfekt für einen gemütlichen Spaziergang. Besucher können die kulturellen Schätze und den historischen Charme erkunden.',
        residenzschloss: 'Residenzschloss',
        residenzschloss_desc: 'Das Residenzschloss ist Dresdens ehemaliger Königspalast, heute ein Museumskomplex, der Kunst und Geschichte zeigt. Das Grüne Gewölbe zeigt exquisite Schätze, darunter barocken Schmuck und Goldarbeiten. Die Architektur des Palastes verbindet Renaissance- und Barockstile und spiegelt jahrhundertelange sächsische Herrschaft wider. Besucher können Ausstellungen über Dresdens königliche Vergangenheit und kulturelles Erbe erkunden. Die restaurierten Innenräume machen es zu einem Highlight der Stadt.'
      },
      leipzig: {
        nikolaikirche: 'Nikolaikirche',
        nikolaikirche_desc: 'Die Nikolaikirche ist eine historische Kirche in Leipzig, die eine zentrale Rolle in der friedlichen Revolution von 1989 spielte. Ihre gotische und barocke Architektur umfasst ein beeindruckendes säulenartiges Inneres. Die Kirche veranstaltet Konzerte und Orgelvorführungen, die ihre hervorragende Akustik präsentieren. Wöchentliche Friedensgebete setzen ihr Erbe des sozialen Aktivismus fort. Besucher können durch Führungen mehr über ihre Rolle in der deutschen Geschichte erfahren.',
        volkerschlachtdenkmal: 'Völkerschlachtdenkmal',
        volkerschlachtdenkmal_desc: 'Das Völkerschlachtdenkmal ist ein monumentales Denkmal in Leipzig, das an die Schlacht von Leipzig 1813 erinnert. Mit 91 Metern ist es eines der größten Denkmäler Europas und bietet von der Aussichtsplattform einen Blick auf die Stadt. Das imposante Design spiegelt den nationalistischen Geist der Ära wider. Besucher können das Museum erkunden, um mehr über die Napoleonischen Kriege zu erfahren. Es ist ein starkes Symbol für Leipzigs historische Bedeutung.',
        gewandhaus: 'Gewandhaus',
        gewandhaus_desc: 'Das Gewandhaus ist Leipzigs führender Konzertsaal, Heimat des renommierten Gewandhausorchesters. Das moderne Gebäude, 1981 eröffnet, besticht durch hervorragende Akustik und ein elegantes Design. Es beherbergt klassische Musikaufführungen, von Beethoven bis zu zeitgenössischen Komponisten. Besucher können Konzerte besuchen oder an Führungen teilnehmen, um die Geschichte zu erkunden. Es ist ein kultureller Eckpfeiler der lebendigen Musikszene Leipzigs.',
        zoo_leipzig: 'Zoo Leipzig',
        zoo_leipzig_desc: 'Der Zoo Leipzig ist einer der modernsten Zoos Deutschlands, bekannt für seine immersiven Lebensräume wie Gondwanaland. Auf 26 Hektar beherbergt er über 850 Tierarten, von Tigern bis zu Pinguinen. Der Zoo legt Wert auf Naturschutz und Bildung und bietet interaktive Ausstellungen für Familien. Die tropische Regenwaldkuppel ist ein Besuchermagnet. Es ist ein perfektes Ziel für Naturliebhaber und Kinder.'
      },
      hannover: {
        neues_rathaus: 'Neues Rathaus',
        neues_rathaus_desc: 'Das Neue Rathaus in Hannover ist ein architektonisches Juwel, Anfang des 20. Jahrhunderts im eklektischen Stil erbaut. Seine 98-Meter-Kuppel bietet weite Ausblicke auf die Stadt und die umliegende Landschaft. Das Innere des Gebäudes zeigt detaillierte Fresken, die Hannovers Geschichte darstellen. Besucher können einen einzigartigen Bogenaufzug zur Kuppel nehmen für ein unvergessliches Erlebnis. Es ist ein Symbol des bürgerlichen Stolzes der Stadt.',
        herrenhauser_garten: 'Herrenhäuser Gärten',
        herrenhauser_garten_desc: 'Die Herrenhäuser Gärten sind ein barockes Meisterwerk in Hannover, bestehend aus vier unterschiedlichen Gärten. Der Große Garten mit seinen Springbrunnen und dem Labyrinth ist das Herzstück und spiegelt die königliche Pracht des 17. Jahrhunderts wider. Die Gärten veranstalten im Sommer Festivals, Feuerwerke und Theateraufführungen. Besucher können die Grotte, gestaltet von Niki de Saint Phalle, für einen modernen Touch erkunden. Es ist ein ruhiger Rückzugsort in der Stadt.',
        maschsee: 'Maschsee',
        maschsee_desc: 'Der Maschsee ist ein großer künstlicher See in Hannover, beliebt für Segeln, Rudern und Spaziergänge am Ufer. In den 1930er Jahren geschaffen, erstreckt er sich über 78 Hektar und ist ein Zentrum für Outdoor-Aktivitäten. Die Promenade des Sees ist gesäumt von Cafés und Veranstaltungsorten, die Festivals wie das Maschsee-Fest ausrichten. Besucher können Boote oder Fahrräder mieten, um die malerischen Ufer zu erkunden. Es ist ein lebendiger Ort für Entspannung und Freizeit.',
        sprengel_museum: 'Sprengel Museum',
        sprengel_museum_desc: 'Das Sprengel Museum in Hannover ist ein führendes Museum für moderne Kunst, das Werke von Picasso, Klee und Nolde zeigt. Die Sammlung umfasst Expressionismus bis zeitgenössische Kunst, untergebracht in einem markanten modernistischen Gebäude. Das Museum veranstaltet temporäre Ausstellungen und Bildungsprogramme für alle Altersgruppen. Besucher können den Skulpturengarten und das Café genießen. Es ist ein kulturelles Highlight für Kunstbegeisterte, die Hannover besuchen.'
      },
      nuremberg: {
        kaiserburg: 'Kaiserburg',
        kaiserburg_desc: 'Die Kaiserburg ist Nürnbergs mittelalterliche Burg, hoch über der Altstadt gelegen mit beeindruckenden Ausblicken. Im 11. Jahrhundert erbaut, diente sie als Residenz für Kaiser des Heiligen Römischen Reiches. Das Museum der Burg zeigt mittelalterliches Leben und Waffen. Besucher können die Türme, Höfe und den Tiefen Brunnen, ein Wunderwerk der Technik, erkunden. Es ist ein wichtiger Halt, um Nürnbergs kaiserliche Vergangenheit zu verstehen.',
        hauptmarkt: 'Hauptmarkt',
        hauptmarkt_desc: 'Der Hauptmarkt ist Nürnbergs belebter zentraler Platz, berühmt für seinen Weihnachtsmarkt und den Schönen Brunnen. Umgeben von historischen Gebäuden ist er ein lebendiger Treffpunkt für Einkäufe und Gastronomie. Der Platz beherbergt tägliche Märkte, die frische Produkte und lokale Handwerkskunst verkaufen. Besucher können die nahegelegene Frauenkirche mit ihrer Uhrvorführung bewundern. Es ist das Herz des kulturellen und gesellschaftlichen Lebens Nürnbergs.',
        dokumentationszentrum: 'Dokumentationszentrum',
        dokumentationszentrum_desc: 'Das Dokumentationszentrum in Nürnberg ist ein Museum im ehemaligen Reichsparteitagsgelände, das die Geschichte des Dritten Reiches erforscht. Die Ausstellungen zeigen den Aufstieg und Fall des Nationalsozialismus mit eindrucksvollen Displays und Artefakten. Die moderne Architektur des Zentrums kontrastiert mit dem ernsten Thema. Besucher können an Führungen teilnehmen, um tiefere Einblicke zu gewinnen. Es ist ein unverzichtbarer Besuch, um die Geschichte des 20. Jahrhunderts zu verstehen.',
        st_lorenz_kirche: 'St.-Lorenz-Kirche',
        st_lorenz_kirche_desc: 'Die St.-Lorenz-Kirche ist ein gotisches Meisterwerk in Nürnberg, bekannt für ihre filigranen Steinmetzarbeiten und Buntglasfenster. Im 14. Jahrhundert erbaut, beherbergt sie Schätze wie die Engelsgruß-Skulptur. Die Zwillingstürme der Kirche sind ein Wahrzeichen der Altstadt-Skyline. Besucher können Orgelkonzerte besuchen oder historische Artefakte erkunden. Es ist ein ruhiger Raum, der Nürnbergs mittelalterliches Erbe widerspiegelt.'
      },
      bremen: {
        bremer_stadtmusikanten: 'Bremer Stadtmusikanten',
        bremer_stadtmusikanten_desc: 'Die Bremer Stadtmusikanten sind eine beliebte Bronzestatue, inspiriert vom Märchen der Gebrüder Grimm, in der Nähe des Bremer Rathauses. 1951 errichtet, zeigt sie einen Esel, Hund, Katze und Hahn, die übereinander gestapelt sind. Die Statue ist ein beliebter Fotospot, wobei Besucher die Hufe des Esels berühren, um Glück zu bringen. Sie symbolisiert Bremens spielerischen Geist und Erzähltradition. Das nahegelegene Rathaus verstärkt ihren historischen Charme.',
        rathaus: 'Rathaus',
        rathaus_desc: 'Bremens Rathaus ist ein UNESCO-Weltkulturerbe, bekannt für seine Weser-Renaissance-Fassade. Im 15. Jahrhundert erbaut, zeigt es aufwendige Giebel und Statuen von Kaisern. Der Obere Saal und die Goldene Kammer sind Highlights und präsentieren prunkvolle Innenräume. Besucher können an Führungen teilnehmen, um die Geschichte und die Keller, Heimat des Ratskeller-Restaurants, zu erkunden. Es ist ein Eckpfeiler von Bremens bürgerlicher und kultureller Identität.',
        schnoorviertel: 'Schnoorviertel',
        schnoorviertel_desc: 'Das Schnoorviertel ist Bremens ältestes Viertel mit engen Kopfsteinpflasterstraßen und Häusern aus dem 15. Jahrhundert. Einst ein Fischerviertel, ist es heute ein lebendiges Gebiet mit Boutiquen, Cafés und Galerien. Der märchenhafte Charme des Viertels macht es zu einem Favoriten für Fotografen. Besucher können versteckte Innenhöfe und Kunsthandwerksläden erkunden. Es ist eine entzückende Möglichkeit, Bremens historischen Charakter zu erleben.',
        rolandstatue: 'Rolandstatue',
        rolandstatue_desc: 'Die Rolandstatue auf Bremens Marktplatz ist ein UNESCO-gelistetes Symbol für die Unabhängigkeit der Stadt. 1404 errichtet, stellt die 5,5-Meter-Statue einen Ritter dar, der Freiheit und Handelsrechte repräsentiert. Ihre filigranen Details und historische Bedeutung ziehen Geschichtsbegeisterte an. Besucher können sie neben dem nahegelegenen Rathaus bewundern. Die Statue ist ein stolzes Emblem von Bremens mittelalterlichem Erbe.'
      },
      dortmund: {
        westfalenpark: 'Westfalenpark',
        westfalenpark_desc: 'Der Westfalenpark ist ein weitläufiger grüner Raum in Dortmund, bekannt für seine Blumenschauen und den Florianturm, Deutschlands höchsten Turm. Der Park veranstaltet Festivals, Konzerte und die jährliche Rosenschau, die Naturliebhaber anzieht. Seine Seen, Spielplätze und die Seilbahn machen ihn familienfreundlich. Besucher können in thematischen Gärten entspannen oder Panoramablicke vom Turm genießen. Es ist ein ruhiger Rückzugsort in der Industriestadt.',
        deutsches_fussballmuseum: 'Deutsches Fußballmuseum',
        deutsches_fussballmuseum_desc: 'Das Deutsche Fußballmuseum in Dortmund feiert die Geschichte des deutschen Fußballs, von Weltmeisterschafts-Triumphen bis zu lokalen Vereinen. Interaktive Ausstellungen umfassen Memorabilia, virtuelle Spiele und eine Nachbildung des WM-Pokals von 1954. Das Museum spricht Fans jeden Alters mit seinen immersiven Displays an. In der Nähe des Hauptbahnhofs gelegen, ist es leicht zugänglich. Es ist ein Muss für Sportbegeisterte, die Dortmund besuchen.',
        u_turm: 'U-Turm',
        u_turm_desc: 'Der U-Turm ist ein ehemaliger Brauereiturm in Dortmund, heute ein Kulturzentrum für Kunst und Kreativität. Seine markante „U“-Form macht ihn zu einem Wahrzeichen der Stadt, das Ausstellungen, Konzerte und Filmvorführungen beherbergt. Das oberste Stockwerk beherbergt das Museum Ostwall, das moderne Kunst zeigt. Besucher können Panoramablicke von der Dachterrasse genießen. Es ist ein lebendiger Treffpunkt für Dortmunds Kulturszene.',
        reinoldikirche: 'Reinoldikirche',
        reinoldikirche_desc: 'Die Reinoldikirche ist Dortmunds älteste Kirche, gewidmet dem Schutzpatron der Stadt, Reinold. Ihr gotischer Turm, nach dem Zweiten Weltkrieg wiederaufgebaut, bietet Ausblicke auf das Stadtzentrum. Das Innere der Kirche zeigt mittelalterliche Artefakte und eine historische Orgel. Besucher können Gottesdienste oder Konzerte besuchen, um die spirituelle Atmosphäre zu erleben. Es ist eine ruhige Oase inmitten der geschäftigen Straßen Dortmunds.'
      },
      essen: {
        zeche_zollverein: 'Zeche Zollverein',
        zeche_zollverein_desc: 'Die Zeche Zollverein ist ein UNESCO-Weltkulturerbe in Essen, eine ehemalige Kohlemine, die zu einem Kulturkomplex umgewandelt wurde. Ihre Bauhaus-inspirierte Architektur zeugt von der industriellen Vergangenheit der Ruhrregion. Der Standort beherbergt Museen, Kunstgalerien und Veranstaltungen wie das Red Dot Design Museum. Besucher können an Führungen teilnehmen, um die Maschinen und Geschichte zu erkunden. Es ist eine eindrucksvolle Mischung aus Industrie und Kultur.',
        grugapark: 'Grugapark',
        grugapark_desc: 'Der Grugapark ist ein üppiger Stadtpark in Essen, der Gärten, Skulpturen und eine kleine Bahn für Familien bietet. Für eine Gartenschau 1929 gegründet, bietet er Themenbereiche wie den Japanischen Garten. Der Park veranstaltet Konzerte und saisonale Events, die eine lebendige Atmosphäre schaffen. Besucher können an den Teichen entspannen oder das botanische Haus erkunden. Es ist ein grünes Paradies im Herzen von Essen.',
        museum_folkwang: 'Museum Folkwang',
        museum_folkwang_desc: 'Das Museum Folkwang in Essen ist ein renommiertes Kunstmuseum, das moderne und klassische Werke von Van Gogh, Cézanne und anderen zeigt. Das elegante Gebäude, entworfen von David Chipperfield, verbessert das Betrachtungserlebnis. Die Fotosammlung des Museums ist besonders bemerkenswert und zieht globale Besucher an. Temporäre Ausstellungen halten das Angebot frisch und ansprechend. Es ist ein kulturelles Highlight für Kunstliebhaber in der Ruhrregion.',
        alfried_krupp_stiftung: 'Alfried Krupp von Bohlen und Halbach-Stiftung',
        alfried_krupp_stiftung_desc: 'Die Alfried Krupp von Bohlen und Halbach-Stiftung in Essen unterstützt kulturelle und wissenschaftliche Projekte, die das industrielle Erbe der Familie Krupp widerspiegeln. Ihr Hauptsitz befindet sich in der Nähe der Villa Hügel, einem historischen Herrenhaus, das für Besucher geöffnet ist. Die Stiftung finanziert Ausstellungen und Veranstaltungen, die Essens Kulturszene bereichern. Besucher können die prunkvollen Räume und den Park der Villa erkunden. Es ist ein Fenster in Essens industrielle und philanthropische Geschichte.'
      },
      bonn: {
        beethoven_haus: 'Beethoven-Haus',
        beethoven_haus_desc: 'Das Beethoven-Haus in Bonn ist der Geburtsort des Komponisten Ludwig van Beethoven, heute ein Museum, das seinem Leben gewidmet ist. Ausstellungen umfassen originale Manuskripte, Instrumente und persönliche Gegenstände, die Einblicke in sein Genie geben. Das Museum veranstaltet Konzerte und Vorträge, die Beethovens Erbe feiern. Besucher können das historische Haus und seinen ruhigen Innenhof erkunden. Es ist ein Pilgerort für Musikliebhaber weltweit.',
        alter_zoll: 'Alter Zoll',
        alter_zoll_desc: 'Der Alte Zoll ist eine historische Festung in Bonn, die Panoramablicke auf den Rhein und die Siebengebirge bietet. Im 17. Jahrhundert erbaut, sind ihre sternförmigen Mauern ein Überrest von Bonns Verteidigungsanlagen. Der Ort ist ein beliebter Treffpunkt für Picknicks und Sonnenuntergangsblicke. Besucher können durch Informationstafeln mehr über die militärische Geschichte erfahren. Es ist ein friedlicher Rückzugsort mit einer reichen Vergangenheit.',
        botanischer_garten: 'Botanischer Garten',
        botanischer_garten_desc: 'Der Botanische Garten in Bonn, Teil der Universität Bonn, beherbergt über 8.000 Pflanzenarten auf 6 Hektar. Seine Gewächshäuser zeigen tropische und Wüstenpflanzen, einschließlich seltener Orchideen. Der Garten ist ein Zentrum für Forschung und Bildung, mit verfügbaren Führungen. Besucher können durch thematische Bereiche wie den Heilpflanzenbereich wandern. Es ist ein ruhiger Rückzugsort für Naturliebhaber.',
        rathaus: 'Rathaus',
        rathaus_desc: 'Bonns Rathaus ist ein Rokoko-Meisterwerk, im 18. Jahrhundert erbaut mit einer eleganten rosa-weißen Fassade. Seine goldene Treppe hat Würdenträger wie JFK und Königin Elizabeth II. begrüßt. Das Gebäude wird noch für städtische Veranstaltungen und Hochzeiten genutzt, was seinen Charme erhöht. Besucher können die Architektur vom Marktplatz aus bewundern. Es ist ein Symbol für Bonns historische Bedeutung als ehemalige Hauptstadt.'
      },
      mannheim: {
        wasserturm: 'Wasserturm',
        wasserturm_desc: 'Der Mannheimer Wasserturm ist ein ikonisches Wahrzeichen, das stolz auf dem Friedrichsplatz steht. 1886 im neobarocken Stil erbaut, ist er von wunderschön angelegten Gärten und Springbrunnen umgeben. Er dient als Symbol für das industrielle Erbe der Stadt und ist ein beliebter Treffpunkt für Einheimische und Touristen. Besucher können die malerische Umgebung genießen, besonders bei abendlicher Beleuchtung. Der Turm ist ein Muss für seine architektonische Eleganz und historische Bedeutung.',
        schloss_mannheim: 'Schloss Mannheim',
        schloss_mannheim_desc: 'Das Schloss Mannheim ist eines der größten Barockschlösser Deutschlands, einst Heimat der Kurfürsten von der Pfalz. Seine großartige Fassade und prunkvollen Innenräume, einschließlich des Rittersaals, spiegeln die Pracht des 18. Jahrhunderts wider. Das Schloss beherbergt heute Teile der Universität Mannheim und ein Museum, das seine Geschichte zeigt. Besucher können die restaurierten Räume und den weitläufigen Innenhof erkunden. Es ist ein Zeugnis von Mannheims königlicher Vergangenheit und architektonischer Größe.',
        luisenpark: 'Luisenpark',
        luisenpark_desc: 'Der Luisenpark ist ein 41 Hektar großer Stadtpark in Mannheim, bekannt für seine vielfältigen Gärten und den ruhigen See. Highlights sind der Chinesische Garten, das Schmetterlingshaus und eine kleine Bahn für Familien. Der Park veranstaltet Konzerte und Festivals, die das ganze Jahr über eine lebendige Atmosphäre schaffen. Besucher können am Wasser entspannen oder thematische Bereiche wie den Rosengarten erkunden. Es ist eine grüne Oase, perfekt für Naturliebhaber und gemütliche Spaziergänge.',
        jesuitenkirche: 'Jesuitenkirche',
        jesuitenkirche_desc: 'Die Jesuitenkirche in Mannheim ist ein barockes Meisterwerk, bekannt für ihr prächtiges Inneres und auffällige Fresken. Im 18. Jahrhundert erbaut, diente sie als Hofkirche für die Kurfürsten von der Pfalz. Die Akustik der Kirche macht sie zu einem beliebten Veranstaltungsort für Konzerte und Orgelvorführungen. Besucher können die detaillierten Altäre und Skulpturen bewundern, die Mannheims religiöses Erbe widerspiegeln. Es ist ein ruhiger Ort für Geschichts- und Architekturbegeisterte.'
      },
      karlsruhe: {
        schloss_karlsruhe: 'Schloss Karlsruhe',
        schloss_karlsruhe_desc: 'Das Schloss Karlsruhe ist ein barockes Meisterwerk und das architektonische Zentrum der Stadt. 1715 für Markgraf Karl III. Wilhelm erbaut, beherbergt es heute das Badische Landesmuseum. Das fächerförmige Layout des Schlosses beeinflusste das einzigartige strahlenförmige Straßenmuster der Stadt. Besucher können die historischen Ausstellungen erkunden und Ausblicke vom Turm genießen. Die umliegenden Gärten sind perfekt für einen entspannenden Spaziergang.',
        zkm: 'ZKM | Zentrum für Kunst und Medien',
        zkm_desc: 'Das ZKM in Karlsruhe ist ein wegweisendes Museum für digitale und mediale Kunst, untergebracht in einer ehemaligen Munitionsfabrik. Es zeigt interaktive Installationen, Virtual-Reality-Ausstellungen und zeitgenössische Kunstwerke. Das Zentrum veranstaltet auch Performances und Workshops, die die Grenzen von Kunst und Technologie ausloten. Besucher können sich in einer dynamischen Umgebung mit modernster Kreativität auseinandersetzen. Es ist ein Muss für alle, die sich für moderne Kunst und Innovation interessieren.',
        gunther_klotz_anlage: 'Günther-Klotz-Anlage',
        gunther_klotz_anlage_desc: 'Die Günther-Klotz-Anlage ist ein beliebter Park in Karlsruhe, der Grünflächen, Spielplätze und einen kleinen See bietet. Benannt nach einem ehemaligen Bürgermeister, ist er ein Favorit für Familien und Outdoor-Enthusiasten. Der Park veranstaltet Events wie Open-Air-Konzerte und Flohmärkte, die eine lebendige Gemeinschaftsatmosphäre schaffen. Besucher können auf Radwegen fahren oder unter schattigen Bäumen entspannen. Es ist ein einladender Ort für Erholung und Entspannung.',
        kunsthalle: 'Staatliche Kunsthalle',
        kunsthalle_desc: 'Die Staatliche Kunsthalle in Karlsruhe ist ein Kunstmuseum, das europäische Meisterwerke vom Mittelalter bis zur Gegenwart zeigt. Die Sammlung umfasst Werke von Dürer, Monet und Kirchner, untergebracht in einem neoklassizistischen Gebäude. Das Museum bietet Führungen und Workshops, die Kunst für alle zugänglich machen. Besucher können den Skulpturengarten und temporäre Ausstellungen bewundern. Es ist ein kulturelles Juwel für Kunstliebhaber, die Karlsruhe besuchen.'
      },
      freiburg: {
        freiburger_munster: 'Freiburger Münster',
        freiburger_munster_desc: 'Das Freiburger Münster ist eine gotische Kathedrale, bekannt für ihren filigranen Turm und lebendige Buntglasfenster. Über drei Jahrhunderte erbaut, ist es ein Symbol für Freiburgs mittelalterliches Erbe. Der Turm bietet Panoramablicke auf den Schwarzwald und die roten Dächer der Stadt. Besucher können die verzierten Innenräume, einschließlich des Hochaltars, erkunden. Der Kathedralenplatz beherbergt einen täglichen Markt, der die lebendige Atmosphäre verstärkt.',
        schwabentor: 'Schwabentor',
        schwabentor_desc: 'Das Schwabentor ist eines der zwei erhaltenen mittelalterlichen Stadttore Freiburgs, im 13. Jahrhundert erbaut. Sein Turm zeigt ein bemaltes Wandbild und bietet Ausblicke auf die Altstadt. Das Tor ist eine Erinnerung an Freiburgs befestigte Vergangenheit und ein beliebter Fotospot. Besucher können durch seinen Bogen gehen, um die nahegelegenen Kopfsteinpflasterstraßen zu erkunden. Es ist ein charmantes Stück der Stadtgeschichte.',
        augustiner_museum: 'Augustiner-Museum',
        augustiner_museum_desc: 'Das Augustiner-Museum in Freiburg zeigt Kunst und Geschichte vom Mittelalter bis zur Barockzeit. In einem ehemaligen Kloster untergebracht, bietet es Skulpturen, Gemälde und regionale Artefakte. Der ruhige Innenhof und die gotische Architektur des Museums verbessern das Erlebnis. Besucher können Ausstellungen über Freiburgs kulturelles Erbe erkunden. Es ist ein kulturelles Highlight für diejenigen, die an der Vergangenheit der Stadt interessiert sind.',
        bachle: 'Bächle',
        bachle_desc: 'Die Bächle sind kleine Wasserläufe, die durch Freiburgs Altstadt fließen, eine einzigartige Eigenschaft seit dem Mittelalter. Ursprünglich für Bewässerung und Brandbekämpfung genutzt, verleihen sie den Straßen der Stadt heute Charme. Einheimische sagen, dass das Hineintreten in ein Bächle bedeutet, dass man nach Freiburg zurückkehrt – oder einen Einheimischen heiratet! Besucher können ihren Wegen folgen, während sie Geschäfte und Cafés erkunden. Sie sind ein entzückendes Symbol für Freiburgs Charakter.'
      },
      kiel: {
        kieler_forde: 'Kieler Förde',
        kieler_forde_desc: 'Die Kieler Förde ist eine malerische Bucht der Ostsee, die Kiels maritime Identität prägt. Sie ist ein Zentrum für Segeln, mit Veranstaltungen wie der Kieler Woche, dem größten Segelfestival der Welt. Die Promenade der Förde bietet atemberaubende Ausblicke und ist gesäumt von Cafés und Museen. Besucher können Bootstouren unternehmen, um die Gewässer und nahegelegenen Leuchttürme zu erkunden. Es ist ein lebendiger Ort für Natur- und Nautikbegeisterte.',
        rathaus_kiel: 'Rathaus Kiel',
        rathaus_kiel_desc: 'Das Rathaus Kiel ist ein markantes Jugendstilgebäude, bekannt für seinen 106-Meter-Turm, der dem Campanile in Venedig ähnelt. 1911 erbaut, ist es ein Symbol für Kiels maritimen und bürgerlichen Stolz. Die Aussichtsplattform des Turms bietet Panoramablicke auf die Förde und die Stadt. Besucher können die historischen Innenräume während Führungen erkunden. Es ist ein Muss für seine architektonische Schönheit und historische Bedeutung.',
        schifffahrtsmuseum: 'Schifffahrtsmuseum',
        schifffahrtsmuseum_desc: 'Das Schifffahrtsmuseum in Kiel erforscht die maritime Geschichte der Stadt, untergebracht in einem ehemaligen Fischmarkt an der Förde. Ausstellungen umfassen Schiffsmodelle, Navigationswerkzeuge und Geschichten aus Kiels Schiffbaugeschichte. Die Lage am Wasser verstärkt den nautischen Charme des Museums. Besucher können die Rolle der Region im maritimen Handel und in der Erforschung kennenlernen. Es ist ein faszinierender Halt für Geschichts- und Meeresliebhaber.',
        holtenauer_schleuse: 'Holtenauer Schleuse',
        holtenauer_schleuse_desc: 'Die Holtenauer Schleuse ist Teil des Nord-Ostsee-Kanals, einer der verkehrsreichsten künstlichen Wasserwege der Welt, der die Nordsee mit der Ostsee verbindet. 1895 erbaut, ist sie ein technisches Wunderwerk, das Schiffen den Übergang zwischen verschiedenen Wasserständen ermöglicht. Besucher können riesige Schiffe von Aussichtsplattformen aus beim Navigieren der Schleuse beobachten. Informationstafeln erklären ihre Bedeutung für den globalen Handel. Es ist eine einzigartige Attraktion für diejenigen, die sich für maritime Technik interessieren.'
      },
      rostock: {
        warnemunder_leuchtturm: 'Warnemünder Leuchtturm',
        warnemunder_leuchtturm_desc: 'Der Warnemünder Leuchtturm in Rostock ist ein 37-Meter-Leuchtfeuer, das Schiffe entlang der Ostseeküste führt. 1898 erbaut, ist er ein geliebtes Symbol des Seeviertels und bietet Ausblicke auf den Hafen und den Strand. Besucher können im Sommer die Wendeltreppe erklimmen, um Panoramablicke zu genießen. Der Leuchtturm ist ein Mittelpunkt während der Hanse Sail, Rostocks maritimem Festival. Es ist ein malerischer Ort für Küstencharme.',
        rostocker_rathaus: 'Rostocker Rathaus',
        rostocker_rathaus_desc: 'Das Rostocker Rathaus ist ein gotisches und barockes Wahrzeichen im historischen Zentrum der Stadt, das auf das 13. Jahrhundert zurückgeht. Seine verzierte Fassade zeigt sieben Türmchen und eine historische Uhr. Das Innere beherbergt ein Museum, das Rostocks hansische Vergangenheit zeigt. Besucher können die Architektur vom belebten Marktplatz aus bewundern. Es ist ein stolzes Symbol für das mittelalterliche Handelserbe der Stadt.',
        kropeliner_strasse: 'Kröpeliner Straße',
        kropeliner_strasse_desc: 'Die Kröpeliner Straße ist Rostocks lebendige Fußgängerzone, gesäumt von historischen Giebelhäusern und modernen Geschäften. Sie führt zum Kröpeliner Tor und ist ein Zentrum für Einkäufe, Gastronomie und Menschenbeobachtung. Die lebendige Atmosphäre der Straße spiegelt Rostocks Mischung aus Vergangenheit und Gegenwart wider. Besucher können nahegelegene Cafés und die Universität, eine der ältesten Europas, erkunden. Es ist ein perfekter Ort, um die Energie der Stadt aufzusaugen.',
        st_marien: 'St.-Marien-Kirche',
        st_marien_desc: 'Die St.-Marien-Kirche ist Rostocks größte mittelalterliche Kirche, bekannt für ihre gotische Architektur und die astronomische Uhr von 1472. Die noch funktionsfähige Uhr zeigt Tierkreiszeichen und Mondphasen an. Der 85-Meter-Turm der Kirche bietet Ausblicke auf die Stadt und den Hafen. Besucher können Orgelkonzerte besuchen oder die historischen Innenräume erkunden. Es ist ein ruhiger Raum, der Rostocks spirituelles und kulturelles Erbe widerspiegelt.'
      },
      mainz: {
        mainzer_dom: 'Mainzer Dom',
        mainzer_dom_desc: 'Der Mainzer Dom, oder Mainzer Dom, ist ein romanisches Meisterwerk, das über 1.000 Jahre alt ist. Seine rote Sandsteinfassade und sechs Türme prägen die Skyline der Stadt. Die Kathedrale überstand Kriege und Brände und beherbergt Schätze wie mittelalterliche Gräber und Buntglasfenster. Besucher können den Kreuzgang erkunden und Orgelkonzerte besuchen. Es ist ein zentrales Symbol für Mainz’ religiöse und historische Bedeutung.',
        gutenberg_museum: 'Gutenberg-Museum',
        gutenberg_museum_desc: 'Das Gutenberg-Museum in Mainz feiert Johannes Gutenberg, den Erfinder des Buchdrucks. Ausstellungen umfassen originale Gutenberg-Bibeln, historische Pressen und frühe gedruckte Bücher. Das Museum bietet Druckvorführungen, die die Geschichte für Besucher lebendig machen. Seine Lage in der Nähe des Doms verstärkt seinen kulturellen Reiz. Es ist ein Muss für diejenigen, die sich für die Geschichte der Kommunikation interessieren.',
        rheinpromenade: 'Rheinpromenade',
        rheinpromenade_desc: 'Die Rheinpromenade in Mainz ist ein malerischer Spazierweg entlang des Flusses, der Ausblicke auf vorbeiziehende Schiffe und die Taunusberge bietet. Gesäumt von Cafés und Bänken, ist es ein entspannender Ort für Einheimische und Touristen. Die Promenade beherbergt Festivals wie die Johannisnacht, die Mainz’ Erbe feiert. Besucher können zu nahegelegenen Sehenswürdigkeiten wie der Theodor-Heuss-Brücke spazieren. Es ist ein lebendiges Gebiet, um die Schönheit des Rheins zu genießen.',
        theater_mainz: 'Staatstheater Mainz',
        theater_mainz_desc: 'Das Staatstheater Mainz ist ein neoklassizistisches Juwel, das Opern, Theaterstücke und Ballette in einer eleganten Umgebung zeigt. 1829 erbaut, schaffen sein großer Zuschauerraum und die verzierte Ausstattung ein unvergessliches Erlebnis. Das vielfältige Programm des Theaters spricht Kulturbegeisterte aller Altersgruppen an. Besucher können an Führungen teilnehmen, um die Geschichte und Architektur zu erkunden. Es ist ein kultureller Eckpfeiler in Mainz’ lebendiger Kunstszene.'
      },
      saarbrucken: {
        saarbrucker_schloss: 'Saarbrücker Schloss',
        saarbrucker_schloss_desc: 'Das Saarbrücker Schloss ist eine barocke Residenz, die nach dem Zweiten Weltkrieg wiederaufgebaut wurde und elegante Architektur zeigt. Einst Heimat der saarländischen Fürsten, beherbergt es heute kulturelle Veranstaltungen und Regierungsbüros. Die weiße Fassade und die gepflegten Gärten des Schlosses sind ein Highlight für Besucher. Geführte Touren zeigen seine Geschichte und die restaurierten Innenräume. Es ist ein stolzes Symbol für Saarbrückens Erbe und Widerstandsfähigkeit.',
        ludwigskirche: 'Ludwigskirche',
        ludwigskirche_desc: 'Die Ludwigskirche ist ein barockes Meisterwerk in Saarbrücken, oft als „schönste Barockkirche Deutschlands“ bezeichnet. 1775 erbaut, sind ihr symmetrisches Design und das pastellfarbene Innere atemberaubend. Die Kirche veranstaltet Konzerte, die ihre hervorragende Akustik präsentieren. Besucher können den verzierten Altar und die Deckenfresken bewundern. Es ist ein ruhiger Ort, der die architektonische Pracht der Stadt widerspiegelt.',
        saar: 'Saar',
        saar_desc: 'Die Saar fließt durch Saarbrücken und prägt die Landschaft und Geschichte der Stadt. Ihre Ufer bieten malerische Wege zum Spazieren und Radfahren mit Ausblicken auf historische Brücken. Der Fluss ist ein Zentrum für Bootstouren und Festivals wie das Saar-Spektakel. Besucher können in Cafés am Fluss entspannen oder nahegelegene Parks erkunden. Es ist eine ruhige Kulisse, um Saarbrückens Charme zu erleben.',
        deutsch_franzosischer_garten: 'Deutsch-Französischer Garten',
        deutsch_franzosischer_garten_desc: 'Der Deutsch-Französische Garten in Saarbrücken ist ein Symbol der grenzüberschreitenden Freundschaft und verbindet deutsche und französische Landschaftsgestaltung. Auf 50 Hektar bietet er Seen, Skulpturen und thematische Gärten. Der Park veranstaltet Konzerte und familienfreundliche Events, die eine lebendige Atmosphäre schaffen. Besucher können Bootsfahrten genießen oder in den ruhigen Räumen entspannen. Es ist ein friedlicher Rückzugsort, der kulturelle Einheit feiert.'
      },
      augsburg: {
        augsburger_dom: 'Augsburger Dom',
        augsburger_dom_desc: 'Der Augsburger Dom ist ein romanisches und gotisches Wunderwerk, das auf das 11. Jahrhundert zurückgeht. Sein altes Buntglas, eines der ältesten der Welt, zeigt biblische Szenen in lebendigen Farben. Der Kreuzgang und die Bronzetür des Doms sind Highlights für Besucher. Er beherbergt Konzerte, die seine spirituelle Atmosphäre verstärken. Es ist ein wichtiger Halt, um Augsburgs reiche religiöse Geschichte zu erkunden.',
        fuggerei: 'Fuggerei',
        fuggerei_desc: 'Die Fuggerei in Augsburg ist der älteste Soziale Wohnungsbau der Welt, 1516 von Jakob Fugger gegründet. Noch heute in Betrieb, bietet sie günstige Wohnungen für einen symbolischen Mietpreis von einem Gulden pro Jahr. Die gepflasterten Straßen und malerischen Häuser der Siedlung bieten einen Einblick in das Leben der Renaissance. Besucher können das Museum und eine erhaltene Wohnung erkunden. Es ist ein einzigartiges Zeugnis von Augsburgs sozialer und wirtschaftlicher Vergangenheit.',
        rathaus_augsburg: 'Rathaus Augsburg',
        rathaus_augsburg_desc: 'Das Augsburger Rathaus ist ein Renaissance-Meisterwerk, bekannt für seinen Goldenen Saal, der mit Goldblatt und Fresken verziert ist. 1620 erbaut, ist es ein Symbol für den Reichtum der Stadt im Heiligen Römischen Reich. Die Fassade und der Glockenturm des Gebäudes sind ikonische Wahrzeichen. Besucher können die prunkvollen Innenräume besichtigen und mehr über Augsburgs bürgerliche Geschichte erfahren. Es ist ein Highlight des architektonischen Erbes der Stadt.',
        perlachturm: 'Perlachturm',
        perlachturm_desc: 'Der Perlachturm ist ein 70 Meter hoher mittelalterlicher Turm in Augsburg, der an klaren Tagen Panoramablicke auf die Stadt und die Alpen bietet. Zusammen mit dem Rathaus ist er ein prägendes Merkmal der Skyline. Der Turm diente einst als Wachturm und Feuersignalisierungspunkt. Besucher können seine 261 Stufen erklimmen für ein lohnendes Erlebnis. Es ist ein Muss für diejenigen, die Geschichte und atemberaubende Ausblicke suchen.'
      },
      wiesbaden: {
        kurhaus_wiesbaden: 'Kurhaus Wiesbaden',
        kurhaus_wiesbaden_desc: 'Das Kurhaus Wiesbaden ist ein großartiges neoklassizistisches Gebäude, Heimat des Casinos und der Konzertsäle der Stadt. 1907 erbaut, strahlen seine prunkvollen Innenräume und Kolonnaden Eleganz aus. Der umliegende Bowling Green und die Springbrunnen schaffen eine malerische Kulisse. Besucher können Veranstaltungen besuchen oder einfach die Architektur bewundern. Es ist ein kultureller und gesellschaftlicher Treffpunkt in Wiesbadens Kurstadt-Atmosphäre.',
        neroberg: 'Neroberg',
        neroberg_desc: 'Der Neroberg ist ein malerischer Hügel in Wiesbaden, der Weinberge, eine Standseilbahn und Ausblicke auf das Rheintal bietet. Die russisch-orthodoxe Kirche auf dem Hügel mit ihren goldenen Kuppeln verleiht einen exotischen Touch. Die Opel-Bäder, ein historischer Badekomplex, ziehen im Sommer Familien an. Besucher können Wanderwege erkunden oder im Parkgelände entspannen. Es ist ein ruhiger Rückzugsort, der Natur und Geschichte verbindet.',
        marktkirche: 'Marktkirche',
        marktkirche_desc: 'Die Marktkirche ist Wiesbadens Hauptprotestantenkirche, ein neogotisches Wahrzeichen mit fünf charakteristischen Türmen. 1862 erbaut, dominiert ihre rote Ziegelfassade den Marktplatz. Die Orgelkonzerte und Innenmosaiken der Kirche ziehen Besucher an. Ihr 92-Meter-Turm bietet Stadtblicke für diejenigen, die ihn erklimmen. Es ist ein markantes Symbol für Wiesbadens architektonisches und spirituelles Erbe.',
        rheingau: 'Rheingau Weinregion',
        rheingau_desc: 'Der Rheingau, in der Nähe von Wiesbaden, ist eine renommierte Weinregion, bekannt für Riesling und Spätburgunder. Seine sanften Weinberge und historischen Güter, wie Schloss Johannisberg, ziehen Weinliebhaber an. Besucher können Keller besichtigen, Weine probieren und Festivals wie das Rheingau Musik Festival genießen. Die malerische Schönheit des Rheins bereichert das Erlebnis. Es ist ein entzückendes Ziel für Genießer von Speisen und Wein.'
      },
      erfurt: {
        erfurter_dom: 'Erfurter Dom',
        erfurter_dom_desc: 'Der Erfurter Dom, oder Mariendom, ist ein gotisches und romanisches Wahrzeichen auf einem Hügel, gepaart mit der St.-Severi-Kirche. Seine Schätze umfassen eine Madonna-Statue aus dem 13. Jahrhundert und lebendige Buntglasfenster. Die Stufen der Kathedrale beherbergen Festivals und Märkte, die eine lebendige Atmosphäre schaffen. Besucher können die verzierten Innenräume erkunden und Stadtblicke genießen. Es ist ein spirituelles und kulturelles Herz Erfurts.',
        kramerbrucke: 'Krämerbrücke',
        kramerbrucke_desc: 'Die Krämerbrücke ist eine mittelalterliche Brücke in Erfurt, gesäumt von Fachwerkhäusern und Geschäften, ein seltenes architektonisches Juwel. 1325 erbaut, überspannt sie die Gera und bleibt ein belebtes Handelszentrum. Besucher können Kunsthandwerksläden erkunden, die Handwerk und Süßigkeiten verkaufen. Der Charme der Brücke macht sie zu einem Favoriten für Fotografen. Es ist ein lebendiges Stück Erfurts Geschichte, Tag und Nacht lebendig.',
        zitadelle_petersberg: 'Zitadelle Petersberg',
        zitadelle_petersberg_desc: 'Die Zitadelle Petersberg ist eine Festung aus dem 17. Jahrhundert in Erfurt, eine der am besten erhaltenen in Deutschland. Ihr sternförmiges Design und die unterirdischen Tunnel bieten Einblicke in die Militärgeschichte. Die Zitadelle beherbergt Events wie Open-Air-Konzerte und historische Nachstellungen. Besucher können an Führungen teilnehmen, um die Wälle und Ausstellungen zu erkunden. Es ist ein faszinierender Ort für Geschichtsinteressierte und Familien.',
        egapark: 'EgaPark',
        egapark_desc: 'Der EgaPark ist ein weitläufiger Garten in Erfurt, bekannt für seine farbenfrohen Blumenbeete, Skulpturen und den Aussichtsturm. Auf 36 Hektar bietet er thematische Bereiche wie den Japanischen Garten und ein Schmetterlingshaus. Der Park veranstaltet Gartenbauausstellungen und familienfreundliche Events. Besucher können an den Teichen entspannen oder saisonale Displays erkunden. Es ist ein lebendiger grüner Raum für Natur und Freizeit.'
      },
    heidelberg: {
      heidelberg_schloss: 'Heidelberger Schloss',
      heidelberg_schloss_desc: 'Das Heidelberger Schloss ist eine der berühmtesten Schlossruinen Deutschlands. Hoch über der Altstadt gelegen, bietet es nicht nur eine reiche Geschichte, sondern auch einen atemberaubenden Blick auf den Neckar und die Stadt. Besucher können die imposanten Überreste erkunden, das Apothekenmuseum besuchen und mit der Bergbahn anreisen.',
      alte_bruecke: 'Alte Brücke',
      alte_bruecke_desc: 'Die Alte Brücke, offiziell Karl-Theodor-Brücke, ist ein historisches Wahrzeichen von Heidelberg. Sie verbindet die Altstadt mit dem gegenüberliegenden Neckarufer und bietet malerische Ausblicke auf das Schloss. Die Brücke stammt aus dem 18. Jahrhundert und ist ein beliebter Fotospot für Touristen.',
      philosophenweg: 'Philosophenweg',
      philosophenweg_desc: 'Der Philosophenweg ist ein idyllischer Spazierweg mit spektakulärem Blick auf die Heidelberger Altstadt, das Schloss und den Fluss. Er war einst ein Rückzugsort für Gelehrte und Dichter und ist heute ein beliebter Ort für Spaziergänge, besonders im Frühling, wenn die Natur in voller Blüte steht.',
      universitaetsbibliothek: 'Universitätsbibliothek Heidelberg',
      universitaetsbibliothek_desc: 'Die Universitätsbibliothek Heidelberg ist ein architektonisches Juwel und eine der ältesten Bibliotheken Deutschlands. Sie gehört zur renommierten Universität Heidelberg und beeindruckt durch ihre prachtvolle Fassade und wertvolle historische Bestände. Ein Besuch lohnt sich für Geschichts- und Literaturinteressierte.'
  }
    }
  }
};

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'de', // Varsayılan dil: Almanca
  fallbackLocale: 'en', // Hata durumunda İngilizce
  messages
});

export default i18n;