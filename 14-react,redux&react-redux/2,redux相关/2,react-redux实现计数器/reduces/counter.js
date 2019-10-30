// 生成reducer
export default function counter(state=0,action){
   switch(action.type){
       case "INCREMENT":
           return state+1;
        case "DECREMENT":  
           return state-1;
        default:
            return state;//表示不存在操作状态action类型的话，返回旧值   
   }
}