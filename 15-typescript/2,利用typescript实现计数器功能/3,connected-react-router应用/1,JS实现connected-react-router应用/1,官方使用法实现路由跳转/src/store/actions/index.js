import {INCREMENT,DECREMENT} from "../action-types"
import { push } from "connected-react-router"
export  function increment(){
  return {type:INCREMENT}
}
export  function decrement(){
  return {type:DECREMENT}
}
export  function goto(path){
  return push(path)
}