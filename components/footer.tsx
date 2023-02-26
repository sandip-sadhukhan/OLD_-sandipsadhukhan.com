import data from "@/data";
import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack py={5}>
      <Text>
        {new Date().getFullYear()} &copy; {data.footer.text}.
      </Text>
    </HStack>
  );
};

export default Footer;
