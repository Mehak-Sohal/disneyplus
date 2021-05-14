import React from "react";
import styled from "styled-components";
import CarouselSlider from "./CarouselSlider.js";
import Channels from "./Channels.js";

const Home = () => {
  return (
    <Container>
      <CarouselSlider />
      <Channels />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 15vh);
  width: 100vw;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    content: "";
    background: url("/images/home-background.png") center / cover no-repeat
      fixed;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
