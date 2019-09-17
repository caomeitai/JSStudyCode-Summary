<template>
    <div>
        <!-- 这是组件中虽只有一个插槽，但多次使用组件渲染 -->
      <!-- <Slot1>匿名插槽</Slot1>
      <Slot1>匿名插槽</Slot1>
      <Slot1>匿名插槽</Slot1>
      <Slot1>匿名插槽</Slot1> -->
      <!-- <Slot1>匿名插槽</Slot1> -->

      <!-- 它会被插到默认插槽中进行渲染 -->
      <!-- <Slot2>匿名插槽</Slot2> -->

      <!-- 具名插槽，当不存在v-slot时，是在默认插槽中的 -->
      <!-- <Slot2 v-slot:content>具名插槽</Slot2> -->
      <!-- <Slot2><template v-slot:content>具名插槽</template></Slot2> -->
      
      <!-- <Slot3> -->
          <!-- 默认插槽，可以将v-slot省略 -->
          <!-- <template v-slot:default>柳演锡</template> -->
          <!-- <template v-slot:tanni>柳演锡</template> -->
      <!-- </Slot3> -->
      <Slot4>
          <!-- 作用域插槽  上下文ctx -->
          <!-- <template v-slot:default="ctx">作用域插槽：{{ctx.foo}}</template> -->
          <template v-slot:tanni="ctx">作用域插槽：{{ctx.foo}}</template>
      </Slot4>
    </div>
</template>
<script>
import Slot1 from "./Slot1"
import Slot2 from "./Slot2"
import Slot3 from "./Slot3"
import Slot4 from "./Slot4"
export default {
    components:{
        Slot1,
        Slot2,
        Slot3,
        Slot4,


    }
}
</script>