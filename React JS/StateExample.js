import React, { Component } from "react";
import bellA from './bell-border.png'
import bellB from './bell-icons-red.png'

class NewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Subscribe to my website",
      sub: "subscribe"
    };
  }
  styles = {
    fontStyle: 'italic',
    color: 'purple'
  }

  Buttonchange=() => {
    this.setState({
      message: 'Hit the bell icon',
      sub: 'subscribed',
      imageUrl : bellA
    })
  }

  imageChange = () => {
    this.setState({
      imageUrl: bellB,
      message: "Thanks you! Happy learning."

    })
  }

  render() {
    return (
      <div>
        <h3 style={this.styles}>{this.state.message} </h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p></p>
        <img 
        style={{width: "30px", height: "30px"}} 
        src={this.state.imageUrl}  
        onClick={this.imageChange}
        alt=""/>

      </div>
    );
  }
}

export default NewComp;
