import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Card from "../components/card";

export default function Musician() {
  return (
    <Card
      backgroundColor="#ffffff"
      className="interest__musician"
      content={
        <div className="card-content">
          I have a bachelors in percussion, and was a music teacher for 4 years. I love playing and listening to music!
        </div>
      }
      heading="Musician"
      icon={<FontAwesomeIcon icon={faMusic} size="2xl" />}
    />
  );
}
