import { Box, SimpleGrid, Spacer } from "@chakra-ui/react";
import React from "react";
import TopNavBar from "../components/nav-bar/TopNavBar";
import OrdineCorrente from "./shop-components/carrello/OrdineCorrente";
import NavigationAndShopWrapper from "./shop-components/NavigationAndShopWrapper";
const Shop = () => {
  return (
    <>
      <TopNavBar />
      <SimpleGrid p="4" columns={3} spacing={1}>
        <Box height="40px" p="10">
          <NavigationAndShopWrapper />
        </Box>
        <Spacer />
        <Box height="40px">
          <OrdineCorrente />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Shop;
