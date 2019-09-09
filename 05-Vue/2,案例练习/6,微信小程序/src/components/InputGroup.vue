<template>
    <!-- 接收完数据就可以直接使用啦，为使用方便在封装时会写上一个类名 -->
    <div class="input_group">
        <!-- label就是前面的昵称，邮箱什么的，它是依赖于name的 -->
        <label :for="name">{{label}}</label>
        <input 
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :name="name"
        @input="$emit('input',$event.target.value)"
        >
        <!-- input框添加点击事件引发一个input事件，通过$event来获取事件内容 -->
    </div>
</template>
<script>
export default {
    // 在封装的组件中接受一堆数据
     props:{
        //  对于输入框会有一个类型type
         type:{
             type:String,
            // 类型默认情况下是text，文本形式
             default:"text"
         },
         value:String,//数值之类的
         placeholder:String,//在每一行中的默认提示信息
         name:String,
         label:String
     }
}
</script>

<style scoped>
.input_group {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px 0;
  line-height: 60px;
}
.input_group label {
  display: inline-block;
  width: 30%;
  font-size: 16px;
}
.input_group input {
  display: inline-block;
  width: 65%;
  font-size: 16px;
  border: none;
  outline: none;
}
</style>

