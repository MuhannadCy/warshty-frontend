import React, { Component } from "react";
import { withRouter, Redirect } from 'react-router-dom'
import {showCustomerCars} from '../api'
import AddCar from "./carComponent/AddCar"; 

class ShowCustomer extends Component {
  constructor(){
    super()
    this.state = {
      showAddCustomer: false,
      showAddCustomerForm: false
    }
  }
  deleteCustomer = (e) => {
    e.preventDefault();
    this.props.deleteCustomer(this.props.id);
  }

  showCars = (e) => {
    showCustomerCars(this.props.user, this.props.id)
    .then((res)=>{
      this.props.setCarList(res.data.cars)
     this.setState({showAddCustomer: true})
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  displayAddCarLink1(id, user){
    this.setState({showAddCustomerForm: true})
  }

  render() {
    const user = this.props.user
    const id = this.props.id
    let displayAddCarLink = ''
    if(this.state.showAddCustomer == true) displayAddCarLink = <button onClick= {()=>{this.displayAddCarLink1(id, user)}}>Add Car</button>
      return (
        <div className="customer" onClick={this.showCars}>
          <h2 onClick={this.showCars}>{this.props.name}</h2>
          <a href="#" onClick={this.deleteCustomer}>Delete</a>
          {displayAddCarLink}
          {this.state.showAddCustomerForm && <Redirect to={{
            pathname: '/add-car',
            state: { id: this.props.id}
            }}
        />}
        </div>
      );
    }
}

export default withRouter(ShowCustomer)