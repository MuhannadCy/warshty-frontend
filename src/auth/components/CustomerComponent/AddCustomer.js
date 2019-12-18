import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { addCustomer } from '../../api'
import messages from "../../messages";



class AddCustomer extends Component{
    constructor(){
        super()
        this.state = {
            customerName: '',
            phoneNumber: '',
            email: '',
            numberOfCars: 0,
            customersList: []
        }
    }
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })
    onAddCustomer = event =>{
        event.preventDefault()
        const {alert, history, user} = this.props
        //API Create Methods Here
        addCustomer(this.state, user)
        .then(()=>{
            alert(messages.addCustomerSuccess)
            this.props.customers.push(this.state)
            this.props.setCustomerList(this.props.customers);
        })
        .then(()=> history.push('/'))
        .catch(error => {
            console.log(error)
            this.setState({customerName: '',phoneNumber: '', email: '',})
            alert('didn\'t work')
        })
    }
    render(){
        const {customerName,phoneNumber,email,numberOfCars} = this.state
        return(
            <form className='auth-form' onSubmit={this.onAddCustomer}>
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