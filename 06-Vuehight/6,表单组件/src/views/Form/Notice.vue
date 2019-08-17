<template>
  <!-- 验证通过时的弹出框,通过它来判断是否会显示 -->
  <div class="box" v-if="isShow">
    <h3>{{title}}</h3>
    <p class="box-content">{{message}}</p>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      isShow: false
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    // 弹出框有一个显示时间
    duration: {
      type: Number,
      default: 2000
    }
  },
  // 来编写方法来控制弹出框的隐藏和显示，谁使用，谁调用
  methods: {
    show() {
      // 控制弹出框的显示与否
      this.isShow = true;
      //  控制弹出框的显示时间，使用定时器
      // setTimeout(()=>{},time)//定时器执行一个函数，后面跟着事件
      setTimeout(this.hide, this.duration);
    },
    hide() {
      // 在控制隐藏的同时，将弹出框隐藏掉
      this.isShow = false;
      this.remove();
    }
  }
};
</script>

<style scoped>
.box {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
}
.box-content {
  width: 200px;
  margin: 10px auto;
  font-size: 14px;
  border: blue 3px solid;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
}
</style>