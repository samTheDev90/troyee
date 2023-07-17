// Helper function to handle intersection changes
function handleIntersection(entries) {
  entries.forEach(function (entry) {
    var target = entry.target;
    var isIntersecting = entry.isIntersecting;

    if (isIntersecting) {
      target.classList.add('fade-in');
      target.classList.remove('fade-out');
    } else {
      target.classList.remove('fade-in');
      target.classList.add('fade-out');
    }
  });
}

// Create an intersection observer instance
var observer = new IntersectionObserver(handleIntersection, {
  rootMargin: '0px',
  threshold: 0.2, // Adjust the threshold as needed
});

// Get fade-left and fade-right elements
var fadeLeftElements = document.querySelectorAll('.fade-left');
var fadeRightElements = document.querySelectorAll('.fade-right');

// Observe the fade-left elements
fadeLeftElements.forEach(function (element) {
  observer.observe(element);
});

// Observe the fade-right elements
fadeRightElements.forEach(function (element) {
  observer.observe(element);
});