<template>
  <div class="register">
    <div class="header">
      <!-- 取消注册就返回到了登录界面也就是上一级，反正是个点击事件 -->
      <button @click="$router.go(-1)">取消</button>
    </div>
    <div class="container">
      <div class="title">注册账户</div>
      <div class="content">
        <form>
            <!-- v-model绑定的是传递过来的实际用户名 -->
            <InputGroup
            type="text"
            label="昵称"
            placeholder="例如：陈晨"
            v-model="user.name"  
            ></InputGroup>
            <InputGroup
            type="email"
            label="邮箱"
            placeholder="请填写邮箱"
            v-model="user.email"  
            ></InputGroup>
            <InputGroup
            type="password"
            label="密码"
            placeholder="请设置密码"
            v-model="user.password"  
            ></InputGroup>
            <InputGroup
            type="password"
            label="确认密码"
            placeholder="请确认密码"
            v-model="user.password2"  
            ></InputGroup>
        </form>
        <div class="btn_wrap">
            <!-- 在Kbutton中接受到的disabled,在注册页面正式使用时要传递实际的参数false -->
            <!-- 注册界面点击肯定拥有一个点击事件,首先要验证一下信息是否正确，之后才能实现注册 -->
            <Kbutton
            :disabled="isDisabled"
            @click="registerClick"
            >
            <!-- 这里之前封装时的有的槽可以直接填写那些按钮名字 -->
            注册
            </Kbutton>
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
      // 就是在注册时所需要的注册用户信息
      user: {
        name: "",
        email: "",
        password: "",
        password2: ""
      },
    };
  },
  computed:{
    isDisabled(){
      if(this.user.name&&this.user.email&&this.user.password&&this.user.password2){
        return false
      }else{
        return true
      }
    }
  },
  methods:{
    // 仅仅在父组件中来设置点击事件是不可以的，还需要在封装组件中设置
      registerClick(){
        // 判断邮箱信息格式是否正确
          var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        // 判断如果reg这个信息验证不通过，发送警告信息
        if(!reg.test(this.user.email)){
            alert('请输入合法的邮箱')
            return;
        }
        // 判断两次密码输入是否正确，这里不出来原因是未给input框弄点击事件
        if(this.user.password!==this.user.password2){
            alert('两次密码输入不一致！！！')
            return;
        }
        // 验证完之后要想实现注册，就要请求需要用到http.js
        this.$axios.post("http://160.238.86.82:5002/api/users/register",this.user)
        .then(res=>{
            alert("恭喜你！注册成功啦！")
            this.$router.push("/login")
        })
      }
  },
  components: {
    InputGroup,
    Kbutton,
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 50px;
}
.header button {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  color: #20af0e;
}
.container {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.title {
  margin-top: 30px;
  font-size: 22px;
  text-align: center;
}
.content,
.btn_wrap {
  margin-top: 30px;
}
</style>