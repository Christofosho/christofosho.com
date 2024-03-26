import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons/faUserTie";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faBaby } from "@fortawesome/free-solid-svg-icons/faBaby";
import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { faPaw } from "@fortawesome/free-solid-svg-icons/faPaw";

export default function NoScript() {
  return (
    <noscript>
      <p>What? You don&apos;t like my scripts?</p>
      <p>Then CSS it is!</p>
      <div className="icons">
        <div>
          <FontAwesomeIcon icon={faUserTie} size="sm" />
          <span>Hi, I&apos;m Chris.</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faBaby} size="sm" />
          <span>I love my wonderful family!</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faBook} size="sm" />
          <span>J&apos;aime bien parler français !</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faMugSaucer} size="sm" />
          <span>I drink far too much green tea.</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faMusic} size="sm" />
          <span>I play instruments and love jazz!</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faUserAstronaut} size="sm" />
          <span>I consume a lot of Science Fiction...</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faLaptopCode} size="sm" />
          <span>I write code for work and fun.</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPaw} size="sm" />
          <span>I absolutely adore animals!!</span>
        </div>
      </div>
    </noscript>
  );
}
