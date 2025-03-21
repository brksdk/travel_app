<template>
  <div class="start-page">
    <h1>Travel Planning</h1>
    <form @submit.prevent="findShortestPath">
      <div font-size=20px class="form-group">
        <label for="start-location">Start Location:</label>
        <input id="start-location" v-model="form.startLocation" type="text" required />
      </div>
      <div class="form-group">
        <label for="destination">Destination:</label>
        <input id="destination" v-model="form.destination" type="text" required />
      </div>
      <div class="form-group">
        <label for="date">Date:</label>
        <input id="date" v-model="form.date" type="date" required />
      </div>
      <div class="form-group">
        <label for="time">Time:</label>
        <input id="time" v-model="form.time" type="time" required />
      </div>
      <button @click="findShortestPath">Find Shortest Route</button>
    </form>

    <!-- Backend'den gelen sonucu buraya kutulu bir tasarımla yazdırıyoruz -->
    <div v-if="shortestPathResult" class="result-box">
      <h2>Shortest Path Result</h2>
      <p>{{ shortestPathResult }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        startLocation: "",
        destination: "",
        date: "",
        time: "",
      },
      shortestPathResult: null, // Sonuç burada tutulacak
    };
  },
  methods: {
    async findShortestPath() {
      console.log("Button clicked!"); // Kontrol amaçlı konsola yazdır

      // Tarih ve saati formatla
      const travelDate = this.form.date.split("-").reverse().join("."); // 'yyyy-mm-dd' -> 'dd.mm.yyyy'
      const travelTime = this.form.time;
      const travelDatetime = `${travelDate} ${travelTime}`; // 'dd.mm.yyyy HH:MM' formatında

      console.log("Formatted datetime:", travelDatetime); // Tarih-saat formatını kontrol et

      try {
        const response = await fetch("http://127.0.0.1:5000/api/shortest_path", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from_node: this.form.startLocation,
            to_node: this.form.destination,
            travel_date: travelDate, // 'dd.mm.yyyy' formatında gönderiyoruz
            travel_time: travelTime, // Saat kısmını değiştirmiyoruz
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch the shortest path.");
        }

        const data = await response.json();
        console.log(data); // Backend'den dönen sonucu kontrol et
        this.shortestPathResult = data.result; // Sonucu data.result ile alıyoruz
      } catch (error) {
        console.error(error); // Hataları konsola yazdır
      }
    },
  },
};
</script>

<style scoped>
.start-page {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
.form-group {
  margin-bottom: 15px;
}
input {
  width: 100%;
  padding: 8px;
  font-size: 20px;
  margin-top: 5px;
}
button {
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
}
.result-box {
  margin-top: 20px;
  padding: 15px;
  border: 5px solid darkred;
  border-radius: 8px;
  background-color: #f8f9fa;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 20px;
}
.result-box h2 {
  margin: 0 0 10px;
  color: darkred;
  font-size: 20px;
}
.result-box p {
  margin: 0;
  font-size: 20px;
  line-height: 1.5;
  color: #333;
}
button:hover {
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
}

</style>
