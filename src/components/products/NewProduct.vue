<template>
  <div class="container">
    <h1>Create new product</h1>
    <form class="create-form" @submit.prevent="onCreate">
      <label for="title" class="label">Title</label>
      <input
        type="text"
        name="title"
        class="input"
        :class="{ error: hasError('title') }"
        v-model="$v.formData.title.$model"
      />
      <ErrorMessage :isVisible="hasError('title')">
        <p v-if="!$v.formData.title.required">Title is required</p>
        <p v-if="!$v.formData.title.minLength">
          Title must be at least 10 characters
        </p>
      </ErrorMessage>

      <label for="description" class="label">Description</label>
      <textarea
        type="text"
        name="description"
        class="input"
        :class="{ error: hasError('description') }"
        v-model="$v.formData.description.$model"
      />
      <ErrorMessage :isVisible="hasError('description')">
        <p v-if="!$v.formData.description.required">Description is required</p>
        <p v-if="!$v.formData.description.minLength">
          Description must be at least 10 characters
        </p>
      </ErrorMessage>

      <label for="image" class="label">Image</label>
      <input
        type="text"
        name="imageUrl"
        class="input"
        :class="{ error: hasError('imageUrl') }"
        v-model="$v.formData.imageUrl.$model"
      />
      <ErrorMessage :isVisible="hasError('imageUrl')">
        <p v-if="!$v.formData.imageUrl.required">Image is required</p>
        <p v-if="!$v.formData.imageUrl.url">
          Image address must begin with http(s)://
        </p>
      </ErrorMessage>

      <label for="category" class="label">Select category</label>
      <select
        name="category"
        id="category"
        class="input"
        :class="{ error: hasError('category') }"
        v-model="$v.formData.category.$model"
      >
        <option value="goblein">Goblein</option>
        <option value="knitting">Knitting</option>
      </select>
      <ErrorMessage :isVisible="hasError('category')">
        <p v-if="!$v.formData.category.required">Category is required</p>
      </ErrorMessage>

      <label for="price" class="label">Price</label>
      <input
        type="number"
        name="price"
        class="input"
        :class="{ error: hasError('price') }"
        v-model="$v.formData.price.$model"
      />
      <ErrorMessage :isVisible="hasError('price')">
        <p v-if="!$v.formData.price.required">Price is required</p>
        <p v-if="!$v.formData.price.numeric">Price must be number</p>
      </ErrorMessage>

      <input type="submit" class="btn" value="Create"/>
    </form>
  </div>
</template>

<script>
import { required, minLength, numeric, url } from "vuelidate/lib/validators";
import ErrorMessage from "../ErrorMessage.vue";

import { createProduct } from "../../services/product";

export default {
  name: "NewProduct",
  components: {
    ErrorMessage,
  },
  data() {
    return {
      isFilled: false,
      formData: {
        title: "",
        description: "",
        imageUrl: "",
        category: "",
        price: 0,
      },
    };
  },
  validations: {
    formData: {
      title: {
        required,
        minLength: minLength(10),
      },
      description: {
        required,
        minLength: minLength(10),
      },
      imageUrl: {
        required,
        url,
      },
      category: {
        required,
      },
      price: {
        required,
        numeric,
      },
    },
  },
  methods: {
    async onCreate() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.isFilled = true;
      }

      const { accessToken } = this.$store.getters.getUser;

      let response = await createProduct(this.formData, accessToken);
      if (typeof response != "object") {
        this.$store.commit("setNotifications", response);
      } else {
        this.$router.push("products");
      }
    },
    hasError(field) {
      return this.$v.formData[field].$error;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: column;
}
.create-form {
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