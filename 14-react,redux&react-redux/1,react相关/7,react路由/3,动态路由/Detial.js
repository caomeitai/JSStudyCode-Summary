import React from "react"


export default class Home extends React.Component{
   render(){
       return(
           <div>
               <h3>这是商品详情界面</h3>
               <p>{"这是第"+ this.props.match.params.id+"号商品的详情界面"}</p>
           </div>
       )
   }
   componentDidMount(){
       console.log(this.props)//{history: {…}, location: {…}, match: {…}, staticContext: undefined}
       console.log(this.props.match)//{path: "/detial/:id", url: "/detial/1", isExact: true, params: {…}}
       console.log(this.props.match.params)//{id: "1"}
       console.log(this.props.match.params.id)//1得到最终id号
   }
}