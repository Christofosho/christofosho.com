import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface IToggleProps {
  setView: () => void;
}

export default function Toggle({ setView }: IToggleProps) {
  return (
    <button onClick={setView} className="toggle-button">
      <FontAwesomeIcon icon={faChevronDown} size="3x" />
    </button>
  );
}
