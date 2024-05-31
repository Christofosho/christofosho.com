import React from "react";
import Image from "next/image";
import me from "../../../public/images/me.webp";

interface IIntroductionProps {

}

export default function Introduction({ }: IIntroductionProps) {
  return (
    <section className="view__introduction">
      <div>
        <h1>Christopher Snow</h1>
        <h2 className="subheading">a.k.a. Chris-to-fo-sho</h2>
      </div>
      <Image
        src={me}
        alt="A portrait of Christopher with a statue of a lion."
        width={272} height={199}
        placeholder="blur"
      />
    </section>
  );
}
