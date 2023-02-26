import {
  Avatar,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import React from "react";

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justify="space-between" align="center" py={4}>
      <Avatar
        src="/sandip-sadhukhan.jpg"
        name="Sandip Sadhukhan"
        _hover={{ transform: "rotate(360deg)" }}
        transitionDuration="0.5s"
        borderWidth="medium"
        borderColor={colorMode === "light" ? "primary.500" : "primary.200"}
        p={0.5}
        size="md"
        cursor="pointer"
      />
      <Tooltip label="Toggle Theme">
        <IconButton
          icon={
            colorMode === "light" ? (
              <BsFillMoonFill fontSize="25px" />
            ) : (
              <BsFillSunFill fontSize="25px" />
            )
          }
          aria-label="Toggle Theme"
          variant="link"
          onClick={toggleColorMode}
        />
      </Tooltip>
    </HStack>
  );
};

export default Header;
