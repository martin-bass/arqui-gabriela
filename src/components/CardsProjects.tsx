import {
  Grid,
  GridItem,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

//Styles
import "../styles/imgCard.css";

import { Proyectos } from "../mock/types";
import Projects from "../mock/Poyectos";

type Props = {
  project: Proyectos;
};

function CardProject({ project }: Props) {
  return (
    <Card
      variant={"outline"}
      h={"500px"}
      paddingBottom={4}
      cursor="pointer"
      boxShadow={"2xl"}
    >
      <CardHeader>
        <Text fontSize={24} fontWeight={"bold"} _hover={{ color: "#319795" }}>
          {project.title}
        </Text>
      </CardHeader>
      <CardBody p={0} margin={"auto"} overflow="hidden" borderRadius="10px">
        <Image
          className="imgCard"
          src={project.portada}
          objectFit="cover"
          boxSize={"500px"}
          border={"1px solid #A0AEC0"}
        />
      </CardBody>
    </Card>
  );
}

function CardsProjects() {
  const proyectos = Projects.Projects;

  return (
    <Stack
      w={"full"}
      p={5}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        {proyectos.map((project) => (
          <GridItem key={project.id}>
            <Link
              href={`/projects/${project.url}`}
              style={{ textDecoration: "none" }}
            >
              <CardProject project={project} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default CardsProjects;
