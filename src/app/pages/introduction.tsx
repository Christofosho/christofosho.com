import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons/faUserTie";

interface IIntroductionProps {

}

export default function Introduction({ }: IIntroductionProps) {
  return (
    <article className="view__introduction">
      <FontAwesomeIcon icon={faUserTie} size="2xl" /> Christopher Snow
    </article>
  );
}
