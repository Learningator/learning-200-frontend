import React, { Component } from "react";

export class Answer extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <input
            type="radio"
            name={this.props.name}
            id={`${this.props.size}-${this.props.index}`}
          ></input>
          <label htmlFor={`${this.props.size}-${this.props.index}`}>
            {this.props.description}
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default Answer;
