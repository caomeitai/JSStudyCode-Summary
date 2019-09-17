<template>
    <div id="app">
        <router-link>首页</router-link>
        <br/>
        <router-link>关于</router-link>
       <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"app",
    mounted(){
        // console.log(this.$router)
        console.log(this.$route)
    }
}
</script>