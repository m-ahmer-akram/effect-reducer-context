import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import classes from "./Navigation.module.scss";

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    //   {(ctx) => {
    //     return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <Link to="/">Users</Link>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <Link to="/">Admin</Link>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    // );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
