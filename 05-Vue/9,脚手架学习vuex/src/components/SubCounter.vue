<template>
<!-- 模板 -->
  <div class="subcounter">
    <p>我是subcounter子组件</p>
    <!-- 要拿到仓库里面的值,显示subNumber的值 -->
    <p>当前counter的值:{{this.$store.state.counter}}</p>
    <!-- 操作counter的值，减一 -->
    <button @click="subone">减一</button>
  </div>
</template>
<script>
export default {
    // 当点击时触发点击事件，这是那个方法
    methods:{
        subone(){
         this.$store.commit("sub")
        }
    }
}
</script>
