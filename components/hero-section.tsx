import {
  Center,
  Heading,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
  VStack,
  Button,
  Link,
  Highlight,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeroSection = () => {
  const textColor = useColorModeValue("gray.800", "gray.200");
  const githubHoverBgColor = useColorModeValue("gray.700", "gray.300");
  const linkedinHoverBgColor = useColorModeValue(
    "linkedin.700",
    "linkedin.300"
  );

  return (
    <VStack my={16} textAlign="center">
      <Heading
        as="h1"
        size="3xl"
        fontSize="6xl"
        fontWeight={800}
        color={textColor}
        mb={3}
      >
        Sandip Sadhukhan
      </Heading>
      <Text fontSize="xl" fontWeight={400}>
        <Highlight
          query="Full stack web developer"
          styles={{ px: "2", py: "1", rounded: "full", bg: "primary.50" }}
        >
          Full stack web developer at Codeword Tech.
        </Highlight>
      </Text>
      <Text fontSize="xl" fontWeight={400}>
        I make high performance ecommerce websites and Shopify apps.
      </Text>
      <HStack py={5} justify="center" align="center" spacing={1}>
        <Link href="https://github.com/sandippakhanna" isExternal>
          <IconButton
            variant="link"
            icon={<BsGithub />}
            aria-label="Github Link"
            color="gray.500"
            _hover={{ color: githubHoverBgColor }}
            fontSize="3xl"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/sandipsadhukhan" isExternal>
          <IconButton
            variant="link"
            icon={<BsLinkedin />}
            aria-label="Linkedin Link"
            color="linkedin.500"
            _hover={{ color: linkedinHoverBgColor }}
            fontSize="3xl"
          />
        </Link>
        <Link href="mailto:sandip.sendme@gmail.com" textDecor="none">
          <Button size="sm" mb={1}>
            Let&apos;s Chat
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default HeroSection;
