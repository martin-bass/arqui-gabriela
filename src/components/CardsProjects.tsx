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
  Box,
  VStack,
  Flex,
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
    <VStack
      //variant={"outline"}
      //h={"500px"}
      w={"600px"}
      paddingBottom={10}
      cursor="pointer"
      //bgColor={"#0A0A0A"}
      color={"whiteAlpha.900"}
      display="flex"
    >
      <Flex w="full" justifyContent={"start"}>
        <Text
          paddingLeft={12}
          fontSize={16}
          _hover={{ color: "#35f035" }}
          casing="uppercase"
        >
          {project.title}
        </Text>
      </Flex>
      <Image
        className="imgCard"
        src={project.portada}
        objectFit="cover"
        boxSize={"500px"}
        margin={"0px !important"}
      />
    </VStack>
  );
}

function CardsProjects() {
  const proyectos = Projects.Projects;

  return (
    <Stack
      w={"full"}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
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
