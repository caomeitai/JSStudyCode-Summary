<template>
  <div>
    <h1>Parent有{{money}}块钱</h1>
    <hr />
    <Son1 :money="money" @change="change"></Son1>
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
      change(newValue){
         this.money = newValue  
      }
  },
};
</script>