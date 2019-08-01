<template>
<div class="home">
    <h1>网站首页</h1>
    <button @click="f">获取电影数据</button>
    <p>{{msg}}</p>
</div>
</template>
<script>
// 引入axios这个服务员
import axios from "axios"
// import {constants} from 'crypto';
export default {
    // 将数据渲染到页面上面去，data是一个函数，必须返回一个对象
    data(){
        return {
            msg:""
        }
    },
    methods:{
        f(){
            // axios.get得到的是promise，它可通过.then或者.catch来获取数据
            axios.get("https://www.easy-mock.com/mock/5d3ee5ad7b799a63049ca632/tanni/getfilms")
            // promise中，使用.then就可以，res代表着成功之后的返回值，err代表着失败之后的返回值。
            .then(res=>{
                // 在这里的res是一个对象，他要想拿到里面的数据就可通过.运算符
                // console.log(res);
                // console.log(res.data);//得到subjects
                // console.log(res.data.subjects) //得到subjects的所有数据
                // console.log(res.data.subjects[0])//得到第一组数据
                console.log(res.data.subjects[0].title)  //得到第一组数据的title
                // 将请求回来的数据赋给data函数中的对象
                this.msg = res.data.subjects[0].title
            })
            .catch(err=>{
              console.log(err);
            })
            
        }
    }
}
</script>

