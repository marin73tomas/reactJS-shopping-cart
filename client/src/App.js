import React from "react";

import { Switch, Route } from "react-router-dom";
import StorePage from "./pages/StorePage";
import NewProduct from "./pages/NewProduct";
import Product from "./components/Product";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index.js";
import Results from "./components/Results";
import ReduxThunk from "redux-thunk";

export const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="md" style={{ marginBottom: "30px !important" }}>
        <Switch>
          <Route exact path="/" component={StorePage} />
          <Route path="/products/new" component={NewProduct} />
          <Route path="/cart" component={NewProduct} />
          <Route path="/search/:title" component={Results} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Container>
    </>
  );
}
