import React from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Badge, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./BlogMainHeroStyles.css";

interface BlogMainHeroProps {
  featPostTitle: string;
  featPostDescription: string;
  postId: number;
  coverURL: string;
}

const BlogMainHero: React.FC<BlogMainHeroProps> = ({
  featPostDescription,
  featPostTitle,
  postId,
  coverURL,
}) => {
  return (
    <Box
      borderWidth="8px"
      borderRadius="lg"
      position="relative"
      overflow="hidden"
    >
      <Badge
        position="absolute"
        borderRadius="2xl"
        colorScheme="green"
        variant="subtle"
      >
        <Text p="1" color="white">
          In evidenza
        </Text>
      </Badge>
      <Image
        opacity="0.1"
        src={coverURL}
        height="100%"
        width="100%"
        objectFit="contain"
      />
      <Box mt="3" ml="3">
        <Link to={`/blog/posts/${postId}`}>
          <Heading
            color="green.400"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            {featPostTitle}
          </Heading>
        </Link>
        <Text
          fontSize="xl"
          fontStyle="italic"
          position="absolute"
          top="30%"
          left="20%"
          transform="translate(0%, 230%)"
        >
          {featPostDescription}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogMainHero;
