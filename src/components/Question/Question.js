import React, { Component } from "react";

export class Question extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>{this.props.question}</h3>
      </React.Fragment>
    );
  }
}

export default Question;
