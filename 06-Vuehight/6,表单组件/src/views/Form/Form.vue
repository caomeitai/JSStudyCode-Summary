<template>
<!-- Form管理数据模型model，校验规则rules  全局校验方法validate -->
    <div>
        <!-- 用来存放formitem -->
        <slot></slot>
    </div>
</template>
<script>
export default {
    provide(){
        return {
            form:this  //this表示将自己本身传出去了
        }
    },
    // 需要接收规则，数据模型
    props:{
        rules:{
            type:Object,
        },
        model:{
            type:Object,
            required:true
        }
    },
    methods:{
        validate(cd){
            // 在form中拿到formitem需要children,拿到父中有的所有儿子formitem
            // filter筛选出合适的数组,这表示存在prop，它们是需要校验的formitem
            // map对筛选出来的需要校验的formitem进行逐一处理，都对他们进行方法校验
            const tasks = this.$children.filter(item=>item.prop).map(item=>item.validate())
            // 真正校验的在formitem中返回Promise

            // 当所有任务校验全部通过
            Promise.all(tasks).then(()=>cd(true)).catch(()=>cd(false))

        }
    }
}
</script>

