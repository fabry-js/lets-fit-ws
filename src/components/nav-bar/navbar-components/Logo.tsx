import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = (props: any) => {
  return (
    <Box {...props}>
      <SimpleGrid columns={[1, 2]}>
        <Link to="/">
          <Image src="../../res/navbar-logo.png"/>
        </Link>
        <Text color="green" fontWeight="semibold" textTransform="uppercase">Let's Fit JA</Text>
      </SimpleGrid>
    </Box>
  );
};

export default Logo;
