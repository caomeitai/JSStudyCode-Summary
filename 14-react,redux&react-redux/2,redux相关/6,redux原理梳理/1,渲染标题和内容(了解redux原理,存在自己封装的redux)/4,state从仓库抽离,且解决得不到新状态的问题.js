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


// 生成管理员reducer，将初始化赋给reducer  
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


// 状态不可能是死的状态去定义到仓库中，抽离出去
function createStore(reducer) {
    let state;
    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action)
    }

    // 状态抽离，仓库中state就不存在数据，仅仅只是定义而已
    dispatch({type:'@@redux/INIT'})
    return {
        getState,
        dispatch,
    }
}


// 创建仓库
let store = createStore(reducer);

// 渲染标题和内容(状态)
function renderApp() {
    // 得到仓库中获取到的状态，渲染标题
    renderTitle(store.getState().title);// 实参
    // 渲染内容
    renderContent(store.getState().content);//实参
}


// {title: {…}, content: {…}}  --->dispatch({type:'@@redux/INIT'})这行代码就搞定
// console.log(store.getState())//undefined  将store中数据抽离，那么仓库中也就不再存在数据啦！

// 化简渲染时代码，将renderApp方法化简，这样渲染
// 原本代码抽离问题一解决，就渲染出来啦！
renderApp()  

// 修改状态
setTimeout(() => {
    store.dispatch({ type: UPDATE_TITLE_COLOR, payload:"yellow"})
    renderApp();
}, 3000)




