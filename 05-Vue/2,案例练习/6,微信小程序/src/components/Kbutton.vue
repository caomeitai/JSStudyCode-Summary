<template>
  <!-- 就仅仅是封装一个按钮组件 -->
  <!-- is-disabled是样式中的一个类,为了判断颜色是否会变亮，用disabled来判断是否可以注册 -->
  <button class="y-button" 
  :class="{'is-disabled':disabled}"
  :type="type" 
  :disabled="disabled"
  @click="$emit('click')"
  >
  <!-- slot是一个槽，在使用封装好的组件时可以直接写上什么按钮即可 -->
  <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    // 封装按钮的类型type和传输信息格式是否正确
    type: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
.y-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #fff;
  background-color: #20af0e;
  border-color: #20af0e;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
}
.is-disabled,
.is-disabled:focus,
.is-disabled:hover {
  color: #fff;
  background-color: #75b56c;
  border-color: #75b56c;
  cursor: not-allowed;
  pointer-events: none;
}
</style>


