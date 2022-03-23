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
  computed: {

  },
  async created() {
    const {accessToken} = this.$store.getters.getUser;
    if(accessToken) {
      this.products = await getMyFavouriteProducts(accessToken);
    }
    this.loading = false;
  },
};
</script>

<style>
</style>