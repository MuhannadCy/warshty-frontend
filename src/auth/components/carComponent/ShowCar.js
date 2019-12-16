import React, { Component } from "react";
import { withRouter } from 'react-router-dom'


class ShowCar extends Component {
  deleteCar = (e) => {
    e.preventDefault();
    console.log(this.props.id)
    this.props.deleteCar(this.props.id);
  }

  render() {
    return (
      <div className="car">
        <h2>{this.props.name}</h2>
        <a href="#" onClick={this.deleteCar}>Delete</a>
      </div>
    );
  }
}

export default withRouter(ShowCar);
