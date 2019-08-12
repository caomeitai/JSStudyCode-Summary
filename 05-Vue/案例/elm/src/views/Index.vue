<template>
    <div class="index">
        <router-view></router-view>
        <!-- 这里绑的data指的是在子组件中封装好的数据data -->
        <TabBar :data="tabbarData"></TabBar>
    </div>
</template>
<script>
import TabBar from "../components/TabBar"
export default {
   data(){
       return {
        // 通过data来返回数组
           tabbarData:[
               {title:"首页",icon:"home",path:"/home"},
               {title:"订单",icon:"file-text-o",path:"/order"},
               {title:"我的",icon:"user",path:"/me"},
           ]
       }
   },
    components:{
        TabBar,
    }
}
</script>

<style scoped>
.index{
    width: 100%;
    height: calc(100 -45px);
}
</style>

