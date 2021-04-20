import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
export default class CarUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            carId:props.match.params.carId,
            name: '',
            engine: ''
        }
    }
    componentDidMount = async () => {
        try {
            let url="http://192.168.0.110/Laravel/FMVLaravel/public/api/v1/car/"+this.state.carId;
            const response = await axios.get(url)
            this.setState({
                name: response.data.data.name,
                engine: response.data.data.engine
            });
            console.log('carupdate', this.state.name);
        } catch (error) {
            console.log(error);
        }
    }
   handleChange(name,value)
   {
    this.setState({
        [name]: value,
    })
   }
    onSubmit = async(e) =>{
        e.preventDefault();
        console.log("name is "+this.state.name+" and engine is "+this.state.engine);
        // const data = new FormData();
        // data.append('name', this.state.name);
        // data.append('engine',this.state.engine);
        // data.append('userId',1);
        try {
            let url='http://192.168.0.110/Laravel/FMVLaravel/public/api/v1/car/'+this.state.carId;

            // const response = await axios.put(url,data);
            const response = await axios.put(url,{
                userId:1,
                name:this.state.name,
                engine:this.state.engine
            });
            console.log("post-response",response);

            if(response.status==200)
            {
                this.setState({
                    name: '',
                    engine: ''
                })
                this.props.history.push(`/user-curd`);
            }

        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (

            <div style={{marginTop: 50}}>
              <div className="row" style={{height:"60px"}}>
                <div className="col-md-1">
                    <NavLink to="/user-curd" className="btn btn-outline-secondary position-absolute fixed-top m-2 ml-5">Back</NavLink>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                <h3>Add New Car</h3>
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    <div className="form-group col-md-4">
                        <label> Name:  </label>
                        <input type="text" className="form-control" value={this.state.name}  onChange={(e)=>this.handleChange("name",e.target.value)}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Engine: </label>
                        <input type="text" className="form-control" value={this.state.engine}  onChange={(e)=>this.handleChange("engine",e.target.value)}/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" value="Update Car" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
            </div>
            </div>
        )
    }
}