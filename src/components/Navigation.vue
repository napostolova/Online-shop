<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/login" class="link">LOGIN</router-link>
      </el-menu-item>
      <el-menu-item index="2"
        ><router-link to="/register" class="link"
          >REGISTER</router-link
        ></el-menu-item
      >
      <el-menu-item index="3"
        ><router-link to="/offers" class="link"
          >OFFERS</router-link
        ></el-menu-item
      >
      <el-menu-item index="4"
        ><router-link to="/about" class="link"
          >ABOUT US</router-link
        ></el-menu-item
      >
      <el-menu-item index="5"
        ><router-link to="/contact" class="link"
          >CONTACT</router-link
        ></el-menu-item
      >
       <el-menu-item index="6"
        ><router-link to="/new-product" class="link"
          >ADD PRODUCT</router-link
        ></el-menu-item
      >
    </el-menu>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.link {
  text-decoration: none;
}
</style>