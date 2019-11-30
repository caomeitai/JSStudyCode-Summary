import * as types from "../action-types"
export default {
    state: {
        ajaxToken: []//放了各个组件的所有请求    
    },
    mutations: {
        // 这里的payload指的是在ajax中封装的取消函数c
        [types.PUSH_TOKEN](state, payload) {
            // 将得到的参数,全部存到数组中，这样等效于push
            state.ajaxToken = [...state.ajaxToken,payload]
            // console.log(state.ajaxToken)//[0:f cancel(){}]  这其中已存在三次的cancel函数
            
            // state.ajaxToken.push(payload)
            // console.log(state.ajaxToken)
        },
        // 取消axios请求
        [types.CLEAR_TOKEN](state) {
            // 拿到存放到数组中的每个请求，然后利用cancel函数取消
            state.ajaxToken.forEach(payload=>payload()) 
            // 在每次取消函数调用之后，清除ajaxToken，将其置为空
            state.ajaxToken = []
        }
    },
    actions: {

    },

}