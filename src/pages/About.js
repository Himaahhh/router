import React from 'react';

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">About Us</h1>
      <p className="mt-4">
        We are a tech company dedicated to building innovative solutions for the modern world.
      </p>
      <h2 className="text-2xl mt-4">Our Team</h2>
      <ul className="mt-2 list-disc list-inside">
        <li>John Doe - CEO</li>
        <li>Jane Smith - CTO</li>
        <li>Emily Davis - Developer</li>
      </ul>
      <h2 className="text-2xl mt-4">Our Mission</h2>
      <p>
        Our mission is to simplify technology and empower people to achieve more.
      </p>
    </div>
  );
};

export default About;


