<template>
  <div class="admin-login-container">
    <h1>Admin Panel Login</h1>
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required placeholder="Enter admin email" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required placeholder="Enter password" />
      </div>
      <button type="submit" :disabled="loading">
        {{ loading ? "Logging in..." : "Log in" }}
      </button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      loading: false,
    };
  },
  created() {
    // Eğer admin zaten giriş yapmışsa, doğrudan admin paneline yönlendir
    const admin = localStorage.getItem("admin");
    if (admin) {
      this.$router.push("/adminpanel");
    }
  },
  methods: {
    async login() {
      this.loading = true;
      this.errorMessage = "";

      try {
        const response = await fetch("http://127.0.0.1:5000/api/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Login failed.");
        }

        // Sadece ID'si 1 olan kullanıcı giriş yapabilsin
        if (data.user.id !== 1) {
          throw new Error("Unauthorized: You are not an admin.");
        }

        // Admin bilgilerini localStorage'a kaydet
        localStorage.setItem("admin", JSON.stringify(data.user));

        // Başarıyla giriş yaptıktan sonra admin paneline yönlendir
        this.$router.push("/adminpanel");
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.admin-login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: rgba(244, 244, 249, 0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  text-align: center;
  margin-top: 7rem;
}

h1 {
  margin-bottom: 1.5rem;
  color: rgba(244, 244, 249, 1);
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: rgba(244, 244, 249, 1);
}

input {
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
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: rgba(244, 244, 249, 0.6);
}

p {
  color: red;
  margin-top: 1rem;
}
</style>
