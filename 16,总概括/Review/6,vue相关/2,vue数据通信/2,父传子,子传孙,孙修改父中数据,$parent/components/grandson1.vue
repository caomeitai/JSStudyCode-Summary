<template>
    <div>
      <h2 >Grandson中有{{money}}块钱</h2>
      <button @click="onchange">修改钱</button> 
    </div>
</template>

<script>
export default {
    props:{
        money:{
            type:Number
        }
    },
    methods: {
        // 触发的是子中的change方法
        onchange(){
            this.$emit("change",500)
        }
    },

}
</script>