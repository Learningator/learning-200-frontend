import React, { Component } from "react";
import Course from "../../components/Course/Course";

import "./LearningPath.scss";

export class LearningPath extends Component {
  state = {
    date: {
      month: 1,
    },

    data: [
      {
        title: "Curso Básico de Python",
        image:
          "https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png",
        teacher: "Facundo García Martoni",
        hours: 4,
        level: "Básico",
        url: "https://platzi.com/clases/python/",
      },

      {
        title: "Curso de Matemáticas para Data Science: Probabilidad",
        image:
          "https://static.platzi.com/media/achievements/badge-matematicas-data-probabilidad-f7c285be-0b7a-4a68-bc31-fd0ee3ce9ad9.png",
        teacher: "Francisco Camacho",
        hours: 4,
        level: "Básico",
        url: "https://platzi.com/clases/ds-probabilidad/",
      },

      {
        title: "Curso de Fundamentos de Web Scraping con Python y Xpath",
        image:
          "https://static.platzi.com/media/achievements/badge-fundamentos-web-scraping-python-1578d3cc-5f38-4c53-981e-7f4ba3f4b801.png",
        teacher: "Facundo García Martoni",
        hours: 2,
        level: "Básico",
        url: "https://platzi.com/clases/web-scraping/",
      },

      {
        title: "Curso de Ingeniería de Datos con Python",
        image:
          "https://static.platzi.com/media/achievements/1385-286851be-f480-473d-b7ed-61ab58692e3a.png",
        teacher: "David Aroesti",
        hours: 5,
        level: "Básico",
        url: "https://platzi.com/clases/ingenieria-datos/",
      },

      {
        title: "Curso de TensorFlow.js",
        image:
          "https://static.platzi.com/media/achievements/badge-tensorflow-c28b101d-159c-45b5-a29b-e9ba1337cc7c.png",
        teacher: "Alejandro Santamaria",
        hours: 4,
        level: "Básico",
        url: "https://platzi.com/clases/tensorflow-js/",
      },

      {
        title: "Curso de Redes Neuronales en Keras y Scikit-Learn",
        image:
          "https://static.platzi.com/media/achievements/badge-_redes-neuronales-keras-scikitlearn_-233e55cd-a7c3-41fb-bd45-0b0d20b18769.png",
        teacher: "Giuseppe Roa Osorio",
        hours: 3,
        level: "Básico",
        url: "https://platzi.com/clases/keras-neural-networks/",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="LP__Main-Container">
          <div className="LP__Title">
            <h2>Mes {this.state.date.month}</h2>
            <hr />
          </div>
          <div className="LP__Container">
            {this.state.data.map((course, index) => {
              return (
                <Course
                  title={course.title}
                  hours={course.hours}
                  image={course.image}
                  teacher={course.teacher}
                  level={course.level}
                  url={course.url}
                  key={`course-${index}`}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LearningPath;
