<template>
    <div id="app">
        <!-- 因为将store挂载到了main.js中，所以在任何组件中都可以使用this.$store -->
       {{this.$store.state.age}}
    </div>
</template>
<script>
export default {
    name:"app",
}
</script>