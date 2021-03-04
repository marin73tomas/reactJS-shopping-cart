import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export default function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <nav className="nav-header" style={{ flexGrow: 1 }}>
            <ul width="100%" color="white">
              <li>
                <Link to="/">Store</Link>
              </li>
              <li>
                <Link to="/products/new">New Product</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          <Button
            startIcon={<ShoppingCartIcon style={{ color: "white" }} />}
          ></Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
