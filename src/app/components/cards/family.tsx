import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons/faBaby";

import Card from "../card";

import { FAMILY_CONTENT, FAMILY_HEADER } from "../../constants";

export default function Family() {
  return (
    <Card
      backgroundColor="#cbfafa"
      className="interest__family"
      content={<div className="card-content">{FAMILY_CONTENT}</div>}
      heading={FAMILY_HEADER}
      icon={<FontAwesomeIcon icon={faBaby} size="2xl" />}
    />
  );
}
