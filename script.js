(function () {
    var square = document.querySelector('.fact-list');
    var imageSquare = document.querySelector('.section-img-tiger')
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('square-animation');
        }

      });
    });
  
    observer.observe(square);
    observer.observe(imageSquare);
  })();

  (function Scroll() {
    var footerImageScroll = document.querySelector('.footer-image');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('footer-square-animation');
        }

      });
    });
  
    observer.observe(footerImageScroll);
  })();

  (function scrollButton() {
    var buttonScroll = document.querySelector('.section-btn');
    var buttonMainScroll = document.querySelector('.main-btn')
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('btn-square-animation');
        }

      });
    });
  
    observer.observe(buttonScroll);
    observer.observe(buttonMainScroll);
  })();