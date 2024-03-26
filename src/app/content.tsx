import React, { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import Introduction from "./pages/introduction";
import Family from "./pages/family";
import Software from "./pages/software";
import ScienceFiction from "./pages/scifi";
import GreenTea from "./pages/greentea";
import Language from "./pages/language";
import Animals from "./pages/animals";
import Musician from "./pages/musician";

import NoScript from "./components/noscript";

export default function Content() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div className="view">
      <NoScript />
      <Parallax ref={parallax} pages={8}>
        <ParallaxLayer offset={0} speed={0} className="animated-div">
          <Introduction />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0} className="animated-div">
          <Family />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0} className="animated-div">
          <Software />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0} className="animated-div">
          <ScienceFiction />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0} className="animated-div">
          <GreenTea />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0} className="animated-div">
          <Language />
        </ParallaxLayer>

        <ParallaxLayer offset={6} speed={0} className="animated-div">
          <Animals />
        </ParallaxLayer>

        <ParallaxLayer offset={7} speed={0} className="animated-div">
          <Musician />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
