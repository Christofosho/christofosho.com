import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons/faPaw";

interface IAnimalsProps {

}

export default function Animals({ }: IAnimalsProps) {
  return (
    <article className="view__animals">
      <FontAwesomeIcon icon={faPaw} size="2xl" /> Animal Lover
    </article>
  );
}
