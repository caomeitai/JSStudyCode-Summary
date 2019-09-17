<template>
  <div id="app">
   <!-- <test1 :data="data" :render="render"></test1> -->
   <Test2 :data="data"></Test2>
  </div>
</template>
<script>
import test1 from "./test1"
import Test2 from "./Test2"
export default {
  data(){
    return {
      data:['HTML','CSS','JS','Vue','React'],
    }
  },
  components:{
    test1,
    Test2,
  },
  methods:{
    render(h,data){
      return <span>{data}</span>
    }
  }
}
</script>

