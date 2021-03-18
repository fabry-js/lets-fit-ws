interface BlogPostMainContent {
  postBody: string;
  [key: string]: string | string[];
}

interface BlogPostAdditional {
  likes: number;
}

interface BlogPostComment {
  text: string;
  author: string;
  [key: string]: any;
}

export interface BlogPost {
  postId: number;
  postTitle: string;
  postShortDesc: string;
  mainContent: BlogPostMainContent;
  additional: BlogPostAdditional;
  featured: boolean;
  postAuthor: string
  comments: BlogPostComment[]
}