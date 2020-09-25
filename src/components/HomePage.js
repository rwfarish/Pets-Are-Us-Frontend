import React from "react";
import axios from "axios";
import PetCardContainer from "./PetCardContainer";
import { StylesProvider } from "@material-ui/core";

export default function HomePage({ setPetsDb, jwtToken, petsDb }) {
  async function showAllPets() {
    let allPets = await axios.post("http://localhost:4000/get-all-pets", {
      jwt: jwtToken,
    });
    setPetsDb(allPets.data);
  }
  return (
    <div style={styles.homeContainer}>
      <div>
        <button onClick={() => showAllPets()}>Show All Pets</button>
        {/* <button onClick={() => showMyPets()}>Show My Pets</button>
        <button onClick={() => showLikedPets()}>Show Liked Pets</button> */}
      </div>
      <div>
        <PetCardContainer pets={petsDb} />
      </div>
    </div>
  );
}

const styles = {
  homeContainer: {
    display: "flex",
  },
};
