// action creator  生成action
// 同步的action creator
export function increment() {
    return {
        type: "INCREMENT"
    }
}
export function decrement() {
    return {
        type: "DECREMENT"
    }
}

// 异步的action creator
export function incrementAsync() {
    return function (dispatch, getState) {
        setTimeout(() => {
            dispatch(increment())
        }, 3000)
    }
}

// 奇数加一action creator
// 将其导出时记得是export  并非默认导出
export  function incrementIfOdd() {
    return function (dispatch, getState) {
        // 从state中解构出来counter值
        const { counter } = getState()
        // 偶数对其取余是0即为false，所以{}中判断为奇数
        if (counter % 2) {
            // 奇数  dispatch最终被映射到组件中
            dispatch(increment())
        }
    }
}
