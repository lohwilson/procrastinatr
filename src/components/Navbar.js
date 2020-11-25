import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand"><h3>Snippetr</h3></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
          </div>
        </div>
      </nav>
      </React.Fragment>

    )
  }
}

export default Navbar
