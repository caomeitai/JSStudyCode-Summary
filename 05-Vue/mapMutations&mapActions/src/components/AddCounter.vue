<template>
    <div class="addcounter">
        <p>我是子组件addcounter，当前的值为：{{this.$store.state.counter}}</p>
        <button @click="addone">加一</button>
    </div>
</template>
<script>
export default{
    methods:{
      addone(){
          this.$store.commit("add")
      },
  }
}
</script>

