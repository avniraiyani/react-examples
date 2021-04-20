import React, { Component } from 'react';



class Example8 extends Component {
    constructor() {
        super();
        this.state = {
            value:0,
        };
    }
    valueOperation(operation)
    {

        if(operation=='add')
        {
            this.setState({value:this.state.value+1});
        }
        else
        {
            this.setState({value:this.state.value-1});
        }

    }


      render(){

           return(

                <div className="container">

                    <div className="col-md-12 mb-2 p-2 border-bottom">
                        <p> Increment Decrement Value.</p>

                        <div className="row">
                        <button className="btn btn-secondary" onClick={()=>this.valueOperation('add')}>+</button>
                       <p className="p-2"> {this.state.value} </p>
                        <button className="btn btn-secondary" onClick={()=>this.valueOperation('minus')}>-</button>
                        </div>
                    </div>
                </div>

           );
      }
}




export default Example8;
