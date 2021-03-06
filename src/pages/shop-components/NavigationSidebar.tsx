import React, { useState } from "react";
import { List, ListItem, Button, useDisclosure } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import OrdiniRecenti from "./OrdiniRecenti";
import Impostazioni from "./Impostazioni";

const NavigationSidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(
    false
  );
  const openSettingsModal = () => setIsSettingsModalOpen(true);
  const closeSettingsModal = () => setIsSettingsModalOpen(false);
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
          <Button onClick={openSettingsModal} variant="outline">
            <FiSettings />
            Impostazioni
          </Button>
        </ListItem>
      </List>
      <OrdiniRecenti isOpen={isOpen} onClose={onClose} />
      <Impostazioni isOpen={isSettingsModalOpen} onClose={closeSettingsModal} />
    </>
  );
};

export default NavigationSidebar;
