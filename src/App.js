import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import MainPage from "./components/general/MainPage";
import About from "./components/general/About"
import OurTeam from "./components/general/OurTeam";
import SignUp from "./components/user/SignUp";
import Login from "./components/user/Login";
export class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={MainPage} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/about" component={About} />
          <Route path="/ourteam" component={OurTeam} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />

        </div>
      </Router>
    );
  }
}

export default App;
