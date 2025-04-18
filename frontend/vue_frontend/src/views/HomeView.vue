<template>
  <div class="home-container">
    <div class="content-wrapper">
      <div class="slogan">
        <h1>Buche dein Zugtickets, Plane deine Reise</h1>
      </div>
      <form class="booking-form" @submit.prevent="handleSearch">
        <!-- Şehir Input'ları -->
        <div class="form-group">
          <div class="input-wrapper">
            <span class="icon">📍</span>
            <input
              type="text"
              placeholder="Von (z.B. Köln Hbf)"
              class="form-input top"
              v-model.trim="fromCity"
              ref="from"
              @input="filterStations('from')"
            />
            <button type="button" class="swap-button" @click="swapCities">↕</button>
            <ul v-if="filteredFromStations.length" class="suggestion-list">
              <li
                v-for="station in filteredFromStations"
                :key="station"
                @click="selectStation('from', station)"
                class="suggestion-item"
              >
                {{ station }}
              </li>
            </ul>
          </div>
          <div class="input-wrapper">
            <span class="icon">📍</span>
            <input
              type="text"
              placeholder="Nach (z.B. Aachen Hbf)"
              class="form-input bottom"
              v-model.trim="toCity"
              ref="to"
              @input="filterStations('to')"
            />
            <ul v-if="filteredToStations.length" class="suggestion-list">
              <li
                v-for="station in filteredToStations"
                :key="station"
                @click="selectStation('to', station)"
                class="suggestion-item"
              >
                {{ station }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Tarih ve Saat Input'ları -->
        <div class="form-group">
          <div class="input-wrapper">
            <span class="icon">📅</span>
            <input type="date" placeholder="Hinreise" class="form-input" ref="date" v-model="selectedDate" />
          </div>
          <div class="input-wrapper">
            <span class="icon">🕒</span>
            <input type="time" placeholder="Uhrzeit" class="form-input" ref="time" v-model="selectedTime" />
          </div>
        </div>

        <!-- Suche Butonu -->
        <button type="submit" class="search-button">Suche</button>
      </form>
    </div>

    <!-- Tren Listesi -->
    <div class="train-results" v-if="searched">
      <div v-if="trainResults.length > 0">
        <h2>Verfügbare Züge</h2>
        <table class="train-table">
          <thead>
            <tr>
              <th>Zugnummer</th>
              <th>Zugtyp</th>
              <th>Ab</th>
              <th>An</th>
              <th>Geplante Abfahrt</th>
              <th>Geplante Ankunft</th>
              <th>Verspätung (Min)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="train in trainResults" :key="train.train_reihenfolge_from">
              <td>{{ train.train_reihenfolge_from }}</td>
              <td>{{ train.train_classification }}</td>
              <td>{{ train.from_station }}</td>
              <td>{{ train.to_station }}</td>
              <td>{{ formatTime(train.planned_departure_from) }}</td>
              <td>{{ formatTime(train.planned_arrival_to) }}</td>
              <td>{{ train.arrival_delay_from || train.arrival_delay_to || 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Keine Züge für diese Route gefunden.</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>

    <section class="cities">
      <h2>Popular Cities in Germany</h2>
      <div class="city-grid">
        <router-link v-for="city in cities" :key="city" :to="`/city/${city}`" class="city">
          {{ city }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { citiesList } from '@/data/citiesData';

export default {
  data() {
    return {
      cities: citiesList,
      stations: [],
      filteredFromStations: [],
      filteredToStations: [],
      fromCity: '',
      toCity: '',
      selectedDate: '',
      selectedTime: '',
      trainResults: [],
      searched: false,
      errorMessage: null,
    };
  },
  async mounted() {
    await this.loadStations();
  },
  methods: {
    async loadStations() {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/stations", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Şehirler yüklenemedi.");
        }

        this.stations = data.stations || [];
        console.log("Yüklenen şehirler:", this.stations);
      } catch (error) {
        console.error("Şehirleri çekerken hata:", error);
        this.errorMessage = `❌ Hata: ${error.message}`;
        this.stations = [""];
      }
    },
    swapCities() {
      const temp = this.fromCity;
      this.fromCity = this.toCity;
      this.toCity = temp;
      this.filterStations('from');
      this.filterStations('to');
    },
    filterStations(field) {
      const query = (field === 'from' ? this.fromCity : this.toCity).toLowerCase().trim();
      console.log(`Filtreleme: ${field}, Query: ${query}`);
      if (query) {
        const filtered = this.stations.filter(station =>
            station && station.toLowerCase().startsWith(query)
        );
        console.log("Filtrelenmiş şehirler:", filtered);
        if (field === 'from') {
          this.filteredFromStations = filtered;
        } else {
          this.filteredToStations = filtered;
        }
      } else {
        if (field === 'from') {
          this.filteredFromStations = [];
        } else {
          this.filteredToStations = [];
        }
      }
    },
    selectStation(field, station) {
      if (field === 'from') {
        this.fromCity = station;
        this.filteredFromStations = [];
      } else {
        this.toCity = station;
        this.filteredToStations = [];
      }
    },
    async handleSearch() {
      this.searched = true;
      this.errorMessage = null;

      const formData = {
        from_station: this.fromCity.trim(),
        to_station: this.toCity.trim(),
        travel_date: this.selectedDate,
        travel_time: this.selectedTime,
      };
      console.log("Gönderilen veri:", formData);

      try {
        const response = await fetch("http://127.0.0.1:5000/api/trains", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Tren araması başarısız.");
        }

        this.trainResults = data.trains || [];
        if (this.trainResults.length === 0) {
          console.log("Hiç tren bulunamadı, veri doğru mu?");
        }
      } catch (error) {
        console.error("Tren arama hatası:", error);
        this.errorMessage = `❌ Hata: ${error.message}`;
        this.trainResults = [];
      }
    },
    formatTime(time) {
      if (!time) return '-';
      return time;
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

.home-container {
  font-family: Arial, sans-serif;
  color: #333;
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  padding: 4rem 2rem;
}

.slogan {
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.slogan h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

.booking-form {
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

.form-group {
  margin-bottom: 1rem;
}

.input-wrapper {
  position: relative;
}

.icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.form-input {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid #ddd;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.form-input:focus {
  border-color: #00a680;
}

.form-input.top {
  border-radius: 4px 4px 0 0;
  border-bottom: none;
}

.form-input.bottom {
  border-radius: 0 0 4px 4px;
}

.swap-button {
  position: absolute;
  right: 1rem;
  top: 100%;
  transform: translateY(-50%);
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 1;
}

.swap-button:hover {
  background: #e0e0e0;
}

.suggestion-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 0 0 4px 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
}

.suggestion-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.suggestion-item:hover {
  background-color: #f0f0f0;
}

.search-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #00a680;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #008c66;
}

.cities {
  width: 100%;
  max-width: 50vw;
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: auto;
  margin-left: 4rem;
  margin-top: auto;
  margin-bottom: 2rem
}

.cities h2{
  font-weight: bold;
}

.city-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.city {
  background: rgba(255, 255, 255, 0.7);
  padding: 0.75rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  color: inherit;
}

.city:hover {
  background-color: rgba(221, 221, 221, 0.7);
}

.train-results {
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}

.train-table {
  width: 100%;
  border-collapse: collapse;
}

.train-table th,
.train-table td {
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: left;
}

.train-table th {
  background-color: #00a680;
  color: white;
}

.train-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.train-table tr:hover {
  background-color: #e0e0e0;
}
</style>