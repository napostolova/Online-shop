<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="Username" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="Confirm Password" prop="repeatPass">
        <el-input v-model="ruleForm.repeatPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Register</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { fetchRegister } from "../../services/user.js";

export default {
  data() {
    return {
      ruleForm: {
        username: "",
        email: "",
        password: "",
        repeatPass: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please insert a username",
            trigger: "blur",
          },
          {
            min: 5,
            message: "Username should be at least 5 symbols",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please insert valid email",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "Please insert a password",
            trigger: "change",
          },
        ],
        repeatPass: [
          {
            required: true,
            message: "Confirm your password",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let { username, email, password } = { ...this.ruleForm };
          const data = { username, email, password };
         fetchRegister(data);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
</style>