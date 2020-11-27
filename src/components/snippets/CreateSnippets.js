import React, { Component } from 'react';
import axios from "axios";

export class CreateSnippets extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      story: '',
      image: ''
    }
  }

  componentDidMount(){
    console.log('create snippet component mounted');
  }

  handleChange = event => {
    this.setState({[event.target.id]: event.target.value})
  }

  createNewSnippet = (event) => {
    event.preventDefault()
    console.log(('clicked'));

    const snippet = {
      title: this.state.title,
      story: this.state.story,
      image: this.state.image
    }

    axios.post("http://localhost:4000/snippetr/create", snippet)
      .then((res) => console.log(res.data))
    console.log('snippet created');
  }


  render() {
    return (
      <div>
        <form onSubmit={this.createNewSnippet}>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" value={this.state.title} onChange={this.handleChange}/>
          <label htmlFor="story">Story: </label>
          <input type="text" id="story" value={this.state.story} onChange={this.handleChange}/>
          <label htmlFor="image">Image: </label>
          <input type="text" id="image" value={this.state.image} onChange={this.handleChange}/>
          <input type="submit" value="Create New Snippet"/>
        </form>
      </div>
    )
  }
}

export default CreateSnippets
