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


// 因为状态暴露到外边不安全，
// 定义createStore方法来创建仓库，将状态存到里面
function createStore() {
    // 仅仅是定义函数
    let state = {
        title: { text: "标题", color: "red" },
        content: { text: "内容", color: "blue" }
    }
    // 定义获取状态的函数
    function getState(){
        return state;
    }
    // 将函数暴露出去
    return {
        getState
    }
}

// 利用createStore创建store仓库
// let store = createStore();
// console.log(store.getState())//{title: {…}, content: {…}}  获取到仓库中的状态

// 创建仓库存储状态,最终将状态渲染出来
let store = createStore();
renderApp(store.getState())//获取到状态，渲染出来




