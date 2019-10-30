// 在调用处参数就是对象，里面放着reducers
// 对于reducer来说，有两个参数：state,action
export default function combineReducers(reducers) {
    // 在这里本质将多个reducer合并成一个
    return function (state = {}, action) {
        let newState = {};
        //reducers是个对象，存放着多个reducer，对其进行遍历
        for (let key in reducers) {
            // 先遍历出来reducer，然后给其传递相关参数state，action
            // 将遍历出来的数据扔到新定义的对象中(新状态reducers) 
            newState[key] = reducers[key](state[key], action)
        }
        return newState;
    }
}