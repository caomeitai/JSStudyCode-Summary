<template>
  <div>
    <h1>Parent有{{money}}块钱</h1>
    <hr />
    <!-- 在传递属性时，默认属性好像是json对象  counter与money都作为属性直接存在于标签上 -->
    <!-- $attrs只有在子接受父中属性时存在 -->
    <Son1 :money="money" :counter="counter"></Son1>
    
    
    <!-- <Son1 :money="money" :counter="counter" @change="change" ></Son1> -->
  </div>
</template>
<script>
import Son1 from "./son1";
export default {
  data() {
    return {
      money: 100,
      counter:12
    };
  },
  components: {
    Son1
  },
  methods: {
    // 在vue/cli中不能直接打印console.log，因为ESLint监测会报错
    // 解决方法：在其前面加上window 
    // show(){
    //   console.log("....")
    //   window.console.log("....")
    // }
  }
};
</script>