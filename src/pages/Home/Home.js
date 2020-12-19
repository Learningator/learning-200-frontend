import React, { Component } from "react";
import AreaCard from "../../components/AreaCard/AreaCard";
import DataScience from "../../images/ds.png";
import FrontEnd from "../../images/frontend.png";
import BackEnd from "../../images/backend.png";

import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Main-Grid-container">
          <div className="Grid-container">
            <AreaCard
              soon="Pr&oacute;ximamente"
              area="Front-End"
              className="Container-disabled"
              to="/soon"
              image={FrontEnd}
            />
            <AreaCard
              soon="Pr&oacute;ximamente"
              area="Back-End"
              className="Container-disabled"
              to="/soon"
              image={BackEnd}
            />
            <AreaCard
              className="Container-enabled"
              area="Data Science"
              to="/input"
              image={DataScience}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
