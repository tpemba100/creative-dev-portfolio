import React, { Component } from "react";
import styled from "styled-components";
import NameReveal from "./NameReveal";
import TitleReveal from "./TitleReveal";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: white;
  font-family: "Averia Serif Libre", cursive;

  /* border: 1px solid blue; */
`;
// .section__title {
//   font-weight: 700;
//   font-size: 30px;
//   margin-left: 2rem;
//   margin-bottom: 1rem;
// }

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <NameReveal text="Tsering Pemba" timeDelay={500} />
        <br />
        <TitleReveal
          text="UI/UX Designer & Developer"
          // fontFam="AvenirRoman"
          timeDelay={1300}
        />
      </Container>
    );
  }
}

export default NameAndJobTitle;
