import React from "react";
import { Stack, Text, Grid, GridItem, Image, Box } from "@chakra-ui/react";

import { Masonry } from "react-masonry";

import Bernal from "../mock/Bernal";


function Gallery() {
  const fotos = Bernal.Bernal;
  console.log(Bernal.Bernal);

  return (
    <Stack w="full" pl={"250px"} pr={4}>
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
