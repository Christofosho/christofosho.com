import React, { CSSProperties, useEffect, useState } from "react";
import { useTransition, animated, AnimatedProps, useSpringRef } from "@react-spring/web";

import Introduction from "./pages/introduction";
import Family from "./pages/family";
import Software from "./pages/software";
import ScienceFiction from "./pages/scifi";
import GreenTea from "./pages/greentea";
import Language from "./pages/language";
import Animals from "./pages/animals";
import Musician from "./pages/musician";
import Toggle from "./toggle";

const views: (
  (props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement
)[] = [
  ({ style }) => (
    <animated.div style={{ ...style, position: "absolute" }}>
      <Family />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, position: "absolute" }}>
      <Software />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, position: "absolute" }}>
      <ScienceFiction />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, position: "absolute" }}>
      <GreenTea />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, position: "absolute" }}>
      <Language />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, position: "absolute" }}>
      <Animals />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, position: "absolute" }}>
      <Musician />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, position: "absolute" }}>
      <Introduction />
    </animated.div>
  ),
];

export default function Content() {
  const [view, setView] = useState<number>(0);
  const transitionRef = useSpringRef();
  const transitions = useTransition(view, {
    ref: transitionRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0%, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -50%, 0)" },
  });

  useEffect(() => {
    transitionRef.start()
  }, [view])

  const incrementView = () => {
    setView(v => v === 7 ? 0 : v + 1);
  };

  return (
    <>
      <div className="view">
      {transitions((style, i) => {
        const View = views[i];
        return <View style={style} />;
      })}
      </div>
      <Toggle setView={incrementView} />
    </>
  );
}
