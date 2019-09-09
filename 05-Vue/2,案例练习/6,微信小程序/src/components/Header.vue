<template>
    <div class="header">
        <!-- 左上角的返回按钮，从样式中得到类名 -->
        <div class="header-button is-left" v-show="isLeft">
            <!-- 返回按钮小图标 -->
           <i class="fa fa-chevron-left"></i>
           <!-- 返回时路经是返回到上一级 -->
           <button @click="$router.go(-1)">返回</button>
        </div>
        <h1 class="header-title">{{title}}</h1>
        <div class="header-button is-right" v-show="btn_icon">
            <!-- 右边是一个小图标的按钮，触发了点击事件，获取小图标 -->
           <button @click="$emit('rightClick')"><i :class="'fa fa-'+btn_icon"></i></button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        // 接受到的传递过来的参数，标题，图标，左右的判断类型
        title:String,
        isLeft:{
            type:Boolean,
            default:false,
        },
        isRight:{
            type:Boolean,
            default:false,
        },
        btn_icon:String,

    }
}
</script>



<style scoped>
.header {
  align-items: center;
  background-color: #272626;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 18px;
  height: 50px;
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
.is-right {
  text-align: right;
}
</style>