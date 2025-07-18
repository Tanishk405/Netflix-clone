// Enhanced scroll function with responsive behavior
function scrollMovies(direction) {
  const container = document.querySelector('.movies-container');
  const movieCard = document.querySelector('.movie-card');
  const cardWidth = movieCard.offsetWidth + 10; // Include gap
  
  // On mobile, scroll by 2 movies at a time
  const scrollAmount = window.innerWidth <= 500 ? cardWidth * 2 : cardWidth * 3;
  
  container.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
}

// Add hover effect to movie cards
document.querySelectorAll('.movie-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    if (window.innerWidth > 800) { // Only on desktop
      card.style.zIndex = '10';
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.zIndex = '1';
  });
});

// Show scroll buttons on touch devices when scrolling
if ('ontouchstart' in window) {
  const carousel = document.querySelector('.movie-carousel');
  const leftBtn = document.querySelector('.scroll-button.left');
  const rightBtn = document.querySelector('.scroll-button.right');
  
  carousel.addEventListener('touchstart', () => {
    leftBtn.style.opacity = '1';
    rightBtn.style.opacity = '1';
    
    // Hide buttons after 2 seconds
    setTimeout(() => {
      leftBtn.style.opacity = '0';
      rightBtn.style.opacity = '0';
    }, 2000);
  });
}





document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-item');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Toggle answer display
            if (this.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});
