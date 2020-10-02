import React from "react";
import axios from "axios";
import PetCardContainer from "../components/PetCardContainer";

export default function PetPage({ url, setPetsDb, jwtToken, petsDb }) {
  React.useEffect(() => {
    console.log(window.localStorage.getItem("jwt"), "TOKEN");
    async function call() {
      let likedPets = await axios.post("http://localhost:4000/get-liked-pets", {
        jwt: window.localStorage.getItem("jwt"),
      });
      setPetsDb(likedPets.data);
    }
    call();
  }, []);
  return (
    <div>
      <PetCardContainer pets={petsDb} jwt={jwtToken} setPetsDb={setPetsDb} />
    </div>
  );
}
