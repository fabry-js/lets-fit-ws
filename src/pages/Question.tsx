import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

interface QuestionProps {
  domanda: string;
  risposta: string
}

const Question: React.FC<QuestionProps> = ({
  domanda,
  risposta
}) =>{
  return (
    <Box p="2%">
      <Text color="green.200" fontSize="3xl">{domanda}</Text>
      <Text mt="2%">{risposta}</Text>
    </Box>
  );
}

export default Question