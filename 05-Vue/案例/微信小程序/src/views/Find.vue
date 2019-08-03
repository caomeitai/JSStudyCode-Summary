<template>
  <div class="find">
    <!-- 封装组件的使用是在组件上面绑定属性 -->
    <Header title="发现"></Header>
    <div class="content">
       <Cell1 :src="cellData.src" :title="cellData.title" :path="cellData.path"></Cell1>
    </div>  
  </div>
</template>
<script>
import Header from "../components/Header";
import Cell1 from "../components/Cell1";
export default {
  data(){
    return {
      cellData:{
        src:"pyq.jpg",
        title:"朋友圈",
        path:"/circle"

      }
    }
  },
  components: {
    Header,
    Cell1
  }
};
</script>

<style scoped>
.find {
  width: 100%;
  height: calc(100% - 55px);
  position: relative;
  box-sizing: border-box;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
}
</style>
