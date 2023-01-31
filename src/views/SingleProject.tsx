import { Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

//Components
import ProjectDetail from "../components/ProjectDetail";

function SingleProject() {
  const params = useParams();

  return (
    <Stack w={"full"} h={"100vh"} px={4}>
      <ProjectDetail params={params}/>
    </Stack>
  );
}

export default SingleProject;
