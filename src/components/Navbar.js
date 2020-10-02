import React from "react";
import { Link } from "@reach/router";

export default function Navbar() {
  return (
    <div>
      <Link to="/pets">All Pets</Link>
      <Link to="/mypets">My Pets</Link>
      <Link to="/likedpets">Liked Pets</Link>
    </div>
  );
}
