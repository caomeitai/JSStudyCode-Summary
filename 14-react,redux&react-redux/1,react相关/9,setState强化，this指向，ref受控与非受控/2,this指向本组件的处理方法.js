import React, { Component } from 'react'
import ReactDOM from "react-dom"

class Counter extends Component {
    state = { number: 0 }
    // 方案一：函数是普通函数，函数调用需要手动绑定this
    // handleSubmit(event) {
    //     event.preventDefault();//阻止提交刷新的默认事件
    //     console.log(this)// this指向该组件：Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
    // }

    // 方案二：函数是箭头函数，函数调用只需直接()调用即可
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this)//this也指向该组件：Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
    // }

    // 方案三：函数仍是普通函数，利用了匿名函数调用，就不必再手动绑定this啦！
    handleSubmit(event) {
        event.preventDefault();//阻止提交刷新的默认事件
        console.log(this)// this指向该组件：Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
    }


    render() {
        return (
            // 方案一：
            // <form action="" onSubmit={this.handleSubmit.bind(this)}>
            // 方案二：
            // <form action="" onSubmit={this.handleSubmit}>
            // 方案三：看匿名函数最终有无返回值，如果存在就将{}省略，否则就无所谓啦！
            // <form action="" onSubmit={(event)=>{this.handleSubmit(event)}}>
            // function(event){this.handleSubmit(event)}  {}是监听器，监听器的第一个参数是事件对象
            <form action="" onSubmit={(event)=>this.handleSubmit(event)}>
                <p>用户名：<input type="text" /></p>
                <p>密码：<input type="text" /></p>
                <input type="submit" />
            </form>
        )
    }
}
ReactDOM.render(<Counter></Counter>, window.app)


//1，this只会出现在类组件中，函数组件中不存在this;所以react推荐使用函数组件
//2，想要this的指向代表当前组件，处理办法：
//   1）使用箭头函数(里面不存在this，会向外找)，如果是普通函数，那么它里面的this就是undefined
//   2）在调用普通函数时，手动绑定this  onSubmit = {this.handleSubmit.bind(this)}
//   3）使用匿名函数 onclick=()=>{this.f1()}，感觉就是箭头函数的感觉










