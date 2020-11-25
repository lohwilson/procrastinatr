import React, { Component } from "react";
import Image from "./Image";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid gold;
`;

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "text1",
      text2: "text2",
      text3: "text3",
      text4: "text4",
      image1:
        "https://img.freepik.com/free-photo/dark-blue-glow-dust-particle-abstract-background_35672-1414.jpg?size=626&ext=jpg",
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to Snippetr</h1>
        <Div>
          <Image
            someText={this.state.text1}
            image={this.state.image1}
            mouseOver={this.state.mouseOver}
          />
          <Image
            someText={this.state.text2}
            image={this.state.image1}
            mouseOver={this.state.mouseOver}
          />
          <Image
            someText={this.state.text3}
            image={this.state.image1}
            mouseOver={this.state.mouseOver}
          />
          <Image
            someText={this.state.text4}
            image={this.state.image1}
            mouseOver={this.state.mouseOver}
          />
        </Div>
      </div>
    );
  }
}

export default MainPage;
