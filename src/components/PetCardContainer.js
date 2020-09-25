import React from "react";
import axios from "axios";
import PetCard from "./PetCard";

export default function PetCardContainer({ pets, jwt, setPetsDb }) {
  return (
    <div style={styles.cardContainer}>
      {pets.map((currentPet) => (
        <PetCard pet={currentPet} jwt={jwt} setPetsDb={setPetsDb} />
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
