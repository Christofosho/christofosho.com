import React, { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import Introduction from "./views/introduction";
import About from "./views/about";
// import Projects from "./views/projects";

import NoScript from "./components/noscript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

export default function Content() {
  const parallax = useRef<IParallax>(null!);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  };
  return (
    <div className="view">
      <NoScript />
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={0} speed={0} className="animated-div">
          <Introduction />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0} className="animated-div" onClick={() => scroll(1)}>
          <div className="scrolldown-text">Scroll for more about me!</div>
          <FontAwesomeIcon icon={faChevronDown} size="xl" className="scrolldown" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0} className="animated-div">
          <About />
        </ParallaxLayer>

        {/* <ParallaxLayer offset={2} speed={0} className="animated-div">
          <Projects />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}
