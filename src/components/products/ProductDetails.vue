<template>
  <div v-loading="loading">
    <section class="product-details" v-if="product">
      <h1>{{ product.title }}</h1>
      <article class="img-container">
        <img class="image" :src="product.imageUrl" :alt="product.title" />
      </article>
      <article class="description">{{ product.description }}</article>
      <div class="info">
        <span class="price">{{ product.price }} $</span>
        <button class="favorite" @click="onFavourite(product._id)">
          <span class="material-icons"> favorite </span>
        </button>
      </div>
      <button class="btn">Buy</button>
    </section>
  </div>
</template>

<script>
import { addFavouriteProduct, getOneById,} from "../../services/product";
import { getUser,} from "../../services/user";

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
    onFavourite(id) {
      console.log(`favourite`, id);
      const token = getUser().token;
      console.log(`token ${token}`);
      addFavouriteProduct(id, token);

    }
  },

  async created() {
    this.product = await getOneById(this.productId);
    this.loading = false;
  },
};
</script>

<style>

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
  color: red;
  size: 28px;
}
.favorite {
  background-color: white;
  border-color: white;
  border-radius: 10px;
  padding: 10px;
  border-style: none;
}
.favorite:hover {
  cursor: pointer;
}

.btn {
  background-color: rgb(22, 140, 219);
  color: white;
  padding: 5px;
  border-radius: 10px;
  text-transform: uppercase;
}
</style>