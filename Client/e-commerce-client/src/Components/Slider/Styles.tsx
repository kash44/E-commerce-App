import styled from "styled-components";
import { mobile } from "../../Utils/responsive";

export type SliderProps = {
  direction: string;
};

export type WrapperProps = {
  slideIndex: number;
};

export type SlideProps = {
  bg: string;
  color: string;
};

export type Direction = "left" | "right";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

export const Arrow = styled.div<SliderProps>`
  // If child is position absolute, parent needs to be position relative
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const Slide = styled.div<SlideProps>`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Image = styled.img`
  height: 80%;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
