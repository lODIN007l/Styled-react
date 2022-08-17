import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Services from "./components/Services";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
  clip-path: polygon(99% 0%, 61% 0%, 48% 100%, 99% 100%);
  background-color: crimson;
`;
const FeaturesShape = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  clip-path: polygon(0% 0%, 48% 0%, 33% 100%, 0% 100%);
  background-color: pink;
`;
const ServicesShape = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
  background-color: #f78397;
`;
const PriceShape = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

function App() {
  const smallScreen = window.screen.width <= 412 ? true : false;

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
      <Contenedor>
        <Services />
        {!smallScreen ? <ServicesShape /> : ""}
      </Contenedor>
      <Contenedor>
        <Price />
        <PriceShape />
      </Contenedor>
      <Contenedor>
        <Contact />
        <Footer />
      </Contenedor>
    </>
  );
}

export default App;
