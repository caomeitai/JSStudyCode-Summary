<template>
    <div>
        <router-link to="/home">Home页面</router-link>
        <br/>
        <router-link to="/about">关于我们</router-link>
       <router-view></router-view>
    </div>
</template>
<script>
export default {
    created(){}
    
}
</script>