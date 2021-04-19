import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

interface BlogLinkToPostProps {
  postTitle: string;
  postShortDesc: string;
  postId?: number;
}

const BlogLinkToPost: React.FC<BlogLinkToPostProps> = ({
  postShortDesc,
  postTitle,
  postId,
}) => {
  return (
    <Box
      mt="2"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="green.100"
    >
      <Link to={`/blog/posts/${postId}`}>
        <Text color="green.600" fontSize="h1">
          {postTitle}
        </Text>
      </Link>
      <Text fontSize="p" fontStyle="italic">
        {postShortDesc}
      </Text>
    </Box>
  );
};

export default BlogLinkToPost;
