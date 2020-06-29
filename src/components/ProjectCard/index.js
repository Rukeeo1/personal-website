import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function index({ title, info, projectImages, utilizedTools }) {
  return (
    <div className="project-card mt-4">
      <span className="project-card__title">{title} :</span> {info}
      <div className="mt-3">
        <Carousel showThumbs={false}>
          {projectImages?.map((image, index) => (
            <div className="project-card__carousel-item" key={index}>
              <img src={image} />
            </div>
          ))}
        </Carousel>
      </div>
      <p>
      <span className="mt-2" style={{ fontSize: '14px', fontWeight: 'bold' }}>
        Tools :  
      </span>
        {' ' + utilizedTools}
      </p>
    </div>
  );
}
