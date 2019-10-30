// 生成films的reducer
export default function films(state=[],action){
  switch(action.type){
      case "SET_FILMS":
          return action.films;
      default:
          return state;//返回旧值，因为没有操作type    
  }
}












