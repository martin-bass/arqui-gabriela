import {
  Grid,
  GridItem,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Image,
  Text,
  Link
} from "@chakra-ui/react";

import { Proyectos } from "../mock/types";

//FotosPortada
import bernal from "../assets/Bernal/12.webp";
import laplata from "../assets/LaPlata/10.webp";
import mirna from "../assets/Mirna/5.webp";
import panaderia from "../assets/Panaderia/7.webp";

const proyectos: Proyectos[] = [
  {
    id: 1,
    title: "Bernal",
    portada: bernal,
    url: "bernal",
  },
  {
    id: 2,
    title: "La Plata",
    portada: laplata,
    url: "laplata",
  },
  {
    id: 3,
    title: "Mirna",
    portada: mirna,
    url: "mirna",
  },
  {
    id: 4,
    title: "Panadería",
    portada: panaderia,
    url: "panaderia",
  },
];

type Props = {
  project: Proyectos;
};

function CardProject({ project }: Props) {
  return (
    <Card
      variant={"outline"}
      h={"500px"}
      p={2}
      paddingBottom={4}
      cursor="pointer"
    >
      <CardHeader>
        <Text fontSize={24}>{project.title}</Text>
      </CardHeader>
      <CardBody p={0} margin={"auto"} overflow="hidden" borderRadius="10px">
        <Image src={project.portada} objectFit="cover" boxSize={"500px"} />
      </CardBody>
    </Card>
  );
}

function CardsProjects() {
  return (
    <Stack w={"full"} p={5}>
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        {proyectos.map((project) => (
          <GridItem key={project.id}>
            <Link href={`/projects/${project.url}`} style={{textDecoration:'none'}}>
              <CardProject project={project} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default CardsProjects;
