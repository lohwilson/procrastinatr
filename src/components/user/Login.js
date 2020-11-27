import React, { Component } from 'react';
import axios from "axios";
import auth from "../auth/auth";
import styled from 'styled-components';

const Div = styled.div`
  height: 65vh
`;


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
    console.log('login');
  }

  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onLogin = async (event) => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
    axios.post('http://localhost:4000/users/login', user)
     .then(res => console.log(res.data));
    auth.login(() => {
      this.props.history.push('/dashboard')
    })

  };

  render() {
    return (
      <Div className="container">
        <h3>Log In</h3>
        <form onSubmit={this.onLogin}>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input type="text"
              required
              className="form-control col-6"
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
              
              className="form-control col-6"
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
        <button onClick={
          () => {
            auth.login(() => {
              this.props.history.push("/MainPage")
            })
          }
        }>Login</button>
      </Div>
    )
  }
}

export default Login
