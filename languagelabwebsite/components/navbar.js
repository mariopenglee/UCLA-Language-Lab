// Create the navbar HTML structure
// put the logo on the left and the links on the right
import './navbar.css';
const navbar = document.createElement('nav');
navbar.innerHTML = `
  <header>
    <a href = "index.html" class="logo">
        <img src=/images/logo.png alt="logo" / width="100px">
    </a>
    <ul>
        <li><a href="index.html">Research</a></li>
        <li><a href="about.html">Participate</a></li>
        <li><a href="about.html">Team</a></li>
        <li><a href="about.html">Join</a></li>
        <li><a href="about.html">Contact</a></li>
    </ul>
  </header>
`;

// Navigation links
const links = navbar.querySelectorAll('a');

const header = navbar.querySelector('header');
// Add an event listener so that scrolling makes the navbar sticky
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Export the navbar for importing in other files
export default navbar;
