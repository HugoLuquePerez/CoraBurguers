
    const slides = document.querySelectorAll('.hero-slide');
    const sliderButtonsContainer = document.querySelector('.slider-buttons');
    let index = 0;
    let interval;

    slides.forEach((_, i) => {
      const button = document.createElement('div');
      button.classList.add('slider-button');
      if (i === 0) button.classList.add('active');
      button.addEventListener('click', () => moveToSlide(i));
      sliderButtonsContainer.appendChild(button);
    });

    const buttons = document.querySelectorAll('.slider-button');

    function moveToSlide(i) {
      slides[index].classList.remove('active');
      buttons[index].classList.remove('active');
      index = i;
      slides[index].classList.add('active');
      buttons[index].classList.add('active');
      resetInterval();
    }

    function nextSlide() {
      moveToSlide((index + 1) % slides.length);
    }

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);
    }

    resetInterval();
