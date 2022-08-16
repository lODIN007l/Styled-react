import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const Contenedor = styled.div`
  height: 100vh;
  /* background-color: red; */
`;

function App() {
  return (
    <Contenedor>
      <Navbar />
      <Intro />
    </Contenedor>
  );
}

export default App;
