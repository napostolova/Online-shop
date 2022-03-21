<template>
  <div>
    <nav class="nav-menu-main">
      <ul class="nav-menu">
        <li key="3" class="nav-link">
          <router-link to="/products" class="link">OFFERS</router-link>
        </li>
        <li key="4" class="nav-link">
          <router-link to="/about" class="link">ABOUT US</router-link>
        </li>
        <li key="5" class="nav-link">
          <router-link to="/contact" class="link">CONTACT</router-link>
        </li>
      </ul>
      <div v-if="isUser.username" class="user">
        <ul class="nav-menu">
          <li class="nav-link">Welcome, {{ isUser.username }}</li>
          <li v-if="isUser.role=='admin'" key="6" class="nav-link">
            <router-link to="/new-product" class="link"
              >ADD PRODUCT</router-link
            >
          </li>
          <li key="7" class="nav-link">
            <router-link to="/user" class="link">My profile</router-link>
          </li>

          <li key="8" class="nav-link">
            <button class="logout-btn" @click="onLogout">Logout</button>
          </li>
        </ul>
      </div>
      <div v-else class="guest">
        <ul class="nav-menu">
          <li key="1" class="nav-link">
            <router-link to="/login" class="link">LOGIN</router-link>
          </li>
          <li key="2" class="nav-link">
            <router-link to="/register" class="link">REGISTER</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { clearLocalStorage } from "../utils/useLocaleStorage";
import { logout } from "../services/user";

export default {
  data() {
    return {

    };
  },
  computed: {
    isUser() {
      return this.$store.getters.getUser;
    },
   
  },

  methods: {
    async onLogout() {
      clearLocalStorage();
      logout();
      await this.$store.dispatch("getNewUser", {});
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
.nav-menu-main {
  display: flex;
  justify-content: space-between;
}
.nav-menu {
  display: flex;
}
.nav-link {
  list-style: none;
  text-decoration: none;
  padding-right: 20px;
}
.link {
  list-style: none;
  text-decoration: none;
}
.logout-btn {
  background-color: white;
  border-style: none;
  text-transform: uppercase;
  font-size: 16px;
}
.logout-btn:hover {
  cursor: pointer;
}
</style>