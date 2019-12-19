import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { showCarWorkOrder } from "../../api";
import { throws } from "assert";

class ShowCar extends Component {
  constructor() {
    super();
    this.state = {
      showAddWorkOrder: false,
      showAddWorkOrderForm: false,
      showUpdateWorkOrderForm: false
    };
  }
  deleteCar = e => {
    e.preventDefault();
    console.log(this.props.id);
    this.props.deleteCar(this.props.id);
  };
  showWorkOrder = e => {
    showCarWorkOrder(this.props.user, this.props.id)
      .then(res => {
        this.props.setWorkOrderList(res.data.workOrders);
        this.setState({showAddWorkOrder: true})
      })
      .catch(error => {
        console.log(error);
      });
  };
  displayAddWorkOrderLink() {
    this.setState(
      { showAddWorkOrderForm: !this.state.showAddWorkOrderForm },
      () => {
        this.setState({
          showAddWorkOrderForm: !this.state.showAddWorkOrderForm
        });
      }
    );
  }
  render() {
    const user = this.props.user;
    const id = this.props.id;
    let displayAddWorkOrderLink = "";
    if (this.state.showAddWorkOrder == true)
      displayAddWorkOrderLink = (
        <div>
          <button onClick={() => this.displayAddWorkOrderLink()}>
            <h6>Add Work Order</h6>
          </button>
        </div>
      );
    return (
      <div className="car">
  <h3 onClick={this.showWorkOrder}>{this.props.carPlate} {this.props.carModel} {this.props.carYear}</h3>
        <a href="#" onClick={this.deleteCar}>
          Delete
        </a>
        {displayAddWorkOrderLink}
        {this.state.showAddWorkOrderForm && (
          <Redirect
            to={{
              pathname: "/add-workorder",
              state: {
                id: this.props.id
              }
            }}
          />
        )}
      </div>
    );
  }
}

export default withRouter(ShowCar);
