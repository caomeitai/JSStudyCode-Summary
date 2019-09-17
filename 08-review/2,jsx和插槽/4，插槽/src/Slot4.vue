<template>
    <div>
        <!-- 作用域插槽，不写任何东西时，插槽里的内容也默认添加在这里 -->
        <!-- <slot :foo="foo"></slot> -->
        <slot :foo="foo" name="tanni"></slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            foo:'bar'
        }
    }
}
</script>
