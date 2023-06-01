// this is the landing page for the website
// it is the first page that the user sees when they visit the website
import './landing.css';
import '../style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
        </a>
        </div>
    </div>
    

  </section>

  <section id="research">
      <div class="rowcontainer">
        <div class="row1">
          <div class="text">
            <h1>Research Methods</h1>
            <p>We employ rigorous and time-tested research procedures. With a commitment to excellence, we utilize conventional methods to investigate and explore various aspects of our field. By adhering to established practices, we ensure the integrity and reliability of our findings. Join us as we employ these tried-and-true approaches to unravel the complexities of our research domain and make meaningful contributions to the scientific community.
            </p>
          </div>
          <div class="kid-image">
            <img src=../images/kid.png alt="kid" class="kid">
          </div>
        </div>
        <div class="row2">
          <div class="methods">
            <div class="method-item">
              <h2>Head-turn Preference Procedure</h2>
              <p>Children sit on their parent’s lap in a booth that has three lights; one in front, and two on either side. We use the flashing lights to attract the child’s attention.  Once they are looking to one side, we play a sound sample. The sound sample plays as long as the child is looking at the flashing light.  When they turn away, we attract their attention to the other side of the booth and play another sound file. A video camera records the child’s face to determine how much time her gaze is fixated on the flashing light.  These looking time measures provide information about children’s sensitivity to speech stimuli. This listening task takes about 5 minutes to complete.
              </p>
            </div>
            <div class="method-item">
              <h2>Visual Fixation Procedure</h2>
              <p>Children sit on their parent’s lap or in a highchair in front of a TV monitor on which various images are presented. First, the child’s attention is drawn to the screen with a visual display (e.g. with a flashing red light). Once the child is looking at the TV monitor, another image (e.g. a picture of a boy with five balloons) is presented on the TV monitor accompanied by audio speech stimuli (e.g. Look, he has balloons!). The audio speech stimuli plays as long as the child is looking at the screen.  A video camera records the child’s face to determine how much time her gaze is fixated on combinations of video and audio displays. These looking time measures provide information about how children perceive and comprehend speech. This task usually takes between 5-10 minutes.
              </p>
            </div>  
            <div class="method-item">
              <h2>Comprehension / Production Task</h2>
              <p>Some research that investigates children’s perception and production abilities is conducted in our castle sound booth. In the castle, children are recorded in spontaneous play sessions, play games with an experimenter, watch a short video on a computer. At all times, parents are with their children. These studies take between 15 minutes to complete.
              </p>
            </div>  
            <div class="method-item">
              <h2>Preferential Looking</h2>
              <p>Children sit on their parent’s lap or in a highchair in front of a TV monitor. On the screen, we display two images or videos side-by-side. For instance, one video might show a girl opening a box, while another video might show a girl lifting a box. The videos are accompanied by audio speech stimuli (e.g., “Look, the girl is opening the box!”) A video camera records the child’s eye gaze while the speech stimuli play, and we measure which video the child prefers to look at. This provides information about how children understand sentences they hear. This task usually takes between 5-10 minutes.
              </p>
            </div>  
          </div>
          <a class="button" id="read-more">
            Read More
          </a>    
        </div>


          
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

// Add parallax scrolling effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.bg-image');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});


const methods = main.querySelector('.methods');
const methoditems = methods.querySelectorAll('.method-item');


// create a timeline for each item, the items fly in from the right and fly out to the left. 
// Make sure the item is pinned in the center of the screen while it is visible
methoditems.forEach((item) => {
  if (item === methoditems[0]) {
    // for the first element only animate the exit animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'center center',
        end: 'bottom center',
        scrub: 0.2, // Adjust the scroll speed as desired
        pin: true,
        pinSpacing: true, // Disable automatic adjustment of pin spacing
        markers: true,
        toggleActions: 'restart none none none',
      }
      });
    tl.to(item, { x: '-100vw', duration: 1, scale: 0.5 });
  }
  else if (item === methoditems[methoditems.length - 1]) {
    // for the last element only animate the entry animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'center center',
        end: 'bottom center',
        scrub: 0.2, // Adjust the scroll speed as desired
        pin: true,
        pinSpacing: true, // Disable automatic adjustment of pin spacing
        markers: true,
        toggleActions: 'restart none none none',
      }
      });
    tl.from(item, { x: '100vw', duration: 1, scale: 0.5 });
  }
  else
  {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        // start the animation when the center of the item reaches the center of the screen
        start: 'center center',
        // end the animation after scrolling the height of the viewport (center to center)
        end: 'bottom center',
        scrub: 0.1, // Adjust the scroll speed as desired
        pin: true,
        pinSpacing: false, // Disable automatic adjustment of pin spacing
        markers: true,
        toggleActions: 'restart none none none',
        onUpdate: (self) => {
          if (self.direction === -1) {
            gsap.set(item, { scale: 1.5 });
          }
  
          if (self.direction === 1) {
            gsap.set(item, { scale: 1 });
          }
  
        },
      },
    });
    tl.from(item, { x: '100vw', duration: 1, scale: 0.5 });
    tl.to(item, { x: '-100vw', duration: 1, scale: 0.5 });
  }
  

  
});

// scale the read more button once it's at the center of the screen
const readmore = main.querySelector('#read-more');

gsap.to(readmore, {
  scrollTrigger: {
    trigger: readmore,
    start: 'center center',
    // end after scrolling 500px beyond the start
    end: '+=500',
    scrub: 0.2, // Adjust the scroll speed as desired
    pin: true,
    pinSpacing: true, // Disable automatic adjustment of pin spacing
    markers: true,
    toggleActions: 'restart none none none',
    onEnter: () => gsap.set(readmore, { scale: 1.5 }), // Set the scale to 1.5 when entering the trigger
    onComplete: () => gsap.set(readmore, { scale: 1.5 }), // Set the scale to 1.5 when the animation completes
  },
  scale: 1.5,
});











// Export the navbar for importing in other files
export default main;
