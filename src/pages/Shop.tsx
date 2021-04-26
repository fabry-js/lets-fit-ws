import React, { useContext } from "react";
import { useHistory } from "react-router";
import TopNavBar from "../components/nav-bar/TopNavBar";
import { UserContext } from "../contextes/AuthProvider";
import NavigationAndShopWrapper from "./shop-components/NavigationAndShopWrapper";

const Shop = () => {
  const history = useHistory();
  const { actualUser } = useContext(UserContext)

  if(!actualUser) {
    history.goBack();
  }

  return (
    <>
      <TopNavBar />
      <NavigationAndShopWrapper />
    </>
  );
};

export default Shop;
