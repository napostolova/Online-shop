<template>
  <div v-loading="loading">
    <section class="product-details" v-if="product">
      <h1>{{ product.title }}</h1>
      <article class="img-container">
        <img class="image" :src="product.imageUrl" :alt="product.title" />
      </article>
      <article class="description">{{ product.description }}</article>
      <span class="price">{{ product.price }} $</span>
      <div class="buttons">
        <button class="btn" @click="onBuyProduct(product._id)">
          <span class="material-icons"> shopping_cart </span> Add to cart
        </button>
        <button class="btn" @click="onFavourite(product._id)">
          <span class="material-icons"> favorite_border </span> Add to favourite
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import {
  addFavouriteProduct,
  getOneById,
  buyProduct,
} from "../../services/product";

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
  methods: {
    async onFavourite(id) {
      const token = this.$store.getters.getUser.accessToken;
      await this.$store.dispatch("products/setFavouriteProducts", id);
      await addFavouriteProduct(id, token);
    },
    async onBuyProduct(id) {
      const { accessToken } = this.$store.getters.getUser;
      await buyProduct(id, accessToken);
      await this.$store.dispatch("products/setOrderedProducts", id);
      console.log(`buy`);
    },
  },

  async created() {
    this.product = await getOneById(this.productId);
    this.loading = false;
  },
};
</script>

<style scoped>
.product-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-container {
  max-width: 350px;
  margin: 20px 0;
}
.image {
  width: 100%;
}
.description {
  margin: 20px;
}
.material-icons {
  color: white;
  size: 28px;
  margin-right: 10px;
}
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn:hover {
  cursor: pointer;
}

.btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(22, 140, 219);
  color: white;
  border-radius: 10px;
  border-style: none;
  margin: 10px 0 10px 0;
}
</style>