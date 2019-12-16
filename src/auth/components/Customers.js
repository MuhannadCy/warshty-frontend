import React, { Component } from "react";
import { withRouter, Link, Redirect } from 'react-router-dom'
import { addCustomer, showAllCustomers, deleteCustomerByID } from '../api'
import messages from "../messages";
import ShowCustomer from "./ShowCustomer";
import AddCar from "./carComponent/AddCar";
class Customers extends Component {
    constructor(props){
        super(props)
        this.getCustomerID= this.getCustomerID.bind(this)
        this.state = {
          customerID: ''
        }
      }
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
    getCustomerID = (id) => {
        
        console.log(id)
        this.setState({customerID: id})
        // if(id != ''){
        //     return <Redirect to={{
        //         pathname: '/add-car',
        //         state: { id: id }
        //         }}
        //     />
        // }
        // else{
        //     return <h1>Pick a Customer to Add</h1>
        // }
    }
    addCarToCustomer(ID){
        return <Redirect to={{
            pathname: '/add-car',
            state: { id: ID }
            }}
        />
    }
    render() {
        let displayAddCarButton = ''
        if(this.state.customerID != '') displayAddCarButton = <button onClick={this.addCarToCustomer(this.state.customerID)}>hey</button>
        let allCustomers = <h2>You Have No Customers</h2>
        if (this.props.customers.length > 0) {
            allCustomers = this.props.customers.map((customer, index) => {
                return <ShowCustomer user={this.props.user} name={customer.customerName} key={index} deleteCustomer={this.deleteCustomer} id={customer._id} setCarList={this.props.setCarList} getCustomerID={this.getCustomerID}/>
            })
        }
        return (
            <div>
                {allCustomers}
                <Link to="/add-customer"></Link>
                {displayAddCarButton}
            </div>
        )
    }
}

export default withRouter(Customers)