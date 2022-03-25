<template>
  <header class="header">
    <nav class="nav-menu-main">
      <ul class="nav-menu">
        <li key="3" class="nav-link">
          <router-link to="/products" class="link">PRODUCTS</router-link>
        </li>
        
      </ul>
      <div v-if="isUser.username" class="user">
        <ul class="nav-menu">
          <li class="nav-link">Welcome, {{ isUser.username }}</li>
          <li v-if="isUser.role == 'admin'" key="6" class="nav-link">
            <router-link to="/new-product" class="link"
              >ADD PRODUCT</router-link
            >
          </li>
          <li key="7" class="nav-link">
            <router-link to="/favourites" class="link">
              <el-badge
                v-if="favProducts"
                :value="favProducts.length"
                class="item"
              >
                <span class="material-icons"> favorite_border </span>
              </el-badge>
            </router-link>
          </li>
          <li key="8" class="nav-link">
            <router-link to="/cart" class="link">
              <el-badge v-if="cart" :value="cart.length" class="item">
                <span class="material-icons"> shopping_cart </span>
              </el-badge>
            </router-link>
          </li>
          <li key="9" class="nav-link">
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
  </header>
</template>

<script>
import { clearLocalStorage } from "../utils/useLocaleStorage";
import { logout } from "../services/user";

export default {
  data() {
    return {};
  },
  computed: {
    isUser() {
      return this.$store.getters.getUser;
    },
    favProducts() {
      return this.$store.getters["products/favourites"];
    },
    cart() {
      return this.$store.getters["products/cart"];
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
.header {
  background: orange;
  font-size: 20px;
  
}
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
.material-icons {
  color: grey;
  font-size: 28px;
}
.logout-btn {
  background-color: white;
  border-style: none;
  font-size: 16px;
}
.logout-btn:hover {
  cursor: pointer;
}
</style>