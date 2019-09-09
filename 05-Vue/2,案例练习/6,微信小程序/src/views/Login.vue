<template>
  <div class="login">
    <div class="container">
      <div class="title">用户登录</div>
      <div class="content">
        <form>
          <!-- v-model绑定的是传递过来的实际用户名 -->
          <InputGroup type="email" label="账号" placeholder="请填写邮箱" v-model="user.email"></InputGroup>
          <InputGroup type="password" label="密码" placeholder="请填写密码" v-model="user.password"></InputGroup>
        </form>
        <div class="btn_wrap">
          <Kbutton @click="loginClick">
            <!-- 这里之前封装时的有的槽可以直接填写那些按钮名字 -->
            登录
          </Kbutton>
        </div>
        <div class="footer_wrap">
          |
          <button class="register" @click="$router.push('/register')">注册账号</button>|
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputGroup from "../components/InputGroup";
import Kbutton from "../components/Kbutton";
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginClick() {
        // 它与注册界面一样需要验证一下信息是否正确
      var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (!reg.test(this.user.email)) {
        alert("请输入合法的邮箱");
        return;
      }else{
          this.$axios.post("http://160.238.86.82:5002/api/users/login",this.user)
          .then(res=>{
              const {token} = res.data;//拿到钥匙
              localStorage.setItem("eleToken",token);//将钥匙存放到本地仓库
              this.$router.push("/")
          })
      }
    }
  },
  components: {
    InputGroup,
    Kbutton
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
}
.title {
  margin-top: 80px;
  font-size: 22px;
  text-align: center;
}
.footer_wrap {
  position: absolute;
  left: 0;
  bottom: 16px;
  text-align: center;
  width: 100%;
  color: #888;
}
.footer_wrap .register {
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #7b8ca9;
}
.content,
.btn_wrap {
  margin-top: 30px;
}
</style>


