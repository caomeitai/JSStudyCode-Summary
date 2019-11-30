<template>
  <div>
    <h2>Grandson中{{name}}有{{$attrs.money}}块钱</h2>
    <button @click="$listeners.click">GrandsonBtn</button>
    <button @mousedown="$listeners.mousedown">GrandsonMouse</button>
  </div>
</template>

<script>
export default {
  //provide函数与reject配合来完成父子通信
  // 它使用的数据会一级一级的向上传递，一旦找到就不再向上找啦！
  inject:['name'],
  mounted() {
    // this.$bus.$emit是异步的，需要到下一次才可执行
    // 利用nextTick来实现解决
    //2，this.$nextTick(() => {
    //   window.console.log(this)//this指的是当前vue实例
    //   this.$bus.$emit("show");
    // });
  },
  methods: {}
};
</script>