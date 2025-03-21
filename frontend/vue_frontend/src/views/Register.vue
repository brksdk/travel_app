<template>
  <div class="register-page">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" v-model="form.vorname" type="text" required />
      </div>

      <div class="form-group">
        <label for="nachname">Nachname:</label>
        <input id="nachname" v-model="form.nachname" type="text" required />
      </div>

      <div class="form-group">
        <label for="email">E-Mail Adresse:</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>

      <div class="form-group">
        <label for="password">Passwort:</label>
        <input id="password" v-model="form.passwort" type="password" required />
      </div>

      <div class="form-group">
        <label for="confirm-password">Passwort bestätigen:</label>
        <input id="confirm-password" v-model="form.confirmPassword" type="password" required />
        <p v-if="passwordMismatch" class="error-message">❌ Passwörter stimmen nicht überein!</p>
      </div>

      <div class="form-group">
        <label for="phone">Telefonnummer:</label>
        <input id="phone" v-model="form.tel_nummer" type="tel" required />
      </div>

      <button type="submit" :disabled="passwordMismatch || loading">Register</button>
    </form>

    <!-- Kayıt sonucu mesajı -->
    <div v-if="registrationMessage" :class="{'message-box': true, 'error': isError}">
      <p>{{ registrationMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        vorname: "",
        nachname: "",
        email: "",
        passwort: "",
        confirmPassword: "",
        tel_nummer: "",
      },
      registrationMessage: null, // Başarı veya hata mesajı için
      isError: false, // Mesajın hata olup olmadığını belirler
      loading: false, // Kayıt işlemi devam ediyor mu
    };
  },
  computed: {
    passwordMismatch() {
      return this.form.passwort !== this.form.confirmPassword;
    },
  },
  methods: {
    async register() {
      if (this.passwordMismatch) {
        this.registrationMessage = "❌ Passwörter stimmen nicht überein!";
        this.isError = true;
        return;
      }

      this.loading = true; // Yükleme başladığında butonu devre dışı bırak
      this.registrationMessage = null;

      try {
        const response = await fetch("http://127.0.0.1:5000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            vorname: this.form.vorname,
            nachname: this.form.nachname,
            email: this.form.email,
            passwort: this.form.passwort,
            tel_nummer: this.form.tel_nummer,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Registrierung fehlgeschlagen.");
        }
        this.registrationMessage = "✅ Registrierung erfolgreich! 🎉";
        setTimeout(() => {
          this.$router.push("/login"); // Kullanıcıyı yönlendir
        }, 1500);
        this.isError = false;

        // Formu temizle
        this.form = {
          vorname: "",
          nachname: "",
          email: "",
          passwort: "",
          confirmPassword: "",
          tel_nummer: "",
        };
      } catch (error) {
        console.error(error);
        this.registrationMessage = `❌ Fehler: ${error.message}`;
        this.isError = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(244, 244, 249, 0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: white;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-weight: bold;
  display: block;
  color: lightgray;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
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

button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

button:hover {
  background-color: rgba(244, 244, 249, 0.6);
}

.message-box {
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}

.message-box.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.message-box:not(.error) {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
