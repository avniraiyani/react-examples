import React, { Component } from 'react';



class Example1 extends Component {
    constructor() {
        super();
        this.state = {
            word: '',
            showPar:true,
            qty:0,
            price:0,
            celsius:0,
            fahrenheit:0,
            option:'temperature',
            first:0,
            second:0,
            list:['coffee','tea'],
            list1:['milk','water']
        };
    }

    handleChange(name,value) {
        this.setState({
            [name]: value
        });
    }

    handleTemperatureChange(name,value) {
        if(name=="celsius")
        {
            this.setState({
                celsius: value,
                fahrenheit:(value*1.8)+32
            });
        }
        else
        {
            this.setState({
                fahrenheit: value,
                celsius:(value-32)/1.8
            });
        }

    }


    handleFirstChange(value) {
        if(this.state.option=="temperature")
        {
            this.setState({
                first: value,
                second:(value*1.8)+32
            });
        }
       else
       {
        this.setState({
            first: value,
            second:value/60
        });
       }

    }
    handleSecondChange(value) {
        if(this.state.option=="temperature")
        {
            this.setState({
                second: value,
                first:(value-32)/1.8
            });
        }
       else
       {
        this.setState({
            second: value,
            first:value*60
        });
       }
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
                        <p>1. This is basic example in React Js</p>
                        <div className="col-md-2">
                            <input type="text" id="one" className="form-control"  onKeyUp={(e) =>this.handleChange("word",e.target.value)} />
                        </div>

                        <p>{this.state.word}</p>
                    </div>


                    <div className="col-md-12 mb-2 p-2 border-bottom">
                        <p>2. Show / Hide HTML tag on button click.</p>
                        {
                            this.state.showPar
                                ? <ShowParagraph/>
                                : null
                        }
                        <button onClick={()=>this.handleChange("showPar",true)}>Show</button>
                        <button onClick={()=>this.handleChange("showPar",false)}>Hide</button>
                    </div>
                    <div className="col-md-12 mb-2 p-2 border-bottom">
                        <p>3. Show result of Price into Quantity.</p>
                        <div className="row">
                            <div className="col-md-1">Price:</div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" onChange={(e) =>this.handleChange("price",e.target.value)}/>
                            </div>
                            X Qty:<div className="col-md-2">
                                <input type="text" className="form-control" onKeyUp={(e) =>this.handleChange("qty",e.target.value)}/></div>
                        </div>
                        <p>Total : {this.state.price * this.state.qty}</p>
                    </div>
                    <div className="col-md-12 mb-2 p-2 border-bottom">
                        <p>4. Celsius to Fahrenheit converter.</p>
                        <div className="row">
                            <div className="col-md-2">
                                <input type="text" className="form-control" value={this.state.celsius} onChange={(e) =>this.handleTemperatureChange("celsius",e.target.value)}/>
                                Celsius
                            </div>
                            <div className="col-md-1 text-center">=
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" value={this.state.fahrenheit} onChange={(e) =>this.handleTemperatureChange("fahrenite",e.target.value)}/>
                                Fahrenheit
                            </div>
                        </div>


                    </div>
                    <div className="col-md-12 mb-2 p-2 border-bottom">
                        <p>5. Add Dropdown menu and make Time Converter.</p>
                        <div className="row">
                            <div className="col-md-3">

                                <select className="form-control" onChange={(e) => this.handleChange("option",e.target.value) }>
                                    <option value="temperature">Temperature</option>
                                    <option value="time">Time</option>
                                </select>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-2">
                                        <input type="text" className="form-control" value={this.state.first} onChange={(e) =>this.handleFirstChange(e.target.value)}/>
                                        {this.state.option=="temperature" ? "Celsius" : "Second"  }
                                    </div>
                                    <div className="col-md-1 text-center">=
                                    </div>
                                    <div className="col-md-2">
                                        <input type="text" className="form-control" value={this.state.second} onChange={(e) =>this.handleSecondChange(e.target.value)}/>
                                        {   this.state.option=="temperature" ? "Fahrenheit" : "Minute"  }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

           );
      }
}



class ShowParagraph extends React.Component{

        render() {
          return (<div>You can show and hide this Section</div>);
        }


}

export default Example1;