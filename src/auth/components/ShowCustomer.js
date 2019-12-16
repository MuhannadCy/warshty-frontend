import React, { Component } from "react";
import { withRouter } from 'react-router-dom'


class ShowCustomer extends Component {
  deleteCustomer = (e) => {
    e.preventDefault();
    console.log(this.props.id)
    this.props.deleteCustomer(this.props.id);
  }

    render() {
        return (
          <div className="customer">
            <h2>{this.props.name}</h2>
            <a href="#" onClick={this.deleteCustomer}>Delete</a>
          </div>
        );
      }
}

export default withRouter(ShowCustomer)