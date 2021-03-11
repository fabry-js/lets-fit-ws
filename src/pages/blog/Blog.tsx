import React from "react";
import { Box } from "@chakra-ui/layout";
import { Center, Flex, Text } from "@chakra-ui/react";
import TopNavBar from "../../components/nav-bar/TopNavBar";
import BlogMainHero from "./blog-components/BlogMainHero";
import LeftNavigationDrawer from "./blog-components/LeftNavigationDrawer";

const Blog = () => {
  return (
    <div>
      <TopNavBar />
      <BlogMainHero />
      <Flex>
        <Center w="200px">
          <LeftNavigationDrawer />
        </Center>
        <Box flex="1">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            debitis facilis reprehenderit dolorum itaque repellendus illum,
            necessitatibus adipisci placeat. Recusandae doloribus possimus
            excepturi, unde deserunt sunt perferendis animi molestiae
            voluptatibus?
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Blog;
