import React, { Component } from "react";
import Course from "../../components/Course/Course";

import "./LearningPath.scss";

export class LearningPath extends Component {
  state = {
    data: [
      {
        title: "Curso B&aacute;sico de Python",
        image:
          "https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png",
        teacher: "Facundo",
      },
    ],

    python: {
      title: "Curso Básico de Python",
      image:
        "https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png",
      teacher: "Facundo García Martoni",
      hours: 4,
    },

    math: {
      title: "Curso de Matemáticas para Data Science: Probabilidad",
      image:
        "https://static.platzi.com/media/achievements/badge-matematicas-data-probabilidad-f7c285be-0b7a-4a68-bc31-fd0ee3ce9ad9.png",
      teacher: "Francisco Camacho",
      hours: 4,
    },

    scrap: {
      title: "Curso de Fundamentos de Web Scraping con Python y Xpath",
      image:
        "https://static.platzi.com/media/achievements/badge-fundamentos-web-scraping-python-1578d3cc-5f38-4c53-981e-7f4ba3f4b801.png",
      teacher: "Facundo García Martoni",
      hours: 2,
    },

    engineering: {
      title: "Curso de Ingeniería de Datos con Python",
      image:
        "https://static.platzi.com/media/achievements/1385-286851be-f480-473d-b7ed-61ab58692e3a.png",
      teacher: "David Aroesti",
      hours: 5,
    },
  };

  render() {
    return (
      <React.Fragment>
        <div className="LP__Container">
          <Course
            title={this.state.python.title}
            hours={this.state.python.hours}
            image={this.state.python.image}
            teacher={this.state.python.teacher}
          />
          <Course
            title={this.state.math.title}
            hours={this.state.math.hours}
            image={this.state.math.image}
            teacher={this.state.math.teacher}
          />
          <Course
            title={this.state.scrap.title}
            hours={this.state.scrap.hours}
            image={this.state.scrap.image}
            teacher={this.state.scrap.teacher}
          />
          <Course
            title={this.state.engineering.title}
            hours={this.state.engineering.hours}
            image={this.state.engineering.image}
            teacher={this.state.engineering.teacher}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default LearningPath;
