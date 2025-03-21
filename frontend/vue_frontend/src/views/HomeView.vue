<template>
  <div class="home-container">
    <header class="hero">
      <h1>Robust Travel Planning for DB</h1>
      <p>Plan your journey</p>
      <button @click="goToStart">Get Started</button>
    </header>

    <section class="features">
      <h2>Features</h2>
      <div class="feature-cards">
        <div class="feature-card">
          <h3>Route Planning</h3>
          <p>Find the best routes to your destination with accurate travel times and minimal delays.</p>
        </div>
        <div class="feature-card">
          <h3>Delay Prediction</h3>
          <p>Predict potential delays and avoid unexpected surprises on your journey.</p>
        </div>
        <div class="feature-card">
          <h3>On-Time Arrival</h3>
          <p>Get recommendations to increase your chances of arriving on time.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goToStart() {
      const user = JSON.parse(localStorage.getItem("user")); // Kullanıcı giriş yapmış mı kontrol et
      if (user) {
        this.$router.push("/start"); // Kullanıcı giriş yapmışsa "/start" sayfasına git
      } else {
        this.$router.push("/login"); // Giriş yapmamışsa "/login" sayfasına git
      }
    },
  },
};
</script>

<style scoped>
/* Ana sayfa stil dosyası */
.home-container {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Hero alanı */
.hero {
  text-align: center;
  padding: 4rem 1rem;
  background-color: rgba(244, 244, 249, 0);
  color: white;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.hero button {
  background-color: rgba(244, 244, 249, 0.2);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hero button:hover {
  background-color: rgba(244, 244, 249, 0.3);
}

/* Özellikler bölümü */
.features {
  text-align: center;
  padding: 2rem 1rem;
  background-color: rgba(244, 244, 249, 0);
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
}

.feature-cards {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.feature-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: left;
}

.feature-card h3 {
  font-size: 1.25rem;
  color: black;
  margin-bottom: 0.5rem;
}

.feature-card p {
  font-size: 1rem;
  color: #555;
}
</style>
