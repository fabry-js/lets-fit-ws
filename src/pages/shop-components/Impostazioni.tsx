import { Button } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'wouter';
import { _auth } from '../../utils/firebase';

const Impostazioni = () => {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    _auth.signOut().then(() => setLocation('/'))
  }
  return(
    <div>
      <Button variant="outline" onClick={() => handleLogout()}>Logout</Button>
    </div>
  );
}

export default Impostazioni;