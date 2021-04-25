import React from "react";
import { Image, Box, Flex, Spacer, Text } from "@chakra-ui/react";

const MainSection = () => {
  return (
    <Box p="5%">
      <Flex>
        <Box w="600px" p="6">
          <Text fontSize="5xl" fontWeight="bold">
            EAT & FIT: Semplice,
            <br /> sano e con gusto, ovunque tu sia!
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Image
            src="../res/mainsectiongif.gif"
            w="600px"
          />
        </Box>
      </Flex>
    </Box>
  );
};
export default MainSection;
