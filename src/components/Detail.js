import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import db from "../firebase";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Detail = () => {
  const history = useHistory();
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
          history.push("/");
        }
      });
  }, [id]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const playTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.description)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => setError("Sorry, No trailer found!"));
    }
  };

  const closeError = () => {
    setError("");
  };

  return (
    <Container>
      {movie && (
        <>
          <BackgroundImage>
            <img src={movie.backgroundImg} alt="" />
          </BackgroundImage>
          <TitleImage>
            <img src={movie.titleImg} alt="" />
          </TitleImage>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton onClick={() => playTrailer(movie)}>
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
          {error && (
            <Error>
              {error} <span onClick={closeError}>X</span>
            </Error>
          )}
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
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
  opacity: 0.6;

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
    object-fit: contain;
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

const Error = styled.div`
  margin-top: 18px;
  background-color: #cfcdcc;
  color: red;
  border-radius: 4px;
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;

  span {
    cursor: pointer;
    border: 1px solid red;
    border-radius: 4px;
    background: red;
    color: #f9f9f9;
    padding: 0px 4px;
  }
`;
