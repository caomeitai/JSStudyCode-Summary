<template>
  <div>
    <h1>Home</h1>
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
    console.log("..................")
    let r = await getUser()//getUser返回的axios实例返回的是promise
    console.log(r)
    console.log("ddddddddddddddddddddddd")
  }
}
</script>
