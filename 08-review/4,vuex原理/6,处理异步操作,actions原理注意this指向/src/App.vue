<template>
    <div id="app">
        <h1>{{this.$store.state.age}}</h1>
        <button @click="add">add</button>
        <button @click="sub">asyncSub</button>
    </div>
</template>
<script>
export default {
    name:"app",
    mounted(){
    },
    methods:{
        add(){
          this.$store.commit("add",10)
        },
        sub(){
            this.$store.dispatch("asyncSub",10)
        }
    }
        
}
</script>