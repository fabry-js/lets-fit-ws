import { BackgroundProps, Box, Image, Text } from "@chakra-ui/react";
import React from "react";

interface SectionCardProps {
  bgColor: BackgroundProps["bgColor"];
  heading: string;
  paragraph: string;
  imageURL: string;
  scrollRef: React.LegacyRef<HTMLDivElement> | undefined;
}

const SectionCard: React.FC<SectionCardProps> = ({
  bgColor,
  heading,
  imageURL,
  paragraph,
  scrollRef,
}) => {
  return (
    <Box
      p="2%"
      bgColor={bgColor}
      borderRadius="4%"
      m="10% 3% 2% 3%"
      display={{ md: "flex" }}
      ref={scrollRef}
    >
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text fontWeight="bold" fontSize="5xl" letterSpacing="wide">
          {heading}
        </Text>
        <Text fontSize="20px" mt="7%">
          {paragraph}
        </Text>
      </Box>
      <Box flexShrink={0}>
        <Image ml="2%" borderRadius="lg" width={{ md: 500 }} src={imageURL} />
      </Box>
    </Box>
  );
};

export default SectionCard;
