<template>
  <div>
    <!-- {{$attrs}} -->
    <h1>有{{$attrs.counter}}个儿子</h1>
    <h2>每个人有{{$attrs.money}}块钱</h2>
    <hr>
    <!-- 在组件间不存在this,所以v-bind绑定的是$attrs而非this.$attrs -->
    <Grandson1 v-bind="$attrs"></Grandson1>
  </div>
</template>
<script>
import Grandson1 from "./grandson1"
export default {
  // 除了props来接收数据外，还可以使用$attrs，最终传递过来的数据就作为真正的属性啦！
  // 这样就把传递过来的属性不作为标签属性而是真正的数据
  inheritAttrs:false,
  // 在传递属性时，如果是利用$attrs来接受的话，就不能再使用props啦！
  // props: {
  //   money: {
  //     type: Number
  //   },
  //   counter:{
  //     type:Number
  //   }
  // },
  components:{
    Grandson1
  },
  methods: {
  },
};
</script>