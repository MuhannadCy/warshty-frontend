//Abdulwahhab
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AddCustomer from './auth/components/AddCustomer'
import AlertDismissible from './auth/components/AlertDismissible'
import Customers from './auth/components/Customers'
import './LandingPage.scss'
import warshaty2 from './Assets/Images/warshaty2.png'
export default class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = { showSignUp: false , showSignIn: false};
        
    }

    toggleSignInDiv = () =>{
        const{showSignIn} =this.state;
        this.setState( {showSignIn: !showSignIn, showSignUp: false})
    }
    toggleSignUpDiv = () =>{
        const{showSignUp} =this.state;
        this.setState( {showSignUp: !showSignUp, showSignIn: false})
    }
    render() {
        return (
            <div class = "container">
                <div class = "sign">
                    <div class= "sign-in">
                        
                        {this.state.showSignIn &&  <SignIn />}
                    </div>
                    <div class = "logo">
                        <button class="sign-button" onClick = {this.toggleSignInDiv}>Sign In</button>
                       
                        <button class="sign-button" onClick = {this.toggleSignUpDiv}>Sign Up</button>
                    </div>
                    <div class= "sign-up">
                        {this.state.showSignUp && <SignUp />}
                    </div>
                </div>
            </div>
        )
    }
}
