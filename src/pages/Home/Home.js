import React, { Component } from "react";
import AreaCard from "../../components/AreaCard/AreaCard";
import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Main-Grid-container">
          <div className="Grid-container">
            <AreaCard />
            <AreaCard />
            <AreaCard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
