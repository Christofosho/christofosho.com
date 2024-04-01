import React from "react";

import Family from "../pages/family";
import Software from "../pages/software";
import ScienceFiction from "../pages/scifi";
import GreenTea from "../pages/greentea";
import Language from "../pages/language";
import Musician from "../pages/musician";

interface IAbout {
  onClick: () => void,
}

export default function About({ onClick }: IAbout) {

  return (
    <div className="view__about" onClick={onClick}>
      <Family />
      <Software />
      <ScienceFiction />
      <GreenTea />
      <Language />
      <Musician />
    </div>
  );
};
