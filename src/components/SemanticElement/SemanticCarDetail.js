import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { List, Button } from 'semantic-ui-react';

export default class SemanticCarDetail extends Component {

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
          <NavLink to="/semantic-user-curd">
          <Button  icon='arrow alternate circle left'  />
          </NavLink>

          <List>
            <List.Item>Name: {this.state.carDetail.name}</List.Item>
            <List.Item>Engine: {this.state.carDetail.engine}</List.Item>
          </List>
        </div>
      );
    }
  }
