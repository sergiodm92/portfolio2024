"use client"
import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  scale: 0.7;
  position: absolute;
  bottom:-20%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${rotateAnimation} 20s ease-in-out infinite;
  @media screen and (max-width: 1600px) {
    bottom: 10%;
    left: 10%;
    scale: 0.5;
  }
  @media screen and (max-width: 1279px) {
    bottom: -10%;
    left: 5%;
    scale: 0.5;
  }
  @media screen and (max-width: 1023px) {
    bottom: 28%;
    left: 5%;
    scale: 0.5;
  }
  @media screen and (max-width: 990px) {
    bottom: 0%;
    left: 0%;
    scale: 0.5;
  }
  @media screen and (max-width: 875px) {
    display: none
  }
`;

const Circle = styled.div`
  height: 1rem;
  width: 1rem;
  background: #61dbfb;
  border-radius: 50%;
  position: relative;
`;

const Eclipse = styled.div`
  height: 10rem;
  width: 4rem;
  border: 0.4rem solid #61dbfb;
  border-radius: 50%;
  position: absolute;

  &.eclipse1 {
    transform: rotate(32deg);
  }

  &.eclipse2 {
    transform: rotate(-32deg);
  }

  &.eclipse3 {
    transform: rotate(90deg);
  }
`;

const ReactIcon = () => {
  return (
    <Wrapper>
      <Circle />
      <Eclipse className="eclipse1" />
      <Eclipse className="eclipse2" />
      <Eclipse className="eclipse3" />
    </Wrapper>
  );
};

export default ReactIcon;
