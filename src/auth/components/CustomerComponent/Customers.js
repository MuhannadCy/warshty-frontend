import React, { Component } from "react";
import { withRouter, Link, Redirect } from 'react-router-dom'
import { addCustomer, showAllCustomers, deleteCustomerByID } from '../../api'
import messages from "../../messages";
import ShowCustomer from "./ShowCustomer";
//import AddCar from "../CarComponent/AddCar";
class Customers extends Component {
    
    componentDidMount() {
        showAllCustomers(this.props.user)
            .then((res) => {
                this.props.setCustomerList(res.data.customers)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    deleteCustomer = (id) => {
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
    addCarToCustomer(ID){
        return <Redirect to={{
            pathname: '/add-car',
            state: { id: ID}
            }}
        />
    }
    render() {
        let allCustomers = <h2>You Have No Customers</h2>
        if (this.props.customers.length > 0) {
            allCustomers = this.props.customers.map((customer, index) => {
                return <ShowCustomer user={this.props.user} customerName={customer.customerName} email={customer.email} phoneNumber= {customer.phoneNumber}key={index} deleteCustomer={this.deleteCustomer} id={customer._id} setCarList={this.props.setCarList}/>
            })
        }
        return (
            <div>
                {allCustomers}
                <Link to="/add-customer"></Link>
                
            </div>
        )
    }
}

export default withRouter(Customers)