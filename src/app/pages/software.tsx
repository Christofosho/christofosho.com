import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";

import Card from "../components/card";

export default function Software() {
  return (
    <Card
      backgroundColor="#efd4ff"
      className="interest__software"
      content={
        <div  className="card-content">
          I love solving software problems and architecting solutions. I enjoy working in JavaScript, Python, and C#!
        </div>
      }
      heading="Software Developer"
      icon={<FontAwesomeIcon icon={faLaptopCode} size="2xl" />}
    />
  );
}
