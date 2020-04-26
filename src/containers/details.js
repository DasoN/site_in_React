import React, {Component} from 'react'
import {connect} from 'react-redux'

class Details extends Component{
    render() {
        if (!this.props.car) return <p>Select a car</p>
        return (
            <div>
                <h1>its:</h1>
                <h1>{this.props.car.weight}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        car: state.active
    }
}

export default connect(mapStateToProps)(Details);