import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AreaCard.scss";

export class AreaCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Container">
          <Link to={this.props.to}>
            <div className={`Container-Children ${this.props.className}`}>
              <p>
                {this.props.soon}
                <br />
                {this.props.area}
              </p>
              <img src={this.props.image} alt={this.props.alt} />
            </div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default AreaCard;
