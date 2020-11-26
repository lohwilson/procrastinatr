import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <br />
          <Route path="/" exact component={MainPage} />
          <Route path="/about" component={About} />
          <Route path="/ourteam" component={OurTeam} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={ListAllSnippets} />
          <Route path="/create" component={CreateSnippets} />
          <Route path="/edit" component={EditSnippets} />
          <Route path="/show" component={ShowSnippets} />
          <Route path="/search" component={Search} />
          <br />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
