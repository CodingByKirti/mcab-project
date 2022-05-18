import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Welcome to our Site",
    };
  }

  changeMsg() {
    this.setState({
      msg: "Thanks for the Like",
    });
  }
  render() {
    return (
      <div>
        Hello Visitor : {this.state.msg}
        <button onClick={() => this.changeMsg()}>Plz hit Like 👍 </button>
      </div>
    );
  }
}
