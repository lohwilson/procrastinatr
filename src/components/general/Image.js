import React, { Component } from "react";
// import styled from "styled-components";

// const Div = styled.div`
//   width: 49%;
//   border: 1px solid black;
//   margin: 5px 0px 5px 0px;
//   background-color: blue;
//   color: white;
//   text-align: center;
// `;

const divStyle1 = {
  width: "49%",
  height: "200px",
  border: "1px solid black",
  margin: "10px 0px 10px 0px",
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
};

const divStyle2 = {
  width: "49%",
  height: "200px",
  border: "1px solid black",
  margin: "10px 0px 10px 0px",
  backgroundColor: "red",
  color: "white",
  textAlign: "center",
};

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
          <div
            style={divStyle1}
            onMouseOver={() => this.toggleImage()}
            onMouseLeave={() => this.toggleImage()}
          >
          </div>
        ) : (
          <div
            style={divStyle2}
            onMouseOver={() => this.toggleImage()}
            onMouseLeave={() => this.toggleImage()}
          >
            <h1>{someText}</h1>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Image;
