import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";

function App() {
  const [jwtToken, setJwtToken] = React.useState("");
  const [petsDb, setPetsDb] = React.useState([]);
  React.useEffect(() => {
    if (window.localStorage.getItem("jwt") != "") {
      setJwtToken(window.localStorage.getItem("jwt"));
    }
  }, []);
  return (
    <>
      <SignIn setJwtToken={setJwtToken} />
      <HomePage setPetsDb={setPetsDb} jwtToken={jwtToken} petsDb={petsDb} />
    </>
  );
}

export default App;
