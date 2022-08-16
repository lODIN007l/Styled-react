import React from "react";
import styled from "@emotion/styled";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  /* background-color: #000000; */
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;

  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff97af;
  border-radius: 50%;
  /* opacity: 0.7; */
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;

  animation: cricle 25s linear alternate infinite;

  @keyframes cricle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Rectangle = styled.div`
  width: 50px;
  height: 100px;
  background-color: #669966;

  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;

  animation: rectanglee 25s linear alternate infinite;

  @keyframes rectanglee {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const AnimatedShape = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rectangle />
    </>
  );
};

export default AnimatedShape;
