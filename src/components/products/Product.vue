<template>
  <div class="container">
    <el-card
      :body-style="{ padding: '0px' }"
      v-for="product in products"
      :key="product.id"
    >
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
          class="button"
          @click="onProductDetails(product._id)"
          >View more</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onProductDetails(productId) {
      this.$router.push({
        name: "productDetails",
        params: { productId },
      });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-around;
  justify-content: space-around;
  align-items: stretch;
}
.el-card {
  
  margin-bottom: 20px;
  flex-grow: 0;
  flex-basis: 30%;
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