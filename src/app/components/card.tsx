import React, { ReactNode, useState } from "react";
import { useSpring, a } from "@react-spring/web";

interface IPageProps {
  backgroundColor: string,
  className: string;
  content: ReactNode;
  heading: string;
  icon: ReactNode;
}

export default function Page({ backgroundColor, className, content, heading, icon }: IPageProps) {
  const [flipped, set] = useState<boolean>(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <section className={className} onClick={() => set(state => !state)}>
      <a.div className="card-front" style={{ opacity: opacity.to(o => 1 - o), transform, backgroundColor }}>
        {icon}{heading}
      </a.div>
      <a.div className="card-back" style={{ opacity, transform, rotateX: "180deg", backgroundColor }}>
        {content}
      </a.div>
    </section>
  );
}
