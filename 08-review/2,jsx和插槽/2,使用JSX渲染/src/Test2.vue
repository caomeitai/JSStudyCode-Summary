<template>
    <div>
        <template v-for="(item,index) in data">
            <!-- 当不存在render时，即不存在span标签形式的渲染，使用li标签 -->
            <li v-if="!render" :key="index">{{item}}</li>
            <Listitem v-else :key="index" :render="render" :item="item"></Listitem>
        </template>
    </div>
</template>
<script>
import Listitem from "./Listitem"
export default {
  props: {
    data: {
      type: Array
    },
    render:{
        type:Function
    }
  },
  components:{
      Listitem,
  }
};
</script>
