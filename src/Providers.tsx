import React from "react";
import AuthProvider from "./contextes/AuthProvider";
import Routes from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import mergedReducers from "./redux-store/configureStore";

const store = configureStore({
  reducer: mergedReducers,
  /**
   * PRODUCTION
   * devTools: false
   */
});

export const Providers = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <ReduxProvider store={store}>
          <Routes />
        </ReduxProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};
