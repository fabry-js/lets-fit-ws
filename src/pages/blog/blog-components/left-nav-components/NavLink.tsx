import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  text: string;
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({text, to}) => {
  return(
    <Link to={to}>
      <Button variant="ghost" borderRadius="full" borderWidth="3px" p="3" mt="2">
        <Text>{text}</Text>
      </Button>
    </Link>
  );
}

export default NavLink;