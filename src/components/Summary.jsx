import React from 'react';
import './style.css';

const Summary = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white">
      
      {/* Section 2: Executive Summary */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-8 rounded-lg text-center">
         {/* Additional Content */}
       <div className="mt-8">
       <h1 className="text-4xl font-bold mb-4">
       Dealing with Uncertainties during the <span className="bg-gradient-text">COVID-19</span> Pandemic?
        </h1>
         <p className="text-lg">
            In the face of the COVID-19 pandemic, agile software startups have navigated through uncertainties by adopting flexible work models, leveraging digital collaboration tools, and prioritizing employee well-being. The ability to quickly adapt to changing market dynamics and customer needs has been crucial in sustaining business operations.
          </p>
          <p className="text-lg mt-4">
            This adaptive approach has enabled startups to reassess priorities, allocate resources effectively, and continue delivering value to clients. Regular communication, remote collaboration, and agile project management methodologies have played pivotal roles in maintaining productivity and fostering innovation.
          </p>
        </div>
        <hr/>
      
        
        <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula non urna posuere placerat. Proin at metus et justo eleifend ultrices. Vivamus feugiat, sem ac tristique ultrices, justo felis eleifend sapien.
        </p>
        <p className="text-lg mt-4">
          Fusce eget imperdiet odio. Vestibulum luctus nisi vel lectus fermentum, vitae lacinia dui volutpat. Nullam efficitur quam eu purus suscipit, nec bibendum turpis ullamcorper.
        </p>
      </div>
    </div>
  );
};

export default Summary;
