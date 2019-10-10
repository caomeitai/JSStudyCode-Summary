<template>
  <div>
    <i-input v-model="username" placeholder="请输入用户名" style="width: 300px"></i-input>
    <i-button type="primary" @click="dologin()">登录</i-button>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  data(){
    return {
      username:""
    }
  },
  methods:{
    ...mapActions(['toLogin']),
    dologin(){
    this['toLogin'](this.username).then(data=>{
      this.$router.push("/")
    },err=>{
      this.$Message.error(err)
    })
    }
  }
}
</script>