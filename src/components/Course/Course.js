import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Course.scss";

export class Course extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Course__Container">
          <img src={this.props.image} alt="Course Logo" />
          <h3>{this.props.title}</h3>
          <span>
            Instruido por: <strong>{this.props.teacher}</strong>
          </span>
          <p>{this.props.hours} horas de contenido</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Course;
