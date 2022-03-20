<template>
  <div v-loading="loading">
    <section class="list">
      <Product :products="products" />
    </section>
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
      loading: true,
      products: [],
    };
  },

  async created() {
    this.products = await getAllProducts();
    this.loading = false;
  },
};
</script>

<style>
.list {
  margin: 90px auto; 
 
}
</style>