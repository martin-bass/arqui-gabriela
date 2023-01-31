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
import Projects from '../mock/Poyectos';

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

  const proyectos = Projects.Projects

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
