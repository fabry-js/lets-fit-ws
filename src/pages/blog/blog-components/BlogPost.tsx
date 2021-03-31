import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { useParams } from "react-router-dom";
import { _auth, _firestore } from "../../../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  Badge,
  Button,
  Input,
  InputGroup,
  Skeleton,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { BlogPost as BlogPostInterface } from "../../../models/BlogPost";
import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/firestore";
import Markdown from "markdown-to-jsx";
import "./BlogPostStyles.css";

interface BlogPostProps {}
interface BlogPostParams {
  id: string;
}
interface BlogPostMessage {
  comment: string;
}
const BlogPost: React.FC<BlogPostProps> = () => {
  const { id }: BlogPostParams = useParams();
  let intedId = parseInt(id);

  const blogPostsCollectionRef = _firestore
    .collection("/blog-posts")
    .where("postId", "==", intedId);

  const [blogPosts] = useCollectionData(blogPostsCollectionRef);
  const { register, handleSubmit } = useForm();

  const [toUpdateDocumentId, setToUpdateDocumentId] = useState<string>();

  // Così evitiamo di avere errori con lo state history (è un discorso complesso, sostanzialmente lo state è ritardato HAHAH)
  blogPostsCollectionRef
    .get()
    .then((snap) => snap.forEach((post) => setToUpdateDocumentId(post.id)));

  const toast = useToast();

  const onSubmit = async (data: BlogPostMessage) => {
    const { comment } = data;
    (await blogPostsCollectionRef.get()).forEach((post) =>
      setToUpdateDocumentId(post.id)
    );
    _firestore
      .collection("/blog-posts")
      .doc(toUpdateDocumentId)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          text: comment,
          author: _auth.currentUser?.email,
        }),
      })
      .then(() =>
        toast({
          title: "Commento Aggiunto!🥳",
          duration: 900,
          isClosable: true,
          status: "success",
        })
      )
      .catch(() =>
        toast({
          title: "Oh oh! Non è stato possibile aggiungere il commento 😱",
          duration: 2000,
          isClosable: true,
          status: "error",
        })
      );
  };

  return (
    <Box p="4">
      {blogPosts ? (
        blogPosts.map((blogPost: BlogPostInterface | any, index: number) => {
          const { additional, comments, mainContent, postAuthor } = blogPost;
          const { likes } = additional;
          return (
            <React.Fragment key={index}>
              <Box borderRadius="lg" borderWidth="1px" p="6" key={index}>
                <div className="blog-post-font-wrapper">
                  <Markdown>{mainContent.postBody}</Markdown>
                </div>
                <br/>
                <Text fontSize="small" fontStyle="italic">{postAuthor}</Text>
                <Badge
                  mt="5"
                  borderRadius="2xl"
                  colorScheme="green"
                  variant="subtle"
                >
                  <Text p="1">
                    {likes} {likes === 1 ? "Like" : "Likes"}
                  </Text>
                </Badge>
                <Box p="2" mt="2">
                  {comments.length !== 0 ? (
                    comments.map((comment: any, index: number) => {
                      const { author, text } = comment;
                      return (
                        <Box
                          mt="5"
                          p="5"
                          borderRadius="lg"
                          borderWidth="2px"
                          key={index}
                        >
                          <Text fontSize="small" fontStyle="italic">
                            {author}
                          </Text>
                          <Text fontSize="p">{text}</Text>
                        </Box>
                      );
                    })
                  ) : (
                    <Text opacity="0.5">
                      Nessun commento, sii la prima persona!
                    </Text>
                  )}
                  {_auth.currentUser !== null ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <InputGroup>
                        <Input
                          mt="3"
                          name="comment"
                          ref={register}
                          placeholder="Commenta..."
                        />
                        <Button mt="3" type="submit" variant="ghost">
                          <AiOutlineSend />
                        </Button>
                      </InputGroup>
                    </form>
                  ) : (
                    <Text mt="5" opacity="0.5">
                      Devi fare il login per poter commentare!
                    </Text>
                  )}
                </Box>
              </Box>
            </React.Fragment>
          );
        })
      ) : (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}
    </Box>
  );
};

export default BlogPost;
