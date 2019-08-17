<template>
    <div>
        <!-- 要添加用户信息，需要双向数据绑定 -->
        <input type="text" v-model="username">
        <button @click="toList">去用户列表</button>
    </div>
</template>
<script>
export default {
    name:"useradd",
    data(){
        return{
            username:""
        }
    },
    // 在进入用户列表组件时会自动触发钩子函数
    beforeRouteLeave(to,from,next){
        console.log("beforeRouteLeave")
        if(this.username){//输入内容啦
           let confirm = window.confirm("你确定要去用户列表组件吗？")
        //    alert(confirm)//点击确定，confirm是true
        if(confirm){//输入内容啦，且确定去其他组件
            next()
        }
    }else{
        next()

    }

    },
    methods:{
        toList(){
            this.$router.push("/user/userlist")
        }
    }
}
</script>