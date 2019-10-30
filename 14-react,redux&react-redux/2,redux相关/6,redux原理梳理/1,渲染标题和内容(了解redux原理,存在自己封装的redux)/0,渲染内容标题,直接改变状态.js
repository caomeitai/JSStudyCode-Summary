// 首先存在两个状态  title content 给响应div渲染对应的内容
let appState = {
    title: { text: "标题", color: "red" },
    content: { text: "内容", color: "blue" }
}


// 渲染标题和内容(状态)到对应div可以通过函数
function renderApp(appState) {
    renderTitle(appState.title);//真实调用函数  实参
    renderContent(appState.content);//真实调用函数  实参
}

// 渲染标题到div 形参
function renderTitle(state) {
    // 拿到对应的元素标签
    let element = document.getElementById("title")
    // 将对应的状态渲染到相关元素上面去--->颜色等样式，即标签间的内容
    element.style.color = state.color;
    element.innerHTML = state.text;
}

// 渲染内容到div  形参
function renderContent(state) {
   let element = document.getElementById("content")
   element.style.color = state.color;
   element.innerHTML = state.text;
}

// 调用上面的渲染函数
renderApp(appState)


// 随意改变状态，是不足
// appState.title.color = "green";//直接改变状态
// renderApp(appState)


// 状态可以被随意置为空，又一不足
appState = null;
// console.log(appState)//此时已改变了状态，置为空啦
renderApp(appState)