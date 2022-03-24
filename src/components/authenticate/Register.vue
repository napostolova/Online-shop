<template>
  <div class="container">
    <section class="register-page">
      <h1>Register Form</h1>
      <form class="register-form" @submit.prevent="submitForm">
        <label for="username" class="label">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          class="inputFields"
          :class="{ error: hasError('username') }"
          placeholder="John"
          v-model="$v.formData.username.$model"
        />
        <ErrorMessage :isVisible="hasError('username')">
          <p v-if="!$v.formData.username.required">Username is required</p>
          <p v-if="!$v.formData.username.minLength">
            Username must be at least 3 characters
          </p>
          <p v-if="!$v.formData.username.alphaNum">
            Username must consist only letters and digits
          </p>
        </ErrorMessage>

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

        <label for="repeatPass" class="label">Confirm Password</label>
        <input
          type="password"
          name="repeatPass"
          id="repeatPass"
          class="inputFields"
          :class="{ error: hasError('repeatPass') }"
          placeholder="********"
          v-model="$v.formData.repeatPass.$model"
        />
        <ErrorMessage :isVisible="hasError('repeatPass')">
          <p v-if="!$v.formData.repeatPass.required">Password is required</p>
          <p v-if="!$v.formData.repeatPass.sameAs">Passwords do not match</p>
        </ErrorMessage>

        <input
          class="submit"
          type="submit"
          value="Register"
          :disabled="isFilled"
        />

        <p class="field">
          <span
            >If you have profile click
            <router-link class="link" to="/login">here</router-link></span
          >
        </p>
      </form>
    </section>
  </div>
</template>


<script>
import {
  required,
  email,
  minLength,
  alphaNum,
  sameAs,
} from "vuelidate/lib/validators";
import ErrorMessage from "../ErrorMessage.vue";

import { fetchRegister } from "../../services/user.js";

export default {
  name: "Register",
  components: {
    ErrorMessage,
  },
  data() {
    return {
      isFilled: false,
      formData: {
        username: "",
        email: "",
        password: "",
        repeatPass: "",
      },
    };
  },
  validations: {
    formData: {
      username: {
        required,
        alphaNum,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
        alphaNum,
      },
      repeatPass: {
        required,
        sameAs: sameAs("password"),
      },
    },
  },
  methods: {
    async submitForm() {
      this.$v.$touch();

      let { username, email, password, repeatPass } = { ...this.formData };
      const data = { username, email, password };

      if (password != repeatPass) {
        this.isFilled = true;
        }
      const response = await fetchRegister(data);

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
  justify-content: center;
  align-items: center;
}
.register-page {
  display: flex;
  flex-direction: column;
  background: white;
  width: 30vw;
  height: 75vh;
  margin: 100px auto;
  border: 1px solid gray;
  border-radius: 20px;
}

.register-form {
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
  font-size: 16px;
  border-style: solid;
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
  color: darkgreen;
  font-weight: 600;
  text-decoration: none;
}
</style>