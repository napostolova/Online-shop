<template>
  <div id="app">
    <Navigation />
    <el-alert
      v-if="notification.length > 0"
      :title="notification[0]"
      type="error"
      :close="reset"
    >
    
    </el-alert>

    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
  computed: {
    notification() {
      return this.$store.getters.showNotifications
    }
  },
  methods: {
    reset(){
      this.$store.mutations.resetNotifications
    },
      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      },
  }
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
