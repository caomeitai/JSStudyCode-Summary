// export default{
//     render(h){
//         // 创建一个h1标签，里面写着hello
//         return h("h1",{
//             //将点击事件作为标签的属性 
//             on:{
//                 click(){
//                     alert("world")
//                     console.log("将点击事件作为标签的属性")
//                 },
//                 attrs:{
//                     id:"box"
//                 },
//             }
//         },[h("span",{},"hello")])//在h1标签中套了个span标签
//     }
// }

// JSX格式
// export default{
//     render(h){
//         return <h1 onClick={()=>{alert('hello')}}><span>hello</span></h1>
//     }
// }

export default{
    props:{
        n:{
            type:Number,
        }
    },
    render(h){
      let tag = "h"+this.n  
    //   利用的是默认插槽
      return <tag>{this.$slots.default}</tag>
    }
}