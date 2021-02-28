import React from "react";

import { Switch, Route } from "react-router-dom";
import StorePage from "./pages/StorePage";
import NewProduct from "./pages/NewProduct";
import Product from "./components/Product";
import Header from "./components/Header";
import { Container } from "@material-ui/core";

export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={StorePage} />
          <Route path="/products/new" component={NewProduct} />
          <Route path="/cart" component={NewProduct} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Container>
    </>
  );
}
