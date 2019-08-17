<template>
  <div id="app">
    <div class="navbar navbar-inverse">
      <ul class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand">
            <a href>管理</a>
          </div>
        </div>
        <ul class="navbar-nav nav">
          <!-- 组件在进行路由配置时都有一个name -->
          <li>
            <router-link :to="{name:'home'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{name:'profile'}">个人中心</router-link>
          </li>
          <li>
            <!--
              如果组件配置了子路由的话，使用name配置子路由会发生警告，
              那样配置的默认路径下的内容并出不来，只能用路径  
            -->
            <router-link :to="{path:'/user'}">用户</router-link>
          </li>
          <li>
            <router-link :to="{name:'login'}">登录</router-link>
          </li>
        </ul>
      </ul>
    </div>
    <div class="container">
      <!-- 渲染的是默认组件，只有一个组件坑 -->
      <router-view></router-view>
      <router-view name="name"></router-view>
      <router-view name="version"></router-view>
    </div>
  </div>
</template>

<script>

</script>


