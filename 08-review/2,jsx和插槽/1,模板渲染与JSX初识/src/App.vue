<template>
  <div id="app">
    <!-- <test1 :n=n>app</test1> -->
    <!-- <Test2></Test2> -->

    <!-- 将n的值绑到子组件上，传递过去，从而渲染出来标签 -->
    <Test2 :n=n>App</Test2>
  </div>
</template>
<script>
import test1 from "./test1.vue"
import Test2 from "./Test2.js"

export default {
   data(){
     return {
      n:1
    }
  },
  components:{
    test1,
    Test2
  }
}
</script>

