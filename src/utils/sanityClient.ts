import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "wr4wn8gx",
  dataset: "production",
  useCdn: true
});