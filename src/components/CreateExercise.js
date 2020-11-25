import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  async componentDidMount () {
    console.log("component did mount");

    const response = await axios.get("http://localhost:4000/users/");
    console.log(response);

    axios.get("http://localhost:4000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onChangeDate = (date) => {
    this.setState({ date: date });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    // window.location = "/";

    axios
      .post("http://localhost:4000/exercises/add", exercise)
      .then((res) => console.log(res.data));
  };

  render() {
    return (
      <div>
        <h3>Create New Exercise log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <select
              useref="userInput"
              required
              className="form-control"
              value={this.state.username}
              id="username"
              onChange={this.onChange}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              id="description"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.duration}
              id="duration"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateExercise;
