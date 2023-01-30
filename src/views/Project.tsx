import { Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function Project() {
  const params = useParams();
  console.log(params);

  return (
    <Stack w={'full'} h={'100vh'}>
      <Text margin={"auto"} fontSize={24}>Proyecto</Text>
    </Stack>
  );
}

export default Project;
