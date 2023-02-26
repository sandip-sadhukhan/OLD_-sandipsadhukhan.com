import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import React, { useState } from "react";
import data from "@/data";

const Testimonials = () => {
  const [testimonialPos, setTestimonialPos] = useState(0);

  const prevTestimonial = () => {
    if (testimonialPos === 0) {
      setTestimonialPos(data.testimonials.cards.length - 1);
    } else {
      setTestimonialPos((value) => value - 1);
    }
  };
  const nextTestimonial = () => {
    if (testimonialPos === data.testimonials.cards.length - 1) {
      setTestimonialPos(0);
    } else {
      setTestimonialPos((value) => value + 1);
    }
  };

  return (
    <VStack mb={{ base: 10, md: 20 }}>
      <Heading
        as="h2"
        textTransform="uppercase"
        size={{ base: "md", md: "lg" }}
        letterSpacing="wide"
        fontWeight={600}
        textAlign="center"
        mb={10}
      >
        {data.testimonials.title}
      </Heading>
      <HStack minH="250px" justify="space-between" align="center" w="full">
        <VStack h="full" justify="center">
          <IconButton
            icon={<FaAngleLeft fontSize="30px" />}
            aria-label="next"
            variant="ghost"
            size="lg"
            onClick={prevTestimonial}
          />
        </VStack>
        <Container maxW="2xl" flex={1}>
          <VStack spacing="5">
            <Text fontSize={{ base: "md", md: "xl" }} textAlign="center">
              {data.testimonials.cards[testimonialPos].body}
            </Text>
            <HStack
              justify="center"
              align="center"
              w="full"
              flexDir={{ base: "column", md: "row" }}
              gap={3}
            >
              <Avatar
                size="md"
                src={data.testimonials.cards[testimonialPos].image}
                name="Imran Ali"
              />
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                fontWeight="semibold"
                textAlign="center"
              >
                {data.testimonials.cards[testimonialPos].name},{" "}
                {data.testimonials.cards[testimonialPos].designation}
              </Text>
            </HStack>
          </VStack>
        </Container>
        <VStack h="full" justify="center">
          <IconButton
            icon={<FaAngleRight fontSize="30px" />}
            aria-label="next"
            variant="ghost"
            size="lg"
            onClick={nextTestimonial}
          />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Testimonials;
