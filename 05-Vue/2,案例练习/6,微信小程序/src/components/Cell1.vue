<template>
    <!-- 当点击那个框时会发生跳转，使用router-link -->
    <router-link :to="path">
        <!-- 分块可分成两部分 -->
        <div class="cell-wrapper">
           <div class="cell-title">
               <!-- src中不能直接填写具体路径path，需要获得的是具体的http -->
             <img :src="getSrc" alt="">
             <span>{{title}}</span>
           </div>
           <div class="cell-allow-right">
            <i class="fa fa-chevron-right"></i>
           </div>
        </div>   
    </router-link>
</template>
<script>
export default {
    props:{
        // 传递参数中有地址，一个小title，
        src:String,
        title:String,
        path:String,
    },
    computed:{
        // 它在上面是像数据一样直接使用的
        getSrc(){
            return require("../assets/"+this.src)

        }
    }
}
</script>

<style scoped>
.cell-wrapper {
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  min-height: 48px;
  display: flex;
  font-size: 16px;
  line-height: 1;
  overflow: hidden;
  padding: 0 10px;
  width: 100%;
  line-height: 48px;
  border-bottom: 1px solid #d9d9d9;
}
.cell-title {
  flex: 1;
}
.cell-title img {
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: middle;
  margin-right: 0.4rem;
}
.cell-title span {
  display: inline-block;
  vertical-align: middle;
}
.cell-allow-right {
  color: #888;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

