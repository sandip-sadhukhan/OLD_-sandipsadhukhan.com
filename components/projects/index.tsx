import data from "@/data";
import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <Box py={5} bg="primary.400" color="white" mb={10} textAlign="center">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          textTransform="uppercase"
          size="lg"
          letterSpacing="wide"
          fontWeight={600}
          mb={16}
        >
          {data.projects.title}
        </Heading>

        <SimpleGrid columns={3} gap={10}>
          {data.projects.cards.map((card, index) => (
            <GridItem key={index}>
              <ProjectCard {...card} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;
