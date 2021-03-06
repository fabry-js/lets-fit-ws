import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface CheckoutRiepilogoCardProps {
  ingredientName: string;
  price?: number;
}

const CheckoutRiepilogoCard: React.FC<CheckoutRiepilogoCardProps> = ({ingredientName, price}) => {
  return(
    <Box
      p="2"
      mt="2"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Heading fontSize="p">{ingredientName}</Heading>
      {price ? <Text>€{price}</Text> : ""}
    </Box>
  );
}

export default CheckoutRiepilogoCard;