<template>
    <div id="app">
        <!-- {{this.$store.state.age}} -->
        {{this.$store.getters.myAge}}
    </div>
</template>
<script>
export default {
    name:"app",
    mounted(){
    },
}
</script>