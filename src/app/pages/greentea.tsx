import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

interface IGreenTeaProps {

}

export default function GreenTea({ }: IGreenTeaProps) {
  return (
    <section className="interest__greentea">
      <FontAwesomeIcon icon={faMugSaucer} size="2xl" /><h2>Green Tea Snob</h2>
    </section>
  );
}
