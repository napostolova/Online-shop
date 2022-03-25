<template>
  <div id="app">
    <Header> </Header>
    <Navigation />
    <el-alert
      v-if="notification.length > 0"
      :title="notification[0]"
      type="error"
      @close="reset"
    >
    </el-alert>

    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  computed: {
    notification() {
      return this.$store.getters.showNotifications;
    },
  },
  methods: {
    reset() {
      console.log("reset");
      this.$store.commit("resetNotifications");
    },
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
