import React, { Component } from 'react';



class Example6 extends Component {
    constructor() {
        super();
        this.state = {
            red:0,
            blue:0,
            green:0,
        };

    }
    handleChange(name,value) {
        this.setState({
            [name]: value
        });
    }
      render(){

           return(

                <div className="container">
                    <div className="col-md-12 mb-2 p-2 border-bottom">
                        <p>RGB color Chooser</p>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                   <div className="col-md-1 border" style={{backgroundColor: "rgb("+this.state.red+", "+this.state.green+", "+this.state.blue+")",height:"50px"}}>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        R:{this.state.red}
                                    </div>
                                    <div className="col-md-8">
                                        <input type="range" name="points" min="0" value={this.state.red} max="255" onChange={(e) =>this.handleChange("red",e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        G:{this.state.green}
                                    </div>
                                    <div className="col-md-8">
                                        <input type="range" name="points" min="0" max="255" value={this.state.green} onChange={(e) =>this.handleChange("green",e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        B:{this.state.blue}
                                    </div>
                                    <div className="col-md-8">
                                        <input type="range" name="points" min="0" max="255" value={this.state.blue} onChange={(e) =>this.handleChange("blue",e.target.value)}/>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


           );
      }
}




export default Example6;

