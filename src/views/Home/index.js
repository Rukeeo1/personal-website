import React from 'react';
import Header from 'components/Header';
import ProjectCard from 'components/ProjectCard';
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
      <div className="home__center">
        <h2>Projects</h2>
        {/* projects comes in here should be a component */}
        {projects.map((project) => {
          return <ProjectCard title={project.title} info={project.info} />;
        })}
      </div>
    </div>
  );
}