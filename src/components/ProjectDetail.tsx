
import { Stack, VStack, Text } from "@chakra-ui/react";

//mock
import { Proyectos } from "../mock/types";
import ArrayDeProyectos from "../mock/Poyectos";

//Components
import Gallery from "../components/Gallery";
import { ReactElement } from "react";

export interface Props {
  params: { url?: string }
};


    

function ProjectDetail({ params }: Props) {
    const projectFound: Proyectos | any = ArrayDeProyectos.Projects.find((proj) => {
        if (proj.url === params.url) {
          return proj;
        }
      });

  console.log(projectFound?.fotos);
  return (
    <Stack>
      <VStack pt={20} alignItems={"start"}>
        <Text>Titulo de la Obra: {projectFound?.title}</Text>
        <Text>Fecha de la obra: {projectFound?.fecha}</Text>
      </VStack>
        <Gallery projectFound={projectFound}/>
    </Stack>
  );
}

export default ProjectDetail;
