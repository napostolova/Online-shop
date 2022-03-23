import MyFavouriteProducts from '../components/user/MyFavouriteProducts.vue';
import MyCart from '../components/user/MyCart.vue';

const userRoutes = [{
        path: '/favourites',
        name: 'favourites',
        component: MyFavouriteProducts,
        beforeEnter: (to, from, next) => {
            const user = localStorage.getItem('username')
            if (to.name !== 'login' && user == 'undefined') {
                next({
                    name: 'login'
                })
            } else {
                next();
            }
        }
    },
    {
        path: '/cart',
        name: 'cart',
        component: MyCart,
        beforeEnter: (to, from, next) => {
            const user = localStorage.getItem('username')
            if (to.name !== 'login' && user == 'undefined') {
                next({
                    name: 'login'
                })
            } else {
                next();
            }
        }
    }
]
export default userRoutes;