<template>
  <div>
    <h1>Parent有{{money}}块钱</h1>
    <hr />
    <!-- 不能直接给组件加上原生的事件：Click，mouseMove -->
    <!-- @click="change" 默认传递给子的click方法是父中的change方法，而不是原生的click方法 -->
    <!-- <Son1 :money="money" :counter="counter" @click="change"></Son1> -->
    
    <!-- 想要当做原生的click方法，需要加上.native -->
    <!-- <Son1 :money="money" :counter="counter" @click.native="change"></Son1> -->
    
    <!-- 传递方法给子组件  @xxx="xx" 子组件可利用$listeners接收父中所有的方法 -->
    <Son1 :money="money" :counter="counter" @click="change" @mousedown="change"></Son1>
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
    change(){
    //  window.console.log("change....")//简单的触发了原生的click点击事件，就不需要再去接收咯！
     window.console.log("change....")
    }
  }
};
</script>