import React from "react";
import {
  Button,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { _auth } from "../../utils/firebase";

interface ImpostazioniProps {
  isOpen: boolean;
  onClose(): void;
}

const Impostazioni: React.FC<ImpostazioniProps>= ({isOpen, onClose}) => {
  const history = useHistory();

  const handleLogout = () => {
    _auth.signOut().then(() => history.push("/"));
  };
  return (
    <Modal size="full" onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Impostazioni</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List>
            <ListItem>
              <Button variant="outline" onClick={handleLogout}>Log out</Button>
            </ListItem>
          </List>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Chiudi</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Impostazioni;
