<template>
  <div class="home-container">
    <div class="content-wrapper">
      <div class="slogan">
        <h1>{{ $t('home.slogan') }}</h1>
      </div>
      <form class="booking-form" @submit.prevent="handleSearch">
        <!-- Şehir Input'ları -->
        <div class="form-group">
          <div class="input-wrapper">
            <span class="icon">📍</span>
            <input
              type="text"
              :placeholder="$t('home.from')"
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
              :placeholder="$t('home.to')"
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
            <input
              type="date"
              placeholder="Hinreise"
              class="form-input"
              ref="date"
              v-model="selectedDate"
              :min="minDate"
              :max="maxDate"
            />
          </div>
          <div class="input-wrapper">
            <span class="icon">🕒</span>
            <input type="time" placeholder="Uhrzeit" class="form-input" ref="time" v-model="selectedTime" />
          </div>
        </div>

        <!-- Hata Mesajı (Sadece Form için) -->
        <p v-if="formErrorMessage" class="error-message">{{ formErrorMessage }}</p>

        <!-- Suche Butonu -->
        <button type="submit" class="search-orange-button">{{ $t('home.search') }}</button>
      </form>
    </div>

    <div class="train-results" v-if="searched">
      <!-- Yükleme Animasyonu -->
      <div v-if="isLoading" class="train-animation">
        <!-- class="loading-spinner">
        <div class="spinner"></div>
        <p>{{ $t('home.loading') }}</p>-->
      </div>
      <!-- Rota Sonuçları -->
      <div v-else-if="routeResults.length > 0">
        <h2>{{ $t('home.availableRoutes') }}</h2>
        <!-- Tek bir route-header tüm rotalar için -->
        <div class="route-header" v-if="routeResults[0] && routeResults[0].route[0]">
          <div class="info-box">{{ $t('home.start') }}: {{ routeResults[0].route[0].station_name_from }}</div>
          <div class="info-box">{{ $t('home.goal') }}: {{ routeResults[0].route[routeResults[0].route.length - 1].station_name_to }}</div>
          <div class="info-box">{{ $t('home.date') }}: {{ formatDateOnly(routeResults[0].route[0].planned_arrival_date_from) }}</div>
        </div>

        <!-- Her rota için ayrı route-container -->
        <div v-for="(route, index) in routeResults" :key="index" class="route-container">
          <!-- Tren Dikdörtgenleri -->
          <div class="train-bar-container">
            <!-- Uyarı Mesajı -->
            <div
              v-if="route.alternative_routeninfos && route.alternative_routeninfos.some(info => info.status === 'ALTERNATIVE GEFUNDEN')"
              class="warning-message"
            >
              <span class="warning-icon blink">⚠️</span>
              <span class="warning-text blink">{{ $t('home.attention') }}</span>
              <span>{{ $t('home.warningMessage1') }} ICE {{ getDelayedTrainNumber(route) }} | {{ $t('home.warningMessage2') }} ICE {{ getMissedTrainNumber(route) }}</span>
            </div>
            <div
              v-for="(train, trainIndex) in groupByTrainNumber(route.route)"
              :key="train.train_number + trainIndex"
              class="train-bar"
              :style="{ width: calculateTrainBarWidth(train, route.route) + '%' }"
              :class="{ 'last-train': trainIndex === groupByTrainNumber(route.route).length - 1 }"
            >
              <!-- Kalkış Saati (Sol Köşe) -->
              <span class="time time-left">{{ formatTimeOnly(train.legs[0].planned_departure_from) }}</span>
              <!-- Tren Tipi ve Numarası -->
              <span class="train-number">{{ train.zugtyp ? `${train.zugtyp} ${train.train_number}` : `ICE ${train.train_number}` }}</span>
              <!-- Varış Saati ve Yeni Beklenen Varış Saati (Sağ Köşe) -->
              <span class="expected-time">{{ calculateExpectedArrivalTime(train) }}</span>
              <span class="on-time-probability">{{ getOnTimeProbability(train) }}%</span>
              <span class="time time-right">{{ formatTimeOnly(train.legs[train.legs.length - 1].planned_arrival_to) }}</span>
              <!-- Başlangıç, Aktarma ve Varış İstasyonları -->
              <div v-if="trainIndex === 0" class="station station-left">{{ train.legs[0].station_name_from }}</div>
              <div
                v-if="trainIndex < groupByTrainNumber(route.route).length - 1 && calculateTrainBarWidth(train, route.route) >= 12"
                class="station station-right-end"
              >
                {{ train.legs[train.legs.length - 1].station_name_to }}
              </div>
              <div v-if="trainIndex === groupByTrainNumber(route.route).length - 1" class="station station-right">
                {{ train.legs[train.legs.length - 1].station_name_to }}
              </div>
            </div>
          </div>

          <!-- Alternativi Göster Butonu -->
          <div class="action-buttons">
            <button
              v-if="route.alternative_routeninfos && route.alternative_routeninfos.some(info => info.status === 'ALTERNATIVE GEFUNDEN')"
              class="alternative-button"
              @click="toggleAlternative(index)"
            >
              {{ expandedAlternatives.includes(index) ? $t('home.hideAlternative') : $t('home.showAlternative') }}
            </button>
            <div class="details-toggle" @click="toggleDetails(index)">
              {{ expandedRoutes.includes(index) ? $t('home.hideDetails') : 'Details' }}
            </div>
          </div>

          <!-- Detaylar (Orijinal Rota) -->
          <div v-if="expandedRoutes.includes(index)" class="details-container">
            <ul class="station-list">
              <li v-for="(trainGroup, trainIndex) in groupByTrainNumber(route.route)" :key="trainIndex" class="train-section">
                <!-- Tren Başlığı -->
                <div class="train-header">
                  <span class="train-info">{{ trainGroup.zugtyp ? `${trainGroup.zugtyp} ${trainGroup.train_number}` : `ICE ${trainGroup.train_number}` }}</span>
                </div>
                <!-- Duraklar -->
                <div v-for="(leg, legIndex) in trainGroup.legs" :key="legIndex" class="station-item">
                  <!-- Başlangıç İstasyonu -->
                  <div v-if="legIndex === 0" class="station-detail">
                    <strong class="highlight-station">{{ leg.station_name_from }}</strong>
                    <span class="departure-time">{{ formatTimeOnly(leg.planned_departure_from) }}</span>
                  </div>
                  <!-- Varış ve Kalkış -->
                  <div class="station-detail">
                    <strong :class="{ 'highlight-station': legIndex === trainGroup.legs.length - 1 || isTransferStation(route.route, getLegIndex(route.route, leg)) }">
                      {{ leg.station_name_to }}
                    </strong>
                    <span class="arrival-time">{{ formatTimeOnly(leg.planned_arrival_to) }}</span>
                    <span v-if="legIndex < trainGroup.legs.length - 1 && !isTransferStation(route.route, getLegIndex(route.route, leg))" class="departure-time">
                      - {{ formatTimeOnly(getDepartureTime(route.route, getLegIndex(route.route, leg))) }}
                    </span>
                    <span class="delay">+{{ roundUpDelay(getPredictedDelay(leg, index, getLegIndex(route.route, leg))) }} min</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Alternatif Rota Container -->
          <div v-if="expandedAlternatives.includes(index) && route.alternative_routeninfos && route.alternative_routeninfos[0].alternative_route" class="alternative-route-container">
            <h3>{{ $t('home.alternativeRoute') }}</h3>
            <!-- Alternatif Rota Tren Barları -->
            <div class="train-bar-container">
              <div
                v-for="(train, trainIndex) in groupByTrainNumber(route.alternative_routeninfos[0].alternative_route)"
                :key="train.train_number + trainIndex"
                class="train-bar"
                :style="{ width: calculateTrainBarWidth(train, route.alternative_routeninfos[0].alternative_route) + '%' }"
                :class="{ 'last-train': trainIndex === groupByTrainNumber(route.alternative_routeninfos[0].alternative_route).length - 1 }"
              >
                <span class="time time-left">{{ formatTimeOnly(train.legs[0].planned_departure_from) }}</span>
                <span class="train-number">{{ train.zugtyp ? `${train.zugtyp} ${train.train_number}` : `ICE ${train.train_number}` }}</span>
                <span class="expected-time">{{ calculateExpectedArrivalTime(train) }}</span>
                <span class="time time-right">{{ formatTimeOnly(train.legs[train.legs.length - 1].planned_arrival_to) }}</span>
                <div v-if="trainIndex === 0" class="station station-left">{{ train.legs[0].station_name_from }}</div>
                <div
                  v-if="trainIndex < groupByTrainNumber(route.alternative_routeninfos[0].alternative_route).length - 1 && calculateTrainBarWidth(train, route.alternative_routeninfos[0].alternative_route) >= 12"
                  class="station station-right-end"
                >
                  {{ train.legs[train.legs.length - 1].station_name_to }}
                </div>
                <div v-if="trainIndex === groupByTrainNumber(route.alternative_routeninfos[0].alternative_route).length - 1" class="station station-right">
                  {{ train.legs[train.legs.length - 1].station_name_to }}
                </div>
              </div>
            </div>

            <!-- Alternatif Rota Detay Butonu -->
            <div class="action-buttons">
              <div class="details-toggle" @click="toggleAlternativeDetails(index)">
                {{ expandedAlternativeDetails.includes(index) ? $t('home.hideDetails') : 'Details' }}
              </div>
            </div>

            <!-- Alternatif Rota Detaylar -->
            <div v-if="expandedAlternativeDetails.includes(index)" class="details-container">
              <ul class="station-list">
                <li v-for="(trainGroup, trainIndex) in groupByTrainNumber(route.alternative_routeninfos[0].alternative_route)" :key="trainIndex" class="train-section">
                  <div class="train-header">
                    <span class="train-info">{{ trainGroup.zugtyp ? `${trainGroup.zugtyp} ${trainGroup.train_number}` : `ICE ${trainGroup.train_number}` }}</span>
                  </div>
                  <div v-for="(leg, legIndex) in trainGroup.legs" :key="legIndex" class="station-item">
                    <div v-if="legIndex === 0" class="station-detail">
                      <strong class="highlight-station">{{ leg.station_name_from }}</strong>
                      <span class="departure-time">{{ formatTimeOnly(leg.planned_departure_from) }}</span>
                    </div>
                    <div class="station-detail">
                      <strong :class="{ 'highlight-station': legIndex === trainGroup.legs.length - 1 || isTransferStation(route.alternative_routeninfos[0].alternative_route, getLegIndex(route.alternative_routeninfos[0].alternative_route, leg)) }">
                        {{ leg.station_name_to }}
                      </strong>
                      <span class="arrival-time">{{ formatTimeOnly(leg.planned_arrival_to) }}</span>
                      <span v-if="legIndex < trainGroup.legs.length - 1 && !isTransferStation(route.alternative_routeninfos[0].alternative_route, getLegIndex(route.alternative_routeninfos[0].alternative_route, leg))" class="departure-time">
                        - {{ formatTimeOnly(getDepartureTime(route.alternative_routeninfos[0].alternative_route, getLegIndex(route.alternative_routeninfos[0].alternative_route, leg))) }}
                      </span>
                      <span class="delay">+{{ roundUpDelay(getPredictedDelay(leg, index, getLegIndex(route.alternative_routeninfos[0].alternative_route, leg))) }} min</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Hata Mesajı veya No Routes -->
      <div v-else>
        <p v-if="!errorMessage">{{ $t('home.noRoutes') }}</p>
        <p v-if="errorMessage" class="error-message">{{ $t('home.error') }}: {{ errorMessage }}</p>
      </div>
    </div>

    <section class="cities">
      <h2>{{ $t('home.popularCities') }}</h2>
      <div class="city-grid">
        <router-link v-for="city in cities" :key="city" :to="`/city/${city}`" class="city">
          {{ $t(`cities.${city}`) }}
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
      fromCity: '',
      toCity: '',
      selectedDate: '',
      selectedTime: '',
      cities: citiesList,
      stations: [],
      filteredFromStations: [],
      filteredToStations: [],
      routeResults: [],
      predictionResults: [],
      isLoading: false,
      searched: false,
      errorMessage: '', // train-results için
      formErrorMessage: '', // booking-form için
      expandedRoutes: [],
      expandedAlternatives: [],
      expandedAlternativeDetails: [],
      minDate: '',
      maxDate: '',
    };
  },
  created() {
    this.setDateConstraints();
    this.selectedDate = this.minDate; // Varsayılan bugünü seç
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
          throw new Error(data.error || this.$t('home.error'));
        }

        // Backend'den gelen station_list_from ve station_list_to'yu ayır
        this.stations_from = data.stations_from || [];
        this.stations_to = data.stations_to || [];
        console.log("Yüklenen şehirler (from):", this.stations_from);
        console.log("Yüklenen şehirler (to):", this.stations_to);
      } catch (error) {
        console.error("Şehirleri çekerken hata:", error);
        this.errorMessage = error.message;
        this.stations_from = [];
        this.stations_to = [];
      }
    },
    setDateConstraints() {
      const today = new Date();
      // Yerel zaman diliminde bugünü al
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      this.minDate = `${year}-${month}-${day}`;

      // maxDate için 10 gün sonrası
      const maxDate = new Date(today);
      maxDate.setDate(today.getDate() + 8);
      const maxYear = maxDate.getFullYear();
      const maxMonth = String(maxDate.getMonth() + 1).padStart(2, '0');
      const maxDay = String(maxDate.getDate()).padStart(2, '0');
      this.maxDate = `${maxYear}-${maxMonth}-${maxDay}`;

      console.log('setDateConstraints:', {
        minDate: this.minDate,
        maxDate: this.maxDate,
        localDate: today.toLocaleDateString()
      });
    },
    async handleSearch() {
      this.searched = true;
      this.errorMessage = ''; // train-results hata mesajını sıfırla
      this.formErrorMessage = ''; // booking-form hata mesajını sıfırla
      this.expandedRoutes = [];
      this.expandedAlternatives = [];
      this.expandedAlternativeDetails = [];
      this.isLoading = true;

      // Tarih kontrolü
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(this.selectedDate);

      if (selected < today) {
        this.formErrorMessage = 'Bitte geben Sie ein gültiges Datum ein!';
        this.isLoading = false;
        return;
      }

      // Alan kontrolü
      if (!this.fromCity.trim() || !this.toCity.trim() || !this.selectedDate || !this.selectedTime) {
        this.formErrorMessage = this.$t('home.missingFields');
        this.isLoading = false;
        return;
      }

      const formData = {
        from_station: this.fromCity.trim(),
        to_station: this.toCity.trim(),
        travel_date: this.selectedDate,
        travel_time: this.selectedTime,
      };
      console.log("Gönderilen veri:", formData);

      try {
        const response = await fetch("http://127.0.0.1:5000/api/route_plan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log("Backend'den gelen tam yanıt:", JSON.stringify(data, null, 2));

        if (!response.ok) {
          throw new Error(data.error || this.$t('home.error'));
        }

        this.routeResults = data.routes || [];
        this.predictionResults = data.predictions || [];
        console.log("Gelen routeResults:", JSON.stringify(this.routeResults, null, 2));
        if (this.routeResults.length === 0) {
          console.log("Hiç rota bulunamadı, veri doğru mu?");
          this.errorMessage = this.$t('home.noRoutes'); // train-results’a
        }
      } catch (error) {
        console.error("Rota arama hatası:", error);
        this.errorMessage = error.message; // train-results’a
        this.routeResults = [];
        this.predictionResults = [];
      } finally {
        this.isLoading = false;
      }
    },
    // ... Diğer metodlar (getOnTimeProbability, getDelayedTrainNumber, vb.) aynı kalıyor ...
    getOnTimeProbability(train) {
      if (!train?.legs?.length) return '0';
      const lastLeg = train.legs[train.legs.length - 1];
      const prediction = this.predictionResults.find(
        p => this.normalizeString(p.station_name_from) === this.normalizeString(lastLeg.station_name_from) &&
             this.normalizeString(p.station_name_to) === this.normalizeString(lastLeg.station_name_to) &&
             String(p.train_number) === String(lastLeg.train_number)
      );
      return prediction?.category_probabilities?.['On time']
        ? Number(prediction.category_probabilities['On time']).toFixed(0)
        : '0';
    },
    getDelayedTrainNumber(route) {
      if (!route.alternative_routeninfos || !route.alternative_routeninfos.some(info => info.status === 'ALTERNATIVE GEFUNDEN')) {
        console.log('Gecikme yok, alternatif rota bulunamadı.');
        return 'Bilinmiyor';
      }

      const umsteigeort = route.alternative_routeninfos[0].umsteigeort;
      if (!umsteigeort) {
        console.log('Umsteigeort tanımlı değil.');
        return 'Bilinmiyor';
      }

      const groupedTrains = this.groupByTrainNumber(route.route);
      // Geciken tren: umsteigeort'a varan tren
      const delayedTrain = groupedTrains.find((train, index) => {
        const lastLeg = train.legs[train.legs.length - 1];
        return lastLeg.station_name_to === umsteigeort;
      });

      const delayedTrainNumber = delayedTrain ? delayedTrain.train_number : 'Bilinmiyor';
      console.log('Gecikme Beklenilen Tren:', delayedTrainNumber, 'Umsteigeort:', umsteigeort);
      return delayedTrainNumber;
    },
    getMissedTrainNumber(route) {
      if (!route.alternative_routeninfos || !route.alternative_routeninfos.some(info => info.status === 'ALTERNATIVE GEFUNDEN')) {
        console.log('Gecikme yok, alternatif rota bulunamadı.');
        return 'Bilinmiyor';
      }

      const umsteigeort = route.alternative_routeninfos[0].umsteigeort;
      if (!umsteigeort) {
        console.log('Umsteigeort tanımlı değil.');
        return 'Bilinmiyor';
      }

      const groupedTrains = this.groupByTrainNumber(route.route);
      // Kaçırılan tren: umsteigeort'tan kalkan tren
      const missedTrain = groupedTrains.find((train, index) => {
        const firstLeg = train.legs[0];
        return firstLeg.station_name_from === umsteigeort;
      });

      const missedTrainNumber = missedTrain ? missedTrain.train_number : 'Bilinmiyor';
      console.log('Kaçırılacak Tren:', missedTrainNumber, 'Umsteigeort:', umsteigeort);
      return missedTrainNumber;
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
        const filtered = (field === 'from' ? this.stations_from : this.stations_to).filter(station =>
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
    formatTimeOnly(time) {
      if (!time) return '-';
      console.log("formatTimeOnly input:", time);
      try {
        let date;
        if (time.includes('GMT')) {
          date = new Date(time);
          return `${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}`;
        } else if (time.includes('T')) {
          date = new Date(time + 'Z');
          return `${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}`;
        } else if (time.match(/^\d{2}:\d{2}:\d{2}$/)) {
          date = new Date(`1970-01-01T${time}Z`);
          return `${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}`;
        } else {
          throw new Error('Invalid time format');
        }
      } catch (error) {
        console.error('formatTimeOnly error:', error, 'Input:', time);
        return '-';
      }
    },
    formatDateOnly(date) {
      if (!date) return '-';
      try {
        const [year, month, day] = date.split('-');
        if (!year || !month || !day) throw new Error('Invalid date format');
        const monthMap = {
          '01': 'Jan.',
          '02': 'Feb.',
          '03': 'März',
          '04': 'Apr.',
          '05': 'Mai',
          '06': 'Juni',
          '07': 'Juli',
          '08': 'Aug.',
          '09': 'Sep.',
          '10': 'Okt.',
          '11': 'Nov.',
          '12': 'Dez.',
        };
        return `${day}.${monthMap[month]}.${year.slice(2)}`;
      } catch (error) {
        console.error('formatDateOnly error:', error, 'Input:', date);
        return '-';
      }
    },
    normalizeString(str) {
      return str ? str.normalize('NFC') : str;
    },
    getPredictedDelay(leg, routeIndex, legIndex) {
      console.log('Eşleştirme denemesi:', {
        leg_station_from: leg.station_name_from,
        leg_station_to: leg.station_name_to,
        leg_train_number: leg.train_number,
        predictionResults: this.predictionResults
      });
      const prediction = this.predictionResults.find(
        p => this.normalizeString(p.station_name_from) === this.normalizeString(leg.station_name_from) &&
             this.normalizeString(p.station_name_to) === this.normalizeString(leg.station_name_to) &&
             String(p.train_number) === String(leg.train_number)
      );
      if (!prediction) {
        console.warn('Tahmin bulunamadı:', {
          leg_station_from: leg.station_name_from,
          leg_station_to: leg.station_name_to,
          leg_train_number: leg.train_number
        });
      }
      return prediction ? prediction.predicted_delay : leg.predicted_delay || '-';
    },
    roundUpDelay(delay) {
      if (delay === '-') return 0;
      return Math.floor(parseFloat(delay));
    },
    toggleDetails(routeIndex) {
      if (this.expandedRoutes.includes(routeIndex)) {
        this.expandedRoutes = this.expandedRoutes.filter(index => index !== routeIndex);
      } else {
        this.expandedRoutes.push(routeIndex);
      }
    },
    toggleAlternative(routeIndex) {
      if (this.expandedAlternatives.includes(routeIndex)) {
        this.expandedAlternatives = this.expandedAlternatives.filter(index => index !== routeIndex);
        this.expandedAlternativeDetails = this.expandedAlternativeDetails.filter(index => index !== routeIndex);
      } else {
        this.expandedAlternatives.push(routeIndex);
      }
    },
    toggleAlternativeDetails(routeIndex) {
      if (this.expandedAlternativeDetails.includes(routeIndex)) {
        this.expandedAlternativeDetails = this.expandedAlternativeDetails.filter(index => index !== routeIndex);
      } else {
        this.expandedAlternativeDetails.push(routeIndex);
      }
    },
    groupByTrainNumber(route) {
      if (!Array.isArray(route)) {
        console.error('groupByTrainNumber: route is not an array', route);
        return [];
      }
      const grouped = [];
      let currentTrain = null;

      route.forEach(leg => {
        if (!currentTrain || currentTrain.train_number !== leg.train_number) {
          if (currentTrain) {
            grouped.push(currentTrain);
          }
          currentTrain = {
            train_number: leg.train_number,
            zugtyp: leg.zugtyp || '',
            legs: [leg],
          };
        } else {
          currentTrain.legs.push(leg);
        }
      });

      if (currentTrain) {
        grouped.push(currentTrain);
      }

      console.log('groupByTrainNumber result:', JSON.stringify(grouped, null, 2));
      return grouped;
    },
    parseTime(timeStr, dateStr) {
      if (!timeStr) {
        console.warn('Invalid time:', timeStr);
        return null;
      }
      try {
        if (timeStr.includes('GMT')) {
          return new Date(timeStr).getTime();
        } else if (timeStr.includes('T')) {
          return new Date(timeStr + 'Z').getTime();
        } else if (timeStr.match(/^\d{2}:\d{2}:\d{2}$/) && dateStr) {
          const [year, month, day] = dateStr.split('-').map(Number);
          const [hours, minutes, seconds] = timeStr.split(':').map(Number);
          return Date.UTC(year, month - 1, day, hours, minutes, seconds);
        } else {
          console.warn('Unrecognized time format:', timeStr, 'Date:', dateStr);
          return null;
        }
      } catch (error) {
        console.error('parseTime error:', error, 'Input:', timeStr, 'Date:', dateStr);
        return null;
      }
    },
    calculateTrainDuration(train) {
      if (!train || !train.legs || train.legs.length === 0) return 0;
      const startLeg = train.legs[0];
      const endLeg = train.legs[train.legs.length - 1];
      let startTime = startLeg.planned_departure_from;
      let endTime = endLeg.planned_arrival_to;
      let startDate = startLeg.planned_arrival_date_from;
      let endDate = endLeg.planned_arrival_date_from;

      if (!startDate && startTime.includes('GMT')) {
        startDate = new Date(startTime).toISOString().split('T')[0];
      }
      if (!endDate && endTime.includes('GMT')) {
        endDate = new Date(endTime).toISOString().split('T')[0];
      }

      console.log('calculateTrainDuration:', {
        train_number: train.train_number,
        startTime,
        startDate,
        endTime,
        endDate
      });

      const start = this.parseTime(startTime, startDate);
      const end = this.parseTime(endTime, endDate);

      if (!start || !end) {
        console.warn('Invalid start or end time for duration calculation:', { start, end });
        return 0;
      }

      let duration = (end - start) / (1000 * 60);
      if (duration < 0) {
        duration += 24 * 60;
      }

      console.log('Calculated duration (minutes):', duration, 'for train:', train.train_number);
      return duration;
    },
    calculateTrainBarWidth(train, route) {
      const groupedTrains = this.groupByTrainNumber(route);
      const totalDuration = groupedTrains.reduce((sum, t) => sum + this.calculateTrainDuration(t), 0);
      const trainDuration = this.calculateTrainDuration(train);

      console.log('calculateTrainBarWidth:', {
        train_number: train.train_number,
        trainDuration,
        totalDuration,
        groupedTrains: groupedTrains.map(t => ({
          train_number: t.train_number,
          duration: this.calculateTrainDuration(t)
        }))
      });

      let width = totalDuration > 0 ? (trainDuration / totalDuration) * 100 : 0;

      console.log('Final width (%):', width, 'for train:', train.train_number);
      return width;
    },
    isTransferStation(route, legIndex) {
      if (legIndex === route.length - 1) return false;
      return route[legIndex].train_number !== route[legIndex + 1].train_number;
    },
    getLegIndex(fullRoute, leg) {
      return fullRoute.findIndex(l => l.station_name_from === leg.station_name_from && l.station_name_to === leg.station_name_to && l.train_number === leg.train_number);
    },
    getDepartureTime(route, legIndex) {
      if (legIndex < route.length - 1 && route[legIndex].train_number !== route[legIndex + 1].train_number) {
        return null;
      }
      if (legIndex < route.length - 1) {
        return route[legIndex + 1].planned_departure_from;
      }
      return null;
    },
 calculateExpectedArrivalTime(train) {
  if (!train || !train.legs || train.legs.length === 0) {
    console.warn('calculateExpectedArrivalTime: Geçersiz tren verisi', train);
    return '-';
  }

  const lastLeg = train.legs[train.legs.length - 1];
  const arrivalTime = lastLeg.planned_arrival_to;
  const arrivalDate = lastLeg.planned_arrival_date_from;

  // Son durak için predicted_delay al
  const delay = this.getPredictedDelay(
    lastLeg,
    this.routeResults.findIndex(r => {
      const hasMainRoute = Array.isArray(r.route) && r.route.includes(lastLeg);
      const hasAlternativeRoute = Array.isArray(r.alternative_routeninfos) &&
                                 r.alternative_routeninfos[0]?.alternative_route &&
                                 Array.isArray(r.alternative_routeninfos[0].alternative_route) &&
                                 r.alternative_routeninfos[0].alternative_route.includes(lastLeg);
      return hasMainRoute || hasAlternativeRoute;
    }),
    this.getLegIndex(
      this.routeResults.find(r => {
        const hasMainRoute = Array.isArray(r.route) && r.route.includes(lastLeg);
        const hasAlternativeRoute = Array.isArray(r.alternative_routeninfos) &&
                                   r.alternative_routeninfos[0]?.alternative_route &&
                                   Array.isArray(r.alternative_routeninfos[0].alternative_route) &&
                                   r.alternative_routeninfos[0].alternative_route.includes(lastLeg);
        return hasMainRoute || hasAlternativeRoute;
      })?.route || [],
      lastLeg
    )
  );

  const totalDelay = delay !== '-' ? this.roundUpDelay(delay) : 0;

  console.log('calculateExpectedArrivalTime:', {
    train_number: train.train_number,
    station_to: lastLeg.station_name_to,
    planned_arrival: arrivalTime,
    arrival_date: arrivalDate,
    predicted_delay: delay,
    total_delay_minutes: totalDelay
  });

  try {
    let date;
    if (arrivalTime.includes('GMT')) {
      date = new Date(arrivalTime);
    } else if (arrivalTime.includes('T')) {
      date = new Date(arrivalTime + 'Z');
    } else {
      const [hours, minutes] = arrivalTime.split(':').map(Number);
      const [year, month, day] = arrivalDate.split('-').map(Number);
      date = new Date(Date.UTC(year, month - 1, day, hours, minutes));
    }

    if (isNaN(date.getTime())) {
      console.error('calculateExpectedArrivalTime: Geçersiz tarih/zaman', { arrivalTime, arrivalDate });
      return '-';
    }

    date.setMinutes(date.getMinutes() + totalDelay);
    const formattedTime = `${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}`;
    console.log('Formatted expected time:', formattedTime);
    return formattedTime;
  } catch (error) {
    console.error('calculateExpectedArrivalTime error:', error, { arrivalTime, arrivalDate, delay });
    return '-';
  }
},
  },
};
</script>

<style scoped>

.on-time-probability {
  position: absolute;
  right: 3rem; /* time-right'ın soluna yerleştir */
  top: -1.2rem;
  font-size: 0.8rem;
  color: limegreen;
  font-weight: bold;
  white-space: nowrap;
}
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

.home-container {
  font-family: Arial, sans-serif;
  color: black;
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

.search-orange-button {
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

.search-orange-button:hover {
  background-color: #008c66;
}

.cities {
  width: 100%;
  max-width: 80vw;
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 5rem;
  margin-left: 5rem;
  margin-top: auto;
  margin-bottom: 2rem;
}

.cities h2 {
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
  width: 100%;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}

.route-container, .alternative-route-container {
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 4px;
}

.alternative-route-container h3 {
  font-size: 1.2rem;
  color: #00a680;
  margin-bottom: 1rem;
}

.route-header {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.info-box {
  background-color: #f0f0f0;
  padding: 0.3rem 0.6rem;
  margin-top: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
}

.train-bar-container {
  margin-top: 3rem;
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
}

.train-bar {
  position: relative;
  background-color: teal;
  color: white;
  padding: 0.7rem 0;
  border: 1px darkgray;
  border-radius: 4px;
  margin-right: 4px;
  text-align: center;
  font-weight: bold;
  box-sizing: border-box;
  min-width: 150px
}

.alternative-route-container .train-bar {
  background-color: #00a680;
}

.train-bar.last-train {
  margin-right: 0;
}

.time {
  position: absolute;
  font-size: 0.8rem;
  color: #333;
  font-weight: bold;
  white-space: nowrap;
}

.time-left {
  left: 0.5rem;
  top: -1.2rem;
}

.time-right {
  right: 0.5rem;
  top: -1.2rem;
}

.expected-time {
  position: absolute;
  right: 0.5rem;
  top: -2.0rem;
  font-size: 0.7rem;
  color: red;
  font-weight: bold;
}

.train-number {
  font-size: 1rem;
  font-weight: bold;
}

.station {
  position: absolute;
  font-size: 0.9rem;
  color: #333;
  bottom: -1.5rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.station-left {
  left: 0;
}

.station-right-end {
  right: 0;
}

.station-right {
  right: 0;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.alternative-button {
  color: #fff;
  background-color: steelblue;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  border: none;
  transition: background-color 0.3s;
}

.alternative-button:hover {
  background-color: lightsteelblue;
}

.details-toggle {
  color: #00a680;
  cursor: pointer;
  font-size: 0.9rem;
  text-align: center;
}

.details-toggle:hover {
  text-decoration: underline;
}

.details-container {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.station-list {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0 0 0 1.5rem;
}

.station-list::before {
  content: '';
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #00a680;
}

.station-detail::before {
  content: 'o';
  position: absolute;
  left: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #00a680;
  font-size: 1rem;
  font-weight: bold;
}

.station-item {
  position: relative;
  margin-bottom: 0.5rem;
}

.station-detail {
  margin-bottom: 2rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
}

.departure-time {
  color: #1e90ff;
  font-size: 0.9rem;
}

.arrival-time {
  color: #1e90ff;
  font-size: 0.9rem;
}

.delay {
  color: #800000;
  font-weight: bold;
  font-size: 0.9rem;
}

.highlight-station {
  font-weight: bold;
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #00a680;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

.train-header {
  margin: 1rem 0 0.5rem 1.5rem;
  font-weight: bold;
  color: #00a680;
}

.train-info {
  background-color: #f0f0f0;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.warning-message {
  position: absolute;
  top: -3.8rem;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.warning-icon {
  margin-right: 0.3rem;
}

.warning-text {
  margin-right: 0.3rem;
  color: red;
  font-weight: bold;
}

.blink {
  animation: blink 1s infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
/* train-results container için genel ayarlar */
/* train-results container için genel ayarlar */
.train-results {
  max-width: 90%;
  position: relative;
  overflow: hidden;
  min-height: 300px; /* Yeterli hareket alanı */
}

/* route-header içindeki hizalamayı koru */
.route-header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

/* date-box’a göre hiza */
.date-box {
  position: relative;
}

/* train-bar-container için hiza referansı */
.train-bar-container {
  position: relative;
}

/* info-box’lar üstte kalsın */
.info-box { z-index: 2; }

/* Tren animasyon container’ı */
.train-animation {
  position: absolute;
  width: 500px; /* Resmin genişliği */
  height: 100px; /* Resmin yüksekliği */
  background-image: url('/assets/zug.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
  animation: trainLoop 10s linear infinite; /* Sabit hız */
  z-index: 1; /* Tren arka planda */
  top: 50%; /* route-header hizası */
  transform: translateY(-50%);
}

/* Tren animasyonu */
@keyframes trainLoop {
  0% {
    left: -500px; /* date-box sağından ucuyla başla */
    transform: translateY(-50%) scaleX(1); /* Normal yön */
  }
  50% {
    left: calc(100% + 100px); /* Sağdan kaybol */
    transform: translateY(-50%) scaleX(1); /* Normal yön */
  }
  51% {
    left: calc(100% + 100px); /* Sağdan kadraja gir */
    transform: translateY(-50%) scaleX(-1); /* Y ekseninde simetri */
  }
  100% {
    left: -500px; /* Sola hareket edip başa dön */
    transform: translateY(-50%) scaleX(-1); /* Ters yön */
  }
}

/* Responsive ayarlar */
@media (max-width: 768px) {
  .train-animation {
    width: 300px;
    height: 60px;
    animation: trainLoop 8s linear infinite;
  }
  @keyframes trainLoop {
    0% { left: -300px; transform: translateY(-50%) scaleX(1); }
    50% { left: calc(100% + 60px); transform: translateY(-50%) scaleX(1); }
    51% { left: calc(100% + 60px); transform: translateY(-50%) scaleX(-1); }
    100% { left: -300px; transform: translateY(-50%) scaleX(-1); }
  }
}
</style>