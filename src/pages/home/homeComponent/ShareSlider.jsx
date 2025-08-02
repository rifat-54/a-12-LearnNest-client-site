import React from 'react';
import { Link } from 'react-router-dom';

const ShareSlider = ({image,title,text}) => {
    return (
        <div
  className="hero h-[60vh]"
  style={{
    backgroundImage: `url(${image})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-4xl">
      <h1 className="mb-5 text-3xl font-semibold">{title}</h1>
      <p className="mb-5">
        {text}
      </p>
      <Link to={'/all-classes'} className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default ShareSlider;