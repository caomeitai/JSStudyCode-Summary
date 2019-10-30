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
        //   会进行异步操作
        setTimeout(() => {
            // 调用同步的action
          dispatch(increment())
        },3000)
    }
}
