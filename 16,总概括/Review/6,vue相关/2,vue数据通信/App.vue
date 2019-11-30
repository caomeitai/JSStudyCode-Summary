<template>
    <div>
        <Parent></Parent>
    </div>
</template>
<script>
import Parent from "./components/parent"
export default {
    // 父子通信中，Provide在上层组件中提供数据
    // 在父组件中提供name数据
    provide(){
     return{
         name:"tanni"
     }
    },
    components:{
        Parent
    }
}
</script>