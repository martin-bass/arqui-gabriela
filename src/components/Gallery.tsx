import {
  Stack,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Flex,
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
    default: 4,
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
    <Stack
      px={4}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
      display={'flex'}
      alignItems='center'
      justifyContent={'center'}
    >
      <Stack>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {fotos?.map((f: any) => (
            <Image
              key={f.id}
              className="imgCard"
              src={f.url}
              boxSize={250}
              h={"auto"}
              mx={2}
              my={4}
              onClick={() => handleSelect(f.id)}
              cursor="pointer"
              border={"1px solid #A0AEC0"}
            />
          ))}
        </Masonry>
        {/* Modal */}
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent
            p={4}
            position="relative"
            top={"20px"}
            margin={"auto"}
            minWidth={"700px"}
            w={"full"}
            height="fit-content"
          >
            <Flex
              pt={4}
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            >
              <ModalCloseButton />
              <ModalBody>
                <Image
                  src={imgSelect}
                  border={"1px solid #A0AEC0"}
                  width="auto"
                />
              </ModalBody>
            </Flex>
          </ModalContent>
        </Modal>
        {/* Fin Modal */}
      </Stack>
    </Stack>
  );
}

export default Gallery;
