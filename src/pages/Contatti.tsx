import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import TopNavBar from "../components/nav-bar/TopNavBar";
import { Flex, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import "./contatti.css";
import FAQ from "./FAQ";

const Contatti = () => {
  return (
    <div className="container">
      <TopNavBar />
      <div>
        <Box p="4">
          <Tabs colorScheme="green" variant="soft-rounded" orientation="horizontal">
            <TabList>
              <Tab>Contatti</Tab>
              <Tab>FAQ</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box p="5%">
                  <Flex borderRadius="4%" m="0% 3% 2% 3%" p="6">
                    <Box w="600px" p="6">
                      <Text fontSize="5xl" fontWeight="bold">
                        I Nostri Contatti
                      </Text>
                      <ul style={{ padding: "4% 4% 4% 4%" }}>
                        <li>
                          📧{" "}
                          <a href="mailto://letsfitja2021@gmail.com">
                            E-Mail: <code>letsfitja2021@gmail.com</code>
                          </a>
                        </li>
                        <li>📞 +390909221775</li>
                        <li>🏢 Sede legale: Via Tre Monti 4 Milazzo (Me)</li>
                      </ul>
                    </Box>
                    <Spacer />
                  </Flex>
                </Box>
              </TabPanel>
              <TabPanel>
                <FAQ />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </div>
    </div>
  );
};

export default Contatti;
