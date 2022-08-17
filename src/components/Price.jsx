import styled from "@emotion/styled";
import React from "react";
import PriceCard from "./PriceCard";

const Contenedor = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Price = () => {
  return (
    <Contenedor>
      <PriceCard />
    </Contenedor>
  );
};

export default Price;
