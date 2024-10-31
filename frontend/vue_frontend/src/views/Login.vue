<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      alert("Login successful!");
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: rgba(244, 244, 249, 0); /* Şeffaf arka plan */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  text-align: center;
  margin-top: 7rem;
}

h2 {
  margin-bottom: 1.5rem;
  color: rgba(244, 244, 249, 1);;
}

.input-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: rgba(244, 244, 249, 1);
}

input[type="text"],
input[type="password"] {
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
  background-color: rgba(244, 244, 249, 0.2);
  color: White;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: rgba(244, 244, 249, 0.6);
}
</style>
