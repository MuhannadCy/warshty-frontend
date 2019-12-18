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
                <h5>Mechanic: {this.props.mechanic}</h5>
                <div className="work-orders">
                    <h6>Cost: {this.props.cost} SAR</h6> <br />
                     <a href = "#" onClick={this.deleteWorkOrder}>Delete</a>
                </div>
            </div>
        )
    }
}
export default withRouter(ShowWorkOrder)