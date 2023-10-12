import React, { Component } from "react";
import './Form.css'

class DataDisplay extends Component{
    constructor(props){
        super(props)
        console.log(this.props.value)
    }
    render(){
        return(
            <>
            <div className="container">
            {
                this.props.value.map((item,index)=>{
                    return (
                        <div key={index} className="data">
                        <span>Name : {item.name} || </span>
                        <span>Department : {item.dept} || </span>
                        <span>Rating : {item.rating}</span>
                        </div>
                    )
                })
            }
            </div>
            <button onClick={this.props.togFuc}>Go Back</button>
            </>
        )
    }
}

export default DataDisplay