import React, { Component } from "react";
import { withRouter, Redirect, Link } from 'react-router-dom'
import {addWorkOrder} from '../../api'



class AddWorkOrder extends Component {
    constructor() {
        super()
        this.state = {
            mechanic: '',
            description: '',
            cost: 0,
        }
    }
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })
    onAddWorkOrder = event => {
        event.preventDefault()

        const { alert, history, user } = this.props
        //API Create Methods Here
        
        addWorkOrder(user, this.state, this.props.location.state.id)
        .then(()=>{
            this.props.workOrders.push(this.state)
            this.props.setWorkOrderList(this.props.workOrders);
            //return (<Redirect to = {'/'}/>)
        })
        .then(()=> history.push('/'))
        .catch(error => {
            console.log(error)
            this.setState({mechanic: '',description: '',cost: ''})
            alert('didn\'t work')
        })
    
    }
    cancleAdd(){
        this.props.history.push('/')
    }
    render() {
        const { mechanic, description, cost} = this.state
        return (
            <div className="auth-form-add-car">
            <form className='auth-form1' onSubmit={this.onAddWorkOrder}>
                <h3>Add Work Order</h3>

                <label htmlFor="oldpw"> Mechanic </label>
                <input
                    required
                    name="mechanic"
                    value={mechanic}
                    type="text"
                    placeholder="Mechanic Name"
                    onChange={this.handleChange}
                />
                <label htmlFor="description">Description</label>
                <input
                    required
                    name="description"
                    value={description}
                    type="text"
                    placeholder="What does the car need"
                    onChange={this.handleChange}
                />
                <label htmlFor="cost">Cost</label>
                <input
                    required
                    name="cost"
                    value={cost}
                    type="number"
                    placeholder="How much does this work cost in SAR"
                    onChange={this.handleChange}
                />
                <button type="submit">Add Work Order To Car</button>
            </form>
            <button onClick = {()=>{this.cancleAdd()}}></button>
            </div>
        )
    }
}

export default withRouter(AddWorkOrder);