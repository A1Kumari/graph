import React, { useState } from 'react';
import TwoColumnLayout from '../generic components/twocoloumn';
import './GraphPage.css'; // Make sure to create the corresponding CSS file
import whiteboard from '../assests/image/whiteboard.png';
import './style.css';
const GraphPage = () => {
  const [graphTitle, setGraphTitle] = useState('');
  const [graphDescription, setGraphDescription] = useState('');

  const handleTitleChange = (e) => {
    setGraphTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setGraphDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., API calls or state updates
  };

  return (
    <TwoColumnLayout
      leftComponent={
        <div className='leftSide'>
          <h3>Graph Configuration</h3>
         
          <div className="left-sidebar">
            <button className="left-sidebar-button">Home</button>
            <button className="left-sidebar-button">All Templates</button>
            <button className="left-sidebar-button">Graff AI</button>
            <hr />
            <button className="left-sidebar-button">Team Templates</button>
            <button className="left-sidebar-button">Brand Assets</button>
            <hr />
            <button className="left-sidebar-button">Inspire Me</button>
          </div>

          

      {/* Graph Templates */}
      <div>
        <label>Graph Templates:</label>
        <label>Graph Title:</label>
        <label>Graph Description:</label>
        
        <label>Graph Settings:</label>
        <label>Upload Papers or Data:</label>
        
        {/* Add logic to display available graph templates */}
      </div>

      {/* Graph Generation Button */}
      <button className="left-sidebar-button">
        Generate Graph
      </button>

      {/* Graph Generation Status */}
      <div>
        <label>Status:</label>
        {/* Display the status of the graph generation process */}
      </div>

      {/* Save or Download Graph */}
      <div>
        <button className="left-sidebar-button">
          Save Graph
        </button>
        <button className="left-sidebar-button">
          Download Graph
        </button>
      </div>

      {/* Graph History or Log */}
     
        </div>
      }
      rightComponent={
        <div className='txt' >
          <h1  className="text-4xl font-bold mb-4"><span  className="bg-gradient-text">Whiteboard</span></h1>
          <p>This is your whiteboard area. You can draw or display content here.</p>
          {/* Add any whiteboard components or content here */}
          
        </div>
       
      }
    >
      {/* Additional content specific to NewGraphPage */}
      {/* Form, buttons, etc. */}
    </TwoColumnLayout>
  );
};

export default GraphPage;
