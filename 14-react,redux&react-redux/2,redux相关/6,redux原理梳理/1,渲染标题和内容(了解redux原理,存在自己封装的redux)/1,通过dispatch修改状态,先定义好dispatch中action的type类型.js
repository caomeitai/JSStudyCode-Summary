//  title content 给相应div渲染对应的内容
let appState = {
    title: { text: "标题", color: "red" },
    content: { text: "内容", color: "blue" }
}


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

// 状态不能够被随意改变，要想改变状态，需要派发一个动作action，
// 可以先把派发dispatch的动作action定义出来
const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR";
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT";
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR";
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT";

// dispatch派发是一个函数，里面放着action，同时也可携带参数payload
// dispatch根据action的type来改变状态  先将dispatch中要派发的action type定义好
// 完成根据指定的action type来派发一个动作，就可以修改状态
// action是个对象，且里面一定有一个type。
function dispatch(action) {
    switch (action.type) {
        case "UPDATE_TITLE_COLOR":
            appState.title.color = action.payload;
            break;
        case "UPDATE_TITLE_TEXT":
            appState.title.text = action.payload;
            break;
        case "UPDATE_CONTENT_COLOR":
            appState.content.color = action.payload;
            break;
        case "UPDATE_CONTENT_TEXT":
            appState.content.text = action.payload;
            break;
        default:
            break;
    }
}

// 调用上面的渲染函数
renderApp(appState)



appState.content.text = "";
// renderApp(appState)//这样仍可直接在外面去修改状态，不安全
setTimeout(()=>{
    // dispatch调用，需要传递action 传递的action中有着type和payload（非必传）
    dispatch({type:UPDATE_TITLE_COLOR, payload:"skyblue"})
    dispatch({type:UPDATE_TITLE_TEXT, payload:"新标题"})
    dispatch({type:UPDATE_CONTENT_COLOR,payload:"yellow"})
    dispatch({type:UPDATE_CONTENT_TEXT,payload:"新内容"})
    renderApp(appState)//每次改变状态都要重新渲染
},3000)



