import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";

import Card from "../card";

export default function Language() {
  return (
    <Card
      backgroundColor="#122da1"
      className="interest__language"
      content={
        <div className="card-content">
          Je passe un peu de temps en apprendre la langue français. C&apos;est très agréable !
        </div>
      }
      heading="Apprenant de français"
      icon={<FontAwesomeIcon icon={faBook} size="2xl" />}
    />
  );
}
