<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="username">E-Mail Adresse</label>
        <input type="text" id="username" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="password">Passwort</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <router-link to="/register" class="custom-link">Don't you have an account?</router-link>
      <br />
      <br />
      <button type="submit" :disabled="loading">{{ loading ? "Logging in..." : "Log In" }}</button>

      <!-- Giriş hatası veya başarılı mesajı -->
      <p v-if="message" :class="messageClass">{{ message }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      message: null,
      messageClass: "",
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.message = null; // Önceki mesajları temizle

      try {
        const response = await fetch("http://127.0.0.1:5000/api/login", {
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
          throw new Error(data.message || "Login fehlgeschlagen.");
        }

        console.log("Login erfolgreich:", data);
        this.message = "✅ Login erfolgreich!";
        this.messageClass = "success-message";

        // Kullanıcı bilgilerini localStorage'e kaydet
        localStorage.setItem("user", JSON.stringify(data.user));

        // App.vue'deki parent component'e bilgiyi gönder
        this.$emit("user-logged-in", data.user);

        // Başarı mesajından sonra yönlendirme
        setTimeout(() => {
          this.$router.push("/"); // Kullanıcıyı yönlendir
        }, 1500);
      } catch (error) {
        console.error(error);
        this.message = "❌ Falsche E-Mail oder Passwort!";
        this.messageClass = "error-message";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.custom-link {
  color: rgba(244, 244, 249, 1);
  text-decoration: none;
  font-size: 1.2rem;
}

.custom-link:hover {
  color: #e64a19;
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: rgba(244, 244, 249, 0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  text-align: center;
  margin-top: 7rem;
}

h2 {
  margin-bottom: 1.5rem;
  color: rgba(244, 244, 249, 1);
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
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

button:hover {
  background-color: rgba(244, 244, 249, 0.6);
}

.success-message {
  color: #28a745;
  margin-top: 10px;
  font-weight: bold;
}

.error-message {
  color: red;
  margin-top: 10px;
  font-weight: bold;
}
</style>
