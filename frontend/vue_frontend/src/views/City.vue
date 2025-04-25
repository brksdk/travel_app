<template>
  <div class="city-page">
    <!-- Şehir başlığı -->
    <h1 class="city-title">{{ cityName }}</h1>

    <!-- Gizle/Göster Butonu (Her zaman sağ üstte) -->
    <button class="toggle-button" @click="toggleCarousels">
      {{ showCarousels ? $t('city.hide') : $t('city.show') }}
    </button>

    <!-- Carousellerin görünürlüğünü kontrol eden yapı -->
    <div v-if="showCarousels" class="carousel-grid">
      <!-- Sağ Üst Carousel -->
      <div class="carousel-container top-right">
        <div class="carousel">
          <button class="carousel-button prev" @click="prevSlide(0)">
            <
          </button>
          <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlides[0] * 100}%)` }">
            <div v-for="(slide, index) in cityData.carousels[0]" :key="index" class="carousel-slide">
              <img :src="slide.image" :alt="slide.name" class="carousel-image" @click="openModal(slide)" />
              <p class="carousel-name">{{ slide.name }}</p>
            </div>
          </div>
          <button class="carousel-button next" @click="nextSlide(0)">
            >
          </button>
        </div>
      </div>

      <!-- Sol Üst Carousel -->
      <div class="carousel-container top-left">
        <div class="carousel">
          <button class="carousel-button prev" @click="prevSlide(1)">
            <
          </button>
          <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlides[1] * 100}%)` }">
            <div v-for="(slide, index) in cityData.carousels[1]" :key="index" class="carousel-slide">
              <img :src="slide.image" :alt="slide.name" class="carousel-image" @click="openModal(slide)" />
              <p class="carousel-name">{{ slide.name }}</p>
            </div>
          </div>
          <button class="carousel-button next" @click="nextSlide(1)">
            >
          </button>
        </div>
      </div>

      <!-- Sağ Alt Carousel -->
      <div class="carousel-container bottom-right">
        <div class="carousel">
          <button class="carousel-button prev" @click="prevSlide(2)">
            <
          </button>
          <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlides[2] * 100}%)` }">
            <div v-for="(slide, index) in cityData.carousels[2]" :key="index" class="carousel-slide">
              <img :src="slide.image" :alt="slide.name" class="carousel-image" @click="openModal(slide)" />
              <p class="carousel-name">{{ slide.name }}</p>
            </div>
          </div>
          <button class="carousel-button next" @click="nextSlide(2)">
            >
          </button>
        </div>
      </div>

      <!-- Sol Alt Carousel -->
      <div class="carousel-container bottom-left">
        <div class="carousel">
          <button class="carousel-button prev" @click="prevSlide(3)">
            <
          </button>
          <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlides[3] * 100}%)` }">
            <div v-for="(slide, index) in cityData.carousels[3]" :key="index" class="carousel-slide">
              <img :src="slide.image" :alt="slide.name" class="carousel-image" @click="openModal(slide)" />
              <p class="carousel-name">{{ slide.name }}</p>
            </div>
          </div>
          <button class="carousel-button next" @click="nextSlide(3)">
            >
          </button>
        </div>
      </div>
    </div>

    <!-- Carouseller gizlendiğinde gösterilecek animasyonlu yazı -->
    <div v-else class="welcome-container">
      <h2 class="welcome-text">{{ $t('city.welcome', { city: cityName }) }}</h2>
    </div>

    <!-- Modal (Resme tıklandığında açılacak pop-up) -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="selectedSlide.image" :alt="selectedSlide.name" class="modal-image" />
        <h3 class="modal-name">{{ selectedSlide.name }}</h3>
        <p class="modal-description">{{ selectedSlide.description }}</p>
        <button class="modal-close-button" @click="closeModal">{{ $t('city.close') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { citiesData } from '@/data/citiesData';

export default {
  name: "City",
  data() {
    return {
      showCarousels: true,
      showModal: false,
      selectedSlide: null,
      currentSlides: [0, 0, 0, 0],
      weather: null,
    };
  },
  computed: {
    cityName() {
      const name = this.$route.params.cityName;
      return name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
    },
    cityData() {
      return citiesData[this.cityName] || citiesData['Default'];
    },
  },
  watch: {
    cityName(newCityName, oldCityName) {
      if (newCityName !== oldCityName) {
        this.currentSlides = [0, 0, 0, 0];
        this.fetchWeather();
        this.$emit('update-background', this.cityData.background);
      }
    },
  },
  methods: {
    async fetchWeather() {
      try {
        const apiKey = '09dd0052b4d2d41724e431b1832d3107';
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName},de&appid=${apiKey}&units=metric&lang=de`
        );
        const weatherData = {
          temperature: Math.round(response.data.main.temp),
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
        };
        this.weather = weatherData;
        this.$emit('update-weather', weatherData);
      } catch (error) {
        this.weather = null;
        this.$emit('update-weather', null);
      }
    },
    prevSlide(carouselIndex) {
      const totalSlides = this.cityData.carousels[carouselIndex].length;
      if (this.currentSlides[carouselIndex] > 0) {
        this.currentSlides[carouselIndex]--;
      } else {
        this.currentSlides[carouselIndex] = totalSlides - 1; // Baştayken sona git
      }
      this.currentSlides = [...this.currentSlides];
    },
    nextSlide(carouselIndex) {
      const totalSlides = this.cityData.carousels[carouselIndex].length;
      if (this.currentSlides[carouselIndex] < totalSlides - 1) {
        this.currentSlides[carouselIndex]++;
      } else {
        this.currentSlides[carouselIndex] = 0; // Sondayken başa git
      }
      this.currentSlides = [...this.currentSlides];
    },
    toggleCarousels() {
      this.showCarousels = !this.showCarousels;
    },
    openModal(slide) {
      this.selectedSlide = slide;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedSlide = null;
    },
  },
  mounted() {
    this.fetchWeather();
    this.$emit('update-background', this.cityData.background);
  },
};
</script>

<style scoped>
.city-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Şehir başlığı */
.city-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0rem 0;
  z-index: 2;
}

/* Carousel Grid */
.carousel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: calc(100vh - 60px);
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 1;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.carousel-container.top-left {
  grid-column: 1;
  grid-row: 1;
}

.carousel-container.top-right {
  grid-column: 2;
  grid-row: 1;
}

.carousel-container.bottom-left {
  grid-column: 1;
  grid-row: 2;
}

.carousel-container.bottom-right {
  grid-column: 2;
  grid-row: 2;
}

.carousel {
  width: 100%;
  height: 100%;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.carousel-slide {
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
}

.carousel-image {
  width: 98%;
  height: 95%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s;
}

.carousel-name {
  position: absolute;
  bottom: 20px;
  font-size: 1rem;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 0.5rem;
  border-radius: 10px;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 50%;
  transition: background 0.3s;
  z-index: 2;
}

.carousel-button.prev {
  left: 15px;
}

.carousel-button.next {
  right: 15px;
}

/* Gizle/Göster Butonu */
.toggle-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 3;
  transition: background 0.3s;
}

.toggle-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* Welcome Yazısı (Animasyonlu) */
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 2;
}

.welcome-text {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Modal Stilleri */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: rgba(255,255,255,0.2);
  padding: 1rem;
  border-radius: 15px;
  text-align: center;
  max-width: 70vw;
  max-height: 85vh;
  width: 100%;
  position: relative;
  overflow: auto;
}

.modal-image {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
}

.modal-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0.5rem 0;
}

.modal-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.modal-close-button {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.modal-close-button:hover {
  background: #e63939;
}
</style>