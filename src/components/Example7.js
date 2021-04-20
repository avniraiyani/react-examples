import React, { Component } from 'react';



class Example7 extends Component {
    constructor() {
        super();
        this.state = {

            list:['coffee','tea'],
            list1:['milk','water']
        };
    }


    addListItem=()=>
    {
        this.setState({
            list:[...this.state.list,this.state.list1[this.state.list1.length-1]],
        })
    }
      render(){

           return(

                <div className="container">

                    <div className="col-md-12 mb-2 p-2 border-bottom">
                        <p> Clone HTML & Append To Body on Click.</p>

                    <ListItems items={this.state.list}></ListItems>


                    <ListItems items={this.state.list1}></ListItems>

                        <button onClick={this.addListItem}>try it</button>
                    </div>
                </div>

           );
      }
}


export class ListItems extends Component
{

    render() {
        let elements = this.props.items.map((element,index) => {
            return (<li key={index}>{element}</li>)
        })
        return <ul>{elements}</ul>
    }
}


export default Example7;
