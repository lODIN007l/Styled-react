import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
const Contenedor = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  /* background-color: red; */
`;
const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  clip-path: polygon(99% 0%, 61% 0%, 48% 100%, 99% 99%);
  background-color: crimson;
`;
const FeaturesShape = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  clip-path: polygon(0% 0%, 48% 0%, 33% 100%, 0% 99%);
  background-color: pink;
`;

function App() {
  return (
    <>
      <Contenedor>
        <Navbar />
        <Intro />
        <IntroShape />
      </Contenedor>
      <Contenedor>
        <Features />
        <FeaturesShape />
      </Contenedor>
    </>
  );
}

export default App;
