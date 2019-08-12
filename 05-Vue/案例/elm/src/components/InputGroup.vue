<template>
 <div class="text_group">
     <!-- 使用类绑定了错误提示 -->
     <!-- 整个input框的封装 -->
     <div class="input_group" :class="{'is-invalid':error}">
         <!-- 定义的是父中用到的，且不太好直接定义的 -->
         <input 
         :type="type"
         :value="value"
         :placeholder="placeholder"
         :name="name"
         @input="$emit('input',$event.target.value)"
         >
         <!-- v-if来判断按钮是否显示,按钮能不能点击，点击事件 -->
         <button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{btnTitle}}</button>
     </div>
     <!-- 输入信息时的错误提醒 -->
     <div v-if="error" class="invalid-feedback">{{error}}</div>
 </div>
</template>
<script>
export default {
   name:"inputgroup",
   props:{
       type:{
           type:String,
           default:"text",
       },
       value:String,
       placeholder:String,
       name:String,
       btnTitle:String,
       disabled:Boolean,
       error:String
   }
}
</script>

<style scoped>
.input_group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input_group input {
  height: 100%;
  width: 60%;
  outline: none;
}
.input_group button {
  border: none;
  outline: none;
  background: #fff;
}
.input_group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  padding-top: 5px;
}
</style>