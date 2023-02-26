import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { Heading, Button, Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW="container.xl">
      <Header />
      <HeroSection />
    </Container>
  );
};

export default Home;
