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
      weatherLoading: 'Weather is loading...'
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
      error: 'Error'
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
      weatherLoading: 'Wetter wird geladen...'
    },
    home: {
      slogan: 'Buche deine Zugtickets, plane deine Reise',
      search: 'Suche',
      from: 'Von (z.B. Köln Hbf)',
      to: 'Nach (z.B. Aachen Hbf)',
      popularCities: 'Beliebte Städte in Deutschland',
      noTrains: 'Keine Züge für diese Route gefunden.',
      availableTrains: 'Verfügbare Züge',
      trainNumber: 'Zugnummer',
      trainType: 'Zugtyp',
      departure: 'Abfahrt',
      arrival: 'Ankunft',
      plannedDeparture: 'Geplante Abfahrt',
      plannedArrival: 'Geplante Ankunft',
      delay: 'Verspätung (Min)',
      error: 'Fehler'
    },
    city: {
      hide: 'Ausblenden',
      show: 'Anzeigen',
      welcome: 'Willkommen in {city}',
      close: 'Schließen',
      sights: 'Sehenswürdigkeiten',
      viewMore: 'Mehr ansehen'
    },
    weather: {
      temperature: 'Temperatur',
      feelsLike: 'Gefühlt',
      description: 'Wetterbeschreibung',
      error: 'Wetterdaten konnten nicht abgerufen werden'
    }
  }
};

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'de', // Varsayılan dil: Almanca
  fallbackLocale: 'en', // Hata durumunda İngilizce
  messages
});

export default i18n;