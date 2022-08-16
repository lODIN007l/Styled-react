import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
const Contenedor = styled.div`
  height: 100vh;
  /* background-color: red; */
`;

function App() {
  return (
    <Contenedor>
      <Navbar />
    </Contenedor>
  );
}

export default App;
