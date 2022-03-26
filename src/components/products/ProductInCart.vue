<template>
  <ul class="container">
    <li v-for="product in products" :key="product.id">
      <div class="img-container">
        <img :src="product.imageUrl" class="image" />
      </div>
      <div style="padding: 14px">
        <p>{{ product.title }}</p>
        <div class="bottom clearfix">
          <p class="price">{{ product.price }} $</p>
        </div>
        <el-button
          type="button"
          class="btn"
          @click="onRemoveFromCart(product._id)"
          >Remove from cart</el-button
        >
      </div>
    </li>
  </ul>
</template>

<script>
import { deleteProductFromCart } from "../../services/product";
export default {
  name: "ProductInCart",
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onRemoveFromCart(id) {
      const { accessToken } = this.$store.getters.getUser;
      console.log(`remove from cart ${id}`);
      deleteProductFromCart(id, accessToken);
      this.$store.dispatch('products/removeFromCart',id)
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-around;
  justify-content: space-around;
  align-items: stretch;
}

.img-container {
  max-width: 100%;
  height: 400px;
}
.image {
  width: 100%;
  height: 90%;
}

.price {
  font-style: italic;
  font-weight: 600;
  font-size: 22px;
  margin-right: 0px;
}
</style>