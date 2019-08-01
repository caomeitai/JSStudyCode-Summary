<template>
    <div class="setting">
        <p><router-link to="/setting/login">登录</router-link></p>
        <p><router-link to="/setting/regin">注册</router-link></p>
        我是一个setting组件
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.setting{
    color:purple;
}
</style>


