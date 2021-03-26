import React from "react";
import AuthProvider from "./contextes/AuthProvider";
import Routes from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import mergedReducers from "./redux-store/configureStore";

const store = configureStore({
  reducer: mergedReducers,
  /**
   * PRODUCTION
   * devTools: false
   */
});

const stripePromise = loadStripe("pk_test_51IJJPcIzkBXCvUW1qIStQ2EqJTC1Mqnxbghj8NIPecGGw9ZAS8c3zAS35X4efCTDGBJUXRsZGGYOAA7An0Q5pBml00le9WcWrh");

export const Providers = () => {
  return (
    <ChakraProvider>
      <Elements stripe={stripePromise}>
        <AuthProvider>
          <ReduxProvider store={store}>
            <Routes />
          </ReduxProvider>
        </AuthProvider>
      </Elements>
    </ChakraProvider>
  );
};
