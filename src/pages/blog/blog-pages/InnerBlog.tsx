import { SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Box, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../utils/sanityClient";

const InnerBlog = () => {
  const [allPostData, setAllPosts] = useState<any[]>();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
            title,
            slug,
            mainImage {
              asset->{
                id,
                url
              }
            },
            "authorName": author->name,
        }
        `
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  if (!allPostData) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  return (
    <div>
      <SimpleGrid columns={[1, null, 3]}>
        {allPostData?.map((post, index) => (
          <Box borderRadius="lg" border="1px" overflow="hidden" ml="3%" mt="3%" key={index}>
            <Link to={`/blog/${post.slug.current}`} key={post.slug.current}>
              <span key={index}>
                <img
                  style={{
                    opacity: 0.3,
                  }}
                  src={post.mainImage.asset.url}
                  alt=""
                />
                <Box p="2%">
                  <Text fontSize="3xl">{post.title}</Text>
                  <Text fontSize="small" fontStyle="italic">
                    {post.authorName}
                  </Text>
                </Box>
              </span>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default InnerBlog;
