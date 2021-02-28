import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Products from "../components/Products";

export default function HomePage() {
  return (
    <>
      <Typography
        component="h1"
        variant="h1"
        style={{ fontSize: "30px", textAlign: "center" }}
      >
        Redux Shopping Cart
      </Typography>
      <Products /> {/* display all products */}
    </>
  );
}
