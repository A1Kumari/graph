import React from 'react';
 
import "./style.css";


const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white">

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
         Read cutting-edge research
          <span className="bg-gradient-text">no matter who you are</span>
        </h1>
        <p className="text-lg mb-6">
          Dive deep into AI-powered summaries, interactive queries, and a revolutionary knowledge graph structure overhauling your understanding of complex topics.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="gradient-button">Try it out</button>
          <button className="gradient-button">Create custom graph</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
