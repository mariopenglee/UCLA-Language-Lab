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

  // highlight current section in navbar
  const sections = document.querySelectorAll('section');
  const navlinks = document.querySelectorAll('header a');
  
  // log all the sections
  console.log(sections);
  console.log(navlinks);
  

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
      if (window.scrollY < window.innerHeight) {
        current = 'home';
      }
    });
    
    navlinks.forEach((a) => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) {
        a.classList.add('active');
      }
    });
  });


});
