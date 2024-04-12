import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons/faBaby";

import Card from "../components/card";

export default function Family() {
  return (
    <Card
      backgroundColor="#cbfafa"
      className="interest__family"
      content={
        <div className="card-content">
          I live with my wonderful wife and son in Ontario, Canada.
        </div>
      }
      heading="Husband and Father"
      icon={<FontAwesomeIcon icon={faBaby} size="2xl" />}
    />
  );
}
