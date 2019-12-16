import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import { addCustomer, showAllCustomers, deleteCustomerByID } from '../api'
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
    deleteCustomer = (id) => {
      console.log(id)
        deleteCustomerByID(id, this.props.user)
          .then((res) => {
            const newCustomerList = this.props.customers.filter((customer) => {
              return customer._id !== id;
            });
            this.props.setCustomerList(newCustomerList);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    render(){
        let allCustomers = <h2>You Have No Customers</h2>
        if(this.props.customers.length>0){
            allCustomers = this.props.customers.map((customer, index)=>{
                return <ShowCustomer name={customer.customerName} key={index} deleteCustomer={this.deleteCustomer} id={customer._id}/>
            })
        }
        return( 
          <div>
            {allCustomers}
            <Link to="/add-customer">Add Customer</Link>
          </div>
          )
    }
}

export default withRouter(Customers)