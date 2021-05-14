import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <ContentLogoOne src="/images/cta-logo-one.svg" alt="" />
        <SignUp>
          <span>Get all there</span>
        </SignUp>
        <Description>
          Star on Disney+ brings you more. Hundreds more TV series & movies,
          plus thousands of hours of drama, suspense, humour and thrills. Enjoy
          Star as part of your Disney+ subscription.
        </Description>
        <ContentLogoTwo src="/images/cta-logo-two.png" alt="" />
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.7;
  }
`;

const Content = styled.div`
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentLogoOne = styled.img`
  width: 90%;
  align-items: center;
  margin-bottom: 12px;
`;

const SignUp = styled.div`
  background: #0063e5;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 4px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1px;
`;

const Description = styled.div`
  margin-top: 12px;
  line-height: 1.4;
  letter-spacing: 1px;
  text-align: center;
  font-size: 12px;
`;

const ContentLogoTwo = styled.img`
  margin-top: 12px;
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
