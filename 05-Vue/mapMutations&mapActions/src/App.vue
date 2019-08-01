<template>
  <div id="app">
    <p>我是根组件</p>
    <h2>{{list}}</h2>
    <h2>{{num}}</h2>
    <h2>{{nums}}</h2>
    <!-- 这里是在调用下面的...mapMutations时，需要加小括号并且传递参数-->
    <button @click="add('4')">点击push</button>
    <button @click="addnum">异步点击</button>
    <button @click="addAsyncNum">actions点击</button>
    
  </div>
</template>
<script>
import {mapState,mapGetters, mapMutations, mapActions} from "vuex"

export default {
  computed:{
    ...mapState(["list"]),
    ...mapState(["num"]),
    ...mapState(["nums"]),
  },
  methods:{
    ...mapMutations(["add"]),
    // 异步操作一般不放到mutations，它会影响跟踪同步，会放到actions中
    ...mapMutations(["addnum"]),
    ...mapActions(["addAsyncNum"])
    // f1(){
    //   this.$store.commit("add","4");
    // }
  }
};
</script>



<style>
</style>
