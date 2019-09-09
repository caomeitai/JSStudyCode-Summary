<template>
  <div class="tabbar">
    <!-- 因为一点击下面的小图标或者是文字发生跳转，那么就是使用a标签，这里利用类似于a标签的router-link -->
    <!-- 对于v-for一般情况下与key配合使用 -->
    <!-- active-class是个啥玩意？ -->
    <router-link class="tab-item"
    v-for="(item,index) in data"
    :key="index"
    :to="item.path"
    active-class="is-selected">
    <!-- 在a标签里面存放了图标和文字 -->
    <div class="tab-item-icon">
        <!-- 直接在网站上找到相应图标，固定格式fa fa- -->
        <i :class="'fa fa-'+item.icon"></i>
    </div>
    <div class="tab-item-label">
       {{item.title}}
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
};
</script>

<style scoped>
.tabbar {
  height: 55px;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 0
  );
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #fafafa;
  display: flex;
  text-align: center;
}
.tab-item {
  display: block;
  padding: 7px 0;
  flex: 1;
}
.tab-item-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 5px;
}
.tab-item-icon i {
  font-size: 1.3rem;
}
.tab-item-label {
  color: inherit;
  font-size: 12px;
  line-height: 1;
}
a {
  text-decoration: none;
  color: #888;
}
.is-selected {
  color: #20af0e;
}
</style>