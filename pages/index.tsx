import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import TechStacks from "@/components/tech-stacks";
import { Heading, Button, Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW="container.xl">
      <Header />
      <HeroSection />
      <TechStacks />
    </Container>
  );
};

export default Home;
