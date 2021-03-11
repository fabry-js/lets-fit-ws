import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";
import NavLink from "./left-nav-components/NavLink";

const LeftNavigationDrawer = () => {
  return (
    <Box>
      <List>
        <ListItem>
          <NavLink text="Home" to="/blog" />
        </ListItem>
        <ListItem>
          <NavLink text="Notizie" to="/blog/notizie" />
        </ListItem>
        <ListItem>
          <NavLink text="Contatti" to="/blog/contatti" />
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftNavigationDrawer;
