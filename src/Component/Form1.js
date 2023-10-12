import React, { Component} from "react";
import "./Form.css"
import DataDisplay from "./DisplayData";

class Form1 extends Component{
    state = {
        EmpName : '',
        Department : '',
        Rating : '',
        EmpData : [],
        clicked : true
    }
    TogglePage = () =>{
        this.setState({clicked : !this.state.clicked})
    }
    Changehandle = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    handle = (e) =>{
        e.preventDefault();
        let Obj = {
            name : this.state.EmpName,
            dept : this.state.Department,
            rating : this.state.Rating
            }
        this.state.EmpData.push(Obj);
        this.setState({
            EmpData : this.state.EmpData,
            EmpName : '',
            Department : '',
            Rating : '',
            clicked : false
        });
        console.log(this.state.EmpData);
    }
    
    render(){
        return(
            <>
            {
                this.state.clicked ? 
                <form>
                    <label htmlFor="Nm">Name : </label>
                    <input type="text" name="EmpName"  id="Nm" onChange={this.Changehandle}/><br/>
                    <label htmlFor="Dp">Department : </label>
                    <input type="text" name="Department" id="Dp" onChange={this.Changehandle}/><br/>
                    <label htmlFor="Rt">Rating : </label>
                    <input type="number" name="Rating" id="Rt" onChange={this.Changehandle}/><br/>
                    <button onClick={this.handle}>Submit</button>
                </form>
                : <DataDisplay value={this.state.EmpData} togFuc={this.TogglePage}/>
            }
            </>
        )
    }
}

export default Form1;