import styled from "@emotion/styled";
import React from "react";
import Serach from "../img/search.png";
const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
  box-shadow: 5px 1px 28px 27px rgba(0, 0, 0, 0.11);
`;

const Imagen = styled.img`
  width: 20px;
`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;

const MiniCard = () => {
  return (
    <Container>
      <Imagen src={Serach} />
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
    </Container>
  );
};

export default MiniCard;
