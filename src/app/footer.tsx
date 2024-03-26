import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default function Footer() {
  return (
    <footer>
      Christopher Snow &copy; 2024
      <nav>
        <a className="github" href="https://github.com/christofosho" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" color="black" />
        </a>
        <a className="linkedin" href="https://linkedin.com/christopher-snow-0" target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faLinkedin} size="lg" color="black" />
        </a>
      </nav>
    </footer>
  );
};
