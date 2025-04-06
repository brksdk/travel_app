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
            <input type="text" placeholder="Von (z.B. Berlin)" class="form-input top" ref="from" />
            <button type="button" class="swap-button" @click="swapCities">↕</button>
          </div>
          <div class="input-wrapper">
            <span class="icon">📍</span>
            <input type="text" placeholder="Nach (z.B. Munich)" class="form-input bottom" ref="to" />
          </div>
        </div>

        <!-- Tarih Input'u -->
        <div class="form-group">
          <div class="input-wrapper">
            <span class="icon">📅</span>
            <input type="date" placeholder="Hinreise" class="form-input" ref="date" />
          </div>
        </div>


        <!-- Suche Butonu -->
        <button type="submit" class="search-button">Suche</button>
      </form>
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
export default {
  data() {
    return {
      cities: [
        "Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dresden", "Leipzig", "Hannover", "Nuremberg", "Bremen", "Dortmund", "Essen", "Bonn", "Mannheim", "Karlsruhe", "Freiburg", "Kiel", "Rostock", "Mainz", "Saarbrücken", "Augsburg", "Wiesbaden", "Erfurt"
      ],
      adults: 1,
      students: 0,
      childrenUnder6: 0,
    };
  },
  computed: {
    totalPassengers() {
      return this.adults + this.students + this.childrenUnder6;
    },
  },
  methods: {
    swapCities() {
      const from = this.$refs.from.value;
      const to = this.$refs.to.value;
      this.$refs.from.value = to;
      this.$refs.to.value = from;
    },
    handleSearch() {
      const formData = {
        from: this.$refs.from.value,
        to: this.$refs.to.value,
        date: this.$refs.date.value,
        passengers: {
          adults: this.adults,
          students: this.students,
          childrenUnder6: this.childrenUnder6,
          total: this.totalPassengers,
        },
      };
      console.log("Form Data:", formData);
    },
  },
};
</script>

<style scoped>
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


.form-input.small {
  width: 60px;
  padding: 0.5rem;
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
  max-width: 1200px;
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0;
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
</style>