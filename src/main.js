import './style.css';

const synopsis = `Tyese is known for being reserved and quiet, but when she accidentally peels back the facade from her family secrets she must rise up to lead her friends and family in a war against an ancient evil. While fighting for the future of all she holds dear, she must also battle ghosts from her past and her changing identity. Not just anyone can be <strong>The Alpha</strong>, and she never expected to be anything but human.`;

const aboutHer = `In 2002, Phebe Yawson volunteered her services to a non-profit in Ghana, West Africa after graduating from DeVry. In 2015, she relocated back to America to raise her family. Now able to pursue her dreams, she spends her days with her husband and kids and her nights with her pen. Phebe is now an award winning author and poet.`;

const reviews = [
  {
    text: `A lot of what I write, despite the particulars of genre, can fall under the general umbrella of the action-adventure story. Even in these there is a cycle of tension and release that plays with the audience’s emotions. Two warriors clash with sword and shield, death just one misstep away. A police officer races through the streets to apprehend a fugitive, but will he catch them? A thief balances carefully on a ledge, the town guards just below him. People talk a lot about pouring your own emotions into your work, but you can play emotions like the strings of a guitar with pacing, tone, mystery, and danger. That’s what I usually do.`,
    author: `Tyese Gibson`
  },
  {
    text: `In 2002, Phebe Yawson volunteered her services to a non-profit in Ghana, West Africa after graduating from DeVry. In 2015, she relocated back to America to raise her family. Now able to pursue her dreams, she spends her days with her husband and kids and her nights with her pen. Phebe is now an award winning author and poet.`,
    author: `Phebe Yawson`
  },
  {
    text: `One of the primary objectives of any kind of storytelling is to invoke an emotional reaction from the audience. The methods and results of this might be painfully clear in some situations, such as a love story or a tragedy. In other situations, such as an action-adventure story, this might not be as clear.`,
    author: `B. K. Bass`
  }
];

const init = () => {
  // Inject Content
  const synopsisEl = document.getElementById('synopsis-content');
  if (synopsisEl) synopsisEl.innerHTML = synopsis;

  const aboutEl = document.getElementById('about-content');
  if (aboutEl) aboutEl.innerHTML = aboutHer;

  // Initialize Reviews
  const reviewContainer = document.querySelector('.review-container');
  if (reviewContainer) {
    reviews.forEach((review, index) => {
      const div = document.createElement('div');
      div.classList.add('review');
      if (index === 0) div.classList.add('active');
      div.innerHTML = `
        <p>"${review.text}"</p>
        <p class="author">- ${review.author}</p>
      `;
      reviewContainer.appendChild(div);
    });

    // Carousel Logic
    let currentReview = 0;
    const reviewEls = document.querySelectorAll('.review');
    
    if (reviewEls.length > 0) {
      setInterval(() => {
        reviewEls[currentReview].classList.remove('active');
        currentReview = (currentReview + 1) % reviewEls.length;
        reviewEls[currentReview].classList.add('active');
      }, 5000);
    }
  }

  // Scroll Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.content-section').forEach(section => {
    observer.observe(section);
  });

  // Dynamic Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

document.addEventListener('DOMContentLoaded', init);
