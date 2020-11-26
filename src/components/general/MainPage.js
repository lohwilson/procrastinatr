import React, { Component } from "react";
import Image from "./Image";
import styled from "styled-components";

const Div = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid gold;
`;

const box = [
  {
    text: "first text",
    image:
      "https://www.popsci.com/resizer/Dwo6RWlHWl2nNQr4ct0ETBxqtII=/828x552/cloudfront-us-east-1.images.arcpublishing.com/bonnier/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg",
  },
  {
    text: "second text",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Minimalist-Natural-Presentation-Simple-Background-Image.jpg",
  },
  {
    text: "third text",
    image: "https://loveisinmytummy.com/wp-content/uploads/2017/07/New-Blue-Background-Main-2.jpg",
  },
  {
    text: "fourth text",
    image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Modern-NYC-Skyline-Simple-Background-Image-.jpg",
  },
];

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box: box,
      // text1: "text1",
      // text2: "text2",
      // text3: "text3",
      // text4: "text4",
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to Snippetr</h1>
        <Div>
          {this.state.box.map((box) => (
            <Image someText={box.text} image={box.image} />
          ))}

          {/* <Image
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
          /> */}
        </Div>
        <div>

        </div>
      </div>
    );
  }
}

export default MainPage;
