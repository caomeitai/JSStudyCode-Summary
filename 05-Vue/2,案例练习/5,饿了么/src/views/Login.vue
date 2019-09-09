<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt />
    </div>
    <InputGroup
      type="number"
      v-model="phone"
      placeholder="手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getverifyCode"
    />
    <InputGroup type="number" v-model="verifyCode" placeholder="验证码" :error="errors.code" />
    <div class="login_des">
      <p>
        新用户登录即自动注册，表示已同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <div class="login_btn">
      <!-- 给登陆按钮绑了属性来判断是不是能够点击 -->
      <button :disabled="isClick" @click="handleLogin">登录</button>
    </div>
  </div>
</template>
<script>
import InputGroup from "../components/InputGroup";
import { clearInterval } from "timers";
export default {
  data() {
    return {
      phone: "", //value值
      verifyCode: "", //验证码值
      btnTitle: "获取验证码",
      disabled: false,
      errors: {}
    };
  },
  computed: {
    // 仅仅为了判断按钮是不是可以点击
    isClick() {
        if(!this.phone ||!this.verifyCode){
            return true;
        }else{
            return false;
        }
    }
  },
  methods: {
    //在获取验证码之前来分别判断手机号和验证码
    // 手机号
    validatePhone() {
      if (!this.phone) {
        // 得到错误给errors
        this.errors = {
          phone: "手机号不能为空" //因为出现错误，会在填写手机号的地方提示
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        // 如果手机格式不对，则出现错误
        this.errors = {
          phone: "请填写正确的手机号"
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
    // 实现倒计时，获取验证码
    validateBtn() {
      let time = 60;
      let timer = setInterval(() => {
        // 当倒计时结束以后，按钮恢复可按状态，按钮为获取验证码
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          // 按钮也是可按状态
          this.disabled = false;
        } else {
          // 按钮不可按，且时间在不断减1
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    //   真正的获取验证码
    getverifyCode() {
      //   当手机号正确之后，验证验证码，拿到相应方法时用this
      if (this.validatePhone()) {
        this.validateBtn();
        // 发送请求获取验证码，由于我们要请求后端接口  跨域问题
        // console.log("发送请求");
        this.$axios.post("/api/posts/sms_send",{//所带参数
        tpl_id:"177607",
        key:"8331ccb89de9264d22bb37875631a207",
        phone:this.phone
        })
      }
    },
    // 登录按钮点击事件
    handleLogin(){
        // 点击事件发生后做的事
        this.$axios.post("/api/posts/sms_back",{
            // post带的一堆参数,需要把他们扔到后台
            phone:this.phone,
            code:this.verifyCode,
        }).then(res=>{
            console.log(res);
            // 验证完成以后，设置登录状态并跳转到  /。
            // 看看有没有路由标识，也差不多就是钥匙
            localStorage.setItem("ele_login",true);
            this.$router.push("/");//登陆之后跳转到首页面
        })
        .catch(err=>{
            this.errors={
                code:err.response.data.msg  //错误标志，提醒
            }
        })
    }
  },
  components: {
    InputGroup
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}
.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>
