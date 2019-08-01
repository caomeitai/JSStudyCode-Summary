<template>
<!-- 模板,在compontents中来定义组件-->
  <div class="addcounter">
    <p>我是addcounter子组件</p>
    <!-- 要拿到仓库里面的值,显示addNumber的值 -->
    <p>当前counter的值:{{this.$store.state.counter}}</p>
    <!-- 操作counter的值，加一 -->
    <button @click="addone">加一</button>
  </div>
</template>
<script>
export default {
    // 当点击时触发点击事件，这是那个方法
    methods:{
        addone(){
          this.$store.commit("add")
        },
        subone(){
          this.$store.commit("sub")
        }
    }
}
</script>
