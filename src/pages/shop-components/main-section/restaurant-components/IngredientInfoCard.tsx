import React from "react";
import { Badge, Box, Heading, Image, Text } from "@chakra-ui/react";

interface IngredientInfoCardProps {
  name: string;
  price: number;
  vegan: boolean;
  vegetarian: boolean;
  imageURI: string;
}

const IngredientInfoCard: React.FC<IngredientInfoCardProps> = ({
  name,
  price,
  vegan,
  vegetarian,
  imageURI
}) => {
  return (
    <Box mt="2" borderWidth="1px" borderRadius="lg">
      <Image src={imageURI} alt="" width="250px" height="155px" />
      <Heading m="5" mb="0" as="h4" size="md">
        {name}
      </Heading>
      <Text fontWeight="bold" m="5" mt="0">
        €{price}
      </Text>
      <Text m="5" fontSize="smaller">
        {vegan ? (
          <Badge borderRadius="2xl" ml="1" colorScheme="green" p="0.5" variant="subtle">
            <Text p="1">Vegan</Text>
          </Badge>
        ) : (
          ""
        )}
        {vegetarian ? (
          <Badge borderRadius="2xl" ml="1" colorScheme="green" p="0.5" variant="subtle">
            <Text p="1">Vegetariano</Text>
          </Badge>
        ) : (
          ""
        )}
      </Text>
    </Box>
  );
};

export default IngredientInfoCard;
