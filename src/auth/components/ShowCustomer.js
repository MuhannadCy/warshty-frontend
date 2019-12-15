import React, { Component } from "react";
import { withRouter } from 'react-router-dom'


class ShowCustomer extends Component {
    render() {
        return (
          <div className="customer">
            <h2>{this.props.name}</h2>
          </div>
        );
      }
}

export default withRouter(ShowCustomer)