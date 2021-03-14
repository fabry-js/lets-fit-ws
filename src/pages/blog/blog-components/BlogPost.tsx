import React from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useParams } from "react-router-dom";
import { _firestore } from "../../../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Badge, Input } from "@chakra-ui/react";
import { BlogPost as BlogPostInterface } from "../../../models/BlogPost";

interface BlogPostProps {}
interface BlogPostParams {
  id: string;
}

const BlogPost: React.FC<BlogPostProps> = () => {
  const { id }: BlogPostParams = useParams();
  let intedId = parseInt(id);

  const blogPostsCollectionRef = _firestore
    .collection("/blog-posts")
    .where("postId", "==", intedId);

  const [blogPosts] = useCollectionData(blogPostsCollectionRef);

  return (
    <Box p="4">
      {blogPosts ? (
        blogPosts.map((blogPost: BlogPostInterface | any, index: number) => {
          const { additional, mainContent, postTitle, comments } = blogPost;
          const { likes } = additional;
          const { postBody } = mainContent;
          return (
            <>
              <Box borderRadius="lg" borderWidth="1px" p="6" key={index}>
                <Heading>{postTitle}</Heading>
                <Text mt="5" fontSize="p">
                  {postBody}
                </Text>
                <Badge
                  mt="5"
                  borderRadius="2xl"
                  colorScheme="blue"
                  variant="subtle"
                >
                  <Text p="1">
                    {likes} {likes === 1 ? "Like" : "Likes"}
                  </Text>
                </Badge>
                <Box p="2" borderRadius="lg" borderWidth="1px" mt="2">
                  {
                    comments.length !== 0 ?
                      comments.map((comment: any, index: number) => {
                        const {author, text} = comment;
                        return(
                          <Box mt="5" p="5" borderRadius="lg" borderWidth="2px" key={index}>
                            <Text fontSize="small" fontStyle="italic">{author}</Text>
                            <Text fontSize="p">{text}</Text>
                          </Box>
                        )
                      })
                    :
                    <Text opacity="0.5">Nessun commento, sii la prima persona!</Text>
                  }
                  <Input mt="3" placeholder="Il tuo commento..."></Input>
                </Box>
              </Box>
            </>
          );
        })
      ) : (
        <Text>😱 Non riesco a caricare i contenuti di questo post...</Text>
      )}
    </Box>
  );
};

export default BlogPost;
