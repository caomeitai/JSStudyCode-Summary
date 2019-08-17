<template>
  <div id="app">
    <h3>这是自己封装好的form表单</h3>
    <hr>
    <!-- Form管理数据模型model，校验规则rules 所以需要将数据传给Form表单  -->
    <k-form ref="loginForm" :rules="rules" :model="model">
      <k-form-item label="用户名" prop="username">
        <!-- input框中需要验证进行双向数据绑定 -->

        <!-- 在组件上绑定的都是属性，而不能完成真正的双向数据绑定 -->
        <k-input v-model="model.username" type="text" placeholder="请输入用户名"></k-input> 
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <!-- input框中需要验证进行双向数据绑定 -->
       <k-input v-model="model.password" type="password" placeholder="请输入密码"></k-input> 
      </k-form-item>
      <k-form-item>
        <!-- 提交是需要进行验证，那么就将整个表单扔过去，写上ref,加上相应校验规则 -->
        <button @click="submitForm('loginForm')">提交</button>
      </k-form-item>
    </k-Form>
    <!-- 为监视到双向数据绑定变化 -->
    <!-- {{model}} -->
  </div>
</template>
<script>
import KForm from "./views/Form/Form"
import KFormItem from "./views/Form/FormItem"
import KInput from "./views/Form/Input"
import KNotice  from "./views/Form/Notice"
export default {
  data(){
    return {
      model:{
        username:"",
        password:""
      },
      rules:{
        //  required: true表示是必填项
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      },
    }
  },
  methods:{
      submitForm(form){
        // 提交时的验证规则方法,它是调用的form表单里的验证方法,valid是form中函数返回值，form校验函数参数是一个函数
        this.$refs[form].validate(valid=>{
          if(valid){
            alert("请求登录")
          }else{
            console.log("dddfff")
            alert("填写正确信息")
          }
          // 当验证通过时，除了可以在上面使用外，还可以创建一个弹出框
        //  const notice = this.$create(KNotice,{
        //     // 创建弹出框需要传递数据
        //     title:"winter bear",
        //     // 将验证的信息赋过来，判断验证是否通过
        //     message:valid ? "请求登录" : "填写正确信息",
        //     duration:1000,
        //   })
        //   notice.show()
        })  
      }
    },
  components:{
    KForm,KFormItem,KInput,KNotice
  }
}
</script>