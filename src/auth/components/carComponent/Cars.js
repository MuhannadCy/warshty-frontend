import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import { addCar, showCars, deleteCarByID } from '../../api'
import messages from "../../messages";
import ShowCar from "./ShowCar";

class Cars extends Component {
    componentDidMount() {
        showCars(this.props.user)
            .then((res) => {
                this.props.setCarList(res.data.cars)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    deleteCar = (id) => {
        console.log(id)
        deleteCarByID(id, this.props.user)
            .then((res) => {
                const newCarList = this.props.cars.filter((car) => {
                    return car._id !== id;
                });
                this.props.setCarList(newCarList);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        let allCars = <h2>No Cars</h2>
        if (this.props.cars.length > 0) {
            allCars = this.props.cars.map((car, index) => {
                return <ShowCar name={car.VIN} key={index} deleteCar={this.deleteCar} id={car._id} />
            })
        }
        return (
            <div>
                {allCars}
            </div>
        )
    }
}

export default withRouter(Cars);