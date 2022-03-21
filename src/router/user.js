import User from '../components/user/User.vue';
import MyFavouriteProducts from '../components/user/MyFavouriteProducts.vue';
import MyCart from '../components/user/MyCart.vue';

const userRoutes = [{
    path: '/user',
    name: "user",
    component: User,

    children: [{
            path: '/my-favourites/:id',
            name: "myFavourites",
            component: MyFavouriteProducts
        },
        {
            path: '/my-cart/:id',
            name: "myCart",
            component: MyCart
        },
    ]
}]

export default userRoutes;