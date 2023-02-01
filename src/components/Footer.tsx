import {
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  Tooltip,
  VStack,
  Link,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Stack
      py={4}
      w={"full"}
      paddingRight={10}
      alignItems={"end"}
      borderTop={"1px solid #A0AEC0"}
      bgColor={"white"}
      zIndex={10}
    >
      <HStack>
        <Link href="https://www.instagram.com/" isExternal>
          <Tooltip label="Instagram">
            <IconButton
              aria-label={"instagram"}
              icon={<BsInstagram size={"28px"} />}
              variant={"ghost"}
              _hover={{ bgColor: "none", color: "#319795" }}
            />
          </Tooltip>
        </Link>
        <VStack alignItems={"start"} paddingLeft={2}>
          <Flex whiteSpace={"break-spaces"}>
            <Text fontSize={14} fontWeight="bold">
              Contacto:{" "}
            </Text>
            <Text fontSize={14}>mgyapur@gmail.com</Text>
          </Flex>
          <Text fontSize={14}>Buenos Aires, Argentina</Text>
        </VStack>
      </HStack>
    </Stack>
  );
}

export default Footer;
