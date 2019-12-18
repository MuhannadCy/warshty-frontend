import React, { Component } from "react";
import { withRouter, Redirect, Link } from 'react-router-dom'
import {addCar} from '../../api'



class AddCar extends Component {
    constructor() {
        super()
        this.state = {
            VIN: '',
            carPlate: '',
            color: '',
            year: '',
            model: ''
        }
    }
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })
    onAddCar = event => {
        event.preventDefault()

        const { alert, history, user } = this.props
        //API Create Methods Here
        addCar(user, this.state, this.props.location.state.id)
        .then(()=>{
            this.props.cars.push(this.state)
            this.props.setCarList(this.props.cars);
            //return (<Redirect to = {'/'}/>)
        })
        .then(()=> history.push('/'))
        .catch(error => {
            console.log(error)
            this.setState({VIN: '',carPlate: '',color: '',year: '', model: ''})
            alert('didn\'t work')
        })
    }
    cancleAdd(){
        this.props.history.push('/')
    }
    render() {
        const { VIN, carPlate, color, year, model } = this.state
        return (
            <div className="auth-form-add-car">
            <form className='auth-form1' onSubmit={this.onAddCar}>
                <h3>Add Car</h3>

                <label htmlFor="oldpw">VIN number</label>
                <input
                    required
                    name="VIN"
                    value={VIN}
                    type="text"
                    placeholder="VIN number"
                    onChange={this.handleChange}
                />
                <label htmlFor="carPlate">Car Plate</label>
                <input
                    required
                    name="carPlate"
                    value={carPlate}
                    type="text"
                    placeholder="GSR 4252"
                    onChange={this.handleChange}
                />
                <label htmlFor="color">Car Color</label>
                <input
                    required
                    name="color"
                    value={color}
                    type="text"
                    placeholder="color"
                    onChange={this.handleChange}
                />
                <label htmlFor="year">Year</label>
                <input
                    required
                    name="year"
                    value={year}
                    type="text"
                    placeholder="year of made"
                    onChange={this.handleChange}
                />
                <label htmlFor="model">Model</label>
                <input
                    required
                    name="model"
                    value={model}
                    type="text"
                    placeholder="type of car"
                    onChange={this.handleChange}
                />
                {/* <button type="submit">Add Car To Customer ${CustomElementRegistry.name}</button> */}
                <button type="submit">Add Car To Customer</button>
                
            </form>
            <button onClick = {()=>{this.cancleAdd()}}></button>
            </div>
        )
    }
}

export default withRouter(AddCar);