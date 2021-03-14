import React from "react";
import { Box } from "@chakra-ui/react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { _firestore } from "../../../utils/firebase";
import BlogLinkToPost from "../blog-components/BlogLinkToPost";
import BlogMainHero from "../blog-components/BlogMainHero";

const InnerBlog = () => {
  /**
   * Noi dobbiamo estrapolare i dati da firestore
   * la funzione di useCollectionData() sarebbe quella di prendere TUTTI
   * i docs nella collection e analizzarli, quindi noi possiamo tranquillamente
   * creare un doc per post, adesso, facciamo avvenire quella che è la "presa" dei dati
   * dal DB.
   */
  const blogPostsCollectionRef = _firestore
    .collection("/blog-posts")
    .orderBy("postId");

  const [posts] = useCollectionData(blogPostsCollectionRef);

  const featPostCollection = _firestore
    .collection("/blog-posts")
    .where("featured", "==", true);
  const [featuredPosts] = useCollectionData(featPostCollection);
  return (
    <Box p="4">
      {featuredPosts &&
        featuredPosts.map((featuredPost: any, index: number) => {
          const { postTitle, postShortDesc, postId } = featuredPost;
          return (
            <BlogMainHero
              key={index}
              featPostTitle={postTitle}
              featPostDescription={postShortDesc}
              postId={postId}
            />
          );
        })}
      {posts &&
        posts.map((post: any, index: number) => {
          const { postTitle, postShortDesc, postId } = post;
          return (
            <BlogLinkToPost
              key={index}
              postTitle={postTitle}
              postShortDesc={postShortDesc}
              postId={postId}
            />
          );
        })}
    </Box>
  );
};

export default InnerBlog;
