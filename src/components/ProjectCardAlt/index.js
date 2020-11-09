import React from 'react';
import './index.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ProjectCardAlternate({
  altText,
  projectImages,
  project,
}) {
  const { title, info } = project;
  return (
    <div className="alt-project-card">
      <Carousel showThumbs={false} autoPlay infinite animationDuration={200}>
        {projectImages.map((image) => (
          <div className="alt-project-card__image-wrapper">
            <img src={image} alt={altText} />
          </div>
        ))}
      </Carousel>
      <div className="overlay">
        <div>
          rukeke
        </div>
      </div>
      {/* <div className="alt-project-card__body d-flex flex-column align-items-center" >
        <h1>{title}</h1>
        <p>{info.length >= 168 ? info.slice(0,168) + '...' : info}</p>
        <button className="visit-btn">Visit Site -></button>
      </div> */}
    </div>
  );
}
