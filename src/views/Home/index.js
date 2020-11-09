import React from 'react';
import Header from 'components/Header';
import ProjectCard from 'components/ProjectCard';
import AltProjCard from 'components/ProjectCardAlt';

import { projects } from 'data/workexperience';
import './index.scss';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="about-me home__center">
        <h2>About Me</h2>
        <p>
          A full-stack Software Engineer creating magic with React, React Native
          and Node js. Drifting daily towards python and django. And with a keen
          interest in datascience.
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <h1>Projects</h1>
      </div>
      <div className="project-grid-wrap container">
        {projects.map((project, index) => (
          <AltProjCard
            key={index}
            project={project}
            projectImages={project.projectImages || []}
          />
        ))}
      </div>
    </div>
  );
}
