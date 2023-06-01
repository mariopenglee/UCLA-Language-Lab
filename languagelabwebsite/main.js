import './style.css';
import navbar from './components/navbar.js';
import main from './components/landing.js';
import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  // Append the navbar to the document
  document.body.append(navbar);

  // Select the container element to display the welcome text
  const container = document.querySelector('#app');

  // Append the main content to the document
  document.body.append(main);

});
