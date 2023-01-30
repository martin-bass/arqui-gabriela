import React from "react";

//Chakra UI
import { ChakraProvider, Container } from "@chakra-ui/react";

//Components
//import NavBar from '../src/components/NavBar';
import Gallery from "../src/components/Gallery";
import SimpleSidebar from "../src/components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <SimpleSidebar />
      <Container
        minH={"100vh"}
        bgColor={"blackAlpha.200"}
        centerContent
        paddingX={0}
        w={"1440px"}
        overflowX="hidden"
        maxW={"1440px"}
      >
        {/* <NavBar /> */}

        <Gallery />
      </Container>
    </ChakraProvider>
  );
}

export default App;
