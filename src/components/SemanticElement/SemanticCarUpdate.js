import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { Form, Header, Button } from 'semantic-ui-react';
export default class SemanticCarUpdate extends Component {

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


                <div className="container">
                    <NavLink to="/semantic-user-curd"><Button  icon='arrow alternate circle left'  /></NavLink>



                <Header as='h2'>Add New Car</Header>
                <Form onSubmit={(e)=>this.onSubmit(e)} >
                    <Form.Group widths='equal'>
                    <Form.Input  placeholder='Name' value={this.state.name}  onChange={(e)=>this.handleChange("name",e.target.value)} />
                    <Form.Input placeholder='Engine' value={this.state.engine}  onChange={(e)=>this.handleChange("engine",e.target.value)}/>
                    <Form.Button content='Update' />
                    </Form.Group>
                </Form>

            </div>
        )
    }
}