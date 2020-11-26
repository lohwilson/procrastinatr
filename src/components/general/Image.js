import React, { Component } from "react";
import styled from "styled-components";

const Div1 = styled.div`
  width: 49%;
  height: 200px;
  border: 1px solid black;
  margin: 10px 0px 10px 0px;
  background-color: blue;
  color: white;
  text-align: center;
`;

const Div2 = styled.div`
  width: 49%;
  height: 200px;
  border: 1px solid black;
  margin: 10px 0px 10px 0px;
  background-color: black;
  color: white;
  text-align: center;
`;

// const divStyle1 = {
//   width: "49%",
//   height: "200px",
//   border: "1px solid black",
//   margin: "10px 0px 10px 0px",
//   backgroundColor: "black",
//   color: "white",
//   textAlign: "center",
// };

// const divStyle2 = {
//   width: "49%",
//   height: "200px",
//   border: "1px solid black",
//   margin: "10px 0px 10px 0px",
//   backgroundColor: "red",
//   color: "white",
//   textAlign: "center",
// };

export class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: true,
    };
  }

  toggleImage = () => {
    this.setState({ mouseOver: !this.state.mouseOver });
  };

  render() {
    const { someText, image } = this.props;
    return (
      <React.Fragment>
        {this.state.mouseOver ? (
          <Div1 style={{backgroundImage=image}}
            onMouseOver={() => this.toggleImage()}
            onMouseLeave={() => this.toggleImage()}
          >
          </Div1>
        ) : (
          <Div2
            onMouseOver={() => this.toggleImage()}
            onMouseLeave={() => this.toggleImage()}
          >
            <h1>{someText}</h1>
          </Div2>
        )}
      </React.Fragment>
    );
  }
}

export default Image;
