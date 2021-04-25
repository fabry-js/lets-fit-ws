import { Avatar } from "@chakra-ui/avatar";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import React from "react";

interface PartnersProps {}

const Partners: React.FC<PartnersProps> = () => {
  return (
    <Box display="grid" p="10%" borderRadius="4%" m="-2% 3% 2% 3%">
      <Text textAlign="center" fontWeight="semibold" fontSize="5xl">
        I nostri Partners
      </Text>
      <Wrap mt="2%" alignContent="center" display="grid" placeItems="center">
        <WrapItem>
          <Avatar
            size="2xl"
            name="La Puttega"
            src="../res/la-puttega-logo.jpg"
          />
          <Avatar size="2xl" ml="4%" name="MAS" src="../res/mas-logo.jpg" />
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Partners;
