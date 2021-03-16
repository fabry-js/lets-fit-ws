import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import AuthProvider from "./providers/AuthProvider";
import Routes from "./Routes";
import { configureStore } from "@reduxjs/toolkit";
import mergedReducers from "./store/configureStore";

const store = configureStore({
  reducer: mergedReducers,
});

const Providers = () => {
  return (
    <ChakraProvider>
      <ReduxProvider store={store}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ReduxProvider>
    </ChakraProvider>
  );
};

export default Providers;
