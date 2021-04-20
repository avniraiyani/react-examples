import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

export default class carDetail extends Component {

    constructor(props) {
      super(props);

      this.state = {
          carDetail: [],
          carId: props.match.params.carId
      };

    }
    componentDidMount = async () => {
        try {
            let url="http://192.168.0.110/Laravel/FMVLaravel/public/api/v1/car/"+this.state.carId;
            const response = await axios.get(url)
            this.setState({ carDetail: response.data.data });
            console.log('carDetail', this.state.carDetail);
        } catch (error) {
            console.log(error);
        }
    }
    render() {
      return (
        <div className="container">
        <div className="row">
        <div className="col-md-2">
        <NavLink to="/user-curd" className="btn btn-outline-secondary ">Back</NavLink>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">

        <p>Name: {this.state.carDetail.name}</p>
        <p>Engine: {this.state.carDetail.engine}</p>

        </div>
        </div>

    </div>


      );
    }
  }
