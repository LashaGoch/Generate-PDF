import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b font-bold p-3 flex justify-between items-center">
      <span className="font-bold">Children's Book</span>
      <Navigation />
    </header>
  );
}

export default Header;
