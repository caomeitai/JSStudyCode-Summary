import * as types from "../action-types"
function increment(payload){
    return {type:types.ADD1,payload}
}
function decrement(payload){
    return {type:types.SUB1,payload}
}

// 实现处理actionCreator中的异步代码，需要对dispatch进行增强操作
// 增强操作的方法有：利用redux中间件
function incrementAfterThree(){
    // 处理异步，返回的是一个函数，函数本质最终还是会调用同步中的相加方法
    return function(dispatch){
        console.log("ssssssssssssssssssss")
        setTimeout(()=>{
            // 本质上仍是dispatch一个同步action
            dispatch(increment(100))
        },3000)
    }
}
export default {increment,decrement,incrementAfterThree}