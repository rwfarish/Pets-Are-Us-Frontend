import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import PrivateRoutes from "./components/PrivateRoutes";
import PublicRoutes from "./components/PublicRoutes";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";
import SignInPage from "./pages/SignInPage";
import Pets from "./components/Pets";
import LikedPetPage from "./pages/LikedPetPage";
import MyPetPage from "./pages/MyPetPage";

function App() {
  const [jwtToken, setJwtToken] = React.useState("");
  const [petsDb, setPetsDb] = React.useState([]);
  React.useEffect(() => {
    if (window.localStorage.getItem("jwt") != "") {
      setJwtToken(window.localStorage.getItem("jwt"));
    }
  }, []);
  console.log(!window.localStorage.getItem("jwt"));
  return (
    <>
      {!window.localStorage.getItem("jwt") ? (
        <PublicRoutes></PublicRoutes>
      ) : (
        <PrivateRoutes
          setPetsDb={setPetsDb}
          jwtToken={jwtToken}
          petsDb={petsDb}
        ></PrivateRoutes>
      )}
    </>
  );
}

export default App;
