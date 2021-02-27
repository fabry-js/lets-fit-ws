import React from 'react';
import AuthProvider from './contextes/AuthProvider';
import Routes from './Routes';
import { ChakraProvider } from '@chakra-ui/react';
export const Providers = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  );
};
