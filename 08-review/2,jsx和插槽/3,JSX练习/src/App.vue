<template>
  <div id="app">
    <!-- <test :data="data"></test> -->
    <test1 :data="data" :render="render"></test1>
  </div>
</template>
<script>
import test from "./test"
import test1 from "./test1"
export default {
  data(){
    return {
      data:['css','html','js']
    }
  },
  components:{
    test,
    test1,
  },
  methods:{
    render(h,data){
      return <p>{data}</p>
    }
  }

}
</script>

