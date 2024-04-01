import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons/faBaby";

interface IFamilyProps {

}

export default function Family({ }: IFamilyProps) {
  return (
    <section className="interest__family">
      <FontAwesomeIcon icon={faBaby} size="2xl" /><h2>Husband and Father</h2>
    </section>
  );
}
