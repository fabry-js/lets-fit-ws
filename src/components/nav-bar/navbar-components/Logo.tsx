import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'wouter';

const Logo = (props: any) => {
  return (
    <Box {...props}>
      <Link to="/">
        <img src="../../res/logo.png" alt="Let's Fit JA" />
      </Link>
    </Box>
  );
};

export default Logo;
