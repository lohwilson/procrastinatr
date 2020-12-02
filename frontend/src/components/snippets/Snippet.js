import axios from "axios";
import React, { Component } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


export class Snippets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippet: {
        title: "",
        story: "",
      },
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    axios.get("http://localhost:4000/snippetr/" + id).then((res) => {
      console.log(res.data);
      this.setState({
        snippet: res.data,
      });
    });
  }

  render() {
    const { title, story } = this.state.snippet;
    return (
      <div>
        <h1>{title}</h1>
        <h3>{story}</h3>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedH"
            />
          }
          label="Custom icon"
        />
      </div>
    );
  }
}

export default Snippets;
