// 实现Loading效果  处理异步加载

import Loading from "../components/Loading.vue"
const loading = (asyncFunction)=>{
    const component = ()=>({
        component:asyncFunction(),
        Loading
    })
    return {
        render(h){
            return h(component)
        }
    }
}

export default loading