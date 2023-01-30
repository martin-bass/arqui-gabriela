//import React from "react";
import { Stack, Text, Image } from "@chakra-ui/react";

import { Masonry } from "react-masonry";

import Bernal from "../mock/Bernal";


function Gallery() {
  const fotos = Bernal.Bernal;

  return (
    <Stack w="full" pt={'69px'} px={10}>
      <Stack w={"full"}>
        <Text>Gallery</Text>
        <Masonry gutter={20} >
          {fotos.map((f) => (
            <Image key={f.id} src={f.url} boxSize={250} h={'auto'}/>
          ))}
        </Masonry>
      </Stack>
    </Stack>
  );
}

export default Gallery;
