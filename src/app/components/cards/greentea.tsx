import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

import Card from "../card";

import { GREENTEA_CONTENT } from "../../constants";

export default function GreenTea() {
  return (
    <Card
      backgroundColor="#c2ffbd"
      className="interest__greentea"
      content={<div className="card-content">{GREENTEA_CONTENT}</div>}
      heading="Green Tea Snob"
      icon={<FontAwesomeIcon icon={faMugSaucer} size="2xl" />}
    />
  );
}
