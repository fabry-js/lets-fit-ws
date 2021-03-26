import React from "react";
import { Box, Button, List, ListItem, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { _auth } from "../../utils/firebase";
import { __createBlogPost } from "../../utils/firebase";
import { examplePost } from "../../utils/blogPostCreator";

interface ImpostazioniProps {}

const Impostazioni: React.FC<ImpostazioniProps> = () => {
  const history = useHistory();

  const handleLogout = () => {
    _auth.signOut().then(() => history.push("/"));
  };
  return (
    <Box>
      <List p="4">
        <ListItem>
          <Text>Account: {_auth.currentUser?.email}</Text>
        </ListItem>
        <ListItem>
          <Button variant="outline" onClick={handleLogout}>
            Log out
          </Button>
          <Button variant="outline" onClick={() => __createBlogPost(examplePost)}>
            bp
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default Impostazioni;
