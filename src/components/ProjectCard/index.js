import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function index({ title, info, projectImages }) {
  return (
    <div className="project-card">
      <span className="project-card__title">{title}:</span> {info}
      <div className="mt-4">
        <Carousel showThumbs={false}>
          {projectImages?.map((image, index) => (
            <div className="project-card__carousel-item" key={index}>
              <img src={image} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
