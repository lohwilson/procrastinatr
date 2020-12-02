import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

const Div = styled.div`
  background-image: url(https://avante.biz/wp-content/uploads/White-Background-Images/White-Background-Images-004.jpg);
  background-size: cover;
  z-index: 1;
  margin: auto;
  color: white;
  height: 100%;
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
    };
  }
  render() {
    return (
      <Router>
        <CssBaseline />
        <Container maxWidth="lg">
          <Navbar />
          <Content currentUser={this.state.currentUser} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
