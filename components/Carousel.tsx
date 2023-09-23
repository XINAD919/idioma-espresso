import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Image from "next/image";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = () => {
  return (
    <CarouselProvider
    naturalSlideWidth={8}
      naturalSlideHeight={8}
      totalSlides={5}
      infinite

    >
      <Slider>
        <Slide index={0}>
          <Image
            src={"/notice.png"}
            alt={"immagen carousel"}
            width={100}
            height={125}
            style={{width:'50%', height:'100%'}}
          />
        </Slide>
        <Slide index={1}>
          <Image
            src={"/estacionamiento.jpeg"}
            alt={"immagen carousel"}
            width={100}
            height={125}
            style={{width:'100%'}}
          />
        </Slide>
        <Slide index={2}>
          <Image
            src={"/reunion1.jpeg"}
            alt={"immagen carousel"}
            width={100}
            height={125}
            style={{width:'100%'}}
          />
        </Slide>
        <Slide index={3}>
          <Image
            src={"/reunion2.jpeg"}
            alt={"immagen carousel"}
            width={100}
            height={125}
            style={{width:'100%'}}
          />
        </Slide>
        <Slide index={4}>
          <Image
            src={"/lamparas.jpeg"}
            alt={"immagen carousel"}
            width={100}
            height={125}
            style={{width:'100%'}}
          />
        </Slide>
      </Slider>
      <ButtonBack>{'<'}</ButtonBack>
      <ButtonNext>{'>'}</ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
