<template>
  <div>
    <h1>Home</h1>
    <p>当前登陆的用户名是{{this.$store.state.username}}</p>
  </div>
</template>

<script>
// user.js是一个对象，进行对象的解构赋值
import {getUser} from "../../后端/api/user"
export default {
  name: 'home',
  components: {
  },
  async mounted(){
    // console.log("..................")
    let r = await getUser()//getUser返回的axios实例返回的是promise
    console.log(r)
    // console.log("ddddddddddddddddddddddd")
  }
}
</script>
