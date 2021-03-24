import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from "./RouteWithLayout";
import SearchGithubUser from "../search/SearchGithubUser";
import MainLayout from "../layouts/MainLayout";

const Routes = (): JSX.Element => (
  <Switch>
    <RouteWithLayout
      layout={MainLayout}
      path="/search"
      component={SearchGithubUser}
    />
  </Switch>
);

export default Routes;
