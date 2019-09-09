<template>
    <div class="subcounter">
        <p>我是子组件subcounter，当前的值为：{{this.$store.state.counter}}</p>
        <button @click="subone">减一</button>
    </div>
</template>
<script>
export default{
    methods:{
      subone(){
          this.$store.commit("sub")
      },
  }
}
</script>

