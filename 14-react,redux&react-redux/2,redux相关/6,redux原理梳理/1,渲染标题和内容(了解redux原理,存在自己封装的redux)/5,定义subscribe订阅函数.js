// 定义好dispatch的action类型type
const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR";
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT";
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR";
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT";




// 渲染标题到div 形参
function renderTitle(state) {
    let element = document.getElementById("title")
    element.style.color = state.color;
    element.innerHTML = state.text;
}


// 渲染内容到div  形参
function renderContent(state) {
    let element = document.getElementById("content")
    element.style.color = state.color;
    element.innerHTML = state.text;
}

// 状态抽离，初始化的状态
let initstate = {
    title: { text: "标题", color: "red" },
    content: { text: "内容", color: "blue" }
}


// 生成管理员reducer
function reducer(state=initstate, action) {
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            return { ...state, title: { ...state.title, color: action.payload } };
        case UPDATE_TITLE_TEXT:
            return { ...state, title: { ...state.title, text: action.payload } };
        case UPDATE_CONTENT_COLOR:
            return { ...state, content: { ...state.content, color: action.payload } };
        case UPDATE_CONTENT_TEXT:
            return { ...state, content: { ...state.content, text: action.payload } };
        default:
            return state;
    }
}


function createStore(reducer) {
    let state;
    let listeners = [];
    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action)
        // 调用的listener
        // listeners.forEach(function(listener)=>{
        //     listener()//这里结合实际就是调用renderApp方法1
        // })
        listeners.forEach(listener=>listener())
    }

    // subscribe 订阅  当数据状态改变时会自动调用，就不必再每次都去渲染啦！
    // 相当于监听状态改变  它的本质就是重新渲染页面，listener就是指renderApp函数
    function subscribe(listener){
       listeners.push(listener)
    }
    dispatch({type:'@@redux/INIT'})
    return {
        getState,
        dispatch,
        subscribe,
    }
}


// 创建仓库
let store = createStore(reducer);
function renderApp() {
    renderTitle(store.getState().title);
    renderContent(store.getState().content);
}

renderApp()//这个是渲染的初始化状态页面  
// 订阅，就会自动调用renderApp方法，重新渲染状态改变之后的页面
store.subscribe(renderApp)

// 修改状态
setTimeout(() => {
    // 当dispatch一个action时，会触发subscribe方法
    store.dispatch({ type: UPDATE_TITLE_COLOR, payload:"yellow"})
    renderApp();
}, 3000)

setTimeout(() => {
    // 当dispatch一个action时，会触发subscribe方法
    store.dispatch({ type: UPDATE_CONTENT_COLOR, payload:"pink"})
    renderApp();
}, 6000)




