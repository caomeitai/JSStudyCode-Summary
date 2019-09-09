<template>
  <div class="login">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">资金后台管理系统</span>
      </div>
      <el-form
        :model="loginUser"
        :rules="rules"
        ref="loginForm"
        class="loginForm"
        label-width="60px"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginUser.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登 录</el-button>
        </el-form-item>
        <div class="tiparea">
          <p>
            还没有账号？现在
            <router-link to="/register">注册</router-link>
          </p>
        </div>
      </el-form>
    </section>
  </div>
</template>

<script>
// 在安装过解析token的模块以后，将其引进到得到钥匙的代码之前（login.vue）中
import jwt_decode from "jwt-decode";
export default {
  //登陆时的消息验证
  name: "login",
  data() {
    return {
      loginUser: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          //   console.log("登陆成功啦！")
          // 通过地址来登录成功
          this.$axios
            .post("http://160.238.86.82:5001/api/users/login", this.loginUser)
            // 登录成功的同时发生的事
            .then(res => {
              // console.log(res.data)
              // 登录成功，这样登录之后会得到一把钥匙将其赋给token
              const { token } = res.data;
              // 打印钥匙，登录成功
              console.log(token);

              // 将token那个钥匙推到当地仓库中去
              localStorage.setItem("eleToken", token);

              // 解析token
              const decode = jwt_decode(token);

            //   在仓库中存储数据利用到了store.js
            // 之前在方法当中获取数据利用的是commit,就是指的当钥匙没有得到的话，isEmpty返回是一个真，要使其对应，就要取反
            
            // 这仅仅是短暫的获取，刷新过之后就没有啦，要想刷新还存在，需要在根组件中绑定一下
           
           // dispatch派发一个actions，commit提交的是mutations
            this.$store.dispatch("setIsAutnenticated",!this.isEmpty(decode));
            // 派发用户信息
            this.$store.dispatch("setUser",decode);
              // 登录成功的话会发生页面的跳转,跳转到index页面
              this.$router.push("/index");
            });
        } else {
          console.log("登录信息不正确");
          return false;
        }
      });
    },
    isEmpty(value){
        return (
            value===undefined ||value===null||
            (typeof value==="object"&&Object.keys(value).length===0)||
            (typeof value==="string"&&value.trim().length===0)
            );

        
    }
  }
};
</script>

<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.form_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 20%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>

