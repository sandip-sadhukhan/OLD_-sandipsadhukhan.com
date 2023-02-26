import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import TechStacks from "@/components/tech-stacks";
import Testimonials from "@/components/testimonials";
import data from "@/data";
import { Heading, Button, Container } from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>{data.site.title}</title>
        <meta name="description" content={data.site.description} />
        <link
          rel="shortcut icon"
          href={data.site.favicon}
          type="image/x-icon"
        />
      </Head>
      <Container maxW="container.xl">
        <Header />
        <HeroSection />
        <TechStacks />
      </Container>
      <Projects />
      <Container maxW="container.xl">
        <Testimonials />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
