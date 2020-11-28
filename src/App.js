import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components"
import { ProtectedRoute } from "./components/auth/ProtectedRoute";


import Navbar from "./components/Navbar";
import MainPage from "./components/general/MainPage";
import About from "./components/general/About"
import OurTeam from "./components/general/OurTeam";
import SignUp from "./components/user/SignUp";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import ListAllSnippets from "./components/snippets/ListAllSnippets";
import CreateSnippets from "./components/snippets/CreateSnippets";
import EditSnippets from "./components/snippets/EditSnippets";
import ShowSnippets from "./components/snippets/ShowSnippets";
import Search from "./components/snippets/Search";
import Footer from "./components/Footer";
import Dashboard from "./components/snippets/Dashboard";

const Div = styled.div`
  background-image: url(https://i.pinimg.com/originals/4d/55/61/4d5561a98fe7d21e8cbbdf5d87675050.jpg);
  background-size: cover;
  z-index: 1;
  margin: auto;
  color: white;
  height: 100%;
`;


export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: ''
    }
  }
  render() {
    return (
      <Router>
        <Div>
          <Navbar />
          <br />
          <Route path="/" exact component={MainPage} />
          <Route path="/about" component={About} />
          <Route path="/ourteam" component={OurTeam} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/create" component={CreateSnippets} />
          <ProtectedRoute path="/edit" component={EditSnippets} />
          <ProtectedRoute path="/search" component={Search} />
          <Footer />
        </Div>
      </Router>
    );
  }
}

export default App;
