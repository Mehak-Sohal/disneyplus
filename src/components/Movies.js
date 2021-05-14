import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4> Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnizY0dv80efccMA3OPWFU8gfBHoGA98Rvg9_xGrtg=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnizY0dv80efccMA3OPWFU8gfBHoGA98Rvg9_xGrtg=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnizY0dv80efccMA3OPWFU8gfBHoGA98Rvg9_xGrtg=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnizY0dv80efccMA3OPWFU8gfBHoGA98Rvg9_xGrtg=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnizY0dv80efccMA3OPWFU8gfBHoGA98Rvg9_xGrtg=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnizY0dv80efccMA3OPWFU8gfBHoGA98Rvg9_xGrtg=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  padding: 8px 0px;

  h4 {
    margin: 12px 0px;
    letter-spacing: 1px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border: 3px solid #f9f9f9;
  }
`;
