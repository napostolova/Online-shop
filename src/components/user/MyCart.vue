<template>
  <div>
    <h1>My cart</h1>
    <div v-if="cart.length > 0">
      <ProductInCart :products="products" @onRemoveFromCart="onRemoveFromCart"/>
    </div>
    <p v-else>Your cart is empty</p>
  </div>
</template>

<script>
import { getOrderedProducts, deleteProductFromCart } from "../../services/product";
import ProductInCart from "../products/ProductInCart";

export default {
  components: {
    ProductInCart,
  },
  data() {
    return {
      products: [],
      orders: [],
    };
  },
  computed: {
    cart() {
      return this.products;
    },
  },
  methods: {
    onRemoveFromCart(id) {
      const { accessToken } = this.$store.getters.getUser;
      console.log(`remove from cart ${id}`);
      deleteProductFromCart(id, accessToken);
      this.$store.commit("products/removeFromCart", id);
    },
  },
  async mounted() {
    const { accessToken } = this.$store.getters.getUser;
    if (accessToken) {
      this.products = await getOrderedProducts(accessToken);
    }
  },
};
</script>

<style>
</style>