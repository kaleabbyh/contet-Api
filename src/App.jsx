/* eslint-disable no-unused-vars */
import { useState } from "react";
import { UserContextProvider } from "./contexts/LoginContext";

import "./App.css";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <UserContextProvider>
        <Login />
      </UserContextProvider>
    </>
  );
}

export default App;
