import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons/faBaby";

interface IFamilyProps {

}

export default function Family({ }: IFamilyProps) {
  return (
    <article className="view__family">
      <FontAwesomeIcon icon={faBaby} size="2xl" /> Husband and Father
    </article>
  );
}
