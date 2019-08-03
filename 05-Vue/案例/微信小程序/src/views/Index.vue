<template>
<div class="index">
   <router-view></router-view>
   <!-- 直接使用封装组件得到效果,仅仅需要绑定相应属性OK！ -->
   <Tabbar :data="tabbarData"></Tabbar>
</div>
</template>
<script>
import Tabbar from "../components/Tabbar"
export default {
   data(){
      return {
         tabbarData:[
            {title:"微信",icon:"comment",path:"/wchart"},
            {title:"通讯录",icon:"address-book",path:"/adressbook"},
            {title:"发现",icon:"compass",path:"/find"},
            {title:"我的",icon:"user",path:"/mine"},
         ]
      }
   },
  components:{
      Tabbar,
   }
}
</script>

