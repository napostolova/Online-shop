<template>
  <div v-loading="loading">
    <section class="product-details" v-if="product">
      <h1>{{ product.title }}</h1>
      <article class="img-container">
        <img class="image" :src="product.imageUrl" :alt="product.title" />
      </article>
      <article class="description">{{ product.description }}</article>
      <span class="price"> $ {{ product.price }}</span>
      <div v-if="isAdmin == 'user'" class="buttons">
        <button
          type="button"
          class="btn"
          @click="onBuyProduct(product._id)"
          :disabled="isAdded"
        >
          <span class="material-icons"> shopping_cart </span> Add to cart
        </button>
        <button
          type="button"
          class="btn"
          @click="onFavourite()"
          :disabled="isFavourited"
        >
          <span class="material-icons"> favorite_border </span> Add to favourite
        </button>
      </div>
      <div v-else-if="isAdmin == 'admin'" class="buttons">
        <router-link
          :to="{ name: 'editProduct', productId }"
          class="link btn-edit"
          >Edit</router-link
        >

        <el-button type="text" class="btn-delete" @click="onToggleDelete"
          >Delete</el-button
        >
        <el-dialog
          title="Warning"
          :visible.sync="centerDialogVisible"
          width="30%"
          center
        >
          <span>Are you sure you want to delete the product? </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="onDelete"
              >Delete</el-button
            >
          </span>
        </el-dialog>
      </div>
    </section>
  </div>
</template>

<script>
import {
  addFavouriteProduct,
  getOneById,
  buyProduct,
  deleteProduct,
} from "../../services/product";


export default {
  data() {
    return {
      loading: true,
      centerDialogVisible: false,
      isFavourited: false,
      isAdded: false,
      product: {},
    };
  },
  computed: {
    productId() {
      return this.$route.params.productId;
    },
    isAdmin() {
      return this.$store.getters.getUser.role;
    },
  },
  async created() {
    this.product = await getOneById(this.productId);
    this.loading = false;
  },
  methods: {
    async onFavourite() {
      const token = this.$store.getters.getUser.accessToken;
      await this.$store.dispatch("products/setFavouriteProducts", this.product);
      await addFavouriteProduct(this.productId, token);
      this.isFavourited = true;
    },
    async onBuyProduct(id) {
      const { accessToken } = this.$store.getters.getUser;
     await buyProduct(id, accessToken);
     await this.$store.dispatch("products/setOrderedProducts", this.product);
      this.isAdded = true;
    },
    onToggleDelete() {
      this.centerDialogVisible = true;      
    },
    async onDelete() {
      const token = this.$store.getters.getUser.accessToken;
      await deleteProduct(this.productId, token);
      this.$router.push({name: 'products'})
    },
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
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}
.btn:hover {
  cursor: pointer;
}

.btn-edit {
  background-color: rgb(22, 140, 219);
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  font-size: 22px;
  text-transform: uppercase;
}
.btn-delete {
  background-color: rgb(235, 57, 57);
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 19px;
  text-transform: uppercase;
  color: white;
  border: none;
}
</style>