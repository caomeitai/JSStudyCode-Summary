<template>
  <div>
    <!-- <router-view></router-view> -->
    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
      <template v-for="m in menuList">
        <ReSubMenu :key="m.auth" v-if="m.children" :data="m"></ReSubMenu>
        <el-menu-item :key="m.auth" v-else :index="m.path">{{m.name}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ReSubMenu from "./ReSubMenu";
export default {
  name: "home",
  // 得到数据，将仓库里的数据映射到这里
  computed: {
    ...mapState(["menuList"])
  },
  components: {
    ReSubMenu
  }
};
</script>