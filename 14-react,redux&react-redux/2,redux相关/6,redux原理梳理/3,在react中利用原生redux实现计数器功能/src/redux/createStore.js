// 定义创建仓库函数
export default  function createStore(reducer) {
    let state;
    let listeners = [];
    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    function subscribe(listener) {
        listeners.push(listener)
        return function () {
            // 它返回的取消订阅是直接订阅取反而已
            listeners = listeners.filter(item => item !== listener)
        }
    }
    // 初始化状态
    dispatch({ type: '@@redux/INIT' })
    return {
        getState,
        dispatch,
        subscribe,
    }
}
