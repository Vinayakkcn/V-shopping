import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import "../styles/cartStyles.scss";

//Header component for the application
const Navbar = () => {
  return (
    <div>
      <AppBar className="header">
        <Toolbar>
          <Link to="/" className="brand-logo">
            V-Shopping
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/cart">My cart</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
