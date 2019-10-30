// 单独的绑定（最简单）bindActionCreators
// export default function bindActionCreators(actionCreator,dispatch){
// //    bindActionCreators本质上还是dispatch了一个action
//     return function(){
//        dispatch(actionCreator())
//    }
// }

// 添加payload  就是给actionCreator传递了payload
function bindActionCreators(actionCreator,dispatch){
   return function(...args){
       return dispatch(actionCreator(...args))
   }
}


// 弄进对象中，进行一次封装
// function bindActionCreators(actionCreator, dispatch) {
//     return function () {
//         dispatch(actionCreator())
//     }
// }
// 定义一个函数，来判断bind时传递过来的是个对象还是函数
export default function (actionCreator, dispatch) {
    // 如果传递过来的是个函数，那么直接调用绑定函数
    if (typeof actionCreator == "function") {
        return bindActionCreators(actionCreator, dispatch)
    }
    // 如果是个对象的话，循环遍历对象利用key
    // 挨个绑定，绑定过之后放到新对象中，将现对象返回
    const boundActionCreators = {};
    for (let key in actionCreator) {
        boundActionCreators[key] = bindActionCreators(actionCreator[key], dispatch)
    }
    return boundActionCreators;
}

// 调用bindActionCreators函数，要么返回一个actioncreator，
// 要么返回一个对象，对象中有多个绑定好的actioncreator

// 这仅仅是将原生的换成了自己封装的。着重校验了bindActionCreators简化代码的几种方式

// 1，原本最简单的绑定actioncreator和dispatch
// 2，将多个actioncreator放进对象，进行一次封装
// 3，给bindActionCreator传递payload
//  它需要改变的内容有三处：
//   1）action creator生成action的地方 
//   2）需要action（reducer管理员）的地方
//   3）最终简化的dispatch代码调用处  