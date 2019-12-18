import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { updateCustomer } from '../../api'
import messages from "../../messages";



class UpdateCustomer extends Component{
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
    componentDidMount(){
        this.setOldCustomer()
    }
    setOldCustomer(){
        this.setState({
            customerName: this.props.location.state.customerName,
            phoneNumber: this.props.location.state.phoneNumber,
            email: this.props.location.state.email,
        })
    }
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })
    onUpdateCustomer = event =>{
        event.preventDefault()
        const {alert, history, user} = this.props
        let updatedCustomer = this.state
        let oldCustomerIndex
        //API Create Methods Here
        updateCustomer(this.state, user, this.props.location.state.id)
        .then(()=>{
            oldCustomerIndex = this.props.customers.findIndex(customer => customer._id == this.props.location.state.id) 
            this.props.customers[oldCustomerIndex] = updatedCustomer
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
            <div className="auth-form-add-car">
            <form className='auth-form1' onSubmit={this.onUpdateCustomer}>
                <h3>Update Customer</h3>

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
                <button type="submit">Update Customer</button>
            </form>
            </div>
        )
    }
}
export default withRouter(UpdateCustomer)