import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import {showCustomerCars} from '../api'


class ShowCustomer extends Component {
  deleteCustomer = (e) => {
    e.preventDefault();
    this.props.deleteCustomer(this.props.id);
  }

  showCars = (e) => {
    showCustomerCars(this.props.user, this.props.id)
    .then((res)=>{
      this.props.setCarList(res.data.cars)
      this.props.getCustomerID(this.props.id)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render() {
      return (
        <div className="customer" onClick={this.showCars}>
          <h2 onClick={this.showCars}>{this.props.name}</h2>
          <a href="#" onClick={this.deleteCustomer}>Delete</a>
        </div>
      );
    }
}

export default withRouter(ShowCustomer)