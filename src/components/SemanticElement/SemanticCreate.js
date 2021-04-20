import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { Form, Header, Button } from 'semantic-ui-react';
export default class SemanticCreate extends Component {

    constructor() {
        super();
        // this.onChangeHostName = this.onChangeHostName.bind(this);
        // this.onChangePort = this.onChangePort.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            engine: ''
        }
    }
   handleChange(name,value)
   {
    this.setState({
        [name]: value,
    })
   }
    onSubmit = async() =>{

        console.log("name is "+this.state.name+" and engine is "+this.state.engine);
        const data = new FormData();
        data.append('name', this.state.name);
        data.append('engine',this.state.engine);
        data.append('userId',1);
        console.log('data', data);
        try {

            const response = await axios.post('http://192.168.0.110/Laravel/FMVLaravel/public/api/v1/car',data);
            console.log("post-response",response);

            if(response.status==200)
            {
                this.setState({
                    name: '',
                    engine: ''
                })
                this.props.history.push(`/semantic-user-curd`);
            }

        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (

            <div className="container">

                  <NavLink to="/semantic-user-curd"><Button  icon='arrow alternate circle left'  /></NavLink>


                <Header as='h2'>Add New Car</Header>
                <Form onSubmit={(e)=>this.onSubmit(e)} >
                    <Form.Group widths='equal'>
                    <Form.Input  placeholder='Name' value={this.state.name}  onChange={(e)=>this.handleChange("name",e.target.value)} />
                    <Form.Input placeholder='Engine' value={this.state.engine}  onChange={(e)=>this.handleChange("engine",e.target.value)}/>
                    <Form.Button content='Submit' />
                    </Form.Group>
                </Form>

          </div>
        )
    }
}