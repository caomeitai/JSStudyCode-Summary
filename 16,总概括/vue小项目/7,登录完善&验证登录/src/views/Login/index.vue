<template>
  <div class="login wrapper">
    <MHeader>登录</MHeader>
    <div class="login-form">
      <img src="../../assets/imgs/02.jpg" alt />
      <cube-form :model="model" @submit="submitHandler">
        <cube-form-group>
          <cube-form-item :field="fields[0]"></cube-form-item>
          <cube-form-item :field="fields[1]"></cube-form-item>
        </cube-form-group>
        <cube-form-group>
          <cube-button type="submit">登录</cube-button>
        </cube-form-group>
      </cube-form>
    </div>
  </div>
</template>

<script>
import MHeader from "@/components/MHeader";
import { mapActions } from "vuex";
import * as types from "@/store/action-types";
import user from "@/store";
export default {
  data() {
    return {
      // 存放登录需要的数据
      model: {
        username: "",
        password: ""
      },
      // 表单样式数据
      fields: [
        {
          type: "input",
          modelKey: "username",
          label: "用户名",
          props: {
            placeholder: "请输入用户名"
          },
          rules: {
            required: true
          }
        },
        {
          type: "input",
          modelKey: "password",
          label: "密码",
          props: {
            placeholder: "请输入密码",
            type: "password"
          },
          rules: {
            required: true
          }
        }
      ]
    };
  },
  methods: {
    ...mapActions("user", [types.LOGIN]),
    submitHandler(e) {
      // 阻止提交默认事件发生
      e.preventDefault();
      try {
        this[types.LOGIN](this.model);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  },
  components: {
    MHeader
  }
};
</script>

<style lang="stylus" scoped>
.login {
  &-form {
    width: 80%;
    margin: 0 auto;

    img {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      display: block;
      border-radius: 100px;
      margin-bottom: 40px;
    }

    .cube-form-item {
      padding-bottom: 20px;

      .cube-form-label {
        font-size: 16px;
      }
    }
  }
}

// 样式直接将底部导航覆盖掉
.wrapper {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  background: #fff;
}
</style>
