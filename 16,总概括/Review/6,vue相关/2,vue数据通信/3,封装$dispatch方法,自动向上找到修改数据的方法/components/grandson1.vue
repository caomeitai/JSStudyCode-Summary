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
        // 封装的$dispatch方法会自动向上查找change方法，存在change事件就会触发
        onchange(){
            this.$dispatch("change",30000)
        }
    },

}
</script>