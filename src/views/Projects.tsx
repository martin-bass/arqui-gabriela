import { Stack } from "@chakra-ui/react";

//Components
import CardsProjects from "../components/CardsProjects";
//import Gallery from "../components/Gallery";

function Projects() {
  return (
    <Stack pt={100} px={5} w={"full"}>
      <CardsProjects />
    </Stack>
  );
}

export default Projects;
