import ProductsList from '../components/products/ProductsList.vue';
import ProductDetails from '../components/products/ProductDetails.vue';
import NewProduct from '../components/products/NewProduct.vue'; 
import EditProduct from '../components/products/EditProduct.vue'; 

const productsRoutes = [{
        path: '/new-product',
        name: "newProduct",
        component: NewProduct,
        beforeEnter: (to, from, next) => {
            const admin = localStorage.getItem('role')
            if (admin !== 'admin') {
                next({
                    name: 'login'
                });
            } else {
                next();
            }
        }
    },
    {
        path: '/edit-product/:productId',
        name: "editProduct",
        component: EditProduct,
        beforeEnter: (to, from, next) => {
            const admin = localStorage.getItem('role')
            if (admin !== 'admin') {
                next({
                    name: 'login'
                });
            } else {
                next();
            }
        }
    },
    {
        path: '/products',
        name: "products",
        component: ProductsList
    },
    {
        path: '/product-details/:productId',
        name: "productDetails",
        component: ProductDetails,
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
]

export default productsRoutes;