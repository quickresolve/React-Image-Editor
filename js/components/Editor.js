import React from "react";

import ImageLoader from './Image-loader';
import Sliders from './Sliders'


function preloader() {
  return <img src="http://preloaders.net/preloaders/712/Floating%20rays.gif" />;
}


export default class Editor extends React.Component {
  constructor(){
    super();
    this.state = {
      img_src: "https://s-media-cache-ak0.pinimg.com/564x/ea/3d/cf/ea3dcff8ed8e8939d98c96b81f747623.jpg",
      style: {
        scale: 1,
        width: 100,
        height: 100,
        border: 25,
        borderRadius: 0,
      },
    };
  }
  changeImage(img_src){
    this.setState(img_src);
  }
  changeScale(scale){
    this.setState(style.scale);
  }
  changeRotation(rotate){
    this.setState(style.rotate);
  }
  handleChange(e){
    const img_src = e.target.value;
    this.changeImage(img_src);
  }

  render(){
    return(
      <div>
        <h1>Simple Image Editor</h1>
        <Sliders
        changeScale={this.changeScale.bind(this)}
        changeRotation={this.changeRotation.bind(this)}/>
        <p>Paste Link for new image here:</p>
        <input value={this.state.image_src} onChange={this.handleChange.bind(this)}/>
        <div id="image" style={this.state.style}>
          <ImageLoader
            src={this.state.img_src}
            wrapper={React.DOM.div}
            preloader={preloader}>
            Image load failed!
          </ImageLoader>
        </div>
      </div>
    )
  }
}

