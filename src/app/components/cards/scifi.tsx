import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";

import Card from "../card";

import { SCIFI_CONTENT, SCIFI_HEADER } from "../../constants";

export default function ScienceFiction() {
  return (
    <Card
      backgroundColor="#040736"
      className="interest interest__scifi"
      content={<div className="card-content">{SCIFI_CONTENT}</div>}
      heading={SCIFI_HEADER}
      icon={<FontAwesomeIcon icon={faUserAstronaut} size="2xl" />}
    />
  );
}
