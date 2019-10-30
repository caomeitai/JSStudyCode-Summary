function bindActionCreators(actionCreator,dispatch){
   return function(...args){
       return dispatch(actionCreator(...args))
   }
}

export default function (actionCreator, dispatch) {
    if (typeof actionCreator == "function") {
        return bindActionCreators(actionCreator, dispatch)
    }
    const boundActionCreators = {};
    for (let key in actionCreator) {
        boundActionCreators[key] = bindActionCreators(actionCreator[key], dispatch)
    }
    return boundActionCreators;
}
