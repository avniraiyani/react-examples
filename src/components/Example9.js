import React, { Component } from 'react';



class Example9 extends Component {
    constructor() {
        super();
        this.state = {
            values:[0],
        };
        this.valueOperation = this.valueOperation.bind(this);
    }
    valueOperation(operation,index)
    {
        const newArray = Array.from(this.state.values);


        if(operation=='add')
        {
            newArray[index] = this.state.values[index]+1;
        }
        else
        {
            newArray[index] = this.state.values[index]-1;
        }
        this.setState({values: newArray});
    }
    cloneElement()
    {
        this.setState({
            values:[...this.state.values,0],
        })
    }


      render(){

           return(

                <div className="container">

                    <div className="col-md-12 mb-2 p-2 border-bottom">
                        <p> Clone Increment Decrement Value.</p>
                        <div className="row">
                        <button className="btn btn-primary" onClick={()=>this.cloneElement()}>Clone</button>
                        </div>
                        <CloneItems values={this.state.values} method={this.valueOperation}></CloneItems>
                    </div>
                </div>

           );
      }
}




export default Example9;
export class CloneItems extends Component
{

    render() {

        let elements = this.props.values.map((value,index) => {
            return (<div className="row" key={index}>
            <button className="btn btn-secondary" onClick={() =>this.props.method('add',index)}>+</button>
           <p className="p-2"> {value} </p>
            <button className="btn btn-secondary" onClick={() =>this.props.method('minus',index)}>-</button>
            </div>)
        })
        return <ul>{elements}</ul>
    }
}

