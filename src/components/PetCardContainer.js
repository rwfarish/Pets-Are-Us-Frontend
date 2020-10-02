import React from "react";
import axios from "axios";
import PetCard from "./PetCard";

export default function PetCardContainer({ pets, jwtToken, setPetsDb }) {
  return (
    <div style={styles.cardContainer}>
      {pets.map((currentPet) => (
        <PetCard pet={currentPet} jwt={jwtToken} setPetsDb={setPetsDb} />
      ))}
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: "15px",
  },
};
