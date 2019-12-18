import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import { addWorkOrder, showWorkOrders, deleteWorkOrderByID } from '../../api'
import messages from "../../messages";
import ShowWorkOrders from "./ShowWorkOrder";

class WorkOrders extends Component {
    componentDidMount(){
        showWorkOrders(this.props.user)
        .then((res)=>{
            this.props.setWorkOrderList(res.data.workOrders)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    deleteWorkOrder = (id) => {
        deleteWorkOrderByID(id, this.props.user)
        .then((res) => {
            const newWorkOrderList = this.props.workOrders.filter((workOrder) => {
                return workOrder._id !== id;
            });
            this.props.setWorkOrderList(newWorkOrderList);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render(){
        let allWorkOrders = <h2>No Work Orders</h2>
        if(this.props.workOrders && this.props.workOrders.length > 0){
            allWorkOrders = this.props.workOrders.map((workOrder, index) => {
                return <ShowWorkOrders mechanic={workOrder.mechanic} cost={workOrder.cost} key={index} deleteWorkOrder={this.deleteWorkOrder} id={workOrder._id} />
            })
        }
        return (
            <div>
            {allWorkOrders}
            </div>
        )
    }
}

export default withRouter(WorkOrders)