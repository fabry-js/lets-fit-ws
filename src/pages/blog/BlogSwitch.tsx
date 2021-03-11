import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from './Blog';
import Notizie from './Notizie';
import Contatti from './blog-pages/Contatti';

const BlogSwitch = () => {
  return(
    <Switch>
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/notizie" component={Notizie} />
      <Route path="/blog/contatti" component={Contatti} />
    </Switch>
  );
}

export default BlogSwitch;