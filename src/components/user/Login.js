import React, { Component } from 'react';
import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  componentDidMount(){
    console.log('sign up');
  }

  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    if(this.state.password !== this.state.confirmPassword){
      console.log('password do not match');
      return
    }

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);

    axios.post('http://localhost:4000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    })



  };

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input type="text"
              required
              className="form-control col-4"
              value={this.state.username}
              id="username"
              onChange={this.onChange}
              autoComplete="off"
            />
            {" "}
            <h5>Or </h5>
            {" "}
            <label htmlFor="email">Email: </label>
            <input type="text"
              required
              className="form-control col-4"
              value={this.state.email}
              id="email"
              onChange={this.onChange}
              autoComplete="off"
              />
            <label htmlFor="password">Password: </label>
            <input type="password"
              required
              className="form-control col-6"
              value={this.state.password}
              id="password"
              onChange={this.onChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Log In" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default Login
