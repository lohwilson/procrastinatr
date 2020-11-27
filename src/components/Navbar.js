import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import auth from "../components/auth/auth";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1
`;

export class Navbar extends Component {
  render() {
    const isLoggedIn = auth.isAuthenticated()
    console.log(isLoggedIn);
    const showUser = isLoggedIn ? <h1>logged in</h1>: <h2>not logged in</h2>
    return (
      <React.Fragment>
      <Nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/dashboard" className="navbar-brand"><h3>Snippetr</h3></Link>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
        <div>
          <div className="navbar-nav">
            <h4 className="navbar-item">
            <Link to="/" className="nav-link">Home</Link>
            </h4>
            <h4 className="navbar-item">
            <Link to="/about" className="nav-link">About</Link>
            </h4>
            <h4 className="navbar-item">
            <Link to="/ourteam" className="nav-link">Our Team</Link>
            </h4>
            <h4 className="navbar-item">
            <Link to="/login" className="nav-link">Log In</Link>
            </h4>
            <h4 className="navbar-item">
            <Link to="/signup" className="nav-link">Sign Up</Link>
            </h4>
            <h4 className="navbar-item">
            <Link to="/profile" className="nav-link">Profile</Link>
            </h4>
            <h4 className="navbar-item">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </h4>
            <h4 className="navbar-item">
            <Link to="/create" className="nav-link">Create Snippet</Link>
            </h4>
            <h4 className="navbar-item">
            <Link to="/edit" className="nav-link">Edit Snippet</Link>
            </h4>
            <h4 className="navbar-item">
            <Link to="/search" className="nav-link">Search</Link>
            </h4>
          </div>
          <button onClick={()=> auth.isAuthenticated()}>Click Me</button>
          {showUser}
        </div>
      </Nav>
      </React.Fragment>
    )
  }
}

export default Navbar
