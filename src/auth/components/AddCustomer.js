import React, { Component } from "react";
import { withRouter } from 'react-router-dom'



class AddCustomer extends Component{
    constructor(){
        super()
        this.state = {
            customerName: '',
            phoneNumber: '',
            email: '',
            numberOfCars: 0
        }
    }
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })
    onAddCustomer = event =>{
        event.preventDefault()
    
    const {alert, history, user} = this.props
    //API Create Methods Here

    }
    render(){
        const {customerName,phoneNumber,email,numberOfCars} = this.state
        return(
            <form className='auth-form' onSubmit={this.onChangePassword}>
                <h3>Add Customer</h3>

                <label htmlFor="oldpw">Customer Name</label>
                <input
                required
                name="customerName"
                value={customerName}
                type="text"
                placeholder="Customer Name"
                onChange={this.handleChange}
                />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                required
                name="phoneNumber"
                value={phoneNumber}
                type="text"
                placeholder="i.g: +966551231234, 0551231234"
                onChange={this.handleChange}
                />
                <label htmlFor="phoneNumber">Email</label>
                <input
                required
                name="email"
                value={email}
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
                />
                <button type="submit">Add Customer</button>
            </form>
        )
    }
}
export default withRouter(AddCustomer)