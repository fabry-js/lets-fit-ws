import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

const Notizie = () => {
  return(
    <Box position="absolute" top="50%" left="50%" margin="-25px 0 0 -25px" opacity="0.5">
      <Text fontSize="p">Nessuna notizia...</Text>
      <Text fontSize="p">...vuoi un caffè? ☕</Text>
    </Box>
  );
}

export default Notizie;