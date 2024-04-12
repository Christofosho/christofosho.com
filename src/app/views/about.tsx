import React from "react";

import Family from "../pages/family";
import Software from "../pages/software";
import ScienceFiction from "../pages/scifi";
import GreenTea from "../pages/greentea";
import Language from "../pages/language";
import Musician from "../pages/musician";

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
