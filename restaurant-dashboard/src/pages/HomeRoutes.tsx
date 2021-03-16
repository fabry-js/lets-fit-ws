import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './dashboard/Landing';
const HomeRoutes = () => {
  return(
    <Router>
      <Route exact path="/" component={Landing}/>
    </Router>
  );
}

export default HomeRoutes;