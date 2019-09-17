<template>
    <div id="app">
       {{this.$store.state}}
    </div>
</template>
<script>
export default {
    name:"app",
    mounted(){
      console.log(this.$store)
    }
        
   
}
</script>