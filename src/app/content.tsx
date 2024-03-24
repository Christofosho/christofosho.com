import React, { useState } from "react";
import Introduction from "./pages/introduction";
import Family from "./pages/family";
import Software from "./pages/software";
import ScienceFiction from "./pages/scifi";
import GreenTea from "./pages/greentea";
import Language from "./pages/language";
import Animals from "./pages/animals";
import Musician from "./pages/musician";
import Toggle from "./toggle";

const renderView = (view: number) => {
  switch (view) {
    case 1:
      return <Family />;
    case 2:
      return <Software />;
    case 3:
      return <ScienceFiction />;
    case 4:
      return <GreenTea />;
    case 5:
      return <Language />;
    case 6:
      return <Animals />;
    case 7:
      return <Musician />;
    default:
    case 0:
      return <Introduction />;
  }
};

export default function Content() {
  const [view, setView] = useState<number>(0);

  const incrementView = () => {
    setView(v => v === 7 ? 0 : v + 1);
  };

  return (
    <>
      {renderView(view)}
      <Toggle setView={incrementView} />
    </>
  );
}
