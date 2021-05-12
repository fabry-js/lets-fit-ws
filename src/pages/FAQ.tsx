import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import TopNavBar from "../components/nav-bar/TopNavBar";

interface FAQProps {}

const FAQ: React.FC<FAQProps> = () => {
  return (
    <div>
      <TopNavBar />
      <Box p="2%">
        <Text fontSize="4xl">FAQ</Text>
        <p>🛠 Work in progress... 🛠</p>
      </Box>
    </div>
  );
};

export default FAQ;
