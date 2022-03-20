import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home';
import Login from '../components/authenticate/Login';
import Register from '../components/authenticate/Register'; 

import productsRoutes from './products';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
 ...productsRoutes,
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;