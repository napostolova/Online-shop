import ProductsList from '../components/products/ProductsList.vue';
import ProductDetails from '../components/products/ProductDetails.vue';
import NewProduct from '../components/products/NewProduct.vue';

const productsRoutes = [{
        path: '/new-product',
        name: "newProduct",
        component: NewProduct,

    },
    {
        path: '/products',
        name: "products",
        component: ProductsList
    },
    {
        path: '/product-details/:productId',
        name: "productDetails",
        component: ProductDetails
    },
]

export default productsRoutes;