//import React from "react";
import { Stack, Text, Image } from "@chakra-ui/react";

import { Masonry } from "react-masonry";

import Bernal from "../mock/Bernal";
import { Fotos } from "../mock/types";

interface Bernal {}

function Gallery() {
  const fotos: Fotos[] = Bernal.Bernal;
  // console.log(fotos);

  return (
    <Stack w={"1440px"} pt={"69px"} px={10}>
      <Stack >
        <Text>Gallery</Text>
        <Masonry gutter={20}>
          {fotos.map((f) => (
            <Image key={f.id} src={f.url} boxSize={250} h={"auto"} />
          ))}
        </Masonry>
      </Stack>
    </Stack>
  );
}

export default Gallery;
