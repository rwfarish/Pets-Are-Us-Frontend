import React from "react";
import { Router } from "@reach/router";
import Pets from "./Pets";
import LikedPetPage from "../pages/LikedPetPage";
import MyPetPage from "../pages/MyPetPage";
import HomePage from "./HomePage";

export default function PrivateRoutes({ setPetsDb, jwtToken, petsDb }) {
  return (
    <Router>
      <HomePage
        path="/home"
        setPetsDb={setPetsDb}
        jwtToken={jwtToken}
        petsDb={petsDb}
      />
      <Pets
        path="/pets"
        setPetsDb={setPetsDb}
        jwtToken={jwtToken}
        petsDb={petsDb}
      />
      <MyPetPage
        path="/mypets"
        setPetsDb={setPetsDb}
        jwtToken={jwtToken}
        petsDb={petsDb}
      />
      <LikedPetPage
        path="/likedpets"
        setPetsDb={setPetsDb}
        jwtToken={jwtToken}
        petsDb={petsDb}
      />
    </Router>
  );
}
