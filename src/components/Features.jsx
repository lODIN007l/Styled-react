import React from "react";
import styled from "@emotion/styled";
import Phone from "../img/handApp.png";
import AnimatedShape from "./AnimatedShape";
const Contenedor = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Imagen = styled.img`
  width: 80%;
`;
const Tittle = styled.span`
  font-size: 60px;
`;
const SubTittle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: -30xp;
`;
const Description = styled.span`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Boton = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  border-radius: 20px;
  font-size: 20px;
  color: white;
  margin-top: 20px;
  cursor: pointer;
`;

const Features = () => {
  return (
    <Contenedor>
      <Left>
        <Imagen src={Phone} />
      </Left>
      <Right>
        <Tittle>
          <b>Good</b> Desing <br />
          <b>Good</b> Bussiness
        </Tittle>
        <SubTittle>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          dolorum dolorem
        </SubTittle>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          provident eos perferendis cum obcaecati consectetur voluptatibus dolor
          molestiae autem, illum aliquid facere voluptate numquam ea blanditiis
          cumque inventore! Rerum, ratione.
        </Description>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          sapiente mollitia exercitationem earum alias excepturi consequatur
          dicta iste voluptatem harum fuga placeat odit. Excepturi esse natus
          totam optio aut! Tempore?
        </Description>
        <Boton>Learn More</Boton>
      </Right>
      <AnimatedShape />
    </Contenedor>
  );
};

export default Features;
