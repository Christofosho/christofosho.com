import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";

import Card from "../card";

import { SOFTWARE_CONTENT, SOFTWARE_HEADER } from "../../constants";

export default function Software() {
  return (
    <Card
      backgroundColor="#efd4ff"
      className="interest interest__software"
      content={<div  className="card-content">{SOFTWARE_CONTENT}</div>}
      heading={SOFTWARE_HEADER}
      icon={<FontAwesomeIcon icon={faLaptopCode} size="2xl" />}
    />
  );
}
