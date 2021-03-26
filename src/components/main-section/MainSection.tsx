import React from "react";
import { Container, Text } from "@chakra-ui/react";

const MainSection = () => {
  return (
    <Container
      className="container"
      style={{ position: "relative", textAlign: "center" }}
    >
      <img
        src="../res/mainsectiongif.gif"
        alt=""
        style={{
          opacity: 0.15,
          width: "100%",
          height: "100%",
        }}
      />
      <Text
        fontSize="3xl"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        fontWeight="bold"
      >
        EAT & FIT Semplice,
        <br /> sano e con gusto, ovunque tu sia!
      </Text>
    </Container>
  );
};

export default MainSection;
