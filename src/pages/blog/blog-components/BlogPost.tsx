import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../../utils/sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import { Box, Text, Stack, Skeleton } from "@chakra-ui/react";

interface BlogPostProps {}

interface BlogPostParams {
  slug: any;
}

const BlogPost: React.FC<BlogPostProps> = () => {
  const [postData, setPostData] = useState<any>();
  const { slug }: BlogPostParams = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  return (
    <Box p="3%">
      <Box>
        <Text fontSize="4xl" fontWeight="bold">
          {postData.title}
        </Text>
      </Box>
      <Box p="5%">
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.config().projectId}
          dataset={sanityClient.config().dataset}
        />
      </Box>
      <div>
        <Text fontSize="small" fontStyle="italic">
          {postData.name}
        </Text>
      </div>
    </Box>
  );
};

export default BlogPost;
