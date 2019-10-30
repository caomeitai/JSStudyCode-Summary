import React from "react"

export default class Sub extends React.Component {
    render() {
        return (
            <button onClick={()=>this.props.decrement()}>-</button>
        )
    }
}