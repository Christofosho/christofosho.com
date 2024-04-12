import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";

import Card from "../components/card";

export default function ScienceFiction() {
  return (
    <Card
      backgroundColor="#040736"
      className="interest__scifi"
      content={
        <div className="card-content">
          I love reading and watching Sci-Fi, and I maintain a list of what I read. Ask me about my favourites!
        </div>
      }
      heading="Sci-Fi Enthusiast"
      icon={<FontAwesomeIcon icon={faUserAstronaut} size="2xl" />}
    />
  );
}
