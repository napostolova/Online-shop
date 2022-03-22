<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="Email" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { fetchLogin } from "../../services/user";

export default {
  data() {
    return {
      disabled: true,
      ruleForm: {
        email: "",
        password: "",
      },
      rules: {
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
      },
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
         console.log("error submit!!");
          return false; 
        }
      });
      const data = await fetchLogin(this.ruleForm);
      await this.$store.dispatch("getNewUser", data);
      this.$router.push("products");
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
</style>