<template>
    <div id="app">
        <router-link></router-link>
        <br/>
        <router-link></router-link>
       <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"app",
    mounted(){
        console.log(this.$router)
    }
}
</script>