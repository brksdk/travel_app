<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Log In</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<router-link to="/start"></router-link>

<script>
import { defineComponent } from 'vue'
import router from './router'

export default defineComponent({

  name: 'App',
  router,
  /*data() {
    return {
      message: ''
    }
  },
  mounted() {
    fetch("http://localhost:5000/api/home")
      .then(response => response.json())
      .then(data => {
        this.message = data.message;
      })
      .catch(error => console.error("Error fetching data:", error));
  }*/
})
</script>

<style>
.navbar {
  @media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--vt-c-black);
    --color-background-soft: var(--vt-c-black-soft);
    --color-background-mute: var(--vt-c-black-mute);

    --color-border: var(--vt-c-divider-dark-2);
    --color-border-hover: var(--vt-c-divider-dark-1);

    --color-heading: var(--vt-c-text-dark-1);
    --color-text: var(--vt-c-text-dark-2);
  }
}
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  margin-right: 5rem;
  font-size: 1.25rem;
}

.navbar a {
  color: white;
  text-decoration: none;
  margin-left: 3rem;
}
.router-link-active {
  pointer-events: none;
}

.navbar a:hover {
  text-decoration: underline;
  background-color: rgba(244, 244, 249, 0.1);
}
</style>