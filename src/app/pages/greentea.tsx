import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

import Card from "../components/card";

export default function GreenTea() {
  return (
    <Card
      backgroundColor="#c2ffbd"
      className="interest__greentea"
      content={
        <div className="card-content">
          I love Japanese green teas! I drink sencha daily and gyokuro often. It&apos;s fun to try new teas and steeping combinations.
        </div>
      }
      heading="Green Tea Snob"
      icon={<FontAwesomeIcon icon={faMugSaucer} size="2xl" />}
    />
  );
}
