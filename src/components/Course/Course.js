import React, { Component } from "react";
import "./Course.scss";

export class Course extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Course__Main-Container">
          <a href={this.props.url}>
            <div className="Course__Container">
              <img src={this.props.image} alt="Course Logo" />
              <h3>{this.props.title}</h3>
              <span>
                Instruido por: <strong>{this.props.teacher}</strong>
              </span>
              <div className="Course__Container-Data">
                <span>{this.props.level}</span>
                <span>{this.props.hours} horas de contenido</span>
              </div>
            </div>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Course;
