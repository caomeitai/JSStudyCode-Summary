<template>
  <div>
    <h1>Son1有{{money}}块钱</h1>
    <button @click="onchange">修改钱</button>
    <hr>
    <Grandson :money="money" @change="change"></Grandson>
  </div>
</template>
<script>
import Grandson from "./grandson1"
export default {
  props: {
    money: {
      type: Number
    }
  },
  components:{
     Grandson
  },
  methods: {
    //   触发父中的change方法
      onchange(){
         this.$emit("change",10000)
      },
      change(newValue){
         this.$emit("change",newValue)
      }
  },
};
</script>