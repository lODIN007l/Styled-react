import React from "react";
import styled from "@emotion/styled";
import Woman from "../img/mujer.png";
import AnimatedShape from "./AnimatedShape";
const Contenedor = styled.div`
  height: calc(100vh - 50px);
  margin-top: 20px;
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Rigth = styled.div`
  width: 40%;
  align-items: center;
  justify-content: center;

  display: flex;
`;
const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;
const Descripcion = styled.p`
  width: 60%;
  font-size: 20px;
`;
const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;
const Boton = styled.button`
  padding: 15px;
  margin-right: 10px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.div`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.div`
  color: gray;
  margin-top: 5px;
`;

const Imagen = styled.img`
  width: 200%;
`;

const Intro = () => {
  return (
    <Contenedor>
      <Left>
        <Title>Adventures in creative age</Title>
        <Descripcion>
          We believe that desinging products and services in close partnership
          with our clients is the only way to have a real impact on their
        </Descripcion>
        <Info>
          <Boton>START A PROJECT</Boton>
          <Contact>
            <Phone>(+593) 98 461 2108</Phone>
            <ContactText>For any question or concert</ContactText>
          </Contact>
        </Info>
      </Left>
      <Rigth>
        <Imagen src={Woman}></Imagen>
        <AnimatedShape />
      </Rigth>
    </Contenedor>
  );
};

export default Intro;
