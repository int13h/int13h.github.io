import React from "react";
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./layout/Layout";
import ContentLoader from "./layout/ContentLoader";

const history = createBrowserHistory();
const routes = (
  <Router history={history}>
    <Layout history={history}>
      <Switch>
        <Route path="/:page" component={ContentLoader} />
        <Route path="*" component={ContentLoader} />
      </Switch>
    </Layout>
  </Router>
);

export default routes;
