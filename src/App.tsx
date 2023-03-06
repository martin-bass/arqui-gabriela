import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

//Chakra UI
import { ChakraProvider, Container } from "@chakra-ui/react";

//Components
import NavBar from "../src/components/NavBar";
import Footer from "./components/Footer";

//Views
import Home from "./views/Home";
import Projects from "./views/Projects";
import SingleProject from "./views/SingleProject";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Container
          minH={"100vh"}
          bgColor={"blackAlpha.200"}
          centerContent
          paddingX={0}
          w={"1440px"}
          overflowX="hidden"
          maxW={'container.xl'}
        >
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Projects />} path="/projects" />
            <Route element={<SingleProject />} path="/projects/:url" />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
