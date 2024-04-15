import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";

import Card from "../card";

import { MUSICIAN_CONTENT, MUSICIAN_HEADER } from "../../constants";

export default function Musician() {
  return (
    <Card
      backgroundColor="#ffffff"
      className="interest__musician"
      content={<div className="card-content">{MUSICIAN_CONTENT}</div>}
      heading={MUSICIAN_HEADER}
      icon={<FontAwesomeIcon icon={faMusic} size="2xl" />}
    />
  );
}
