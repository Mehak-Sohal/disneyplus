import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <BackgroundImage>
        <img
          src="https://www.denofgeek.com/wp-content/uploads/2019/07/the-flintstones.jpg?fit=1432%2C906"
          alt=""
        />
      </BackgroundImage>
      <TitleImage>
        <img
          src="https://i.pinimg.com/originals/3d/14/b2/3d14b28f0c5ecaeb6dac290ec2f3ad10.jpg"
          alt=""
        />
      </TitleImage>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        {" "}
        hbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsb
        hbdchsbcjhdsbhbdchsbcjhdsb
      </SubTitle>
      <Description>
        hbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsb
        hbdchsbcjhdsbhbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsb
        hbdchsbcjhdsb hbdchsbcjhdsbhbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsb
        hbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsbhbdchsbcjhdsb hbdchsbcjhdsb
        hbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsbhbdchsbcjhdsb
        hbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsb hbdchsbcjhdsb
        hbdchsbcjhdsbhbdchsbcjhdsb
      </Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  height: calc(100vh - 50px);
  padding: calc(3.5vw + 5px);
  position: relative;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const TitleImage = styled.div`
  height: 30vh;
  width: 35vw;
  margin-bottom: 20px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.div`
  background: #f9f9f9;
  color: #000;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  height: 50px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-right: 20px;
  letter-spacing: 1.5px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #f9f9f9;
  color: #f9f9f9;
`;

const AddButton = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #f9f9f9;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;

  span {
    font-size: 30px;
    color: #fff;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: #000;
`;

const SubTitle = styled.div`
  font-size: 15px;
  letter-spacing: 1px;
  margin-top: 16px;
  min-height: 20px;
`;

const Description = styled.div`
  font-size: 15px;
  line-height: 1.4;
  margin-top: 16px;
  color: #f9f9f9;
`;
