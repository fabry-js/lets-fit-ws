import React from "react";
import { List, ListItem, Button, useDisclosure } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import OrdiniRecenti from "./OrdiniRecenti";

const NavigationSidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
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
        <Button onClick={onOpen} variant="outline">
          <BsClockHistory /> Ordini Recenti
        </Button>
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
    <OrdiniRecenti
      isOpen={isOpen}
      onClose={onClose}
    />
    </>
  );
};

export default NavigationSidebar;
