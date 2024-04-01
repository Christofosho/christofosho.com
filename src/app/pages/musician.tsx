import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IMusicianProps {

}

export default function Musician({ }: IMusicianProps) {
  return (
    <section className="interest__musician">
      <FontAwesomeIcon icon={faMusic} size="2xl" /><h2>Musician</h2>
    </section>
  );
}
