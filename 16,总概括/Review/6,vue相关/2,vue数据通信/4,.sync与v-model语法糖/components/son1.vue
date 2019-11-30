<template>
  <div>
    <!-- <h1>Son1有{{money}}块钱</h1> -->
    <h1>Son1有{{value}}块钱</h1>
    <button @click="onchange">修改钱</button>
  </div>
</template>
<script>
export default {
  props: {
    money: {
      type: Number
    },
    value:{
      type:Number
    }
  },
  components:{
  },
  methods: {
    //   触发父中的change方法
      onchange(){
        // 1， this.$emit("change",10000)
        // 2， this.$emit("update:money",20000)
        // 3， this.$emit("update:money",30000)
        // 4， this.$emit("update:money",40000)
        // 5， this.$emit("input",50000)
        // 6， this.$emit("input",60000)
      },
  },
};
</script>