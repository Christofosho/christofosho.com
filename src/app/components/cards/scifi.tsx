import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";

import Card from "../card";

import { SCIFI_CONTENT } from "../../constants";

export default function ScienceFiction() {
  return (
    <Card
      backgroundColor="#040736"
      className="interest__scifi"
      content={<div className="card-content">{SCIFI_CONTENT}</div>}
      heading="Sci-Fi Enthusiast"
      icon={<FontAwesomeIcon icon={faUserAstronaut} size="2xl" />}
    />
  );
}
