<template>
  <div class="start-container">
    <h1>Plan Your Journey</h1>
    <form @submit.prevent="planTrip">
      <div class="input-group">
        <label for="start-location">Start Location</label>
        <input type="text" id="start-location" v-model="startLocation" required placeholder="Enter start location" />
      </div>
      <div class="input-group">
        <label for="destination">Destination</label>
        <input type="text" id="destination" v-model="destination" required placeholder="Enter destination" />
      </div>
      <div class="input-group">
        <label for="date">Date</label>
        <input type="date" id="date" v-model="date" required />
      </div>
      <div class="input-group">
        <label for="time">Time</label>
        <input type="time" id="time" v-model="time" required />
      </div>
      <button type="submit">Find Routes</button>
    </form>

    <section v-if="routes.length" class="routes">
      <h2>Available Routes</h2>
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          {{ route }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startLocation: "",
      destination: "",
      date: "",
      time: "",
      routes: []
    };
  },
  methods: {
    planTrip() {
      // example routes. i will fill them with APIs
      this.routes = [
        `Route from ${this.startLocation} to ${this.destination} at ${this.date} ${this.time}`,
        `Alternative route from ${this.startLocation} to ${this.destination} via another city`
      ];
    }
  }
};
</script>

<style scoped>
.start-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: rgba(244, 244, 249, 0);
  text-align: center;
}

h1 {
  color: white;
  margin-bottom: 1.5rem;
}


.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: white;
}

input[type="text"],
input[type="date"],
input[type="time"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: rgba(244, 244, 249, 0.1);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: rgba(244, 244, 249, 0.3);
}

.routes {
  margin-top: 2rem;
}

.routes h2 {
  color: rgba(244, 244, 249, 1);
  margin-bottom: 1rem;
}

.routes ul {
  list-style: none;
  padding: 0;
  color: black;
}

.routes li {
  background-color: rgba(244, 244, 249, 1);
  padding: 0.75rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
}
</style>
