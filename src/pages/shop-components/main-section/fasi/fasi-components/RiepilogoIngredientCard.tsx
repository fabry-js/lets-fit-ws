import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";

interface RiepilogoIngredientCardProps {
  ingredientName: string;
  price?: number;
  onClick?: () => void;
}

const RiepilogoIngredientCard: React.FC<RiepilogoIngredientCardProps> = ({
  ingredientName,
  price,
  onClick,
}) => {
  return (
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
      <Button onClick={onClick}>
        <RiDeleteBin5Line />
      </Button>
    </Box>
  );
};

export default RiepilogoIngredientCard;
