<template>
    <div>
        <li>
            <!-- 来区分到底是哪个用户详情，带参数路由 -->
            <router-link to="/user/detial?id=1">用户1</router-link>
            <router-link to="/user/detial/2">用户2</router-link>
            <router-link to="/user/detial/3">用户3</router-link>
        </li>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to,from,next){
        console.log("beforeRouteEnter")
        // from.name是来自于router.js中的配置name
        if(from.name==="useradd"){
            console.log("是从添加用户点击按钮来的。。。")
        }
        // 在钩子函数中this拿不到vue实例，next的第一个参数代表着vue实例
        next(vm=>{
            console.log(vm);//当组件渲染完成后，会调用当前的beforeRouteEnter方法
        })
    }
}
</script>