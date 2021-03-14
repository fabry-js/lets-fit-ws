import React from "react";
import { Route, Switch } from "react-router";
import BlogPost from "../blog-components/BlogPost";
import InnerBlog from "../blog-pages/InnerBlog";

const InnerBlogRoutes = () => {

  return (
    <Switch>
      <Route exact path="/blog" component={InnerBlog} />
      <Route path="/blog/posts/:id" component={BlogPost} />
    </Switch>
  );
};

export default InnerBlogRoutes;
