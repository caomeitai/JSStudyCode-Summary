<template>
    <div class="home">
        <h1>网站首页</h1>
        <button @click="f">关于我们</button>
        <button @click="f1">返回</button>
    </div>
</template>
<script>
export default {
    methods:{
        f(){
            this.$router.push("/about")
        },
        f1(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>

</style>


