<template>
  <div>
    <h1>有{{$attrs.counter}}个儿子</h1>
    <h2>每个人有{{$attrs.money}}块钱</h2>
    <hr>
    <Grandson1 v-bind="$attrs" v-on="$listeners"></Grandson1>
  </div>
</template>
<script>
import Grandson1 from "./grandson1"
export default {
  inheritAttrs:false,
  components:{
    Grandson1
  },
  methods: {
    // 
    // 1，refs: changeson1(){
    //           window.console.log("changeson1...")
    //        }
  },
};
</script>