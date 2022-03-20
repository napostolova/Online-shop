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
        <span>{{ product.title }}</span>
        <div class="bottom clearfix">
          <span class="price">{{ product.price }} $</span>
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
  width: 300px;
  margin-bottom: 20px;
}
.img-container {
  max-width: 300px;
}
.image {
  width: 100%;
}

.price {
  margin-right: 40px;
}
</style>