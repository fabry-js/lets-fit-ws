import React from "react";
import {
  Box,
  Flex,
  Stack,
  ButtonGroup,
  IconButton,
  Text,
  SpaceProps,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Logo from "../nav-bar/navbar-components/Logo";
import { Link } from "react-router-dom";

interface HomeFooterProps {
  mt?: SpaceProps["mt"];
  initialRef?: React.MutableRefObject<null | HTMLDivElement>;
}

const HomeFooter = ({ initialRef, mt }: HomeFooterProps) => {
  return (
    <Box as="footer" mt={mt} role="contentinfo" py="6">
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        align="center"
      >
        <Logo
          aria-current="page"
          aria-label="Vai alla home"
          href="/"
          onClick={() =>
            initialRef?.current?.scrollIntoView({ behavior: "smooth" })
          }
          w="10%"
          opacity="0.5"
        />
        <Stack
          my={{ base: "6", md: 0 }}
          direction={{ base: "column", md: "row" }}
          marginStart={{ md: "8" }}
          fontSize="sm"
          spacing={{ base: "2", md: "8" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Text>
            &copy; {new Date().getFullYear()} Let's Fit JA |{" "}
            <a href="https://github.com/fabry-js"> Fabrizio Piperno </a>|
            <Link to="/faq"> FAQ</Link>
          </Text>
        </Stack>
        <ButtonGroup
          marginStart={{ md: "auto" }}
          color="gray.600"
          variant="ghost"
        >
          <IconButton
            as="a"
            href="https://github.com/fabry-js/"
            aria-label="GitHub"
            icon={<FaGithub />}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default HomeFooter;
