import * as types from "../action-types"
export default {
    state: {
        ajaxToken: []//放了各个组件的所有请求    
    },
    mutations: {
        [types.PUSH_TOKEN](state, payload) {
            state.ajaxToken = [...state.ajaxToken,payload]
        },
        // 取消axios请求
        [types.CLEAR_TOKEN](state) {
            state.ajaxToken.forEach(payload=>payload()) 
            state.ajaxToken = []
        }
    },
    actions: {

    },

}