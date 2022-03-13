<template>
  <div class="container">
    <form class="form" @submit.prevent="onCreate">
      <label for="title" class="label">Title</label>
      <input type="text" name="title" v-model="formData.title"  class="input" />

      <label for="description" class="label">Description</label>
      <textarea type="text" name="description"  v-model="formData.description" class="input" />

      <label for="image" class="label">Image</label>
      <input type="text" name="imageUrl" v-model="formData.imageUrl" class="input" />

      <label for="category" class="label">Select category</label>
      <select name="category" id="category" v-model="formData.category" class="input">
        <option value="goblein">Goblein</option>
        <option value="knitting">Knitting</option>
        <option value=""></option>
        <option value=""></option>
      </select>

      <label for="price" class="label">Price</label>
      <input type="number" name="price" v-model="formData.price" class="input" />

      <button class="btn">Create</button>
    </form>
  </div>
</template>

<script>
import {createProduct} from '../../services/product';

export default {
    data() {
        return {
            formData: {
                title: '',
                description: '',
                imageUrl: '',
                category: '',
                price: 0,
            }

        }
    },
    methods: {
        onCreate() {
            console.log('Create');
           createProduct(this.formData)
        }
    }
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.label {
  position: relative;
  left: -170px;
  top: 25px;
}
.input {
  padding: 10px 20px;
  margin-bottom: 22px;
  border-radius: 7px;
}
.btn {
    background-color: rgb(22, 140, 219);
    color: white;
    padding: 10px 50px;
    border-radius: 10px;
    font-size: 25px;
}
</style>