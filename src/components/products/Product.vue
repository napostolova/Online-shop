<template>
  <div class="container">
    <el-card
      :body-style="{ padding: '0px' }"
      v-for="product in products"
      :key="product.id"
    >
     <div class="img-container"> <img :src="product.imageUrl" class="image" />
     </div>
      <div style="padding: 14px">
        <span>{{ product.title }}</span>
        <div class="bottom clearfix">
          <time class="price">{{ product.price }} $</time>
          <el-button type="text" class="button">View more</el-button>
        </div>
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
};
</script>

<style>
.container {
display: flex;
}
.el-card {
    width: 300px;
    margin-bottom: 20px;

}
.img-container{
    max-width: 300px;
}
.image {
    width: 100%;
}

.price {
    margin-right: 40px;

}
</style>