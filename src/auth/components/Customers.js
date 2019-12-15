import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { addCustomer, showAllCustomers } from '../api'
import messages from "../messages";
import ShowCustomer from "./ShowCustomer";
class Customers extends Component{
    componentDidMount(){
        showAllCustomers(this.props.user)
        .then((res)=>{
            this.props.setCustomerList(res.data.customers)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        let allCustomers = <h2>You Have No Customers</h2>
        if(this.props.customers.length>0){
            allCustomers = this.props.customers.map((customer, index)=>{
                return <ShowCustomer name={customer.customerName} key={index}/>
            })
        }
        return allCustomers
    }
}

export default withRouter(Customers)