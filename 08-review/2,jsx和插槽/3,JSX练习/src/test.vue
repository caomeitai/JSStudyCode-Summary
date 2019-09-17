<template>
  <div>
    <template v-for="(item,index) in data">
        <li :key="index">{{item}}</li>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array
    }
  }
};
</script>