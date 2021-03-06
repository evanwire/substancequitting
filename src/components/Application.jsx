import React, { useContext } from "react";
import 'bootswatch/dist/lux/bootstrap.min.css';
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import Dashboard from "./Dashboard";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import generateAutoId from "firebase-auto-ids"

function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <Dashboard user={user}  />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}

export default Application;
