import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";

interface ISoftwareProps {

}

export default function Software({ }: ISoftwareProps) {
  return (
    <section className="interest__software">
      <FontAwesomeIcon icon={faLaptopCode} size="2xl" /><h2>Software Developer</h2>
    </section>
  );
}
