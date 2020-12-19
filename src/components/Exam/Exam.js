import React, { Component } from "react";
import Answer from "../Answer/Answer";
import Question from "../Question/Question";

export class Exam extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            {this.props.questions.map((question, index) => {
              return <Question description={question.description} />;
            })}
          </div>
          <div>
            {this.props.answers.map((answer, index) => {
              return (
                <Answer
                  name={answer.name}
                  size={answer.size}
                  description={answer.description}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Exam;
