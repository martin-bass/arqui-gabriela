import {
  Stack,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

//Masonry
import Masonry from "react-masonry-css";
import "../styles/Masonry.css";

import { Proyectos, Fotos } from "../mock/types";
import { useState } from "react";

interface Props {
  projectFound: Proyectos;
}

function Gallery({ projectFound }: Props) {
  const fotos: Fotos[] | any = projectFound.fotos;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 2,
    500: 1,
  };

  const [imgSelect, setImgSelect] = useState();

  const handleSelect = (id: number) => {
    onOpen();

    const select = fotos.find((p: any) => p.id === id);
    setImgSelect(select?.url);
  };

  return (
    <Stack w={"1440px"} px={10}>
      <Stack>
        <Text>Gallery</Text>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {fotos?.map((f: any) => (
            <Image
              key={f.id}
              src={f.url}
              boxSize={250}
              h={"auto"}
              margin={4}
              onClick={() => handleSelect(f.id)}
              cursor="pointer"
            />
          ))}
        </Masonry>
        {/* Modal */}
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent 
          p={4} 
          top={'30px'}
          //w={'auto'}
          >
            <ModalCloseButton />
            <ModalBody >
              <Image 
              src={imgSelect} 
              //maxH={"700px"} 
              //w={"auto"} 
              h={'auto'}
              //minW={'500px'}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* Fin Modal */}
      </Stack>
    </Stack>
  );
}

export default Gallery;
