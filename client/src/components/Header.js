import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <>
      <nav className="nav-header">
        <ul>
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
    </>
  );
}
