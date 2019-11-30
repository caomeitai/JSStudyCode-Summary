<template>
  <div>
    <h1>Parent有{{money}}块钱</h1>
    <hr />

    <!--1，最原始的属性与方法传递 -->
    <!-- <Son1 :money="money" @change="change"></Son1>  -->

    <!-- 2，仅仅改变事件传递名 -->
    <!-- <Son1 :money="money" @update:money="change"></Son1> -->

    <!-- 3，将事件直接写到组件上 -->
    <!-- <Son1 :money="money" @update:money="newValue=>money=newValue"></Son1> -->
    
    <!-- 4，sync=属性传递+事件传递  属性.sync="属性" 它默认组件内部需要触发update:money事件 -->
    <!-- :money.sync="money"上面方法3中，属性加方法传递的语法糖 -->
    <!-- <Son1 :money.sync="money"></Son1> -->

    <!-- 5，value+input事件 -->
    <!-- <Son1 :value="money" @input="newValue=>money=newValue"></Son1> -->
    
    <!-- 6，v-model是value+input事件语法糖，当使用v-model时，相当于子组件存在value属性和input方法 -->
    <Son1 v-model="money"></Son1>

     <!-- 如果给子组件传递一个属性时，可以利用v-model；但是如果是多个属性传递的话使用.sync -->

  </div>
</template>
<script>
import Son1 from "./son1";
export default {
  data() {
    return {
      money: 100
    };
  },
  components: {
    Son1
  },
  methods: {
    // change(newValue) {
    //   this.money = newValue;
    // }
  }
};
</script>