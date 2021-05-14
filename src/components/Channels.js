import React from "react";
import styled from "styled-components";

const Channels = () => {
  return (
    <Container>
      <Content>
        <img src="/images/viewers-disney.png" alt="" />
        <video
          loop
          muted
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
        >
          <source src="/videos/1564674844-disney.mp4" />
        </video>
      </Content>
      <Content>
        <img src="/images/viewers-marvel.png" alt="" />
        <video
          loop
          muted
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
        >
          <source src="/videos/1564676115-marvel.mp4" />
        </video>
      </Content>
      <Content>
        <img src="/images/viewers-national.png" alt="" />
        <video
          loop
          muted
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
        >
          <source src="/videos/1564676296-national-geographic.mp4" />
        </video>
      </Content>
      <Content>
        <img src="/images/viewers-pixar.png" alt="" />
        <video
          loop
          muted
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
        >
          <source src="/videos/1564676714-pixar.mp4" />
        </video>
      </Content>
      <Content>
        <img src="/images/viewers-starwars.png" alt="" />
        <video
          loop
          muted
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
        >
          <source src="/videos/1608229455-star-wars.mp4" />
        </video>
      </Content>
    </Container>
  );
};

export default Channels;

const Container = styled.div`
  margin-top: 38px;
  padding: 30px 0px 26px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 30px;
`;

const Content = styled.div`
  height: 12vh;
  border: 2px solid rgba(249, 249, 249, 0.1);
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    height: 100%;
    width: 100%;
    object-fit: contain;
    z-index: 1;
    pointer-events: none;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0;
  }

  :hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;
