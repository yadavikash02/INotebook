import React from 'react';
// import './DynamicTextImage.css'; // Import the CSS file for styling
import logo from './Images/notepad-coffee.jpg'
const DynamicTextImage = () => {
  return (
    <div class="card">
  <img src={logo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h1 class="card-title">INotebook</h1>
    <p class="card-text">The iNotebook website is a dynamic web application that allows users to create, organize, and manage their notes in a convenient and user-friendly manner. It leverages a combination of server-side and client-side technologies to provide a seamless experience.</p>
  </div>
  <div class="card-body">
    <h3 class="card-title">Features</h3>
    <p class="card-text">User Registration and Authentication: Users can create accounts, log in, and authenticate themselves to access their personalized notebooks.
Note Creation and Organization: Users can create new notes, add titles, content, and organize them into different categories or folders.
Note Editing and Deletion: Users have the ability to edit the content of their notes, update titles, and delete unwanted notes.
Search Functionality: The website includes a search feature that allows users to search for specific notes based on keywords or titles, making it easier to find relevant information.
Rich Text Editing: Users can format their notes using rich text editing capabilities, allowing them to add styling, headings, lists, and other formatting options to their content.</p>
  </div>
  <h3>Summary</h3>
  <p>Overall, the iNotebook website provides a powerful and intuitive platform for users to create, manage, and organize their notes efficiently. With its user-friendly interface, responsive design, and the integration of various technologies, it offers a seamless experience for note-taking and organization.</p>
  
</div>
  );
};

export default DynamicTextImage;
