<template>
  <div>
    <template v-for="(item,index) in data">
        <li :key="index" v-if="!render">{{item}}</li>
        <List :key="index" v-else :render="render" :item="item"></List>
    </template>
  </div>
</template>
<script>
import List from "./List"
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
      List
  }
};
</script>