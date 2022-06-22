import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.scss";

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;