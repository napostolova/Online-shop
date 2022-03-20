<template>
  <div v-loading="loading">
    <section v-if="product">
      <h1>{{ product.title }}</h1>
      <article><img :src="product.imageUrl" :alt="product.title" /></article>
      <article>{{ product.description }}</article>
      <span>{{ product.price }} $</span>
      <button>Buy</button>
    </section>
  </div>
</template>

<script>
import { getOneById } from "../../services/product";

export default {
  data() {
    return {
      loading: true,
      product: {},
    };
  },
  computed: {
    productId() {
      return this.$route.params.productId;
    },
  },

  async created() {
    this.product = await getOneById(this.productId);
    this.loading = false;
  },
};
</script>

<style>
</style>