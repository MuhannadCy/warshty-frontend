import React, { Component } from "react";
import { withRouter } from 'react-router-dom'



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

    }
    render() {
        const { VIN, carPlate, color, year, model } = this.state
        return (
            <form className='auth-form' onSubmit={this.onAddCar}>
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
                <button type="submit">Add Car To Customer ${CustomElementRegistry.name}</button>
            </form>
        )
    }
}

const AddCar = withRouter(AddCar);
export default AddCar;