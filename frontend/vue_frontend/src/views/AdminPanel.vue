<template>
  <div id="app">
    <!-- Admin Navbar -->
    <nav class="navbar">

      <ul class="nav-links">
        <button class="logout-btn" @click="home"> Home</button>
        <button class="logout-btn" @click="logout"> Logout</button>
      </ul>
    </nav>
    <div class="admin-panel">
      <h1>Admin Panel</h1>
      <button @click="fetchUsers">📋 Auflisten</button>

      <table v-if="users.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>E-Mail Adresse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.vorname }}</td>
            <td>{{ user.nachname }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button v-if="user.id !== 1" @click="deleteUser(user.id)">🗑 Delete</button>
              <span v-else>🔒 Admin</span>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      message: ""
    };
  },
  created() {
    const admin = localStorage.getItem("admin");
    if (!admin) {
      this.$router.push("/admin");
    }
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/users");
        this.users = response.data;
        this.message = "✅ Benutzer erfolgreich aufgelistet!";
      } catch (error) {
        console.error("Error fetching users:", error);
        this.message = "⚠️ Fehler beim Auflisten von Benutzer.";
      }
    },
    async deleteUser(userId) {
      if (confirm("Sind Sie sicher, dass Sie diesen Benutzer löschen möchten?")) {
        try {
          const response = await axios.delete(`http://127.0.0.1:5000/api/delete_user/${userId}`);
          this.message = response.data.message;
          this.fetchUsers();
        } catch (error) {
          this.message = "⚠️ Fehler beim Löschen eines Benutzers.";
          console.error(error);
        }
      }
    },
    logout() {
      localStorage.removeItem("admin");
      this.$router.push("/admin");
    },
    home() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
/* Navbar */
.navbar {
  display: flex;
  justify-content: flex-end; /* Navbar öğelerini sağa hizala */
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: auto; /* Öğeleri sağ üst köşeye itmek için */
}

.navbar button {
  color: white;
  text-decoration: none;
  background: none;
  background-color: rgba(244, 244, 249, 0.2);
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}
.navbar button:hover {

}

.logout-btn:hover {
  background-color: darkred;
}


/* Sayfa İçeriği */
.admin-panel {
  max-width: 800px;
  margin: 80px auto 20px auto; /* Navbar'ın üstüne gelmesini engellemek için margin-top: 80px */
  padding: 20px;
  background-color: rgba(244, 244, 249, 0);
  border-radius: 8px;
  text-align: center;
}

h1 {
  color: white;
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}

th {
  background-color: rgba(244, 244, 249, 0);
  color: white;
}

.message {
  margin-top: 10px;
  font-weight: bold;
}
</style>
