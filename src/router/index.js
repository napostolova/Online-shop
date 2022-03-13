import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/authenticate/Login';
import Register from '../components/authenticate/Register';

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]

  const router = new VueRouter({
    routes,
    mode: 'history'
  })
  
  export default router;