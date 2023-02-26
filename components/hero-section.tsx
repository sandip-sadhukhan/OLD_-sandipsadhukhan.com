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
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BiDownload } from "react-icons/bi";

import data from "@/data";

const HeroSection = () => {
  const textColor = useColorModeValue("gray.800", "gray.200");
  const githubHoverBgColor = useColorModeValue("gray.700", "gray.300");
  const linkedinHoverBgColor = useColorModeValue(
    "linkedin.700",
    "linkedin.300"
  );
  const mailHoverBgColor = useColorModeValue("red.600", "red.300");

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
        {data.heroSection.name}
      </Heading>
      <Text fontSize="xl" fontWeight={400}>
        <Highlight
          query={data.heroSection.firstParagraphHighlight}
          styles={{ px: "2", py: "1", rounded: "full", bg: "primary.50" }}
        >
          {data.heroSection.firstParagraph}
        </Highlight>
      </Text>
      <Text fontSize="xl" fontWeight={400}>
        {data.heroSection.secondParagraph}
      </Text>
      <HStack py={5} justify="center" align="center" spacing={1}>
        <Tooltip label="Github" hasArrow>
          <Link href={data.heroSection.githubLink} isExternal>
            <IconButton
              variant="link"
              icon={<BsGithub />}
              aria-label="Github Link"
              color="gray.500"
              _hover={{ color: githubHoverBgColor }}
              fontSize="3xl"
            />
          </Link>
        </Tooltip>
        <Tooltip label="Linkedin" hasArrow>
          <Link href={data.heroSection.linkedinLink} isExternal>
            <IconButton
              variant="link"
              icon={<BsLinkedin />}
              aria-label="Linkedin Link"
              color="linkedin.500"
              _hover={{ color: linkedinHoverBgColor }}
              fontSize="3xl"
            />
          </Link>
        </Tooltip>
        <Tooltip label="Mail" hasArrow>
          <Link href={data.heroSection.mailLink} isExternal>
            <IconButton
              variant="link"
              icon={<FiMail />}
              aria-label="Mail Link"
              color="red.500"
              _hover={{ color: mailHoverBgColor }}
              fontSize="3xl"
            />
          </Link>
        </Tooltip>
        <Tooltip label="Download Resume" hasArrow>
          <Link
            href={data.heroSection.resumeLink}
            _hover={{ textDecor: "none" }}
            download
          >
            <Button size="sm" mb={1} rightIcon={<BiDownload />}>
              Resume
            </Button>
          </Link>
        </Tooltip>
      </HStack>
    </VStack>
  );
};

export default HeroSection;
