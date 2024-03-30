"use client"
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from "next/image";

// Importa el SVG del logo de JavaScript
import JavaScriptLogo from '../../../../../assets/images/node-js.svg';

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
    transform: translateY(-30px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  scale: 0.7;
  position: absolute;
  bottom: -110%;
  left: 10%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${floatAnimation} 5s ease-in-out infinite;
  @media screen and (max-width: 1600px) {
    top: 10%;
    left: 5%;
    scale: 0.5;
  }
  @media screen and (max-width: 1279px) {
    top: -10%;
    left: 0%;
    scale: 0.5;
  }
  @media screen and (max-width: 1023px) {
    top: 30%;
    left: 0%;
    scale: 0.5;
  }
  @media screen and (max-width: 990px) {
    top: 3%;
    left: -8%;
    scale: 0.5;
  }
  @media screen and (max-width: 875px) {
    display: none
  }
`;



const JavaScriptIcon = () => {
  return (
    <Wrapper>
      <Image src={JavaScriptLogo} alt="JavaScript Logo"  height={150}/>
    </Wrapper>
  );
};

export default JavaScriptIcon;
