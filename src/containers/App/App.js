import React from "react";
import "./App.css";
import Layout from "../../components/Layout/Layout";
import { Switch } from "@material-ui/core";
import { Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Redirect from="/" exact to="/orders" />
          <Route path="/orders" />
          <Route path="/dishes" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
