import React, { Component } from "react";
import Image from "./Image";
import styled from "styled-components";

const Div = styled.div`
  width: 80%;
  margin: auto;
`;


const box = [
  {
    text: "discover a new world",
    image:
      "https://www.popsci.com/resizer/Dwo6RWlHWl2nNQr4ct0ETBxqtII=/828x552/cloudfront-us-east-1.images.arcpublishing.com/bonnier/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg",
  },
  {
    text: "unlock your passion",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Minimalist-Natural-Presentation-Simple-Background-Image.jpg",
  },
  {
    text: "an exeprience like no other",
    image: "https://loveisinmytummy.com/wp-content/uploads/2017/07/New-Blue-Background-Main-2.jpg",
  },
  {
    text: "discover your soul",
    image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Modern-NYC-Skyline-Simple-Background-Image-.jpg",
  },
];

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box: box,
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to Snippetr</h1>
        <Div>
          {this.state.box.map((box, index) => (
            <Image someText={box.text} image={box.image} key={index} />
          ))}
        </Div>
        <div>

        </div>
      </div>
    );
  }
}

export default MainPage;
