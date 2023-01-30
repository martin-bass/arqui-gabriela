import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

//Chakra UI
import { ChakraProvider, Container } from "@chakra-ui/react";

//Components
import NavBar from "../src/components/NavBar";

//Views
import Home from "./views/Home";
import Projects from "./views/Projects";

function App() {
  return (
    <ChakraProvider>
      <Router>
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
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
