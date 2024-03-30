import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";

interface ILanguageProps {

}

export default function Language({ }: ILanguageProps) {
  return (
    <article className="view__language">
      <FontAwesomeIcon icon={faBook} size="2xl" /><h2>Apprenant de français</h2>
    </article>
  );
}
