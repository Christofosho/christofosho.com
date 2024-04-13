import React from "react";

import Family from "../components/cards/family";
import Software from "../components/cards/software";
import ScienceFiction from "../components/cards/scifi";
import GreenTea from "../components/cards/greentea";
import Language from "../components/cards/language";
import Musician from "../components/cards/musician";

export default function About() {

  return (
    <div className="view__about">
      <Family />
      <Software />
      <ScienceFiction />
      <GreenTea />
      <Language />
      <Musician />
    </div>
  );
};
