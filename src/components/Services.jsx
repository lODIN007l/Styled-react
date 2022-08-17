import styled from "@emotion/styled";
import { useState } from "react";
import Woman from "../img/woman.png";
import MiniCard from "./MiniCard";
import IconoImagen from "../img/play.png";
const Contenedor = styled.div`
  display: flex;
  height: 100%;
`;
const Left = styled.div`
  width: 50%;
  position: relative;
`;
const Right = styled.div`
  width: 50%;
`;
const Imagen = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 0px;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  /* margin-left: 20%; */
`;

const Title = styled.h1``;
const Descripcion = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardComponente = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Boton = styled.button`
  width: 200px;
  height: 70px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  margin-left: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icono = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Videoo = styled.iframe`
  display: ${(props) => !props.open && "none"};
  height: 400px;
  width: 750px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;
const Services = () => {
  const [open, setOpen] = useState(false);

  return (
    <Contenedor>
      <Left>
        <Imagen open={open} src={Woman} />
        <Videoo
          autoPlay
          open={open}
          src="https://www.youtube.com/embed/rnrK3zxsKdA"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start </Title>
          <Descripcion>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime
            doloremque quisquam dolor ut facere eius doloribus quam sequi
            similique quaerat quos rerum quas expedita, assumenda corrupti
            veniam cupiditate placeat.
          </Descripcion>
          <CardComponente>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
          </CardComponente>
          <Boton onClick={() => setOpen(true)}>
            <Icono src={IconoImagen} />
            How its Works
          </Boton>
        </Wrapper>
      </Right>
    </Contenedor>
  );
};

export default Services;
