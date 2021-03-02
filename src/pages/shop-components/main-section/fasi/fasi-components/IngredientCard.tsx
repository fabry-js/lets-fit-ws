import React from 'react';
import { Heading } from '@chakra-ui/react';

interface IngredientCardProps {
  ingredientName: string;
  price: number;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ingredientName, price}) => {
  return(
    <>
      <Heading m="5" mb="0" as="h4" size="md">
        €{price} | {ingredientName}
      </Heading>
    </>
  );
}

export default IngredientCard;