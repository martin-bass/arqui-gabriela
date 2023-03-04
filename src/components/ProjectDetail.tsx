import {
  Stack,
  VStack,
  Text,
  Flex,
  Box,
  Link,
  IconButton,
} from "@chakra-ui/react";

//mock
import { Proyectos } from "../mock/types";
import ArrayDeProyectos from "../mock/Poyectos";

//Icons
import { AiOutlineRollback } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";

//Components
import Gallery from "../components/Gallery";

export interface Props {
  params: { url?: string };
}

function ProjectDetail({ params }: Props) {
  const projectFound: Proyectos | any = ArrayDeProyectos.Projects.find(
    (proj) => {
      if (proj.url === params.url) {
        return proj;
      }
    }
  );

  return (
    <Stack>
      <Box
        marginTop={100}
        width={"full"}
        display="flex"
        justifyContent={"end"}
        paddingRight={10}
      >
        <Link href="/projects" style={{ textDecoration: "none" }}>
          <IconButton
            aria-label="Search database"
            color={'white'}
            bgColor={'black'}
            _hover={{backgroundColor:'grey'}}
            icon={<RiArrowGoBackFill />}
          />
        </Link>
      </Box>
      <VStack alignItems={"start"} px={10} pb={6} spacing={2}>
        <Flex whiteSpace={"break-spaces"}>
          <Text fontWeight={"bold"}>Obra: </Text>
          <Text>{projectFound?.title}</Text>
        </Flex>
        <Flex whiteSpace={"break-spaces"}>
          <Text fontWeight={"bold"}>Fecha: </Text>
          <Text>{projectFound?.fecha}</Text>
        </Flex>
        <Flex whiteSpace={"break-spaces"}>
          <Text fontWeight={"bold"}>Descripción: </Text>
          <Text>{projectFound?.description}</Text>
        </Flex>
      </VStack>
      <Gallery projectFound={projectFound} />
    </Stack>
  );
}

export default ProjectDetail;
