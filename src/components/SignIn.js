import React from "react";
import axios from "axios";

export default function SignIn({ setJwtToken }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function login() {
    try {
      let jwtToken = await axios.post("http://localhost:4000/login", {
        username,
        password,
      });
      console.log(jwtToken);
      window.localStorage.setItem("jwt", jwtToken.data.jwt);
      setJwtToken(jwtToken.data.jwt);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      Username: <input onChange={(event) => setUsername(event.target.value)} />
      Password:{" "}
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => login()}>Sign In</button>
    </div>
  );
}
