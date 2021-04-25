import React, { useContext } from "react";
import { Stack, Box, Text, Button, useDisclosure, Spacer } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import { AiOutlineShopping, AiOutlineHome } from "react-icons/ai";
import { FiUserPlus, FiEdit, FiShoppingCart } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { UserContext } from "../../../contextes/AuthProvider";
import { useRouteMatch } from "react-router";
import Carrello from "../../../pages/shop-components/carrello/Carrello";
import { BsEye } from "react-icons/bs";
const MenuLinks = ({ isOpened }: any) => {
  const { actualUser } = useContext(UserContext);
  const { url } = useRouteMatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        display={{ base: isOpened ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">
            <AiOutlineHome /> Home
          </MenuItem>
          <MenuItem to="/contatti">
            <RiContactsLine /> Contatti
          </MenuItem>
          <MenuItem to="/blog">
            <FiEdit /> Blog
          </MenuItem>
          <MenuItem to="/vetrina">
            <BsEye /> Vetrina
          </MenuItem>
          {url === "/shop" ? (
            <Button variant="outline" onClick={onOpen}>
              <Text display="flex">
                <FiShoppingCart /> Carrello
              </Text>
            </Button>
          ) : (
            ""
          )}
          <Box ml="60%">
          {actualUser && actualUser.emailVerified === true ? (
            <MenuItem to="/shop">
              <AiOutlineShopping /> Shop
            </MenuItem>
          ) : (
            <MenuItem to="/registrazione">
              <FiUserPlus />
              Registrati
            </MenuItem>
          )}
          </Box>
        </Stack>
      </Box>
      <Carrello onDrawerClose={onClose} isDrawerOpen={isOpen} />
    </>
  );
};

export default MenuLinks;
