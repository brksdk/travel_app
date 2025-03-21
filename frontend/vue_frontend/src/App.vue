<template>
  <div id="app">
    <nav class="navbar" v-if="!isAdminPage">
      <ul class="nav-links">
        <router-link to="/">Home</router-link>

        <!-- Kullanıcı giriş yapmadıysa -->
        <template v-if="!user">
          <router-link to="/login">Log In</router-link>
          <router-link to="/register">Register</router-link>
        </template>

        <!-- Kullanıcı giriş yaptıysa -->
        <div v-if="user" class="user-info">
          <span class="user-icon">👤</span>
          <span class="user-name">{{ user.vorname }}</span>
          <button @click="logout">Log Out</button>
        </div>
      </ul>
    </nav>
    <router-view @user-logged-in="updateUser"></router-view>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    const router = useRouter();
    const user = ref(null);

    // Sayfa açıldığında localStorage'dan kullanıcıyı çek
    onMounted(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        user.value = JSON.parse(storedUser);
      }
    });

    // Kullanıcı giriş yaptığında çağrılacak fonksiyon
    const updateUser = (userData) => {
      user.value = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
      localStorage.removeItem("user");
      user.value = null;
      router.push("/login");
    };

    return { user, logout, updateUser };
  },
  computed: {
    isAdminPage() {
      return this.$route.path.startsWith("/admin");
    },
  },
});
</script>

<style>
/* Navbar */
.navbar {
  display: flex;
  justify-content: flex-end; /* Navbar öğelerini sağa hizala */
  align-items: center;
  padding: 1rem 2rem;
}

/* Navbar içindeki öğeleri yan yana hizalama */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: auto; /* Öğeleri sağ üst köşeye itmek için */
}

/* Bağlantılar ve butonlar */
.navbar a,
.navbar button {
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}

/* Hover efekti */
.navbar a:hover,
.navbar button:hover {
  text-decoration: underline;
}

/* Kullanıcı bilgileri */
.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  font-size: 1.25rem;
}

/* Kullanıcı simgesi */
.user-icon {
  font-size: 1.5rem;
}
</style>
