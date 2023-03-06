import { HStack, Text, Link } from "@chakra-ui/react";

function NavBar() {
  return (
    <HStack
      py={4}
      px={28}
      w={"full"}
      display={"flex"}
      justifyContent={"space-between"}
      position={"fixed"}
      bgColor={"white"}
      zIndex="overlay"
    >
      <Link href="/projects" style={{ textDecoration: "none" }}>
        <Text
          fontSize={20}
          paddingLeft={12}
          _hover={{ color: "#279127" }}
          casing="uppercase"
        >
          Proyectos
        </Text>
      </Link>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Text
          casing="uppercase"
          fontSize={20}
          fontWeight={"bold"}
          paddingRight={12}
          _hover={{ color: "#279127" }}
        >
          ARQ Gabriela Yapur
        </Text>
      </Link>
    </HStack>
  );
}

export default NavBar;

// import React, { ReactNode } from "react";
// import {
//   IconButton,
//   Box,
//   CloseButton,
//   Flex,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   Text,
//   useDisclosure,
//   BoxProps,
//   FlexProps,
// } from "@chakra-ui/react";
// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
// } from "react-icons/fi";
// import { IconType } from "react-icons";
// import { ReactText } from "react";

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }

// const LinkItems: Array<LinkItemProps> = [
//   { name: "Home", icon: FiHome },
//   { name: "Trending", icon: FiTrendingUp },
//   { name: "Explore", icon: FiCompass },
//   { name: "Favourites", icon: FiStar },
//   { name: "Settings", icon: FiSettings },
// ];

// export default function SimpleSidebar({ children }: { children: ReactNode }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <Box  bg={useColorModeValue("gray.100", "gray.900")}>
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: "none", md: "block" }}
//       />
//       <Drawer
//         autoFocus={false}
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full"
//       >
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
//       <Box ml={{ base: 0, md: 60 }} >
//         {children}
//       </Box>
//     </Box>
//   );
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

// const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//   return (
//     <Box
//       bg={useColorModeValue("white", "gray.900")}
//       borderRight="1px"
//       borderRightColor={useColorModeValue("gray.200", "gray.700")}
//       w={{ base: "full", md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}
//     >
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize={20} fontWeight="bold">
//           Gabriela Yapur
//         </Text>
//         <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
// const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
//   return (
//     <Link
//       href="#"
//       style={{ textDecoration: "none" }}
//       _focus={{ boxShadow: "none" }}
//     >
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: "cyan.400",
//           color: "white",
//         }}
//         {...rest}
//       >
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: "white",
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }

// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue("white", "gray.900")}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue("gray.200", "gray.700")}
//       justifyContent="flex-start"
//       {...rest}
//     >
//       <IconButton
//         variant="outline"
//         onClick={onOpen}
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text fontSize={20} fontWeight="bold">
//         Gabriela Yapur
//       </Text>
//     </Flex>
//   );
// };
