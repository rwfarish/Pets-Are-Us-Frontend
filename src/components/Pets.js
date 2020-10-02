import React from "react";
import Navbar from "./Navbar";
import PetPage from "../pages/PetPage";

export default function Pets({ setPetsDb, jwtToken, petsDb }) {
  return (
    <div>
      <Navbar />
      <PetPage setPetsDb={setPetsDb} jwtToken={jwtToken} petsDb={petsDb} />
    </div>
  );
}
