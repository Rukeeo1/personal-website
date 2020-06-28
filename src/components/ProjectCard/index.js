import React from 'react';

export default function index({ title, info }) {
  return (
    <div className="project-card">
      <span className="project-card__title">{title}:</span> {info}
    </div>
  );
}
