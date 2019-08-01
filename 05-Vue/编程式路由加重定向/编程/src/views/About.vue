<template>
    <div class="about">
        <h1>关于我们</h1>
        <button @click="f1">返回</button>
    </div>
</template>
<script>
export default {
    methods:{
        f1(){
            // this.$router.push("/home")
            this.$router.go(-1);
        }
    }
}
</script>

