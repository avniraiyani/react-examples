import React, { Component } from 'react';
import axios from 'axios';
import SemanticDisplayUser from './SemanticDisplayUser';
import { NavLink } from "react-router-dom";
import { Table, Button } from 'semantic-ui-react';
export default class SemanticMain extends Component {

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
            return <SemanticDisplayUser users={this.state.users} methodDelete={this.deleteCar} ></SemanticDisplayUser>
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


                <NavLink to="/semantic-create" ><Button icon='add'></Button></NavLink>


                    <Table>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Engine</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                        {this.displayUser()}

                    </Table>


        </div>
      );
    }
  }