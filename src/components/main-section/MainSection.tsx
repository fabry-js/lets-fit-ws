import React from "react";
import { Image, Box, Flex, Spacer, Text, ScaleFade } from "@chakra-ui/react";

const MainSection = () => {
  return (
    <ScaleFade in={true} initialScale={0.9}>
      <Box p="5%">
        <Flex>
          <Box w="600px" p="6">
            <Text fontSize="5xl" color="green" fontWeight="extrabold">
              Eat & Fit
            </Text>
            <Text fontStyle="italic" fontSize="4xl" fontWeight="extrabold">
              <br /> Semplice, sano e con gusto, ovunque tu sia!
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Image src="../res/mainsectiongif.gif" w="600px" />
          </Box>
        </Flex>
      </Box>
    </ScaleFade>
  );
};
export default MainSection;
