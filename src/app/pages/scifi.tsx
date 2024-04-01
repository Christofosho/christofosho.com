import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";

interface IScienceFictionProps {

}

export default function ScienceFiction({ }: IScienceFictionProps) {
  return (
    <section className="interest__scifi">
      <FontAwesomeIcon icon={faUserAstronaut} size="2xl" /><h2>Sci-Fi Enthusiast</h2>
    </section>
  );
}
