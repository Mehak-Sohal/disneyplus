import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
};

export default CarouselSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul > li > button {
    &:before {
      color: #f9f9f9;
      font-size
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  height: 35vh;
  width: 90%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 3px solid transparent; //create space between images
    box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px,
      rgb(0 0 0 /75%) 0px 16px 10px -10px;
    transition-duration: 500ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
