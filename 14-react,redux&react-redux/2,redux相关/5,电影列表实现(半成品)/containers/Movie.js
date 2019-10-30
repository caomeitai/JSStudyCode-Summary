import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators} from "redux"
import * as actions from "../actions/films"


class Movie extends Component {
    componentWillMount(){
        this.props.getFilms()
    }
    render() {
        return (
            <div>
                <h1>电影列表</h1>
                <ul>
                    
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        films: state.films
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);