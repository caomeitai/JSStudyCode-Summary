<template>
  <div class="profile">
    <div class="profile-banner">
      <!-- 存在背景图片，以及登录按钮 -->
      <img class="avatar" src="../../assets/imgs/photo.png" alt />
      <!-- inline 行内样式 -->
      <cube-button primary inline @click="toLogin">登录</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
        this.$router.push("/login")
    }
  }
};
</script>

<style lang="stylus" scoped>
.profile {
  width: 100%;
  &-banner {
    height: 300px;
    display: flex;
    align-items center;//处理交叉轴上的富余空间
    flex-direction: column;
    justify-content: center;
    background: url('../../assets/imgs/user_bg.png');
    background-color: blue;
  }

  .avatar {
    width: 80px;
    height: 80px;
    margin-bottom: 30px;//这是与登录按钮的距离
  }

  .list {
    font-size: 30px;
    line-height: 30px;
  }
}
</style>