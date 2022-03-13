<template>
  <div>
    <h1>Products</h1>
    <Product :products="products" />
  </div>
</template>

<script>
import { getAllProducts } from "../../services/product";
import Product from "./Product.vue";

export default {
  components: {
    Product,
  },

  data() {
    return {
      products: [],
    };
  },

  async created() {
    this.products = await getAllProducts();
  },
};
</script>

<style>
</style>