import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home';
import Login from '../components/authenticate/Login';
import Register from '../components/authenticate/Register'; 
import NewProduct from '../components/products/NewProduct'; 
import ProductsList from '../components/products/ProductsList'; 

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
  {
    path: '/new-product',
    component: NewProduct
  },
  {
    path: '/offers',
    component: ProductsList
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;