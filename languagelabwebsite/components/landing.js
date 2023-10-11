// this is the landing page for the website
// it is the first page that the user sees when they visit the website
import './landing.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import principal_investigators from '../data/principal_investigators/info.json';
import graduate_students from '../data/graduate_students/info.json';
import undergraduate_students from '../data/undergrads/info.json';
import lab_manager from '../data/lab_manager/info.json';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.registerPlugin(MotionPathPlugin);



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
            <p>
            Here at the UCLA Language Acquisition Lab, we are continuously trying to discover new aspects of how infants and toddlers acquire language. Our studies include observing how children react to certain sound and language patterns, telling us more about what language processes they have or have not already acquired. We hope to determine how children develop the implicit rules of language that allow them to understand and express ideas through grammatical sentences. Our goal is to further solve the complexity of language acquisition while providing families with a great experience participating at our lab!
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
        <div class="row3">
          <div class="publications">
            <h2>Publications</h2>
            <div class="publication-item">
              <h3>Infants’ sensitivity to phonotactic patterns in novel words</h3>
              <p>By: J. Graf Estes, J. Gluckman, &amp; M. Endress</p>
              <p>Published in <i>Infancy</i> (2016)</p>
            </div>
            <div class="publication-item">
              <h3>Infants’ sensitivity to phonotactic patterns in novel words</h3>
              <p>By: J. Graf Estes, J. Gluckman, &amp; M. Endress</p>
              <p>Published in <i>Infancy</i> (2016)</p>
            </div>
            <a class="button" id="full-list-publications">
              Full List of Publications
            </a>
          </div>
          <div class="presentations">
            <h2>Presentations</h2>
            <div class="presentation-item">
              <h3>Infants’ sensitivity to phonotactic patterns in novel words</h3>
              <p>By: J. Graf Estes, J. Gluckman, &amp; M. Endress</p>
              <p>Presented at the 2016 Biennial Meeting of the Society for Research in Child Development</p>
            </div>
            <a class="button" id="full-list-presentations">
              Full List of Presentations
            </a>
          </div>
        </div>
  </section>

  <section id="participate">
    
    <div class="rowcontainer">
      <div class="row1">
        <div class="left">
          <h1>Participate</h1>
          <p>
            Our research is made possible by the participation of families in the community. 
            <br>
            Eligibility: We are looking for children between the ages of 4 months to 28 months to participate in our studies.
          </p>
        </div>
        <div class="right">
          <h2> Location </h2>
          <p> 
            Our lab is located in the Linguistics Department at UCLA in Westwood, Los Angeles. More detailed information about parking, transportation, and how to get here will be provided when you schedule a visit.
          </p>
        </div>
      </div>
     
      <div class="row2">
        <div class="ball">
        </div>
        <div class=step-item>
          <h2>Step 1: Arrival</h2>
          <p> 
          Upon parking, please call us at <a href="tel:323-364-8845"> (323) 364-8845 </a> and one of our lab members will meet you at the parking lot and walk you to our lab.
          </p>
        </div>
        <div class=step-item>
          <h2>Step 2: Consent</h2>
          <p>
          Once you arrive at our lab, we will ask you to read and sign a consent form. This form will explain the purpose of our research and what your participation will entail.
          </p>
        </div>
        <div class=step-item>
          <h2>Step 3: Play</h2>
          <p>
          After you sign the consent form, we will take you to our playroom where your child will play with one of our friendly lab members. During this time, you are welcome to stay in the playroom and watch your child play, or you can wait in our waiting room.
          </p>
        </div>
        <div class=step-item>
          <h2>Step 4: Prize!</h2>
          <p>
          After your child finishes playing, we will give them a prize for participating in our study. We will also give you a parking validation ticket so you can park for free in Parking Lot 5.
          </p>
        </div>
      </div>
      <div class="row3">
        <div class="left">
          <h2>Sign Up for a Study</h2>
          <p>
          If you are interested in participating, please contact us at <a href="mailto:uclalanguagelab@gmail.com"> uclalanguagelab@gmail.com </a> or call us at <a href="tel:323-364-8845"> (323) 364-8845 </a>, if we don’t pick up, please leave us a voicemail and our team will get back to you as soon as possible.
          We look forward to hearing from you!
          </p>
        </div>
        <div class="right">
          <a class="button" id="call">
            📞 Call
          </a>
          <a class="button" id="email">
            ✉️ Email
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="team">
    <div class="rowcontainer">
      <div class="row1">
        <h1>Our Team</h1>
        <p>
          Our lab is made up of a diverse group of researchers, including undergraduate students, graduate students, and postdoctoral scholars. We are all passionate about language development and are excited to share our research with you!
        </p>
      </div>
      <h2>Principal Investigators</h2>
      <div class="row2">
      </div>

      <h2>Lab Manager</h2>
      <div class="row4">
      </div>

      <h2>Graduate Students</h2>
      <div class="row3">
      </div>

      <h2>Undergraduate Students</h2>
      <div class="row5">
      </div>
    </div>
        
  </section>

  <section id="join">
    <h1>Join</h1>
  </section>

  <!-- Add more sections as needed -->

  <!-- Include JavaScript file -->
`;

// Add the principal investigators to the page
const team = main.querySelector('#team');
const row2 = team.querySelector('.row2');
const row3 = team.querySelector('.row3');

// Add the principal investigators to the page
principal_investigators.forEach(function(investigator) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="investigator">
      <div class="portrait">
        <img src=${investigator.image} alt=${investigator.name} class="image">
        
      </div>
      <div class="info">
        <h3>${investigator.name}</h3>
        <p>${investigator.title}</p>
        <ul>
          ${investigator.interests.map(interests => `<li>${interests}</li>`).join('')}
        </ul>
        <a href=${investigator.website} class="button">Learn More</a>
       
      </div>
    </div>
  `;
  row2.append(card);
});

const investigators = row2.querySelectorAll('.investigator');

gsap.from(investigators, {
  scrollTrigger: {
    trigger: row2,
    start: 'top 80%',
    end: 'bottom 80%',
    toggleActions: 'restart none none none',
  },
  y: 100,
  opacity: 0,
  duration: 1,
});

// hovering on an investigator makes it pop
investigators.forEach(function(investigator) {

  investigator.addEventListener('mouseenter', function() {

    gsap.to(investigator, {
      duration: 0.1,
      scale: 1.1,
      ease: 'power1.inOut',
    });
  });

  investigator.addEventListener('mouseleave', function() {
    gsap.to(investigator, {
      duration: 0.1,
      scale: 1,
      ease: 'power1.inOut',
    });
  });
});

// Add the lab manager
const row4 = team.querySelector('.row4');
const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = ` 
<div class="lab-manager">
<div class="portrait">
  <img src=${lab_manager.image} alt=${lab_manager.name} class="image">
  
</div>
<div class="info">
  <h3>${lab_manager.name}</h3>
  <ul>
    ${lab_manager.description}
  </ul>
  <a href=${lab_manager.website} class="button">Learn More</a>
 
</div>
</div>
`;
row4.append(card);


// Add the graduate students to the page
graduate_students.forEach(function(student) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="student">
      <div class="card--front">
        <img src=${student.image} alt=${student.name} class="image">
      </div>
      <div class="card--hover">
        <p>${student.description}</p>
      </div>
      <div class="info--front">
        <h3>${student.name}</h3>
      </div>
      <div class="info--hover">
        <a href=${student.website}>
          <h3>Click to Learn More</h3>
        </a>
      </div>
      
    </div>
  `;
  row3.append(card);
});

// Make the cards pop and slightly rotate when hovering
const students = row3.querySelectorAll('.student');
students.forEach(function(student) {
  student.addEventListener('mouseenter', function() {
    gsap.to(student, {
      duration: 0.5,
      scale: 1.1,
      rotation: -3,
      ease: 'power1.inOut',
    });
  });

  student.addEventListener('mouseleave', function() {
    gsap.to(student, {
      duration: 0.5,
      scale: 1,
      rotation: 0,
      ease: 'power1.inOut',
    });
  });

});


// Add the undergraduate students to the page
const row5 = team.querySelector('.row5');
undergraduate_students.forEach(function(student) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="student">
      <div class="card--front">
        <img src=${student.image} alt=${student.name} class="image">
      </div>
      <div class="card--hover">
        <p>${student.description}</p>
      </div>
      <div class="info--front">
        <h3>${student.name}</h3>
      </div>
      
    </div>
  `;
  row5.append(card);
});

// Make the cards bigger when hovering

const undergrads = row5.querySelectorAll('.student');
undergrads.forEach(function(undergrad) {
  undergrad.addEventListener('mouseenter', function() {
    gsap.to(undergrad, {
      duration: 0.5,
      scale: 1.2,
      ease: 'power1.inOut',
    });
  });

  undergrad.addEventListener('mouseleave', function() {
    gsap.to(undergrad, {
      duration: 0.5,
      scale: 1,
      ease: 'power1.inOut',
    });
  });

});















// Add parallax scrolling effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.bg-image');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});


// Make the intro text fade in as soon as the page loads
const content = main.querySelector('.content');

gsap.from(content, {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scale: 0.5,
});

const methods = main.querySelector('.methods');
const methoditems = methods.querySelectorAll('.method-item');


// methods fly in from the right
gsap.from(methoditems, {
  scrollTrigger: {
    trigger: methods,
    scrub: true,
    start: 'top 80%',
    end: 'bottom 80%',
    toggleActions: 'restart none none none',
  },
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

// publications fly in from the left
const publications = main.querySelector('.publications');
const publicationitems = publications.querySelectorAll('.publication-item');

gsap.from(publicationitems, {
  scrollTrigger: {
    trigger: publications,
    scrub: true,
    start: 'top 80%',
    end: 'bottom 80%',
    toggleActions: 'restart none none none',
  },
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

// presentations fly in from the right
const presentations = main.querySelector('.presentations');
const presentationitems = presentations.querySelectorAll('.presentation-item');

gsap.from(presentationitems, {
  scrollTrigger: {
    trigger: presentations,
    scrub: true,
    start: 'top 80%',
    end: 'bottom 80%',
    toggleActions: 'restart none none none',
  },
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});


// participate section
// wiggle call and email buttons
const participate = main.querySelector('#participate');
const call = participate.querySelector('#call');
const email = participate.querySelector('#email');


call.addEventListener('mouseenter', function() {
  gsap.to(call, {
    duration: 0.1,
    rotation: 5,
    ease: 'power1.inOut',
  });
});

email.addEventListener('mouseenter', function() {
  gsap.to(email, {
    duration: 0.1,
    rotation: 5,
    ease: 'power1.inOut',
  });
});

call.addEventListener('mouseleave', function() {
  gsap.to(call, {
    duration: 0.1,
    rotation: 0,
    ease: 'power1.inOut',
  });
});

email.addEventListener('mouseleave', function() {
  gsap.to(email, {
    duration: 0.1,
    rotation: 0,
    ease: 'power1.inOut',
  });
});



// airplane flies from step to step using motion path
const stepitems = main.querySelectorAll('.step-item');
const airplane = main.querySelector('.ball');
const pariticpate_row2 = main.querySelector('#participate .row2');

// animate the airplane so it flies in
gsap.from(airplane, {
  scrollTrigger: {
    trigger: airplane,
    start: 'top 80%',
    end: 'bottom 80%',
    markers: true,
    toggleActions: 'restart none reverse none',
  },
  opacity: 0,
  duration: 1,
  ease: 'power1.inOut',
});


// go from step to step

gsap.to(airplane, {
  scrollTrigger: {
    trigger: pariticpate_row2,
    scrub: true,
    start: 'top 50%',
    end: 'bottom 80%',
    markers: true,
    toggleActions: 'restart none none none',
  },
  motionPath: {
    path: [
      {x: 200, y: 100, scale: 1.2, rotate: 180},
      {x: -200, y: 500, scale: 1.4, rotate: 360},
      {x: 200, y: 800, scale: 1.6, rotate: 540},
      {x: -200, y: 1100,  scale: 1.8, rotate: 720},
    ],
  },
  duration: 4,
  ease: 'power1.inOut',
});

// animate each step item, pop and fade in
gsap.from(stepitems, {
  scrollTrigger: {
    trigger: pariticpate_row2,
    scrub: true,
    start: 'top 50%',
    end: 'bottom 80%',
    markers: true,
    toggleActions: 'restart none none none',
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

// hovering on a setp item makes it pop
var originalScale = 1;
stepitems.forEach(function(item) {
  
  item.addEventListener('mouseenter', function() {
    originalScale = gsap.getProperty(item, 'scale');
    gsap.to(item, {
      duration: 0.1,
      scale: 1.1,
      ease: 'power1.inOut',
    });
  });

  item.addEventListener('mouseleave', function() {
    gsap.to(item, {
      duration: 0.1,
      scale: originalScale,
      ease: 'power1.inOut',
    });
  });
});

// the call and email buttons wiggle when shown, fade in from big to small
const callbutton = main.querySelector('#call');
const emailbutton = main.querySelector('#email');

gsap.from(callbutton, {
  scrollTrigger: {
    trigger: callbutton,
    start: 'top 80%',
    end: 'bottom 80%',
    scrub: true,
    toggleActions: 'restart none none none',
  },
  scale: 1.5,
  rotation: 10,
  duration: 1,
  opacity: 0,
  ease: 'power1.inOut',
});

gsap.from(emailbutton, {
  scrollTrigger: {
    trigger: emailbutton,
    start: 'top 80%',
    end: 'bottom 80%',
    scrub: true,
    toggleActions: 'restart none none none',
  },
  scale: 1.5,
  rotation: 10,
  duration: 1,
  opacity: 0,
  ease: 'power1.inOut',
});






// Export the navbar for importing in other files
export default main;
