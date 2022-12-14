import React from "react";
import styled from "@emotion/styled";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Sendd from "../img/send.png";

const Contenedor = styled.div`
  height: 90%;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const FormS = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const LeftForm = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0%;
  }
`;
const RightForm = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const InputS = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;
const TextAreaS = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
    margin-left: 0%;
  }
`;
const Boton = styled.button`
  border: none;
  padding: 15px;
  color: white;
  background-color: darkblue;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const TitleS = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const AddresItem = styled.div`
  display: flex;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const IconS = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const TextS = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const Contact = () => {
  return (
    <Contenedor>
      <Wrapper>
        <FormContainer>
          <TitleS>
            Questions? <br />
            Let's Get in Touch
          </TitleS>
          <FormS>
            <LeftForm>
              <InputS placeholder="Your Name" />
              <InputS placeholder="Your Email" />
              <InputS placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextAreaS placeholder="Your Message"></TextAreaS>
              <Boton>Send</Boton>
            </RightForm>
          </FormS>
        </FormContainer>
        <AddressContainer>
          <AddresItem>
            <IconS src={Map} />
            <TextS>Riobamba,Ecuador</TextS>
          </AddresItem>
          <AddresItem>
            <IconS src={Phone} />
            <TextS>+593 98 461 2108</TextS>
            <TextS>+593 18 231 4158</TextS>
          </AddresItem>{" "}
          <AddresItem>
            <IconS src={Sendd} />
            <TextS>wilson-lluilema@correo.com</TextS>
            <TextS>odin_007@correo.com</TextS>
          </AddresItem>
        </AddressContainer>
      </Wrapper>
    </Contenedor>
  );
};

export default Contact;
