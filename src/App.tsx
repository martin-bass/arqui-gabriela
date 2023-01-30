import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

//Chakra UI
import { ChakraProvider, Container } from "@chakra-ui/react";

//Components
import NavBar from "../src/components/NavBar";
import Footer from "./components/Footer";

//Views
import Home from "./views/Home";
import Projects from "./views/Projects";
import Project from "./views/Project";

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
          maxW={"1440px"}
        >
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Projects />} path="/projects" />
            <Route element={<Project />} path="/projects/:url" />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
