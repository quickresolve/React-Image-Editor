import React from 'react';

export default class Sliders extends React.Component {
  handleScale(e){
    const scale = e.target.value;
    this.props.changeScale(scale);
  }
  handleRotate(e){
    const rotate = e.target.value;
    this.props.changeRotation(rotate);
  }
  render(){
    return(
      <div id="sliders">
        <p>Resize Image</p>
        <input type='range' name='scale' min='1' max='2' step='0.01' value='1' onChange={this.handleScale.bind(this)}/>
        <p>Rotate Image</p>
        <input type='range' name='rotate' min='1' max='2' step='0.01' value='1' onChange={this.handleRotate.bind(this)}/>
      </div>
    );
  }
}
