import React, { useEffect } from "react";
import styled from "styled-components";
import db from "../firebase.js";
import CarouselSlider from "./CarouselSlider.js";
import Channels from "./Channels.js";
import Movies from "./Movies.js";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log(tempMovies);
      dispatch(setMovies(tempMovies));
    });
  }, []);
  return (
    <Container>
      <CarouselSlider />
      <Channels />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 15vh);
  max-width: 100vw;
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
