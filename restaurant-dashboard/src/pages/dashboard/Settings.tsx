import React from 'react';
import { Button } from '@chakra-ui/button';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteUserInfos } from '../../store/slices/userSlice';

const Settings = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const showLogoutSuccessfulToast = () =>
    toast({
      title: "Logout eseguito con successo, Buon proseguimento.",
      status: "info",
      duration: 4000,
      isClosable: true,
    });

  const handleLogout = () => {
    dispatch(deleteUserInfos());
    showLogoutSuccessfulToast();
  };

  return(
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Settings;