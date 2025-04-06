<template>
  <div class="city-page">
    <!-- Şehir başlığı -->
    <h1 class="city-title">{{ cityName }}</h1>

    <!-- Hava Durumu Bilgisi (Geçici olarak buraya ekliyoruz, sonra navbar'a taşıyacağız) -->
    <div v-if="weather" class="weather-info">
      <span>{{ weather.description }}: {{ weather.temperature }}°C</span>
    </div>

    <!-- Gizle/Göster Butonu (Her zaman sağ üstte) -->
    <button class="toggle-button" @click="toggleCarousels">
      {{ showCarousels ? 'Ausblenden' : 'Anzeigen' }}
    </button>

    <!-- Carousellerin görünürlüğünü kontrol eden yapı -->
    <div v-if="showCarousels" class="carousel-grid">
      <!-- Sağ Üst Carousel -->
      <div class="carousel-container top-right">
        <div class="carousel">
          <button class="carousel-button prev" @click="prevSlide(0)" :disabled="currentSlides[0] === 0">
            <
          </button>
          <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlides[0] * 100}%)` }">
            <div v-for="(slide, index) in slides[0]" :key="index" class="carousel-slide">
              <img :src="slide.image" :alt="slide.name" class="carousel-image" @click="openModal(slide)" />
              <p v-if="index === 0" class="carousel-name">{{ slide.name }}</p>
            </div>
          </div>
          <button class="carousel-button next" @click="nextSlide(0)" :disabled="currentSlides[0] === slides[0].length - 1">
            >
          </button>
        </div>
      </div>

      <!-- Sol Üst Carousel -->
      <!-- Sağ Üst Carousel -->
<div class="carousel-container top-right">
  <div class="carousel">
    <button class="carousel-button prev" @click="prevSlide(0)" :disabled="currentSlides[0] === 0">
      <
    </button>
    <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlides[0] * 100}%)` }">
      <div v-for="(slide, index) in slides[0]" :key="index" class="carousel-slide">
        <img :src="slide.image" :alt="slide.name" class="carousel-image" @click="openModal(slide)" />
        <p v-if="index === 0" class="carousel-name">{{ slide.name }}</p>
      </div>
    </div>
    <button class="carousel-button next" @click="nextSlide(0)" :disabled="currentSlides[0] === slides[0].length - 1">
      >
    </button>
  </div>
</div>

<!-- Sol Üst Carousel -->
        <div class="carousel-container top-left">
          <div class="carousel">
            <button class="carousel-button prev" @click="prevSlide(1)" :disabled="currentSlides[1] === 0">
              <
            </button>
            <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlides[1] * 100}%)` }">
              <div v-for="(slide, index) in slides[1]" :key="index" class="carousel-slide">
                <img :src="slide.image" :alt="slide.name" class="carousel-image" @click="openModal(slide)" />
                <p v-if="index === 0" class="carousel-name">{{ slide.name }}</p>
              </div>
            </div>
            <button class="carousel-button next" @click="nextSlide(1)" :disabled="currentSlides[1] === slides[1].length - 1">
              >
            </button>
          </div>
        </div>

        <!-- Sağ Alt Carousel -->
        <div class="carousel-container bottom-right">
          <div class="carousel">
            <button class="carousel-button prev" @click="prevSlide(2)" :disabled="currentSlides[2] === 0">
              <
            </button>
            <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlides[2] * 100}%)` }">
              <div v-for="(slide, index) in slides[2]" :key="index" class="carousel-slide">
                <img :src="slide.image" :alt="slide.name" class="carousel-image" @click="openModal(slide)" />
                <p v-if="index === 0" class="carousel-name">{{ slide.name }}</p>
              </div>
            </div>
            <button class="carousel-button next" @click="nextSlide(2)" :disabled="currentSlides[2] === slides[2].length - 1">
              >
            </button>
          </div>
        </div>

        <!-- Sol Alt Carousel -->
        <div class="carousel-container bottom-left">
          <div class="carousel">
            <button class="carousel-button prev" @click="prevSlide(3)" :disabled="currentSlides[3] === 0">
              <
            </button>
            <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlides[3] * 100}%)` }">
              <div v-for="(slide, index) in slides[3]" :key="index" class="carousel-slide">
                <img :src="slide.image" :alt="slide.name" class="carousel-image" @click="openModal(slide)" />
                <p v-if="index === 0" class="carousel-name">{{ slide.name }}</p>
              </div>
            </div>
            <button class="carousel-button next" @click="nextSlide(3)" :disabled="currentSlides[3] === slides[3].length - 1">
              >
            </button>
          </div>
        </div>
    </div>

    <!-- Carouseller gizlendiğinde gösterilecek animasyonlu yazı -->
    <div v-else class="welcome-container">
      <h2 class="welcome-text">Welcome to {{ cityName }}</h2>
    </div>

    <!-- Modal (Resme tıklandığında açılacak pop-up) -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="selectedSlide.image" :alt="selectedSlide.name" class="modal-image" />
        <h3 class="modal-name">{{ selectedSlide.name }}</h3>
        <p class="modal-description">{{ selectedSlide.description }}</p>
        <button class="modal-close-button" @click="closeModal">Kapat</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

// Tüm şehirler için resimleri import ediyoruz
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

// Carousel için örnek resimler
import Attraction1 from '@/assets/cities/attraction1.jpeg';
import Attraction2 from '@/assets/cities/attraction2.jpeg';
import Attraction3 from '@/assets/cities/attraction3.jpeg';
import Attraction4 from '@/assets/cities/attraction4.jpeg';
import Attraction5 from '@/assets/cities/attraction5.jpeg';

export default {
  name: "City",
  data() {
    return {
      showCarousels: true,
      showModal: false,
      selectedSlide: null,
      currentSlides: [0, 0, 0, 0],
      slides: [
        [
          { image: Attraction1, name: "Landmark 1", description: "This is a famous landmark in the city, known for its historical significance." },
          { image: Attraction2, name: "Park 1", description: "A beautiful park where locals and tourists alike enjoy relaxing." },
          { image: Attraction3, name: "Museum 1", description: "An iconic museum showcasing the city's rich cultural heritage." },
        ],
        [
          { image: Attraction4, name: "Bridge 1", description: "A historic bridge with stunning views of the city." },
          { image: Attraction5, name: "Castle 1", description: "A majestic castle that dates back to the medieval era." },
          { image: Attraction1, name: "Square 1", description: "A bustling square in the heart of the city." },
        ],
        [
          { image: Attraction2, name: "River 1", description: "A scenic river that runs through the city." },
          { image: Attraction3, name: "Tower 1", description: "A tall tower offering panoramic views of the city." },
          { image: Attraction4, name: "Church 1", description: "A beautiful church with intricate architecture." },
        ],
        [
          { image: Attraction5, name: "Garden 1", description: "A peaceful garden perfect for a relaxing stroll." },
          { image: Attraction1, name: "Market 1", description: "A vibrant market where you can find local goods." },
          { image: Attraction2, name: "Theater 1", description: "A historic theater hosting a variety of performances." },
        ],
      ],
    };
  },
  computed: {
    cityName() {
      const name = this.$route.params.cityName;
      return name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
    },
    cityImage() {
      const images = {
        Berlin: BerlinImage,
        Munich: MunichImage,
        Hamburg: HamburgImage,
        Cologne: CologneImage,
        Frankfurt: FrankfurtImage,
        Stuttgart: StuttgartImage,
        Düsseldorf: DusseldorfImage,
        Dresden: DresdenImage,
        Leipzig: LeipzigImage,
        Hannover: HannoverImage,
        Nuremberg: NurembergImage,
        Bremen: BremenImage,
        Dortmund: DortmundImage,
        Essen: EssenImage,
        Bonn: BonnImage,
        Mannheim: MannheimImage,
        Karlsruhe: KarlsruheImage,
        Freiburg: FreiburgImage,
        Kiel: KielImage,
        Rostock: RostockImage,
        Mainz: MainzImage,
        Saarbrücken: SaarbruckenImage,
        Augsburg: AugsburgImage,
        Wiesbaden: WiesbadenImage,
        Erfurt: ErfurtImage,
      };
      return images[this.cityName] || DefaultImage;
    },
  },
  watch: {
    cityName(newCityName, oldCityName) {
      if (newCityName !== oldCityName) {
        this.fetchWeather();
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
          humidity: response.data.main.humidity, // Nem oranı (%)
          windSpeed: response.data.wind.speed, // Rüzgar hızı (m/s)
        };
        this.$emit('update-weather', weatherData);
      } catch (error) {
        this.$emit('update-weather', null);
      }
    },
    prevSlide(carouselIndex) {
      if (this.currentSlides[carouselIndex] > 0) {
        this.currentSlides[carouselIndex]--;
        this.currentSlides = [...this.currentSlides];
      }
    },
    nextSlide(carouselIndex) {
      if (this.currentSlides[carouselIndex] < this.slides[carouselIndex].length - 1) {
        this.currentSlides[carouselIndex]++;
        this.currentSlides = [...this.currentSlides];
      }
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
    this.$emit('update-background', this.cityImage);
    this.fetchWeather();
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
  font-size: 2.5rem; /* Başlığı biraz küçülttük */
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0rem 0; /* Margin'i azalttık */
  z-index: 2;
}

/* Carousel Grid */
.carousel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: calc(100vh - 60px); /* Başlık yüksekliğini azalttık */
  position: absolute;
  top: 60px; /* Başlık yüksekliğine göre ayar */
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
  position: relative; /* Resmin üzerine yerleştirmek için relative pozisyon */
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
  position: absolute; /* Resmin üzerine yerleştirdik */
  bottom: 20px; /* Resmin alt kısmına yakın */
  font-size: 1rem;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.5); /* Hafif bir arka plan ekledik */
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
  z-index: 2; /* Resmin üzerinde kalmasını sağladık */
}

.carousel-button.prev {
  left: 15px; /* Resmin içinde, sola yakın */
}

.carousel-button.next {
  right: 15px; /* Resmin içinde, sağa yakın */
}

.carousel-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
  z-index: 3; /* Her zaman üstte kalmasını sağladık */
  transition: background 0.3s;
}

.toggle-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* Welcome Yazısı (Animasyonlu) */
.welcome-container {
  display: flex;
  flex-direction: column; /* Buton için yer açtık */
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
  padding: 1rem; /* Padding'i azalttık, çünkü resim daha büyük olacak */
  border-radius: 15px;
  text-align: center;
  max-width: 70vw; /* Modal genişliğini ekranın %95'ine çıkardık */
  max-height: 85vh; /* Modal yüksekliğini ekranın %90'ına çıkardık */
  width: 100%;
  position: relative;
  overflow: auto; /* İçerik taşarsa kaydırma çubuğu ekler */
}

.modal-image {
  width: 100%;
  max-height: 80vh; /* Resmi ekranın %80'ine kadar büyüttük */
  object-fit: contain; /* Resmin tamamının görünmesini sağladık */
  border-radius: 8px;
}

.modal-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0.5rem 0; /* Margin'i azalttık */
}

.modal-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem; /* Margin'i azalttık */
}

.modal-close-button {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem; /* Küçük tutuyoruz */
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.modal-close-button:hover {
  background: #e63939;
}
</style>