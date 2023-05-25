// this is the landing page for the website
// it is the first page that the user sees when they visit the website
import './landing.css';
import '../style.css';

const main = document.createElement('main');
main.innerHTML = `
  <section id="home">
    <div class="bg-image"></div>
    <div class="content">
        <div class="intro-text">
            <h2>Welcome to the</h2>
            <div class="lab-name">
                <img src=../images/UCLAlogo.png alt="UCLA Logo" class="ucla-logo">
                <h1>Language Acquisition Lab</h1>
            </div>
        </div>
        <div class="flavor-text">
            <p>We are interested in studying how infants tune into their native language(s) and how children eventually develop the implicit rules of language that allow them to comprehend and produce grammatical sentences. To do this we study infants’, toddlers’, and young children’s language perception and production abilities.
            </p>
        </div>
        <a href="#participate" class="button">
            Participate
        </div>
    </div>
    

  </section>

  <section id="research">
    <h1>Research</h1>
  </section>

  <section id="participate">
    <h1>Participate</h1>
  </section>

  <section id="team">
    <h1>Team</h1>
  </section>

  <section id="join">
    <h1>Join</h1>
  </section>

  <!-- Add more sections as needed -->

  <!-- Include JavaScript file -->
`;



// Export the navbar for importing in other files
export default main;
