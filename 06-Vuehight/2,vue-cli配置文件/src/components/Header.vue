<template>
  <div class="header">
      <!-- is-left是为了判断有没有左边按钮 -->
      <div class="header-button is-left"  v-if="isLeft">
          <i class="fa fa-chevron-left"></i>
          <button @click="$router.go(-1)">返回</button>
      </div>
      <div class="header-title">{{title}}</div>
  </div>
</template>
<script>
export default {
    props:{
        title:String,
        isLeft:{
            type:Boolean,
            default:false,//默认按钮不存在
        }
    }
}
</script>


<style scoped>
.header {
  align-items: center;
  background-color: #009eef;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 16px;
  height: 45px;
  line-height: 1;
  padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
}
.header-button button {
  background-color: transparent;
  border: 0;
  box-shadow: none;
  color: inherit;
  display: inline-block;
  padding: 0;
  font-size: inherit;
  outline: none;
}
.header-title {
  flex: 1;
}
.is-left {
  text-align: left;
}
</style>
