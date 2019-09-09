<template>
  <!-- 在components中定义组件，需要注册组件和使用组件 -->
  <header class="head-nav">
    <el-row>
      <el-col :span="6" class="logo-container">
        <img src="../assets/logo.png" class="logo" alt />
        <span class="title">资金后台管理系统</span>
      </el-col>
      <el-col :span="6" class="user">
        <div class="userinfo">
          <!-- 绑定图片，当登陆之后会出现一个默认图像 -->
          <img :src="user.avatar" class="avatar" alt />
          <div class="welcome">
            <p class="name comename">欢迎</p>
            <p class="name avatarname">{{user.name}}</p>
          </div>
          <span class="username">
            <!-- 点击事件放在总的这里，推荐使用这种方法-->
            <el-dropdown trigger="click" @command="setDialogInfo">
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </div>
      </el-col>
    </el-row>
  </header>
</template>
<script>
export default {
  name: "head-nav",
  computed: {
    user() {
      // 得到登录用户的相关信息，筛选出来
      return this.$store.getters.user;
    }
  },
  methods: {
    setDialogInfo(cmditem) {
        //通过switch来判断是退出还是个人信息项
      switch (cmditem) {
        case "info":
          this.showInfoList();
          break;
        case "logout":
          this.logout();
          break;
      }
    },
    showInfoList(){
        // 显示个人信息
        // console.log("个人信息")
        this.$router.push("/infoshow") //点击下拉菜单之后，就转到个人信息详情页面
    },
    logout(){
        console.log("退出登录")
        // 当退出登录之后，需要清除当地仓库中的token和vuex中的token
        // 当地仓库清除
        localStorage.removeItem("eleToken");
        // vuex清除,使用了异步处理actions中的方法clearCurrentState
        this.$store.dispatch("clearCurrentState");
        // 并且发生页面跳转
        this.$router.push("/login");

    }
  }
};
</script>


<style scoped>
.head-nav {
  width: 100%;
  height: 60px;
  min-width: 600px;
  padding: 5px;
  background: #324057;
  color: #fff;
  border-bottom: 1px solid #1f2d3d;
}
.logo-container {
  line-height: 60px;
  min-width: 400px;
}
.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}
.title {
  vertical-align: middle;
  font-size: 22px;
  font-family: "Microsoft YaHei";
  letter-spacing: 3px;
}
.user {
  line-height: 60px;
  text-align: right;
  float: right;
  padding-right: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.welcome {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
}
.name {
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}
.comename {
  font-size: 12px;
}
.avatarname {
  color: #409eff;
  font-weight: bolder;
}
.username {
  cursor: pointer;
  margin-right: 5px;
}
.el-dropdown {
  color: #fff;
}
</style>
