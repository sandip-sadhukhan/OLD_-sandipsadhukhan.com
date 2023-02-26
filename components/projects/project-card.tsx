import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

interface Tag {
  colorScheme: string;
  text: string;
}

interface Props {
  image: string;
  title: string;
  description: string;
  tags: Tag[];
  websiteLink?: string;
  sourceCodeLink?: string;
  underDevelopment?: boolean;
}

const ProjectCard: React.FC<Props> = (props) => {
  const {
    image,
    title,
    description,
    tags,
    websiteLink,
    sourceCodeLink,
    underDevelopment,
  } = props;
  return (
    <Card h="full">
      <CardBody>
        <Image src={image} alt={title} borderRadius="lg" />
        <VStack mt={6} spacing={3}>
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          {underDevelopment ? (
            <Tag colorScheme="pink">Under development</Tag>
          ) : null}
          <Wrap justify="center">
            {tags.map((tag, index) => (
              <WrapItem key={index}>
                <Badge colorScheme={tag.colorScheme}>{tag.text}</Badge>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </CardBody>
      <CardFooter>
        <VStack w="full">
          <HStack w="full">
            {websiteLink ? (
              <Button
                href={websiteLink}
                as={Link}
                flex={1}
                rightIcon={<FiExternalLink />}
                isExternal
              >
                Visit Website
              </Button>
            ) : null}
            {sourceCodeLink ? (
              <Button
                as={Link}
                flex={1}
                leftIcon={<BsGithub />}
                variant="outline"
                href={sourceCodeLink}
                isExternal
              >
                Source Code
              </Button>
            ) : null}
          </HStack>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
