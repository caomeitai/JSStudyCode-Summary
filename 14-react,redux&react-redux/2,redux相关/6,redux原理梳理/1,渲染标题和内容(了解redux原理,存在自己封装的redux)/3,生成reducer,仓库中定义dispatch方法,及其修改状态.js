// 定义好dispatch的action类型type
const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR";
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT";
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR";
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT";


// 渲染标题和内容(状态)
function renderApp(appState) {
    renderTitle(appState.title);// 实参
    renderContent(appState.content);//实参
}

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

// 生成管理员reducer  
// 根据老状态state和action来得到新的state
function reducer(state, action) {
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            return { ...state, title: { ...state.title, color: action.palyload } };
        case UPDATE_TITLE_TEXT:
            return { ...state, title: { ...state.title, text: action.palyload } };
        case UPDATE_CONTENT_COLOR:
            return { ...state, content: { ...state.content, color: action.palyload } };
        case UPDATE_CONTENT_TEXT:
            return { ...state, content: { ...state.content, text: action.palyload } };
        default:
            return state;
    }
}

// 定义创建仓库的函数，创建仓库时要求配reducer管理员
function createStore(reducer) {
    let state = {
        title: { text: "标题", color: "red" },
        content: { text: "内容", color: "blue" }
    }
    // 获取状态方法
    function getState() {
        return state;
    }

    // 派发action方法  修改状态 它最终得到的是修改后的新的状态
    function dispatch(action) {
        // console.log(action)//{type: "UPDATE_TITLE_COLOR", payload: "yellow"}
        // 新的状态是通过reducer得到的
        // console.log(reducer(state, action))
        state = reducer(state, action)//{text: "标题", color: "yellow"} 修改过的状态
        // console.log(state)// {title: {…}, content: {…}}
        console.log(state)
    }

    // 将仓库中的函数都暴露出去
    return {
        getState,
        dispatch,
    }
}


// 创建仓库
let store = createStore(reducer);
// 渲染获取到的仓库中的数据
renderApp(store.getState())

// 修改状态
setTimeout(() => {
    // dispatch一个action，根据reducer中的action类型来得到新的状态
    store.dispatch({ type: UPDATE_TITLE_COLOR, payload: "skyblue" })
    // 渲染修改后的状态
    renderApp(store.getState())
}, 3000)




