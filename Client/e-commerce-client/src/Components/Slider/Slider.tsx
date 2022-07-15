import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import * as S from "./Styles";
import { Direction } from "./Styles";
import { sliderItems } from "../../data";

type Props = {};

const Slider = (props: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction: Direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <S.Container>
      <S.Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </S.Arrow>
      <S.Wrapper slideIndex={slideIndex}>
        {sliderItems.map(({ id, title, image, desc, color, bg }) => (
          <S.Slide color={color} bg={bg} key={id}>
            <S.ImageContainer>
              <S.Image src={image} />
            </S.ImageContainer>
            <S.InfoContainer>
              <S.Title>{title}</S.Title>
              <S.Description>{desc}</S.Description>
              <S.Button>SHOW NOW</S.Button>
            </S.InfoContainer>
          </S.Slide>
        ))}
      </S.Wrapper>
      <S.Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </S.Arrow>
    </S.Container>
  );
};

export default Slider;
