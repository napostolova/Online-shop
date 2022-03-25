<template>
  <div class="container">
    <div v-loading="isLoading">
      <h1>Edit Product</h1>
      <form v-if="product" class="edit-form" @submit.prevent="onEdit">
        <label for="title" class="label">Title</label>
        <input type="text" name="title" class="input" v-model="product.title" />

        <label for="description" class="label">Description</label>
        <textarea
          type="text"
          name="description"
          class="input"
          v-model="product.description"
        />

        <label for="image" class="label">Image</label>
        <input
          type="text"
          name="imageUrl"
          class="input"
          v-model="product.imageUrl"
        />

        <label for="category" class="label">Select category</label>
        <select
          name="category"
          id="category"
          class="input"
          v-model="product.category"
        >
          <option value="goblein">Goblein</option>
          <option value="knitting">Knitting</option>
        </select>

        <label for="price" class="label">Price</label>
        <input
          type="number"
          name="price"
          class="input"
          v-model="product.price"
        />
        <input type="submit" class="btn" value="Edit Product" />
      </form>
    </div>
  </div>
</template>

<script>
import { editProduct, getOneById } from "../../services/product";

export default {
  name: "EditProduct",
  data() {
    return {
      isLoading: true,
      product: {},
    };
  },

  computed: {
    productId() {
      return this.$route.params.productId;
    },
  },
  methods: {
    async onEdit() {
     const { accessToken } = this.$store.getters.getUser;

      let response = await editProduct(this.productId, this.product, accessToken);
      console.log(response);
      
      this.$router.push({name: "productDetails"}, this.productId )
    },
    hasError(field) {
      return this.$v.formData[field].$error;
    },
  },
  async created() {
    this.product = await getOneById(this.productId);
    this.isLoading = false;
  },
};
</script>

<style scoped>
.container {
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: column;
}
.edit-form {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30vw;
  height: 75vh;
}
.label {
  position: relative;
  padding: 0 0 5px 0;
}
.input {
  padding: 10px 20px;
  margin-bottom: 22px;
  border-radius: 7px;
}
.btn {
  background-color: rgb(22, 140, 219);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 24px;
  text-transform: uppercase;
}
</style>