import React, { useContext } from 'react';
import { Stack, Box } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import { AiOutlineShopping, AiOutlineHome } from 'react-icons/ai';
import { FiUserPlus, FiEdit } from 'react-icons/fi';
import { UserContext } from '../../../contextes/AuthProvider';
const MenuLinks = ({ isOpen }: any) => {
  const { actualUser } = useContext(UserContext);
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">
          <AiOutlineHome /> Home
        </MenuItem>
        <MenuItem to="/blog">
          <FiEdit /> Blog
        </MenuItem>
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
      </Stack>
    </Box>
  );
};

export default MenuLinks;
