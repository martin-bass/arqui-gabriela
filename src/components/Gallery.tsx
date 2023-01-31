import { Stack, Text, Image } from "@chakra-ui/react";

//Masonry
import Masonry from "react-masonry-css";
import '../styles/Masonry.css';

import Bernal from "../mock/Bernal";
import { Fotos, Proyectos } from "../mock/types";


interface Props {
  projectFound : Proyectos
};

function Gallery({projectFound} : Props) {
  
  const fotos = projectFound.fotos;
  console.log(projectFound.fotos);

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 2,
    500: 1
  };

  return (
    <Stack w={"1440px"} px={10}>
      <Stack>
        <Text>Gallery</Text>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {fotos?.map((f) => (
            <Image key={f.id} src={f.url} boxSize={250} h={"auto"} margin={4}/>
          ))}
        </Masonry>
      </Stack>
    </Stack>
  );
}

export default Gallery;
