<template>
  <div>
    <h1>Son1有{{money}}块钱</h1>
    <button @click="onchange">修改钱</button>
  </div>
</template>
<script>
export default {
  props: {
    money: {
      type: Number
    }
  },
  methods: {
      onchange(){
         this.$emit("change",10000)
      }
  },
};
</script>