import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../firebase.js";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setLogout,
} from "../features/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setLogout());
      history.push("/login");
    });
  };

  return (
    <Container>
      <Logo src="/images/logo.svg" alt="" />

      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavItems>
            <Link to="/" style={{ textDecoration: "none", color: "#f9f9f9" }}>
              <Wrap>
                <img src="/images/home-icon.svg" alt="" />
                <span>Home</span>
              </Wrap>
            </Link>

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
          <Avatar onClick={signOut} src={userPhoto} alt="" />
        </>
      )}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 50px;
  max-width: 100vw;
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

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Login = styled.button`
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #f9f9f9;
  padding: 3px 8px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 500;
  cursor: pointer;
  transition: all 250ms ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
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
