/* eslint-disable no-unused-vars */

import { useState, createContext, useContext } from "react";
import { useUserContext } from "../contexts/LoginContext";

function Login() {
  const user = useUserContext();

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
export default Login;
