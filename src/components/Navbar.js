import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Logo src="/images/logo.svg" alt="" />
      <NavItems>
        <Wrap>
          <img src="/images/home-icon.svg" alt="" />
          <span>Home</span>
        </Wrap>
        <Wrap>
          <img src="/images/search-icon.svg" alt="" />
          <span>Search</span>
        </Wrap>
        <Wrap>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>watchlist</span>
        </Wrap>
        <Wrap>
          <img src="/images/original-icon.svg" alt="" />
          <span>originals</span>
        </Wrap>
        <Wrap>
          <img src="/images/movie-icon.svg" alt="" />
          <span>movies</span>
        </Wrap>
        <Wrap>
          <img src="/images/series-icon.svg" alt="" />
          <span>series</span>
        </Wrap>
      </NavItems>
      <Avatar src="/images/avatar-default.png" alt="" />
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #000;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 50px;
  object-fit: contain;
  cursor: pointer;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  padding: 0 8px;
  font-size: 12px;
  cursor: pointer;

  img {
    height: 3vh;
    margin-right: 4px;
  }

  span {
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-weight: 400;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      height: 2px;
      background: #fff;
      left: 0;
      right: 0;
      bottom: -4px;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
    }
  }

  &:hover {
    span:after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
`;
