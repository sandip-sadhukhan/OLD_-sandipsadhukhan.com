import data from "@/data";
import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import TechStackCard from "./tech-stack-card";

const TechStacks = () => {
  const cardBgColor = useColorModeValue("primary.50", "primary.700");
  return (
    <Box
      p={8}
      maxW="container.lg"
      mx="auto"
      textAlign="center"
      bg={cardBgColor}
      rounded="md"
      shadow="xs"
      mb={10}
    >
      <Heading
        as="h2"
        textTransform="uppercase"
        size={{ base: "md", md: "lg" }}
        letterSpacing="wide"
        fontWeight={600}
        mb={{ base: 10, md: 16 }}
      >
        {data.techStacks.title}
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX={10}
        spacingY={{ base: 10, md: 16 }}
      >
        {data.techStacks.cards.map((card, index) => (
          <GridItem key={index}>
            <TechStackCard {...card} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TechStacks;
