// 实现Loading效果  处理异步加载

// 它是高阶组件，本质就是函数；在调用时，传递的也是箭头函数
// 而箭头函数返回的是组件
import Loading from "../components/Loading.vue"
const loading = (asyncFunction)=>{
    // 触发传递过来的函数 得到的是个带有包装了loading的组件，将其返回
    const component = ()=>({
        component:asyncFunction(),//得到组件
        Loading
    })
    return {
        // 通过render渲染一个异步组件
        render(h){
            return h(component)//将封装好的组件返回
        }
    }
}

export default loading