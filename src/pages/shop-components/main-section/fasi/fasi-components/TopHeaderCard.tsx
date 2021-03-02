import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const TopHeaderCard = () => {
  return (
    <Box
      p="2"
      mt="2"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Heading fontSize="p">Piatti disponibili:</Heading>
    </Box>
  );
};

export default TopHeaderCard;
