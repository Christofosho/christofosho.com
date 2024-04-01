import React from "react";

interface IProjectsProps {

}

export default function Projects({ }: IProjectsProps) {
  return (
    <section className="view__projects">
      <h1 className="projects--heading">Projects</h1>
      <div className="projects">
        <div className="project">
          <a className="project__link" href="https://github.com/Christofosho/trois-game"  target="_blank" rel="noreferrer noopener">
            <h2>Trois: A card game for Android</h2>
          </a>
        </div>
        <div className="project">
        <a className="project__link" href="https://github.com/Christofosho/christofosho.com"  target="_blank" rel="noreferrer noopener">
            <h2>christofosho.com: This webpage</h2>
          </a>
        </div>
        <div className="project">

        </div>
        <div className="project">

        </div>
      </div>
    </section>
  );
}
