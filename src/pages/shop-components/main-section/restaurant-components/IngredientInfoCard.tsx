import React from 'react';
import { Badge, Box, Heading, Text } from '@chakra-ui/react';

interface IngredientInfoCardProps {
  name: string;
  price: number;
  vegan: boolean;
  vegetarian: boolean;
}

const IngredientInfoCard: React.FC<IngredientInfoCardProps> = ({
  name,
  price,
  vegan,
  vegetarian
}) => {
  return(
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading m="5" mb="0" as="h4" size="md">
        {name}
      </Heading>
      <Text m="5" mt="0">
        €{price}
      </Text>
      <Text m="5" fontSize="smaller">
        {vegan ? <Badge ml="1" colorScheme="green" p="0.5" variant="subtle">Vegan</Badge> : ""}
        {vegetarian ? <Badge ml="1" colorScheme="green" p="0.5" variant="subtle">Vegetariano</Badge> : ""}
      </Text>
    </Box>
  );
}

export default IngredientInfoCard;