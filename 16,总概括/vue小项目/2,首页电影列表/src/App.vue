<template>
  <div id="app">
    <!-- 内容区域 -->
    <div class="container">
      <router-view />
    </div>
    <!-- 底部导航 -->
    <div class="footer">
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @change="changeHandler"></cube-tab-bar>
    </div>
  </div>
</template>
<script>
import Home from "@/views/Home";
export default {
  data() {
    return {
      selectedLabelDefault: "/",
      tabs: [
        {
          label: "首页",
          value: "/",
          icon: "cubeic-home"
        },
        {
          label: "我的电影",
          value: "/movie",
          icon: "cubeic-like"
        },
        {
          label: "个人中心",
          value: "/profile",
          icon: "cubeic-person"
        }
      ]
    };
  },
  methods: {
    changeHandler(label) {
      // console.log(label)
      // 当点击时，label发生变化，而路由也随之变化
      this.$router.push(label);
    }
  },
  components: {
    Home
  }
};
</script>

<style lang="stylus">
html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  overflow: scroll;
}
</style>
