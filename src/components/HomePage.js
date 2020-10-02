import React from "react";
import axios from "axios";
import PetCardContainer from "./PetCardContainer";
import { StylesProvider } from "@material-ui/core";
import Navbar from "./Navbar";

export default function HomePage({ setPetsDb, jwtToken, petsDb }) {
  async function showAllPets() {
    let allPets = await axios.post("http://localhost:4000/get-all-pets", {
      jwt: jwtToken,
    });
    setPetsDb(allPets.data);
  }
  async function showMyPets() {
    let myPets = await axios.post("http://localhost:4000/get-your-pets", {
      jwt: jwtToken,
    });
    setPetsDb(myPets.data);
  }
  async function showLikedPets() {
    let likedPets = await axios.post("http://localhost:4000/get-liked-pets", {
      jwt: jwtToken,
    });
    setPetsDb(likedPets.data);
  }
  return (
    <div style={styles.homeContainer}>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <PetCardContainer pets={petsDb} jwt={jwtToken} setPetsDb={setPetsDb} />
      </div>
    </div>
  );
}

const styles = {
  homeContainer: {
    display: "flex",
  },
};
