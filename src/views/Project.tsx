import { Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import Gallery from '../components/Gallery';

function Project() {
  const params = useParams();
  console.log(params);

  return (
    <Stack w={'full'} h={'100vh'} px={4}>
      <Text margin={"auto"} fontSize={24} paddingTop={16}>Proyecto</Text>
      <Gallery />
    </Stack>
  );
}

export default Project;
