import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const ICON_SIZE = 20;

export default function Footer() {
  return (
    <footer>
      Christopher Snow &copy; 2024
      <nav>
        <a className="github" href="https://github.com/christofosho" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} height={ICON_SIZE} width={ICON_SIZE} border={false} />
        </a>
      </nav>
    </footer>
  );
};
