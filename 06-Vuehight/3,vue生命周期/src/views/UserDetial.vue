<template>
    <div>
        用户详情
        <!-- this.$route后面接属性，this.$router后面接方法 -->
        <!-- 用问号形式传参是在对应标签上直接加上？id=number  this.$route.query.id拿到的是number的值 -->
        <p>使用问号形式传参的接收形式:{{this.$route.query.id}}号用户详情</p>
        <!-- 用路径形式传参是在对应路由上直接加上/:id,然后在对应标签上写上/number -->
        <p>使用路径形式传参的接收形式:{{this.$route.params.id}}号用户详情</p>
    </div>
</template>
<script>
export default {
    // 使用问号形式传参时，改变路由id，监控路由的变化情况
    // 只有在hash模式下才能使用watch监控到路径的变化

    // 监控路径变化方案一：
    // watch:{
    //     $route(){  //可以通过监控$route实现加载数据
    //         alert(1)
    //     }
    // }

    // 监控路径变化方案二：
    beforeRouteUpdate(to,from,next){
        console.log("beforeRouteUpdate")
        alert(1);
        next();

    }
}
</script>