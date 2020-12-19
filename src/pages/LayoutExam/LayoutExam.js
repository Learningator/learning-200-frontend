import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Exam from '../../components/Exam/Exam';

export class LayoutExam extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Exam />
          <Route />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default LayoutExam;
