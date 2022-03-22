import MyFavouriteProducts from '../components/user/MyFavouriteProducts.vue';
import MyCart from '../components/user/MyCart.vue';

const userRoutes = [
    {
        path: '/favourites',
        name: 'favourites',
        component: MyFavouriteProducts
    },
    {
        path: '/my-cart/:id',
        name: 'cart',
        component: MyCart
    }
]
export default userRoutes;