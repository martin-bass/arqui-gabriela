import { Stack,Text } from '@chakra-ui/react';


function Footer() {
  return (
    <Stack
      p={4}
      w={"full"}
      display={"flex"}
      justifyContent={'end'}
     
      borderTop={"1px solid #000"}
      bgColor={"white"}
      zIndex={10}
    >
      <Text fontSize={24}>Contacto: mgyapur@gmail.com</Text>
    </Stack>
  )
}

export default Footer;