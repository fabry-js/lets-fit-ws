import React from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface BlogMainHeroProps {
  featPostTitle: string;
  featPostDescription: string;
  postId: number;
}

const BlogMainHero: React.FC<BlogMainHeroProps> = ({
  featPostDescription,
  featPostTitle,
  postId,
}) => {
  return (
    <Box p="4" borderWidth="8px" borderRadius="lg">
      <Badge borderRadius="2xl" colorScheme="green" variant="subtle">
        <Text p="1">In evidenza</Text>
      </Badge>
      <Box mt="3" ml="3">
        <Link to={`/blog/posts/${postId}`}>
          <Heading color="green.800">{featPostTitle}</Heading>
        </Link>
        <Text fontSize="xl" fontStyle="italic">
          {featPostDescription}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogMainHero;
