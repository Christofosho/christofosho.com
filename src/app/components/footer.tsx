import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";

export default function Footer() {
  return (
    <footer>
      <small>Christopher Snow &copy; 2024</small>
      <nav>
        <a className="github" href="https://github.com/christofosho" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" color="black" />
        </a>
        <a className="linkedin" href="https://linkedin.com/in/christopher-snow-0" target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faLinkedin} size="lg" color="black" />
        </a>
        <a className="leetcode" href="https://leetcode.com/u/christofosho" target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faCode} size="lg" color="black" />
        </a>
      </nav>
    </footer>
  );
};
