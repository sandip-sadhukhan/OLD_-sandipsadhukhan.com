import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import TechStacks from "@/components/tech-stacks";
import { Heading, Button, Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Header />
        <HeroSection />
        <TechStacks />
      </Container>
      <Projects />
    </>
  );
};

export default Home;
