import styled from "@emotion/styled";
import React from "react";
import PriceCard from "./PriceCard";

const Contenedor = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Price = () => {
  return (
    <Contenedor>
      <PriceCard price="10 " type="Basic Plan " />
      <PriceCard price="24 " type="Premium Plan " />
      <PriceCard price="100 " type="Advanced Plan " />
    </Contenedor>
  );
};
11;
export default Price;
