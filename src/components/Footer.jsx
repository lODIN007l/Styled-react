import styled from "@emotion/styled";
import React from "react";

const Contenedor = styled.div`
  height: 10%;
  background-color: #652ed3;
  color: lightgray;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
  margin-right: 20px;
`;
const Copyright = styled.span``;

const Footer = () => {
  return (
    <Contenedor>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Comunnity</ListItem>
        </List>
        <Copyright>Wilson Lluilema -2022</Copyright>
      </Wrapper>
    </Contenedor>
  );
};

export default Footer;
