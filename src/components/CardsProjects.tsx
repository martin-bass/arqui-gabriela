import { Stack, Image, Text, Link, VStack, Flex } from "@chakra-ui/react";

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
      paddingBottom={10}
      cursor="pointer"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image
        className="imgCard"
        src={project.portada}
        objectFit="cover"
        maxH={"500px"}
        width={"800px"}
        margin={"0px !important"}
      />
      <Flex w="full">
        <Text
          w={"full"}
          paddingLeft={12}
          fontSize={16}
          _hover={{ color: "#A0AEC0" }}
          casing="uppercase"
          textAlign={"center"}
        >
          {project.obra}
        </Text>
      </Flex>
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
      <Flex direction={"column"} align="center">
        {proyectos.map((project) => (
          <Stack key={project.id}>
            <Link
              href={`/projects/${project.url}`}
              style={{ textDecoration: "none" }}
            >
              <CardProject project={project} />
            </Link>
          </Stack>
        ))}
      </Flex>
    </Stack>
  );
}

export default CardsProjects;
