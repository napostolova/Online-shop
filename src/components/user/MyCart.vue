<template>
  <div>
    <h1>My cart</h1>
    <div v-if="products.length > 0">
          <Product :products="products" />
    </div>
    <p v-else>Your cart is empty</p>
  </div>
</template>

<script>
import { getOrderedProducts } from "../../services/product";
import Product from "../products/Product";

export default {
  components: {
    Product,
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
  async created() {
    const { accessToken } = this.$store.getters.getUser;
    if (accessToken) {
      this.products = await getOrderedProducts(accessToken);
    }
    
  },
};
</script>

<style>
</style>