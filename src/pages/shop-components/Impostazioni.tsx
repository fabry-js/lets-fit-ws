import { Button } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { _auth } from "../../utils/firebase";

const Impostazioni = () => {
  const history = useHistory();

  const handleLogout = () => {
    _auth.signOut().then(() => history.push("/"));
  };
  return (
    <div>
      <Button variant="outline" onClick={() => handleLogout()}>
        Logout
      </Button>
    </div>
  );
};

export default Impostazioni;
