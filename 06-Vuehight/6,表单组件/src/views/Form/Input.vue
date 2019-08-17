<template>
<!-- Input绑定数据模型v-model,通过FormItem执行校验-->
    <div>
        <!-- 在组件上的绑定是属性会传到组件中进行接收 -->
        <!-- 将所有的父组件上绑定的信息都传递到组件上，将所有信息通过$attrs来绑定接收所有传过来的数据 -->
        <input :value="value" @input="onInput" type="text"  v-bind="$attrs">
    </div>
</template>
<script>
export default {
    props:{
        value:{
            type:String,
            default:""
        }
    },
    methods:{
        // 监听器input事件第一个参数是事件对象
        onInput(e){
            // 子中触发父中事件为input事件，当事件发生时，事件对象中有很多事件发生时的信息
            // console.log(e)
            // console.log(e.target.value)//监控到数据信息
            this.$emit("input",e.target.value)//通过监听事件将数据传递给input事件

            // 每当数据改变时就触发在FormItem中的validate事件
            this.$parent.$emit("validate")
        }
    }
}
</script>