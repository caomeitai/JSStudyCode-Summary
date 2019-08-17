<template>
  <!-- FormItem显示标签label,执行校验prop和显示校验结果 -->
  <div>
    <!-- label指的是input框前面的字 -->
    <label v-if="label">{{label}}</label>
    <!-- 插槽是用来放input框的 -->
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>
<script>
// 需要在填写信息时验证，要用到第三方模块
import Schema from "async-validator";
export default {
  inject: ["form"],
  data() {
    return {
      errorMessage: ""
    };
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    // 判断input是个什么样的框
    prop: {
      type: String
    }
  },
  mounted(){
    // 每当在input框中输入数据时就需要触发校验事件，写这个就是当注册事件发生时调用校验事件
    // 注册事件的方法有三种
    this.$on("validate",this.validate)
  },
  // 用来校验prop，而prop与form中的rules一致，要想去拿到数据
  methods: {
    validate() {
      //使用provide函数提供数据和inject是一个数组来接收数据，直接写要接收的数据即可
      // this.prop指的是username和password  拿到prop数据
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];

    // 校验方法
      const desc = { [this.prop]: rules };//根据规则来校验
      const schema = new Schema(desc);
      // return的是校验结果的Promise，它是根据规则将数据进行校验啦
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = "";
        }
      });
    }
  }
};
</script>