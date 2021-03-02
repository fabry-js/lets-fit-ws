import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

interface RiepilogoIngredientCardProps {
  ingredientName: string;
  price?: number;
}

const RiepilogoIngredientCard: React.FC<RiepilogoIngredientCardProps> = ({ ingredientName, price }) => {
  return(
    <Box p="2" mt="2" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading fontSize="p">{ingredientName}</Heading>
      {price ? <Text>€{price}</Text>: ""}
    </Box>
  );
}

export default RiepilogoIngredientCard;