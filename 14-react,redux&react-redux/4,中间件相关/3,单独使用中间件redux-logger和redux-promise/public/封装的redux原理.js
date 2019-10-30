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
function reducer(state = initstate, action) {
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

// 定义创建仓库函数
function createStore(reducer) {
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
        //subscribe订阅函数源码中，存在不再订阅的内容
        return function () {
            // 最后返回一个不再渲染render函数的函数
            listeners = listeners.filter(item => item !== listener)
        }
    }
    // 初始化state，避免拿不到修改后状态
    dispatch({ type: '@@redux/INIT' })
    return {
        getState,
        dispatch,
        subscribe,
    }
}


// 创建仓库
let store = createStore(reducer);

// 渲染页面App
function renderApp() {
    renderTitle(store.getState().title);
    renderContent(store.getState().content);
}

renderApp()
// 得到一个不再渲染renderApp的函数
let unsubscribe = store.subscribe(renderApp)


// 修改状态
setTimeout(() => {
    store.dispatch({ type: UPDATE_TITLE_COLOR, payload: "yellow" })
    unsubscribe();//从这将不再调用render函数去渲染
    store.dispatch({ type: UPDATE_CONTENT_COLOR, payload: "pink" })
    // store.subscribe(renderApp)
}, 3000)




