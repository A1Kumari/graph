import React from 'react';
import './twocolumn.css'; // Make sure to create the corresponding CSS file

const TwoColumnLayout = ({ leftComponent, rightComponent }) => {
  return (
    <div className="two-column-layout">
      <div className="left-column">{leftComponent}</div>
      <div className="right-column">{rightComponent}</div>
    </div>
  );
};

export default TwoColumnLayout;
