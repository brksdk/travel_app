<template>
  <div class="route-map-container">
    <h2>{{ $t('routemap.title') }}</h2>
    <div class="form-container">
      <div class="input-group">
        <label>{{ $t('routemap.from') }}</label>
        <input
          v-model="fromStation"
          :placeholder="$t('routemap.fromPlaceholder')"
          list="from-stations"
          class="station-input"
        />
        <datalist id="from-stations">
          <option v-for="station in stations" :key="station" :value="station">
            {{ station }}
          </option>
        </datalist>
      </div>
      <div class="input-group">
        <label>{{ $t('routemap.to') }}</label>
        <input
          v-model="toStation"
          :placeholder="$t('routemap.toPlaceholder')"
          list="to-stations"
          class="station-input"
        />
        <datalist id="to-stations">
          <option v-for="station in stations" :key="station" :value="station">
            {{ station }}
          </option>
        </datalist>
      </div>
      <button @click="fetchRoute" :disabled="!fromStation || !toStation">
        {{ $t('routemap.search') }}
      </button>
    </div>

    <div v-if="error" class="error-message">{{ error }}</div>

    <!-- Haritayı yuvarlak bir kapsayıcıda göster -->
    <div class="map-container">
      <l-map ref="map" :zoom="zoom" :center="center" class="leaflet-map">
        <l-tile-layer :url="tileUrl" :attribution="attribution"></l-tile-layer>
        <l-marker
          v-for="station in routeCoordinates"
          :key="station.station_name"
          :lat-lng="[station.latitude, station.longitude]"
        >
          <l-popup>{{ station.station_name }}</l-popup>
        </l-marker>
        <l-polyline
          v-if="routeCoordinates.length"
          :lat-lngs="routeCoordinates.map(coord => [coord.latitude, coord.longitude])"
          color="blue"
          :weight="4"
        ></l-polyline>
        <l-marker
          v-if="trainPosition"
          :lat-lng="trainPosition"
          :icon="trainIcon"
        ></l-marker>
      </l-map>
    </div>

    <div v-if="routeDetails" class="route-details">
      <h3>{{ $t('routemap.routeInfo') }}</h3>
      <p><strong>{{ $t('routemap.trainNumber') }}:</strong> {{ routeDetails.train_number }}</p>
      <p><strong>{{ $t('routemap.stations') }}:</strong></p>
      <ul>
        <li v-for="(stop, index) in routeDetails.stops" :key="index">
          {{ stop.station_name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { LMap, LTileLayer, LMarker, LPopup, LPolyline } from '@vue-leaflet/vue-leaflet';
import L from 'leaflet';

export default {
  name: 'RouteMap',
  components: { LMap, LTileLayer, LMarker, LPopup, LPolyline },
  setup() {
    const { t } = useI18n();
    const zoom = ref(6);
    const center = ref([51.1657, 10.4515]);
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    const stations = ref([]);
    const fromStation = ref('');
    const toStation = ref('');
    const routeCoordinates = ref([]);
    const routeDetails = ref(null);
    const error = ref('');
    const trainPosition = ref(null);
    const trainIcon = L.icon({
      iconUrl: '/train-icon.png', // Yerel simge (public klasöründe)
      // Alternatif: 'https://cdn-icons-png.flaticon.com/512/2972/2972449.png'
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    const fetchStations = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/sollstrecken_stations', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Sollstrecken Stations API Response:', data);
        stations.value = data.stations || [];
        if (stations.value.length === 0) {
          error.value = t('routemap.errorLoadingStations') + ': No stations found';
        }
      } catch (err) {
        error.value = t('routemap.errorLoadingStations') + ': ' + err.message;
        console.error('Error fetching sollstrecken stations:', err);
      }
    };

    const fetchRoute = async () => {
      if (!fromStation.value || !toStation.value) {
        error.value = t('routemap.invalidSelection');
        return;
      }

      try {
        error.value = '';
        const response = await fetch('http://127.0.0.1:5000/api/drawroute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from_station: fromStation.value,
            to_station: toStation.value,
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Route API Response:', data);

        const { route, coordinates } = data;
        routeDetails.value = route;
        routeCoordinates.value = coordinates;

        animateTrain(coordinates);
      } catch (err) {
        error.value = t('routemap.errorFetching') + ': ' + err.message;
        console.error('Error fetching route:', err);
      }
    };

    const animateTrain = (coordinates) => {
      let index = 0;
      trainPosition.value = [coordinates[0].latitude, coordinates[0].longitude];

      const moveTrain = () => {
        if (index < coordinates.length - 1) {
          index++;
          const nextCoord = [coordinates[index].latitude, coordinates[index].longitude];
          const steps = 60;
          const deltaLat = (nextCoord[0] - trainPosition.value[0]) / steps;
          const deltaLng = (nextCoord[1] - trainPosition.value[1]) / steps;

          let step = 0;
          const interval = setInterval(() => {
            if (step >= steps) {
              clearInterval(interval);
              trainPosition.value = nextCoord;
              moveTrain();
              return;
            }
            trainPosition.value = [
              trainPosition.value[0] + deltaLat,
              trainPosition.value[1] + deltaLng,
            ];
            step++;
          }, 50);
        }
      };

      moveTrain();
    };

    onMounted(() => {
      fetchStations();
    });

    return {
      zoom,
      center,
      tileUrl,
      attribution,
      stations,
      fromStation,
      toStation,
      routeCoordinates,
      routeDetails,
      error,
      trainPosition,
      trainIcon,
      fetchRoute,
    };
  },
};
</script>

<style scoped>
.route-map-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0);
  color: black;

}

.form-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}


.input-group {
  flex: 1;
  min-width: 200px;
  color:black;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;

}

.station-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.form-container button {
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.form-container button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.form-container button:hover:not(:disabled) {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-bottom: 1rem;
}

.route-details {
  margin-top: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
}

.route-details h3 {
  margin-top: 0;
}

.route-details ul {
  list-style: none;
  padding: 0;
}

.route-details li {
  margin-bottom: 0.5rem;
}

/* Yuvarlak harita stilleri */
.map-container {
  width: 600px; /* Yuvarlak alanın genişliği */
  height: 600px; /* Yuvarlak alanın yüksekliği */
  margin: 0 auto; /* Ortalanmış */
  border-radius: 50%; /* Dairesel şekil */
  overflow: hidden; /* Taşmaları gizle */
  position: relative;
}
.route-map-container h2 { color: white; font-weight: bolder; }
.leaflet-map {
  width: 100%;
  height: 100%;
}
</style>