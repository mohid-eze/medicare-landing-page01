
//  Select Element
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('nav-links');

// Select Buttons
const bookBtn = document.querySelector('.btn-primary');
const doctorsBtn = document.querySelector('.btn-secondary');

// Select all features blocks
const features = document.querySelectorAll('.feature')

// footer newsletter form validation (JavaScript)
const from = document.getElementById('newsletter-form');
const emailInput = document.getElementById('newsletter-email')
const message = document.getElementById('newsletter-message')

// Select all feature cards
const featureCards = document.querySelectorAll('.feature');

from.addEventListener("submit", function(e){
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(emailPattern)) {
        message.style.color = "lightgreen";
        message.textContent = "✅ Successfully subscribed!"
        emailInput.value = "";// clear input
    }
    else{
        message.style.color = "red";
        message.textContent = "❌ Please enter a valid email address.";
    }
});


// Add click event
hamburger.addEventListener('click', () =>{
    navlinks.classList.toggle('show');
});

// Scroll to features section
bookBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('.features').scrollIntoView({behavior: "smooth"});
});

// scroll to doctor section
doctorsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.doctors').scrollIntoView({behavior: "smooth"});
});

// Function to check visibility
function showFeaturesOnScroll(){
    features.forEach(feature => {
        const rect = feature.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100 ){
            feature.classList.add('show');
        }
    });
}

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


featureCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    if(index === 0) {
      // Qualified Doctors → Doctors section
      document.querySelector('.doctors').scrollIntoView({behavior: "smooth"});
    } else if(index === 1) {
      // Easy Booking → Hero section
      document.querySelector('.hero').scrollIntoView({behavior: "smooth"});
    } else if(index === 2) {
      // Secure Data → Footer section
      document.querySelector('#footer').scrollIntoView({behavior: "smooth"});
    }
  });
});

