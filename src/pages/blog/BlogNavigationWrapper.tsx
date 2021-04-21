import React from "react";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import InnerBlogRoutes from "./routers/InnerBlogRoutes";
import Notizie from "./blog-pages/Notizie";
import { useHistory } from "react-router-dom";
import NewsletterSubscription from "./newsletter/NewsletterSubscription";

const BlogNavigationWrapper = () => {
  const history = useHistory();
  return (
    <div>
      <Box p="4">
        <Tabs colorScheme="green" orientation="horizontal">
          <TabList>
            <Tab onClick={() => history.push("/blog")}>Home</Tab>
            <Tab>Notizie</Tab>
            <Tab>Newsletter</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <InnerBlogRoutes />
            </TabPanel>
            <TabPanel>
              <Notizie />
            </TabPanel>
            <TabPanel>
              <NewsletterSubscription />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default BlogNavigationWrapper;
