import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Nav = styled.nav`
  text-align: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav>
          <Link to="/dashboard">
            <h3>Snippetr</h3>
          </Link>
          <div>
            <div>
              <h4>
                <Link to="/">Home</Link>
              </h4>
              <h4>
                <Link to="/about">About</Link>
              </h4>
              <h4 className="navbar-item">
                <Link to="/ourteam">Our Team</Link>
              </h4>
              <h4 className="navbar-item">
                <Link to="/login">Log In</Link>
              </h4>
              <h4 className="navbar-item">
                <Link to="/signup">Sign Up</Link>
              </h4>
              <h4 className="navbar-item">
                <Link to="/dashboard">Dashboard</Link>
              </h4>
            </div>
            <div>
              <Button>Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button disabled>Disabled</Button>
              <Button href="#text-buttons" color="primary">
                Link
              </Button>
            </div>
          </div>
        </Nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
