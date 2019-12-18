import React, { Component } from "react";
import { withRouter, Link, Redirect } from 'react-router-dom'
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
    re
    addWorkOrderToCar(ID){
        return <Redirect to={{
            pathname: '/add-workorder',
            state: { id: ID}
            }}
        />
    }nder() {
        let allCars = <h2>No Cars</h2>
        if (this.props.cars.length > 0) {
            allCars = this.props.cars.map((car, index) => {
                return <ShowCar user={this.props.user} name={car.VIN} key={index} deleteCar={this.deleteCar} id={car._id} setWorkOrderList={this.props.setWorkOrderList}/>
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