import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

interface IGreenTeaProps {

}

export default function GreenTea({ }: IGreenTeaProps) {
  return (
    <article className="view__greentea">
      <FontAwesomeIcon icon={faMugSaucer} size="2xl" /> Green Tea Snob
    </article>
  );
}
