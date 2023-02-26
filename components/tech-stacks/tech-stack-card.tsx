import {
  Heading,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import React from "react";

interface Props {
  icons: IconType[];
  headings: string[];
  body: string;
}

const TechStackCard: React.FC<Props> = ({ icons, headings, body }) => {
  const iconColor = useColorModeValue("primary.400", "primary.100");

  return (
    <VStack spacing={3}>
      <HStack spacing={5}>
        {icons.map((icon, index) => (
          <Icon as={icon} fontSize="5xl" key={index} color={iconColor} />
        ))}
      </HStack>

      <HStack divider={<Text opacity="0.8">/</Text>} gap={2}>
        {headings.map((heading, index) => (
          <Heading fontSize="2xl" fontWeight={600} as="h3" key={index}>
            {heading}
          </Heading>
        ))}
      </HStack>
      <Text>{body}</Text>
    </VStack>
  );
};

export default TechStackCard;
