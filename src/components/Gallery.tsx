import React from "react";
import { Stack, Text, Grid, GridItem, Image, Box } from "@chakra-ui/react";

import { Masonry } from "react-masonry";

//Prueba fotos
import F1 from "../assets/LaPlata/B1.jpg";
import F2 from "../assets/LaPlata/B2.jpg";
import F3 from "../assets/LaPlata/C.jpg";
import F4 from "../assets/LaPlata/C2.jpg";
import F5 from "../assets/LaPlata/CO1.jpg";
import F6 from "../assets/LaPlata/CO2.jpg";
import F7 from "../assets/LaPlata/dfdf13.jpg";
import F8 from "../assets/LaPlata/planta.png";

const fotos = [
  { id: 1, foto: F1 },
  { id: 2, foto: F2 },
  { id: 3, foto: F3 },
  { id: 4, foto: F4 },
  { id: 5, foto: F5 },
  { id: 6, foto: F6 },
  { id: 7, foto: F7 },
  { id: 8, foto: F8 },
];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Snacks",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    title: "Tower",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
    title: "Tree",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
    title: "Camping Car",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

function Gallery() {
  return (
    <Stack w="full" pl={"250px"} pr={4}>
      <Stack w={"full"}>
        <Text>Gallery</Text>
        {/* <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {
            fotos.map((f) => (
                <GridItem key={f.id}>
                    <Image src={f.foto} boxSize={72}/>
                </GridItem>
            ))
        }
        </Grid> */}

        <Masonry gutter={35} enterOneAfterAnother={false}>
          {/* <Stack w={"full"}> */}

          {itemData.map((foto) => (
            <Image width={'300px'} h={'auto'} src={foto.img} alt="" />
          ))}

          {/* </Stack> */}
        </Masonry>
      </Stack>
    </Stack>
  );
}

export default Gallery;
