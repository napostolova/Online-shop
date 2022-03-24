<template>
  <div class="container">
    <section class="login-page">
      <h1>Login Form</h1>
      <form class="login-form" @submit.prevent="submitForm">
        <label for="email" class="label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="inputFields"
          :class="{ error: hasError('email') }"
          placeholder="john@gmail.com"
          v-model="$v.formData.email.$model"
        />
        <ErrorMessage :isVisible="hasError('email')">
          <p v-if="!$v.formData.email.required">Email is required</p>
          <p v-if="!$v.formData.email.email">Email is invalid</p>
        </ErrorMessage>

        <label for="password" class="label">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          class="inputFields"
          :class="{ error: hasError('password') }"
          placeholder="********"
          v-model="$v.formData.password.$model"
        />
        <ErrorMessage :isVisible="hasError('password')">
          <p v-if="!$v.formData.password.required">Password is required</p>
          <p v-if="!$v.formData.password.minLength">
            Password must be at least 6 characters
          </p>
          <p v-if="!$v.formData.password.alphaNum">
            Password must consist only letters and digits
          </p>
        </ErrorMessage>

        <input
          class="submit"
          type="submit"
          value="Login"
          :disabled="isFilled"
        />

        <p class="field">
          <span
            >If you don't have profile click
            <router-link class="link" to="/register">here</router-link></span
          >
        </p>
      </form>
    </section>
  </div>
</template>

<script>
import { required, email, minLength, alphaNum } from "vuelidate/lib/validators";
import ErrorMessage from "../ErrorMessage.vue";

import { fetchLogin } from "../../services/user";

export default {
  name: "Login",
  components: {
    ErrorMessage,
  },
  data() {
    return {
      isFilled: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    formData: {
      email: {
        required,
        email,
      },

      password: {
        required,
        minLength: minLength(6),
        alphaNum,
      },
    },
  },
  methods: {
    async submitForm() {
      this.$v.$touch();

      const data = {
        email: this.formData.email.trim(),
        password: this.formData.password.trim(),
      };

      const response = await fetchLogin(data);

      if (typeof response != "string") {
        await this.$store.dispatch("getNewUser", response);
        this.$router.push("products");
      } else {
        this.$store.commit("setNotifications", response);
      }
    },
    hasError(field) {
      return this.$v.formData[field].$error;
    },
  },
};
</script>
 
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-page {
  display: flex;
  flex-direction: column;
  background: white;
  width: 30vw;
  height: 60vh;
  margin: 100px auto;
  border: 1px solid gray;
  border-radius: 20px;
}

.login-form {
  display: flex;
  width: 20vw;
  height: 55vh;
  flex-direction: column;
  margin: 40px auto;
}

.submit {
  margin: 40px;
  padding: 15px 50px;
  width: 15vw;
  border-radius: 10px;
  font-size: 18px;
  background-color: green;
  color: white;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  align-self: center;
}

.submit:hover {
  cursor: pointer;
}

.label {
  text-align: left;
}

.inputFields {
  margin: 5px 0 15px 0;
  padding: 15px;
  border-radius: 10px;
  border-style: solid;
  font-size: 16px;
}
.error {
  border-color: red;
}
.error-message {
  color: red;
  margin: 0;
}
.invalid-form {
  font-size: 18px;
  color: rgb(248, 27, 27);
  font-weight: 600;
}

.link {
  color: blue;
  font-weight: 600;
  text-decoration: none;
}
</style>