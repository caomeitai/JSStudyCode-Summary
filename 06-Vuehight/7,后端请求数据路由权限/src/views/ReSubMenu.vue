<template>
  <el-submenu :index="data.path">
    <template slot="title">
      <router-link :to="data.path">{{data.name}}</router-link>
    </template>
    <template v-for="child in data.children">
      <!--想要使用递归组件就需要传递数据 -->
      <ReSubMenu :key="child.auth" v-if="child.children" :data="child"></ReSubMenu>
      <el-menu-item :key="child.auth" v-else :index="child.path">{{child.name}}</el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name:"ReSubMenu",
  props: {
    data: {
      type: Object,
      default: () => ({}) //空对象
    }
  }
};
</script>