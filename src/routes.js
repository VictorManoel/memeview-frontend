import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Video from "./pages/video";
import NotFound from "./pages/notFound";

// Routes
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/watch/:id" component={Video} exact />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
