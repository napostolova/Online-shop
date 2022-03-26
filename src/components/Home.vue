<template>
  <div>
    <h1>Welcome to our store</h1>
    <h2>Here you can see handmade gobeins</h2>
    <el-carousel height="400px">
      <el-carousel-item v-for="item in imageAddress" :key="item.id">
        <div class="img-container"><img class="image" :src="item.image" /></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
const imageAddress = [
  {
    id: 1,
    image: "https://images.stitcher.co.uk/products/46753/large/ssn46753-1.jpg",
  },
  {
    id: 2,
    image:
      "https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtYWtlMjc5Mi1ha2UuanBn.jpg?s=lzFyHQ9B4DFxm29Lyd_yOg04deriOVnR4TyiTrxn3tg",
  },
];
export default {
  data() {
    return {
      imageAddress,
    };
  },
};
</script>

<style scoped>
el-carousel--horizontal {
width: 1200px;
}
el-carousel__container {
  height: 800px;
}
.img-container {
  width: 1200px;
  height: 600px;
  margin: 0 auto;
}
.image {
  width: 100%;
  height: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  /* line-height: 900px; */
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>