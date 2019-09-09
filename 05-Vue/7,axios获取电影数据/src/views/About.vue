<template>
<div class="about">
    <h1>关于我们</h1>
    <button @click="f">返回</button>
</div>
</template>
<script>
export default {
    methods:{
        f(){
            this.$router.push("/home")
        }
    }
}
</script>

