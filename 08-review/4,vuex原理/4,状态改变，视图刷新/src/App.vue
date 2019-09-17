<template>
    <div id="app">
        {{this.$store.state.age}}
        <!-- <h1>{{this.$store.getters.myAge}}</h1> -->
        <!-- <h2>{{this.$store.getters.getAge}}</h2> -->
    </div>
</template>
<script>
export default {
    name:"app",
    mounted(){
        setTimeout(()=>{
            console.log(this.$store.state)
            this.$store.state.age = 666
            console.log(this.$store.state)
        })
    },
}
</script>