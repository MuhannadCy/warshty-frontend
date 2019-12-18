import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

class ShowWorkOrder extends Component {
    deleteWorkOrder = (e) => {
        e.preventDefault();
        this.props.deleteWorkOrder(this.props.id)
    }
    render(){
        return (
            <div>
                <h2>{this.props.mechanic}</h2><br />
                <div className="work-orders">
                    <h6>{this.props.cost}</h6>
                     <a href = "#" onClick={this.deleteWorkOrder}>Delete</a>
                </div>
            </div>
        )
    }
}
export default withRouter(ShowWorkOrder)