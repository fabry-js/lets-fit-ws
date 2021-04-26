import React from "react";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { _auth } from "../../utils/firebase";

interface ImpostazioniProps {}

const Impostazioni: React.FC<ImpostazioniProps> = () => {
  const history = useHistory();
  const toast = useToast();

  const handleLogout = () => {
    _auth
      .signOut()
      .then(() => {
        history.push("/");
        toast({
          title: "Logout eseguito con successo!, A presto 👋!",
          status: "info",
          isClosable: true,
          duration: 2000,
        });
      })
      .catch(() =>
        toast({
          title: "Non è stato possibile eseguire il logout 😢",
          status: "error",
          isClosable: true,
          duration: 3000,
        })
      );
  };
  return (
    <Box>
      <List p="4">
        <ListItem display="grid" placeItems="center">
          <Text fontSize="4xl" fontStyle="italic">
            Ciao, {_auth.currentUser?.displayName || _auth.currentUser?.email}{" "}
            👋!
          </Text>
          <Avatar
            size="2xl"
            src={_auth.currentUser?.photoURL!}
            name={_auth.currentUser?.email! || _auth.currentUser?.displayName!}
          />
        </ListItem>
        <ListItem display="grid" placeItems="center" mt="2%">
          <Button variant="outline" onClick={handleLogout}>
            Log out
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default Impostazioni;
