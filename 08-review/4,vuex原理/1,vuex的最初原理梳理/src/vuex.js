let Vue;
class Store{

}
// install函数首参是vue实例
const install = _Vue=>{
    //console.log(_Vue)
   Vue = _Vue
}
export default {
    install,//将函数导出去
    Store
}