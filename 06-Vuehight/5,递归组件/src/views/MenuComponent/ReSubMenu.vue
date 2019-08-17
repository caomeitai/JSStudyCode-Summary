<template>
<SubMenu>
    <!-- 这里得到的是menu里的标题 -->
    <template #title>{{data.title}}</template>
    <!-- 这里得到的是menuchildren里的内容,它类似于SubMenu,便历得到children中的每一项  -->
    <template v-for="child in data.children">
        <!-- 就和APP中的一样，来判断是否存在children，不存在不递归，存在再次调用递归组件 -->
        <MenuItem :key="child.title" v-if="!child.children">{{child.title}}</MenuItem>
        <!-- 在子菜单中再次嵌套 -->
        <Resub :key="child.title" :data="child" v-else></Resub>
    </template>
    
</SubMenu> 
</template>

<script>
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
export default {
    name:"Resub",
    // 从父组件中接收数据props
    props:{
        data:{
            // 递归要求的数据是menu是个对象
            type:Object,
            // 默认值是一个空对象，那么返回时要求如下
            default:()=>({})
        }

    },
    components:{
       SubMenu, MenuItem,
    }
}
</script>