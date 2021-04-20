import React, { Component } from 'react';
import axios from 'axios';
import DisplayUser from './DisplayUser';
import { NavLink } from "react-router-dom";

export default class Main extends Component {

  constructor() {
      super();
      this.state = {
          users: []
      };
      this.deleteCar = this.deleteCar.bind(this);
    }

    componentDidMount = async () => {
        try {

            const response = await axios.get('http://192.168.0.110/Laravel/FMVLaravel/public/api/v1/car/byuser/1')
            this.setState({ users: response.data.data });
            console.log('users', this.state.users);
        } catch (error) {
            console.log(error);
        }
    }
    displayUser(){

        if (this.state.users)
            return <DisplayUser users={this.state.users} methodDelete={this.deleteCar} ></DisplayUser>
    }
    deleteCar = async(carId) => {
        console.log('carId', carId);
        try {
            let url="http://192.168.0.110/Laravel/FMVLaravel/public/api/v1/car/"+carId;
            const response = await axios.delete(url)
            if(response.status==200)
            {

                this.setState({
                    users:this.state.users.filter(item => item.carId !== carId)
                });


            }
            // console.log('delete Response',response);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
      return (
        <div className="container">
            <div className="row" style={{height:"60px"}}>
                <div className="col-md-2">
                <NavLink to="/create" className="btn btn-outline-secondary position-absolute fixed-top m-2 ml-5">Create</NavLink>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Engine</td>
                        <td>Detail</td>
                        </tr>
                    </thead>

                        {this.displayUser()}

                    </table>
                </div>
            </div>
        </div>
      );
    }
  }