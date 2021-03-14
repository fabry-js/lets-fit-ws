import { BlogPost } from "../models/BlogPost";

export const examplePost: BlogPost = {
  postId: 2,
  additional: {
    likes: 21,
  },
  featured: false,
  mainContent: {
    postBody:
      "Sed pharetra lacus in ligula finibus condimentum. Sed maximus ac urna id semper. Nullam hendrerit vulputate lorem a efficitur. Pellentesque facilisis vehicula nunc, sit amet lobortis purus luctus nec. Sed at convallis nunc, in cursus nunc. Duis posuere urna vitae vehicula consequat.",
  },
  postShortDesc: "finibus condimentum",
  postTitle: "Sed maximus ac urna id semper",
  comments: []
};
