// navbar.js

// Create the navbar HTML structure
// put the logo on the left and the links on the right
const navbar = document.createElement('nav');
navbar.innerHTML = `
  <div class="navbar">
    <div class="navbar__logo"> 
        <a href="index.html">
            <img src=/images/logo.png alt="logo" / width="100px">
        </a>
    </div>
    <div class="navbar__links">
        <a href="index.html">Research</a>
        <a href="about.html">Participate</a>
        <a href="about.html">Team</a>
        <a href="about.html">Join</a>
        <a href="about.html">Contact</a>
    </div>
  </div>
`;

// Navigation links
const links = navbar.querySelectorAll('a');

// Export the navbar for importing in other files
export default navbar;
