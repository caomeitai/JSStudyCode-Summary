<template>
  <div class="register">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">资金后台管理系统</span>
      </div>
      <el-form
        :model="registerUser"
        :rules="rules"
        class="registerForm"
        ref="registerForm"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="registerUser.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input v-model="registerUser.password2" placeholder="请确认密码" type="password"></el-input>
        </el-form-item>
        <el-form-item label="选择身份">
          <el-select v-model="registerUser.identity" placeholder="请选择身份">
            <el-option label="管理员" value="manager"></el-option>
            <el-option label="员工" value="employee"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <!-- 要想实现注册成功后的提示信息，注册失败后的信息 -->
          <!-- 点击注册后得到的是注册表单，所以提交参数为注册表单 -->
          <el-button type="primary" class="submit_btn" @click="submit('registerForm')">注 册</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  name: "register",
  // 验证信息调用了data函数，返回一个对象
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 填写规范，返回的是注册时所填写的用户信息
      registerUser: {
        name: "",
        email: "",
        password: "",
        password2: "",
        identity: ""
      },
      // 验证时如果填写不正确显示所要遵循的一堆规则
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "change" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ],
        password2: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "长度在 6 到 30 个字符",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // form是形参，传递过来的实参是registerForm注册表单的数据
    submit(form) {
      // 这里使用refs拿到对应的registerForm（它是由ref来定义的）数据
      this.$refs[form].validate(valid => {
        // 判断注册表单中是否有数据，有的话证明注册成功啦
        if (valid) {
          // console.log("注册成功啦")
          // 调用注册的接口实现注册  http://160.238.86.82:5001/api/users/register 接口地址
          // 使用之前需要将封装好的axios挂载到vue原型上去在main.js中
          this.$axios
            .post(
              "http://160.238.86.82:5001/api/users/register",
              this.registerUser
            )
            .then(res=>{
              // console.log(this)  //this指的是vue实例
              // this.$message没有定义
              this.$message({
                message:"恭喜你，注册成功啦！",
                type:"success"
              });
              this.$router.push("/login")
            })
            // .then(function(res) {
            //   return this.$message({
            //     message: "恭喜你，注册成功啦！",
            //     type: "success"
            //   });
            //   // 上述全部成功以后将页面转到login页面,即路由的切换
            //   this.$router.push("/login")
            // })
        } else {
          console.log("填写的注册信息不正确！！");
          return false;
        }
      });
    }
    // submit(form){
    //   console.log(form)
    // }
  }
};
</script>

<style scoped>
.register {
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
  top: 10%;
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
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
</style>



