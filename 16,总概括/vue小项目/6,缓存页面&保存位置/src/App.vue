<template>
  <div id="app">
    <!-- 内容区域 -->
    <div class="container">
      <!-- 给内容加上动画 -->
      <transition :name="move">
        <!-- 避免页面得重新加载，keep-alive -->
        <keep-alive>
          <!-- keepAlive直接在$route中meta加上keepAlive标识 -->
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
      </transition>
      <transition :name="move">
        <keep-alive>
          <router-view v-if="!$route.meta.keepAlive" />
        </keep-alive>
      </transition>
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
      ],
      move: "slide-left"
    };
  },
  methods: {
    changeHandler(label) {
      this.$router.push(label);
    }
  },
  // 监视数据变化，它会自动调用
  watch: {
    $route: {
      handler(to, from) {
        if (to & from) {
          if (to.meta.index > from.meta.index) {
            // 向左滑动
            this.move = "silde-left";
          } else {
            // 向右滑
            this.move = "silde-right";
          }
        }
        this.selectedLabelDefault = to.path;
      }
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

.slide-left-enter-active, .slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.slide-left-enter {
  transform: translate(100%);
}

.slide-left-leave-to {
  transform: translate(-100%);
}

.slide-right-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all 3s ease;
}

.slide-right-enter {
  transform: translate(-100%);
}

.slide-right-leave-to {
  transform: translate(100%);
}
</style>
