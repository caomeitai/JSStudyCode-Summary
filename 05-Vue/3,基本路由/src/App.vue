<template>
  <div id="app">
    <p><router-link to="/">首页面</router-link></p>
    <p><router-link to="/find">发现页面</router-link></p>
    <p><router-link to="/setting">设置页面</router-link></p>
   <!-- 我是一个根组件 -->
   <router-view></router-view>
  </div>
</template>


<style>

</style>
