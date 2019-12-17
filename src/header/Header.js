import React from 'react'
import { Link } from 'react-router-dom'
import warshaty2 from '../Assets/Images/warshaty2.png'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/add-customer">Add Customer</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    {/* <h1>Warshty</h1> */}
    <img src={warshaty2} width="200" height="200" class="logo-small"/>
    <nav>
      { user && <span>Welcome, {user.fullName}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
