<template>
  <div id="app">
    <p>我是根组件，值为：{{this.$store.state.counter}}</p>
    <h1>{{counter}}--{{stus}}</h1>
    <h1>{{failnumber}}</h1>
    <h2>{{failnumber}}</h2>
    <h2>{{msg}}</h2>
    <h1>{{list}}</h1>
  </div>
</template>
<script>
import {mapState,mapGetters} from "vuex"

export default {
  // 这里data是一个函数，其返回值是一个对象
  data(){
    return {
      msg:this.$store.state.counter
      }
  },
  computed:{
    counter(){
      return this.$store.state.counter;
    },
    stus(){
      return this.$store.state.stus;
    },
    failnumber(){
      // 最终返回得到的是符合条件的新数组
      return this.$store.getters.failnumber
    },
    ...mapGetters(["failnumber"]),
    ...mapState(["list"])
  },
  components: {
    
  }
};
</script>



<style>
</style>
