import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";

interface IScienceFictionProps {

}

export default function ScienceFiction({ }: IScienceFictionProps) {
  return (
    <article className="view__scifi">
      <FontAwesomeIcon icon={faUserAstronaut} size="2xl" /> Sci-Fi Enthusiast
    </article>
  );
}
