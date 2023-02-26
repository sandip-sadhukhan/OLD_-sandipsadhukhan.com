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
        size="lg"
        letterSpacing="wide"
        fontWeight={600}
        mb={16}
      >
        {data.techStacks.title}
      </Heading>
      <SimpleGrid columns={2} spacingX={10} spacingY={16}>
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
