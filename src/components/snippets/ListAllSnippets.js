import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Snippets from "./Snippets";
import SnippetOptions from "./SnippetOptions";

export class ListAllSnippets extends Component {
  constructor(props){
    super(props)
    this.state = {
      snippets: []
    }
  }
  componentDidMount(){
    console.log('dashboard mounted');
    axios.get('http://localhost:4000/snippetr')
      .then(res => {
        console.log(res.data)
        this.setState({
          snippets: res.data
        })
      })
  }

  render() {
    const { snippets } = this.state;
    const allSnippets = snippets.length ? (
      snippets.map(snippet => {
        return (
          <div key={snippet._id}>
            <div>
              {snippet.title}
              {snippet.story}
            </div>
          </div>
        )
      })
    ) : (
      <div> No post yet </div>
      )
    return (
      <div>
        <h1>List all snippets</h1>
        <div>
          <Link to="/create" className="nav-link">Create Snippet</Link>
          <Link to="/edit" className="nav-link">Edit Snippets</Link>
          <Link to="/search" className="nav-link">Search Snippets</Link>
          <Link to="/show" className="nav-link">Show Snippets</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/" className="nav-link">Home</Link>
        </div>

        <div>
          {allSnippets}
        </div>
        <SnippetOptions />
        <Snippets />
        
      </div>
    )
  }
}

export default ListAllSnippets
