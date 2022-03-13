<template>
  <div>
    <h1>Welcome</h1>
    <el-carousel height="400px">
      <el-carousel-item v-for="item in imageAddress" :key="item">
        <div class="img-container"><img class="image" :src="item.image"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
const imageAddress = [
    {id: 0,
    image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/09/hipwee-www.hopefulhoney.com-u--750x590.jpg'},
     {id: 1,
    image: 'https://m.media-amazon.com/images/I/71tRarkIspL._SL1469_.jpg'},
     {id: 2,
    image: 'https://emillygobelins.com/image/cache/data/MilenaStyle/14Ct/AD018-Simulation-600x600.jpg'},
     {id: 3,
    image: 'https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtYWtlMjc5Mi1ha2UuanBn.jpg?s=lzFyHQ9B4DFxm29Lyd_yOg04deriOVnR4TyiTrxn3tg'},
]
export default {
    data() {
        return {
            imageAddress
        }
    }
};
</script>

<style>
.img-container{
    max-width: 620px;
    margin: 0 auto;
}
.image {
    width: 100%;
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