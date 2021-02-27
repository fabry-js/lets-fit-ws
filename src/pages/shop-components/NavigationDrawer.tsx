import React from "react";
import { Button, List, ListItem } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { useLocation } from "wouter";
const NavigationDrawer = () => {
  const [, setLocation] = useLocation();
  return (
    <>
      <List spacing={4}>
        <ListItem>
          <Button variant="outline">
            <AiOutlineSearch /> Ordina
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outline">
            <BsClockHistory /> Ordini Recenti
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outline" onClick={() => setLocation("/shop/impostazioni")}>
            <FiSettings /> Impostazioni
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default NavigationDrawer;
