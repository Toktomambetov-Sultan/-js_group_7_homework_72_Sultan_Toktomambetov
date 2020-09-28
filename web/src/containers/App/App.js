import React from "react";
import "./App.css";
import Layout from "../../components/Layout/Layout";
import { Redirect, Route, Switch } from "react-router-dom";
import DishesPage from "../DishesPage/DishesPage";
import { PATH_TO_DISHES, PATH_TO_ORDERS } from "../../paths";
import OrdersPage from "../OrdersPage/OrdersPage";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Redirect from="/" exact to={PATH_TO_ORDERS} />
          <Route path={PATH_TO_DISHES} exact component={DishesPage} />
          <Route path={PATH_TO_ORDERS} exact component={OrdersPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
