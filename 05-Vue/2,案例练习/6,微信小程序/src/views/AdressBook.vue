<template>
  <div>
    <!-- 封装组件的使用是在组件上面绑定属性 -->
    <Header title="通讯录" btn_icon="user-plus"></Header>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  }
};
</script>
