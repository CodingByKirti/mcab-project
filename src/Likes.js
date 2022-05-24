import React, { Component } from "react";

export default class Likes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
    this.incLikes = this.incLikes.bind(this);
  }

  incLikes() {
    this.setState({
      likes: this.state.likes + 1,
    });
  }
  render() {
    return (
      <div>
        <h1> Total Likes {this.state.likes}</h1>
        <button onClick={this.incLikes.bind(this)}> Like 👍 </button>

        {/* Second Way :  +bind in constructor */}
        {/* <button onClick={this.incLikes}> Like 👍 </button> */}
        {/* First Way */}
        {/* <button onClick={() => this.incLikes()}> Like 👍 </button> */}
      </div>
    );
  }
}
