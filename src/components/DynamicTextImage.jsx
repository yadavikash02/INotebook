import React from 'react';
// import './DynamicTextImage.css'; // Import the CSS file for styling
import logo from './Images/notepad-coffee.jpg'
const DynamicTextImage = () => {
  return (
    <div className="containerrr">
      <img src={logo} alt="Background" className="image" />
      <div className="text-containerr">
        <h1 className="moving-text">WELCOME TO INOTEBOOK</h1>
      </div>
    </div>
  );
};

export default DynamicTextImage;
