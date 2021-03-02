import { List, ListItem, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavigationSidebar = () => {
  return (
    <List spacing={4}>
      <ListItem>
        <Link to="/shop">
          <Button variant="outline">
            <AiOutlineSearch />
            Ordina
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/shop/ordinirecenti">
          <Button variant="outline">
            <BsClockHistory /> Ordini Recenti
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/shop/impostazioni">
          <Button variant="outline">
            <FiSettings />
            Impostazioni
          </Button>
        </Link>
      </ListItem>
    </List>
  );
};

export default NavigationSidebar;
