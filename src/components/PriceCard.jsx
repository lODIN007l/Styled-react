import styled from "@emotion/styled";
import React from "react";

const Contenedor = styled.div`
  padding: 20px;
  height: 440px;
  box-shadow: 5px 1px 28px 27px rgba(0, 0, 0, 0.11);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 5px;
  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  font-size: 15px;
  background-color: white;
  border-radius: 20px;
  color: crimson;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;
const Boton = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const PriceCard = ({ price, type }) => {
  return (
    <Contenedor>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type}</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ Prebuilt Website</ListItem>
        <ListItem>Premium Plugins</ListItem>
      </List>
      <Boton>Join Now</Boton>
    </Contenedor>
  );
};

export default PriceCard;
