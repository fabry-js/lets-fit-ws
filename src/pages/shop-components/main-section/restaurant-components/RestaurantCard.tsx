import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface RestaurantCardProps {
  restaurantName?: string;
  buttonLabel?: string;
  buttonFunction?: () => void;
  indirizzo?: string;
  orario?: string;
  imageName?: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  buttonFunction,
  buttonLabel,
  imageName,
  indirizzo,
  orario,
  restaurantName,
}) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading m="5" mb="0" as="h4" size="md">
        {restaurantName}
      </Heading>
      <Text m="5" mt="0">
        {orario}
      </Text>
      <Text m="5" fontSize="smaller">
        {indirizzo}
      </Text>
      <Button m="5" p="5" onClick={buttonFunction}>
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default RestaurantCard;
