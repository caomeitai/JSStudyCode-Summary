// 现在关注的是redux  利用原生redux
// import { createStore } from "redux"

// 自己redux
import { createStore } from "./redux"

// 渲染html文件中的内容元素
// 得到元素标签  以便渲染数据到标签
let show = document.getElementById("show")
let add = document.getElementById("add")
let sub = document.getElementById("sub")

// 定义action types
const ADD = "ADD";
const SUB = "SUB";


// 生成reducer，需要有一个初始化状态(老状态)和一个action  返回的是新的状态
function reducer(state = {number:0}, action) {
    switch (action.type) {
        case ADD:
            return { number: state.number + 1 };
        case SUB:
            return { number: state.number - 1 };
        default:
            return state;
    }
}

// 创建仓库
let store = createStore(reducer);

// 将获取到的数据渲染到页面上
function render(){
    show.innerHTML = store.getState().number//将仓库中的数据渲染到show标签中
}

// 最笨拙的渲染页面
render();

// 订阅，在dispatch一个方法之后会自动调用
// subscribe指的是订阅，会执行render函数
// unsubscribe指的是不订阅，不会执行render函数
// 在源码中，订阅与不订阅并非一一对应的，订阅之后再取消订阅是不能够满足不再订阅的条件，得不到直接的取消订阅
// 在自己redux中，不订阅就是订阅取反，在订阅后取消订阅就表示不再订阅啦！

// 订阅
// let subscribe = store.subscribe(render)
// store.subscribe(render)
// 不订阅  
let unsubscribe = store.subscribe(render)

// 通过事件来改变状态，在事件中dispatch一个action
add.addEventListener("click",()=>{
    store.dispatch({type:"ADD"})
    unsubscribe();//不订阅
})

sub.addEventListener("click",()=>{
    store.dispatch({type:"SUB"})
})

