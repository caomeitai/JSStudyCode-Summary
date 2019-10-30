// 同步action creator
export function setFilms(films) {
    return {
        type: 'SET_FILMS',
        films//传递的参数
    }
}

// 请求接口，异步action creator
export function getFilms() {
    return function (dispatch, getState) {
        let url = "http://www.baido.com";
        // 请求接口成功的话，那么就返回res  
        // 此时还未调用同步action
        fetch(url).then(res => {
            console.log(res)
        })
    }
}