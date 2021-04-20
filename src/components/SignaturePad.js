import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SignaturePad from 'react-signature-canvas';
import './style.css';
import SignaturePad1 from 'react-signature-pad';

export default class Signature extends Component {
  state = {trimmedDataURL: null}
  sigPad = {}
  clear = () => {
    this.sigPad.clear()
  }
  trim = () => {
    this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png')})
  }
  // state = {srcUrl:null}
  // save = () => {
  //   var signature = this.refs.mySignature;
  //   signature.toDataURL("image/jpeg");
  //   const base64String = signature.toDataURL();
  //   this.setState({srcUrl:base64String});
  // }
  render () {
    let {trimmedDataURL} = this.state
    return <div className="container" >
       <div className="sigContainer">
        <SignaturePad canvasProps={{className:"sigPad"}}
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div>
        <button className="buttons" onClick={this.clear}>
          Clear
        </button>
        <button className="buttons" onClick={this.trim}>
          Trim
        </button>
      </div>
      {trimmedDataURL
        ? <img className="sigImage"
          src={trimmedDataURL} />
        : null}

     {/*<div className="sigContainer">
      <SignaturePad1 clearButton="true" ref="mySignature"/>
     <button className="buttons" onClick={this.save}>
          Save
        </button>
        {this.state.srcUrl
        ? <img className="sigImage"
          src={this.state.srcUrl} />
        : null} */}
     {/* </div> */}
     </div>
  }
}