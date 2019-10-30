import React from "react"

export default class Show extends React.Component {
    render() {
        return (
            <h1>{this.props.counter}</h1>
        )
    }
}