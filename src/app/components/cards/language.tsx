import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";

import Card from "../card";

import { LANGUAGE_CONTENT, LANGUAGE_HEADER } from "../../constants";

export default function Language() {
  return (
    <Card
      backgroundColor="#122da1"
      className="interest__language"
      content={<div className="card-content">{LANGUAGE_CONTENT}</div>}
      heading={LANGUAGE_HEADER}
      icon={<FontAwesomeIcon icon={faBook} size="2xl" />}
    />
  );
}
