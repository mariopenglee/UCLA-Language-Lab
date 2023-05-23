import './style.css';
import navbar from './components/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  // Append the navbar to the document
  document.body.prepend(navbar);

  // Select the container element to display the welcome text
  const container = document.querySelector('#app');

  // Create and display the welcome text
  const welcomeText = document.createElement('h1');
  welcomeText.textContent = 'Language Acquisition Lab';
  container.appendChild(welcomeText);

  // Your code goes here

});
