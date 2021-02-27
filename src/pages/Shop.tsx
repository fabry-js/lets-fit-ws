import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TopNavBar from "../components/nav-bar/TopNavBar";
import NavigationDrawer from "./shop-components/NavigationDrawer";
const Shop = () => {
  return (
    <>
      <TopNavBar />
      <SimpleGrid p="4" columns={3} spacing={10}>
        <Box height="80px" p="10">
          <NavigationDrawer />
        </Box>
        <Box bg="grey" height="80px">
          {/**Qui ci va la main section */}
        </Box>
        <Box bg="grey" height="80px">
          {/**Qui va il cart */}
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Shop;
