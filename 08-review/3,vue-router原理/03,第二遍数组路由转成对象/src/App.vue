<template>
    <div>
        <router-link to="/home">首页面</router-link>
        <br/>
        <router-link to="/about">关于</router-link>
       <router-view></router-view>
    </div>
</template>
<script>
export default {
}
</script>