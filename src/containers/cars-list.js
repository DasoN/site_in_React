import React, {Component} from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import Details from "./details";

import {select} from "../actions";

class CarsList extends Component{
    showList(){
        return this.props.cars.map(el =>
            <li onClick={()=> this.props.select (el)} key={el.id}>{el.model}</li>
        )
    }

    render() {
        return (
            <div>
                <ol>
                    {this.showList()}
                </ol>
                <h2>Details: </h2>
                <Details/>
            </div>

        );
    }
}

function mapStateToProps (state){
    return {
        cars: state.cars
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CarsList);