<template>
  <div v-loading="loading">
    <h2>My favourite products</h2>
    <h1 v-if="products.length < 1">You have not favourite products</h1>
    <Product :products="products" />
  </div>
</template>

<script>
import Product from "../products/Product.vue";
import { getMyFavouriteProducts } from "../../services/product";

export default {
  components: {
    Product,
  },
  data() {
    return {
      loading: true,
      products: [],
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    this.products = await getMyFavouriteProducts(token);
    this.loading = false;
  },
};
</script>

<style>
</style>